# RAG 全栈技术实现指南

本指南详细说明了如何基于本地 Qwen 1.5B 模型构建一个完整的 RAG（检索增强生成）系统。

## 1. 系统架构

系统由以下四个主要模块组成：

1.  **知识库构建 (Knowledge Base Construction)**
    *   **输入**: 本地文档 (Markdown, PDF, TXT)。
    *   **处理**: 文档加载 -> 文本切分 (Chunking) -> 向量化 (Embedding)。
    *   **存储**: 向量数据库 (ChromaDB)。
    *   **工具**: `LangChain`, `Sentence-Transformers`, `ChromaDB`.

2.  **检索模块 (Retrieval Module)**
    *   **输入**: 用户查询 (Query)。
    *   **处理**: 查询向量化 -> 向量相似度搜索 -> 获取相关文档片段 (Context)。

3.  **生成模块 (Generation Module)**
    *   **输入**: Prompt (包含 System Prompt + Context + User Query)。
    *   **核心**: 本地 Qwen 1.5B 模型 (复用 `llm_generation_from_scratch.py` 中的逻辑)。
    *   **输出**: 自然语言回答。

4.  **用户界面 (User Interface)**
    *   **框架**: Streamlit。
    *   **功能**: 文件上传、聊天窗口、历史记录展示。

## 2. 环境准备

在 `RAG_FullStack` 目录下，安装以下依赖：

```bash
pip install langchain langchain-community chromadb sentence-transformers streamlit unstructured
# 如果需要处理 PDF，还需要安装:
# pip install pypdf
```

## 3. 文件结构

```text
RAG_FullStack/
├── app.py                      # Streamlit 前端主程序
├── create_db.py                # 知识库构建脚本 (离线运行)
├── rag_chat.py                 # RAG 核心逻辑封装 (LLM + Retrieval)
├── llm_generation_from_scratch.py # (已复制) 本地 LLM 推理类
├── LLM_Kernel_Deep_Dive.md     # (已复制) 测试文档
├── chroma_db/                  # (自动生成) 向量数据库存储目录
└── requirements.txt            # 依赖列表
```

## 4. 详细实现步骤

### 第一步：构建向量数据库 (`create_db.py`)

该脚本负责：
1.  加载指定目录下的文档。
2.  使用 `RecursiveCharacterTextSplitter` 将文档切分为 500-1000 字符的片段。
3.  使用 `SentenceTransformerEmbeddings` (模型: `all-MiniLM-L6-v2`) 生成向量。
4.  将向量和文本存入 ChromaDB。

### 第二步：封装 RAG 逻辑 (`rag_chat.py`)

该脚本负责：
1.  初始化 ChromaDB 客户端。
2.  初始化本地 `HandCraftedLLM` 模型。
3.  定义 `chat(query)` 函数：
    *   检索：`db.similarity_search(query)`
    *   构建 Prompt：`f"基于以下信息回答问题：\n{context}\n\n问题：{query}"`
    *   生成：调用 `llm.generate()`

### 第三步：开发前端界面 (`app.py`)

该脚本负责：
1.  提供侧边栏用于“重建知识库”按钮。
2.  提供聊天输入框。
3.  维护聊天历史 (Session State)。
4.  展示“思考过程”或检索到的参考文档片段。

## 5. 运行方法

1.  **初始化知识库**:
    ```bash
    python create_db.py
    ```
2.  **启动应用**:
    ```bash
    streamlit run app.py
    ```
