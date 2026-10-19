import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { RefleksiMatkulClient, type CourseData } from "@/components/sections/RefleksiMatkulClient";

/* ============================================================================
   SEMESTER II COURSE DATA
   ============================================================================ */
const courses: readonly CourseData[] = [
  {
    tabLabel: "MK 1 · Sosial Emosional",
    title: "Pembelajaran Sosial Emosional",
    lk2PdfHref: null,
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content: "Mata kuliah Pembelajaran Sosial Emosional membuat saya melihat bahwa keberhasilan pembelajaran tidak hanya ditentukan oleh materi dan metode yang sudah disiapkan.\n\nCara guru membaca keadaan kelas, mengelola emosinya sendiri, dan merespons perilaku peserta didik ikut menentukan bagaimana pembelajaran berlangsung.\n\nHal ini terasa ketika saya mengajar praktik Pemrograman Web. Secara umum peserta didik cukup aktif saat mulai mencoba langsung, tetapi beberapa masih mudah kehilangan fokus dan beralih pada aktivitas lain yang dianggap lebih menarik. Kondisi tersebut tetap muncul meskipun HP sudah dikumpulkan.\n\nDari pengalaman ini saya mulai memahami bahwa mengurangi sumber distraksi dari luar belum tentu cukup. Peserta didik juga perlu belajar mengenali kondisi dirinya dan mengelola perhatian agar dapat kembali pada kegiatan belajar. Pemahaman ini sejalan dengan kompetensi kesadaran diri dan pengelolaan diri dalam PSE yang sebelumnya saya pelajari.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content: "Sebelumnya saya lebih banyak melihat persoalan fokus dan kedisiplinan dari sisi pengelolaan kelas. Ketika peserta didik terdistraksi, respons yang paling mudah terpikir adalah mengurangi sumber gangguan atau mengingatkan mereka agar kembali mengerjakan tugas. Setelah mempelajari PSE, saya mulai melihat persoalan yang sama dari sisi yang berbeda. Peserta didik yang kehilangan fokus belum tentu sedang menolak pembelajaran. Mereka bisa saja kesulitan mempertahankan perhatian, merasa materi terlalu berat, atau menemukan aktivitas lain yang lebih menarik pada saat itu.\n\nTantangannya justru muncul pada cara saya merespons keadaan tersebut. Saya perlu tetap tegas agar kegiatan praktik berjalan, tetapi tidak terburu-buru memberi label kepada peserta didik sebagai malas atau tidak serius. Pengalaman pada tugas penerapan PSE juga memperlihatkan bahwa ketika kelas mulai gaduh atau peserta didik terlihat bingung, respons yang lebih tenang dan penjelasan yang disederhanakan dapat membantu suasana kembali terkendali. Dalam refleksi praktik tersebut, saya menahan diri untuk tidak langsung menegur dengan nada keras, mengambil jeda, lalu mengubah cara menjelaskan materi. Bagi saya, bagian ini membuat PSE terasa lebih dekat dengan pekerjaan guru sehari-hari, bukan hanya teori tentang emosi.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content: "Konsep utama yang paling saya pahami adalah lima kompetensi PSE, yaitu kesadaran diri, pengelolaan diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab. Kelima kompetensi tersebut saling berkaitan dalam praktik mengajar. Guru perlu terlebih dahulu mengenali emosinya sendiri sebelum merespons keadaan kelas, kemudian mencoba memahami kondisi peserta didik, berkomunikasi dengan tepat, dan menentukan tindakan yang tidak hanya menyelesaikan masalah sesaat. Pada tugas Analisis dan Sintesis PSE, prinsip ini diterjemahkan melalui pola JEDA, yaitu mengenali emosi, mengelolanya, memberikan respons, lalu melakukan refleksi.\n\nSaya juga memahami bahwa guru menjadi teladan melalui respons yang ditampilkan ketika menghadapi kesalahan. Hal ini sangat dekat dengan pembelajaran Pemrograman Web karena error, kode yang tidak berjalan, atau konfigurasi yang keliru merupakan bagian biasa dari praktik. Dalam rancangan pembelajaran berbasis PSE pada Laravel, peserta didik diarahkan untuk tidak langsung panik ketika menemui error, tetapi berhenti sejenak, membaca pesan yang muncul, mencari sumber masalah, lalu mencoba kembali. Guru pun perlu mencontohkan sikap yang sama ketika demonstrasi atau pembelajaran tidak berjalan sesuai rencana.\n\nKonsep experiential learning juga memperluas pemahaman saya. Pengalaman belajar dapat dimulai dari situasi yang benar-benar dirasakan peserta didik, kemudian direfleksikan, dihubungkan dengan konsep, dan dicoba kembali. Pada rancangan Pemrograman Web, misalnya, peserta didik terlebih dahulu mengalami kebingungan saat menggunakan form tanpa validasi dan notifikasi, lalu pengalaman tersebut digunakan untuk memahami fungsi validasi, flash message, dan Eloquent ORM.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content: "Saya ingin lebih memperhatikan pengelolaan perhatian peserta didik selama praktik. Pengumpulan HP tetap dapat digunakan apabila memang diperlukan, tetapi saya tidak ingin menjadikannya satu-satunya cara mengatasi distraksi. Kegiatan praktik akan saya pecah menjadi target yang lebih pendek agar peserta didik memiliki arah yang jelas tentang apa yang harus diselesaikan terlebih dahulu. Ketika ada peserta didik yang mulai kehilangan fokus, saya ingin mendekatinya dan mencari tahu kendalanya sebelum memberikan teguran.\n\nSaya juga ingin lebih konsisten memberi ruang bagi peserta didik untuk mengenali kondisi belajarnya sendiri. Refleksi singkat dapat digunakan setelah kegiatan tertentu, misalnya dengan meminta mereka menyebutkan bagian yang sudah dipahami, bagian yang masih membingungkan, atau apa yang dilakukan ketika mengalami error. Pada pembelajaran Pemrograman Web, pendekatan experiential learning yang sudah saya rancang juga ingin saya gunakan secara lebih nyata, terutama agar peserta didik dapat merasakan hubungan antara pengalaman sebagai pengguna, keputusan teknis saat membuat aplikasi, dan tanggung jawab mereka sebagai calon pengembang perangkat lunak.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content: "Artefak yang saya pilih adalah 1.D Analisis dan Sintesis PSE di Lingkungan Sekolah, 1.E Penerapan dan Evaluasi PSE di Lingkungan Sekolah, 2.E Rencana Pembelajaran Guru Teladan Berbasis PSE, serta 3.E Penerapan Experiential Learning dan PSE di Lingkungan Sekolah. Keempat artefak tersebut memperlihatkan perkembangan pemahaman saya mulai dari mengenali kompetensi PSE, mencoba menerapkannya saat mengajar, menghubungkannya dengan pembelajaran Laravel, sampai merancang experiential learning yang terintegrasi dengan PSE.",
          },
          {
            label: "Alasan Pemilihan",
            question: "2. Mengapa artefak tersebut yang saya pilih?",
            content: "Saya memilih 1.D karena artefak tersebut paling jelas memperlihatkan dasar pemahaman saya tentang lima kompetensi PSE dan bagaimana guru mengelola emosi melalui proses mengenali, mengelola, merespons, dan merefleksikan.\n\nArtefak 1.E saya pilih karena sudah memuat pengalaman praktik dan refleksi yang nyata. Di dalamnya terdapat catatan tentang rasa gugup, peserta didik yang mulai bingung dan gaduh, serta keputusan untuk menenangkan diri dan mengubah cara menjelaskan materi.\n\nArtefak 2.E lebih dekat dengan bidang yang saya ajarkan sekarang karena membahas penerapan PSE pada Pemrograman Web menggunakan Laravel. Di sana, masalah seperti error konfigurasi, migration, CRUD, autentikasi, dan debugging tidak hanya dipandang sebagai persoalan teknis, tetapi juga sebagai kesempatan melatih kesabaran, tanggung jawab, serta kemampuan meminta dan memberikan bantuan.\n\nSementara itu, 3.E menunjukkan arah pengembangan pembelajaran yang ingin saya lakukan melalui experiential learning. Artefak ini masih berupa rancangan pembelajaran dan belum saya gunakan sebagai bukti keberhasilan praktik.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content: "Pada 1.D, bagian yang paling mendukung refleksi saya adalah program pengelolaan emosi guru melalui pola JEDA serta penjelasan mengenai lima kompetensi PSE. Bagian tersebut membantu saya memahami bahwa guru perlu memberikan jeda sebelum merespons situasi kelas dan memisahkan perilaku peserta didik dari penilaian terhadap pribadinya.\n\nPada 1.E, bukti yang paling konkret terdapat pada catatan refleksi diri. Saya menuliskan bahwa ketika beberapa peserta didik mulai bingung dan gaduh, saya tidak langsung menegur keras. Saya mengambil napas, menghentikan penjelasan sejenak, lalu menggunakan cara yang lebih sederhana. Setelah itu peserta didik lebih mudah mengikuti pembelajaran dan suasana kelas kembali lebih cair. Bagian ini paling dekat dengan pengalaman saya sekarang ketika menghadapi beberapa peserta didik yang mudah terdistraksi saat praktik.\n\nPada 2.E, hubungan PSE dengan Pemrograman Web terlihat pada cara peserta didik diarahkan menghadapi error Laravel secara bertahap dan pada sikap guru ketika menemui kemampuan belajar yang beragam. Guru tidak langsung memberikan jawaban atau menunjukkan kekesalan, tetapi mendengarkan masalah peserta didik dan membimbing proses debugging.\n\nPada 3.E, bagian yang paling relevan adalah rancangan empat tahap experiential learning. Peserta didik mengalami sendiri form yang tidak komunikatif, merefleksikan rasa bingung sebagai pengguna, mempelajari validasi dan flash message sebagai solusi teknis, lalu menerapkannya pada proyek Laravel. PSE masuk melalui kesadaran terhadap rasa frustrasi, empati terhadap pengguna, regulasi emosi ketika debugging, dan komunikasi saat memberi umpan balik.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        content: "Mata kuliah Pembelajaran Sosial Emosional membuat saya melihat perilaku peserta didik dengan sudut pandang yang lebih luas. Peserta didik yang kehilangan fokus, kesulitan mengikuti praktik, atau mudah frustrasi tidak selalu cukup ditangani dengan aturan dan teguran. Guru perlu membaca penyebabnya, menjaga responsnya sendiri, lalu menentukan bentuk bantuan yang sesuai. Pengalaman mengajar membuat saya semakin memahami bahwa suasana belajar juga dibentuk oleh cara guru menghadapi situasi yang tidak berjalan sesuai rencana. Ke depan, saya ingin mengembangkan pembelajaran Pemrograman Web yang tetap memiliki tuntutan teknis yang jelas, tetapi memberi ruang bagi peserta didik untuk mengenali kesulitan, mengelola respons, mencoba kembali, dan belajar bertanggung jawab atas proses yang mereka jalani.",
      },
    ],
    artifacts: [
      { label: "1.D — Analisis dan Sintesis PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1I6YW_j4Ul4HabwNx7DK-jao-cets7nHf/view?usp=drive_link" },
      { label: "1.E — Penerapan dan Evaluasi PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1bqNWVTDWehCxRn4FGQPPMl5Vj6aHh-8V/view?usp=drive_link" },
      { label: "2.E — Rencana Pembelajaran Guru Teladan Berbasis PSE", href: "https://drive.google.com/file/d/15AldYGTKYewMfK5NilV7EMz1gMw1qdyA/view?usp=drive_link" },
      { label: "3.E — Penerapan Experiential Learning dan PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1jl8CuAMMH1_yjYrEyjF4r_iVDHYthTHC/view?usp=drive_link" },
    ],
  },
  {
    tabLabel: "MK 2 · Asesmen Lanjut",
    title: "Pembelajaran Mendalam dan Asesmen Lanjut",
    lk2PdfHref: null,
    sections: [
      { fourCKey: "connection", title: "Connection", content: "Belum tersedia" },
      { fourCKey: "challenge", title: "Challenge", content: "Belum tersedia" },
      { fourCKey: "concept", title: "Concept", content: "Belum tersedia" },
      { fourCKey: "change", title: "Change", content: "Belum tersedia" },
      { fourCKey: "artefak", title: "Analisis Artefak Pendukung", content: "Belum tersedia" },
      { fourCKey: "kesimpulan", title: "Kesimpulan Mata Kuliah", content: "Belum tersedia" },
    ],
    artifacts: [],
  },
  {
    tabLabel: "MK 3 · PPL Mandiri",
    title: "Praktik Pengalaman Lapangan (PPL) Mandiri",
    lk2PdfHref: null,
    sections: [
      { fourCKey: "connection", title: "Connection", content: "Belum tersedia" },
      { fourCKey: "challenge", title: "Challenge", content: "Belum tersedia" },
      { fourCKey: "concept", title: "Concept", content: "Belum tersedia" },
      { fourCKey: "change", title: "Change", content: "Belum tersedia" },
      { fourCKey: "artefak", title: "Analisis Artefak Pendukung", content: "Belum tersedia" },
      { fourCKey: "kesimpulan", title: "Kesimpulan Mata Kuliah", content: "Belum tersedia" },
    ],
    artifacts: [],
  },
  {
    tabLabel: "MK 4 · Projek Kepemimpinan",
    title: "Projek Kepemimpinan",
    lk2PdfHref: null,
    sections: [
      { fourCKey: "connection", title: "Connection", content: "Belum tersedia" },
      { fourCKey: "challenge", title: "Challenge", content: "Belum tersedia" },
      { fourCKey: "concept", title: "Concept", content: "Belum tersedia" },
      { fourCKey: "change", title: "Change", content: "Belum tersedia" },
      { fourCKey: "artefak", title: "Analisis Artefak Pendukung", content: "Belum tersedia" },
      { fourCKey: "kesimpulan", title: "Kesimpulan Mata Kuliah", content: "Belum tersedia" },
    ],
    artifacts: [],
  },
  {
    tabLabel: "MK 5 · Selektif/Elektif",
    title: "Mata Kuliah Pilihan Selektif/Elektif",
    lk2PdfHref: null,
    sections: [
      { fourCKey: "connection", title: "Connection", content: "Belum tersedia" },
      { fourCKey: "challenge", title: "Challenge", content: "Belum tersedia" },
      { fourCKey: "concept", title: "Concept", content: "Belum tersedia" },
      { fourCKey: "change", title: "Change", content: "Belum tersedia" },
      { fourCKey: "artefak", title: "Analisis Artefak Pendukung", content: "Belum tersedia" },
      { fourCKey: "kesimpulan", title: "Kesimpulan Mata Kuliah", content: "Belum tersedia" },
    ],
    artifacts: [],
  },
];

/* SEO metadata */
export const metadata: Metadata = {
  title: "Refleksi Mata Kuliah Semester II",
  description:
    "Struktur refleksi pengalaman belajar dari 5 mata kuliah Semester II menggunakan model 4C: Connection, Challenge, Concept, dan Change.",
};

/* ============================================================================
   PAGE COMPONENT (Server Component)
   ============================================================================ */
export default function RefleksiMatkulSemester2Page() {
  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            LEMBAR KERJA 2 — REFLEKSI PENGALAMAN BELAJAR SEMESTER II
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Refleksi
            <br />
            Mata Kuliah Semester II
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Struktur refleksi pengalaman belajar dari 5 mata kuliah Semester II, disusun menggunakan model 4C:
            Connection, Challenge, Concept, dan Change.
            Refleksi Pembelajaran Sosial Emosional telah tersedia. Isi refleksi mata kuliah lainnya dan dokumen resmi LK 2 belum tersedia. Nama mata kuliah
            pilihan selektif/elektif menunggu konfirmasi.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          4C MODEL EXPLAINER CARDS
          ================================================================ */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connection */}
          <div className="rounded-lg border border-sky-900/40 bg-sky-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-sky-900/30 font-mono text-xs font-bold text-sky-400">
                C
              </span>
              <h2 className="text-sm font-bold text-sky-300">Connection</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Menghubungkan pengalaman belajar dengan peran sebagai calon guru
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-lg border border-amber-900/40 bg-amber-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-amber-900/30 font-mono text-xs font-bold text-amber-400">
                C
              </span>
              <h2 className="text-sm font-bold text-amber-300">Challenge</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Mengidentifikasi tantangan yang menonjol selama perkuliahan
            </p>
          </div>

          {/* Concept */}
          <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-900/30 font-mono text-xs font-bold text-emerald-400">
                C
              </span>
              <h2 className="text-sm font-bold text-emerald-300">Concept</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Memahami konsep dan teori utama yang dipelajari
            </p>
          </div>

          {/* Change */}
          <div className="rounded-lg border border-violet-900/40 bg-violet-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-violet-900/30 font-mono text-xs font-bold text-violet-400">
                C
              </span>
              <h2 className="text-sm font-bold text-violet-300">Change</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Merencanakan perubahan nyata untuk pembelajaran ke depan
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          INTERACTIVE CLIENT SECTIONS (Course Tabs)
          ================================================================ */}
      <RefleksiMatkulClient courses={courses} />
    </>
  );
}
