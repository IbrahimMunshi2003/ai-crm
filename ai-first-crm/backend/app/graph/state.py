from typing import Annotated, TypedDict

from langgraph.graph.message import add_messages


class InteractionState(TypedDict):
    hcp_name: str
    interaction_date: str
    interaction_type: str
    product: str
    sentiment: str
    discussion: str
    brochure_shared: bool
    follow_up: str
    summary: str


class CRMState(TypedDict):
    messages: Annotated[list, add_messages]

    interaction: InteractionState

    tool_name: str

    assistant_response: str