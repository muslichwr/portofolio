import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/assets/images/muslich1.png";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Target,
  Layers,
  Zap,
  Users,
  BookOpen,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "About",
  description:
    "Profil Mahasiswa PPG Prajabatan — Muslich Wahyu R., Vocational IT Educator & Developer. Narasi perjalanan, inspirasi mengajar, dan model guru yang dituju.",
};

/* ============================================================================
   DATA — 4 Karakter Guru cards
   ============================================================================ */
interface GuruKarakter {
  readonly icon: typeof Target;
  readonly title: string;
  readonly description: string;
}

const guruKarakterCards: readonly GuruKarakter[] = [
  {
    icon: Target,
    title: "Guru Reflektif",
    description:
      "Menjadikan setiap siklus mengajar sebagai sumber data untuk perbaikan. Refleksi bukan formalitas — ia adalah mesin pertumbuhan.",
  },
  {
    icon: Layers,
    title: "Guru Fasilitatif",
    description:
      "Lebih banyak bertanya daripada menjawab. Memberi ruang murid bergulat dengan masalah sebelum jawaban diberikan.",
  },
  {
    icon: Zap,
    title: "Guru Inovatif",
    description:
      "Mengintegrasikan stack teknologi industri nyata ke dalam setiap praktikum pembelajaran vokasi.",
  },
  {
    icon: Users,
    title: "Guru Diferensiatif",
    description:
      "Merancang scaffolding berbeda untuk setiap kelompok kemampuan murid berdasarkan data observasi dan rubrik formatif.",
  },
] as const;

/* ============================================================================
   DATA — 5 Kompetensi yang Dibangun
   ============================================================================ */
interface Kompetensi {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const kompetensiList: readonly Kompetensi[] = [
  {
    number: "01",
    title: "Pedagogical Content Knowledge",
    description:
      "Memahami tidak hanya sekadar teori, tetapi cara terbaik mengajarkannya sesuai konteks vokasi dan tingkat kemampuan murid.",
  },
  {
    number: "02",
    title: "Diferensiasi Pembelajaran",
    description:
      "Merancang aktivitas dan scaffolding yang berbeda berdasarkan profil belajar murid — kognitif, gaya belajar, dan kesiapan teknis.",
  },
  {
    number: "03",
    title: "Asesmen Autentik & Formatif",
    description:
      "Membangun sistem penilaian berbasis rubrik terukur yang memberikan feedback bermakna, bukan sekadar angka akhir.",
  },
  {
    number: "04",
    title: "Komunikasi Teknis",
    description:
      "Melatih murid menjelaskan arsitektur dan konfigurasi sistem secara lisan — kompetensi kritis yang sering diabaikan di pendidikan vokasi.",
  },
  {
    number: "05",
    title: "Refleksi Iteratif",
    description:
      "Menerapkan model praktik refleksi (Levebvre, 2023) secara konsisten di setiap siklus untuk menghasilkan perbaikan yang terukur dan nyata.",
  },
] as const;

/* ============================================================================
   DATA — Timeline PPG
   ============================================================================ */
interface TimelineMilestone {
  readonly period: string;
  readonly label: string;
  readonly description: string;
  readonly tag?: string;
  readonly tagVariant?: "completed" | "active";
}

const timelineMilestones: readonly TimelineMilestone[] = [
  {
    period: "Januari 2026",
    label: "Orientasi & Pembekalan PPG",
    tag: "Selesai ✓",
    tagVariant: "completed",
    description:
      "Pengenalan program PPG Prajabatan, pembekalan pedagogis, dan pembentukan kelompok mahasiswa PPG.",
  },
  {
    period: "Februari 2026",
    label: "Observasi Sekolah",
    tag: "Selesai ✓",
    tagVariant: "completed",
    description:
      "Observasi kondisi murid, lingkungan belajar, dan karakteristik kelas XI RPL di SMK Negeri 1 Surabaya.",
  },
  {
    period: "Maret 2026 (Minggu 5–8)",
    label: "Siklus 1 — OS Server & Web Server Dasar",
    description:
      "Praktik mengajar terbimbing pertama. Fokus: instalasi Ubuntu Server, konfigurasi jaringan, SSH, dan deployment Apache2.",
    tag: "Selesai ✓",
    tagVariant: "completed",
  },
  {
    period: "Maret 2026 (Minggu 9–12)",
    label: "Siklus 2 — Full Stack Environment & DNS",
    description:
      "Siklus kedua dengan kompleksitas lebih tinggi: Laravel stack, Nginx, PHP-FPM, dan konfigurasi BIND9 DNS Server lokal.",
    tag: "Selesai ✓",
    tagVariant: "completed",
  },
  {
    period: "April 2026 (Minggu 13–15)",
    label: "Siklus 3 — Git Deployment & Final Project",
    description:
      "Siklus puncak: version control dengan Git, deployment pipeline, monitoring server, dan demo server production simulasi.",
    tag: "Selesai ✓",
    tagVariant: "completed",
  },
  {
    period: "Mei 2026",
    label: "Refleksi Final & E-Portfolio",
    description:
      "Penyusunan E-Portfolio 1 sebagai dokumentasi dan refleksi keseluruhan perjalanan PPL Terbimbing.",
    tag: "Selesai ✓",
    tagVariant: "completed",
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function AboutPage() {
  return (
    <>
      {/* ================================================================
          PAGE HERO
          ================================================================ */}
      <section className="px-6 pb-12 pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
            Profil
          </p>

          {/* Main heading */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Muslich Wahyu Romadhon
          </h1>

          {/* Sub heading */}
          <p className="mt-4 text-base italic text-zinc-500 md:text-lg">
            Vocational IT Educator
          </p>
        </div>
      </section>

      {/* ================================================================
          PROFIL MAHASISWA — 2a. Narasi Asal & Perjalanan Akademik
          ================================================================ */}
      <section id="profil" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Profil Mahasiswa
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Narasi &amp; Perjalanan
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Left column — Profile card */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex flex-col items-center gap-4">
                {/* Monogram with subtle glow */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 blur-md" />
                  <Image
                    src={profilePhoto}
                    alt="Muslich Wahyu Romadhon"
                    width={80}
                    height={80}
                    className="relative size-20 rounded-full border border-white/10 object-cover"
                    priority
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-bold tracking-tight text-white">
                  Muslich Wahyu R.
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge
                    variant="outline"
                    className="border-white/[0.08] bg-white/[0.03] text-zinc-500"
                  >
                    PPG Prajabatan 2026
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/[0.08] bg-white/[0.03] text-zinc-500"
                  >
                    Pengembangan Perangkat Lunak dan Gim
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/[0.08] bg-white/[0.03] text-zinc-500"
                  >
                    Kediri, Jawa Timur
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right column — Narrative prose */}
            <div className="md:col-span-2">
              <div className="space-y-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                <p>
                  Saya berasal dari Desa Wonosari, Kediri. Lingkungan tempat saya dibesarkan yang
                  sarat nilai sejarah dan menjunjung tinggi toleransi beragama telah membentuk
                  karakter saya untuk selalu menghargai keberagaman—sebuah nilai esensial dalam
                  mengelola kelas yang inklusif.
                </p>
                <p>
                  Perjalanan akademik saya dimulai dari ketertarikan pada bidang teknologi di
                  SMK Negeri 2 Kota Kediri (Teknik Komputer dan Jaringan), yang kemudian mendorong
                  saya menempuh studi S1 Pendidikan Teknologi Informasi di Universitas Negeri
                  Surabaya (UNESA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PROFIL MAHASISWA — 2b. Inspirasi & Tujuan Menjadi Guru
          ================================================================ */}
      <section id="inspirasi-tujuan" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card Inspirasi */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                <Lightbulb className="size-4 text-zinc-500" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-white">
                Inspirasi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Motivasi saya menjadi pendidik berawal dari kenyamanan berinteraksi dengan anak usia remaja. Dinamika mereka membuat saya berjiwa muda sekaligus menyadarkan saya akan tanggung jawab moral untuk mendidik karakter dan etika dasar mereka. Inspirasi terbesar saya adalah guru SMK saya yang luar biasa sabar saat membimbing praktik kejuruan. Keteladanan beliau menyadarkan saya bahwa guru yang baik tidak hanya mentransfer ilmu, tetapi juga membimbing sepenuh hati.
              </p>
            </div>

            {/* Card Tujuan */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                <Target className="size-4 text-zinc-500" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-white">
                Tujuan Profesional
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Melalui program PPG Prajabatan ini, tujuan utama saya adalah mengasah kompetensi pedagogik untuk menjadi guru profesional yang reflektif dan inspiratif. Saya ingin mampu menciptakan lingkungan belajar yang aman, memanfaatkan teknologi secara bijak, serta mendidik peserta didik tidak hanya secara kognitif, tetapi juga membentuk karakter mereka sesuai nilai-nilai luhur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MODEL GURU YANG DITUJU — 4a. Misi Mengajar
          ================================================================ */}
      <section id="model-guru" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Visi Pendidikan
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Model Guru yang Dituju
            </h2>
          </div>

          {/* Misi Mengajar callout */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 text-center md:p-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Misi Mengajar
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Mencetak generasi muda yang tidak hanya kompeten secara teknis,
              tetapi mampu berpikir kritis dalam memecahkan masalah nyata di
              industri dan menjadi guru yang terus berkembang bersama
              muridnya.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          MODEL GURU — 4b. 4 Karakter Guru (Grid Cards)
          ================================================================ */}
      <section id="karakter-guru" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
              Karakter Guru
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {guruKarakterCards.map((karakter) => {
              const IconComponent = karakter.icon;
              return (
                <div
                  key={karakter.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <IconComponent className="size-4 text-zinc-500" />
                  </div>
                  <h4 className="text-base font-bold tracking-tight text-white">
                    {karakter.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {karakter.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          MODEL GURU — 4c. 5 Kompetensi yang Dibangun
          ================================================================ */}
      <section id="kompetensi" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
              Kompetensi yang Dibangun
            </h3>
          </div>

          <div className="space-y-8">
            {kompetensiList.map((item) => (
              <div key={item.number} className="flex gap-5">
                {/* Number badge */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] font-mono text-sm font-bold text-zinc-500">
                  {item.number}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-base font-bold tracking-tight text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          MODEL GURU — 4d. Role Model Guru
          ================================================================ */}
      <section id="role-model" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h3 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
              Role Model
            </h3>
          </div>

          <div className="flex flex-col gap-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:flex-row sm:items-start md:p-8">
            {/* Icon */}
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
              <BookOpen className="size-6 text-cyan-400" />
            </div>

            {/* Text content */}
            <div>
              <h4 className="text-lg font-bold tracking-tight text-white">
                Parker J. Palmer
              </h4>
              <p className="mt-1 text-sm text-zinc-500">
                Educator, Author of &ldquo;The Courage to Teach&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Palmer mengajarkan saya bahwa identitas dan integritas seorang
                guru adalah pondasi dari praktik mengajar yang baik. Ia menulis:
                &ldquo;good teaching cannot be reduced to technique — it comes
                from the identity and integrity of the teacher.&rdquo; Prinsip
                ini menjadi pengingat saya bahwa sebelum saya bisa
                mengembangkan metode mengajar, saya harus terlebih dahulu
                memahami siapa saya sebagai pendidik dan nilai apa yang saya
                bawa ke dalam kelas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TIMELINE PERJALANAN PPG
          ================================================================ */}
      <section id="timeline" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Perjalanan
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Timeline PPG
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative ml-4 border-l-2 border-zinc-700 pl-8">
            {timelineMilestones.map((milestone, index) => (
              <div
                key={milestone.label}
                className={`relative pb-10 ${index === timelineMilestones.length - 1 ? "pb-0" : ""
                  }`}
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full border-2 ${milestone.tagVariant === "active"
                    ? "border-amber-500 bg-amber-500"
                    : milestone.tagVariant === "completed"
                      ? "border-cyan-500 bg-cyan-500"
                      : "border-zinc-600 bg-zinc-800"
                    }`}
                />

                {/* Period */}
                <p className="mb-1 font-mono text-xs text-zinc-600">
                  {milestone.period}
                </p>

                {/* Label + Tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-bold tracking-tight text-white">
                    {milestone.label}
                  </h4>
                  {milestone.tag && (
                    <Badge
                      variant="outline"
                      className={`text-xs ${milestone.tagVariant === "active"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                        }`}
                    >
                      {milestone.tag}
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
