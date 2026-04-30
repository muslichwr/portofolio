"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  School,
  Award,
} from "lucide-react";

/* ============================================================================
   DATA — Work (Professional & PPL) entries
   ============================================================================ */
interface TimelineEntry {
  readonly period: string;
  readonly role: string;
  readonly institution: string;
  readonly description: string;
  readonly icon: typeof Briefcase;
  readonly iconColor: string;
}

const workEntries: readonly TimelineEntry[] = [
  {
    period: "2025 — Sekarang",
    role: "Mahasiswa PPG Prajabatan",
    institution: "Praktik Pengalaman Lapangan (PPL)",
    description:
      "Melaksanakan 3 siklus praktik mengajar terbimbing. Fokus: Kurikulum Vokasi, konfigurasi DHCP Server, dan Web Deployment berbasis Nginx.",
    icon: BookOpen,
    iconColor: "text-emerald-400",
  },
  {
    period: "2025 — Sekarang",
    role: "SMKS Tunas Bangsa Pare",
    institution: "Pengajar Penuh Waktu & Admin Lab",
    description:
      "Mengajar Konsentrasi Keahlian TKJ pada mata pelajaran Administrasi Sistem Jaringan. Mengelola laboratorium jaringan dan merancang praktikum berbasis industri.",
    icon: School,
    iconColor: "text-cyan-400",
  },
  {
    period: "2024",
    role: "Dinas Komunikasi dan Informatika (Diskominfo)",
    institution: "Fullstack Developer Intern",
    description:
      "Merancang dan membangun aplikasi web internal menggunakan Next.js dan Laravel. Mengimplementasikan RESTful API dan optimasi database pada shared hosting.",
    icon: Code2,
    iconColor: "text-blue-400",
  },
] as const;

/* ============================================================================
   DATA — Studies (Education) entries
   ============================================================================ */
const studiesEntries: readonly TimelineEntry[] = [
  {
    period: "2025 — Sekarang",
    role: "Program Profesi Guru Kejuruan TKJ",
    institution: "PPG Prajabatan",
    description:
      "Program sertifikasi profesi guru yang fokus pada pengembangan kompetensi pedagogik, profesional, sosial, dan kepribadian untuk guru kejuruan TKJ.",
    icon: Award,
    iconColor: "text-amber-400",
  },
  {
    period: "2021 — 2025",
    role: "Universitas Negeri Surabaya (UNESA)",
    institution: "S1 Pendidikan Teknologi Informasi",
    description:
      "Mendalami pendidikan teknologi informasi dengan filosofi 'Logic First, Syntax Later'. Fokus pada pengembangan software dan pedagogik teknologi. IPK: 3.78.",
    icon: GraduationCap,
    iconColor: "text-violet-400",
  },
] as const;

type TabKey = "work" | "studies";

/* ============================================================================
   COMPONENT
   ============================================================================ */
export function WorkStudiesToggle() {
  const [activeTab, setActiveTab] = useState<TabKey>("work");

  const entries = activeTab === "work" ? workEntries : studiesEntries;

  return (
    <div>
      {/* ── Full-width Toggle Tabs (matching rafaelamaral.dev) ── */}
      <div className="mb-10 grid grid-cols-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
        <button
          onClick={() => setActiveTab("work")}
          className={cn(
            "relative flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300",
            activeTab === "work" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          {activeTab === "work" && (
            <motion.span
              layoutId="experience-tab-active"
              className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.06]"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <Briefcase className="relative z-10 size-4" />
          <span className="relative z-10">Work</span>
        </button>

        <button
          onClick={() => setActiveTab("studies")}
          className={cn(
            "relative flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300",
            activeTab === "studies" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
          )}
        >
          {activeTab === "studies" && (
            <motion.span
              layoutId="experience-tab-active"
              className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.06]"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <GraduationCap className="relative z-10 size-4" />
          <span className="relative z-10">Studies</span>
        </button>
      </div>

      {/* ── Timeline Cards (rafaelamaral.dev card-style with left icons) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
        >
          {entries.map((entry, index) => {
            const IconComponent = entry.icon;
            return (
              <div
                key={`${activeTab}-${index}`}
                className={cn(
                  "group flex gap-5 px-6 py-6 transition-colors hover:bg-white/[0.02]",
                  index > 0 && "border-t border-white/[0.04]"
                )}
              >
                {/* Icon circle */}
                <div className="flex shrink-0 pt-1">
                  <div className="flex size-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                    <IconComponent className={cn("size-5", entry.iconColor)} />
                  </div>
                </div>

                {/* Content */}
                <div className="min-w-0 space-y-1.5">
                  {/* Period */}
                  <p className="text-xs text-zinc-500">{entry.period}</p>

                  {/* Institution / Company name — bold */}
                  <h3 className="text-base font-bold tracking-tight text-white">
                    {entry.role}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-zinc-400">{entry.institution}</p>

                  {/* Description */}
                  <p className="pt-1 text-sm leading-relaxed text-zinc-500">
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
