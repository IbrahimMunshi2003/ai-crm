from fastapi import APIRouter
from langchain_core.messages import HumanMessage
import traceback

from app.graph.graph import graph
from app.schemas.chat import ChatRequest, ChatResponse

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:
        print("=" * 60)
        print("REQUEST RECEIVED")
        print(request.model_dump())

        state = {
            "messages": [
                HumanMessage(content=request.message)
            ],
            "interaction": request.interaction or {},
            "tool_name": "",
            "assistant_response": "",
        }

        print("Calling LangGraph...")

        result = graph.invoke(state)

        print("LangGraph Result:")
        print(result)

        return ChatResponse(
            tool_name=result["tool_name"],
            assistant_response=result["assistant_response"],
            interaction=result["interaction"],
        )

    except Exception:
        traceback.print_exc()
        raise