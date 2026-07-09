from langchain_core.messages import HumanMessage

from app.llm.groq_client import llm


def generate_summary(interaction: dict):

    prompt = f"""
Generate a concise professional CRM summary.

Interaction:

{interaction}
"""

    response = llm.invoke(
        [
            HumanMessage(content=prompt)
        ]
    )

    return response.content