import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Server,
  Code2,
  BookOpen,
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
   DATA — Timeline entries
   ============================================================================ */
const timelineEntries = [
  {
    period: "2025 — Sekarang",
    role: "Pengajar Penuh Waktu — Konsentrasi Keahlian TKJ",
    institution: "SMKS Tunas Bangsa Pare, Kediri",
    description:
      "Mengajar penuh waktu pada program keahlian Teknik Komputer dan Jaringan (TKJ). Merancang dan mengimplementasikan kurikulum berbasis industri yang mencakup konfigurasi jaringan, server administration, dan troubleshooting.",
    icon: GraduationCap,
    tags: ["Pendidikan", "TKJ"],
  },
  {
    period: "2025",
    role: "PPL Terbimbing — 3 Siklus Praktik Mengajar",
    institution: "SMKS Tunas Bangsa Pare, Kediri",
    description:
      "Melaksanakan 3 siklus praktik mengajar terbimbing dengan pendekatan Problem Based Learning (PBL). Topik utama mencakup deployment DHCP Server, konfigurasi jaringan LAN/WAN, dan administrasi sistem operasi jaringan.",
    icon: BookOpen,
    tags: ["PPL", "PBL", "DHCP Server"],
  },
  {
    period: "2024",
    role: "Fullstack Developer Intern",
    institution: "Dinas Komunikasi & Informatika Kota Kediri",
    description:
      "Merancang dan membangun aplikasi web internal menggunakan Laravel dan Flutter. Mengimplementasikan RESTful API, database optimization, serta deployment pada shared hosting environment.",
    icon: Briefcase,
    tags: ["Laravel", "Flutter", "REST API"],
  },
] as const;

/* ============================================================================
   DATA — Artifact teasers
   ============================================================================ */
const artifactTeasers = [
  {
    cycle: "Siklus 1",
    title: "Konfigurasi DHCP Server pada Jaringan LAN",
    description:
      "Peserta didik mengkonfigurasi DHCP Server menggunakan pendekatan Problem Based Learning (PBL) untuk memahami distribusi IP otomatis dalam jaringan lokal.",
    tags: ["PBL", "DHCP Server", "Jaringan"],
    icon: Server,
  },
  {
    cycle: "Siklus 2",
    title: "Manajemen Layanan Jaringan & Troubleshooting",
    description:
      "Pendalaman troubleshooting jaringan dengan pendekatan diferensiasi, mengakomodasi berbagai tingkat kemampuan peserta didik dalam diagnosa masalah koneksi.",
    tags: ["Diferensiasi", "Troubleshooting", "Networking"],
    icon: Code2,
  },
  {
    cycle: "Siklus 3",
    title: "Administrasi Sistem Operasi Jaringan",
    description:
      "Implementasi administrasi sistem operasi jaringan berbasis Linux dengan integrasi praktik industri nyata dari pengalaman magang di Diskominfo Kediri.",
    tags: ["PBL", "Linux", "Sysadmin"],
    icon: Server,
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function HomePage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] flex-col justify-center px-6 py-24"
      >
        {/* Subtle background gradient */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          {/* Status badge */}
          <div className="mb-8">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400">
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-emerald-500" />
              PPG Prajabatan — UNESA 2025
            </Badge>
          </div>

          {/* Name — massive typography */}
          <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-8xl">
            Muslich
            <br />
            Wahyu R.
          </h1>

          {/* Core Identity */}
          <p className="mt-6 font-mono text-sm uppercase tracking-widest text-zinc-500 md:text-base">
            Fullstack Developer &amp; Pendidik Vokasi TKJ
          </p>

          {/* Narrative — Hometown & Motivation */}
          <div className="mt-10 max-w-2xl space-y-4">
            <p className="text-base leading-relaxed text-zinc-400">
              Lahir dan tumbuh di Kediri, Jawa Timur — kota yang dikenal dengan
              semangat industri kreatif dan budaya gotong-royong yang kuat.
              Lingkungan ini membentuk etos kerja yang saya bawa ke dunia
              teknologi dan pendidikan: kolaboratif, pragmatis, dan selalu
              berorientasi pada solusi.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              Dengan latar belakang sebagai{" "}
              <span className="font-medium text-zinc-200">
                Fullstack Developer Intern di Diskominfo Kota Kediri
              </span>{" "}
              dan mahasiswa S1 Pendidikan Teknologi Informasi{" "}
              <span className="font-medium text-zinc-200">
                Universitas Negeri Surabaya (IPK 3.78)
              </span>
              , saya memiliki misi untuk menjembatani{" "}
              <span className="font-medium text-zinc-200">
                best practice industri
              </span>{" "}
              — low cost, low latency, dan arsitektur yang efisien — dengan{" "}
              <span className="font-medium text-zinc-200">
                pendidikan kejuruan
              </span>{" "}
              agar menghasilkan lulusan SMK yang truly relevant dan siap kerja.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="mt-12 border-l-2 border-zinc-700 pl-6">
            <p className="text-lg font-medium italic tracking-tight text-zinc-300 md:text-xl">
              &ldquo;Aku belum Berhasil, Bukan tidak Berhasil&rdquo;
            </p>
            <footer className="mt-2 text-sm text-zinc-600">
              — Prinsip hidup yang mendasari setiap langkah dalam perjalanan
              profesional dan akademik.
            </footer>
          </blockquote>

          {/* Tech Stack Chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Next.js",
              "Flutter",
              "Laravel",
              "PHP",
              "TypeScript",
              "Dart",
              "MySQL",
              "TailwindCSS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs text-zinc-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl bg-zinc-800/50" />

      {/* ================================================================
          EXPERIENCE TIMELINE SECTION
          ================================================================ */}
      <section id="perjalanan" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-16">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-600">
              Pengalaman
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Perjalanan PPL
              <br />
              &amp; Profesional
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-zinc-800 md:left-6 md:block"
              aria-hidden="true"
            />

            {timelineEntries.map((entry, index) => {
              const IconComponent = entry.icon;
              return (
                <div key={index} className="group relative">
                  <div className="flex gap-6 py-8 md:gap-10">
                    {/* Timeline dot */}
                    <div className="relative z-10 hidden md:block">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800">
                        <IconComponent className="size-5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <p className="font-mono text-xs text-zinc-600">
                        {entry.period}
                      </p>
                      <h3 className="text-lg font-bold tracking-tight text-white">
                        {entry.role}
                      </h3>
                      <p className="text-sm font-medium text-zinc-500">
                        {entry.institution}
                      </p>
                      <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
                        {entry.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {entry.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="border-zinc-800 bg-zinc-900 text-zinc-400"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider between entries */}
                  {index < timelineEntries.length - 1 && (
                    <Separator className="ml-0 bg-zinc-800/50 md:ml-[4.5rem]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl bg-zinc-800/50" />

      {/* ================================================================
          ARTIFACT TEASERS SECTION
          ================================================================ */}
      <section id="artefak-preview" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-16">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-600">
              Portofolio Mengajar
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Artefak
              <br />
              Pembelajaran
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-500">
              Kumpulan artefak dari 3 siklus PPL Terbimbing yang memuat analisis
              mendalam, teori pedagogis, dan refleksi berbasis konteks
              pembelajaran nyata.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {artifactTeasers.map((artifact, index) => {
              const IconComponent = artifact.icon;
              return (
                <Card
                  key={index}
                  className="group border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">
                        {artifact.cycle}
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                        <IconComponent className="size-4 text-zinc-500" />
                      </div>
                    </div>
                    <CardTitle className="text-base font-bold tracking-tight text-white">
                      {artifact.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-zinc-500">
                      {artifact.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {artifact.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-zinc-800 text-zinc-500"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <Link href="/artefak">
              <Button variant="outline" size="lg" className="group/btn">
                Lihat Analisis Lengkap
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
