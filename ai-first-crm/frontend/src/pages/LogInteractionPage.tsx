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
      const response = await sendMessage(
        message,
        interaction
      );

      dispatch(
        addMessage({
          role: "assistant",
          content: response.assistant_response,
        })
      );

      dispatch(
        setInteraction(response.interaction)
      );

      dispatch(
        setCurrentTool(response.tool_name)
      );
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">

      {/* Header */}

      <header className="sticky top-0 z-50 h-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">

        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">

              <BrainCircuit
                className="text-white"
                size={28}
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                Medico
              </h1>

              <p className="text-sm text-slate-500">
                AI Pharmaceutical CRM
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 shadow-sm">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-medium text-green-700">
                AI Connected
              </span>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg">

                IM

              </div>

              <div className="hidden md:block">

                <h3 className="font-semibold text-slate-800">
                  Ibrahim Munshi
                </h3>

                <p className="text-sm text-slate-500">
                  Sales Representative
                </p>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* Main */}

      <div className="mx-auto grid h-[calc(100vh-80px)] max-w-[1700px] grid-cols-1 gap-8 p-6 lg:grid-cols-12 lg:p-8">

        {/* Sidebar */}

        <aside className="lg:col-span-3 flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-2xl">

          <div className="border-b border-slate-200 px-7 py-6">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                <ShieldCheck
                  className="text-blue-600"
                  size={24}
                />

              </div>

              <div>

                <h2 className="text-lg font-bold text-slate-800">
                  Interaction Details
                </h2>

                <p className="text-sm text-slate-500">
                  Auto-filled CRM Information
                </p>

              </div>

            </div>

          </div>

          <div className="flex-1 overflow-y-auto px-7 py-6">

            <InteractionForm />

          </div>

        </aside>

        {/* Chat */}

        <main className="lg:col-span-9 flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-2xl">

          {/* Chat Header */}

          <div className="flex h-20 items-center justify-between border-b border-slate-200 px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                <Bot
                  className="text-blue-600"
                  size={24}
                />

              </div>

              <div>

                <h2 className="text-lg font-bold">
                  AI Assistant
                </h2>

                <p className="text-sm text-slate-500">
                  Powered by LangGraph + Groq
                </p>

              </div>

            </div>

            <div className="hidden lg:flex items-center gap-3">

              <button className="rounded-xl bg-blue-50 px-5 py-2.5 font-medium text-blue-700 transition hover:bg-blue-100">
                Summary
              </button>

              <button className="rounded-xl bg-violet-50 px-5 py-2.5 font-medium text-violet-700 transition hover:bg-violet-100">
                Follow Up
              </button>

              <button className="rounded-xl bg-amber-50 px-5 py-2.5 font-medium text-amber-700 transition hover:bg-amber-100">
                Recommend
              </button>

            </div>

          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50 to-white px-8 py-8">

            <AssistantChat />

          </div>

          {/* Footer */}

          <div className="border-t border-slate-200 bg-white px-8 py-6">

            <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              AI understands meetings, edits, summaries,
              follow-ups and recommendations.

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