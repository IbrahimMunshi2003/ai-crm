import {
  Bell,
  Search,
  Menu,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import MobileSidebar from "./MobileSidebar";

interface Props {
  onMenuClick?: () => void;
}

export default function Navbar({
  onMenuClick,
}: Props) {
  return (
    <header className="sticky top-0 z-40 h-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">

      <div className="flex h-full items-center justify-between px-5 lg:px-8">

        {/* Left */}

        <div className="flex items-center gap-4 flex-1">

          <MobileSidebar />

          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden rounded-xl p-2 hover:bg-slate-100 transition"
            >
              <Menu size={22} />
            </button>
          )}

          {/* Search */}

          <div className="relative hidden md:block w-full max-w-lg">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search doctors, products, interactions..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* AI Badge */}

          <div className="hidden lg:flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-lg">

            <BrainCircuit size={18} />

            <span className="text-sm font-medium">
              AI Assistant
            </span>

          </div>

          {/* AI Status */}

          <div className="hidden xl:flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2">

            <Sparkles
              size={16}
              className="text-emerald-600"
            />

            <span className="text-sm font-medium text-emerald-700">
              Online
            </span>

          </div>

          {/* Notifications */}

          <button className="relative rounded-2xl bg-slate-100 p-3 transition hover:bg-slate-200">

            <Bell
              size={20}
              className="text-slate-700"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>

          </button>

          {/* User */}

          <button className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg">

              IM

            </div>

            <div className="hidden lg:block text-left">

              <p className="font-semibold text-slate-800">
                Ibrahim Munshi
              </p>

              <p className="text-xs text-slate-500">
                Sales Representative
              </p>

            </div>

          </button>

        </div>

      </div>

    </header>
  );
}