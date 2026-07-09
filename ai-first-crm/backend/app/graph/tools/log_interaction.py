import json
import re

from langchain_core.messages import HumanMessage, SystemMessage

from app.graph.prompts import SYSTEM_PROMPT
from app.llm.groq_client import llm


def extract_json(text: str):
    text = text.strip()

    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?", "", text)
        text = re.sub(r"```$", "", text)
        text = text.strip()

    return json.loads(text)


def log_interaction(message: str):

    response = llm.invoke(
        [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=message),
        ]
    )

    print("LLM Response:")
    print(response.content)

    return extract_json(response.content)