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

      <header className="h-16 sm:h-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-4 sm:px-10 shrink-0">

        <div className="flex items-center gap-3 sm:gap-5">

          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shrink-0">

            <BrainCircuit className="text-white h-5 w-5 sm:h-[26px] sm:w-[26px]" />

          </div>

          <div>

            <h1 className="text-xl sm:text-3xl font-bold text-slate-800 leading-tight">
              Medico
            </h1>

            <p className="hidden sm:block text-sm text-slate-500">
              Pharmaceutical Sales Intelligence
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4 sm:gap-8">

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 sm:px-4 sm:py-2">

            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="hidden sm:inline text-sm font-medium text-green-700">
              AI Connected
            </span>

          </div>

          <div className="flex items-center gap-3 sm:gap-4">

            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-lg shrink-0">
              IM
            </div>

            <div className="hidden md:block">

              <h3 className="font-semibold text-sm sm:text-base">
                Ibrahim Munshi
              </h3>

              <p className="text-xs sm:text-sm text-slate-500">
                Sales Representative
              </p>

            </div>

          </div>

        </div>

      </header>

      {/* Body */}

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6 p-4 sm:p-6 h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden">

        {/* Sidebar */}

        <aside className="lg:col-span-3 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex flex-col h-[600px] lg:h-full shrink-0">

          <div className="p-4 sm:p-6 border-b shrink-0">

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

          <div className="flex-1 overflow-y-auto p-4 sm:p-6">

            <InteractionForm />

          </div>

        </aside>

        {/* Chat */}

        <main className="lg:col-span-9 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl flex flex-col h-[70vh] lg:h-full shrink-0">

          <div className="h-16 sm:h-20 border-b px-4 sm:px-8 flex items-center justify-between shrink-0">

            <div className="flex items-center gap-3 sm:gap-4">

              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">

                <Bot className="text-blue-600" />

              </div>

              <div>

                <h2 className="font-bold text-base sm:text-lg">
                  AI Assistant
                </h2>

                <p className="text-xs sm:text-sm text-slate-500">
                  Powered by LangGraph + Groq
                </p>

              </div>

            </div>

            <div className="hidden md:flex gap-3">

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

          <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-8">

            <AssistantChat />

          </div>

          <div className="border-t bg-white px-4 sm:px-6 py-4 sm:py-5 shrink-0">

            <div className="mb-3 hidden sm:flex items-center gap-2 text-sm text-slate-500">

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