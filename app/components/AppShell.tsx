"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-sand/10 text-brand-dark">
      <div className="min-h-screen flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

        <div className="flex flex-1">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <main className="flex-1 p-4 sm:p-6">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
