from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import Base, engine

from app.api.routes.chat import router as chat_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.dashboard import router as dashboard_router
import app.models.interaction
from app.api.routes.analytics import router as analytics_router
from app.api.routes.followup import router as followup_router
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(dashboard_router)
app.include_router(analytics_router)
app.include_router(followup_router)
@app.get("/")
def root():
    return {
        "message": "Medico Backend Running"
    }