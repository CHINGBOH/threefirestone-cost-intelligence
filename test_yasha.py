
import sys
import os

# Add the directory to sys.path so we can import rag_chat
sys.path.append("/home/l/PyCharmMiscProject/RAG_FullStack")

from rag_chat import RAGChatBot

def main():
    bot = RAGChatBot()
    # Specific query for Yasha financial data
    query = "亚厦股份2025年半年度主要会计数据和财务指标：营业收入、净利润、总资产、净资产"
    print(f"Querying: {query}")
    response, docs = bot.query(query)
    print("\n=== Response ===\n")
    print(response)

if __name__ == "__main__":
    main()
