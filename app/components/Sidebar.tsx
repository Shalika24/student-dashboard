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
    `block rounded-xl px-4 py-3 text-[16px] font-bold transition ${
      pathname === path
        ? "bg-white text-black shadow-sm"
        : "text-white hover:bg-white/15"
    }`;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/35 md:hidden z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed md:static z-50 top-0 left-0 h-full w-72 md:w-64",
          "bg-[var(--blue-600)] text-white px-5 py-7",
          "rounded-tr-[28px] rounded-br-[28px]",
          "shadow-md",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "transition-transform duration-200",
        ].join(" ")}
      >
        <div className="mb-6 text-sm uppercase tracking-widest font-extrabold text-white/95">
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

        <div className="mt-10 rounded-2xl bg-white/10 p-4 text-sm text-white/90">
          Tip: Use the menu (☰) on mobile.
        </div>
      </aside>
    </>
  );
}
