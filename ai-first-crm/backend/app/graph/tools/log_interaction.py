import json
import re
from datetime import date

from langchain_core.messages import HumanMessage, SystemMessage

from app.graph.prompts import SYSTEM_PROMPT
from app.llm.groq_client import llm

from app.db.database import SessionLocal
from app.crud.interaction import create_interaction


def extract_json(text: str):
    text = text.strip()

    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?", "", text)
        text = re.sub(r"```$", "", text)
        text = text.strip()

    return json.loads(text)


def clean_interaction(interaction: dict):
    # Convert empty strings to None
    for key, value in interaction.items():
        if isinstance(value, str) and value.strip() == "":
            interaction[key] = None

    # If date is missing, use today's date
    if interaction.get("interaction_date") is None:
        interaction["interaction_date"] = date.today()

    return interaction


def log_interaction(message: str):

    response = llm.invoke(
        [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=message),
        ]
    )

    print("=" * 60)
    print("LLM Response")
    print(response.content)
    print("=" * 60)

    interaction = extract_json(response.content)

    interaction = clean_interaction(interaction)

    db = SessionLocal()

    try:
        create_interaction(
            db=db,
            data=interaction,
        )

    finally:
        db.close()

    return interaction