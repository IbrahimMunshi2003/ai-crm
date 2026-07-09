from langchain_core.messages import HumanMessage

from app.llm.groq_client import llm


def generate_followup(interaction: dict):

    prompt = f"""
Based on this interaction, suggest follow-up tasks.

Interaction:

{interaction}

Return a short bullet list.
"""

    response = llm.invoke(
        [
            HumanMessage(content=prompt)
        ]
    )

    return response.content