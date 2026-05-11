import torch
import torch.nn.functional as F
from transformers import AutoModelForCausalLM, AutoTokenizer
import time
import os

# ==========================================
# 配置部分
# ==========================================
# 升级为 3B 模型，性能显著强于 1.5B，且在 12GB 显存下运行轻松 (FP16 约占 6GB)
# 如果想尝试 7B，可以改为 "Qwen/Qwen2.5-7B-Instruct" (需要约 14GB 显存，或使用 4-bit 量化)
MODEL_NAME = "Qwen/Qwen2.5-3B-Instruct" 
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

class HandCraftedLLM:
    def __init__(self, model_name=MODEL_NAME, device=DEVICE):
        print(f"正在加载模型: {model_name} 到 {device}...")
        print("如果是第一次运行，会自动从 HuggingFace 下载模型权重，请耐心等待...")
        
        # 加载分词器 (Tokenizer)
        self.tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)
        
        # 加载模型 (Model)
        # 自动处理设备映射
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name, 
            torch_dtype=torch.float16, 
            device_map="auto", # 自动分配，支持多卡或 CPU/GPU 混合
            trust_remote_code=True
        )
        self.device = self.model.device # 获取模型实际所在的设备
        self.model.eval() 
        print("模型加载完成。")

    def format_chat_prompt(self, messages):
        """
        手动处理对话模板 (Chat Template)。
        LLM 实际上只是在做"文字接龙"。为了让它理解对话，我们需要把对话历史
        格式化成特定的字符串格式（例如 ChatML 格式）。
        """
        # 这里我们调用 tokenizer 的模板功能，但只生成字符串 (tokenize=False)
        # 这样我们可以直观地看到喂给模型的原始字符串长什么样
        prompt_str = self.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        return prompt_str

    def sample_next_token(self, logits, temperature=1.0, top_k=50, top_p=0.9):
        """
        【核心代码】手搓采样策略：从模型输出的 Logits 中选择下一个 token。
        
        参数:
        - logits: 模型最后一层的输出，代表词表中每个词的得分 (未归一化)
        - temperature: 温度。控制随机性。T>1 增加随机性，T<1 增加确定性。
        - top_k: 仅保留概率最高的 K 个词。
        - top_p: (Nucleus Sampling) 仅保留累积概率达到 P 的最小词集合。
        """
        # 1. 取出最后一个 token 的 logits
        # logits shape: [batch_size, seq_len, vocab_size] -> 我们只关心最后一个时间步
        # result shape: [batch_size, vocab_size]
        logits = logits[:, -1, :] 
        
        # 2. 应用 Temperature (温度)
        # 公式: logits_new = logits / temperature
        if temperature == 0:
            # 贪婪解码 (Greedy Decoding): 直接选概率最大的，不进行随机采样
            return torch.argmax(logits, dim=-1).unsqueeze(0)
        
        logits = logits / temperature

        # 3. 应用 Top-K 采样
        # 将概率排名 K 之后的词的 logits 设为负无穷 (概率为0)
        if top_k > 0:
            # 获取前 k 个最大值
            v, _ = torch.topk(logits, min(top_k, logits.size(-1)))
            # 找到第 k 个值作为阈值
            pivot = v[:, -1].unsqueeze(-1)
            # 小于阈值的设为 -inf
            logits[logits < pivot] = -float('Inf')

        # 4. 应用 Top-P (Nucleus) 采样
        # 这是一个动态的 Top-K，截断位置取决于累积概率
        if top_p < 1.0:
            # 对 logits 进行降序排列
            sorted_logits, sorted_indices = torch.sort(logits, descending=True)
            # 计算 softmax 得到概率，然后计算累积概率 (cumsum)
            cumulative_probs = torch.softmax(sorted_logits, dim=-1).cumsum(dim=-1)

            # 找到累积概率超过 top_p 的位置
            sorted_indices_to_remove = cumulative_probs > top_p
            
            # 我们需要保留第一个超过阈值的词，所以把 mask 向右移动一位
            # 这样保证累积概率刚超过 top_p 的那个词还在保留范围内
            sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
            sorted_indices_to_remove[..., 0] = 0

            # 将 mask 映射回原始的 logits 索引顺序
            indices_to_remove = sorted_indices_to_remove.scatter(1, sorted_indices, sorted_indices_to_remove)
            # 将被移除的词 logits 设为 -inf
            logits[indices_to_remove] = -float('Inf')

        # 5. 转换为概率分布并采样
        # Softmax: 将 logits 转换为概率 (和为1)
        probs = F.softmax(logits, dim=-1)
        
        # Multinomial: 根据概率分布进行随机抽样
        next_token = torch.multinomial(probs, num_samples=1)
        return next_token

    @torch.no_grad() # 推理模式，不需要计算梯度，节省显存
    def generate(self, messages, max_new_tokens=200, temperature=0.7, top_k=50, top_p=0.9):
        """
        【核心代码】手搓生成循环 (Generation Loop)。
        展示如何一步步生成 token，并管理 KV Cache。
        """
        # 1. 准备输入
        prompt_text = self.format_chat_prompt(messages)
        print(f"\n=== 输入 Prompt (Raw String) ===\n{prompt_text}\n==============================\n")
        
        # 将字符串转为 Tensor
        inputs = self.tokenizer(prompt_text, return_tensors="pt").to(self.device)
        input_ids = inputs.input_ids
        
        # 用于记录生成的 token ID
        generated_ids = []
        
        # KV Cache: 用于存储之前计算过的 Key 和 Value 矩阵
        # 如果没有 KV Cache，每生成一个新词，都要把之前的整个句子重新算一遍，效率极低。
        past_key_values = None
        
        curr_input_ids = input_ids
        
        print(f"=== 开始生成 (使用设备: {self.device}) ===")
        start_time = time.time()

        for step in range(max_new_tokens):
            # 2. 模型前向传播 (Forward Pass)
            # use_cache=True: 让模型返回 past_key_values
            # 第一次迭代: curr_input_ids 是完整的 prompt
            # 后续迭代: curr_input_ids 只是上一步生成的 1 个 token
            outputs = self.model(
                curr_input_ids, 
                past_key_values=past_key_values,
                use_cache=True 
            )
            
            # 更新 KV Cache，供下一次迭代使用
            past_key_values = outputs.past_key_values
            
            # 获取 Logits (模型输出)
            logits = outputs.logits
            
            # 3. 采样下一个 Token
            next_token_id = self.sample_next_token(
                logits, 
                temperature=temperature, 
                top_k=top_k, 
                top_p=top_p
            )
            
            # 4. 处理结束条件
            # 如果生成了 EOS (End of Sentence) token，则停止
            if next_token_id.item() == self.tokenizer.eos_token_id:
                print("\n[检测到结束符，停止生成]")
                break
                
            # 记录结果
            generated_ids.append(next_token_id.item())
            
            # 5. 实时流式输出 (Streaming)
            # 为了演示，我们每生成一个 token 就尝试解码打印
            # 注意：中文的一个字可能由多个 token 组成，直接解码单个 token 可能会乱码
            # 这里我们用一种简单的方式：解码所有已生成的，然后打印新增的部分 (实际工程中有更高效的流式解码器)
            
            # 简单打印 (可能会有临时乱码，但能看到过程)
            new_word = self.tokenizer.decode([next_token_id.item()], skip_special_tokens=True)
            print(new_word, end="", flush=True)
            
            # 6. 准备下一次迭代的输入
            # 下一次只需要把这一个新生成的 token 喂进去，配合 KV Cache 即可
            curr_input_ids = next_token_id

        end_time = time.time()
        tokens_per_sec = len(generated_ids) / (end_time - start_time)
        print(f"\n\n=== 生成结束 (耗时: {end_time - start_time:.2f}s, 速度: {tokens_per_sec:.2f} tokens/s) ===")
        
        # 返回完整的生成文本
        return self.tokenizer.decode(generated_ids, skip_special_tokens=True)

if __name__ == "__main__":
    # 1. 实例化模型
    try:
        llm = HandCraftedLLM()
    except Exception as e:
        print(f"模型加载失败: {e}")
        print("请确保已安装 transformers 和 torch，并且网络能连接 HuggingFace (或配置了镜像)。")
        exit(1)
    
    # 2. 准备测试对话
    messages = [
        {"role": "system", "content": "你是一个硬核的技术专家，擅长用代码解释原理。"},
        {"role": "user", "content": "请简要解释一下 LLM 生成文本时的 'KV Cache' 是什么，为什么它能加速？"}
    ]
    
    # 3. 运行生成
    # 你可以调整 temperature 看看效果 (0.1 很稳定，1.0 很奔放)
    final_response = llm.generate(
        messages, 
        max_new_tokens=512, 
        temperature=0.7,
        top_k=40,
        top_p=0.9
    )
    
    # print(f"\n=== 完整回复 ===\n{final_response}")