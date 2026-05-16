import os
import torch
from langchain_community.document_loaders import DirectoryLoader, TextLoader, UnstructuredMarkdownLoader, PyPDFLoader, UnstructuredEPubLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_postgres import PGVector

# =================配置=================
# 文档所在目录 (当前目录)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
# PostgreSQL 连接配置
CONNECTION_STRING = "postgresql+psycopg://rag_user:rag_password@localhost:5432/rag_db"
COLLECTION_NAME = "rag_documents"
# 嵌入模型 (升级为 BAAI/bge-small-zh-v1.5，中文效果更好)
EMBEDDING_MODEL = "BAAI/bge-small-zh-v1.5"
# =====================================

def create_vector_db():
    print(f"正在扫描数据目录: {DATA_DIR} ...")
    
    documents = []
    
    # 1. 加载 Markdown
    if os.path.exists(BASE_DIR):
        print("正在加载 Markdown 文件...")
        md_loader = DirectoryLoader(BASE_DIR, glob="./*.md", loader_cls=UnstructuredMarkdownLoader)
        documents.extend(md_loader.load())

    # 2. 加载 PDF
    if os.path.exists(DATA_DIR):
        print("正在加载 PDF 文件...")
        # 使用 silent_errors=True 忽略加载失败的文件
        pdf_loader = DirectoryLoader(DATA_DIR, glob="./*.pdf", loader_cls=PyPDFLoader, silent_errors=True)
        try:
            documents.extend(pdf_loader.load())
        except Exception as e:
            print(f"加载 PDF 时遇到部分错误 (已忽略): {e}")
        
        print("正在加载 EPUB 文件...")
        epub_loader = DirectoryLoader(DATA_DIR, glob="./*.epub", loader_cls=UnstructuredEPubLoader, silent_errors=True)
        try:
            documents.extend(epub_loader.load())
        except Exception as e:
            print(f"加载 EPUB 时遇到部分错误 (已忽略): {e}")
    
    if not documents:
        print("未找到任何文档 (md, pdf, epub)。")
        return

    print(f"总共加载了 {len(documents)} 个文档。")

    # 3. 文本切分 (优化：增大 chunk_size 以保留更多上下文)
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = text_splitter.split_documents(documents)
    
    print(f"文档已切分为 {len(chunks)} 个片段。")

    # 4. 初始化嵌入模型
    print(f"正在加载嵌入模型: {EMBEDDING_MODEL} ...")
    # 使用 torch.cuda.is_available() 检查 GPU 可用性
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    print(f"使用设备: {device}")
    
    embedding_func = HuggingFaceEmbeddings(
        model_name=EMBEDDING_MODEL,
        model_kwargs={'device': device},
        encode_kwargs={'normalize_embeddings': True} # BGE 模型推荐归一化
    )

    # 5. 创建并持久化向量数据库
    print(f"正在连接 PostgreSQL 数据库 ({CONNECTION_STRING}) ...")
    
    vector_db = PGVector(
        embeddings=embedding_func,
        collection_name=COLLECTION_NAME,
        connection=CONNECTION_STRING,
        use_jsonb=True,
    )
    
    # 确保表和集合存在
    vector_db.create_tables_if_not_exists()
    vector_db.create_collection()
    
    # 注意：这里改为追加模式，不再强制删除旧表
    # 如果需要完全重建，请手动清理数据库或添加专门的重建标志
    print("正在向数据库追加新数据...")
    vector_db.add_documents(chunks)
    
    print("向量数据库更新完成！")

if __name__ == "__main__":
    create_vector_db()
