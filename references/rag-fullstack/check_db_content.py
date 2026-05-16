from langchain_postgres import PGVector
from langchain_huggingface import HuggingFaceEmbeddings

CONNECTION_STRING = "postgresql+psycopg://rag_user:rag_password@localhost:5432/rag_db"
COLLECTION_NAME = "rag_documents"
EMBEDDING_MODEL = "BAAI/bge-small-zh-v1.5"

embedding_func = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
vector_db = PGVector(
    embeddings=embedding_func,
    collection_name=COLLECTION_NAME,
    connection=CONNECTION_STRING,
)

def check_company(name):
    print(f"Checking for {name}...")
    # We can't easily do a keyword search with vector store interface, 
    # but we can do a similarity search for the name itself.
    docs = vector_db.similarity_search(name, k=5)
    found = False
    for doc in docs:
        if name in doc.page_content:
            print(f"Found {name} in document snippet: {doc.page_content[:50]}...")
            found = True
            break
    if not found:
        print(f"WARNING: Did not find explicit mention of {name} in top 5 results for query '{name}'.")

check_company("广田")
check_company("金螳螂")
check_company("亚厦")
