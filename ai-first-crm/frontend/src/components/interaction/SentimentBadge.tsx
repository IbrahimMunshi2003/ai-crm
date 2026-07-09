interface Props {
  value: string;
}

export default function SentimentBadge({ value }: Props) {
  const sentiment = value.toLowerCase();

  let style =
    "bg-gray-100 text-gray-700";

  if (sentiment === "positive")
    style = "bg-green-100 text-green-700";

  if (sentiment === "negative")
    style = "bg-red-100 text-red-700";

  if (sentiment === "neutral")
    style = "bg-yellow-100 text-yellow-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${style}`}
    >
      {value || "Not Set"}
    </span>
  );
}