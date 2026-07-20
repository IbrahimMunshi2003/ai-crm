from app.graph.tools import (
    edit_interaction,
    generate_followup,
    generate_summary,
    log_interaction,
    recommend_action,
)
from app.db.database import SessionLocal
from app.models.interaction import Interaction

def log_node(state):

    message = state["messages"][-1].content

    state["interaction"] = log_interaction(message)
    
    db = SessionLocal()

    interaction = Interaction(**state["interaction"])

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    db.close()
    
    

    state["tool_name"] = "Log Interaction"

    state["assistant_response"] = "Interaction logged successfully."

    return state


def edit_node(state):

    message = state["messages"][-1].content

    interaction = edit_interaction(
        state["interaction"],
        message,
    )

    interaction["summary"] = generate_summary(interaction)

    state["interaction"] = interaction

    state["tool_name"] = "Edit Interaction"

    state["assistant_response"] = "Interaction updated successfully."

    return state


def summary_node(state):

    state["assistant_response"] = generate_summary(
        state["interaction"]
    )

    state["tool_name"] = "Generate Summary"

    return state


def followup_node(state):

    state["assistant_response"] = generate_followup(
        state["interaction"]
    )

    state["tool_name"] = "Generate Follow Up"

    return state


def recommendation_node(state):

    state["assistant_response"] = recommend_action(
        state["interaction"]
    )

    state["tool_name"] = "Recommend Next Action"

    return state