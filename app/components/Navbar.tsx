"use client";

import Link from "next/link";

export default function Navbar({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  return (
    <header className="h-14 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden border rounded px-3 py-1 text-sm"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <Link href="/" className="font-semibold">
          Student Dashboard
        </Link>
      </div>

      <nav className="hidden md:flex space-x-4 text-sm text-gray-600">
        <Link href="/courses">Courses</Link>
        <Link href="/students">Students</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
