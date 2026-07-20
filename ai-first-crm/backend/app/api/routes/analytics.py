from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.analytics_service import *

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get("/overview")
def overview(db: Session = Depends(get_db)):
    return get_dashboard_analytics(db)


@router.get("/products")
def products(db: Session = Depends(get_db)):
    return get_products(db)


@router.get("/doctors")
def doctors(db: Session = Depends(get_db)):
    return get_doctors(db)


@router.get("/sentiments")
def sentiments(db: Session = Depends(get_db)):
    return get_sentiments(db)


@router.get("/monthly")
def monthly(db: Session = Depends(get_db)):
    return get_monthly(db)


@router.get("/insights")
def insights(db: Session = Depends(get_db)):
    return get_ai_insights(db)