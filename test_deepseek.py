import os

from openai import OpenAI

api_key = os.environ["DEEPSEEK_API_KEY"]
base_url = os.environ.get("DEEPSEEK_BASE_URL", "https://api.deepseek.com")

client = OpenAI(api_key=api_key, base_url=base_url)

try:
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello, are you working?"}
        ],
        stream=False
    )
    print("Response:", response.choices[0].message.content)
except Exception as e:
    print("Error:", e)
