"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/artefak", label: "Artefak & Analisis" },
    { href: "/penilaian", label: "Penilaian" },
    { href: "/refleksi", label: "Refleksi" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-white hover:text-zinc-300 transition-colors">
          Muslich.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-900 rounded-md">
            Contact
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="w-full border-zinc-800 text-white hover:bg-zinc-900 rounded-md justify-start" onClick={() => setIsOpen(false)}>
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
