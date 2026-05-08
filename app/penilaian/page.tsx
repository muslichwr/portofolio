import type { Metadata } from "next";
import {
  Download,
  FileText,
  TrendingUp,
  BookOpen,
  Monitor,
  ClipboardCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "Penilaian",
  description:
    "Rekapitulasi transparansi evaluasi — Lampiran 7 Instrumen Penilaian Penyusunan Perangkat Pembelajaran & Lampiran 8 Penilaian Praktik Mengajar 3 Siklus PPL Terbimbing.",
};

/* ============================================================================
   SHARED INTERFACES
   ============================================================================ */
interface CycleMetric {
  readonly metric: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly score: number;
  readonly maxScore: number;
}

interface TeachingCycle {
  readonly cycle: string;
  readonly label: string;
  readonly overallScore: number;
  readonly highlight: string;
  readonly metrics: readonly CycleMetric[];
}

/* ============================================================================
   DATA — Lampiran 7 (Penilaian Rancangan Pembelajaran — 3 Siklus)
   NOTE: Skor placeholder. Update dengan skor resmi GP setelah penilaian.
   ============================================================================ */
const lampiran7Cycles: readonly TeachingCycle[] = [
  {
    cycle: "Siklus 1",
    label: "OS Server & Web Server Dasar",
    overallScore: 87,
    highlight: "Fondasi Perencanaan",
    metrics: [
      { metric: "Identitas dan Kompetensi", icon: FileText, score: 88, maxScore: 100 },
      { metric: "Pengembangan Materi, Bahan, Sumber, dan Media", icon: BookOpen, score: 86, maxScore: 100 },
      { metric: "Skenario Kegiatan Pembelajaran", icon: Monitor, score: 89, maxScore: 100 },
      { metric: "Penilaian", icon: ClipboardCheck, score: 85, maxScore: 100 },
    ],
  },
  {
    cycle: "Siklus 2",
    label: "Full Stack Environment & DNS Lokal",
    overallScore: 91,
    highlight: "Peningkatan Signifikan",
    metrics: [
      { metric: "Identitas dan Kompetensi", icon: FileText, score: 92, maxScore: 100 },
      { metric: "Pengembangan Materi, Bahan, Sumber, dan Media", icon: BookOpen, score: 91, maxScore: 100 },
      { metric: "Skenario Kegiatan Pembelajaran", icon: Monitor, score: 92, maxScore: 100 },
      { metric: "Penilaian", icon: ClipboardCheck, score: 89, maxScore: 100 },
    ],
  },
  {
    cycle: "Siklus 3",
    label: "Git Deployment & Final Project Demo",
    overallScore: 96,
    highlight: "Pencapaian Optimal",
    metrics: [
      { metric: "Identitas dan Kompetensi", icon: FileText, score: 97, maxScore: 100 },
      { metric: "Pengembangan Materi, Bahan, Sumber, dan Media", icon: BookOpen, score: 96, maxScore: 100 },
      { metric: "Skenario Kegiatan Pembelajaran", icon: Monitor, score: 97, maxScore: 100 },
      { metric: "Penilaian", icon: ClipboardCheck, score: 94, maxScore: 100 },
    ],
  },
] as const;

/* ============================================================================
   DATA — Lampiran 8 (Penilaian Pelaksanaan Pembelajaran — 3 Siklus)
   NOTE: Skor placeholder. Update dengan skor resmi GP setelah penilaian.
   ============================================================================ */

const lampiran8Cycles: readonly TeachingCycle[] = [
  {
    cycle: "Siklus 1",
    label: "OS Server & Web Server Dasar",
    overallScore: 88,
    highlight: "Fondasi Pedagogis",
    metrics: [
      {
        metric: "Membuka Pelajaran",
        icon: FileText,
        score: 86,
        maxScore: 100,
      },
      {
        metric: "Melaksanakan Kegiatan Inti Pelajaran",
        icon: Monitor,
        score: 90,
        maxScore: 100,
      },
      {
        metric: "Menutup Pembelajaran",
        icon: ClipboardCheck,
        score: 87,
        maxScore: 100,
      },
      {
        metric: "Faktor Penunjang",
        icon: BookOpen,
        score: 89,
        maxScore: 100,
      },
    ],
  },
  {
    cycle: "Siklus 2",
    label: "Full Stack Environment & DNS Lokal",
    overallScore: 92,
    highlight: "Peningkatan Signifikan",
    metrics: [
      {
        metric: "Membuka Pelajaran",
        icon: FileText,
        score: 91,
        maxScore: 100,
      },
      {
        metric: "Melaksanakan Kegiatan Inti Pelajaran",
        icon: Monitor,
        score: 93,
        maxScore: 100,
      },
      {
        metric: "Menutup Pembelajaran",
        icon: ClipboardCheck,
        score: 90,
        maxScore: 100,
      },
      {
        metric: "Faktor Penunjang",
        icon: BookOpen,
        score: 93,
        maxScore: 100,
      },
    ],
  },
  {
    cycle: "Siklus 3",
    label: "Git Deployment & Final Project Demo",
    overallScore: 95,
    highlight: "Pencapaian Optimal",
    metrics: [
      {
        metric: "Membuka Pelajaran",
        icon: FileText,
        score: 94,
        maxScore: 100,
      },
      {
        metric: "Melaksanakan Kegiatan Inti Pelajaran",
        icon: Monitor,
        score: 96,
        maxScore: 100,
      },
      {
        metric: "Menutup Pembelajaran",
        icon: ClipboardCheck,
        score: 94,
        maxScore: 100,
      },
      {
        metric: "Faktor Penunjang",
        icon: BookOpen,
        score: 96,
        maxScore: 100,
      },
    ],
  },
] as const;

/* ============================================================================
   HELPER — Score bar component (pure server, no "use client" needed)
   ============================================================================ */
function ScoreBar({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) {
  const percentage = (score / maxScore) * 100;
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-sm bg-zinc-800">
        <div
          className="h-full rounded-sm bg-gradient-to-r from-zinc-500 to-zinc-300 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="shrink-0 font-mono text-sm font-semibold text-zinc-200">
        {score}
      </span>
    </div>
  );
}

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function PenilaianPage() {

  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Kicker */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            Transparansi Penilaian
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Transparansi
            <br />
            Evaluasi
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Rekapitulasi penilaian dari Guru Pamong (GP) untuk penyusunan
            perangkat dan praktik mengajar. Seluruh skor ditampilkan secara
            transparan sebagai bentuk akuntabilitas dan refleksi pertumbuhan
            profesional.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION A: LAMPIRAN 7 — Perangkat Pembelajaran
          ================================================================ */}
      <section id="lampiran-7" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                <FileText className="size-5 text-zinc-400" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                  Lampiran 7
                </p>
                <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                  Penilaian Perangkat Pembelajaran
                </h2>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              Instrumen penilaian penyusunan perangkat pembelajaran
              (RPP/Modul Ajar) yang dinilai oleh Guru Pamong sepanjang 3
              siklus PPL Terbimbing.
            </p>
          </div>

          {/* Progression overview — big numbers */}
          <div className="mb-12 grid grid-cols-3 gap-4">
            {lampiran7Cycles.map((cycle) => (
              <Card
                key={cycle.cycle}
                className="border-zinc-800/50 bg-zinc-950 text-center transition-colors hover:border-zinc-700"
              >
                <CardContent className="px-4 py-6">
                  <p className="font-mono text-xs text-zinc-600">
                    {cycle.cycle}
                  </p>
                  <p className="mt-2 text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
                    {cycle.overallScore}
                  </p>
                  <Badge
                    variant="outline"
                    className="mt-3 border-zinc-800 text-xs text-zinc-500"
                  >
                    {cycle.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Growth indicator */}
          <div className="mb-12 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <TrendingUp className="size-4 text-emerald-500" />
            <span>
              Peningkatan{" "}
              <span className="font-semibold text-emerald-400">+{lampiran7Cycles[lampiran7Cycles.length - 1].overallScore - lampiran7Cycles[0].overallScore} poin</span>{" "}
              dari Siklus 1 ke Siklus 3
            </span>
          </div>

          {/* Detailed cycle breakdown */}
          <div className="space-y-8">
            {lampiran7Cycles.map((cycle, cycleIndex) => (
              <Card
                key={cycle.cycle}
                className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardDescription className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                        {cycle.cycle}
                      </CardDescription>
                      <CardTitle className="mt-1 text-lg font-bold tracking-tight text-white">
                        {cycle.label}
                      </CardTitle>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                      <span className="text-lg font-extrabold text-white">
                        {cycle.overallScore}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  {cycle.metrics.map((metricItem) => {
                    const IconComponent = metricItem.icon;
                    return (
                      <div key={metricItem.metric} className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <IconComponent className="size-3.5 text-zinc-600" />
                          <span className="text-xs font-medium text-zinc-400">
                            {metricItem.metric}
                          </span>
                        </div>
                        <ScoreBar
                          score={metricItem.score}
                          maxScore={metricItem.maxScore}
                        />
                      </div>
                    );
                  })}

                  {/* Cycle growth indicator (for cycles 2 & 3) */}
                  {cycleIndex > 0 && (
                    <div className="flex items-center gap-1.5 pt-2 text-xs text-zinc-600">
                      <TrendingUp className="size-3 text-emerald-600" />
                      <span>
                        +
                        {cycle.overallScore -
                          lampiran7Cycles[cycleIndex - 1].overallScore}{" "}
                        poin dari {lampiran7Cycles[cycleIndex - 1].cycle}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION B: LAMPIRAN 8 — Praktik Mengajar 3 Siklus
          ================================================================ */}
      <section id="lampiran-8" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                <TrendingUp className="size-5 text-zinc-400" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                  Lampiran 8
                </p>
                <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                  Praktik Mengajar — 3 Siklus
                </h2>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              Progresivitas penilaian praktik mengajar dari Siklus 1 hingga
              Siklus 3, menunjukkan pertumbuhan kompetensi pedagogis secara
              konsisten.
            </p>
          </div>

          {/* Progression overview — big numbers */}
          <div className="mb-12 grid grid-cols-3 gap-4">
            {lampiran8Cycles.map((cycle) => (
              <Card
                key={cycle.cycle}
                className="border-zinc-800/50 bg-zinc-950 text-center transition-colors hover:border-zinc-700"
              >
                <CardContent className="px-4 py-6">
                  <p className="font-mono text-xs text-zinc-600">
                    {cycle.cycle}
                  </p>
                  <p className="mt-2 text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
                    {cycle.overallScore}
                  </p>
                  <Badge
                    variant="outline"
                    className="mt-3 border-zinc-800 text-xs text-zinc-500"
                  >
                    {cycle.highlight}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Growth indicator */}
          <div className="mb-12 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <TrendingUp className="size-4 text-emerald-500" />
            <span>
              Peningkatan{" "}
              <span className="font-semibold text-emerald-400">+7 poin</span>{" "}
              dari Siklus 1 ke Siklus 3
            </span>
          </div>

          {/* Detailed cycle breakdown */}
          <div className="space-y-8">
            {lampiran8Cycles.map((cycle, cycleIndex) => (
              <Card
                key={cycle.cycle}
                className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardDescription className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                        {cycle.cycle}
                      </CardDescription>
                      <CardTitle className="mt-1 text-lg font-bold tracking-tight text-white">
                        {cycle.label}
                      </CardTitle>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                      <span className="text-lg font-extrabold text-white">
                        {cycle.overallScore}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  {cycle.metrics.map((metricItem) => {
                    const IconComponent = metricItem.icon;
                    return (
                      <div key={metricItem.metric} className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <IconComponent className="size-3.5 text-zinc-600" />
                          <span className="text-xs font-medium text-zinc-400">
                            {metricItem.metric}
                          </span>
                        </div>
                        <ScoreBar
                          score={metricItem.score}
                          maxScore={metricItem.maxScore}
                        />
                      </div>
                    );
                  })}

                  {/* Cycle growth indicator (for cycles 2 & 3) */}
                  {cycleIndex > 0 && (
                    <div className="flex items-center gap-1.5 pt-2 text-xs text-zinc-600">
                      <TrendingUp className="size-3 text-emerald-600" />
                      <span>
                        +
                        {cycle.overallScore -
                          lampiran8Cycles[cycleIndex - 1].overallScore}{" "}
                        poin dari {lampiran8Cycles[cycleIndex - 1].cycle}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION C: UNDUH DOKUMEN PENILAIAN
          ================================================================ */}
      <section id="unduh-dokumen" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                <Download className="size-5 text-zinc-400" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                  Dokumen Resmi
                </p>
                <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                  Unduh Dokumen Penilaian
                </h2>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              Dokumen penilaian resmi yang diisi oleh Guru Pamong (GP) sepanjang
              3 siklus PPL Terbimbing.
            </p>
          </div>

          {/* Download grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Lampiran 7 */}
            <Card className="border-zinc-800/50 bg-zinc-950">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold tracking-tight text-white">
                  Lampiran 7 — Penilaian Perangkat Pembelajaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((siklus) => (
                  <div
                    key={`l7-s${siklus}`}
                    className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-zinc-400" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          Lampiran 7 · Siklus {siklus}
                        </p>
                        <p className="text-xs text-zinc-500">PDF Document</p>
                      </div>
                    </div>
                    <a href="#" download>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                      >
                        <Download className="size-3" />
                        Unduh
                      </button>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Lampiran 8 */}
            <Card className="border-zinc-800/50 bg-zinc-950">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold tracking-tight text-white">
                  Lampiran 8 — Penilaian Praktik Mengajar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3].map((siklus) => (
                  <div
                    key={`l8-s${siklus}`}
                    className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-zinc-400" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          Lampiran 8 · Siklus {siklus}
                        </p>
                        <p className="text-xs text-zinc-500">PDF Document</p>
                      </div>
                    </div>
                    <a href="#" download>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                      >
                        <Download className="size-3" />
                        Unduh
                      </button>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
