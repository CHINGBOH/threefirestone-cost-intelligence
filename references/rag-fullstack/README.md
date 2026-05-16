# RAG FullStack Application

This is a complete Retrieval-Augmented Generation (RAG) application that uses a local DeepSeek model (via API), LangGraph for agentic workflows, and PostgreSQL (pgvector) for vector storage.

## Features

*   **Full Stack RAG**: End-to-end implementation from document ingestion to answer generation.
*   **Local/Remote Model Support**: Configured to use DeepSeek API (compatible with OpenAI SDK).
*   **Vector Database**: Uses PostgreSQL with `pgvector` for efficient similarity search.
*   **Agentic Workflow**: Powered by LangGraph to handle complex queries and retrieval steps.
*   **Interactive UI**: Built with Streamlit, featuring non-blocking background knowledge base updates.
*   **GPU Acceleration**: Optimized for NVIDIA GPUs (CUDA 12.4) with CPU fallback.

## Architecture

- Detailed overview: [`docs/architecture.md`](docs/architecture.md)
- Mermaid source: [`docs/architecture.mmd`](docs/architecture.mmd)

## Prerequisites

*   **Python 3.10+**
*   **PostgreSQL** with `pgvector` extension installed.
*   **NVIDIA GPU** (Optional, but recommended for local embeddings).
*   **DeepSeek API Key** (or compatible OpenAI-style API key).

## Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Environment Setup**:
    *   Ensure PostgreSQL is running.
    *   Create a database (e.g., `rag_db`) and enable the vector extension:
        ```sql
        CREATE EXTENSION vector;
        ```
    *   Set up your environment variables. You can export them in your shell or add them to the `start.sh` script.

## Configuration

The application uses the following environment variables:

*   `HF_ENDPOINT`: Mirror for Hugging Face (e.g., `https://hf-mirror.com`).
*   `DEEPSEEK_API_KEY`: Your DeepSeek API key. Keep this value in your local shell or `.env`; never commit it.
*   `DEEPSEEK_BASE_URL`: Base URL for the API (e.g., `https://api.deepseek.com`).

## Usage

### One-Click Startup

Use the provided helper script to start the application:

```bash
bash start.sh
```

### Manual Startup

1.  **Initialize/Update Knowledge Base**:
    If this is your first run, or if you have added new documents to the `data/` folder (or root), run:
    ```bash
    python create_db.py
    ```
    *Note: You can also update the knowledge base directly from the Streamlit UI sidebar.*

2.  **Run the Streamlit App**:
    ```bash
    export HF_ENDPOINT=https://hf-mirror.com
    streamlit run app.py
    ```

## Project Structure

*   `app.py`: Main Streamlit application file. Handles UI and chat logic.
*   `create_db.py`: Script to ingest documents and populate the vector database.
*   `rag_agent.py`: Defines the LangGraph agent and retrieval logic.
*   `requirements.txt`: Python dependencies.
*   `start.sh`: Convenience script for launching the app.
*   `ARCHITECTURE.md`: Detailed system architecture documentation.

## Troubleshooting

*   **Torch/CUDA Errors**: Ensure you have installed the correct version of PyTorch for your CUDA version.
    ```bash
    pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
    ```
*   **Database Connection**: Check your PostgreSQL connection string in `create_db.py` and `rag_agent.py`.
