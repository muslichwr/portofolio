import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos } from "../e-portfolio-1/photos";
import styles from "../e-portfolio-1/page.module.css";

export const metadata: Metadata = {
  title: "E-Portfolio 2 — UAS PPL Mandiri Siklus 2–4",
  description:
    "Analisis artefak dan refleksi akhir PPL Mandiri Siklus 2–4: pembelajaran MySQL, pengolahan data, susunan tabel, dan hubungan antartabel, beserta status dokumen dan video asli.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-media-penilaian", title: "Materi, Media, dan Penilaian" },
  { id: "pelaksanaan-video", title: "Pelaksanaan dan Video" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "refleksi-akhir", title: "Refleksi Akhir" },
] as const;

// Isi hanya setelah Modul Ajar dan rekaman asli yang sesuai telah diperiksa.
// Keberadaan LK refleksi tidak menetapkan rancangan atau siklus terbaik.
const selectedArtifacts: { moduleHref: string | null; videoHref: string | null } = {
  moduleHref: null,
  videoHref: null,
};

const cycles = [
  {
    number: 2,
    date: "15 September 2026",
    title: "MySQL dan pengelolaan data",
    summary:
      "Peserta didik mengenal MySQL, membuat tempat penyimpanan dan tabel, serta berlatih mengelola, menampilkan, dan mencari data. Penjelasan serta contoh dapat diberikan, tetapi latihan memerlukan pendampingan ulang dan sebagian kegiatan dilanjutkan pada pertemuan berikutnya.",
    href: "https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view",
  },
  {
    number: 3,
    date: "6 Oktober 2026",
    title: "Pengolahan data dan susunan tabel",
    summary:
      "Peserta didik mengingat kembali cara mengelola dan mencari data, kemudian mempelajari pengolahan data serta susunan tabel yang lebih tepat. Contoh membantu pembahasan, tetapi kesempatan praktik belum merata. Beberapa peserta didik perlu diingatkan untuk memulai tugas sehingga penyelesaian latihan membutuhkan waktu lebih panjang.",
    href: "https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view",
  },
  {
    number: 4,
    date: "20 Oktober 2026",
    title: "Hubungan antartabel",
    summary:
      "Peserta didik menghubungkan materi susunan tabel dengan kebutuhan menggunakan data dari beberapa tabel. Penjelasan dan contoh hubungan antartabel serta rancangan penyimpanan data sederhana dapat diberikan. Keterbatasan perangkat dan kebutuhan pengingat mengerjakan tugas masih ditemukan hingga siklus ini.",
    href: "https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view",
  },
] as const;

function DocumentLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
      {children}
    </a>
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
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">SEMESTER II / UJIAN AKHIR SEMESTER / E-PORTFOLIO 2</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">Praktik Mengajar Mandiri — Siklus 2–4</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">Pembelajaran Basis Data: MySQL, pengolahan data, susunan tabel, dan hubungan antartabel di SMK Negeri 1 Surabaya.</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">Halaman ini melanjutkan E-Portfolio 1 melalui analisis artefak dan refleksi akhir Siklus 2–4. Uraian mengacu pada LK 4; rancangan terbaik belum ditetapkan karena Modul Ajar lengkap dan video yang sesuai belum dilampirkan.</p>
        </header>

        <nav aria-labelledby="daftar-isi" className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">Daftar Isi</h2>
          <ol>
            {contents.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="flex min-h-11 items-baseline gap-4 rounded-sm py-2.5 text-sm text-zinc-300 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
                  <span className="font-mono text-xs text-zinc-400" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <PortfolioSection index={0}>
          <div data-artifact-placeholder className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400">
            {selectedArtifacts.moduleHref ? (
              <DocumentLink href={selectedArtifacts.moduleHref}>Buka Modul Ajar lengkap terpilih</DocumentLink>
            ) : (
              <p>Modul Ajar lengkap terbaik dari Siklus 2–4: <strong className="font-medium text-zinc-200">belum dilampirkan; siklus terpilih belum ditetapkan.</strong></p>
            )}
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">Catatan refleksi menunjukkan urutan materi dari pengenalan MySQL menuju pengolahan data dan hubungan antartabel. Pengaitan dengan materi sebelumnya memberi arah pada kegiatan baru. Namun, LK 4 belum cukup untuk menilai kelengkapan dan memilih rancangan terbaik.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Saya perlu meninjau tujuan, langkah kegiatan, bahan ajar, dan penilaian pada Modul Ajar asli bersama video pelaksanaannya. Rancangan yang dipilih perlu memperlihatkan penyesuaian terhadap waktu serta ketersediaan perangkat, bukan hanya urutan materi.</p>
        </PortfolioSection>

        <PortfolioSection index={1}>
          <p className="text-sm leading-relaxed text-zinc-400">Peserta didik mempelajari cara menyimpan, mencari, mengolah, dan menghubungkan data secara bertahap. Contoh yang diperagakan beserta hasilnya membantu pembahasan. Kesempatan mencoba tetap terbatas bagi peserta didik yang tidak memiliki perangkat saat pembelajaran di kelas biasa.</p>
          <div data-artifact-placeholder className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400">Materi, media, instrumen penilaian, dan sampel pekerjaan asli Siklus 2–4 belum dilampirkan. LK 4 merupakan bukti refleksi, bukan rekap nilai peserta didik.</div>
          <p className="text-sm leading-relaxed text-zinc-400">Saya perlu membagi latihan menjadi target kecil, memeriksa hasil setiap tahap, dan meminta peserta didik menjelaskan langkah yang dikerjakan. Latihan membaca contoh tabel atau memperkirakan hasil pengolahan data dapat menjadi alternatif tanpa perangkat. Langkah ini merupakan rencana perbaikan, bukan hasil asesmen yang sudah diperoleh.</p>
        </PortfolioSection>

        <PortfolioSection index={2}>
          <div data-artifact-placeholder data-teaching-recording className="border-l-2 border-zinc-700 bg-zinc-950/40 px-4 py-4 text-sm leading-relaxed text-zinc-400">
            {selectedArtifacts.videoHref ? (
              <DocumentLink href={selectedArtifacts.videoHref}>Buka video praktik mengajar sesuai rancangan terpilih</DocumentLink>
            ) : (
              <p>Video praktik mengajar sesuai rancangan terpilih: <strong className="font-medium text-zinc-200">belum dilampirkan.</strong></p>
            )}
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">Tiga dokumen berikut mencatat kegiatan, kendala, dan perbaikan yang saya rencanakan. Dokumen refleksi tidak menggantikan video untuk meninjau kesesuaian pelaksanaan dengan rancangan.</p>
          <div className="space-y-6" data-cycle-reflections>
            {cycles.map((cycle) => (
              <div key={cycle.number} className="space-y-3 border-t border-zinc-800 pt-5">
                <h3 className="text-base font-medium text-zinc-200">Siklus {cycle.number} — {cycle.title}</h3>
                <p className="font-mono text-xs text-zinc-400">{cycle.date}</p>
                <p className="text-sm leading-relaxed text-zinc-400">{cycle.summary}</p>
                <p className="text-sm"><DocumentLink href={cycle.href}>LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus {cycle.number}</DocumentLink></p>
              </div>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection index={3}>
          <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
          <p className="text-sm leading-relaxed text-zinc-400">Dokumentasi kegiatan nonmengajar asli belum tersedia. Dua foto di atas hanya ilustrasi dan tidak menunjukkan lokasi, peserta, atau kegiatan yang saya lakukan. Foto berizin dan keterangan berdasarkan catatan kegiatan masih perlu dilampirkan.</p>
        </PortfolioSection>

        <PortfolioSection index={4}>
          <p className="text-sm leading-relaxed text-zinc-400">Peralihan dari pembelajaran web ke Basis Data menuntut saya mempersiapkan materi dan pendampingan dengan lebih matang. Penjelasan dan contoh dapat diberikan, tetapi keterbatasan perangkat serta kebutuhan pengingat mengerjakan tugas masih muncul hingga Siklus 4. Saya belum dapat menyatakan bahwa kendala tersebut telah teratasi.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Saya perlu menyiapkan target kerja yang lebih jelas, memeriksa kemajuan secara berkala, dan menyediakan kegiatan tertulis ketika perangkat tidak tersedia. Arahan Guru Pamong mengingatkan saya untuk memberi dukungan sekaligus kesempatan bertanggung jawab terhadap pekerjaan. Pada pembelajaran berikutnya, saya akan meminta penjelasan hasil agar kebutuhan penguatan dapat diketahui.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><DocumentLink href="https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view">LK 3 — Refleksi Praktik Mengajar Terbimbing</DocumentLink> disertakan sebagai konteks tahap sebelumnya. Bukti refleksi utama halaman UAS ini adalah LK 4 Siklus 2–4 di atas.</p>
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-8">
          <Link href="/e-portfolio-1" className="inline-flex min-h-11 items-center rounded-sm text-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Kembali ke E-Portfolio 1 — UTS Siklus 1</Link>
        </footer>
      </div>
    </article>
  );
}
