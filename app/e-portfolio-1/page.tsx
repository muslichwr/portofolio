import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos } from "./photos";
import { codeExamples, references, sampleRubric, teachingRecording } from "./examples";
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
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Pemrograman Web: Laravel, Route, Controller, dan pengelolaan data melalui halaman web</strong></p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">SMK Negeri 1 Surabaya · Pengembangan Perangkat Lunak dan Gim · Refleksi Siklus 1: 25 Agustus 2026</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">Peserta didik mengingat kembali hubungan Route dan Controller sebelum mempelajari halaman yang menerima dan mengelola data. Uraian Siklus 1 ini mengacu pada LK 4, 25 Agustus 2026.</p>
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
            <div><dt className="font-medium text-zinc-200">Tujuan</dt><dd>Peserta didik menjelaskan hubungan Route–Controller dan menelusuri data dari form ke tampilan browser.</dd></div>
            <div><dt className="font-medium text-zinc-200">Langkah pembelajaran</dt><dd>Peserta didik memahami alur contoh → mengaplikasi melalui tugas bertahap → merefleksi hasil dan kesulitan.</dd></div>
            <div><dt className="font-medium text-zinc-200">LKPD</dt><dd>Peserta didik menandai Route dan Controller, memprediksi keluaran, lalu menjelaskan satu perubahan kode.</dd></div>
            <div><dt className="font-medium text-zinc-200">Asesmen</dt><dd>Pertanyaan awal, pengamatan proses praktik, dan penjelasan alur menggunakan rubrik contoh pada bagian Instrumen Penilaian.</dd></div>
          </dl>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Penggunaan dan kelebihan.</strong> Saya mengaitkan materi baru dengan Route dan Controller yang telah dikenalkan. Format ringkas ini memperlihatkan hubungan tujuan, langkah, dan asesmen agar tugas tidak terlepas dari konsep yang dipelajari.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Pada Siklus 1, keterbatasan laptop dan waktu menghambat praktik. Saya perlu menyiapkan langkah lebih pendek, pemeriksaan berkala, dan alternatif analisis kode tanpa perangkat. Format ini perlu diganti dengan Modul Ajar lengkap serta LKPD yang benar-benar digunakan.</p>
          <p className="text-xs leading-relaxed text-zinc-400">Rujukan format: <ExternalReference href={references.planning}>Panduan Pembelajaran dan Asesmen BSKAP</ExternalReference> · <ExternalReference href={references.moduleOrganization}>Organisasi modul XI PPLG</ExternalReference>.</p>
        </PortfolioSection>

        <PortfolioSection index={1}>
          <ExampleStatus>Contoh materi — bukan berkas yang digunakan saat mengajar</ExampleStatus>
          <p className="text-sm leading-relaxed text-zinc-400">Route menentukan Controller yang menangani permintaan. Controller membaca data melalui Request, lalu mengirimkannya ke Blade untuk ditampilkan. Cuplikan Laravel 12.x berikut menunjukkan penghubung alamat dan method; Request serta Blade/form menjadi topik contoh lanjutan.</p>
          <figure className="min-w-0 border-y border-zinc-800 py-4">
            <figcaption className="mb-3 text-sm font-medium text-zinc-200">{codeExamples[0].title}</figcaption>
            <pre className="whitespace-pre-wrap break-words rounded-sm bg-zinc-950/70 p-4 text-xs leading-relaxed text-zinc-300"><code>{codeExamples[0].code}</code></pre>
          </figure>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Penggunaan dan kelebihan.</strong> Peserta didik mengingat kembali Route–Controller pada awal Siklus 1. Contoh kecil membantu menelusuri hubungan alamat dan proses. Cakupan Request serta Blade/form pada contoh ini tidak membuktikan seluruh topik telah selesai dipraktikkan saat itu.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Cuplikan ini belum menggantikan materi asli. Saya perlu memasang bahan yang digunakan dan meminta peserta didik menjelaskan fungsi kode serta memperkirakan keluarannya sebelum melanjutkan tugas.</p>
          <p className="text-xs leading-relaxed text-zinc-400">Rujukan: <ExternalReference href={references.controllers}>Laravel 12.x — Controllers</ExternalReference> · <ExternalReference href={references.requests}>HTTP Requests</ExternalReference>.</p>
        </PortfolioSection>

        <PortfolioSection index={2}>
          <ExampleStatus>Contoh media — bukan media asli yang digunakan saat mengajar</ExampleStatus>
          <figure className="space-y-3">
            <div className="flex aspect-video items-center justify-center border border-dashed border-zinc-700 bg-zinc-950/40 p-6 text-center text-sm leading-relaxed text-zinc-400">Area contoh tangkapan layar aplikasi Laravel — screenshot asli belum dilampirkan</div>
            <figcaption className="text-xs leading-relaxed text-zinc-400">Skenario contoh: alamat Route dan hasilnya di browser, dibaca bersama cuplikan pada bagian Materi Pembelajaran.</figcaption>
          </figure>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Penggunaan dan kelebihan.</strong> Saya mendemonstrasikan hasil aplikasi melalui browser pada Siklus 1. Keluaran yang terlihat membantu menghubungkan penjelasan kode dengan tampilan halaman.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Peserta didik yang tidak membawa laptop belum dapat mencoba langsung. Saya perlu menyiapkan potongan kode cetak dan pertanyaan prediksi keluaran. Screenshot serta bahan demonstrasi asli masih perlu dilampirkan.</p>
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
            <figcaption className="text-xs leading-relaxed text-zinc-400"><ExternalReference href={references.video}>Video referensi pihak ketiga — BUKAN rekaman praktik mengajar saya</ExternalReference> (Laravel Learn).</figcaption>
          </figure>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Pelaksanaan dan kelebihan.</strong> Saya membuka pembelajaran dengan apersepsi Route–Controller, kemudian menjelaskan dan mendemonstrasikan halaman yang menerima atau mengelola data. LK 4 Siklus 1 mencatat kegiatan tersebut; video asli diperlukan untuk memperlihatkan kesesuaiannya dengan rancangan.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Peserta didik yang tidak membawa laptop belum dapat mengikuti praktik langsung. Peserta didik yang belum memulai tugas perlu diingatkan, sehingga sebagian materi dilanjutkan pada pertemuan berikutnya. Saya perlu menyesuaikan tahapan dan waktu praktik serta melampirkan rekaman asli, bukan tutorial.</p>
        </PortfolioSection>

        <PortfolioSection index={4}>
          <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Penggunaan dan kelebihan.</strong> Dua foto stok di atas memperlihatkan contoh penyajian galeri beserta keterangan dan kredit. Label ilustrasi pada setiap foto membedakannya dari dokumentasi PPL.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Foto tersebut tidak membuktikan kegiatan nonmengajar saya. Dokumentasi asli belum tersedia; saya perlu menggantinya dengan foto berizin dan catatan kegiatan yang dapat diverifikasi. <ExternalReference href={references.photoLicense}>Lisensi Pexels</ExternalReference>.</p>
        </PortfolioSection>

        <PortfolioSection index={5}>
          <ExampleStatus>Contoh instrumen — belum diverifikasi sebagai instrumen yang digunakan</ExampleStatus>
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
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Penggunaan dan kelebihan.</strong> Rubrik contoh menilai ketepatan kode, penerimaan data, penjelasan alur, dan proses debugging pada tingkat 1–4. Deskriptornya membantu membedakan halaman yang berhasil terbuka dari pemahaman proses pengerjaannya.</p>
          <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan dan perbaikan.</strong> Instrumen ini belum terverifikasi sebagai perangkat Siklus 1; hasil penilaian siswa juga belum tersedia. Saya perlu meninjau kriterianya bersama Guru Pamong dan melampirkan instrumen asli. Ketekunan perlu dinilai dengan mempertimbangkan akses perangkat.</p>
          <p className="text-xs leading-relaxed text-zinc-400">Rujukan: <ExternalReference href={references.assessment}>Tipe Latihan/Asesmen — Rumah Pendidikan</ExternalReference>. Tingkat pada contoh ini bukan skor siswa.</p>
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-12 md:py-16" aria-labelledby="refleksi-penutup">
          <h2 id="refleksi-penutup" className="mb-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Refleksi Penutup</h2>
          <div className="max-w-3xl space-y-4 md:ml-10">
            <p className="text-sm leading-relaxed text-zinc-400">Saya dapat menghubungkan materi sebelumnya dengan tugas baru dan memberikan demonstrasi melalui browser. Namun, pengelolaan waktu dan pemerataan kesempatan praktik masih perlu diperbaiki. Saya ingin mendampingi peserta didik sampai mereka mampu menjelaskan alasan di balik kode. Pada pertemuan berikutnya, saya akan membagi tugas menjadi langkah pendek, memeriksa kemajuan secara berkala, menyiapkan alternatif tanpa perangkat, dan meminta penjelasan alur. Langkah tersebut masih berupa rencana perbaikan.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Sumber refleksi: <ExternalReference href="https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link">LK 4 Praktik Pembelajaran Mandiri — Siklus 1, 25 Agustus 2026</ExternalReference>.</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
