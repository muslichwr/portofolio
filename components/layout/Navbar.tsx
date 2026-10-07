"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artefak", label: "Artefak & Analisis" },
  { href: "/penilaian", label: "Penilaian" },
  { href: "/refleksi", label: "Refleksi PPL" },
  { href: "/refleksi-akhir", label: "Refleksi Akhir" },
  { href: "/refleksi-matkul", label: "Refleksi Mata Kuliah" },
] as const;

const semesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    subtitle: "Praktik Pengalaman Lapangan",
    links: [
      { ...navLinks[2], description: "Praktik mengajar dalam tiga siklus" },
      { ...navLinks[3], description: "Perkembangan perangkat & praktik mengajar" },
      { ...navLinks[4], description: "Evaluasi diri dan rencana tindak lanjut" },
      { ...navLinks[5], description: "Sintesis perjalanan dan pembelajaran PPL" },
    ],
  },
  {
    id: "semester-2",
    label: "Semester 2",
    subtitle: "Pendalaman & Pengembangan Profesional",
    links: [
      { ...navLinks[6], description: "Refleksi 4C dan artefak pembelajaran" },
    ],
  },
] as const;

/** Determine whether a nav link is active for the current pathname.
 *  - Home (`/`) only matches exactly.
 *  - Other links match exactly OR when pathname is a nested child (`href + "/…"`).
 *  - This prevents `/refleksi` from matching `/refleksi-akhir`. */
function isActiveLink(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openSemester, setOpenSemester] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openSemester) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenSemester(null);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openSemester]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 flex w-full justify-center px-4 pt-4" role="banner">
      {/* ── Floating Pill Navbar ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-2 transition-all duration-500",
          hasScrolled
            ? "border-white/10 bg-black/70 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md"
        )}
        aria-label="Navigasi utama"
      >
        {/* Desktop Links */}
        <div
          ref={desktopNavRef}
          className="hidden items-center gap-0.5 md:flex"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setOpenSemester(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape" && openSemester) {
              desktopNavRef.current
                ?.querySelector<HTMLButtonElement>(`#${openSemester}-trigger`)
                ?.focus();
              setOpenSemester(null);
            }
          }}
        >
          {navLinks.slice(0, 2).map((link) => {
            const isActive = isActiveLink(link.href, pathname);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpenSemester(null)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
          {semesters.map((semester) => {
            const isActive = semester.links.some((link) => isActiveLink(link.href, pathname));
            const isOpen = openSemester === semester.id;

            return (
              <div key={semester.id} className="relative">
                <button
                  id={`${semester.id}-trigger`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${semester.id}-panel`}
                  onClick={() => setOpenSemester(isOpen ? null : semester.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{semester.label}</span>
                  <ChevronDown className={cn("relative z-10 size-3.5 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {isOpen && (
                  <motion.div
                    id={`${semester.id}-panel`}
                    aria-labelledby={`${semester.id}-trigger`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-3 w-[360px] rounded-2xl border border-white/10 bg-zinc-950 p-3 shadow-lg shadow-black/20 backdrop-blur-xl"
                  >
                    <div className="px-3 pb-3 pt-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{semester.label}</p>
                      <p className="mt-1 text-sm text-zinc-300">{semester.subtitle}</p>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-white/[0.06] pt-2">
                      {semester.links.map((link, index) => {
                        const isChildActive = isActiveLink(link.href, pathname);
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isChildActive ? "page" : undefined}
                            onClick={() => setOpenSemester(null)}
                            className={cn(
                              "flex gap-3 rounded-xl px-3 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
                              isChildActive ? "bg-white/[0.08] text-white" : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                            )}
                          >
                            <span className="pt-0.5 font-mono text-[10px] text-zinc-500" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            <span>
                              <span className="block text-sm font-medium">{link.label}</span>
                              <span className="mt-1 block text-xs leading-relaxed text-zinc-400">{link.description}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-white md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Tutup menu" : "Buka menu navigasi"}
        >
          {isMobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </motion.nav>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[4.5rem] z-40 mx-4 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href, pathname);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/[0.08] text-white"
                        : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
