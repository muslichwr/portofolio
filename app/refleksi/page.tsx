import type { Metadata } from "next";
import {
  Lightbulb,
  Shield,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  BookOpen,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "Refleksi",
  description:
    "Refleksi diri — Visi pendidik, analisis kekuatan & kelemahan, serta Rencana Tindak Lanjut (RTL) untuk pengembangan profesional berkelanjutan.",
};

/* ============================================================================
   DATA — Rencana Tindak Lanjut (RTL)
   ============================================================================ */
interface ActionItem {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly icon: React.ComponentType<{ className?: string }>;
}

const rtlItems: readonly ActionItem[] = [
  {
    title: "Pelatihan Differentiated Learning (TaRL)",
    description:
      "Mengikuti pelatihan spesifik terkait Differentiated Learning (TaRL) untuk memetakan gaya belajar siswa vokasi secara lebih akurat sebelum semester dimulai.",
    category: "Pedagogi",
    icon: BookOpen,
  },
  {
    title: "Sistem Auto-Grading Lokal",
    description:
      "Mengembangkan sistem auto-grading lokal berbasis skrip untuk mempercepat evaluasi praktikum jaringan (Cisco Packet Tracer/Mikrotik), sehingga waktu guru dapat difokuskan pada pendampingan siswa yang tertinggal.",
    category: "Teknologi",
    icon: Wrench,
  },
  {
    title: "Modul Interaktif Literasi Awal",
    description:
      "Menyusun modul interaktif berbasis web untuk menstandarkan literasi awal siswa sebelum sesi lab dimulai, meminimalisir bottleneck pemahaman dasar.",
    category: "Kurikulum",
    icon: Compass,
  },
] as const;

/* ============================================================================
   DATA — Strengths & Weaknesses
   ============================================================================ */
interface AnalysisPoint {
  readonly title: string;
  readonly description: string;
}

const strengths: readonly AnalysisPoint[] = [
  {
    title: "Penguasaan Materi Teknis",
    description:
      "Penguasaan materi teknis yang mendalam (DHCP Server, Nginx, Next.js, Laravel, Flutter) memungkinkan penyampaian yang otentik dan berbasis pengalaman industri nyata.",
  },
  {
    title: "Integrasi Tools Industri",
    description:
      "Kemampuan mengintegrasikan tools dan workflow industri ke dalam konteks kelas, membuat siswa terpapar langsung pada standar kerja profesional.",
  },
  {
    title: "Pendekatan Praktis & Kontekstual",
    description:
      "Pendekatan praktis membuat siswa lebih mudah memahami abstraksi jaringan dan programming melalui studi kasus nyata dari pengalaman magang di Diskominfo Kediri.",
  },
] as const;

const weaknesses: readonly AnalysisPoint[] = [
  {
    title: "Manajemen Waktu Transisi",
    description:
      "Manajemen waktu saat transisi antara penyampaian teori dan sesi lab praktik masih perlu ditingkatkan, terutama pada sesi dengan kompleksitas materi tinggi.",
  },
  {
    title: "Penyederhanaan Bahasa Teknis",
    description:
      "Tantangan dalam menyederhanakan bahasa teknis tingkat lanjut agar mudah dicerna oleh siswa dengan tingkat literasi awal yang beragam, tanpa mengorbankan akurasi terminologi.",
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function RefleksiPage() {
  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl">
          {/* Kicker */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            Introspeksi Profesional
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Refleksi &
            <br />
            Visi Pendidik
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Narasi reflektif tentang perjalanan profesional, analisis diri
            secara jujur, serta komitmen pengembangan berkelanjutan sebagai
            pendidik vokasi yang berorientasi pada industri.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 1: MISI & KARAKTER GURU PROFESIONAL
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <Lightbulb className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Filosofi Mengajar
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Misi & Karakter Guru Profesional
              </h2>
            </div>
          </div>

          {/* Content — editorial style */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-400">
            <p>
              Sebagai pendidik vokasi berlatar belakang{" "}
              <span className="font-medium text-zinc-200">
                Fullstack Developer
              </span>
              , visi saya adalah menjembatani kesenjangan antara kurikulum
              SMK dan{" "}
              <span className="font-medium text-zinc-200">
                best-practice industri nyata
              </span>
              . Model guru yang saya tuju adalah fasilitator yang adaptif,
              berorientasi pada pemecahan masalah (
              <span className="font-medium text-zinc-200">
                Problem-Solver
              </span>
              ), dan mengutamakan filosofi{" "}
              <span className="font-medium italic text-zinc-200">
                &quot;low cost, low latency&quot;
              </span>{" "}
              dalam efisiensi pembelajaran.
            </p>

            <p>
              Saya menanamkan prinsip{" "}
              <span className="font-medium text-zinc-200">
                Growth Mindset
              </span>{" "}
              dalam setiap sesi pembelajaran. Ketika siswa menghadapi error
              pada konfigurasi server atau bug pada kode mereka, saya
              mendorong mereka untuk melihatnya bukan sebagai kegagalan,
              melainkan sebagai proses belajar yang natural dan esensial.
            </p>
          </div>

          {/* Core philosophy quote */}
          <blockquote className="border-l-2 border-zinc-700 pl-6">
            <p className="text-lg font-medium italic tracking-tight text-zinc-300 md:text-xl">
              &ldquo;Aku belum Berhasil, Bukan tidak Berhasil&rdquo;
            </p>
            <footer className="mt-2 text-sm text-zinc-600">
              — Prinsip yang saya tanamkan agar siswa tangguh menghadapi
              error dan bug, baik dalam kode maupun kehidupan.
            </footer>
          </blockquote>

          {/* Core character badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "Adaptif",
              "Problem-Solver",
              "Growth Mindset",
              "Industry-Oriented",
              "Fasilitator",
            ].map((trait) => (
              <Badge
                key={trait}
                variant="outline"
                className="border-zinc-800 text-zinc-400"
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 2: ANALISIS DIRI — KEKUATAN & KELEMAHAN
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <Shield className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Evaluasi Diri
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Refleksi Pelaksanaan Praktik Mengajar
              </h2>
            </div>
          </div>

          {/* Strengths */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-500" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
                Kekuatan
              </h3>
            </div>

            <div className="space-y-3">
              {strengths.map((item) => (
                <Card
                  key={item.title}
                  className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
                >
                  <CardContent className="p-5">
                    <h4 className="text-sm font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-500" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">
                Kelemahan & Area Pengembangan
              </h3>
            </div>

            <div className="space-y-3">
              {weaknesses.map((item) => (
                <Card
                  key={item.title}
                  className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
                >
                  <CardContent className="p-5">
                    <h4 className="text-sm font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-3xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 3: RENCANA TINDAK LANJUT (RTL)
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <ArrowUpRight className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Langkah Strategis
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Rencana Tindak Lanjut (RTL) &
                <br />
                Pengembangan Diri
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-zinc-400">
            Berdasarkan analisis kekuatan dan kelemahan di atas, berikut
            adalah rencana tindak lanjut konkret yang akan saya
            implementasikan untuk meningkatkan kualitas pembelajaran dan
            kompetensi profesional secara berkelanjutan.
          </p>

          {/* RTL cards */}
          <div className="space-y-4">
            {rtlItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      {/* Number indicator */}
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 font-mono text-sm font-bold text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="border-zinc-800 text-xs text-zinc-500"
                          >
                            <IconComponent className="mr-1 size-3" />
                            {item.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm font-bold tracking-tight text-white">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-16 pt-0">
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Closing statement */}
          <div className="rounded-md border border-zinc-800/50 bg-zinc-900/30 p-6">
            <p className="text-sm leading-relaxed text-zinc-400">
              Seluruh rencana tindak lanjut ini dirancang dengan prinsip{" "}
              <span className="font-medium text-zinc-200">
                low cost, low latency
              </span>{" "}
              — memanfaatkan sumber daya yang tersedia secara maksimal tanpa
              mengorbankan kualitas output. Sebagai pendidik yang juga
              seorang developer, saya percaya bahwa{" "}
              <span className="font-medium text-zinc-200">
                iterasi berkelanjutan
              </span>{" "}
              adalah kunci pertumbuhan — baik dalam kode maupun dalam
              praktik mengajar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
