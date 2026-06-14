import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Route,
  AlertTriangle,
  Lightbulb,
  MessageSquareQuote,
  BookHeart,
  Heart,
  ArrowRight,
  Terminal,
  Wifi,
  Bug,
  GitBranch,
  ClipboardList,
  Users,
  BookOpen,
  Eye,
  Search,
  RefreshCw,
  Briefcase,
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
  title: "Refleksi Akhir",
  description:
    "Refleksi akhir PPL Terbimbing sebagai bagian dari E-Portfolio 2, berisi pengalaman belajar, umpan balik guru pamong, nilai keguruan, dan filosofi mengajar selama praktik pembelajaran terbimbing di SMK Negeri 1 Surabaya.",
};

/* ============================================================================
   DATA — Timeline Perjalanan Belajar
   ============================================================================ */
interface TimelineStep {
  readonly phase: string;
  readonly title: string;
  readonly description: string;
}

const timelineSteps: readonly TimelineStep[] = [
  {
    phase: "Fase 1",
    title: "Orientasi dan Observasi",
    description:
      "Pada tahap awal, saya belajar mengenali lingkungan belajar kelas XI RPL di SMK Negeri 1 Surabaya. Dari observasi ini saya memahami bahwa sebagian besar siswa cukup nyaman menggunakan laptop pribadi, tetapi proses pembelajaran praktik tetap dipengaruhi oleh kesiapan jaringan internet, kebiasaan menggunakan antarmuka grafis, dan kebutuhan panduan tambahan ketika mulai berhadapan dengan CLI.",
  },
  {
    phase: "Fase 2",
    title: "Asistensi Mengajar",
    description:
      "Pada tahap asistensi, saya mulai melihat bagaimana guru pamong menghubungkan kemampuan coding siswa RPL dengan pemahaman infrastruktur server. Praktik deployment aplikasi web menggunakan Ubuntu Server, Apache, SSH Putty, PHP, MySQL, Composer, dan Laravel memberi saya gambaran bahwa pembelajaran kejuruan perlu disusun dekat dengan situasi kerja nyata, bukan hanya urutan materi di modul.",
  },
  {
    phase: "Siklus 1",
    title: "OS Server & Web Server Dasar",
    description:
      "Siklus pertama menjadi tahap adaptasi bagi saya dan siswa. Materi instalasi Ubuntu Server, konfigurasi jaringan melalui VirtualBox, SSH, dan Apache2 terlihat sederhana di rancangan pembelajaran, tetapi di kelas muncul kendala nyata seperti typo perintah, perbedaan konfigurasi ifupdown dan netplan, serta error 'Network Unreachable'. Dari sini saya belajar bahwa modul ajar perlu menyediakan ruang untuk troubleshooting, bukan hanya langkah praktik yang ideal.",
  },
  {
    phase: "Siklus 2",
    title: "Full Stack Environment & DNS Lokal",
    description:
      "Pada siklus kedua, kompleksitas pembelajaran meningkat melalui Nginx, Laravel, PHP-FPM, dan DNS lokal menggunakan BIND9. Saya mulai menerapkan cheatsheet dan kegiatan 'Error of the Day' agar siswa tidak melihat error sebagai kegagalan. Strategi ini membantu kelas menjadi lebih hidup karena siswa mulai berani membaca pesan kesalahan dan mendiskusikan penyebabnya bersama-sama.",
  },
  {
    phase: "Siklus 3",
    title: "Git Deployment & Monitoring Server",
    description:
      "Siklus ketiga menjadi ruang untuk mengintegrasikan banyak keterampilan yang sudah dipelajari sebelumnya. Siswa berlatih Git/GitHub, deployment update melalui git pull, monitoring server menggunakan htop, serta pengujian beban dengan Apache Benchmark. Tantangan seperti merge conflict, kebiasaan mengedit langsung di server production, dan server yang hang karena beban berlebih membuat saya semakin sadar bahwa pembelajaran kejuruan juga harus menanamkan SOP dan budaya kerja industri.",
  },
  {
    phase: "Penutup",
    title: "Refleksi Akhir",
    description:
      "Dari seluruh rangkaian PPL Terbimbing, saya menyadari bahwa mengajar bukan hanya menyampaikan materi sampai selesai. Mengajar berarti membantu siswa memahami proses, berani menghadapi masalah, belajar dari kesalahan, dan perlahan membangun kemandirian sebagai calon tenaga kerja di bidang teknologi.",
  },
] as const;

/* ============================================================================
   DATA — Tantangan & Solusi
   ============================================================================ */
interface ChallengeItem {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly solutions: readonly string[];
}

const challenges: readonly ChallengeItem[] = [
  {
    icon: Terminal,
    title: "Adaptasi Siswa terhadap CLI dan Typo Perintah",
    description:
      "Sebagian siswa RPL sudah terbiasa bekerja dengan IDE dan antarmuka grafis. Ketika mereka harus mengetik perintah di terminal Ubuntu Server, kesalahan kecil seperti typo satu karakter sering membuat proses praktik berhenti. Pada titik ini, saya belajar bahwa kesulitan teknis siswa tidak selalu karena mereka tidak mampu, tetapi karena mereka belum terbiasa dengan cara kerja lingkungan server berbasis teks.",
    solutions: [
      "Menyediakan cheatsheet perintah CLI yang ringkas dan mudah dibaca",
      "Menggunakan tutor sebaya agar siswa yang lebih cepat paham dapat membantu teman satu kelas",
      "Membiasakan siswa membaca pesan error terlebih dahulu sebelum meminta bantuan",
    ],
  },
  {
    icon: Wifi,
    title: "Keterbatasan Internet saat Unduhan Package",
    description:
      "Beberapa kegiatan praktik membutuhkan unduhan package dan dependensi, seperti Composer, Laravel, atau pembaruan repository. Ketika banyak siswa melakukannya secara bersamaan, koneksi internet sekolah menjadi tidak stabil. Kondisi ini membuat saya belajar bahwa rancangan pembelajaran praktik harus mempertimbangkan kesiapan infrastruktur, bukan hanya kesiapan materi.",
    solutions: [
      "Menyiapkan file atau dependensi penting sebelum pembelajaran dimulai",
      "Menggunakan cache package, mirror lokal, atau strategi berbagi file jika memungkinkan",
      "Mengatur alur praktik agar kegiatan yang membutuhkan internet tidak dilakukan serentak tanpa persiapan",
    ],
  },
  {
    icon: Bug,
    title: "Error Konfigurasi Nginx, DNS/BIND9, dan Laravel",
    description:
      "Pada materi konfigurasi server, satu kesalahan kecil pada file konfigurasi dapat membuat layanan tidak berjalan. Siswa sering bingung ketika error tidak langsung terlihat di layar. Dari pengalaman ini, saya belajar bahwa keterampilan membaca log dan menelusuri sumber masalah perlu diajarkan secara eksplisit, karena kemampuan troubleshooting merupakan bagian penting dari pembelajaran kejuruan bidang teknologi.",
    solutions: [
      "Menerapkan kegiatan 'Error of the Day' agar error menjadi bahan belajar bersama",
      "Membimbing siswa membaca log seperti syslog, nginx error.log, dan laravel.log",
      "Menyusun pre-demo checklist agar konfigurasi diperiksa secara bertahap sebelum presentasi",
    ],
  },
  {
    icon: GitBranch,
    title: "Git Conflict dan Kebiasaan Edit Langsung di Server",
    description:
      "Saat mulai menggunakan Git, beberapa siswa mengalami merge conflict dan belum memahami alur kerja version control. Sebagian siswa juga masih terbiasa mengedit langsung di server production. Pengalaman ini menjadi pengingat bahwa pembelajaran deployment tidak cukup berhenti pada keberhasilan teknis, tetapi juga perlu membentuk kebiasaan kerja yang aman dan sesuai standar industri.",
    solutions: [
      "Menanamkan SOP industri: edit di lokal, push ke repository, lalu pull di server",
      "Melakukan simulasi merge conflict secara terbimbing agar siswa tidak panik saat mengalaminya",
      "Membiasakan commit message yang jelas dan memperkenalkan branch strategy dasar",
    ],
  },
] as const;

/* ============================================================================
   DATA — Nilai Guru
   ============================================================================ */
interface GuruValue {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
}

const guruValues: readonly GuruValue[] = [
  {
    icon: Eye,
    title: "Reflektif",
    description:
      "Saya belajar melihat setiap siklus mengajar sebagai bahan evaluasi. Hal yang belum berhasil bukan untuk disembunyikan, tetapi dibaca sebagai data untuk memperbaiki cara mengajar pada pertemuan berikutnya.",
  },
  {
    icon: Users,
    title: "Fasilitatif",
    description:
      "Saya ingin menjadi guru yang memberi ruang bagi siswa untuk berpikir dan mencoba terlebih dahulu. Bantuan guru tetap penting, tetapi bantuan itu sebaiknya menuntun siswa menemukan solusi, bukan langsung mengambil alih proses belajar mereka.",
  },
  {
    icon: RefreshCw,
    title: "Adaptif",
    description:
      "Saya menyadari bahwa kelas tidak selalu berjalan sesuai rencana. Ketika satu strategi kurang efektif, guru perlu menyesuaikan pendekatan, seperti menambahkan cheatsheet, membuat sesi Error of the Day, atau menggunakan checklist sebelum demo.",
  },
  {
    icon: Briefcase,
    title: "Berorientasi Dunia Kerja",
    description:
      "Pembelajaran kejuruan perlu dekat dengan budaya kerja. Karena itu, saya berusaha mengenalkan alat, alur kerja, dan kebiasaan industri seperti Git, deployment, monitoring server, serta SOP pengelolaan server production.",
  },
] as const;

/* ============================================================================
   DATA — Artefak Pendukung Links
   ============================================================================ */
interface SupportLink {
  readonly href: string;
  readonly label: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
}

const supportLinks: readonly SupportLink[] = [
  {
    href: "/artefak",
    label: "Lihat Artefak Pembelajaran",
    description:
      "Dokumentasi tiga siklus PPL Terbimbing beserta analisis pembelajaran dan penyesuaiannya.",
    icon: ClipboardList,
  },
  {
    href: "/penilaian",
    label: "Lihat Rekap Penilaian",
    description:
      "Rekap Lampiran 7 dan Lampiran 8 sebagai data pendukung perkembangan perangkat dan praktik mengajar.",
    icon: Search,
  },
  {
    href: "/refleksi",
    label: "Lihat Refleksi Umum",
    description:
      "Refleksi diri, visi pendidik, kekuatan, area pengembangan, dan rencana tindak lanjut.",
    icon: BookOpen,
  },
  {
    href: "/about",
    label: "Lihat Profil Guru",
    description:
      "Profil, perjalanan akademik, inspirasi mengajar, dan model guru yang saya tuju.",
    icon: GraduationCap,
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function RefleksiAkhirPage() {
  return (
    <>
      {/* ================================================================
          1. HERO SECTION
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            E-Portfolio 2
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Refleksi Akhir
            <br />
            PPL Terbimbing
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Bagian ini saya susun sebagai refleksi akhir setelah menjalani
            observasi, asistensi, dan tiga siklus praktik pembelajaran
            terbimbing di SMK Negeri 1 Surabaya. Di dalamnya saya merangkum
            pengalaman belajar, umpan balik guru pamong, nilai keguruan yang
            mulai terbentuk, serta filosofi mengajar yang ingin saya bawa ke
            tahap PPL Mandiri.
          </p>

          {/* Keterangan */}
          <Badge
            variant="outline"
            className="mt-4 border-zinc-800 text-xs text-zinc-500"
          >
            Prinsip, Nilai, dan Filosofi Mengajar
          </Badge>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          2. PERJALANAN BELAJAR SELAMA PPL TERBIMBING
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <Route className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Perjalanan
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Perjalanan Belajar Selama PPL Terbimbing
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-zinc-400">
            Setiap tahap PPL memberi pengalaman yang berbeda. Ada bagian yang
            berjalan sesuai rencana, ada juga bagian yang memaksa saya berpikir
            ulang tentang cara mendampingi siswa dalam pembelajaran praktik.
          </p>

          {/* Timeline cards */}
          <div className="relative ml-4 border-l-2 border-zinc-800 pl-8">
            {timelineSteps.map((step, index) => (
              <div
                key={step.phase}
                className={`relative pb-10 ${index === timelineSteps.length - 1 ? "pb-0" : ""
                  }`}
              >
                {/* Dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full border-2 border-cyan-500 bg-cyan-500" />

                {/* Phase label */}
                <p className="mb-1 font-mono text-xs text-zinc-600">
                  {step.phase}
                </p>

                {/* Title */}
                <h3 className="text-base font-bold tracking-tight text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          3. PENGALAMAN MENANTANG DAN SOLUSI
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <AlertTriangle className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Tantangan & Solusi
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Pengalaman Menantang dan Solusi
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-zinc-400">
            Tantangan selama PPL banyak muncul dari situasi kelas yang nyata:
            perangkat berbeda, jaringan tidak selalu stabil, error tidak selalu
            mudah dibaca, dan siswa memiliki tingkat kesiapan yang beragam.
            Berikut beberapa tantangan yang paling berkesan bagi saya.
          </p>

          {/* Challenge cards */}
          <div className="space-y-4">
            {challenges.map((challenge) => {
              const IconComponent = challenge.icon;
              return (
                <Card
                  key={challenge.title}
                  className="border-zinc-800/50 bg-zinc-950 transition-colors hover:border-zinc-700"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                        <IconComponent className="size-4 text-zinc-400" />
                      </div>
                      <CardTitle className="text-sm font-bold tracking-tight text-white">
                        {challenge.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pl-[3.25rem]">
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {challenge.description}
                    </p>
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                        Solusi
                      </p>
                      <ul className="space-y-1">
                        {challenge.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-2 text-sm leading-relaxed text-zinc-500"
                          >
                            <Lightbulb className="mt-0.5 size-3 shrink-0 text-amber-600" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          4. UMPAN BALIK GURU PAMONG
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <MessageSquareQuote className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Masukan Profesional
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Umpan Balik Guru Pamong
              </h2>
            </div>
          </div>

          {/* Callout card */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <MessageSquareQuote className="size-6 text-cyan-400" />
            </div>

            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              &ldquo;Ketika siswa menemukan error, jangan terlalu cepat memberi
              tahu letak salahnya. Ajak mereka membaca log, menelusuri bagian
              yang terakhir diubah, lalu biarkan mereka mencoba menyimpulkan
              penyebabnya. Di dunia kerja, kemampuan membaca masalah sering
              kali lebih penting daripada sekadar mengikuti perintah.&rdquo;
            </p>

            <Separator className="my-6 bg-zinc-800/50" />

            <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
              <p>
                Masukan ini sangat membekas bagi saya. Pada awal praktik, saya
                sering merasa perlu segera membantu siswa agar kegiatan tidak
                berhenti terlalu lama. Namun, setelah mendapat umpan balik dari
                guru pamong, saya mulai memahami bahwa proses mencari kesalahan
                justru merupakan bagian penting dari pembelajaran.
              </p>
              <p>
                Setelah itu, saya mencoba mengubah cara mendampingi siswa.
                Alih-alih langsung menunjukkan jawaban, saya lebih sering
                bertanya seperti, &ldquo;Bagian mana yang terakhir kamu
                ubah?&rdquo; atau &ldquo;Apa yang tertulis di log paling
                bawah?&rdquo; Pertanyaan sederhana seperti ini membuat siswa
                mulai melihat error sebagai petunjuk, bukan sebagai jalan
                buntu.
              </p>
              <p>
                Umpan balik tersebut menjadi bekal penting untuk PPL Mandiri.
                Saya ingin lebih konsisten menjadi guru yang menuntun proses
                berpikir siswa, bukan guru yang terburu-buru menyelesaikan
                masalah atas nama efisiensi waktu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          5. FILOSOFI MENGAJAR
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <BookHeart className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Prinsip & Keyakinan
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Filosofi Mengajar
              </h2>
            </div>
          </div>

          {/* Philosophy prose */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-400">
            <p>
              Saya memegang prinsip{" "}
              <span className="font-semibold text-zinc-200">
                &ldquo;Logic First, Syntax Later&rdquo;
              </span>
              . Bagi saya, siswa perlu memahami alur berpikir di balik sebuah
              perintah sebelum mereka menghafal bentuk sintaksnya. Dalam
              pembelajaran server dan deployment, perintah yang diketik bisa
              berubah sesuai versi sistem, konfigurasi, atau kebutuhan proyek.
              Karena itu, saya ingin siswa memahami alasan sebuah langkah
              dilakukan, bukan hanya menyalin perintah dari modul.
            </p>

            <p>
              Saya juga percaya bahwa guru tidak harus selalu menjadi orang
              pertama yang memberi jawaban. Dalam kelas kejuruan, siswa perlu
              diberi ruang untuk mencoba, salah, membaca pesan error, lalu
              memperbaiki langkahnya. Peran saya adalah menjaga proses itu tetap
              aman, terarah, dan bermakna. Ketika siswa menghadapi{" "}
              <span className="font-mono text-xs text-zinc-300">
                502 Bad Gateway
              </span>{" "}
              atau{" "}
              <span className="font-mono text-xs text-zinc-300">
                SERVFAIL
              </span>
              , saya tidak ingin mereka langsung menyerah. Saya ingin mereka
              terbiasa bertanya: layanan mana yang bermasalah, file mana yang
              terakhir diubah, dan log apa yang bisa dibaca.
            </p>

            <p>
              Pembelajaran kejuruan menurut saya harus dekat dengan dunia kerja.
              Oleh karena itu, materi seperti{" "}
              <span className="font-medium text-zinc-200">
                Git workflow, deployment pipeline, server monitoring
              </span>
              , dan SOP server production perlu dikenalkan sejak di sekolah.
              Bukan agar siswa terlihat seperti profesional sebelum waktunya,
              tetapi agar mereka mulai memahami kebiasaan kerja yang aman,
              rapi, dan bertanggung jawab. Saya ingin membantu siswa tumbuh
              menjadi pribadi yang mandiri, teliti, kolaboratif, dan siap
              belajar ketika menghadapi masalah baru.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          6. NILAI GURU YANG SAYA PEGANG
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <Heart className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Nilai Keguruan
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Nilai Guru yang Saya Pegang
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-zinc-400">
            Nilai-nilai ini terbentuk dari pengalaman langsung di kelas,
            interaksi dengan siswa, serta masukan dari guru pamong selama PPL
            Terbimbing.
          </p>

          {/* Value cards grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {guruValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <IconComponent className="size-4 text-zinc-500" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          7. ARTEFAK PENDUKUNG
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Section header */}
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <BookOpen className="size-5 text-zinc-400" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Navigasi E-Portfolio
              </p>
              <h2 className="text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                Artefak Pendukung
              </h2>
            </div>
          </div>

          <p className="text-base leading-relaxed text-zinc-400">
            Refleksi ini terhubung dengan artefak, penilaian, dan dokumentasi
            lain yang saya susun selama PPL Terbimbing. Halaman berikut dapat
            digunakan untuk melihat proses pembelajaran secara lebih lengkap.
          </p>

          {/* CTA Link cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {supportLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04]"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] transition-colors group-hover:border-cyan-500/20">
                    <IconComponent className="size-4 text-zinc-500 transition-colors group-hover:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold tracking-tight text-white">
                        {link.label}
                      </h3>
                      <ArrowRight className="size-3.5 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {link.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
