from typing import Any

from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    interaction: dict[str, Any] = {}


class ChatResponse(BaseModel):
    tool_name: str
    assistant_response: str
    interaction: dict[str, Any]