"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block rounded px-3 py-2 ${
      pathname === path
        ? "bg-blue-100 text-blue-700 font-medium"
        : "hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed md:static top-0 left-0 h-full md:h-auto w-64 border-r bg-white p-4",
          "transition-transform md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between md:hidden mb-4">
          <div className="font-semibold">Menu</div>
          <button className="text-sm" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="space-y-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/courses" className={linkClass("/courses")}>
            Courses
          </Link>
          <Link href="/students" className={linkClass("/students")}>
            Students
          </Link>
          <Link href="/profile" className={linkClass("/profile")}>
            Profile
          </Link>
        </nav>
      </aside>
    </>
  );
}
