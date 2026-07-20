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
  // {
  //   icon: ClipboardList,
  //   label: "Interactions",
  //   to: "/interactions",
  // },
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
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          Medico
        </h1>

        <p className="text-slate-400 text-sm">
          Pharma Assistant
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {links.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          );
        })}

      </nav>

      <div className="border-t border-slate-700 p-5">

        <p className="font-semibold">
          Ibrahim Munshi
        </p>

        <p className="text-sm text-slate-400">
          Sales Representative
        </p>

      </div>

    </aside>
  );
}