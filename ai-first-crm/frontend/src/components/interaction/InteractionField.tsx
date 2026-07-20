import {
  CalendarDays,
  ClipboardList,
  FileText,
  HeartHandshake,
  Pill,
  Stethoscope,
  UserRound,
  CheckCircle2,
} from "lucide-react";

interface Props {
  label: string;
  value: unknown;
}

export default function InteractionField({
  label,
  value,
}: Props) {
  const text =
    value === "" ||
    value === null ||
    value === undefined
      ? "-"
      : String(value);

  function icon() {
    switch (label) {
      case "HCP Name":
        return <UserRound size={18} />;

      case "Interaction Date":
        return <CalendarDays size={18} />;

      case "Interaction Type":
        return <ClipboardList size={18} />;

      case "Product":
        return <Pill size={18} />;

      case "Sentiment":
        return <HeartHandshake size={18} />;

      case "Discussion":
        return <Stethoscope size={18} />;

      case "Summary":
        return <FileText size={18} />;

      default:
        return <CheckCircle2 size={18} />;
    }
  }

  function sentimentColor() {
    if (label !== "Sentiment")
      return "text-slate-700";

    if (text.toLowerCase() === "positive")
      return "bg-green-100 text-green-700";

    if (text.toLowerCase() === "negative")
      return "bg-red-100 text-red-700";

    return "bg-yellow-100 text-yellow-700";
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">

      <div className="mb-3 flex items-center gap-2 text-blue-600">

        {icon()}

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>

      </div>

      {label === "Sentiment" ? (
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${sentimentColor()}`}
        >
          {text}
        </span>
      ) : label === "Brochure Shared" ? (
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
            text === "true"
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {text === "true" ? "Shared ✓" : "Not Shared"}
        </span>
      ) : (
        <p className="text-sm leading-6 text-slate-700 break-words whitespace-pre-wrap">
          {text}
        </p>
      )}
    </div>
  );
}