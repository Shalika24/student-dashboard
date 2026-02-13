"use client";

import Link from "next/link";
import { HiBars3, HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

export default function Navbar({
  onToggleSidebar,
  onToggleCollapse,
  collapsed,
}: {
  onToggleSidebar: () => void;
  onToggleCollapse: () => void;
  collapsed: boolean;
}) {
  return (
    <header className="h-14 bg-[var(--blue-900)] text-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Mobile menu */}
        <button
          className="md:hidden rounded-md border border-white/30 px-3 py-1 text-sm"
          onClick={onToggleSidebar}
          aria-label="Open sidebar"
        >
          <HiBars3 className="text-lg" />
        </button>

        {/* Desktop collapse */}
        <button
          className="hidden md:inline-flex items-center justify-center rounded-md border border-white/30 px-2 py-1"
          onClick={onToggleCollapse}
          aria-label="Collapse sidebar"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <HiChevronDoubleRight className="text-lg" />
          ) : (
            <HiChevronDoubleLeft className="text-lg" />
          )}
        </button>

        <Link href="/" className="font-semibold tracking-wide">
          Dashboard
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm font-semibold">
        <Link className="hover:opacity-90" href="/courses">
          Courses
        </Link>
        <Link className="hover:opacity-90" href="/students">
          Students
        </Link>
        <Link className="hover:opacity-90" href="/profile">
          Profile
        </Link>
      </nav>
    </header>
  );
}
