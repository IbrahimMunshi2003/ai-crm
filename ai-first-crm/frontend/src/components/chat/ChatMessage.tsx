import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bot,
  User,
  Sparkles,
} from "lucide-react";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`mb-8 flex items-start gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
          <Bot className="text-white" size={20} />
        </div>
      )}

      <div
        className={`max-w-3xl rounded-3xl px-6 py-5 shadow-sm transition-all ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            : "border border-slate-200 bg-white"
        }`}
      >
        {!isUser && (
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-600">
            <Sparkles size={15} />
            AI Assistant
          </div>
        )}

        <div
          className={`prose max-w-none ${
            isUser ? "prose-invert" : ""
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-800 shadow-lg">
          <User className="text-white" size={20} />
        </div>
      )}
    </div>
  );
}