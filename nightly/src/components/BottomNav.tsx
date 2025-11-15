"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type BottomNavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

type BottomNavProps = {
  items: BottomNavItem[];
};

export function BottomNav({ items }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#05020a]/95 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.45)] backdrop-blur">
      <ul className="flex items-center justify-between text-xs font-medium text-white/60">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href));

          return (
            <li key={item.href} className="flex flex-1 justify-center">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-2xl px-3 py-1.5 transition ${
                  active ? "text-white" : "hover:text-white/90"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/5 ${
                    active
                      ? "bg-white/15 text-white"
                      : "bg-white/5 text-white/70"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

