import {
  LayoutDashboard,
  Bot,
  BarChart3,
  CalendarClock,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    icon: Bot,
    label: "AI Assistant",
    to: "/assistant",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    to: "/analytics",
  },
  {
    icon: CalendarClock,
    label: "Follow Ups",
    to: "/followups",
  },
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: Settings,
    label: "Settings",
    to: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#F8F9FA] text-slate-800 flex flex-col h-full border-r border-[#E5E7EB]">
      <div className="p-5 flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Medico
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          AI Pharmaceutical CRM
        </p>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? "bg-white text-primary shadow-sm border border-[#E5E7EB]"
                    : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={18} className={isActive ? "text-primary" : "text-slate-400"} />
                  {item.label}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 m-3 mt-auto rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
          IM
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Ibrahim Munshi
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Sales Rep
          </p>
        </div>
      </div>
    </aside>
  );
}