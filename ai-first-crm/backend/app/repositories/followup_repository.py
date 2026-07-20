from sqlalchemy.orm import Session

from app.models.interaction import Interaction


def get_pending_followups(db: Session):
    return (
        db.query(Interaction)
        .filter(
            Interaction.follow_up.isnot(None),
            Interaction.follow_up != ""
        )
        .order_by(
            Interaction.interaction_date.desc()
        )
        .all()
    )


def get_followup_by_doctor(
    db: Session,
    doctor: str
):
    return (
        db.query(Interaction)
        .filter(
            Interaction.hcp_name == doctor
        )
        .all()
    )