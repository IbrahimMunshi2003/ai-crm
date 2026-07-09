import { Bot } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="border-b border-gray-200 px-6 py-5 flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">

          <Bot
            size={20}
            className="text-violet-600"
          />

        </div>

        <div>

          <h2 className="font-semibold">
            AI Assistant
          </h2>

          <p className="text-sm text-gray-500">
            LangGraph + Groq
          </p>

        </div>

      </div>

      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
        Online
      </span>

    </div>
  );
}