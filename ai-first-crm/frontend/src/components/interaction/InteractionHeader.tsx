import { ClipboardList } from "lucide-react";

export default function InteractionHeader() {
  return (
    <div className="border-b border-gray-200 px-6 py-5 flex items-center gap-3">

      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">

        <ClipboardList
          size={20}
          className="text-blue-600"
        />

      </div>

      <div>

        <h2 className="font-semibold text-lg">
          Interaction Details
        </h2>

        <p className="text-sm text-gray-500">
          Auto-filled by AI Assistant
        </p>

      </div>

    </div>
  );
}