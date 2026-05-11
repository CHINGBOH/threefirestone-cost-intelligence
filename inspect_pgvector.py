from langchain_postgres import PGVector
from langchain_huggingface import HuggingFaceEmbeddings

embedding_func = HuggingFaceEmbeddings(model_name="BAAI/bge-small-zh-v1.5")
vector_db = PGVector(
    embeddings=embedding_func,
    collection_name="test",
    connection="postgresql+psycopg://rag_user:rag_password@localhost:5432/rag_db",
)
print(dir(vector_db))
