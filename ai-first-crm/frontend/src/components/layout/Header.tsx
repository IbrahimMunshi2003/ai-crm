import {
  Bell,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white h-20 shadow-sm flex items-center justify-between px-8">

      <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2 w-96">

        <Search size={18} />

        <input
          className="bg-transparent outline-none flex-1"
          placeholder="Search doctor..."
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell className="text-slate-600" />

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">

            IM

          </div>

          <div>

            <p className="font-semibold">

              Ibrahim Munshi

            </p>

            <p className="text-sm text-slate-500">

              Medical Representative

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}