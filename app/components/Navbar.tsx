"use client";

import Link from "next/link";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="h-16 bg-[var(--blue-900)] text-white px-4 sm:px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <Link href="/" className="font-bold tracking-wide text-lg">
          Student Dashboard
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <Link className="hover:text-blue-200" href="/courses">
          Courses
        </Link>
        <Link className="hover:text-blue-200" href="/students">
          Students
        </Link>
        <Link className="hover:text-blue-200" href="/profile">
          Profile
        </Link>
      </nav>
    </header>
  );
}
