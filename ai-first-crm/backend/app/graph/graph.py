from langgraph.graph import StateGraph, START, END

from app.graph.state import CRMState

from app.graph.nodes import (
    edit_node,
    followup_node,
    log_node,
    recommendation_node,
    summary_node,
)

from app.graph.router import route_tool


builder = StateGraph(CRMState)

builder.add_node("log_interaction", log_node)
builder.add_node("edit_interaction", edit_node)
builder.add_node("generate_summary", summary_node)
builder.add_node("generate_followup", followup_node)
builder.add_node("recommend_action", recommendation_node)

builder.add_conditional_edges(
    START,
    route_tool,
    {
        "log_interaction": "log_interaction",
        "edit_interaction": "edit_interaction",
        "generate_summary": "generate_summary",
        "generate_followup": "generate_followup",
        "recommend_action": "recommend_action",
    },
)

builder.add_edge("log_interaction", END)
builder.add_edge("edit_interaction", END)
builder.add_edge("generate_summary", END)
builder.add_edge("generate_followup", END)
builder.add_edge("recommend_action", END)

graph = builder.compile()