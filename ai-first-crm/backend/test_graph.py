from langchain_core.messages import HumanMessage

from app.graph.graph import graph


def test(message, interaction=None):

    if interaction is None:
        interaction = {}

    state = {
        "messages": [
            HumanMessage(content=message)
        ],
        "interaction": interaction,
        "tool_name": "",
        "assistant_response": "",
    }

    result = graph.invoke(state)

    print("\n=========================")
    print("TOOL:", result["tool_name"])
    print("=========================")

    print(result["assistant_response"])

    print(result["interaction"])

    return result


state = test(
    "Today I met Dr Smith. Discussed Ozempic. Shared brochures."
)

state = test(
    "Actually his name was Dr John.",
    state["interaction"]
)

test(
    "Generate a summary",
    state["interaction"]
)

test(
    "What follow up should I do?",
    state["interaction"]
)

test(
    "Suggest the next best action",
    state["interaction"]
)