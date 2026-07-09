export default function TypingIndicator() {
  return (
    <div className="flex">

      <div className="rounded-2xl bg-white border border-gray-200 px-5 py-4 shadow-sm-sm">

        <div className="flex gap-2">

          <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" />

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{
              animationDelay: ".15s",
            }}
          />

          <span
            className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
            style={{
              animationDelay: ".3s",
            }}
          />

        </div>

      </div>

    </div>
  );
}