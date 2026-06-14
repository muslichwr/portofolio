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
    "Analisis penyusunan dan implementasi modul ajar pada tiga siklus PPL Terbimbing, dengan menelaah keterkaitan antara rancangan pembelajaran, teori pedagogis, dinamika kelas, kendala teknis, hasil praktik, serta rencana tindak lanjut dalam konteks pembelajaran kejuruan.",
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
      "Siklus 1 diarahkan untuk membangun pemahaman awal peserta didik terhadap pengelolaan sistem operasi server dan layanan web dasar. Materi pembelajaran mencakup instalasi Ubuntu Server pada VirtualBox, konfigurasi jaringan melalui ifupdown atau netplan, akses jarak jauh menggunakan SSH dengan Putty, serta publikasi halaman web statis menggunakan Apache2. Cakupan tersebut dipilih untuk mengenalkan keterkaitan antara konsep server, konfigurasi jaringan, dan penerapan layanan web dalam konteks pembelajaran kejuruan.",
    theoryIntro:
      "Rancangan pembelajaran pada Siklus 1 didukung oleh tiga landasan pedagogis utama:",
    theories: [
      {
        name: "Zone of Proximal Development — Vygotsky (1978)",
        description:
          "Prinsip ZPD diterapkan melalui scaffolding bertahap. Peserta didik memperoleh panduan awal berupa cheat-sheet perintah CLI, kemudian dukungan tersebut dikurangi secara perlahan agar mereka mulai membangun kemandirian. Peserta didik yang lebih cepat memahami materi diarahkan menjadi tutor sebaya sehingga proses belajar tidak hanya bergantung pada guru, tetapi juga berlangsung melalui interaksi antarpeserta didik.",
      },
      {
        name: "Siklus 5E — Abell & Volkmann (2006)",
        description:
          "Alur pembelajaran dirancang mengikuti tahapan Engagement, Exploration, Explanation, Elaboration, dan Evaluation. Pada tahap Engagement, guru mendemonstrasikan penggunaan VirtualBox dan alur kerja server secara interaktif untuk membangun rasa ingin tahu. Selanjutnya, peserta didik diberi kesempatan mengeksplorasi, menjelaskan temuan, mengembangkan hasil praktik, dan melakukan evaluasi terhadap proses yang telah dilakukan.",
      },
      {
        name: "Diferensiasi Pembelajaran — Tomlinson (2000)",
        description:
          "Diferensiasi diterapkan karena kemampuan awal peserta didik tidak seragam. Sebagian peserta didik sudah memiliki pengalaman menggunakan Linux, sedangkan sebagian lainnya belum pernah menggunakan VirtualBox. Oleh karena itu, dukungan belajar disesuaikan: peserta didik yang lebih siap diberi tantangan konfigurasi tambahan, sementara peserta didik yang masih membutuhkan bantuan memperoleh panduan langkah kerja yang lebih rinci.",
      },
    ],
    strengths: [
      "Demonstrasi VirtualBox pada awal pembelajaran mampu meningkatkan perhatian dan keterlibatan peserta didik karena mereka dapat melihat secara langsung hubungan antara materi server dan aktivitas praktik yang akan dilakukan.",
      "Strategi tutor sebaya berkembang secara positif. Peserta didik yang lebih cepat menyelesaikan tugas berperan membantu teman yang mengalami kendala, sehingga interaksi belajar menjadi lebih kolaboratif.",
      "Mini-presentasi hasil web statis pada akhir Siklus 1 memberikan pengalaman keberhasilan yang konkret karena peserta didik dapat menampilkan halaman web dari browser host masing-masing.",
      "Keberhasilan melakukan remote access melalui Putty menjadi pengalaman belajar penting karena peserta didik mulai memahami fungsi SSH sebagai bagian dari pengelolaan server secara jarak jauh.",
    ],
    weaknesses: [
      "Sebagian peserta didik mengalami kendala \"Network Unreachable\" ketika melakukan konfigurasi IP Address. Kendala ini dipengaruhi oleh perbedaan versi Ubuntu yang digunakan, yaitu Ubuntu 20.04 dengan ifupdown dan Ubuntu 22.04 dengan netplan. Modul ajar pada tahap awal belum sepenuhnya mengakomodasi variasi metode konfigurasi tersebut.",
      "Manajemen waktu pada salah satu pertemuan belum optimal karena sebagian besar waktu akhir digunakan untuk troubleshooting bersama, sehingga sesi refleksi individu belum dapat dilaksanakan secara maksimal.",
      "Rubrik penilaian formatif masih perlu diperjelas agar observasi praktik tidak hanya berbasis kesan umum, tetapi memiliki indikator yang lebih terukur dan sesuai dengan tujuan pembelajaran.",
    ],
    adjustments: [
      "Pada kelas dengan variasi versi OS yang lebih tinggi, modul ajar perlu menyediakan dua jalur panduan konfigurasi, yaitu ifupdown dan netplan, disertai langkah identifikasi versi sistem melalui perintah cat /etc/os-release.",
      "Pada kelas dengan akses internet terbatas, aset ISO Ubuntu dan package installer perlu disiapkan melalui server lokal atau media penyimpanan guru agar kegiatan praktik tetap berjalan tanpa bergantung sepenuhnya pada koneksi internet.",
      "Pada kelas dengan kemampuan dasar yang lebih rendah, fase Exploration dapat diperpanjang melalui video tutorial singkat atau demonstrasi tambahan sebelum peserta didik melaksanakan praktik secara mandiri.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 1–2", href: "https://drive.google.com/file/d/1qO5Esuec03ZuVwbiWlJUelYwp1Xvp0_1/view?usp=drive_link" },
      { label: "LK 4 Refleksi Siklus 1", href: "https://drive.google.com/file/d/1dvlBSuzJHo-zVoZxufi4lyv3Lap4LvOS/view?usp=drive_link" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://drive.google.com/file/d/1_1OW8PhuADKKc1INR4q_ixhIkWJuweul/view?usp=drive_link" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://drive.google.com/file/d/1J2ip4MbdvF_KPODPEIQFoglIKHwgmJfd/view?usp=drive_link" },
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
      "Siklus 2 mengembangkan fondasi pembelajaran pada siklus sebelumnya menuju pengelolaan lingkungan aplikasi web yang lebih kompleks. Peserta didik mempelajari instalasi PHP, MySQL, Composer, dan Laravel; migrasi layanan web dari Apache2 ke Nginx dengan PHP-FPM dan Server Block; serta konfigurasi DNS Server lokal menggunakan BIND9 melalui Forward Zone dan Reverse Zone. Rangkaian materi ini dirancang agar peserta didik memahami bagaimana aplikasi web dapat dikembangkan, dikonfigurasi, dan diakses melalui nama domain lokal dalam simulasi lingkungan kerja bidang teknologi.",
    theories: [
      {
        name: "Cognitive Load Theory — Sweller (1988)",
        description:
          "Prinsip Cognitive Load Theory digunakan untuk mengelola kompleksitas materi yang cukup tinggi, khususnya pada instalasi PHP, MySQL, Composer, dan Laravel. Materi dibagi ke dalam unit kecil dengan checkpoint pada setiap akhir tahap. Strategi triase error diterapkan ketika muncul beberapa jenis kendala sekaligus, seperti permission, APP_KEY, dan konfigurasi MySQL pada file .env, sehingga peserta didik dapat mengidentifikasi kategori masalah sebelum memperoleh pendampingan lebih lanjut.",
      },
      {
        name: "Transfer Belajar — Perkins & Salomon (1992)",
        description:
          "Peserta didik dilatih melakukan verifikasi konteks sebelum menulis konfigurasi, misalnya mengecek socket path melalui ls /run/php/ dan memastikan versi PHP melalui php -v. Kebiasaan ini penting untuk membangun kemampuan transfer belajar karena lingkungan server dapat memiliki perbedaan versi, struktur direktori, atau konfigurasi layanan.",
      },
      {
        name: "Mediated Learning Experience — Feuerstein",
        description:
          "Pendekatan mediated learning diterapkan dengan melibatkan peserta didik yang lebih siap sebagai konsultan error pada kategori tertentu. Melalui peran tersebut, peserta didik tidak hanya membantu teman, tetapi juga memperdalam pemahaman karena harus menjelaskan sumber masalah dan langkah penyelesaiannya secara sistematis.",
      },
    ],
    strengths: [
      "Strategi triase error yang diterapkan pada pertemuan praktik membantu proses pendampingan menjadi lebih terarah ketika beberapa kendala teknis muncul secara bersamaan.",
      "Pelibatan peserta didik yang lebih siap sebagai konsultan error meningkatkan kepercayaan diri mereka sekaligus memperkuat budaya belajar kolaboratif di kelas.",
      "Penggunaan checkpoint named-checkzone pada konfigurasi BIND9 membantu peserta didik memeriksa validitas zona DNS sebelum melanjutkan ke tahap pengujian, sehingga proses debugging menjadi lebih sistematis.",
      "Asesmen sumatif berupa demonstrasi akses web Laravel melalui domain lokal memberikan pengalaman autentik karena peserta didik dapat melihat hasil konfigurasi server, aplikasi, dan DNS secara terpadu.",
    ],
    weaknesses: [
      "Sebagian peserta didik mengalami kendala akibat perbedaan nama paket PHP pada versi Ubuntu yang berbeda, misalnya php7.4 dan php8.1. Hal ini menunjukkan bahwa modul ajar perlu memuat panduan variasi paket perangkat lunak, bukan hanya satu skenario instalasi.",
      "Materi instalasi PHP, MySQL, Composer, dan Laravel dalam satu pertemuan memiliki tingkat kepadatan yang tinggi. Munculnya beberapa kendala seperti storage permission denied, APP_KEY blank, dan ketidaksesuaian konfigurasi MySQL pada file .env menunjukkan bahwa beban kognitif peserta didik perlu dikelola lebih bertahap.",
      "Kesalahan penulisan path PHP-FPM socket pada konfigurasi Nginx terjadi karena sebagian peserta didik belum terbiasa memverifikasi versi layanan sebelum menulis konfigurasi.",
      "Sebagian peserta didik belum mengubah DNS server pada adapter Windows Host sehingga pengujian nslookup belum memberikan hasil yang sesuai. Kondisi ini menunjukkan perlunya panduan konfigurasi sisi klien yang lebih eksplisit.",
    ],
    adjustments: [
      "Pada kelas dengan variasi OS yang lebih tinggi, modul ajar perlu dilengkapi master cheat-sheet yang memuat perbedaan nama paket dan konfigurasi antarversi Ubuntu sejak awal pembelajaran.",
      "Materi instalasi environment aplikasi web sebaiknya dibagi menjadi dua pertemuan, yaitu tahap PHP, MySQL, dan Composer, kemudian tahap Laravel, permission, dan migration.",
      "Pada kelas dengan akses internet tidak stabil, package Laravel dan Composer perlu disiapkan melalui cache atau repository lokal agar kegiatan praktik tidak terhambat oleh koneksi jaringan.",
      "Panduan konfigurasi DNS klien untuk Windows dan MacOS perlu disediakan dalam bentuk bergambar sebelum praktik BIND9 agar peserta didik memahami hubungan antara konfigurasi server dan pengujian dari sisi klien.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 3–5", href: "https://drive.google.com/file/d/1o90oVVmVE1BXgbyxRFSe12-fC7bbGRFE/view?usp=drive_link" },
      { label: "LK 4 Refleksi Siklus 2", href: "https://drive.google.com/file/d/1f23iF2ZEoJeAgC2QzowPNsrODawy7otq/view?usp=drive_link" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://drive.google.com/file/d/1oNuhUvzMpid9cpmR8PIt4xrohct0NThD/view?usp=drive_link" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://drive.google.com/file/d/1vZuxiZHHYtyXvh5u6m_AteZuMuQTlhQs/view?usp=drive_link" },
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
      "Siklus 3 menjadi tahap integrasi dari kompetensi yang telah dibangun pada dua siklus sebelumnya. Peserta didik menggabungkan konfigurasi server, aplikasi web, domain lokal, version control, deployment, dan monitoring ke dalam simulasi server production. Cakupan materi meliputi penggunaan Git dan GitHub melalui Personal Access Token, pembaruan aplikasi menggunakan git pull, pemantauan sumber daya server dengan htop dan netstat, serta final project berupa demonstrasi server production simulasi secara end-to-end di hadapan guru pamong dan dosen pembimbing.",
    theories: [
      {
        name: "Metacognition — Flavell (1979)",
        description:
          "Prinsip metakognisi diterapkan melalui penggunaan pre-demo checklist. Peserta didik diarahkan memeriksa kondisi server, konfigurasi DNS klien, dan koneksi sebelum demonstrasi dilakukan. Kegiatan ini melatih peserta didik untuk merencanakan, memantau, dan mengevaluasi tindakannya sendiri sebelum melaksanakan tugas teknis.",
      },
      {
        name: "Flow Theory — Csikszentmihalyi (1990)",
        description:
          "Aktivitas monitoring menggunakan htop menunjukkan keterlibatan belajar yang tinggi karena peserta didik dapat mengamati proses server secara real-time. Kondisi ini dimanfaatkan untuk memperkuat eksplorasi, sehingga peserta didik tidak hanya menjalankan perintah, tetapi juga memahami hubungan antara aktivitas sistem, penggunaan sumber daya, dan stabilitas layanan.",
      },
      {
        name: "Output-based Learning — Swain (1985)",
        description:
          "Kemampuan komunikasi teknis dikembangkan melalui kegiatan peer explanation dan demo formal. Peserta didik terlebih dahulu menjelaskan arsitektur server kepada teman, kemudian mempresentasikan hasil akhir di hadapan penguji. Latihan output secara bertahap membantu peserta didik menyusun penjelasan yang lebih runtut dan meningkatkan kepercayaan diri.",
      },
    ],
    strengths: [
      "Sebagian besar peserta didik berhasil menyelesaikan demonstrasi server production simulasi secara mandiri, sehingga menunjukkan bahwa integrasi materi dari siklus sebelumnya dapat dipahami dalam bentuk proyek akhir.",
      "Diagram arsitektur server yang digunakan sejak awal pertemuan membantu peserta didik melihat hubungan antara komponen Ubuntu Server, web server, aplikasi, DNS, Git, dan monitoring secara lebih utuh.",
      "Strategi presentasi sukarela menciptakan suasana belajar yang positif karena peserta didik yang siap dapat maju lebih awal dan membangun motivasi bagi teman lainnya.",
      "Peer evaluation memberikan ruang bagi peserta didik untuk memberi umpan balik terhadap hasil kerja teman secara jujur, konstruktif, dan relevan dengan indikator proyek.",
    ],
    weaknesses: [
      "Sebagian peserta didik mengalami kebingungan ketika melakukan setup SSH key untuk push ke GitHub karena prosesnya melibatkan beberapa perpindahan konteks, yaitu terminal, browser GitHub, dan kembali ke terminal. Peralihan ke metode HTTPS dengan Personal Access Token membantu menyederhanakan proses autentikasi.",
      "Beberapa peserta didik lupa mengubah DNS server pada adapter Windows Host saat demonstrasi. Kendala ini menunjukkan bahwa pre-demo checklist perlu distandarisasi agar peserta didik melakukan verifikasi mandiri sebelum asesmen sumatif.",
      "Sebagian peserta didik telah mampu menyelesaikan proyek secara teknis, tetapi masih terbatas dalam menjelaskan arsitektur server secara lisan. Hal ini menunjukkan bahwa latihan komunikasi teknis perlu dilakukan secara lebih awal dan berkelanjutan.",
      "Alokasi waktu untuk kegiatan monitoring server masih relatif terbatas, padahal peserta didik menunjukkan minat tinggi ketika mengamati penggunaan resource server melalui htop dan netstat.",
    ],
    adjustments: [
      "Pada pelaksanaan berikutnya, panduan SSH keygen dan GitHub Personal Access Token perlu disiapkan dalam format bergambar agar peserta didik dapat mengikuti tahapan autentikasi secara lebih mandiri.",
      "Pre-demo checklist yang mencakup kondisi server, DNS klien, koneksi, dan kesiapan layanan perlu dibagikan sebelum asesmen sumatif untuk memperkuat kemampuan metakognitif peserta didik.",
      "Latihan komunikasi teknis dapat dijadwalkan sejak Siklus 1 melalui kegiatan technical talk singkat agar peserta didik terbiasa menjelaskan proses, kendala, dan hasil konfigurasi secara runtut.",
      "Materi monitoring server dapat dikembangkan sebagai topik tersendiri dengan dukungan alat visualisasi seperti Netdata agar peserta didik memperoleh pemahaman yang lebih kuat tentang performa dan stabilitas layanan.",
    ],
    downloads: [
      { label: "RPP / Modul Ajar Bab 6–7", href: "https://drive.google.com/file/d/1XZluvmimRlp6m5RiAva7OjXAciT5FjQU/view?usp=drive_link" },
      { label: "LK 4 Refleksi Siklus 3", href: "https://drive.google.com/file/d/1INyogUmrNagcepkGDABciYpKG3u2tiKS/view?usp=drive_link" },
      { label: "Lampiran 7 — Penilaian Perangkat Pembelajaran (GP)", href: "https://drive.google.com/file/d/14yuX0ecREEf5mC8sHM_IWMv-K99R4rOp/view?usp=drive_link" },
      { label: "Lampiran 8 — Penilaian Praktik Mengajar (GP)", href: "https://drive.google.com/file/d/1HD2TaEYL3mCzviWq80ls24cD554brqR4/view?usp=drive_link" },
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
            Analisis penyusunan dan implementasi modul ajar dalam tiga siklus
            PPL Terbimbing, mencakup dasar pedagogis, dinamika pembelajaran,
            kendala praktik, capaian peserta didik, dan rencana penyesuaian
            untuk konteks kelas kejuruan yang berbeda.
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
