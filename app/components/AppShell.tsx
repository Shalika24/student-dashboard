"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile drawer
  const [collapsed, setCollapsed] = useState(false); // desktop collapse

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        onToggleCollapse={() => setCollapsed((v) => !v)}
        collapsed={collapsed}
      />

      <div className="flex flex-1">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          collapsed={collapsed}
        />

        <main className="flex-1 p-6">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
