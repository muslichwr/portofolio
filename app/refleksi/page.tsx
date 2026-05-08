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
  Users,
  User,
  Target,
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
    title: "Penyusunan Panduan Praktikum (Jobsheet) yang Mandiri",
    description:
      "Untuk mengatasi kendala kewalahan mengelola waktu lab dan penggunaan bahasa yang terlalu teknis, saya akan menyusun ulang modul praktikum dengan bahasa yang lebih sederhana dan instruksi yang bersifat self-explanatory. Tujuannya agar siswa dapat mencoba secara mandiri terlebih dahulu, sehingga saya tidak terjebak dalam troubleshooting individual yang memakan waktu terlalu lama.",
    category: "Bahan Ajar",
    icon: BookOpen,
  },
  {
    title: "Implementasi Sistem Tutor Sebaya (Peer Tutoring)",
    description:
      "Membentuk kelompok belajar kecil di kelas di mana siswa yang lebih cepat memahami materi dapat membantu rekan-rekannya yang mengalami kendala teknis ringan. Strategi ini bertujuan agar manajemen waktu di lab lebih efisien dan perhatian pendidik tidak hanya terserap pada satu atau dua siswa yang mengalami error unik.",
    category: "Metode Pembelajaran",
    icon: User,
  },
  {
    title: "Pemetaan Ulang Prioritas Materi Kurikulum",
    description:
      "Melakukan evaluasi dan penyederhanaan pada urutan materi pembelajaran agar lebih realistis untuk diselesaikan dalam satu semester. Dengan menentukan materi inti yang paling krusial, target capaian pembelajaran diharapkan dapat terpenuhi secara tuntas tanpa harus mengorbankan kedalaman pemahaman siswa.",
    category: "Manajemen Kurikulum",
    icon: Target,
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
    title: "Membawa Pengalaman Nyata",
    description:
      "Berbekal pengalaman magang di Diskominfo, saya bisa memberikan contoh kasus riil di kelas. Saat mengajar materi web atau jaringan, saya bisa menceritakan mengapa hal tersebut berguna nanti saat mereka lulus.",
  },
  {
    title: "Fokus pada Praktik",
    description:
      "Saya lebih nyaman mengajak siswa langsung mencoba di depan komputer, sehingga kelas terasa lebih hidup dibandingkan hanya mencatat teori di papan tulis.",
  },
  {
    title: "Menekankan Pemahaman Logika",
    description:
      "Berpegang pada prinsip 'Logic First, Syntax Later', saya selalu membiasakan siswa paham alurnya dulu sebelum mengetik perintah di server. Kebiasaan ini pelan-pelan mengurangi kecenderungan siswa yang biasanya hanya sekadar copy-paste dari modul tanpa paham maksudnya.",
  },
] as const;

const weaknesses: readonly AnalysisPoint[] = [
  {
    title: "Kewalahan Mengelola Waktu Lab",
    description:
      "Saat sesi praktik dimulai dan banyak komputer siswa mengalami error secara bersamaan, saya masih sering keteteran membagi waktu untuk mendampingi mereka satu per satu.",
  },
  {
    title: "Bahasa Terlalu Teknis",
    description:
      "Terkadang saya tidak sadar menggunakan istilah IT tingkat lanjut yang masih asing bagi anak SMK, sehingga ada siswa yang bingung dan saya harus mengulang penjelasan dari awal.",
  },
  {
    title: "Target Materi Tidak Tuntas",
    description:
      "Saat mengajar praktikum, ternyata dinamika di kelas memakan waktu jauh lebih lama dari perkiraan di RPP. Jujur saja, masih ada beberapa materi inti yang belum sempat saya sentuh atau terpaksa diajarkan buru-buru karena keterbatasan waktu lab dan kurang matangnya perkiraan alokasi waktu dari saya.",
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
        <div className="mx-auto max-w-4xl">
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
            Evaluasi jujur mengenai pengalaman mengajar selama PPL dan
            langkah kecil yang akan saya ambil untuk menjadi guru yang lebih
            baik.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 1: MISI & KARAKTER GURU PROFESIONAL
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
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
                Model Guru yang Dituju & Filosofi
              </h2>
            </div>
          </div>

          {/* Content — editorial style */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-400">
            <p>
              Sebagai lulusan S1 Teknik Informatika yang punya minat di
              software development, tujuan saya menjadi guru SMK sebenarnya
              sederhana: saya ingin membantu siswa belajar IT dengan cara yang
              lebih relevan dan tidak membosankan. Saya berpegang pada prinsip{" "}
              <span className="font-medium text-zinc-200">
                &quot;Logic First, Syntax Later&quot;
              </span>
              —saya ingin melatih anak-anak agar paham logikanya dulu, baru
              memikirkan sintaks atau error kodenya. Ke depannya, saya ingin
              menjadi sosok guru (fasilitator) yang sabar, bisa diajak diskusi
              layaknya teman belajar, dan bisa memberi gambaran dasar tentang
              bagaimana tools IT (seperti Git atau Nginx) dipakai di dunia kerja
              tanpa harus memakai bahasa yang terlalu rumit.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 2: ANALISIS DIRI — KEKUATAN & KELEMAHAN
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
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

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          SECTION 3: RENCANA TINDAK LANJUT (RTL)
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
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
            Berdasarkan evaluasi terhadap kendala yang dihadapi selama PPL, berikut adalah
            langkah-langkah konkret yang akan saya ambil untuk meningkatkan kualitas
            pembelajaran di masa mendatang
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
