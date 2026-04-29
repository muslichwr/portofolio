"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/artefak", label: "Artefak & Analisis" },
  { href: "/penilaian", label: "Penilaian" },
  { href: "/refleksi", label: "Refleksi" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-zinc-800/80 bg-black/80 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Portfolio.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <a href="mailto:muslichwr@gmail.com">
              <Button variant="outline" size="sm">
                <Mail data-icon="inline-start" className="size-3.5" />
                Contact
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Buka menu navigasi"
                />
              }
            >
              <Menu className="size-5 text-zinc-300" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-zinc-800 bg-black/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col gap-2 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-400 hover:bg-zinc-900/50 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-zinc-800 pt-4">
                  <a href="mailto:muslichwr@gmail.com" className="block">
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail data-icon="inline-start" className="size-3.5" />
                      Contact
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
