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
import MobileSidebar from "../components/layout/MobileSidebar";

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
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 h-16 border-b border-[#E5E7EB] bg-white shrink-0">
        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <MobileSidebar />

            <div className="hidden md:flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <BrainCircuit size={18} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                Medico
              </h1>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5 uppercase tracking-wider">
                AI CRM
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-green-700">
                Connected
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                IM
              </div>
              <div className="hidden md:block">
                <h3 className="text-sm font-semibold text-slate-800 leading-none">
                  Ibrahim Munshi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto grid flex-1 w-full max-w-[1700px] grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-12 lg:gap-8 min-h-0">
        {/* Sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Details
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Auto-filled CRM Data
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <InteractionForm />
          </div>
        </aside>

        {/* Chat */}
        <main className="lg:col-span-8 xl:col-span-9 flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
          {/* Chat Header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Bot size={20} />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  AI Assistant
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  GPT-4 Powered
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                Summary
              </button>
              <button className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                Follow Up
              </button>
              <button className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                Recommend
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white px-6 py-6">
            <AssistantChat />
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 bg-white px-6 py-5 shrink-0">
            <div className="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Sparkles size={14} className="text-primary" />
              AI understands meetings, edits, summaries, follow-ups and recommendations.
            </div>
            <ChatInput onSend={handleSend} />
          </div>
        </main>
      </div>
    </div>
  );
}