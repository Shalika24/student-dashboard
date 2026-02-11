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
    `block rounded-lg px-4 py-3 text-lg font-bold transition ${
      pathname === path
        ? "bg-white text-[#2A514C]"
        : "text-[#2A514C] hover:bg-white/40"
    }`;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className="fixed md:static top-0 left-0 z-50 h-full md:h-auto w-64 bg-[#CA8661] p-5 rounded-tr-2xl rounded-br-2xl">
        <div className="mb-5 text-sm uppercase tracking-wider font-extrabold text-[#2A514C]/90">
          Navigation
        </div>

        <nav className="space-y-3">
          <Link href="/" className={linkClass("/")} onClick={onClose}>
            Home
          </Link>

          <Link
            href="/courses"
            className={linkClass("/courses")}
            onClick={onClose}
          >
            Courses
          </Link>

          <Link
            href="/students"
            className={linkClass("/students")}
            onClick={onClose}
          >
            Students
          </Link>

          <Link
            href="/profile"
            className={linkClass("/profile")}
            onClick={onClose}
          >
            Profile
          </Link>
        </nav>
      </aside>
    </>
  );
}
