
import sys
import os

# Add the directory to sys.path so we can import rag_chat
sys.path.append("/home/l/PyCharmMiscProject/RAG_FullStack")

from rag_chat import RAGChatBot

def main():
    bot = RAGChatBot()
    query = "广田、金螳螂、亚厦对比分析"
    print(f"Querying: {query}")
    response, docs = bot.query(query)
    print("\n=== Response ===\n")
    print(response)

if __name__ == "__main__":
    main()
