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
  { id: "perencanaan-pembelajaran", title: "Perencanaan" },
  { id: "materi-pembelajaran", title: "Materi" },
  { id: "media-pembelajaran", title: "Media" },
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

function ArtifactAnalysis({ context, purpose, strength, limitation, followUp }: {
  context: string; purpose: string; strength: string; limitation: string; followUp: string;
}) {
  const items = [
    ["Konteks", context], ["Tujuan", purpose], ["Kekuatan", strength],
    ["Keterbatasan", limitation], ["Rencana tindak lanjut", followUp],
  ];
  return (
    <div className="space-y-4 pt-4" data-artifact-analysis>
      <h3 className="text-base font-medium text-zinc-200">Analisis artefak dan tindak lanjut</h3>
      <dl className="space-y-4 text-sm leading-relaxed text-zinc-400">
        {items.map(([label, text]) => (
          <div key={label}>
            <dt className="font-medium text-zinc-200">{label}</dt>
            <dd className="mt-1">{text}</dd>
          </div>
        ))}
      </dl>
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
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMESTER II / UJIAN TENGAH SEMESTER / E-PORTFOLIO 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">
            Praktik Mengajar Mandiri — Siklus 1
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Pemrograman Web: Laravel, Route, Controller, dan pengelolaan data melalui halaman web</strong></p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">SMK Negeri 1 Surabaya · Pengembangan Perangkat Lunak dan Gim · Refleksi Siklus 1: 25 Agustus 2026</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">E-Portfolio ini menyajikan rancangan, pelaksanaan, analisis, dan refleksi praktik mengajar mandiri Siklus 1. Pembelajaran berfokus pada kelanjutan materi Laravel: peserta didik mengingat kembali hubungan Route dan Controller sebelum mempelajari halaman web yang dapat menerima dan mengelola data. Pembahasan disusun berdasarkan pengalaman yang tercatat dalam refleksi, termasuk kendala ketersediaan perangkat, keterlibatan peserta didik, dan tindak lanjut yang masih perlu dilakukan.</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Fokus penilaian UTS:</strong> Siklus 1 PPL Mandiri. Refleksi LK 3 kegiatan terbimbing dan LK 4 Siklus 2–4 disajikan sebagai konteks pendukung, bukan sebagai pengganti bukti praktik mengajar mandiri Siklus 1.</p>
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

            <h3 className="pt-4 text-base font-medium text-zinc-200">Rancangan yang dipilih</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Rancangan untuk Siklus 1 menempatkan pemahaman alur kerja Laravel sebagai prasyarat sebelum peserta didik mengerjakan halaman yang dapat menerima dan mengelola data. Materi Route dan Controller telah dikenalkan pada kegiatan terbimbing. Karena itu, kegiatan awal praktik mandiri diarahkan untuk menghubungkan kembali pengetahuan sebelumnya dengan tugas yang akan dikerjakan pada pertemuan ini.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Arah tujuan pembelajaran.</strong> Peserta didik diharapkan dapat menjelaskan hubungan Route dan Controller serta menerapkan pemahaman tersebut pada pengembangan halaman web sederhana. Pemahaman tidak cukup dinilai dari halaman yang berhasil terbuka; peserta didik perlu dapat menunjukkan bagian kode yang mengatur alamat, proses, dan hasil yang ditampilkan.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Alur pembelajaran yang direncanakan.</strong> Kegiatan awal mengingatkan konsep prasyarat Laravel dan menyampaikan tujuan. Kegiatan inti memperlihatkan contoh aplikasi dan hasilnya pada browser, lalu memberi kesempatan peserta didik mengikuti dan mengerjakan langkah praktik. Kegiatan akhir digunakan untuk menguatkan hubungan antarkonsep dan memberikan arahan atas pekerjaan yang perlu diselesaikan. Rincian langkah harus mengikuti Modul Ajar Siklus 1 yang benar-benar digunakan; narasi ini tidak menggantikan dokumen tersebut.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Analisis rancangan</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Konteks.</strong> Dalam praktik mandiri, kesiapan peserta didik dan ketersediaan laptop tidak seragam. Saat pembelajaran berlangsung di kelas biasa, sebagian peserta didik belum dapat mencoba kode secara langsung. Kondisi ini perlu diperhitungkan sejak perencanaan, bukan baru ditangani setelah praktik dimulai.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Kekuatan.</strong> Pengaitan Route–Controller dengan tugas baru membuat pembelajaran memiliki kesinambungan. Demonstrasi aplikasi memberi gambaran konkret mengenai apa yang akan dikerjakan, sehingga langkah praktik tidak diawali dari instruksi yang terpisah dari tujuan.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Keterbatasan.</strong> Perencanaan awal belum sepenuhnya mengantisipasi keterbatasan perangkat dan waktu yang dibutuhkan untuk memulai tugas. Akibatnya, tidak semua kegiatan inti dapat diselesaikan dalam alokasi yang telah direncanakan.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Kajian pedagogis.</strong> Dalam prinsip pembelajaran bertahap (<em>scaffolding</em>), pengingat prasyarat dan contoh yang dapat diamati menjadi dukungan awal sebelum peserta didik bekerja lebih mandiri. Namun, dukungan tersebut harus diikuti pemeriksaan pemahaman. Dari sudut pembelajaran inklusif, rancangan perlu menyediakan aktivitas alternatif yang setara tujuan ketika peserta didik belum memiliki akses perangkat.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Tindak lanjut.</strong> Saya perlu memecah tugas menjadi tahapan yang lebih pendek, memeriksa perkembangan pada tiap tahap, dan menyiapkan tugas analisis kode secara tertulis sebagai alternatif ketika komputer tidak tersedia.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Contoh format ringkas Modul Ajar dan LKPD</h3>
            <ExampleStatus>Contoh format — bukan Modul Ajar Siklus 1 asli</ExampleStatus>
            <p className="text-sm leading-relaxed text-zinc-400">Format sementara berikut disusun untuk memperjelas hubungan tujuan, pengalaman belajar, dan asesmen. Ini bukan salinan perangkat yang digunakan pada 25 Agustus 2026.</p>
            <dl className="space-y-4 border-y border-zinc-800 py-5 text-sm leading-relaxed text-zinc-400">
              <div><dt className="font-medium text-zinc-200">Tujuan contoh</dt><dd className="mt-1">Menjelaskan hubungan Route–Controller, menelusuri input Request, dan menampilkan pesan contoh melalui Blade/form.</dd></div>
              <div><dt className="font-medium text-zinc-200">Memahami</dt><dd className="mt-1">Membaca alur permintaan dari browser; menandai alamat Route, method Controller, serta input dan keluaran contoh.</dd></div>
              <div><dt className="font-medium text-zinc-200">Mengaplikasi</dt><dd className="mt-1">Mencoba form pesan sederhana secara bertahap, atau menelusuri kode di kertas bila perangkat tidak tersedia.</dd></div>
              <div><dt className="font-medium text-zinc-200">Merefleksi</dt><dd className="mt-1">Menjelaskan bagian yang berubah, error yang ditemukan, dan langkah pemeriksaan berikutnya.</dd></div>
              <div><dt className="font-medium text-zinc-200">LKPD contoh</dt><dd className="mt-1">Tugas: tandai Route dan Controller, prediksi keluaran input, uji satu perubahan, lalu tulis alasan hasilnya. Kolom jawaban dan hasil pekerjaan asli belum disediakan.</dd></div>
              <div><dt className="font-medium text-zinc-200">Asesmen yang direncanakan</dt><dd className="mt-1">Pertanyaan awal, pengamatan proses, penjelasan alur, serta rubrik contoh pada bagian Instrumen Penilaian; tanpa skor atau hasil siswa.</dd></div>
            </dl>
            <p className="text-sm leading-relaxed text-zinc-400">Rujukan format: <ExternalReference href={references.planning}>Panduan Pembelajaran dan Asesmen BSKAP, edisi revisi 2025</ExternalReference>. <ExternalReference href={references.moduleOrganization}>Organisasi modul XI PPLG SMK Bina Rahayu</ExternalReference> menjadi contoh pengelompokan materi, bukan Modul Ajar milik saya.</p>
            <ArtifactAnalysis
              context="LK 4 Siklus 1 mencatat keterbatasan laptop dan waktu praktik; format contoh ini disusun setelahnya untuk meninjau kebutuhan perencanaan."
              purpose="Memperlihatkan keterhubungan tujuan, memahami–mengaplikasi–merefleksi, LKPD, dan asesmen."
              strength="Tahapan kecil serta alternatif analisis kode memberi titik pemeriksaan pemahaman dan akses belajar tanpa perangkat."
              limitation="Format ringkas belum memuat perangkat asli, rincian pelaksanaan, atau bukti validasi dan penggunaan di kelas."
              followUp="Melengkapi Modul Ajar/LKPD asli Siklus 1 dan membandingkan tujuan, langkah, serta instrumen yang benar-benar digunakan."
            />
        </PortfolioSection>

        <PortfolioSection index={1}>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Materi yang menjadi fokus Siklus 1</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Materi praktik mandiri berangkat dari hubungan Route dan Controller dalam Laravel. Peserta didik menghubungkan alamat yang dibuka melalui browser dengan proses di aplikasi, kemudian mempelajari penerapannya pada halaman yang menerima atau mengelola data. LK 3 menunjukkan bahwa pada tahap terbimbing sebelumnya peserta didik juga telah dikenalkan pada Blade dan form sederhana; catatan ini menjadi konteks pembelajaran terdahulu, <strong className="font-medium text-zinc-200">bukan klaim bahwa semua topik tersebut selesai dipraktikkan pada Siklus 1 mandiri</strong>.</p>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Contoh materi: Route → Controller → Request → Blade/form</h3>
            <ExampleStatus>Contoh materi — bukan berkas yang digunakan saat mengajar</ExampleStatus>
            <p className="text-sm leading-relaxed text-zinc-400">Urutan ini dipakai untuk mengorganisasi topik contoh, bukan urutan waktu eksekusi Laravel. Dalam alur permintaan, browser mengirim form; Route menentukan Controller, method membaca Request, lalu mengirim data ke Blade untuk ditampilkan kembali di browser.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Potongan kode ditulis untuk ilustrasi Laravel 12.x. Contoh memakai GET untuk menampilkan pesan tanpa menyimpan data ke database; kolomnya memakai pesan contoh, bukan data siswa. Contoh ini tidak membuktikan versi Laravel atau cakupan materi yang dipakai saat Siklus 1.</p>
            <div className="space-y-5">
              {codeExamples.map((example) => (
                <figure key={example.title} className="min-w-0 border-y border-zinc-800 py-4">
                  <figcaption className="mb-3 break-words text-sm font-medium text-zinc-200">{example.title}</figcaption>
                  <pre className="whitespace-pre-wrap break-words rounded-sm bg-zinc-950/70 p-4 text-xs leading-relaxed text-zinc-300"><code>{example.code}</code></pre>
                </figure>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">Rujukan teknis: <ExternalReference href={references.controllers}>Laravel 12.x — Controllers</ExternalReference> dan <ExternalReference href={references.requests}>Laravel 12.x — HTTP Requests</ExternalReference>.</p>
            <ArtifactAnalysis
              context="Siklus 1 berangkat dari apersepsi Route–Controller dan rencana halaman yang menerima/mengelola data. Request dan Blade/form di sini merupakan perluasan materi contoh."
              purpose="Membantu pembaca menelusuri input, method penanganan, dan keluaran halaman."
              strength="Satu alur kecil memudahkan peserta didik menjelaskan fungsi kode dan memprediksi perubahan keluaran melalui asesmen formatif."
              limitation="Contoh bukan PPT atau panduan asli; tidak ada bukti bahwa seluruh potongan ini telah dipraktikkan peserta didik."
              followUp="Memasang materi asli setelah terverifikasi dan meminta penjelasan alur pada setiap tahapan, bukan hanya memeriksa tampilan akhir."
            />
        </PortfolioSection>

        <PortfolioSection index={2}>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Media yang tercatat digunakan</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Demonstrasi aplikasi Laravel dan browser.</strong> Guru memperlihatkan contoh pekerjaan melalui aplikasi dan hasil yang muncul pada browser. Media ini membantu menjembatani penjelasan kode dengan keluaran yang dilihat peserta didik.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Bahan tayang dan panduan kode.</strong> Berkas pendukung yang disusun setelah pembelajaran perlu dibedakan dari materi yang benar-benar digunakan saat praktik. Bukti penggunaan diperlukan sebelum sebuah berkas dapat disebut sebagai media pembelajaran Siklus 1.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Analisis materi dan media</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Tujuan.</strong> Demonstrasi diharapkan membantu peserta didik menelusuri hubungan antara alamat halaman, bagian program yang dijalankan, dan hasil yang tampil di browser.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Kekuatan.</strong> Contoh langsung memberi umpan balik yang segera terlihat: ketika langkah kode dijalankan, hasilnya dapat diamati. LK 3 mencatat keterlibatan peserta didik lebih terlihat ketika mereka dapat mencoba dan melihat hasil praktik.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Kelemahan.</strong> Demonstrasi tidak secara otomatis menjamin semua peserta didik memahami prosesnya. Pada praktik mandiri, sebagian peserta didik hanya dapat mengamati karena tidak membawa perangkat. Sebagian lainnya masih membutuhkan pengingat untuk segera memulai pekerjaan.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Kajian pedagogis.</strong> Praktik terbimbing dan demonstrasi dapat menjadi model awal, tetapi pemahaman harus diperiksa melalui penjelasan peserta didik mengenai <em>mengapa</em> sebuah bagian kode diperlukan. Dalam asesmen formatif, pertanyaan singkat tentang fungsi Route, Controller, dan keluaran browser lebih bermakna daripada sekadar memeriksa hasil tampilan.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Perbaikan.</strong> Setelah setiap demonstrasi, peserta didik diberi tugas kecil: menunjuk bagian Route, menjelaskan tindakan Controller, lalu memperkirakan keluaran browser. Jika perangkat terbatas, tugas tersebut dapat dikerjakan melalui potongan kode cetak atau gambar alur.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Contoh media demonstrasi</h3>
            <ExampleStatus>Contoh media — bukan media asli yang digunakan saat mengajar</ExampleStatus>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 border border-zinc-800 p-5">
                <h4 className="text-sm font-medium text-zinc-200">Kartu demonstrasi aplikasi di browser</h4>
                <p className="text-sm leading-relaxed text-zinc-400">Contoh skenario: buka /contoh, isi pesan singkat, kirim form, lalu telusuri perubahan keluaran. Ini rencana demonstrasi, bukan rekaman penggunaan media Siklus 1.</p>
              </div>
              <div className="space-y-3 border border-zinc-800 p-5">
                <h4 className="text-sm font-medium text-zinc-200">Code listing</h4>
                <p className="text-sm leading-relaxed text-zinc-400">Potongan Route, Controller/Request, dan Blade pada bagian Materi menjadi contoh bahan baca kode. Alternatif cetaknya perlu disiapkan dan diuji sebelum digunakan di kelas.</p>
              </div>
            </div>
            <figure className="space-y-3">
              <div className="flex aspect-video items-center justify-center border border-dashed border-zinc-700 bg-zinc-950/40 p-6 text-center text-sm leading-relaxed text-zinc-400">Area contoh tangkapan layar — screenshot aplikasi asli belum dilampirkan</div>
              <figcaption className="text-xs leading-relaxed text-zinc-400">Placeholder ini bukan foto atau tangkapan layar bukti pembelajaran.</figcaption>
            </figure>
            <p className="text-sm leading-relaxed text-zinc-400">Rujukan isi media: <ExternalReference href={references.controllers}>Controllers</ExternalReference> dan <ExternalReference href={references.requests}>HTTP Requests Laravel 12.x</ExternalReference>.</p>
            <ArtifactAnalysis
              context="LK 4 Siklus 1 mencatat demonstrasi hasil melalui browser dan keterbatasan laptop di kelas biasa."
              purpose="Menghubungkan kode, proses, dan keluaran melalui contoh demonstrasi serta bahan baca kode."
              strength="Demonstrasi memberi keluaran yang dapat diamati; code listing memungkinkan pembahasan alur meskipun perangkat terbatas."
              limitation="Kartu dan placeholder disusun sebagai contoh; pemakaiannya belum dibuktikan dan pengamatan demonstrasi belum menjamin pemahaman semua peserta didik."
              followUp="Mengganti placeholder dengan screenshot/media asli beserta konteks penggunaan, lalu memeriksa penjelasan peserta didik setelah setiap demonstrasi."
            />
        </PortfolioSection>

        <PortfolioSection index={3}>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Ringkasan pelaksanaan Siklus 1</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Tanggal refleksi: 25 Agustus 2026.</strong> Pada bagian awal pembelajaran, peserta didik diajak mengingat kembali hubungan Route dan Controller. Kegiatan selanjutnya mengenalkan pembuatan halaman yang dapat menerima dan mengelola data. Guru memberi penjelasan dan contoh secara bertahap melalui aplikasi Laravel dan hasil yang tampil di browser.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Pelaksanaan belum seluruhnya sesuai rencana. Sebagian peserta didik tidak dapat mengikuti praktik langsung ketika pembelajaran berlangsung di kelas biasa karena tidak membawa laptop. Sebagian lainnya perlu beberapa kali diingatkan untuk memulai atau melanjutkan tugas. Akibatnya, kegiatan inti memerlukan waktu lebih panjang dan sebagian materi dilanjutkan pada pertemuan berikutnya.</p>
            <p className="text-sm leading-relaxed text-zinc-400">Pada bagian akhir pembelajaran, guru memberikan penguatan materi dan arahan tentang pekerjaan yang masih perlu diselesaikan. Uraian ini merupakan ringkasan dari LK 4 Siklus 1, bukan laporan bahwa semua peserta didik telah mencapai tujuan pembelajaran.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Bukti video praktik mengajar</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Persyaratan UTS meminta video pelaksanaan praktik mengajar mandiri dari rancangan Siklus 1 yang dipilih. Video tidak dapat digantikan dengan narasi, foto, atau LK refleksi. Status kelengkapan bukti dicatat pada katalog di bagian akhir. Jika rekaman asli tidak ada, saya perlu mengonsultasikan ketentuan alternatif kepada dosen.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Analisis kesesuaian rencana dan pelaksanaan</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Bagian yang terlaksana:</strong> apersepsi Route–Controller, penjelasan materi, demonstrasi aplikasi melalui browser, serta penguatan pada akhir pembelajaran.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Bagian yang belum optimal:</strong> kesempatan praktik langsung belum merata; beberapa peserta didik terlambat memulai pekerjaan; sebagian kegiatan tidak selesai sesuai alokasi waktu.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Makna bagi perencanaan berikutnya:</strong> alokasi kegiatan perlu mempertimbangkan ketersediaan perangkat dan ritme kerja peserta didik. Keberhasilan menjelaskan materi harus dibedakan dari keberhasilan semua peserta didik mengerjakan dan memahami tugas.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Bukti refleksi:</strong> <a href="https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">LK 4 Praktik Pembelajaran Mandiri — Siklus 1</a>.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Rekaman praktik mengajar mandiri Siklus 1</h3>
            <figure className="space-y-3" data-teaching-recording>
              <div className="flex aspect-video items-center justify-center border border-zinc-800 bg-zinc-950/50 p-6 text-center">
                {teachingRecording.href ? (
                  <ExternalReference href={teachingRecording.href}>Buka rekaman asli praktik mengajar Siklus 1</ExternalReference>
                ) : (
                  <p className="text-sm leading-relaxed text-zinc-300">Video praktik mandiri: <strong className="font-medium text-white">Belum dilampirkan</strong></p>
                )}
              </div>
              <figcaption className="text-xs leading-relaxed text-zinc-400">Area rekaman asli. Refleksi tertulis, foto, dan tutorial tidak menggantikan video pelaksanaan rancangan Siklus 1.</figcaption>
            </figure>
            <ExampleStatus>Video referensi pihak ketiga — BUKAN rekaman praktik mengajar saya</ExampleStatus>
            <p className="text-sm leading-relaxed text-zinc-400"><ExternalReference href={references.video}>Buka koleksi video Laravel Learn</ExternalReference> untuk melihat rujukan pembelajaran Laravel. Tautan ini terpisah dari area rekaman asli dan tidak menjadi bukti UTS.</p>
            <ArtifactAnalysis
              context="Ringkasan pelaksanaan bersumber dari LK 4 Siklus 1, 25 Agustus 2026; bukti audiovisual asli belum dilampirkan."
              purpose="Rekaman asli diperlukan untuk mengamati penerapan rancangan, interaksi kelas, penggunaan media, dan penutupan."
              strength="LK 4 menyediakan catatan refleksi nyata untuk mengarahkan aspek pelaksanaan yang perlu diperiksa pada video asli."
              limitation="Tanpa rekaman asli, pengamatan audiovisual praktik saya belum dapat dilakukan; Laravel Learn hanya referensi pihak ketiga."
              followUp="Melampirkan rekaman asli yang dapat diakses penguji dengan judul, materi dan tanggal terverifikasi; bila tidak ada, berkonsultasi kepada dosen tentang alternatif."
            />
        </PortfolioSection>

        <PortfolioSection index={4}>
            <p className="text-sm leading-relaxed text-zinc-400">Kegiatan di lingkungan sekolah dapat memperkaya gambaran pengalaman PPL, tetapi <strong className="font-medium text-zinc-200">bukan persyaratan pengganti</strong> modul ajar, video, atau asesmen Siklus 1. Foto dan catatan kegiatan asli belum tersedia untuk ditampilkan pada halaman ini.</p>
            <ExampleStatus>Foto ilustrasi dari Pexels — bukan dokumentasi PPL</ExampleStatus>
            <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
            <p className="text-sm leading-relaxed text-zinc-400">Galeri ini hanya memperlihatkan contoh penyajian foto dan kredit. Tidak ada klaim lokasi, tanggal, peserta, atau kegiatan pada foto sebagai pengalaman saya. Penggunaan foto mengacu pada <ExternalReference href={references.photoLicense}>lisensi Pexels</ExternalReference>.</p>
            <ArtifactAnalysis
              context="Dokumentasi kegiatan nonmengajar asli belum tersedia; dua foto stok dipakai untuk memperlihatkan format galeri sementara."
              purpose="Menunjukkan bagaimana foto beserta deskripsi, status, dan sumber dapat dibaca tanpa dianggap bukti pengalaman."
              strength="Label ilustrasi dan kredit pada setiap slide membantu membedakan foto stok dari dokumentasi asli."
              limitation="Foto tidak membuktikan keterlibatan saya di sekolah atau pelaksanaan kegiatan nonmengajar."
              followUp="Mengganti foto stok dengan dokumentasi asli setelah izin dan konteksnya terverifikasi; tuliskan kegiatan dan peran hanya berdasarkan catatan yang tersedia."
            />
        </PortfolioSection>

        <PortfolioSection index={5}>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Contoh rubrik praktik Laravel</h3>
            <ExampleStatus>Contoh instrumen — belum diverifikasi sebagai instrumen yang digunakan</ExampleStatus>
            <p className="text-sm leading-relaxed text-zinc-400">Rubrik ini disusun sebagai contoh tindak lanjut, bukan instrumen resmi atau hasil penilaian Siklus 1. Tingkat 1–4 berikut merupakan deskriptor kemampuan; tidak ada skor siswa, rekap, persentase ketuntasan, atau tanda tangan.</p>
            <div className="space-y-6" data-sample-rubric>
              {sampleRubric.map((item) => (
                <div key={item.criterion} className="border-t border-zinc-800 pt-5">
                  <h4 className="text-sm font-medium text-zinc-200">{item.criterion}</h4>
                  <dl className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
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
            <p className="text-sm leading-relaxed text-zinc-400">Rujukan prinsip: <ExternalReference href={references.planning}>Panduan Pembelajaran dan Asesmen BSKAP</ExternalReference> dan <ExternalReference href={references.assessment}>Tipe Latihan/Asesmen — Rumah Pendidikan</ExternalReference>. Kriteria serta deskriptor di atas merupakan contoh susunan halaman ini, bukan kutipan rubrik dari kedua sumber.</p>
            <ArtifactAnalysis
              context="LK 4 merekam kendala proses praktik, tetapi sampel pekerjaan, instrumen yang digunakan, dan rekap penilaian siswa belum terverifikasi."
              purpose="Menjelaskan kriteria pengamatan Route, Controller, input data, penjelasan alur, dan debugging untuk tindak lanjut."
              strength="Deskriptor menilai proses dan penjelasan, bukan hanya halaman yang berhasil terbuka."
              limitation="Contoh belum divalidasi atau digunakan; ketekunan perlu dibaca bersama dukungan belajar dan akses perangkat, bukan disamakan dengan kepemilikan laptop."
              followUp="Mendiskusikan kriteria dengan Guru Pamong, menyesuaikan kebutuhan peserta didik, dan melampirkan instrumen serta pekerjaan asli bila tersedia tanpa mengisi skor rekaan."
            />
        </PortfolioSection>

        <footer className="border-t border-zinc-700 py-12 md:py-16" aria-labelledby="refleksi-penutup">
          <h2 id="refleksi-penutup" className="mb-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Refleksi Profesional dan Bukti Pendukung</h2>
          <div className="max-w-3xl space-y-4 md:ml-10">
            <h3 className="pt-4 text-base font-medium text-zinc-200">Analisis menyeluruh artefak dan asesmen</h3>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Cara membaca bukti pembelajaran</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Analisis artefak dilakukan melalui empat unsur: <strong className="font-medium text-zinc-200">konteks</strong>, <strong className="font-medium text-zinc-200">tujuan</strong>, <strong className="font-medium text-zinc-200">kelebihan</strong>, dan <strong className="font-medium text-zinc-200">kekurangan</strong>, lalu dihubungkan dengan prinsip pedagogis serta rencana perbaikan. Keberadaan sebuah dokumen belum dengan sendirinya membuktikan hasil belajar; dokumen perlu dibaca bersama catatan pelaksanaan dan bukti pekerjaan peserta didik.</p>
            <table className="w-full table-fixed border-collapse text-left text-sm leading-relaxed text-zinc-400">
              <caption className="pb-4 text-left text-xs text-zinc-400">Tujuan dan keterbatasan artefak Siklus 1</caption>
              <thead><tr>
                <th scope="col" className="border-b border-zinc-700 py-3 pr-3 align-top font-medium text-zinc-200 w-[28%]">Artefak</th>
                <th scope="col" className="border-b border-zinc-700 py-3 pr-3 align-top font-medium text-zinc-200">Tujuan dan hal yang dapat dianalisis</th>
                <th scope="col" className="border-b border-zinc-700 py-3 pr-3 align-top font-medium text-zinc-200">Keterbatasan bukti saat ini</th>
              </tr></thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300"><strong className="font-medium text-zinc-200">Modul Ajar Siklus 1</strong></th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Menilai kesinambungan tujuan, apersepsi, langkah praktik, dan penutup, serta penyesuaian dengan kondisi kelas.</td>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Analisis saat ini bertumpu pada LK 3 dan LK 4; kesesuaian rancangan perlu diperiksa terhadap dokumen asli.</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300"><strong className="font-medium text-zinc-200">Materi dan media Laravel</strong></th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Menilai kejelasan hubungan contoh kode, proses aplikasi, dan hasil pada browser.</td>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Pemakaian tiap berkas perlu dibuktikan; narasi demonstrasi tidak memastikan identitas berkas yang digunakan.</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300"><strong className="font-medium text-zinc-200">Video praktik Siklus 1</strong></th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Memperlihatkan bagaimana rencana diterapkan, interaksi kelas, penggunaan media, dan penutupan pembelajaran.</td>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Refleksi tertulis tidak dapat menggantikan pengamatan audiovisual pelaksanaan rancangan.</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300"><strong className="font-medium text-zinc-200">LK 4 Siklus 1</strong></th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Mendokumentasikan hal yang terlaksana, kendala, tanggapan peserta didik, dan rencana perbaikan.</td>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Merupakan refleksi tertulis, bukan rekaman video atau hasil asesmen peserta didik.</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300"><strong className="font-medium text-zinc-200">Contoh pekerjaan dan asesmen peserta didik</strong></th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Memeriksa kemampuan menunjukkan alur Route–Controller serta menjelaskan fungsi bagian kode dan hasilnya.</td>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words">Capaian peserta didik perlu diperiksa melalui pekerjaan asli dan instrumen yang benar-benar digunakan.</td>
                </tr>
              </tbody>
            </table>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Kajian teori dan implikasinya</h3>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Pembelajaran bertahap.</strong> Pengingat konsep prasyarat dan contoh langsung dapat mendukung peserta didik ketika beralih dari mengenali Laravel ke mengerjakan halaman berbasis data. Namun, pembelajaran masih perlu memindahkan tanggung jawab secara bertahap kepada peserta didik agar mereka tidak hanya meniru contoh.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Asesmen formatif.</strong> Demonstrasi yang berhasil ditampilkan di browser belum cukup untuk menyimpulkan bahwa peserta didik memahami kode. Guru perlu mengumpulkan bukti berupa penjelasan alur, hasil perubahan kode sederhana, atau pertanyaan singkat tentang hubungan Route dan Controller. Ini merupakan <strong className="font-medium text-zinc-200">usulan perbaikan asesmen</strong>, bukan klaim bahwa bukti tersebut sudah dikumpulkan pada Siklus 1.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Akses belajar yang inklusif.</strong> Kendala perangkat menunjukkan bahwa kesempatan praktik antarpeserta didik belum setara. Penugasan alternatif tanpa laptop, seperti menelusuri potongan kode atau menggambar alur permintaan, dapat membantu menjaga keterlibatan; efektivitasnya masih perlu diuji pada pertemuan berikutnya.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Rencana asesmen untuk tindak lanjut</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Pemeriksaan pemahaman dapat menggunakan tiga bukti yang saling melengkapi: (1) peserta didik menunjukkan letak Route dan Controller pada contoh yang dikerjakan, (2) peserta didik menjelaskan hubungan alamat yang dibuka, proses, dan hasil yang ditampilkan, serta (3) peserta didik memprediksi atau menguji perubahan kecil pada kode. Rubrik dan hasil asesmen asli hanya dicantumkan apabila dokumennya tersedia.</p>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Status:</strong> belum ada dasar untuk menuliskan persentase ketuntasan, rerata nilai, atau peningkatan hasil belajar. Angka-angka tersebut tidak ditambahkan.</p>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Model guru yang saya tuju</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya ingin menjadi guru yang menyiapkan pembelajaran dengan jelas, mendampingi peserta didik sesuai kebutuhannya, dan tetap memberikan ruang bagi mereka untuk berusaha secara mandiri. Arah tersebut dipengaruhi masukan Guru Pamong dalam kegiatan terbimbing: guru perlu menjalankan pembelajaran dengan sungguh-sungguh, memberikan arahan yang memadai, serta memahami bahwa peserta didik tidak selalu mencapai pemahaman pada saat yang sama.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Pandangan saya tentang mengajar</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Pengalaman menggunakan Laravel memperlihatkan bahwa melihat aplikasi berjalan dan memahami alasan di balik kode adalah dua hal yang berbeda. Karena itu, saya memandang pembelajaran pemrograman sebagai proses bertahap: peserta didik perlu melihat contoh, mencoba, menjelaskan kembali prosesnya, lalu menggunakan pemahaman tersebut untuk menyelesaikan tugas. Guru bertugas menjaga agar tahap-tahap ini dapat diikuti peserta didik dengan kondisi dan kemampuan yang beragam.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Kekuatan yang terlihat</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya dapat menghubungkan materi sebelumnya dengan tugas baru melalui apersepsi Route–Controller dan memberikan demonstrasi aplikasi yang dapat diamati di browser. Pengalaman terbimbing juga memberi bekal untuk mengulang penjelasan dengan urutan yang lebih sederhana ketika peserta didik masih kesulitan memahami alurnya.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Kelemahan yang perlu diperbaiki</h3>
            <p className="text-sm leading-relaxed text-zinc-400">Saya belum sepenuhnya berhasil mengelola waktu praktik dan memastikan setiap peserta didik mulai mengerjakan tugas pada waktu yang tepat. Ketersediaan perangkat yang tidak merata juga menunjukkan bahwa alternatif kegiatan perlu dirancang sebelum pembelajaran. Selain itu, saya perlu lebih sering meminta peserta didik menjelaskan proses yang mereka kerjakan agar pemahaman tidak hanya dinilai dari kemampuan mengikuti contoh.</p>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Rencana tindak lanjut</h3>
            <ol className="list-decimal space-y-4 pl-5 text-sm leading-relaxed text-zinc-400">
              <li><strong className="font-medium text-zinc-200">Memperjelas awal pembelajaran.</strong> Menyiapkan pengingat singkat mengenai konsep prasyarat dan pertanyaan pemeriksaan pemahaman sebelum masuk ke tugas baru.</li>
              <li><strong className="font-medium text-zinc-200">Mengawasi kemajuan secara berkala.</strong> Membagi praktik menjadi target kecil, memberi batas penyelesaian yang wajar, dan memeriksa pekerjaan setelah setiap tahap.</li>
              <li><strong className="font-medium text-zinc-200">Menyiapkan alternatif tanpa perangkat.</strong> Menggunakan potongan kode, prediksi keluaran browser, atau diagram Route–Controller agar peserta didik tetap mengerjakan tugas yang sejalan dengan tujuan.</li>
              <li><strong className="font-medium text-zinc-200">Memeriksa pemahaman kode.</strong> Meminta peserta didik menunjukkan letak kode, menjelaskan fungsi, serta memprediksi hasil perubahan sederhana; catatan hasilnya digunakan untuk menentukan kebutuhan penguatan berikutnya.</li>
            </ol>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Indikator evaluasi tindak lanjut:</strong> lebih banyak peserta didik mulai mengerjakan tugas pada tahap yang ditentukan, kegiatan alternatif benar-benar dapat diselesaikan, dan penjelasan peserta didik menunjukkan pemahaman hubungan antarkomponen. Ini adalah <strong className="font-medium text-zinc-200">indikator yang direncanakan</strong>, bukan hasil yang sudah tercapai.</p>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Bukti utama refleksi Siklus 1</h3>
            <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-zinc-400">
              <li><strong className="font-medium text-zinc-200"><a href="https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus 1</a>.</strong> <strong className="font-medium text-zinc-200">Bukti utama refleksi pelaksanaan UTS.</strong> Mencatat apersepsi, kegiatan inti, penggunaan media, respons peserta didik, umpan balik Guru Pamong, dan perbaikan yang direncanakan; bertanggal 25 Agustus 2026.</li>
            </ul>
            <h3 className="pt-4 text-base font-medium text-zinc-200">Bukti pendukung — praktik terbimbing dan Siklus 2–4</h3>
            <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-zinc-400">
              <li><strong className="font-medium text-zinc-200"><a href="https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">LK 3 — Refleksi Praktik Mengajar Terbimbing</a>.</strong> <strong className="font-medium text-zinc-200">Konteks sebelum praktik mandiri.</strong> Berisi refleksi empat pertemuan Laravel: Route–Controller, Blade, serta form sederhana, termasuk kendala prasyarat materi dan keterbatasan laptop. Dokumen ini bukan video, modul ajar, atau bukti pelaksanaan mandiri.</li>
              <li><strong className="font-medium text-zinc-200"><a href="https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">LK 4 — Siklus 2</a>, <a href="https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Siklus 3</a>, <a href="https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">Siklus 4</a>.</strong> Bukti perkembangan PPL Mandiri setelah Siklus 1. Ditempatkan sebagai lampiran konteks; tidak dijadikan pusat penilaian UTS.</li>
            </ul>

            <h3 className="pt-4 text-base font-medium text-zinc-200">Katalog kelengkapan bukti UTS</h3>
            <table className="w-full table-fixed border-collapse text-left text-sm leading-relaxed text-zinc-400">
              <caption className="pb-4 text-left text-xs text-zinc-400">Status kelengkapan bukti UTS — 29 Oktober 2026</caption>
              <thead><tr>
                <th scope="col" className="border-b border-zinc-700 py-3 pr-3 align-top font-medium text-zinc-200">Bukti</th>
                <th scope="col" className="border-b border-zinc-700 py-3 pr-3 align-top font-medium text-zinc-200">Status pada halaman</th>
              </tr></thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">Refleksi LK 4 Siklus 1</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Tersedia</strong>, lihat tautan refleksi Siklus 1 di atas</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">LK 3 praktik terbimbing</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Tersedia</strong> sebagai konteks sebelum praktik mandiri</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">Modul Ajar lengkap Siklus 1, beserta LKPD</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Bukti asli belum dilampirkan; contoh tidak menggantikannya</strong></td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">Video praktik mengajar mandiri Siklus 1</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Belum dilampirkan; video referensi tidak memenuhi bukti wajib UTS</strong></td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">Materi/PPT dan media asli Siklus 1</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Bukti asli belum dilampirkan; contoh tidak menggantikannya</strong></td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-zinc-800 py-4 pr-3 align-top break-words font-normal text-zinc-300">Sampel hasil kerja, instrumen penilaian siswa, rekap</th>
                  <td className="border-b border-zinc-800 py-4 pr-3 align-top break-words"><strong className="font-medium text-zinc-200">Belum terlampir atau belum terverifikasi</strong></td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm leading-relaxed text-zinc-400"><strong className="font-medium text-zinc-200">Catatan penutup.</strong> Halaman ini menyajikan analisis yang dapat dipertanggungjawabkan berdasarkan catatan refleksi. Kelengkapan penilaian UTS tetap bergantung pada unggahan rancangan pembelajaran asli dan video praktik mengajar Siklus 1, sebagaimana diminta dalam instruksi tugas.</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
