from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.interaction import Interaction


def get_dashboard_stats(db: Session):

    total_interactions = db.query(Interaction).count()

    positive = (
        db.query(Interaction)
        .filter(Interaction.sentiment == "Positive")
        .count()
    )

    neutral = (
        db.query(Interaction)
        .filter(Interaction.sentiment == "Neutral")
        .count()
    )

    negative = (
        db.query(Interaction)
        .filter(Interaction.sentiment == "Negative")
        .count()
    )

    brochures = (
        db.query(Interaction)
        .filter(Interaction.brochure_shared == True)
        .count()
    )

    followups = (
        db.query(Interaction)
        .filter(Interaction.follow_up != None)
        .count()
    )

    return {
        "totalInteractions": total_interactions,
        "positive": positive,
        "neutral": neutral,
        "negative": negative,
        "brochuresShared": brochures,
        "pendingFollowUps": followups,
    }