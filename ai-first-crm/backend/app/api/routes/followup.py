from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db

from app.services.followup_service import get_followups

router = APIRouter(
    prefix="/followups",
    tags=["Follow Ups"]
)


@router.get("/")
def all_followups(
    db: Session = Depends(get_db)
):
    return get_followups(db)