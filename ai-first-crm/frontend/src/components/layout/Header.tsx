import {
  Bell,
  Search,
} from "lucide-react";

import MobileSidebar from "./MobileSidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white h-16 border-b border-[#E5E7EB] flex items-center justify-between px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <div className="hidden sm:flex items-center gap-2 bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg px-3 py-1.5 w-64 md:w-80 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all">
          <Search size={16} className="text-slate-400" />
          <input
            className="bg-transparent outline-none flex-1 text-sm text-slate-800 placeholder:text-slate-400"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold border border-primary/20">
            IM
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800 leading-none">
              Ibrahim
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}