from sqlalchemy import Boolean, Column, Date, DateTime, Integer, String, Text
from sqlalchemy.sql import func

from app.core.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String(255), nullable=False)

    interaction_date = Column(Date)

    interaction_type = Column(String(100))

    product = Column(String(255))

    sentiment = Column(String(100))

    discussion = Column(Text)

    brochure_shared = Column(Boolean, default=False)

    follow_up = Column(String(255))

    summary = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())