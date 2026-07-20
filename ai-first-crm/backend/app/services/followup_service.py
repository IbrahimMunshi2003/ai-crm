from app.repositories.followup_repository import *


def get_followups(db):

    rows = get_pending_followups(db)

    return [
        {
            "id": row.id,
            "doctor": row.hcp_name,
            "date": row.interaction_date,
            "product": row.product,
            "followUp": row.follow_up,
            "sentiment": row.sentiment,
        }
        for row in rows
    ]