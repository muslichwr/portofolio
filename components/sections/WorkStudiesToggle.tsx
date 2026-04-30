"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";

/* ============================================================================
   DATA — Work (Professional & PPL) entries
   ============================================================================ */
interface TimelineEntry {
  readonly period: string;
  readonly role: string;
  readonly institution: string;
  readonly location: string;
  readonly description: string;
  readonly tags: readonly string[];
}

const workEntries: readonly TimelineEntry[] = [
  {
    period: "2025 — Sekarang",
    role: "Praktik Pengalaman Lapangan (PPL)",
    institution: "Mahasiswa PPG Prajabatan",
    location: "Kediri, Jawa Timur",
    description:
      "Melaksanakan 3 siklus praktik mengajar terbimbing. Fokus: Kurikulum Vokasi, konfigurasi DHCP Server, dan Web Deployment berbasis Nginx.",
    tags: ["Siklus 1", "Siklus 2", "Siklus 3", "DHCP Server"],
  },
  {
    period: "2025 — Sekarang",
    role: "Pengajar Penuh Waktu & Admin Lab",
    institution: "SMKS Tunas Bangsa Pare",
    location: "Kediri, Jawa Timur",
    description:
      "Mengajar Konsentrasi Keahlian TKJ pada mata pelajaran Administrasi Sistem Jaringan. Mengelola laboratorium jaringan dan merancang praktikum berbasis industri.",
    tags: ["TKJ", "ASJ", "Lab Admin"],
  },
  {
    period: "2024",
    role: "Fullstack Developer Intern",
    institution: "Dinas Komunikasi dan Informatika (Diskominfo)",
    location: "Kota Kediri",
    description:
      "Merancang dan membangun aplikasi web internal menggunakan Next.js dan Laravel. Mengimplementasikan RESTful API dan optimasi database pada shared hosting.",
    tags: ["Next.js", "Laravel", "REST API"],
  },
] as const;

/* ============================================================================
   DATA — Studies (Education) entries
   ============================================================================ */
const studiesEntries: readonly TimelineEntry[] = [
  {
    period: "2025 — Sekarang",
    role: "PPG Prajabatan",
    institution: "Program Profesi Guru Kejuruan TKJ",
    location: "Universitas Negeri Surabaya",
    description:
      "Program sertifikasi profesi guru yang fokus pada pengembangan kompetensi pedagogik, profesional, sosial, dan kepribadian untuk guru kejuruan TKJ.",
    tags: ["Sertifikasi", "Pedagogik", "Kejuruan"],
  },
  {
    period: "2021 — 2025",
    role: "S1 Pendidikan Teknologi Informasi",
    institution: "Universitas Negeri Surabaya (UNESA)",
    location: "Surabaya, Jawa Timur",
    description:
      "Mendalami pendidikan teknologi informasi dengan filosofi 'Logic First, Syntax Later'. Fokus pada pengembangan software dan pedagogik teknologi. IPK: 3.78.",
    tags: ["GPA 3.78", "Logic First", "IT Education"],
  },
] as const;

type TabKey = "work" | "studies";

const tabs: readonly { readonly key: TabKey; readonly label: string; readonly icon: typeof Briefcase }[] = [
  { key: "work", label: "Work", icon: Briefcase },
  { key: "studies", label: "Studies", icon: GraduationCap },
] as const;

/* ============================================================================
   COMPONENT
   ============================================================================ */
export function WorkStudiesToggle() {
  const [activeTab, setActiveTab] = useState<TabKey>("work");

  const entries = activeTab === "work" ? workEntries : studiesEntries;

  return (
    <div>
      {/* ── Toggle Tabs ── */}
      <div className="mb-12 flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 w-fit">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="work-studies-active"
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <IconComponent className="relative z-10 size-4" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Timeline List ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="space-y-0"
        >
          {entries.map((entry, index) => (
            <div key={`${activeTab}-${index}`}>
              {/* Divider */}
              {index > 0 && (
                <div className="border-t border-white/[0.04]" />
              )}

              <div className="group grid grid-cols-1 gap-4 py-8 transition-colors md:grid-cols-[200px_1fr]">
                {/* Left column — period & location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Calendar className="size-3.5" />
                    <span className="font-mono text-xs">{entry.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600">
                    <MapPin className="size-3.5" />
                    <span className="text-xs">{entry.location}</span>
                  </div>
                </div>

                {/* Right column — content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-zinc-100">
                    {entry.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400">
                    {entry.institution}
                  </p>
                  <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
                    {entry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs text-zinc-500 transition-colors group-hover:border-white/10 group-hover:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
