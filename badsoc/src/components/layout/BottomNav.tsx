"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/home" },
  { label: "Meets", href: "/meets" },
  { label: "Queue", href: "/queue" },
  { label: "Profile", href: "/profile" },
  { label: "Share", href: "/share-card" },
];

export default function BottomNav() {
  const pathname = usePathname() || "";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0f0a] border-t border-white/5 p-2">
      <div className="max-w-md mx-auto flex">
        {items.map((it) => {
          const active = pathname.startsWith(it.href);
          return (
            <Link key={it.href} href={it.href} className={`flex-1 text-center py-2 text-xs ${active ? "text-green-400 font-semibold" : "text-white/60"}`}>
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
