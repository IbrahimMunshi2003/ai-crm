import json

from langchain_core.messages import HumanMessage

from app.llm.groq_client import llm


def edit_interaction(current_data: dict, message: str):

    prompt = f"""
You are editing an existing CRM interaction.

Current interaction:

{json.dumps(current_data, indent=2)}

User request:

{message}

Instructions:

- Modify ONLY the requested fields.
- Preserve ALL other values.
- Return the COMPLETE interaction.
- Return JSON only.
"""

    response = llm.invoke(
        [
            HumanMessage(content=prompt)
        ]
    )

    return extract_json(response.content)
def extract_json(text: str):
    text = text.strip()

    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?", "", text)
        text = re.sub(r"```$", "", text)
        text = text.strip()

    return json.loads(text)