from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.interaction import Interaction


def get_total_interactions(db: Session):
    return db.query(func.count(Interaction.id)).scalar()


def get_positive_count(db: Session):
    return (
        db.query(func.count(Interaction.id))
        .filter(Interaction.sentiment == "positive")
        .scalar()
    )


def get_neutral_count(db: Session):
    return (
        db.query(func.count(Interaction.id))
        .filter(Interaction.sentiment == "neutral")
        .scalar()
    )


def get_negative_count(db: Session):
    return (
        db.query(func.count(Interaction.id))
        .filter(Interaction.sentiment == "negative")
        .scalar()
    )


def get_product_stats(db: Session):
    return (
        db.query(
            Interaction.product,
            func.count(Interaction.id).label("count"),
        )
        .group_by(Interaction.product)
        .all()
    )


def get_doctor_stats(db: Session):
    return (
        db.query(
            Interaction.hcp_name,
            func.count(Interaction.id).label("count"),
        )
        .group_by(Interaction.hcp_name)
        .all()
    )


def get_sentiment_stats(db: Session):
    return (
        db.query(
            Interaction.sentiment,
            func.count(Interaction.id).label("count"),
        )
        .group_by(Interaction.sentiment)
        .all()
    )


def get_monthly_stats(db: Session):
    return (
        db.query(
            func.to_char(
                Interaction.interaction_date,
                "Mon",
            ).label("month"),
            func.count(Interaction.id).label("count"),
        )
        .group_by(
            func.to_char(
                Interaction.interaction_date,
                "Mon",
            )
        )
        .all()
    )
def get_brochure_count(db):
    return (
        db.query(Interaction)
        .filter(Interaction.brochure_shared == True)
        .count()
    )


def get_followup_count(db):
    return (
        db.query(Interaction)
        .filter(
            Interaction.follow_up.isnot(None),
            Interaction.follow_up != "",
        )
        .count()
    )