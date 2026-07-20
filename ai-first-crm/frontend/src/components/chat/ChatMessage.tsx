import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  Bot,
  User,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {
  const isUser = role === "user";

  const [copied, setCopied] =
    useState(false);

  function copyMessage() {
    navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`flex gap-4 mb-8 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (

        <div className="flex-shrink-0">

          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">

            <Bot
              size={22}
              className="text-white"
            />

          </div>

        </div>

      )}

      {/* Message */}

      <div
        className={`group relative max-w-[85%] rounded-3xl shadow-sm transition hover:shadow-md ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "border border-slate-200 bg-white"
        }`}
      >
        {/* Header */}

        <div
          className={`flex items-center justify-between px-6 pt-5 ${
            isUser
              ? "text-blue-100"
              : "text-slate-500"
          }`}
        >
          <div className="flex items-center gap-2">

            {isUser ? (
              <>
                <User size={15} />
                <span className="text-sm font-semibold">
                  You
                </span>
              </>
            ) : (
              <>
                <Sparkles
                  size={15}
                  className="text-blue-600"
                />

                <span className="text-sm font-semibold text-blue-600">
                  AI Assistant
                </span>
              </>
            )}

          </div>

          <span className="text-xs opacity-70">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

        </div>

        {/* Markdown */}

        <div
          className={`prose max-w-none px-6 py-4 ${
            isUser
              ? "prose-invert"
              : ""
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Footer */}

        {!isUser && (

          <div className="flex justify-end border-t border-slate-100 px-4 py-3">

            <button
              onClick={copyMessage}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100"
            >
              {copied ? (
                <>
                  <Check
                    size={16}
                    className="text-green-600"
                  />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>

          </div>

        )}

      </div>

      {/* User Avatar */}

      {isUser && (

        <div className="flex-shrink-0">

          <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center shadow-lg">

            <User
              size={22}
              className="text-white"
            />

          </div>

        </div>

      )}

    </div>
  );
}