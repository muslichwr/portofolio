import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import coverPortrait from "@/assets/images/muslich1.jpg";
import type { ReactNode } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos, teachingPhotos } from "../e-portfolio-2/photos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "E-Portfolio 1 — UTS PPL Mandiri Siklus 1",
  description: "Perangkat pembelajaran Pemrograman Web Laravel dan refleksi praktik mengajar terbimbing berdasarkan LK 3.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-media-penilaian", title: "Materi, Media, dan Penilaian" },
  { id: "pelaksanaan-video", title: "Pelaksanaan dan Video" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "refleksi-akhir", title: "Refleksi Akhir" },
] as const;

const teachingModules = [
  { title: "Modul Ajar 1 — Menjalankan dan Mengenal Cara Kerja Laravel", href: "https://drive.google.com/file/d/1VRaiV7YnwRDmrhfw0h2XrKb7lK6GeCwj/view" },
  { title: "Modul Ajar 2 — Membuat Halaman Dinamis dan Menerima Data dengan Laravel", href: "https://drive.google.com/file/d/1_5PNI2W7WpPfjYDNaFGWv94uo4fI_ElN/view" },
  { title: "Modul Ajar 3 — Menghubungkan Laravel dengan MySQL melalui Migration dan Model", href: "https://drive.google.com/file/d/1oNQypeRe5E3qrTDKfST_zJ2P9sNOgWst/view" },
  { title: "Modul Ajar 4 — Mengelola Data Siswa dengan Eloquent ORM", href: "https://drive.google.com/file/d/1vZd1_dC3buunSqwiJFhraYf8xs1_P5TB/view" },
] as const;

const teachingMedia = [
  { title: "Media Ajar 1 — Menjalankan dan Mengenal Cara Kerja Laravel", href: "https://docs.google.com/document/d/1Z2rS64XUb8cqbAb97pT2Fwr4OT7G5uf6/edit" },
  { title: "Media Ajar 2 — Membuat Halaman Dinamis dan Menerima Data dengan Laravel", href: "https://docs.google.com/document/d/1D2j9z8q5a0eZaAjTz0FXuSJbuvE5x4qH/edit" },
  { title: "Media Ajar 3 — Menghubungkan Laravel dengan MySQL melalui Migration dan Model", href: "https://docs.google.com/document/d/1juFEWuYZCvsAGkFhFUMNj26JAULdVTd2/edit" },
  { title: "Media Ajar 4 — Mengelola Data Siswa dengan Eloquent ORM", href: "https://docs.google.com/document/d/1UPrAJygrM5BWRw013j-x_bHDFMWjFzdY/edit" },
] as const;

function DocumentEvidenceRow({
  href,
  title,
  action,
  children,
}: {
  href: string;
  title: string;
  action: "Lihat Modul Ajar" | "Lihat Refleksi" | "Lihat Media Ajar";
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

export default function EPortfolio1Page() {
  return (
    <article className={`${styles.page} px-6 pb-20 pt-16 md:pb-28 md:pt-24`}>
      <div className="mx-auto max-w-4xl">
        <section aria-labelledby="sampul-uts-judul" data-portfolio-cover className="mb-16 grid gap-10 border-b border-zinc-800 pb-16 md:mb-20 md:min-h-[38rem] md:grid-cols-[minmax(0,1fr)_17rem] md:items-center md:gap-12 md:pb-20">
          <div className="min-w-0">
            <div className="mb-8 h-1 w-12 bg-amber-300" aria-hidden="true" />
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-zinc-400">PPG PRAJABATAN</p>
            <p id="sampul-uts-judul" className="text-[clamp(2.25rem,7.5vw,4rem)] font-extrabold leading-none tracking-tight text-white">PORTOFOLIO</p>
            <p className="mt-5 text-sm font-semibold tracking-wide text-amber-200">UJIAN TENGAH SEMESTER (UTS)</p>
            <p className="mt-3 max-w-md text-sm font-medium leading-relaxed tracking-wide text-zinc-300">PRAKTIK PENGALAMAN LAPANGAN (PPL) MANDIRI</p>
            <div className="mt-9 border-l border-zinc-700 pl-4">
              <p className="text-base font-semibold tracking-wide text-white">MUSLICH WAHYU ROMADHON</p>
              <p className="mt-3 text-sm text-zinc-300">2500103916524004</p>
            </div>
            <a href="#isi-portofolio" className="mt-8 inline-flex min-h-11 items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Lihat Isi Portofolio</a>
          </div>
          <div className="w-full max-w-[17rem] justify-self-center border border-zinc-800 p-2 md:justify-self-end">
            <Image src={coverPortrait} alt="Potret formal Muslich Wahyu Romadhon" sizes="272px" preload className="h-auto w-full" />
          </div>
        </section>

        <header id="isi-portofolio" tabIndex={-1} className="scroll-mt-8 pb-12 focus:outline-none md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMESTER II / UJIAN TENGAH SEMESTER / E-PORTFOLIO 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">
            Praktik Mengajar Mandiri Siklus 1
          </h1>
       </header>

        <PortfolioSection index={0}>
          <p className="text-sm leading-relaxed text-zinc-400">Saya menyiapkan pembelajaran Pemrograman Web menggunakan Laravel dengan materi yang disampaikan secara bertahap. Pada empat pertemuan yang tercatat dalam LK 3, pembelajaran dimulai dari menjalankan aplikasi, mengenal hubungan Route dan Controller, kemudian berlanjut pada pembuatan halaman menggunakan Blade dan form sederhana.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Pembagian materi tersebut membantu peserta didik mengikuti proses pembuatan halaman web secara berurutan. Namun, beberapa konsep dasar masih perlu dijelaskan kembali, terutama ketika peserta didik belum memahami hubungan antara alamat halaman, proses yang dijalankan, dan hasil yang ditampilkan.</p>
          <div className="space-y-3" data-teaching-modules>
            <h3 className="text-base font-medium text-zinc-200">Modul Ajar Pemrograman Web</h3>
            <ol className="space-y-3">
              {teachingModules.map((document) => (
                <li key={document.href}><DocumentEvidenceRow href={document.href} title={document.title} action="Lihat Modul Ajar" /></li>
              ))}
            </ol>
          </div>
        </PortfolioSection>

        <PortfolioSection index={1}>
          <p className="text-sm leading-relaxed text-zinc-400">Materi pembelajaran saya siapkan melalui presentasi dan panduan praktikum Laravel. Presentasi digunakan untuk menjelaskan konsep dan memperlihatkan contoh, sedangkan panduan praktikum membantu peserta didik mengikuti langkah pengerjaan.</p>
          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Materi Pembelajaran</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya menggunakan presentasi Laravel 12 yang memuat pengenalan aplikasi, Route, Controller, Blade, form, dan materi lanjutan. Pada kegiatan yang tercatat dalam LK 3, pembelajaran berfokus pada dasar Laravel hingga pembuatan halaman yang dapat menerima data.</p>
            <a href="https://www.canva.com/design/DAHQfRr7DjE/LbLR-L67s7yFhAJyiZVCsA/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
              Lihat Materi Pembelajaran — Canva <ExternalLink className="size-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
            </a>
          </div>
          <div className="space-y-3" data-teaching-media>
            <h3 className="text-base font-medium text-zinc-200">Media Ajar Pemrograman Web</h3>
            <ol className="space-y-3">
              {teachingMedia.map((document) => (
                <li key={document.href}><DocumentEvidenceRow href={document.href} title={document.title} action="Lihat Media Ajar" /></li>
              ))}
            </ol>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-medium text-zinc-200">Penilaian Pembelajaran</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Pemahaman peserta didik perlu diperiksa melalui hasil praktik dan kemampuan mereka menjelaskan kembali proses yang dikerjakan. Dalam refleksi LK 3, saya merencanakan pemberian kesempatan yang lebih banyak agar peserta didik dapat menjelaskan hubungan antara langkah pengerjaan dan hasil pada halaman web.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Hasil penilaian individual tidak ditampilkan dalam portofolio ini.</p>
          </div>
        </PortfolioSection>

        <PortfolioSection index={2}>
          <p className="text-sm leading-relaxed text-zinc-400">Pembelajaran dilaksanakan melalui penjelasan dan praktik bertahap. Peserta didik terlihat lebih aktif ketika dapat mencoba langsung dan melihat hasil pekerjaannya melalui browser. Namun, sebagian masih memerlukan penjelasan ulang untuk memahami hubungan antara alamat halaman, proses pada aplikasi, dan tampilan yang dihasilkan.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Keterbatasan perangkat juga memengaruhi kegiatan. Ketika pembelajaran berlangsung di kelas biasa, tidak semua peserta didik membawa laptop sehingga kesempatan praktik belum merata. Saya perlu menyesuaikan kegiatan agar peserta didik yang belum dapat mencoba tetap dapat mengikuti pembahasan.</p>
          <h3 className="text-base font-medium text-zinc-200">Video Praktik</h3>
          <p data-media-status className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400">Rekaman praktik mengajar terbimbing belum ditautkan.</p>
          <div className="space-y-3" data-teaching-gallery>
            <h3 className="text-base font-medium text-zinc-200">Dokumentasi Kegiatan Mengajar</h3>
            <p data-gallery-context className="text-sm leading-relaxed text-zinc-400">Foto berikut merupakan dokumentasi umum PPL Mandiri; keterkaitannya dengan empat pertemuan dalam LK 3 belum terverifikasi.</p>
            <NonTeachingPhotoCarousel photos={teachingPhotos} label="Foto kegiatan mengajar" emptyMessage="Foto kegiatan mengajar belum tersedia." />
          </div>
        </PortfolioSection>

        <PortfolioSection index={3}>
          <p data-gallery-context className="text-sm leading-relaxed text-zinc-400">Dokumentasi umum kegiatan nonmengajar selama PPL Mandiri; keterkaitannya dengan periode UTS belum terverifikasi.</p>
          <NonTeachingPhotoCarousel photos={nonTeachingPhotos} label="Foto kegiatan nonmengajar" />
        </PortfolioSection>

        <PortfolioSection index={4}>
          <p className="text-sm leading-relaxed text-zinc-400">Praktik mengajar Laravel membantu saya melihat pentingnya memberikan penjelasan yang berurutan dan kesempatan bagi peserta didik untuk mencoba secara langsung. Ketika hasil pekerjaan dapat dilihat melalui browser, peserta didik cenderung lebih mudah mengikuti kegiatan. Namun, beberapa peserta didik masih membutuhkan pengulangan materi dasar agar memahami hubungan antarproses dalam aplikasi.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Masukan dari Guru Pamong mengingatkan saya untuk tetap menjalankan pembelajaran dengan sungguh-sungguh, memberikan pendampingan yang diperlukan, dan memberi kesempatan kepada peserta didik untuk bertanggung jawab terhadap proses belajarnya.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Ke depan, saya perlu memperkuat kegiatan awal dengan pengingat singkat mengenai materi prasyarat, menyesuaikan praktik dengan ketersediaan perangkat, serta memberi kesempatan kepada peserta didik untuk menjelaskan kembali pekerjaan mereka. Hal tersebut menjadi perhatian saya untuk memperbaiki pembelajaran berikutnya.</p>
          <div className="space-y-3" data-reflection-documents>
            <h3 className="text-base font-medium text-zinc-200">Dokumen Refleksi</h3>
            <DocumentEvidenceRow href="https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view" title="LK 3 — Refleksi Praktik Mengajar Terbimbing" action="Lihat Refleksi" />
          </div>
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-8">
          <Link href="/e-portfolio-2" className="inline-flex min-h-11 items-center rounded-sm text-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Lanjut ke E-Portfolio 2 — UAS Pembelajaran Basis Data</Link>
        </footer>
      </div>
    </article>
  );
}
