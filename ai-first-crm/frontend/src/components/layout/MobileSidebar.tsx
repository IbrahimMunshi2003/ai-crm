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

const links = [
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
        className="md:hidden p-2 -ml-2 rounded-lg hover:bg-slate-200/50 transition-colors text-slate-600"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" 
            onClick={() => setOpen(false)}
          />

          <aside className="relative h-full w-64 bg-[#F8F9FA] text-slate-800 flex flex-col z-10 border-r border-[#E5E7EB] shadow-2xl animate-in slide-in-from-left duration-200">
            <div className="flex justify-between items-center p-5">
              <div>
                <h2 className="font-bold text-xl tracking-tight text-slate-900">Medico</h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">AI Pharmaceutical CRM</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 hover:bg-slate-200/50 rounded-lg transition-colors text-slate-500"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
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
                        {item.title}
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
        </div>
      )}
    </>
  );
}