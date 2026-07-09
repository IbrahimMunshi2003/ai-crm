import {
  Bot,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import AssistantChat from "../components/chat/AssistantChat";
import ChatInput from "../components/chat/ChatInput";
import InteractionForm from "../components/interaction/InteractionForm";

import {
  addMessage,
  setCurrentTool,
  setLoading,
} from "../features/chat/chatSlice";

import { setInteraction } from "../features/interaction/interactionSlice";

import { sendMessage } from "../features/chat/chatApi";

export default function LogInteractionPage() {
  const dispatch = useAppDispatch();

  const interaction = useAppSelector(
    (state) => state.interaction
  );

  async function handleSend(message: string) {
    dispatch(
      addMessage({
        role: "user",
        content: message,
      })
    );

    dispatch(setLoading(true));

    try {
      const response = await sendMessage(message, interaction);

      dispatch(
        addMessage({
          role: "assistant",
          content: response.assistant_response,
        })
      );

      dispatch(setInteraction(response.interaction));
      dispatch(setCurrentTool(response.tool_name));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">

      {/* Header */}

      <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-10">

        <div className="flex items-center gap-5">

          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">

            <BrainCircuit className="text-white" size={26} />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              AI First CRM
            </h1>

            <p className="text-sm text-slate-500">
              Pharmaceutical Sales Intelligence
            </p>

          </div>

        </div>

        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-sm font-medium text-green-700">
              AI Connected
            </span>

          </div>

          <div className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
              IM
            </div>

            <div>

              <h3 className="font-semibold">
                Ibrahim Munshi
              </h3>

              <p className="text-sm text-slate-500">
                Sales Representative
              </p>

            </div>

          </div>

        </div>

      </header>

      {/* Body */}

      <div className="grid grid-cols-12 gap-6 p-6 h-[calc(100vh-80px)]">

        {/* Sidebar */}

        <aside className="col-span-3 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex flex-col overflow-hidden">

          <div className="p-6 border-b">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-blue-600" />

              <div>

                <h2 className="font-bold text-lg">
                  Interaction Details
                </h2>

                <p className="text-sm text-slate-500">
                  Live CRM Record
                </p>

              </div>

            </div>

          </div>

          <div className="flex-1 overflow-y-auto p-6">

            <InteractionForm />

          </div>

        </aside>

        {/* Chat */}

        <main className="col-span-9 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex flex-col overflow-hidden">

          <div className="h-20 border-b px-8 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center">

                <Bot className="text-blue-600" />

              </div>

              <div>

                <h2 className="font-bold text-lg">
                  AI Assistant
                </h2>

                <p className="text-sm text-slate-500">
                  Powered by LangGraph + Groq
                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <button className="rounded-full bg-blue-50 hover:bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition">
                Summary
              </button>

              <button className="rounded-full bg-violet-50 hover:bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 transition">
                Follow Up
              </button>

              <button className="rounded-full bg-amber-50 hover:bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 transition">
                Recommend
              </button>

            </div>

          </div>

          <div className="flex-1 overflow-y-auto bg-slate-50 p-8">

            <AssistantChat />

          </div>

          <div className="border-t bg-white px-6 py-5">

            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">

              <Sparkles size={16} />

              Ask naturally. The AI understands meetings, edits, summaries and recommendations.

            </div>

            <ChatInput
              onSend={handleSend}
            />

          </div>

        </main>

      </div>

    </div>
  );
}