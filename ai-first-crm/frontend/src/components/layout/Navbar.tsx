import {
  Bell,
  Search,
  Menu,
} from "lucide-react";
import MobileSidebar from "./MobileSidebar";

interface Props {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: Props) {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
              <MobileSidebar />
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 transition text-slate-600"
          >
            <Menu size={24} />
          </button>
        )}

        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            placeholder="Search doctors..."
            className="pl-10 pr-4 py-2 rounded-xl border w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 ml-4">
        <button className="relative p-2 rounded-full hover:bg-slate-100 transition text-slate-600">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shrink-0">
            IM
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-sm">
              Ibrahim Munshi
            </p>
            <p className="text-xs text-gray-500">
              Sales Representative
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}