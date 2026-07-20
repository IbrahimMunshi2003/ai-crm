import { useState } from "react";

import {
  SendHorizontal,
  Sparkles,
} from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: Props) {
  const [message, setMessage] =
    useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="space-y-4">

      <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {[
          "Met Dr Smith today...",
          "Summarize interaction",
          "Recommend next action",
          "Generate follow-up",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setMessage(item)}
            className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Input */}

      <div className="rounded-3xl border border-slate-200 bg-white shadow-lg">

        <textarea
          rows={3}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Describe today's interaction naturally..."
          className="w-full resize-none rounded-t-3xl border-none bg-transparent px-6 pt-5 text-slate-700 outline-none placeholder:text-slate-400"
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              send();
            }
          }}
        />

        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            AI understands natural language

          </div>

          <button
            onClick={send}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 sm:px-5 sm:py-3 font-medium text-white shadow-lg transition hover:scale-105"
          >
            <span className="hidden sm:inline">Send</span>

            <SendHorizontal size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}