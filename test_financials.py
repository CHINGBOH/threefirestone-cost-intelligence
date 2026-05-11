
import sys
import os

# Add the directory to sys.path so we can import rag_chat
sys.path.append("/home/l/PyCharmMiscProject/RAG_FullStack")

from rag_chat import RAGChatBot

def main():
    bot = RAGChatBot()
    # Specific query for financial data
    query = "请列出广田集团、金螳螂、亚厦股份2025年上半年的主要财务数据对比表，包括：营业收入、归属于上市公司股东的净利润、总资产、净资产、经营活动产生的现金流量净额。请尽可能提供具体的数字。"
    print(f"Querying: {query}")
    response, docs = bot.query(query)
    print("\n=== Response ===\n")
    print(response)

if __name__ == "__main__":
    main()
