import os
import torch
from langchain_postgres import PGVector
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_openai import ChatOpenAI
from langchain_core.tools import Tool
from langchain_core.messages import SystemMessage, HumanMessage
from langgraph.prebuilt import create_react_agent

# =================配置=================
DOC_DIR = os.path.dirname(os.path.abspath(__file__))
CONNECTION_STRING = "postgresql+psycopg://rag_user:rag_password@localhost:5432/rag_db"
COLLECTION_NAME = "rag_documents"
EMBEDDING_MODEL = "BAAI/bge-small-zh-v1.5"
DEEPSEEK_API_KEY = os.environ["DEEPSEEK_API_KEY"]
DEEPSEEK_BASE_URL = os.environ.get("DEEPSEEK_BASE_URL", "https://api.deepseek.com")
# =====================================

class RAGChatBot:
    def __init__(self):
        print("正在初始化 RAG 聊天机器人 (LangGraph Agent 版)...")
        
        # 1. 初始化 Embedding
        self.embedding_func = HuggingFaceEmbeddings(
            model_name=EMBEDDING_MODEL,
            model_kwargs={'device': 'cpu'},
            encode_kwargs={'normalize_embeddings': True}
        )
        
        # 2. 连接向量数据库
        self.db = PGVector(
            embeddings=self.embedding_func,
            collection_name=COLLECTION_NAME,
            connection=CONNECTION_STRING,
            use_jsonb=True,
        )
        
        # 3. 创建检索函数
        def search_financial_reports(query: str) -> str:
            """
            搜索广田集团、金螳螂、亚厦股份等公司的财务报告、经营数据和行业分析。
            """
            print(f"\n[Tool] 正在检索: {query}")
            # 使用 MMR 搜索
            docs = self.db.max_marginal_relevance_search(query, k=5, fetch_k=20)
            return "\n\n".join([d.page_content for d in docs])

        # 4. 封装为 Tool 对象
        self.tools = [
            Tool(
                name="search_financial_reports",
                func=search_financial_reports,
                description="搜索广田集团、金螳螂、亚厦股份等公司的财务报告、经营数据和行业分析。如果用户询问具体数据（如营收、净利润），请务必使用此工具搜索。"
            )
        ]
        
        # 5. 初始化 LLM (DeepSeek)
        print("正在连接 DeepSeek API...")
        self.llm = ChatOpenAI(
            model="deepseek-chat",
            api_key=DEEPSEEK_API_KEY,
            base_url=DEEPSEEK_BASE_URL,
            temperature=0.5,
            max_tokens=2048
        )
        
        # 6. 初始化 Agent (使用 LangGraph create_react_agent)
        system_message = (
            "你是一个专业的金融分析助手。请回答用户问题。\n"
            "要求：\n"
            "1. 遇到复杂问题（如对比分析），请多次调用搜索工具，分别查询各个实体的数据。\n"
            "2. 最终回答要基于事实，使用 Markdown 表格展示数据对比。\n"
        )
        
        self.agent_executor = create_react_agent(
            self.llm, 
            self.tools, 
            prompt=system_message
        )
        
        print("RAG 系统初始化完成。")

    def query(self, user_query, history=[]):
        """
        执行 Agent 流程
        """
        # 显存优化
        if torch.cuda.is_available():
            torch.cuda.empty_cache()
            
        print(f"\n[Agent] 收到查询: '{user_query}'")
        
        try:
            # LangGraph 输入是 messages 列表
            inputs = {"messages": [HumanMessage(content=user_query)]}
            
            # 执行
            result = self.agent_executor.invoke(inputs)
            
            # 获取最后一条消息作为输出
            last_message = result["messages"][-1]
            return last_message.content, [] 
        except Exception as e:
            print(f"Agent 执行出错: {e}")
            import traceback
            traceback.print_exc()
            return f"抱歉，处理您的请求时遇到错误: {e}", []

if __name__ == "__main__":
    bot = RAGChatBot()
    q = "广田、金螳螂、亚厦2025年上半年财务数据对比"
    print(f"Querying: {q}")
    ans, _ = bot.query(q)
    print(f"Response:\n{ans}")
