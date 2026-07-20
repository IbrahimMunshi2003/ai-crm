from app.core.database import SessionLocal
from app.models.interaction import Interaction


def save_interaction(data: dict):

    db = SessionLocal()

    interaction = Interaction(**data)

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    db.close()

    return interaction