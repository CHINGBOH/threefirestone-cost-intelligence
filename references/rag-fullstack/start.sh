#!/bin/bash

# RAG FullStack Startup Script

# Set Hugging Face Mirror for faster downloads in CN
export HF_ENDPOINT=https://hf-mirror.com

# Check if virtual environment exists (optional, adjust path if needed)
# if [ -d "venv" ]; then
#     source venv/bin/activate
# fi

echo "Starting RAG FullStack Application..."
echo "Ensure your PostgreSQL database is running and configured."

# Run the Streamlit application
streamlit run app.py
