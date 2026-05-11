# System Architecture

This document outlines the architecture of the RAG FullStack application.

## High-Level Overview

The system follows a standard RAG (Retrieval-Augmented Generation) pipeline, enhanced with an agentic workflow using LangGraph.

```mermaid
graph TD
    User[User] --> UI[Streamlit UI]
    UI --> Agent[LangGraph Agent]
    
    subgraph "Knowledge Ingestion"
        Docs[Documents (PDF, MD, TXT)] --> Loader[Document Loaders]
        Loader --> Splitter[Text Splitter]
        Splitter --> Embed[Embedding Model (HuggingFace)]
        Embed --> VectorDB[(PostgreSQL + pgvector)]
    end
    
    subgraph "Retrieval & Generation"
        Agent -->|Query| VectorDB
        VectorDB -->|Retrieved Context| Agent
        Agent -->|Context + Query| LLM[DeepSeek API]
        LLM -->|Answer| Agent
    end
    
    Agent -->|Final Response| UI
```

## Components

### 1. Frontend (Streamlit)
*   **File**: `app.py`
*   **Responsibility**: 
    *   Provides a chat interface for users.
    *   Manages session state (chat history).
    *   Triggers background threads for knowledge base updates to prevent UI freezing.
    *   Displays thinking process and retrieved documents.

### 2. Knowledge Base (Ingestion)
*   **File**: `create_db.py`
*   **Process**:
    1.  **Loading**: Uses `UnstructuredLoader` and specific loaders (PyPDF, Text) to read files from the directory.
    2.  **Splitting**: Chunks text into manageable sizes (e.g., 500 characters) with overlap to preserve context.
    3.  **Embedding**: Uses a local HuggingFace model (e.g., `sentence-transformers/all-MiniLM-L6-v2`) to convert text chunks into vector embeddings.
    4.  **Storage**: Stores embeddings and metadata in PostgreSQL using the `pgvector` extension.

### 3. Agentic Backend (LangGraph)
*   **File**: `rag_agent.py` (or integrated in `app.py`)
*   **Framework**: LangGraph
*   **Workflow**:
    *   **State Management**: Maintains the state of the conversation and retrieved documents.
    *   **Nodes**:
        *   `retrieve`: Queries the vector database for relevant chunks based on the user's question.
        *   `generate`: Constructs a prompt with the retrieved context and sends it to the LLM.
    *   **Model**: Connects to DeepSeek API (via OpenAI-compatible interface) for high-quality generation.

### 4. Data Storage
*   **Database**: PostgreSQL
*   **Extension**: `pgvector`
*   **Schema**: Stores vectors, document content, and source metadata.

## Key Design Decisions

*   **Threading for UI**: The "Update Knowledge Base" feature runs in a separate thread. This ensures that long-running ingestion tasks do not block the main event loop of the Streamlit application, keeping the UI responsive.
*   **Local Embeddings**: We use local embeddings to minimize API costs and latency for the retrieval step, while using a powerful cloud API (DeepSeek) for the generation step.
*   **Robust Device Detection**: The system automatically detects if CUDA is available and switches to GPU for faster embedding generation; otherwise, it falls back to CPU.
