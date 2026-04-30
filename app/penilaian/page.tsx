import type { Metadata } from "next";
import {
  Download,
  FileText,
  TrendingUp,
  Award,
  Target,
  BookOpen,
  Monitor,
  ClipboardCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
   DATA — Lampiran 7 (Perangkat Pembelajaran Criteria)
   ============================================================================ */
interface AssessmentCriteria {
  readonly criteria: string;
  readonly description: string;
  readonly score: number;
  readonly maxScore: number;
}

const lampiran7Criteria: readonly AssessmentCriteria[] = [
  {
    criteria: "Perumusan Tujuan Pembelajaran",
    description:
      "Kesesuaian tujuan dengan Capaian Pembelajaran (CP), kejelasan indikator pencapaian kompetensi, dan keterukuran hasil belajar.",
    score: 93,
    maxScore: 100,
  },
  {
    criteria: "Pemilihan & Pengorganisasian Materi",
    description:
      "Relevansi materi dengan tujuan pembelajaran, kedalaman dan keluasan konten, serta kesesuaian dengan karakteristik peserta didik vokasi TKJ.",
    score: 91,
    maxScore: 100,
  },
  {
    criteria: "Skenario Pembelajaran",
    description:
      "Sistematika kegiatan pembelajaran (pembuka, inti, penutup), variasi metode, alokasi waktu, dan penerapan pendekatan PBL/PjBL.",
    score: 94,
    maxScore: 100,
  },
  {
    criteria: "Pemilihan Media & Sumber Belajar",
    description:
      "Kesesuaian media dengan materi, pemanfaatan teknologi (Cisco Packet Tracer, Mikrotik), dan aksesibilitas sumber belajar digital.",
    score: 92,
    maxScore: 100,
  },
  {
    criteria: "Instrumen Evaluasi & Asesmen",
    description:
      "Kelengkapan instrumen penilaian (formatif & sumatif), rubrik penilaian kinerja praktik, dan kesesuaian dengan tujuan pembelajaran.",
    score: 90,
    maxScore: 100,
  },
] as const;

/* ============================================================================
   DATA — Lampiran 8 (Praktik Mengajar 3 Siklus)
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

const lampiran8Cycles: readonly TeachingCycle[] = [
  {
    cycle: "Siklus 1",
    label: "Konfigurasi DHCP Server",
    overallScore: 88,
    highlight: "Fondasi Pedagogis",
    metrics: [
      {
        metric: "Penguasaan Kelas",
        icon: Target,
        score: 86,
        maxScore: 100,
      },
      {
        metric: "Penggunaan Media & Teknologi",
        icon: Monitor,
        score: 90,
        maxScore: 100,
      },
      {
        metric: "Evaluasi Pembelajaran",
        icon: ClipboardCheck,
        score: 87,
        maxScore: 100,
      },
      {
        metric: "Penguasaan Materi",
        icon: BookOpen,
        score: 89,
        maxScore: 100,
      },
    ],
  },
  {
    cycle: "Siklus 2",
    label: "Web Server Deployment",
    overallScore: 92,
    highlight: "Peningkatan Signifikan",
    metrics: [
      {
        metric: "Penguasaan Kelas",
        icon: Target,
        score: 91,
        maxScore: 100,
      },
      {
        metric: "Penggunaan Media & Teknologi",
        icon: Monitor,
        score: 93,
        maxScore: 100,
      },
      {
        metric: "Evaluasi Pembelajaran",
        icon: ClipboardCheck,
        score: 90,
        maxScore: 100,
      },
      {
        metric: "Penguasaan Materi",
        icon: BookOpen,
        score: 93,
        maxScore: 100,
      },
    ],
  },
  {
    cycle: "Siklus 3",
    label: "Evaluasi Komprehensif",
    overallScore: 95,
    highlight: "Pencapaian Optimal",
    metrics: [
      {
        metric: "Penguasaan Kelas",
        icon: Target,
        score: 94,
        maxScore: 100,
      },
      {
        metric: "Penggunaan Media & Teknologi",
        icon: Monitor,
        score: 96,
        maxScore: 100,
      },
      {
        metric: "Evaluasi Pembelajaran",
        icon: ClipboardCheck,
        score: 94,
        maxScore: 100,
      },
      {
        metric: "Penguasaan Materi",
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
   HELPER — Average calculator
   ============================================================================ */
function calculateAverage(items: readonly { score: number }[]): number {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, item) => sum + item.score, 0);
  return Math.round((total / items.length) * 10) / 10;
}

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function PenilaianPage() {
  const lampiran7Average = calculateAverage(lampiran7Criteria);

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

          {/* Average score card */}
          <Card className="mb-8 border-zinc-800/50 bg-zinc-950">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900">
                  <Award className="size-6 text-zinc-300" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">
                    Rata-rata Skor Keseluruhan
                  </p>
                  <p className="text-3xl font-extrabold tracking-tighter text-white">
                    {lampiran7Average}
                    <span className="ml-1 text-base font-normal text-zinc-600">
                      / 100
                    </span>
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="hidden border-zinc-700 text-zinc-400 sm:inline-flex"
              >
                <TrendingUp className="mr-1.5 size-3" />
                Sangat Baik
              </Badge>
            </CardContent>
          </Card>

          {/* Criteria grid */}
          <div className="space-y-4">
            {lampiran7Criteria.map((item) => (
              <Card
                key={item.criteria}
                className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
              >
                <CardContent className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-sm font-bold tracking-tight text-white">
                        {item.criteria}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ScoreBar score={item.score} maxScore={item.maxScore} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download button */}
          <div className="mt-8">
            <a href="#" aria-label="Unduh Dokumen Lampiran 7">
              <Button
                variant="outline"
                className="group/btn border-zinc-700 hover:border-zinc-600"
              >
                <Download className="mr-2 size-4 transition-transform group-hover/btn:-translate-y-0.5" />
                Unduh Dokumen Lampiran 7 (PDF)
              </Button>
            </a>
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

          {/* Download button */}
          <div className="mt-8">
            <a href="#" aria-label="Unduh Dokumen Lampiran 8">
              <Button
                variant="outline"
                className="group/btn border-zinc-700 hover:border-zinc-600"
              >
                <Download className="mr-2 size-4 transition-transform group-hover/btn:-translate-y-0.5" />
                Unduh Dokumen Lampiran 8 (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
