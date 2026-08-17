import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { RefleksiMatkulClient } from "@/components/sections/RefleksiMatkulClient";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "Refleksi Mata Kuliah",
  description:
    "Refleksi pengalaman belajar dari 6 mata kuliah Semester 1–2 menggunakan model 4C: Connection, Challenge, Concept, dan Change — LK 2 PPG Prajabatan.",
};

/* ============================================================================
   PAGE COMPONENT (Server Component)
   ============================================================================ */
export default function RefleksiMatkulPage() {
  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            LEMBAR KERJA 2 — REFLEKSI PENGALAMAN BELAJAR
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Refleksi
            <br />
            Mata Kuliah
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Refleksi pengalaman belajar dari 6 mata kuliah yang ditempuh
            sepanjang Semester 1–2, disusun menggunakan model 4C:
            Connection, Challenge, Concept, dan Change.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          4C MODEL EXPLAINER CARDS
          ================================================================ */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connection */}
          <div className="rounded-lg border border-sky-900/40 bg-sky-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-sky-900/30 font-mono text-xs font-bold text-sky-400">
                C
              </span>
              <h2 className="text-sm font-bold text-sky-300">Connection</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Menghubungkan pengalaman belajar dengan peran sebagai calon guru
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-lg border border-amber-900/40 bg-amber-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-amber-900/30 font-mono text-xs font-bold text-amber-400">
                C
              </span>
              <h2 className="text-sm font-bold text-amber-300">Challenge</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Mengidentifikasi tantangan yang menonjol selama perkuliahan
            </p>
          </div>

          {/* Concept */}
          <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-900/30 font-mono text-xs font-bold text-emerald-400">
                C
              </span>
              <h2 className="text-sm font-bold text-emerald-300">Concept</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Memahami konsep dan teori utama yang dipelajari
            </p>
          </div>

          {/* Change */}
          <div className="rounded-lg border border-violet-900/40 bg-violet-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-violet-900/30 font-mono text-xs font-bold text-violet-400">
                C
              </span>
              <h2 className="text-sm font-bold text-violet-300">Change</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Merencanakan perubahan nyata untuk pembelajaran ke depan
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          INTERACTIVE CLIENT SECTIONS (Rubric Banner + Course Tabs)
          ================================================================ */}
      <RefleksiMatkulClient />
    </>
  );
}
