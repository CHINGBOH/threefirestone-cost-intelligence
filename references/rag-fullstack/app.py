import streamlit as st
import os
import time
import threading

# 设置页面标题
st.set_page_config(page_title="本地 RAG 知识库助手", layout="wide")

# 导入我们的后端逻辑
# 注意：Streamlit 运行时会重新加载脚本，我们需要缓存模型加载过程，否则每次交互都会重载模型
from rag_chat import RAGChatBot
from create_db import create_vector_db

# ================= 缓存资源 =================
@st.cache_resource
def load_rag_bot():
    """
    使用 st.cache_resource 缓存 RAGChatBot 实例。
    这样模型只会加载一次，不会因为页面刷新而重载。
    """
    return RAGChatBot()

# ================= 侧边栏 =================
with st.sidebar:
    st.title("🔧 设置")
    st.write("基于 Qwen-3B 和 BGE-Small-ZH")
    
    # === 新增：文件上传功能 ===
    st.subheader("📄 上传文档")
    st.info("提示：您可以直接将 PDF/EPUB/MD 文件放入 RAG_FullStack/data 目录，然后点击下方更新按钮将新文件加入知识库。")
    uploaded_files = st.file_uploader("上传文件 (支持 md, pdf, epub)", type=["md", "pdf", "epub"], accept_multiple_files=True)
    
    if uploaded_files:
        # 确保 data 目录存在
        save_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
        if not os.path.exists(save_dir):
            os.makedirs(save_dir)
            
        for uploaded_file in uploaded_files:
            file_path = os.path.join(save_dir, uploaded_file.name)
            with open(file_path, "wb") as f:
                f.write(uploaded_file.getbuffer())
        st.success(f"已上传 {len(uploaded_files)} 个文件到 data 目录。请点击下方按钮更新知识库以生效。")
    # ========================

    # 清理对话历史按钮
    if st.button("🗑️ 清理对话记录"):
        st.session_state.messages = []
        st.rerun()

    # 使用 session_state 跟踪后台线程
    if "update_thread" not in st.session_state:
        st.session_state.update_thread = None

    if st.button("📥 更新知识库 (后台运行)"):
        if st.session_state.update_thread and st.session_state.update_thread.is_alive():
            st.warning("⚠️ 更新任务正在后台运行中，请勿重复提交。")
        else:
            def run_update_task():
                try:
                    # 注意：后台线程中不应操作 st.cache_resource.clear()，以免影响前台聊天
                    create_vector_db()
                    print("后台更新任务完成。")
                except Exception as e:
                    print(f"后台更新任务失败: {e}")

            t = threading.Thread(target=run_update_task)
            t.start()
            st.session_state.update_thread = t
            st.success("✅ 后台更新已启动！您可以继续聊天。请留意终端输出查看进度。")
            
    # 显示简单的状态提示
    if st.session_state.update_thread and st.session_state.update_thread.is_alive():
        st.info("🔄 知识库正在后台更新中...")

    st.markdown("---")
    st.markdown("### 关于")
    st.markdown("这是一个全栈 RAG 演示项目。")
    st.markdown("1. **检索**: PostgreSQL (pgvector) + BGE-Small-ZH")
    st.markdown("2. **生成**: DeepSeek-V3 (API)")

# ================= 主界面 =================
st.title("🤖 本地 RAG 知识库助手")

# 初始化聊天历史
if "messages" not in st.session_state:
    st.session_state.messages = []

# 展示历史消息
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# 处理用户输入
if prompt := st.chat_input("请输入您的问题 (例如: 什么是 KV Cache?)"):
    # 1. 显示用户消息
    with st.chat_message("user"):
        st.markdown(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # 2. 获取回答
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        full_response = ""
        
        try:
            with st.spinner("正在思考并检索文档..."):
                # 加载机器人 (如果已缓存则直接获取)
                bot = load_rag_bot()
                
                # 获取回答和来源
                # 传入历史记录 (排除刚刚添加的当前问题)
                history = st.session_state.messages[:-1]
                response_text, source_docs = bot.query(prompt, history=history)
                
                # 格式化输出：先显示回答，再显示引用来源
                full_response = response_text
                
                # 添加引用来源部分
                if source_docs:
                    full_response += "\n\n---\n**参考片段:**\n"
                    for i, doc in enumerate(source_docs):
                        # 只显示前 100 个字符作为预览
                        preview = doc.page_content[:100].replace('\n', ' ')
                        full_response += f"- *片段 {i+1}*: {preview}...\n"

                message_placeholder.markdown(full_response)
        
        except Exception as e:
            full_response = f"发生错误: {str(e)}"
            message_placeholder.error(full_response)

    # 3. 保存助手消息到历史
    st.session_state.messages.append({"role": "assistant", "content": full_response})
