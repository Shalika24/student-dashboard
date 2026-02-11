"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  HiHome,
  HiBookOpen,
  HiUsers,
  HiUserCircle,
} from "react-icons/hi2";

type Item = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  { href: "/", label: "HOME", Icon: HiHome },
  { href: "/courses", label: "COURSES", Icon: HiBookOpen },
  { href: "/students", label: "STUDENTS", Icon: HiUsers },
  { href: "/profile", label: "PROFILE", Icon: HiUserCircle },
];

export default function Sidebar({
  open,
  onClose,
  collapsed,
}: {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed md:static top-0 left-0 z-40 h-screen",
          collapsed ? "w-20" : "w-64",
          "transition-all duration-300",
          "bg-gradient-to-b from-[#1e3a8a] via-[#4f6fb3] to-white",
          "pt-4 px-3",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="px-2 pb-6">
          <div className="flex items-center gap-3 rounded-xl bg-white/15 border border-white/20 px-3 py-3">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/logo.svg"
                alt="Dashboard Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {!collapsed && (
              <div className="leading-tight text-white">
                <div className="text-sm font-bold tracking-wide uppercase">
                  Student
                </div>
                <div className="text-xs opacity-80">Dashboard</div>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-2 space-y-2">
          {items.map(({ href, label, Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={[
                  "relative group flex items-center",
                  collapsed ? "justify-center" : "justify-start",
                  "rounded-md px-3 py-3",
                  "transition-all duration-200",
                  active
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/15",
                ].join(" ")}
              >
                {/* Animated active bar */}
                <span
                  className={[
                    "absolute left-0 top-2 bottom-2 w-1 rounded-full bg-white",
                    "transition-all duration-300",
                    active
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2",
                  ].join(" ")}
                />

                <Icon className="text-xl" />

                {!collapsed && (
                  <span className="ml-3 text-sm font-semibold tracking-wide">
                    {label}
                  </span>
                )}

                {/* Tooltip when collapsed */}
                {collapsed && (
                  <span
                    className="
                      pointer-events-none absolute left-full ml-3
                      rounded-md bg-[#1e3a8a]
                      px-3 py-2 text-xs font-semibold text-white
                      opacity-0 translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-200
                      shadow-lg
                    "
                  >
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
