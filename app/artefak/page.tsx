import type { Metadata } from "next";
import { ArtifactCard } from "@/components/sections/ArtifactCard";
import { CpmkBanner } from "@/components/sections/CpmkBanner";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "Artefak & Analisis",
  description:
    "Analisis mendalam terhadap modul ajar dan implementasi pembelajaran dari 3 siklus PPL Terbimbing — mencakup landasan teori pedagogis, kendala nyata di kelas, faktor keberhasilan, dan rencana penyesuaian untuk konteks yang berbeda.",
};

/* ============================================================================
   ARTIFACT DATA — 3 Teaching Cycles (Siklus)
   ============================================================================ */
const artifacts = [
  /* ----------------------------------------------------------------
     SIKLUS 1 — OS Server & Web Server Dasar
     ---------------------------------------------------------------- */
  {
    cycle: "Siklus 1 · Minggu 5–8",
    title: "OS Server & Web Server Dasar",
    techTags: ["Ubuntu Server", "SSH", "Apache2"],
    pedagogyTags: ["PjBL", "Vygotsky ZPD"],
    context:
      "Siklus 1 berfokus pada membangun fondasi teknis murid kelas XI RPL yang belum pernah berinteraksi langsung dengan Server OS berbasis CLI. Tujuan pembelajaran mencakup: instalasi Ubuntu Server di VirtualBox, konfigurasi jaringan (ifupdown/netplan), remote access via SSH menggunakan Putty, dan deployment halaman web statis dengan Apache2.",
    theoryIntro:
      "Tiga teori utama yang diadopsi dalam desain RPP Siklus 1:",
    theories: [
      {
        name: "Zone of Proximal Development — Vygotsky (1978)",
        description:
          "Diterapkan melalui scaffolding bertahap: cheat-sheet perintah CLI dibagikan sebagai panduan awal, kemudian secara bertahap dikurangi agar murid membangun kemandirian. Murid yang lebih cepat berperan sebagai tutor sebaya (peer learning) untuk mendukung rekan di zona perkembangan mereka.",
      },
      {
        name: "Siklus 5E — Abell & Volkmann (2006)",
        description:
          "Setiap pertemuan dirancang mengikuti alur Engagement → Exploration → Explanation → Elaboration → Evaluation. Contoh penerapan: pada fase Engagement, guru mendemonstrasikan VirtualBox secara interaktif untuk membangun rasa ingin tahu sebelum murid mencoba sendiri.",
      },
      {
        name: "Diferensiasi Pembelajaran — Tomlinson (2000)",
        description:
          "Diterapkan saat ditemukan ~20% murid sudah familiar dengan Linux dan ~30% belum pernah menggunakan VirtualBox. Konten scaffolding dibedakan: murid advanced diberikan tantangan konfigurasi tambahan, murid yang tertinggal mendapat panduan lebih rinci.",
      },
    ],
    strengths: [
      "Demonstrasi VirtualBox interaktif di awal pertemuan berhasil membangun antusiasme tinggi sejak menit pertama — murid langsung terlibat (engagement).",
      "Strategi peer learning berjalan organik: murid yang selesai lebih cepat dengan sukarela membantu rekan tanpa diminta guru.",
      "Mini-presentasi web statis di akhir Siklus 1 (Pertemuan 4) menciptakan sense of achievement yang nyata — seluruh murid berhasil menampilkan halaman web dari browser host mereka sendiri.",
      "Momen \"aha!\" saat remote access via Putty berhasil pertama kali menjadi titik balik motivasi belajar yang signifikan.",
    ],
    weaknesses: [
      "30% murid (9 dari 30) mengalami error \"Network Unreachable\" saat konfigurasi IP Address. Akar masalah: perbedaan versi Ubuntu yang terinstal — Ubuntu 20.04 menggunakan ifupdown, Ubuntu 22.04 menggunakan netplan. Modul ajar hanya menyediakan satu metode konfigurasi sehingga tidak mengakomodasi variasi ini.",
      "Manajemen waktu Pertemuan 2 tidak optimal: 15 menit terakhir habis untuk troubleshooting massal sehingga sesi refleksi individu tidak bisa dilaksanakan penuh.",
      "Rubrik penilaian formatif belum terstruktur — observasi praktik masih bersifat kesan umum, bukan berbasis indikator terukur.",
    ],
    adjustments: [
      "Jika diajarkan di kelas dengan variasi versi OS yang lebih tinggi: Cheat-sheet akan disiapkan dalam 2 versi (ifupdown & netplan) sejak awal, dilengkapi langkah deteksi versi: cat /etc/os-release",
      "Untuk kelas tanpa akses internet stabil: seluruh aset ISO Ubuntu dan package installer disiapkan di server lokal atau flashdisk guru sebagai offline repository.",
      "Untuk kelas dengan kemampuan dasar lebih rendah: fase Exploration diperpanjang dengan video tutorial pendek sebelum praktik langsung.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 1–2", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "LK 4 Refleksi Siklus 1", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
    ],
  },

  /* ----------------------------------------------------------------
     SIKLUS 2 — Full Stack Environment & DNS Server Lokal
     ---------------------------------------------------------------- */
  {
    cycle: "Siklus 2 · Minggu 9–12",
    title: "Full Stack Environment & DNS Server Lokal",
    techTags: ["Nginx", "Laravel", "PHP-FPM", "BIND9"],
    pedagogyTags: ["PjBL", "Cognitive Load Theory"],
    context:
      "Siklus 2 membangun di atas fondasi Siklus 1 dengan kompleksitas yang meningkat signifikan. Murid belajar menyiapkan environment aplikasi web profesional: instalasi PHP + MySQL + Composer + Laravel, migrasi dari Apache2 ke Nginx + PHP-FPM dengan Server Block, dan konfigurasi DNS Server lokal menggunakan BIND9 (Forward & Reverse Zone) agar web Laravel dapat diakses melalui nama domain lokal, bukan hanya IP address.",
    theories: [
      {
        name: "Cognitive Load Theory — Sweller (1988)",
        description:
          "Materi Bab 3 (PHP + MySQL + Composer + Laravel) yang sangat padat dikelola dengan membagi kompleksitas ke dalam unit-unit kecil dengan checkpoint terverifikasi di akhir setiap pertemuan. Strategi \"triase error\" diterapkan saat 3 jenis error muncul bersamaan (permission, APP_KEY, MySQL .env) — murid mengidentifikasi kategori error mereka sendiri sebelum guru mendatangi satu per satu, mengurangi cognitive overload guru dan murid.",
      },
      {
        name: "Transfer Belajar — Perkins & Salomon (1992)",
        description:
          "Murid dilatih membangun kebiasaan verifikasi konteks sebelum menulis konfigurasi: ls /run/php/ untuk socket path, php -v untuk versi. Ini melatih kemampuan transfer yang dibutuhkan seorang System Administrator di lingkungan server yang bervariasi.",
      },
      {
        name: "Mediated Learning Experience — Feuerstein",
        description:
          "Murid advanced dijadikan \"error consultant\" per kategori error — mereka tidak hanya membantu rekan, tetapi mendapatkan pemahaman lebih dalam melalui proses mengajarkan. Ini meningkatkan kualitas belajar di kedua sisi.",
      },
    ],
    strengths: [
      "Strategi \"triase error\" yang lahir secara spontan di Pertemuan 6 terbukti sangat efektif: guru tidak kewalahan meski 3 jenis error muncul bersamaan.",
      "Murid advanced yang dijadikan \"error consultant\" tumbuh kepercayaan dirinya dan mendapatkan pengalaman belajar yang lebih dalam.",
      "Checkpoint \"named-checkzone\" pada konfigurasi BIND9 berhasil mencegah murid menghabiskan waktu lama debugging error zona DNS yang sulit didiagnosa.",
      "Asesmen sumatif Siklus 2 (demo domain lokal di browser host) menciptakan momen \"wow\" — murid sangat bangga mengakses web Laravel dengan nama domain buatan mereka sendiri.",
    ],
    weaknesses: [
      "~40% murid terdampak perbedaan nama paket PHP antar versi Ubuntu (php7.4 vs php8.1) saat instalasi extension. Cheat-sheet dari Siklus 1 belum mencakup perbedaan nama paket software.",
      "Bab 3 terlalu padat untuk 1 pertemuan (4 x 45 menit): 3 error kritis muncul bersamaan (storage permission denied, APP_KEY blank, MySQL password mismatch di .env). Beban kognitif pertemuan ini melebihi kapasitas optimal.",
      "Kesalahan penulisan path PHP-FPM socket (php7.4 vs php8.1) pada konfigurasi Nginx terjadi karena murid tidak memverifikasi versi sebelum menulis path.",
      "Beberapa murid lupa mengubah DNS server di adapter Windows Host sehingga nslookup mengembalikan \"Server: Unknown\" — tidak ada panduan klien yang disiapkan sebelumnya.",
    ],
    adjustments: [
      "Untuk kelas dengan variasi OS lebih tinggi: Master Cheat-sheet komprehensif yang mencakup semua perbedaan nama paket antar versi Ubuntu disiapkan sebelum Siklus dimulai (bukan reaktif).",
      "Bab 3 idealnya dipecah menjadi 2 pertemuan terpisah: Pertemuan A (PHP + MySQL + Composer) dan Pertemuan B (Laravel setup + permission + migration).",
      "Untuk kelas dengan akses internet tidak stabil: package Laravel dan Composer di-cache di repository lokal server sekolah.",
      "Panduan bergambar konfigurasi DNS klien (Windows & MacOS) disiapkan dan dibagikan sebelum sesi BIND9 dimulai.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 3–5", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "LK 4 Refleksi Siklus 2", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
    ],
  },

  /* ----------------------------------------------------------------
     SIKLUS 3 — Git Deployment & Monitoring Server — Final Project
     ---------------------------------------------------------------- */
  {
    cycle: "Siklus 3 · Minggu 13–15",
    title: "Git Deployment & Monitoring Server — Final Project",
    techTags: ["Git", "GitHub", "htop", "netstat"],
    pedagogyTags: ["PjBL", "Metacognition", "Flow Theory"],
    context:
      "Siklus 3 adalah puncak dari seluruh rangkaian pembelajaran — murid mengintegrasikan semua stack yang telah dibangun di Siklus 1 & 2 menjadi satu server production simulasi yang utuh. Cakupan materi: version control dengan Git dan push ke GitHub (via Personal Access Token), deployment update aplikasi via git pull, monitoring resource server menggunakan htop dan netstat, serta Final Project: demo server production simulasi end-to-end di hadapan Guru Pamong dan Dosen Pembimbing.",
    theories: [
      {
        name: "Metacognition — Flavell (1979)",
        description:
          "Murid diajarkan secara eksplisit untuk memantau dan merencanakan tindakan sendiri sebelum eksekusi melalui \"pre-demo checklist\" — memverifikasi kondisi server, DNS klien, dan koneksi sebelum demo dimulai. Ini melatih metacognitive awareness yang kritis bagi seorang System Administrator.",
      },
      {
        name: "Flow Theory — Csikszentmihalyi (1990)",
        description:
          "Sesi monitoring dengan htop menghasilkan kondisi flow belajar yang tinggi — murid sangat antusias mengamati proses server bergerak secara real-time. Kondisi ini dimanfaatkan dengan memperpanjang sesi eksplorasi monitoring secara fleksibel, bukan memotongnya demi efisiensi waktu.",
      },
      {
        name: "Output-based Learning — Swain (1985)",
        description:
          "Kemampuan komunikasi teknis murid diasah melalui dua tahap: peer explanation (Pertemuan 10) di mana murid menjelaskan arsitektur server kepada rekan, dilanjutkan dengan demo formal di hadapan penguji (Pertemuan 11). Latihan output berulang terbukti meningkatkan kepercayaan diri murid yang sebelumnya pasif.",
      },
    ],
    strengths: [
      "28 dari 30 murid (93%) berhasil menyelesaikan demo server production simulasi secara mandiri — melampaui target awal 80%.",
      "Diagram arsitektur server lengkap yang dipasang di papan tulis sejak Pertemuan 9 menjadi alat motivasi yang efektif — murid melihat secara visual betapa banyak yang sudah mereka kuasai.",
      "Strategi urutan presentasi sukarela (bukan alfabetis) berhasil menciptakan atmosfer positif-kompetitif yang sehat — murid percaya diri maju lebih awal dan membangun momentum untuk rekan berikutnya.",
      "Peer evaluation form berjalan lebih baik dari ekspektasi: murid memberikan feedback yang jujur dan konstruktif satu sama lain.",
    ],
    weaknesses: [
      "40% murid (12 orang) mengalami kebingungan saat setup SSH key untuk push ke GitHub — proses multi-langkah yang melibatkan perpindahan konteks (terminal → browser GitHub → kembali terminal) meningkatkan cognitive load. Diatasi dengan beralih ke metode HTTPS + Personal Access Token (PAT) yang lebih sederhana.",
      "2 murid lupa mengubah DNS server di adapter Windows Host saat demo — tidak ada pre-demo checklist yang distandarisasi. Diatasi dalam < 3 menit dengan panduan yang sudah ada.",
      "Murid Kelompok C (5 murid kemampuan rendah) berhasil demo secara teknis namun kemampuan komunikasi teknis (menjelaskan arsitektur secara lisan) masih terbatas — menunjukkan bahwa latihan komunikasi teknis perlu dimulai lebih awal, bukan hanya di siklus akhir.",
      "Sesi monitoring terasa terlalu singkat mengingat antusiasme murid yang tinggi terhadap htop — idealnya monitoring diberi alokasi 1 pertemuan penuh.",
    ],
    adjustments: [
      "Untuk kelas berikutnya: panduan SSH keygen & GitHub PAT disiapkan dalam format bergambar (screenshot step-by-step) sebelum pertemuan dimulai.",
      "Pre-demo checklist (kondisi server, DNS klien, koneksi) dibagikan dan diisi murid sendiri sebelum setiap asesmen sumatif — melatih metacognition.",
      "Latihan komunikasi teknis (\"technical talk\" 5 menit per murid) dijadwalkan sejak Siklus 1, bukan hanya di pertemuan final.",
      "Monitoring server dikembangkan sebagai topik tersendiri dengan Netdata sebagai alat visualisasi yang lebih menarik bagi generasi Z.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 6–7", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "LK 4 Refleksi Siklus 3", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://file-examples.com/storage/febe64b6b869fdd6596fb2b/2017/10/file-example_PDF_1MB.pdf" },
    ],
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function ArtefakPage() {
  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            ARTEFAK PEMBELAJARAN
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Portofolio PPL
            <br />
            Terbimbing
          </h1>

          {/* Explanatory paragraph */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Analisis mendalam terhadap modul ajar dan implementasi pembelajaran
            dari 3 siklus PPL Terbimbing — mencakup landasan teori pedagogis,
            kendala nyata di kelas, faktor keberhasilan, dan rencana penyesuaian
            untuk konteks yang berbeda.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          CPMK SUMMARY BANNER
          ================================================================ */}
      <section className="py-6">
        <CpmkBanner />
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          ARTIFACT CARDS
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          {artifacts.map((artifact, index) => (
            <ArtifactCard
              key={artifact.cycle}
              index={index}
              title={artifact.title}
              cycle={artifact.cycle}
              techTags={[...artifact.techTags]}
              pedagogyTags={[...artifact.pedagogyTags]}
              context={artifact.context}
              theoryIntro={"theoryIntro" in artifact ? artifact.theoryIntro : undefined}
              theories={[...artifact.theories.map((t) => ({ ...t }))]}
              strengths={[...artifact.strengths]}
              weaknesses={[...artifact.weaknesses]}
              adjustments={[...artifact.adjustments]}
              downloads={[...artifact.downloads.map((d) => ({ ...d }))]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
