import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos, teachingPhotos } from "./photos";
import styles from "../e-portfolio-1/page.module.css";

export const metadata: Metadata = {
  title: "Praktik Mengajar Mandiri — Pembelajaran Basis Data",
  description:
    "Halaman ini memuat perangkat pembelajaran, pengalaman mengajar, dan refleksi saya selama pelaksanaan PPL Mandiri, dengan fokus pada pembelajaran Basis Data. Pembahasan disusun berdasarkan Modul Ajar yang telah saya siapkan serta catatan refleksi selama praktik mengajar.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-media-penilaian", title: "Materi, Media, dan Penilaian" },
  { id: "pelaksanaan-video", title: "Pelaksanaan dan Video" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "refleksi-akhir", title: "Refleksi Akhir" },
] as const;

const teachingModules = [
  { title: "Modul Ajar 1 — Pengenalan Basis Data", href: "https://drive.google.com/file/d/15FBTxHhIAXNrzgkZw4hMp7T3J2DDWXLq/view" },
  { title: "Modul Ajar 2 — Pengelolaan Data", href: "https://drive.google.com/file/d/1mcBgR0FzLKpaXBavg2bg6QnczzeSskSy/view" },
  { title: "Modul Ajar 3 — Pencarian dan Pengolahan Data", href: "https://drive.google.com/file/d/1EkbSUeBNoUXutPlGuZSMCIbABeQJMhG5/view" },
  { title: "Modul Ajar 4 — Struktur dan Aturan Tabel", href: "https://drive.google.com/file/d/1Xp_llEKpXvG_Hxus0dsCUSp7PIST6H74/view" },
  { title: "Modul Ajar 5 — Hubungan Antartabel", href: "https://drive.google.com/file/d/13eAyAqVkZAMob7sCZTnmyDcH9m-t5jux/view" },
  { title: "Modul Ajar 6 — Penerapan Basis Data", href: "https://drive.google.com/file/d/10EKiKAuKb5M-1IB9YqtMbDZEyFp_82v0/view" },
] as const;

const teachingMedia = [
  { title: "Media Ajar Basis Data 1 — Mengenal Struktur Basis Data dan Membuat Data Pertama", href: "https://docs.google.com/document/d/18q9lHfd09lj4Qy3z2-xV73tJvB3JK6JL/edit" },
  { title: "Media Ajar Basis Data 2 — Mengelola Data Inventaris dengan CRUD dan WHERE", href: "https://docs.google.com/document/d/1Q6ZoQJouFFOwRV9ZDQj-RY3EyO6LnQDm/edit" },
  { title: "Media Ajar Basis Data 3 — Mengolah Data Produk Menjadi Informasi", href: "https://docs.google.com/document/d/18ScPQLngyxad_f81EqqX-WK3_7W2xlWj/edit" },
  { title: "Media Ajar Basis Data 4 — Merancang Tabel Pelanggan dan Menjaga Integritas Data", href: "https://docs.google.com/document/d/1lYqFaWJLWELRpUwSemNg6nx40vVq36bK/edit" },
  { title: "Media Ajar Basis Data 5 — Menghubungkan Data Peminjaman dengan FOREIGN KEY dan INNER JOIN", href: "https://docs.google.com/document/d/1uKfRrco9hovtlDDFnmT5VfdkpLsPjRww/edit" },
  { title: "Media Ajar Basis Data 6 — Merancang Database Pendaftaran Ekstrakurikuler", href: "https://docs.google.com/document/d/1ekjD1KBCg5JaYBw1AruaFR2mkzhT5ZjD/edit" },
] as const;

const reflections = [
  {
    number: 1,
    href: "https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view",
  },
  {
    number: 2,
    href: "https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view",
  },
  {
    number: 3,
    href: "https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view",
  },
  {
    number: 4,
    href: "https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view",
  },
] as const;

function DocumentEvidenceRow({
  href,
  title,
  action,
  children,
}: {
  href: string;
  title: string;
  action: "Lihat Modul Ajar" | "Lihat LK 4" | "Lihat Media Ajar";
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <FileText className="mt-0.5 size-4 shrink-0 text-zinc-400" aria-hidden="true" />
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-white">{title}</p>
          {children && <p className="text-xs leading-relaxed text-zinc-400">{children}</p>}
        </div>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${action}: ${title}`} className="flex shrink-0 items-center gap-1.5 self-start rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300 sm:self-center">
        <span>{action}</span>
        <ExternalLink className="size-3.5 text-zinc-400" aria-hidden="true" />
      </a>
    </div>
  );
}

function PortfolioSection({ index, children }: { index: number; children: ReactNode }) {
  const item = contents[index];
  return (
    <section id={item.id} aria-labelledby={`${item.id}-judul`} data-main-section className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
      <header className="mb-8 flex items-baseline gap-4 md:mb-10 md:gap-6">
        <span className="font-mono text-xs text-zinc-400" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`${item.id}-judul`} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.title}</h2>
      </header>
      <div className="max-w-3xl space-y-4 md:ml-10">{children}</div>
    </section>
  );
}

export default function EPortfolio2Page() {
  return (
    <article className={`${styles.page} px-6 pb-20 pt-16 md:pb-28 md:pt-24`}>
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">E-Portfolio 2 | Ujian Akhir Semester PPL Mandiri</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">Praktik Mengajar Mandiri 2</h1>
        </header>

        <PortfolioSection index={0}>
          <p className="text-sm leading-relaxed text-zinc-400">Saya menyusun enam Modul Ajar Basis Data dengan urutan materi yang saling berkaitan. Pembelajaran dimulai dari pengenalan cara menyimpan data, dilanjutkan dengan pengelolaan dan pencarian data, hingga perancangan tabel yang saling berhubungan. Urutan tersebut dirancang agar peserta didik memiliki pemahaman dasar sebelum mengerjakan tugas yang lebih kompleks.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Dalam rancangan pembelajaran, saya menyiapkan penjelasan awal, demonstrasi, latihan praktik, dan pendampingan sesuai kebutuhan peserta didik. Namun, pengalaman mengajar menunjukkan bahwa pelaksanaan kegiatan masih perlu mempertimbangkan ketersediaan perangkat dan waktu pengerjaan. Beberapa latihan membutuhkan penjelasan ulang sehingga tidak seluruh kegiatan dapat diselesaikan sesuai rencana.</p>
          <div className="space-y-3" data-teaching-modules>
            <h3 className="text-base font-medium text-zinc-200">Perangkat Pembelajaran Basis Data</h3>
            <ol className="space-y-3">
              {teachingModules.map((module) => (
                <li key={module.href}><DocumentEvidenceRow href={module.href} title={module.title} action="Lihat Modul Ajar" /></li>
              ))}
            </ol>
          </div>
          <p data-artifact-placeholder className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Rancangan utama UAS:</strong> Satu Modul Ajar terbaik dari praktik mandiri Siklus 2–4 akan ditetapkan setelah dicocokkan dengan rekaman pelaksanaan pembelajaran.</p>
        </PortfolioSection>

        <PortfolioSection index={1}>
          <p className="text-sm leading-relaxed text-zinc-400">Materi Basis Data saya siapkan melalui bahan presentasi dan panduan praktikum. Bahan presentasi digunakan untuk menjelaskan konsep dan memberikan contoh, sedangkan panduan praktikum membantu peserta didik mengikuti langkah pengerjaan menggunakan MySQL.</p>

          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Materi Pembelajaran</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya menggunakan presentasi Basis Data XI RPL yang memuat pengenalan MySQL, pembuatan tabel, pengelolaan data, penyusunan struktur tabel, dan hubungan antardata. Materi tersebut disusun secara bertahap agar peserta didik dapat menghubungkan pembelajaran sebelumnya dengan kegiatan yang sedang dikerjakan.</p>
            <a href="https://www.canva.com/d/R9btiBJ9VAuAUXK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
              Lihat Materi Pembelajaran — Canva <ExternalLink className="size-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-3" data-teaching-media>
            <h3 className="text-base font-medium text-zinc-200">Media Ajar Basis Data</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya menyiapkan enam media ajar berbentuk panduan praktikum. Setiap dokumen memuat langkah pengerjaan, contoh perintah, hasil yang diharapkan, serta pemeriksaan kesalahan yang mungkin ditemukan selama praktik.</p>
            <ol className="space-y-3">
              {teachingMedia.map((media) => (
                <li key={media.href}><DocumentEvidenceRow href={media.href} title={media.title} action="Lihat Media Ajar" /></li>
              ))}
            </ol>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Pengumpulan Tugas</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Hasil pekerjaan peserta didik dikumpulkan melalui Google Drive. Folder tersebut menjadi tempat dokumentasi tugas dan dapat digunakan untuk meninjau pekerjaan yang telah dikumpulkan.</p>
            <a href="https://drive.google.com/drive/folders/1iwQ2vuYa8TcYGyJaU2sxMwF0GmooflXb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
              Lihat Folder Pengumpulan Tugas <ExternalLink className="size-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Penilaian Pembelajaran</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Penilaian diarahkan pada ketepatan pengerjaan, kemampuan membaca hasil, dan pemahaman peserta didik terhadap materi yang dipraktikkan. Panduan praktikum juga memuat langkah pemeriksaan untuk membantu melihat kesesuaian hasil pekerjaan.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Hasil pengumpulan tugas menjadi salah satu bahan untuk meninjau proses belajar. Nilai individual peserta didik tidak ditampilkan pada portofolio ini.</p>
          </div>
        </PortfolioSection>

        <PortfolioSection index={2}>
          <p className="text-sm leading-relaxed text-zinc-400">Saya mengawali pembelajaran dengan mengingatkan kembali materi sebelumnya, kemudian memberikan penjelasan dan contoh sebelum peserta didik mengerjakan latihan. Selama praktik, saya memberikan arahan kepada peserta didik yang mengalami kesulitan dan mengingatkan mereka yang belum memulai pekerjaan.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Pelaksanaannya belum selalu sesuai dengan alokasi waktu. Sebagian peserta didik memerlukan pendampingan berulang, sedangkan peserta didik yang tidak memiliki perangkat lebih banyak mengikuti penjelasan melalui contoh yang ditampilkan. Kondisi tersebut membuat beberapa latihan perlu dilanjutkan pada pertemuan berikutnya.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Pengalaman ini menjadi bahan evaluasi bagi saya untuk menyampaikan instruksi yang lebih singkat, membagi tugas menjadi beberapa tahap, dan memeriksa pekerjaan secara berkala.</p>
          <div className="space-y-3" data-teaching-recording>
            <p data-media-status className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400">Video praktik mengajar sedang dalam proses unggah. Kesesuaian rekaman dengan Modul Ajar akan diperiksa setelah video tersedia.</p>
            <iframe
              src="https://www.youtube.com/embed/QmJenQOYLqQ"
              title="Video praktik mengajar — sedang dalam proses unggah, kesesuaian dengan Modul Ajar belum diperiksa"
              className="aspect-video w-full rounded-lg border border-zinc-800"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <a href="https://youtu.be/QmJenQOYLqQ" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
              Tonton di YouTube <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>
          <div className="space-y-3" data-teaching-gallery>
            <h3 className="text-base font-medium text-zinc-200">Dokumentasi Kegiatan Mengajar</h3>
            <NonTeachingPhotoCarousel photos={teachingPhotos} label="Foto kegiatan mengajar" emptyMessage="Foto kegiatan mengajar belum tersedia." />
          </div>
        </PortfolioSection>

        <PortfolioSection index={3}>
          <NonTeachingPhotoCarousel photos={nonTeachingPhotos} label="Foto kegiatan nonmengajar" />
          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Piket Sekolah dan Pendampingan Kelas</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Selama PPL Mandiri, saya mengikuti kegiatan piket sekolah sesuai jadwal. Saat piket pagi, saya membantu memantau ketertiban peserta didik yang memasuki lingkungan sekolah melalui gerbang. Saya juga mendampingi kelas ketika guru mata pelajaran berhalangan hadir, sesuai dengan tugas yang diberikan oleh guru piket.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Upacara dan Kegiatan Sekolah</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya mengikuti kegiatan sekolah seperti upacara bendera dan apel. Pada 19 Oktober 2026, saya juga mengikuti rangkaian Dies Natalis SMK Negeri 1 Surabaya.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Pemaparan dan Demonstrasi Aplikasi Ruang BK</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Pada 13 Oktober 2026, saya bersama rekan-rekan mahasiswa PPG memaparkan dan mendemonstrasikan aplikasi Ruang BK kepada pihak SMK Negeri 1 Surabaya. Kegiatan ini merupakan bagian dari mata kuliah Proyek Kepemimpinan. Kami mengembangkan aplikasi sistem informasi tersebut untuk membantu pengelolaan data dan layanan Bimbingan dan Konseling di sekolah.</p>
          </div>
        </PortfolioSection>

        <PortfolioSection index={4}>
          <p className="text-sm leading-relaxed text-zinc-400">Selama praktik mengajar mandiri, saya memperoleh pengalaman dalam menyiapkan materi, memberikan penjelasan, dan mendampingi peserta didik saat mengerjakan tugas. Saya dapat mengaitkan materi sebelumnya dengan pembelajaran baru dan memperlihatkan contoh yang membantu peserta didik mengikuti penjelasan.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Namun, saya masih perlu memperbaiki pengelolaan waktu dan cara memantau pengerjaan tugas. Beberapa peserta didik membutuhkan pengingat berulang untuk mulai bekerja, sementara keterbatasan perangkat membuat kesempatan praktik belum merata. Kendala tersebut masih muncul hingga akhir pelaksanaan praktik mandiri.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Masukan dari Guru Pamong mengingatkan saya bahwa pendampingan perlu diberikan sesuai kebutuhan, tetapi peserta didik juga perlu mendapat kesempatan untuk bertanggung jawab terhadap pekerjaannya sendiri. Saya ingin menjadi guru yang mampu menjaga keseimbangan antara memberikan arahan dan membangun kemandirian peserta didik.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Untuk pembelajaran berikutnya, saya perlu menetapkan target pekerjaan yang lebih jelas, memeriksa kemajuan pada setiap tahap, dan menyiapkan kegiatan tertulis bagi peserta didik yang belum dapat menggunakan laptop. Perbaikan tersebut masih menjadi rencana yang perlu saya terapkan dan evaluasi.</p>
          <div className="space-y-3" data-reflection-documents>
            <h3 className="text-base font-medium text-zinc-200">Dokumen Refleksi</h3>
            <ul className="space-y-3">
              {reflections.map((reflection) => (
                <li key={reflection.number}>
                  <DocumentEvidenceRow href={reflection.href} title={`LK 4 — Refleksi Siklus ${reflection.number}`} action="Lihat LK 4">
                    {reflection.number === 1 }
                  </DocumentEvidenceRow>
                </li>
              ))}
            </ul>
          </div>
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-8">
          <Link href="/e-portfolio-1" className="inline-flex min-h-11 items-center rounded-sm text-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Kembali ke E-Portfolio 1 — UTS Siklus 1</Link>
        </footer>
      </div>
    </article>
  );
}
