import {
  Menu,
  X,
  LayoutDashboard,
  Bot,
  BarChart3,
  CalendarClock,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "AI Assistant",
    icon: Bot,
    to: "/assistant",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    to: "/analytics",
  },
  {
    title: "Follow Ups",
    icon: CalendarClock,
    to: "/followups",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    to: "/dashboard",
  },
  {
    title: "Settings",
    icon: Settings,
    to: "/settings",
  },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 transition"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 transition-opacity" 
            onClick={() => setOpen(false)}
          />

          <aside className="relative h-full w-72 bg-slate-900 text-white flex flex-col z-10">
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="font-bold text-xl">Medico</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:bg-slate-800 rounded-lg transition"
              >
                <X />
              </button>
            </div>

            <nav className="flex-1 py-5 px-4 space-y-2 overflow-y-auto">
              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.to}
                    to={menu.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                        isActive ? "bg-blue-600" : "hover:bg-slate-800"
                      }`
                    }
                  >
                    <Icon size={20} />
                    {menu.title}
                  </NavLink>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}