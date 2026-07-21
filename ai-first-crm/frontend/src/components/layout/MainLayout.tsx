import { Outlet } from "react-router-dom";

import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-100 overflow-x-hidden">

      <div className="hidden md:flex flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        <Header />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
}