import {
  Menu,
  X,
  LayoutDashboard,
  Bot,
  Users,
  BarChart3,
  CalendarClock,
  Settings,
} from "lucide-react";

import { useState } from "react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Assistant",
    icon: Bot,
  },
  {
    title: "Interactions",
    icon: Users,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Follow Ups",
    icon: CalendarClock,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">

          <aside className="h-full w-72 bg-slate-900 text-white">

            <div className="flex justify-between items-center p-6 border-b border-slate-700">

              <h2 className="font-bold">

                Medico

              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                <X />
              </button>

            </div>

            <nav className="py-5">

              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <button
                    key={menu.title}
                    className="w-full flex items-center gap-4 px-6 py-4 hover:bg-slate-800"
                  >
                    <Icon size={20} />

                    {menu.title}
                  </button>
                );
              })}

            </nav>

          </aside>

        </div>
      )}
    </>
  );
}