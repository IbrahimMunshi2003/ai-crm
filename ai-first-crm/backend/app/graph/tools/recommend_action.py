from langchain_core.messages import HumanMessage

from app.llm.groq_client import llm


def recommend_action(interaction: dict):

    prompt = f"""
You are a pharmaceutical CRM assistant.

Based on this interaction recommend the next best action.

Interaction:

{interaction}

Return 3 recommendations.
"""

    response = llm.invoke(
        [
            HumanMessage(content=prompt)
        ]
    )

    return response.content