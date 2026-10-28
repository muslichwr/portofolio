import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos } from "./photos";

export const metadata: Metadata = {
  title: "E-Portfolio 1 — Praktik Mengajar Mandiri",
  description:
    "Dokumentasi Praktik Pengalaman Lapangan Mandiri di SMK Negeri 1 Surabaya: perencanaan, materi dan media, pelaksanaan empat siklus pembelajaran, kegiatan nonmengajar, serta refleksi penilaian dan tindak lanjut.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-pembelajaran", title: "Materi Pembelajaran" },
  { id: "media-pembelajaran", title: "Media Pembelajaran" },
  { id: "pelaksanaan-pembelajaran", title: "Pelaksanaan Pembelajaran" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "instrumen-penilaian", title: "Instrumen Penilaian" },
] as const;

const verifiedDocs = {
  lk1: {
    label: "LK 1 Orientasi dan Observasi Manajemen Sekolah",
    href: "https://drive.google.com/file/d/1h5GyG3t1Ggfo1iZBR6fuETKuAAH-pagq/view?usp=drive_link",
  },
  lk2: {
    label: "LK 2 Observasi Lingkungan Belajar",
    href: "https://drive.google.com/file/d/1agomWjaww4YXBFvULq3RBWkK2QIJmf1P/view?usp=drive_link",
  },
  lk3: {
    label: "LK 3 Refleksi Praktik Mengajar Terbimbing",
    href: "https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view?usp=drive_link",
  },
  lk4Siklus1: {
    label: "LK 4 Refleksi Siklus 1",
    href: "https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link",
  },
  lk4Siklus2: {
    label: "LK 4 Refleksi Siklus 2",
    href: "https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view?usp=drive_link",
  },
  lk4Siklus3: {
    label: "LK 4 Refleksi Siklus 3",
    href: "https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view?usp=drive_link",
  },
  lk4Siklus4: {
    label: "LK 4 Refleksi Siklus 4",
    href: "https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view?usp=drive_link",
  },
  lampiran7: {
    label: "Lampiran 7 — Instrumen Penilaian Penyusunan Perangkat Pembelajaran (Praktik Terbimbing)",
    href: "https://drive.google.com/file/d/1_1OW8PhuADKKc1INR4q_ixhIkWJuweul/view?usp=drive_link",
  },
} as const;

const cycles = [
  {
    cycle: 1,
    title: "Pemrograman Web (Laravel)",
    date: "25 Agustus 2026",
    description:
      "Pembelajaran diawali dengan mengingat kembali Route dan Controller, kemudian berlanjut pada halaman web yang dapat menerima dan mengelola data. Penjelasan dan contoh praktik terlaksana, terutama melalui demonstrasi aplikasi dan hasilnya pada browser. Namun, sebagian peserta didik belum dapat praktik langsung karena tidak membawa laptop. Beberapa lainnya masih perlu diingatkan untuk memulai tugas, sehingga sebagian kegiatan berlangsung lebih lama dari rencana.",
    tindakLanjut:
      "Catatan tindak lanjut saya adalah memperpendek tahapan tugas, memeriksa pekerjaan secara berkala, dan menyiapkan aktivitas alternatif bagi peserta didik yang belum dapat menggunakan perangkat.",
    doc: verifiedDocs.lk4Siklus1,
  },
  {
    cycle: 2,
    title: "MySQL CLI dan SQL Dasar",
    date: "15 September 2026",
    description:
      "Peserta didik mempelajari pembuatan database dan tabel, pengelolaan data, serta perintah dasar untuk menampilkan dan mencari data. Contoh langsung melalui MySQL CLI membantu memperjelas cara kerja perintah SQL. Kendala keterbatasan perangkat dan keterlambatan memulai latihan masih muncul; beberapa langkah juga membutuhkan penjelasan ulang sehingga penyelesaian latihan tidak selalu sesuai alokasi waktu.",
    tindakLanjut:
      "Untuk pertemuan berikutnya, saya merencanakan pembagian latihan ke dalam langkah-langkah yang lebih kecil dan tugas tanpa perangkat berupa pembacaan perintah SQL serta prediksi hasilnya.",
    doc: verifiedDocs.lk4Siklus2,
  },
  {
    cycle: 3,
    title: "Pengolahan Data dan Struktur Tabel",
    date: "6 Oktober 2026",
    description:
      "Materi berlanjut pada cara mencari, mengurutkan, dan mengolah data serta mengenali struktur tabel yang lebih tepat. Contoh SQL dapat ditampilkan, tetapi kesempatan peserta didik mengerjakan praktik sendiri masih belum merata. Beberapa peserta didik juga tetap membutuhkan pengingat agar segera mengerjakan tugas, sehingga waktu praktik lebih panjang dan sebagian kegiatan dilanjutkan pada pertemuan berikutnya.",
    tindakLanjut:
      "Refleksi saya menekankan perlunya target kerja yang jelas, pengawasan pengerjaan yang lebih teratur, dan latihan analisis tabel atau SQL bagi peserta didik yang tidak menggunakan laptop.",
    doc: verifiedDocs.lk4Siklus3,
  },
  {
    cycle: 4,
    title: "Foreign Key, JOIN, dan Relasi Tabel",
    date: "20 Oktober 2026",
    description:
      "Pembelajaran diawali dengan mengaitkan struktur tabel yang telah dipelajari dengan kebutuhan menghubungkan data antartabel. Peserta didik mengikuti penjelasan mengenai Foreign Key, JOIN, dan rancangan database relasional sederhana. Contoh tabel yang berhubungan dan hasil penggabungan data membantu memperjelas materi. Akan tetapi, keterbatasan perangkat, kebutuhan pendampingan, dan keterlambatan memulai pekerjaan masih ditemukan hingga siklus terakhir.",
    tindakLanjut:
      "Dari siklus ini, saya merencanakan pemeriksaan progres yang lebih rutin dan kegiatan alternatif seperti menggambar hubungan antartabel atau menyusun rancangan database secara tertulis. Saya belum dapat menyimpulkan bahwa kendala di kelas telah teratasi sepenuhnya.",
    doc: verifiedDocs.lk4Siklus4,
  },
] as const;

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <header className="mb-8 flex items-baseline gap-4 md:mb-10 md:gap-6">
      <span className="font-mono text-xs text-zinc-400" aria-hidden="true">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </header>
  );
}

function DocumentArea({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description: string;
}) {
  return (
    <div className="border-y border-zinc-800 py-5 sm:flex sm:items-start sm:justify-between sm:gap-8">
      <div className="space-y-1">
        <h3 className="text-base font-medium text-zinc-200">{title}</h3>
        {subtitle && (
          <p className="font-mono text-xs text-zinc-500">{subtitle}</p>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:mt-0 sm:max-w-xl">
        {description}
      </p>
    </div>
  );
}

export default function EPortfolio1Page() {
  return (
    <article className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMESTER II / E-PORTFOLIO 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">
            Praktik Mengajar Mandiri
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Dokumentasi Praktik Pengalaman Lapangan Mandiri di SMK Negeri 1 Surabaya,
            meliputi perencanaan, materi dan media, pelaksanaan empat siklus pembelajaran,
            pengalaman di lingkungan sekolah, serta refleksi penilaian dan tindak lanjut.
          </p>
        </header>

        <nav aria-labelledby="daftar-isi" className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">
            Daftar Isi
          </h2>
          <ol>
            {contents.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-baseline gap-4 rounded-sm py-2.5 text-sm text-zinc-300 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                >
                  <span className="font-mono text-xs text-zinc-400" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 01 — Perencanaan Pembelajaran */}
        <section id="perencanaan-pembelajaran" aria-label="Perencanaan Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="01" title="Perencanaan Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <DocumentArea
              title="Modul Ajar — Pengantar Dokumen"
              subtitle="Berkas dokumen pendukung belum diunggah"
              description="Perencanaan pembelajaran saya arahkan pada dua elemen yang dipelajari peserta didik PPLG, yaitu Pemrograman Web dan Basis Data. Urutan kegiatan dimulai dari penerapan Laravel, dilanjutkan dengan pengelolaan data melalui MySQL CLI, pengolahan data menggunakan SQL, serta pemahaman relasi antartabel."
            />
            <div className="max-w-3xl space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Analisis perencanaan dan pelaksanaan</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Rancangan pembelajaran disusun agar materi dapat dipelajari secara bertahap. Pada Pemrograman Web, pengingat tentang Route dan Controller digunakan sebelum peserta didik mempelajari pengelolaan data melalui aplikasi. Pada Basis Data, pembelajaran bergerak dari pembuatan database dan tabel, penggunaan perintah SQL, pengolahan data, hingga Foreign Key dan JOIN. Urutan ini membantu saya mengaitkan pertemuan baru dengan pengetahuan yang telah dibahas sebelumnya.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Pelaksanaan menunjukkan bahwa alokasi waktu dalam rancangan belum selalu sesuai dengan keadaan kelas. Ketika kegiatan berlangsung di ruang kelas biasa, sebagian peserta didik tidak membawa laptop sehingga kesempatan praktik langsung menjadi terbatas. Beberapa peserta didik juga perlu diingatkan berulang kali untuk memulai dan melanjutkan tugas. Kendala tersebut muncul pada beberapa siklus, bukan hanya di awal pembelajaran.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Dari pengalaman ini, perbaikan yang saya rencanakan adalah membagi instruksi menjadi target pekerjaan yang lebih singkat, memeriksa perkembangan setiap tahap, dan menyediakan alternatif kegiatan ketika perangkat tidak tersedia. Dengan demikian, rancangan pembelajaran lebih mempertimbangkan kondisi pelaksanaan, bukan hanya urutan materi.
              </p>
            </div>
            <footer className="border-t border-zinc-800/80 pt-4">
              <p className="text-xs text-zinc-500">
                <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber Refleksi:</span>{" "}
                <a
                  href={verifiedDocs.lk3.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-zinc-300"
                >
                  LK 3 Refleksi Praktik Mengajar Terbimbing
                </a>
                ; LK 4 Siklus 1–4.
              </p>
            </footer>
          </div>
        </section>

        {/* 02 — Materi Pembelajaran */}
        <section id="materi-pembelajaran" aria-label="Materi Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="02" title="Materi Pembelajaran" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:pl-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium text-zinc-200">Materi Utama</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Materi PPL Mandiri mencakup empat rangkaian:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                    <span className="font-mono text-xs text-zinc-400">Siklus 1 — Laravel</span>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                      Menghubungkan pemahaman Route dan Controller dengan pengembangan halaman web yang menerima serta mengelola data.
                    </p>
                  </li>
                  <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                    <span className="font-mono text-xs text-zinc-400">Siklus 2 — MySQL CLI dan SQL Dasar</span>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                      Membuat database dan tabel, mengelola data, serta menampilkan atau mencari data berdasarkan kondisi.
                    </p>
                  </li>
                  <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                    <span className="font-mono text-xs text-zinc-400">Siklus 3 — Pengolahan Data dan Struktur Tabel</span>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                      Mencari, mengurutkan, dan mengolah data menggunakan SQL, disertai penyesuaian struktur tabel.
                    </p>
                  </li>
                  <li className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                    <span className="font-mono text-xs text-zinc-400">Siklus 4 — Basis Data Relasional</span>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                      Memahami hubungan antartabel, Foreign Key, JOIN, dan rancangan database relasional sederhana.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="border-l border-zinc-700 pl-5">
                <h4 className="text-sm font-medium text-zinc-200">PPT Pembelajaran</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Bahan tayang atau presentasi disiapkan sebagai calon bahan pendukung pada bagian ini apabila file yang digunakan telah tersedia untuk diunggah (tautan dokumen belum tersedia).
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Analisis isi dan penyajian materi</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Materi disusun dengan hubungan antartopik yang cukup jelas. Setelah peserta didik mempelajari cara kerja aplikasi melalui Laravel, kegiatan Basis Data memperlihatkan bagaimana data dibuat, dikelola, dicari, dan dihubungkan melalui SQL. Penyajian dilakukan dengan penjelasan dan contoh yang dapat diamati secara langsung.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Pada praktiknya, contoh belum selalu dapat segera diikuti oleh semua peserta didik. Sebagian memerlukan pengulangan istilah, langkah, atau hasil perintah sebelum mampu melanjutkan latihan. Oleh karena itu, materi perlu disertai penanda tahap yang lebih jelas dan pemeriksaan pemahaman singkat sebelum berpindah ke pembahasan berikutnya. Presentasi atau PPT dapat menjadi bahan pendukung pada bagian ini apabila file yang digunakan telah tersedia untuk diunggah.
              </p>
            </div>
          </div>

          <footer className="mt-8 border-t border-zinc-800/80 pt-4 md:pl-10">
            <p className="text-xs text-zinc-500">
              <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber Refleksi:</span>{" "}
              LK 4 Siklus 1–4.
            </p>
          </footer>
        </section>

        {/* 03 — Media Pembelajaran */}
        <section id="media-pembelajaran" aria-label="Media Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="03" title="Media Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <div className="max-w-3xl space-y-2">
              <h3 className="text-base font-medium text-zinc-200">Media yang digunakan dalam pembelajaran</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Media yang tercatat dalam refleksi meliputi demonstrasi aplikasi Laravel dan hasilnya di browser, serta contoh perintah SQL berikut hasil eksekusinya melalui MySQL CLI. Media tersebut digunakan untuk memperlihatkan hubungan antara instruksi, proses, dan hasil secara konkret.
              </p>
            </div>

            <DocumentArea
              title="Code Listing / Panduan Praktik"
              subtitle="Calon dokumen pendukung · Tautan belum tersedia"
              description="Ditempatkan sebagai calon dokumen pendukung ketika berkas PDF aslinya sudah tersedia. Dokumen belum diverifikasi pemakaiannya pada keempat siklus tanpa bukti pemakaian tertulis."
            />

            <div className="max-w-3xl space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Analisis fungsi dan penggunaan media</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Demonstrasi melalui browser membantu peserta didik melihat hasil langkah pemrograman web. Pada pembelajaran Basis Data, tampilan perintah SQL dan hasilnya membantu memperjelas proses pembuatan, pencarian, pengurutan, dan penggabungan data dari beberapa tabel. Contoh langsung menjadi penghubung antara penjelasan konsep dan pekerjaan yang diharapkan.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Keterbatasannya terlihat ketika sebagian peserta didik tidak membawa perangkat. Mereka dapat mengamati demonstrasi, tetapi belum memperoleh kesempatan yang sama untuk mencoba setiap perintah. Karena itu, saya perlu menyiapkan kegiatan pendamping seperti membaca potongan kode, memperkirakan keluaran SQL, atau menggambar relasi tabel secara tertulis.
              </p>
            </div>

            <footer className="border-t border-zinc-800/80 pt-4">
              <p className="text-xs text-zinc-500">
                <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber Refleksi:</span>{" "}
                LK 4 Siklus 1–4.
              </p>
            </footer>
          </div>
        </section>

        {/* 04 — Pelaksanaan Pembelajaran */}
        <section id="pelaksanaan-pembelajaran" aria-label="Pelaksanaan Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="04" title="Pelaksanaan Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm leading-relaxed text-zinc-400">
                Praktik mengajar mandiri dilaksanakan dalam empat siklus pada dua elemen pembelajaran. Rangkaian berikut merangkum kegiatan yang tercatat, hambatan yang ditemukan, dan rencana perbaikan yang saya rumuskan setelah pelaksanaan. Dokumentasi yang tersedia untuk bagian ini berupa LK 4; rekaman video praktik mengajar belum tersedia.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Analisis tertulis ini tidak menggantikan persyaratan video praktik mengajar.
              </p>
            </div>

            <ol className="divide-y divide-zinc-800 border-y border-zinc-800">
              {cycles.map((item) => (
                <li key={item.cycle} className="py-6 sm:grid sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <div className="space-y-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                      Siklus {String(item.cycle).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium text-zinc-200">{item.title}</h3>
                    <p className="font-mono text-xs text-zinc-500">Refleksi {item.date}</p>
                  </div>
                  <div className="mt-3 space-y-3 sm:mt-0">
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5">
                      <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Rencana Perbaikan</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item.tindakLanjut}</p>
                    </div>
                    <div>
                      <a
                        href={item.doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                      >
                        <span>Buka {item.doc.label}</span>
                        <ExternalLink className="size-3.5 text-zinc-400" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <footer className="border-t border-zinc-800/80 pt-4">
              <p className="text-xs text-zinc-500">
                <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber:</span>{" "}
                LK 4 Siklus 1, 2, 3, dan 4. Tanggal di atas adalah tanggal yang tertulis pada lembar refleksi.
              </p>
            </footer>
          </div>
        </section>

        {/* 05 — Kegiatan Nonmengajar */}
        <section id="kegiatan-nonmengajar" aria-label="Kegiatan Nonmengajar" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="05" title="Kegiatan Nonmengajar" />
          <div className="space-y-8 md:pl-10">
            <div className="space-y-3">
              <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
              <p className="text-xs leading-relaxed text-zinc-500">
                Dokumentasi foto: belum dilampirkan. Jika foto asli disediakan, foto akan disajikan melalui carousel dengan keterangan faktual untuk setiap kegiatan. Tidak menggunakan foto stok atau membuat keterangan kegiatan di luar dokumentasi yang ada.
              </p>
            </div>

            <div className="max-w-3xl space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Uraian kegiatan dan refleksi peran</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Selain melaksanakan praktik mengajar, saya mengikuti kegiatan orientasi dan observasi lingkungan sekolah. Pada kegiatan orientasi, saya mempelajari visi dan misi sekolah, struktur organisasi, tata tertib, serta sarana dan prasarana yang mendukung pembelajaran. Observasi lingkungan belajar mencakup kondisi laboratorium dan kegiatan sekolah yang berkaitan dengan pembelajaran kejuruan, termasuk Teaching Factory.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Kegiatan tersebut membantu saya memahami bahwa pembelajaran di kelas berlangsung dalam sistem sekolah yang lebih luas. Pengaturan fasilitas, disiplin, koordinasi antarpihak, dan kondisi tempat praktik berpengaruh pada persiapan serta pelaksanaan pembelajaran. Pengamatan terhadap laboratorium juga menjadi pengingat bahwa kesempatan menggunakan perangkat perlu diperhatikan ketika merancang tugas praktik bagi peserta didik.
              </p>
            </div>

            <footer className="border-t border-zinc-800/80 pt-4">
              <div className="space-y-2">
                <p className="text-xs text-zinc-500">
                  <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber:</span>{" "}
                  LK 1 Orientasi dan Observasi Manajemen Sekolah; LK 2 Observasi Lingkungan Belajar.
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href={verifiedDocs.lk1.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                  >
                    <span>Buka LK 1 (Manajemen Sekolah)</span>
                    <ExternalLink className="size-3.5 text-zinc-400" aria-hidden="true" />
                  </a>
                  <a
                    href={verifiedDocs.lk2.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                  >
                    <span>Buka LK 2 (Lingkungan Belajar)</span>
                    <ExternalLink className="size-3.5 text-zinc-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </section>

        {/* 06 — Instrumen Penilaian */}
        <section id="instrumen-penilaian" aria-label="Instrumen Penilaian" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="06" title="Instrumen Penilaian" />
          <div className="space-y-8 md:pl-10">
            <div className="max-w-3xl space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Instrumen dan bukti evaluasi</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Evaluasi praktik mandiri yang tersedia saat ini terutama berupa refleksi keterlaksanaan kegiatan pada LK 4 di setiap siklus. Refleksi tersebut memeriksa hubungan apersepsi dengan tujuan pembelajaran, kegiatan inti yang berhasil atau belum berhasil, penggunaan media, keterlibatan peserta didik, umpan balik Guru Pamong, serta perbaikan yang direncanakan.
              </p>
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-400/90">
                    Klarifikasi Ruang Lingkup Instrumen
                  </span>
                  <h4 className="text-sm font-medium text-zinc-200">
                    Lampiran 7 — Instrumen Penilaian Penyusunan Perangkat Pembelajaran
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Lampiran 7 yang tersedia merupakan <strong className="text-zinc-200">Instrumen Penilaian Penyusunan Perangkat Pembelajaran pada tahap Praktik Pembelajaran Terbimbing</strong>. Isinya mencakup kelengkapan tujuan, materi dan media, skenario kegiatan, serta kesesuaian asesmen dengan tujuan pembelajaran. Instrumen ini memberi acuan untuk meninjau kualitas rancangan, tetapi <strong className="text-zinc-200">bukan rubrik nilai siswa atau hasil asesmen PPL Mandiri</strong>. Kolom skor dan catatannya pada dokumen yang tersedia belum terisi.
                </p>
                <div className="mt-3">
                  <a
                    href={verifiedDocs.lampiran7.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                  >
                    <span>Buka Lampiran 7 (Praktik Terbimbing)</span>
                    <ExternalLink className="size-3.5 text-zinc-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-3xl space-y-4">
              <h3 className="text-base font-medium text-zinc-200">Analisis kesesuaian dan penggunaan instrumen</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Pengalaman empat siklus menunjukkan pentingnya menilai proses pengerjaan peserta didik, bukan hanya menyampaikan materi. Kegiatan praktik memerlukan petunjuk yang jelas, target kerja bertahap, serta pemeriksaan hasil pada saat pembelajaran berlangsung. Catatan refleksi memperlihatkan bahwa keterbatasan perangkat, kebutuhan penjelasan ulang, dan keterlambatan pengerjaan perlu dipertimbangkan dalam pelaksanaan asesmen.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Rubrik penilaian hasil praktik peserta didik dan rekap nilainya belum terdapat dalam bahan yang tersedia untuk halaman ini. Karena itu, saya belum menyajikan angka capaian, persentase ketuntasan, atau perbandingan hasil belajar yang belum dapat diverifikasi.
              </p>
            </div>

            <footer className="border-t border-zinc-800/80 pt-4">
              <p className="text-xs text-zinc-500">
                <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber:</span>{" "}
                LK 4 Siklus 1–4; Lampiran 7 Instrumen Penilaian Penyusunan Perangkat Pembelajaran.
              </p>
            </footer>
          </div>
        </section>

        {/* Penutup — Refleksi Diri */}
        <section aria-labelledby="refleksi-diri" className="border-t border-zinc-700 pb-4 pt-12 md:pt-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">Penutup</p>
          <h2 id="refleksi-diri" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Refleksi Diri
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-zinc-400">
              Selama empat siklus PPL Mandiri, saya memperoleh pengalaman merencanakan dan melaksanakan pembelajaran praktik pada materi Laravel dan Basis Data. Saya belajar bahwa penguasaan materi dan kesiapan contoh belum otomatis membuat seluruh peserta didik dapat mengikuti kegiatan sesuai waktu yang direncanakan. Perbedaan kesiapan, ketersediaan perangkat, dan kebiasaan memulai tugas perlu diperhatikan sejak awal.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              Hambatan yang sama masih muncul hingga siklus terakhir. Karena itu, saya tidak menganggap persoalan tersebut sudah selesai. Saya perlu meningkatkan cara memberikan instruksi bertahap, memantau pengerjaan siswa, menyiapkan tugas alternatif ketika perangkat tidak tersedia, dan menggunakan hasil pengamatan sebagai dasar perbaikan rancangan berikutnya. Umpan balik Guru Pamong juga mengingatkan saya untuk tetap memberikan pendampingan sekaligus ruang bagi peserta didik untuk bertanggung jawab terhadap proses belajarnya.
            </p>
            <p className="text-base leading-relaxed text-zinc-400">
              PPL Mandiri membantu saya memahami bahwa refleksi guru sebaiknya bertumpu pada kegiatan yang benar-benar berlangsung di kelas, termasuk ketika hasilnya belum sesuai dengan rencana.
            </p>
          </div>
          <footer className="mt-8 border-t border-zinc-800/80 pt-4">
            <p className="text-xs text-zinc-500">
              <span className="font-mono uppercase tracking-wider text-zinc-400">Sumber Utama:</span>{" "}
              LK 3 Praktik Mengajar Terbimbing dan LK 4 Praktik Mandiri Siklus 1–4.
            </p>
          </footer>
        </section>
      </div>
    </article>
  );
}
