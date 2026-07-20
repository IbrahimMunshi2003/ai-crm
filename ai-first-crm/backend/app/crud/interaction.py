from sqlalchemy.orm import Session

from app.models.interaction import Interaction


def create_interaction(
    db: Session,
    data: dict,
):
    interaction = Interaction(**data)

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    return interaction