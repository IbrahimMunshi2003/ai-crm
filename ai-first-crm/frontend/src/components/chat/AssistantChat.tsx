import { useEffect, useRef } from "react";

import {
  Bot,
  Sparkles,
} from "lucide-react";

import { useAppSelector } from "../../app/hooks";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

export default function AssistantChat() {
  const bottomRef =
    useRef<HTMLDivElement>(null);

  const {
    messages,
    loading,
    currentTool,
  } = useAppSelector(
    (state) => state.chat
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="h-full overflow-y-auto px-2">

      {currentTool && (
        <div className="sticky top-0 z-20 mb-6 flex justify-center">

          <div className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg">

            ⚡ {currentTool}

          </div>

        </div>
      )}

      {messages.length === 0 && !loading && (

        <div className="flex h-full flex-col items-center justify-center text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl">

            <Bot
              size={42}
              className="text-white"
            />

          </div>

          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Welcome to Medico
          </h2>

          <p className="mb-8 max-w-xl text-slate-500">
            Describe your meeting naturally and let AI
            extract the CRM information automatically.
          </p>

          <div className="grid max-w-3xl grid-cols-2 gap-4">

            {[
              "Today I met Dr Smith and discussed Ozempic.",
              "Generate a summary.",
              "Recommend the next action.",
              "Update the doctor's name to Dr John.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-2 flex items-center gap-2 text-blue-600">

                  <Sparkles size={16} />

                  <span className="font-medium">
                    Example
                  </span>

                </div>

                <p className="text-sm text-slate-600">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      )}

      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />

    </div>
  );
}