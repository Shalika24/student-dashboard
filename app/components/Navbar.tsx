"use client";

import Link from "next/link";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="h-14 bg-[#2A514C] text-white px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden border border-white/40 rounded px-3 py-1 text-sm text-white hover:bg-white/10"
          onClick={onToggleSidebar}
        >
          ☰
        </button>

        <Link href="/" className="font-bold tracking-wide text-white">
          Student Dashboard
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 text-sm font-semibold">
        <Link
          className="hover:text-[#CA8661] transition"
          href="/courses"
        >
          Courses
        </Link>

        <Link
          className="hover:text-[#CA8661] transition"
          href="/students"
        >
          Students
        </Link>

        <Link
          className="hover:text-[#CA8661] transition"
          href="/profile"
        >
          Profile
        </Link>
      </nav>
    </header>
  );
}
