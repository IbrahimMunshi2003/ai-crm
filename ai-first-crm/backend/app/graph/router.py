import json

from langchain_core.messages import HumanMessage, SystemMessage

from app.llm.groq_client import llm


ROUTER_PROMPT = """
You are the routing agent of an AI-powered CRM for pharmaceutical sales representatives.

Your job is to choose EXACTLY ONE tool based on the user's latest message.

Available tools:

1. log_interaction
Use when the user is describing a NEW interaction with an HCP.

Examples:
- Today I met Dr Smith...
- I visited Dr Ahmed...
- I had a meeting...
- I spoke with Dr...

------------------------------------------------

2. edit_interaction

Use when the user wants to modify an EXISTING interaction.

Examples:
- Actually...
- Change...
- Update...
- The doctor's name was...
- Sentiment should be negative.
- Remove brochure.

------------------------------------------------

3. generate_summary

Use ONLY when the user requests:

- summary
- summarize
- recap
- meeting summary

------------------------------------------------

4. generate_followup

Use ONLY when the user requests:

- follow up
- follow-up
- reminder
- next visit
- future tasks
- follow-up plan

------------------------------------------------

5. recommend_action

Use ONLY when the user requests:

- recommendation
- recommend
- next best action
- what should I do next
- suggestions

Return ONLY JSON.

Example:

{
    "tool":"generate_summary"
}
"""


def route_tool(state):

    message = state["messages"][-1].content

    response = llm.invoke([
        SystemMessage(content=ROUTER_PROMPT),
        HumanMessage(content=message)
    ])

    tool = json.loads(response.content)["tool"]

    return tool