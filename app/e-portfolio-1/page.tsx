import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos } from "./photos";
import { references, sampleRubric, teachingRecording } from "./examples";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "E-Portfolio 1 — UTS PPL Mandiri Siklus 1",
  description:
    "UTS PPL Mandiri Siklus 1 Laravel di SMK Negeri 1 Surabaya: perencanaan, materi dan media, pelaksanaan, analisis artefak, asesmen, refleksi profesional, serta kelengkapan bukti.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-pembelajaran", title: "Materi Pembelajaran" },
  { id: "media-pembelajaran", title: "Media Pembelajaran" },
  { id: "pelaksanaan-pembelajaran", title: "Video Pelaksanaan" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "instrumen-penilaian", title: "Instrumen Penilaian" },
] as const;

function ExternalReference({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">{children}</a>;
}

function ExampleStatus({ children }: { children: ReactNode }) {
  return <p className="border-l-2 border-zinc-500 pl-4 text-sm font-medium leading-relaxed text-zinc-200">{children}</p>;
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
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMESTER II / UJIAN TENGAH SEMESTER / E-PORTFOLIO 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">
            Praktik Mengajar Mandiri — Siklus 1
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Pembelajaran Laravel: membuat halaman web yang menerima dan mengelola data</strong></p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">SMK Negeri 1 Surabaya · Pengembangan Perangkat Lunak dan Gim · Refleksi Siklus 1: 25 Agustus 2026</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">Peserta didik mengingat kembali materi sebelumnya sebelum mempelajari pembuatan halaman web yang menerima dan mengelola data. Refleksi Siklus 1 ini mengacu pada LK 4, 25 Agustus 2026.</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Bukti wajib UTS:</strong> Modul Ajar lengkap terbaik Siklus 1 dan video pelaksanaan yang sesuai rancangan. Keduanya belum dilampirkan; contoh pada halaman ini tidak menggantikannya.</p>
        </header>

        <nav aria-labelledby="daftar-isi" className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">
            Daftar Isi
          </h2>
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
          <ExampleStatus>Contoh format — bukan Modul Ajar Siklus 1 asli</ExampleStatus>
          <dl className="space-y-3 border-y border-zinc-800 py-4 text-sm leading-relaxed text-zinc-400">
            <div><dt className="font-medium text-zinc-200">Tujuan</dt><dd>Peserta didik memahami langkah pembuatan halaman web serta menjelaskan cara data diterima dan ditampilkan.</dd></div>
            <div><dt className="font-medium text-zinc-200">Langkah pembelajaran</dt><dd>Peserta didik mengamati contoh, mengikuti praktik secara bertahap, lalu merefleksi hasil dan kesulitan.</dd></div>
            <div><dt className="font-medium text-zinc-200">LKPD</dt><dd>Peserta didik mencatat langkah kerja, mencoba memasukkan data, dan menjelaskan hasil yang muncul pada halaman.</dd></div>
            <div><dt className="font-medium text-zinc-200">Asesmen</dt><dd>Pertanyaan awal, pengamatan proses praktik, dan penjelasan alur menggunakan rubrik contoh pada bagian Instrumen Penilaian.</dd></div>
          </dl>
          <p className="text-sm leading-relaxed text-zinc-400">Saya mengaitkan materi baru dengan pembelajaran sebelumnya agar peserta didik memahami tujuan praktik. Contoh format ini menyatukan tujuan, kegiatan, dan penilaian, tetapi belum menggantikan Modul Ajar lengkap serta LKPD yang digunakan pada Siklus 1.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Keterbatasan laptop dan waktu menunjukkan bahwa rencana kegiatan perlu menyesuaikan keadaan kelas. Saya perlu membagi praktik menjadi langkah lebih pendek, memeriksa kemajuan secara berkala, dan menyediakan tugas tertulis bagi peserta didik yang belum dapat menggunakan perangkat.</p>
          <p className="text-xs leading-relaxed text-zinc-400">Rujukan format: <ExternalReference href={references.planning}>Panduan Pembelajaran dan Asesmen BSKAP</ExternalReference> · <ExternalReference href={references.moduleOrganization}>Organisasi modul XI PPLG</ExternalReference>.</p>
        </PortfolioSection>

        <PortfolioSection index={1}>
          <ExampleStatus>Contoh materi — bukan berkas yang digunakan saat mengajar</ExampleStatus>
          <div className="space-y-3 border-y border-zinc-800 py-4">
            <h3 className="text-sm font-medium text-zinc-200">Contoh urutan materi</h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
              <li>Peserta didik mengenali hubungan antara langkah pembuatan dan tampilan halaman web.</li>
              <li>Peserta didik mengikuti contoh halaman yang menerima data sederhana.</li>
              <li>Peserta didik memeriksa hasil dan menjelaskan kembali langkah yang dikerjakan.</li>
            </ol>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">Materi Siklus 1 berangkat dari pembelajaran Laravel sebelumnya dan berlanjut pada halaman yang menerima atau mengelola data. Urutan contoh di atas menunjukkan hubungan antara penjelasan, latihan, dan pembahasan hasil.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Sebagian materi belum selesai dan dilanjutkan pada pertemuan berikutnya. Saya perlu membatasi cakupan latihan serta memeriksa pemahaman sebelum menambah langkah baru. Bahan ajar asli masih perlu dilampirkan agar kesesuaian materi dengan rancangan dapat ditinjau.</p>
        </PortfolioSection>

        <PortfolioSection index={2}>
          <ExampleStatus>Contoh media — bukan media asli yang digunakan saat mengajar</ExampleStatus>
          <figure className="space-y-3">
            <div className="flex aspect-video items-center justify-center border border-dashed border-zinc-700 bg-zinc-950/40 p-6 text-center text-sm leading-relaxed text-zinc-400">Tangkapan layar aplikasi Laravel yang digunakan saat pembelajaran belum dilampirkan</div>
            <figcaption className="text-xs leading-relaxed text-zinc-400">Area ini disiapkan untuk memperlihatkan contoh halaman dan hasil praktik.</figcaption>
          </figure>
          <p className="text-sm leading-relaxed text-zinc-400">Saya mendemonstrasikan hasil aplikasi melalui tampilan halaman web. Contoh yang terlihat di layar memberi gambaran konkret tentang pekerjaan yang akan dilakukan.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Peserta didik yang tidak membawa laptop belum dapat mencoba langsung. Saya perlu menyiapkan panduan tertulis dan pertanyaan tentang hasil yang diharapkan agar mereka tetap dapat mengikuti pembahasan. Bahan demonstrasi asli masih perlu dilampirkan.</p>
        </PortfolioSection>

        <PortfolioSection index={3}>
          <figure className="space-y-3" data-teaching-recording>
            <div className="flex aspect-video items-center justify-center border border-zinc-800 bg-zinc-950/50 p-6 text-center">
              {teachingRecording.href ? (
                <ExternalReference href={teachingRecording.href}>Buka rekaman asli praktik mengajar Siklus 1</ExternalReference>
              ) : (
                <p className="text-sm leading-relaxed text-zinc-300">Video praktik mandiri: <strong className="font-medium text-white">Belum dilampirkan</strong></p>
              )}
            </div>
          </figure>
          <p className="text-sm leading-relaxed text-zinc-400">Saya membuka pembelajaran dengan mengingatkan materi sebelumnya, kemudian memberi penjelasan dan demonstrasi secara bertahap. LK 4 Siklus 1 mencatat pelaksanaan ini; rekaman asli diperlukan agar penguji dapat meninjau kegiatan tersebut bersama rancangan pembelajarannya.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Peserta didik yang belum memulai tugas perlu diingatkan, sementara keterbatasan laptop mengurangi kesempatan praktik langsung. Saya perlu menyesuaikan waktu dan memberi arahan lebih singkat. Catatan refleksi belum menggantikan video pelaksanaan.</p>
        </PortfolioSection>

        <PortfolioSection index={4}>
          <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
          <p className="text-sm leading-relaxed text-zinc-400">Dokumentasi kegiatan nonmengajar saya belum tersedia. Dua foto di atas hanya ilustrasi dan tidak menunjukkan kegiatan yang saya lakukan selama PPL. Saya perlu menggantinya dengan foto berizin dan keterangan berdasarkan catatan kegiatan yang sebenarnya. <ExternalReference href={references.photoLicense}>Lisensi Pexels</ExternalReference>.</p>
        </PortfolioSection>

        <PortfolioSection index={5}>
          <ExampleStatus>Contoh instrumen — bukan instrumen penilaian asli Siklus 1</ExampleStatus>
          <div className="space-y-5" data-sample-rubric>
            {sampleRubric.map((item) => (
              <div key={item.criterion} className="border-t border-zinc-800 pt-4">
                <h3 className="text-sm font-medium text-zinc-200">{item.criterion}</h3>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                  {item.levels.map((description, index) => (
                    <div key={index} className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:gap-4">
                      <dt className="font-medium text-zinc-300">Tingkat {index + 1}</dt>
                      <dd>{description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">Contoh instrumen ini memuat tiga aspek: pemahaman, keterampilan praktik, dan kemampuan menjelaskan hasil. Indikatornya memberi arah untuk mengamati proses belajar serta penjelasan peserta didik, bukan hanya hasil akhir yang terlihat.</p>
          <p className="text-sm leading-relaxed text-zinc-400">Instrumen dan hasil penilaian asli Siklus 1 belum tersedia untuk ditinjau. Saya perlu membahas indikator ini bersama Guru Pamong dan menyesuaikannya dengan tujuan pembelajaran serta akses perangkat sebelum digunakan.</p>
          <p className="text-xs leading-relaxed text-zinc-400">Rujukan: <ExternalReference href={references.assessment}>Tipe Latihan/Asesmen — Rumah Pendidikan</ExternalReference>. Tingkat pada contoh ini bukan skor siswa.</p>
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-12 md:py-16" aria-labelledby="refleksi-penutup">
          <h2 id="refleksi-penutup" className="mb-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Refleksi Penutup</h2>
          <div className="max-w-3xl space-y-4 md:ml-10">
            <p className="text-sm leading-relaxed text-zinc-400">Saya dapat menghubungkan materi sebelumnya dengan tugas baru dan memberikan demonstrasi yang dapat diamati. Pengelolaan waktu serta kesempatan praktik masih perlu diperbaiki. Saya ingin mendampingi peserta didik agar memahami tujuan setiap langkah yang dikerjakan. Pada pertemuan berikutnya, saya akan membagi tugas menjadi langkah pendek, memeriksa kemajuan secara berkala, menyiapkan alternatif tanpa perangkat, dan meminta penjelasan hasil. Langkah tersebut masih berupa rencana perbaikan.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Sumber refleksi: <ExternalReference href="https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link">LK 4 Praktik Pembelajaran Mandiri — Siklus 1, 25 Agustus 2026</ExternalReference>.</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
