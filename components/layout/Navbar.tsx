"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/artefak", label: "Artefak & Analisis" },
    { href: "/penilaian", label: "Penilaian" },
    { href: "/refleksi", label: "Refleksi" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-zinc-800/60 bg-black/40 backdrop-blur-md px-6 py-3 max-w-[95vw] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors whitespace-nowrap ${
              pathname === link.href ? "text-white" : "text-zinc-300 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
