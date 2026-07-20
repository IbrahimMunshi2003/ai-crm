from sqlalchemy import (
    Boolean,
    Column,
    Date,
    DateTime,
    Integer,
    String,
    Text,
)

from sqlalchemy.sql import func

from app.core.database import Base


class Interaction(Base):

    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String)

    interaction_date = Column(Date)

    interaction_type = Column(String)

    product = Column(String)

    sentiment = Column(String)

    discussion = Column(Text)

    brochure_shared = Column(Boolean)

    follow_up = Column(Text)

    summary = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )