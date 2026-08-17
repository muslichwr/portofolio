"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronDown,
  Paperclip,
  FlagTriangleRight,
  FileText,
  Download,
  ArrowRight,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/* ============================================================================
   STUDENT METADATA
   ============================================================================ */
const studentInfo = {
  name: "Muslich Wahyu Romadhon",
  nim: "2500103916524004",
  prodi: "Pengembangan Perangkat Lunak dan Gim",
} as const;

/* ============================================================================
   4C ACCENT COLOR MAP
   ============================================================================ */
const fourCColors = {
  connection: {
    badge: "bg-sky-900/30 text-sky-400",
    border: "border-sky-900/40",
    text: "text-sky-400",
  },
  challenge: {
    badge: "bg-amber-900/30 text-amber-400",
    border: "border-amber-900/40",
    text: "text-amber-400",
  },
  concept: {
    badge: "bg-emerald-900/30 text-emerald-400",
    border: "border-emerald-900/40",
    text: "text-emerald-400",
  },
  change: {
    badge: "bg-violet-900/30 text-violet-400",
    border: "border-violet-900/40",
    text: "text-violet-400",
  },
} as const;

type FourCKey = keyof typeof fourCColors;

/* ============================================================================
   TYPES
   ============================================================================ */
interface ReflectionSection {
  readonly fourCKey: FourCKey | "artefak" | "kesimpulan";
  readonly title: string;
  readonly question?: string;
  readonly content: string;
}

interface CourseArtifact {
  readonly label: string;
  readonly href: string;
}

interface CourseData {
  readonly tabLabel: string;
  readonly title: string;
  readonly pertemuan: string;
  readonly sections: readonly ReflectionSection[];
  readonly artifacts: readonly CourseArtifact[];
  /** Optional link to another page (e.g. /artefak for Course 4) */
  readonly crossLink?: {
    readonly label: string;
    readonly href: string;
  };
  /** JSX comment note — not rendered, for developer context only */
  readonly devNote?: string;
}

/* ============================================================================
   PLACEHOLDER STYLING HELPER
   Wraps [CONDITION: ...] text in a visually distinct span so the student
   knows exactly where to replace content before final submission.
   ============================================================================ */
function renderContent(text: string): React.ReactNode {
  const paragraphs = text.split("\n\n");
  return paragraphs.map((para, pIdx) => {
    const parts = para.split(/(\[CONDITION:[^\]]*\])/g);
    return (
      <p key={pIdx} className="leading-relaxed">
        {parts.map((part, index) => {
          if (part.startsWith("[CONDITION:")) {
            return (
              <span
                key={index}
                className="rounded bg-amber-950/40 px-1 py-0.5 font-mono text-xs italic text-amber-400/90 border border-amber-900/30"
              >
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </p>
    );
  });
}

/* ============================================================================
   RUBRIC CHECKLIST DATA
   ============================================================================ */
const rubricItems = [
  "Kelengkapan refleksi 4 komponen (Connection, Challenge, Concept, Change) — 50 poin",
  "Ketajaman analisis artefak pembelajaran — 50 poin",
] as const;

/* ============================================================================
   COURSE DATA — 6 Courses (Mata Kuliah) with 6-section structure:
   1. Connection
   2. Challenge
   3. Concept
   4. Change
   5. Analisis Artefak Pendukung
   6. Kesimpulan Mata Kuliah
   ============================================================================ */
const courses: readonly CourseData[] = [
  /* ----------------------------------------------------------------
     MK 1 — Filosofi Pendidikan dan Pendidikan Nilai
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 1 · Filosofi Pendidikan",
    title: "Filosofi Pendidikan dan Pendidikan Nilai",
    pertemuan: "Pertemuan II",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Materi ini berkaitan langsung dengan peran saya sebagai guru SMK. Konsep menuntun, kodrat alam, dan kodrat zaman mengingatkan saya bahwa guru tidak hanya menyampaikan materi, tetapi juga perlu memahami kemampuan dan kondisi siswa. Dalam pembelajaran Pemrograman Web, hal ini penting karena kemampuan, minat, dan kesiapan siswa dalam praktik berbeda-beda.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan utamanya adalah pembelajaran yang berpusat pada siswa tidak selalu mudah diterapkan. Tidak semua siswa RPL memiliki minat dan kemandirian belajar yang sama, sehingga guru tetap perlu menjelaskan, memberi contoh, dan mengarahkan praktik. Ketika siswa kurang terlibat, saya biasanya mengajak berbicara terlebih dahulu sebelum mengarahkannya kembali untuk praktik.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep yang paling berkesan bagi saya adalah Sistem Among, kodrat alam dan kodrat zaman, pendidikan yang berpihak pada peserta didik, serta pendidikan nilai melalui keteladanan. Saya memahami bahwa guru vokasi tidak hanya membekali kompetensi teknis, tetapi juga perlu menanamkan tanggung jawab, kerja sama, disiplin, dan etika.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Saya ingin lebih konsisten menerapkan prinsip menuntun. Siswa yang kesulitan akan saya beri arahan dan pendampingan, sedangkan yang sudah mampu diberi ruang lebih untuk mencoba dan melakukan troubleshooting secara mandiri. Saya juga ingin lebih mengutamakan komunikasi sebelum memberikan teguran kepada siswa yang kurang terlibat dalam praktik.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nArtefak yang saya pilih adalah Aktivitas 1.6 Jurnal Refleksi, Aktivitas 1.5 Analisis dan Modifikasi Modul Ajar/RPP, serta 3.E Refleksi dan Tindak Lanjut.\n\n2. Mengapa artefak tersebut yang saya pilih?\nKetiga artefak tersebut menunjukkan proses pemahaman saya mulai dari refleksi terhadap pemikiran Ki Hadjar Dewantara, penerapannya dalam rancangan pembelajaran, hingga pemahaman bahwa pendidikan vokasi juga perlu mengembangkan nilai dan karakter siswa.\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nJurnal Refleksi mendukung pemahaman tentang menuntun serta kodrat alam dan zaman. Analisis Modul Ajar menunjukkan penerapannya melalui pembelajaran kontekstual dan pendampingan sesuai kemampuan siswa. Sementara itu, Refleksi dan Tindak Lanjut memperkuat pemahaman bahwa guru vokasi juga bertanggung jawab menanamkan nilai, etika, dan kerja sama dalam pembelajaran.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Filosofi Pendidikan dan Pendidikan Nilai memperkuat pemahaman saya bahwa menjadi guru tidak hanya tentang menyampaikan materi, tetapi juga menuntun siswa sesuai kondisi dan perkembangannya. Konsep Sistem Among serta kodrat alam dan kodrat zaman terasa relevan dengan pengalaman saya mengajar praktik di SMK. Saya semakin memahami bahwa siswa memiliki kemampuan dan minat yang berbeda, sehingga guru perlu menyeimbangkan pemberian materi, pendampingan, dan kesempatan untuk belajar mandiri. Ke depan, saya ingin lebih mengutamakan komunikasi, pendampingan yang sesuai kebutuhan, serta tetap menanamkan tanggung jawab dan etika dalam pembelajaran kejuruan.",
      },
    ],
    artifacts: [
      { label: "Aktivitas 1.6 · Jurnal Refleksi", href: "#" },
      { label: "Aktivitas 1.5 · Analisis & Modifikasi Modul Ajar/RPP", href: "#" },
      { label: "3.E · Refleksi dan Tindak Lanjut", href: "#" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 2 — Pemahaman tentang Peserta Didik dan Pembelajaran
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 2 · Peserta Didik",
    title: "Pemahaman tentang Peserta Didik dan Pembelajaran",
    pertemuan: "Pertemuan III",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Materi ini menyadarkan saya bahwa guru tidak sekadar menyelesaikan tuntutan kurikulum, melainkan memfasilitasi kebutuhan peserta didik. Dalam konteks guru PPLG, tingkat kesiapan siswa saat belajar coding (seperti dasar HTML/CSS) sangat beragam. Teori perkembangan dan teori belajar berfungsi sebagai panduan bagi saya untuk memahami karakteristik kognitif, sosial-emosional, dan minat siswa, sehingga saya dapat merancang pembelajaran yang benar-benar relevan dengan kondisi kelas.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan utamanya adalah menggeser kebiasaan dari model instruksi langsung (direct instruction) yang seragam menuju pembelajaran yang berdiferensiasi. Sebelumnya, saya cenderung menyamaratakan target praktik coding untuk semua siswa. Kini saya menyadari bahwa kepasifan siswa seringkali muncul karena kecemasan (membutuhkan pendekatan Humanisme), siswa yang gaduh butuh aktivitas kinestetik, dan siswa pemula sangat membutuhkan pendampingan bertahap (scaffolding) agar tidak mudah frustrasi saat menghadapi error pada kode mereka.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep utama yang paling relevan bagi saya meliputi Teori Perkembangan, Teori Belajar (terutama Konstruktivisme, Humanisme, dan Vygotsky), Pembelajaran Sosial Emosional (CASEL), serta penciptaan iklim belajar yang aman (Mastery Climate). Sebagai muaranya, saya belajar betapa pentingnya Asesmen Diagnostik untuk memetakan tingkat kesiapan dan gaya belajar siswa sebelum merancang modul ajar yang berdiferensiasi (TaRL).",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Ke depannya, saya akan rutin melakukan profiling di awal materi untuk memetakan kesiapan siswa. Berdasarkan data tersebut, saya akan menerapkan diferensiasi; misalnya dengan memberikan template kode dasar bagi siswa pemula, serta memberikan proyek pengayaan mandiri bagi siswa yang sudah mahir. Saya juga akan membiasakan metode kerja berpasangan (seperti ThinkPair-Share) agar siswa merasa aman dan berani mencoba melakukan debugging tanpa takut disalahkan.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nArtefak yang saya pilih sebagai bukti dukung adalah LK 1.E (Refleksi Teori Perkembangan), LK 2.D dan 2.E (Sintesis & Rencana Strategi Pembelajaran Kasus Pak Anto), LK 3.E (Refleksi Teori Belajar Bu Sinta), serta LK 4A dan 4B (Asesmen Awal, Profiling 34 Siswa Kelas X RPL, dan Rekomendasi Desain Pembelajaran).\n\n2. Mengapa artefak tersebut yang saya pilih?\nRangkaian artefak ini dipilih karena mampu merekam jejak perkembangan pemahaman saya secara utuh. Dimulai dari analisis teoritis melalui studi kasus (Pak Anto dan Bu Sinta), hingga kemampuan mengaplikasikannya ke dalam praktik nyata melalui profiling kondisi kelas sesungguhnya dan perancangan Project Based Learning (PjBL) pembuatan website profil digital.\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nLK 1.E dan 3.E menjadi bukti pemahaman saya tentang pentingnya bimbingan bertahap (scaffolding) dan ruang aman psikologis. LK 2.D merinci analisis penyelesaian masalah menggunakan pendekatan sosial-emosional (PSE). Bagian paling krusial ada pada LK 4A dan 4B, di mana saya memetakan 4 kelompok kesiapan belajar siswa (dari Sangat Siap hingga Perlu Pendampingan) dan menyusun strategi diferensiasi konten, proses, serta produk pada praktik pemrograman web.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pemahaman tentang Peserta Didik dan Pembelajaran memberikan wawasan baru bagi saya bahwa perancangan pembelajaran yang efektif harus selalu berawal dari pengenalan yang mendalam terhadap kondisi pesertanya. Melalui pembelajaran ini, saya menyadari bahwa kesulitan siswa dalam merangkai baris kode sering kali bukan karena mereka tidak mampu, melainkan karena strategi mengajar yang belum mengakomodasi tahapan perkembangan dan gaya belajar mereka. Ke depan, berbekal keterampilan asesmen dan strategi diferensiasi yang telah saya susun (seperti pada LK 4), saya berkomitmen untuk menciptakan kelas Pemrograman Web yang inklusif, adaptif, dan memberikan ruang aman bagi setiap siswa untuk berlatih menjadi pemecah masalah yang tangguh.",
      },
    ],
    artifacts: [
      { label: "LK 1.E · Refleksi Teori Perkembangan", href: "#" },
      { label: "LK 2.D & 2.E · Sintesis Kasus Pak Anto", href: "#" },
      { label: "LK 3.E · Refleksi Teori Belajar Bu Sinta", href: "#" },
      { label: "LK 4A & 4B · Asesmen Awal & Profiling 34 Siswa X RPL", href: "#" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 3 — Pembelajaran Mendalam dan Asesmen Dasar
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 3 · Pembelajaran Mendalam",
    title: "Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK",
    pertemuan: "Pertemuan IV",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Mata kuliah Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK sangat relevan dengan peran saya sebagai calon guru vokasi (PPLG). Materi ini menyadarkan saya bahwa tugas utama guru SMK bukanlah sekadar mentransfer pengetahuan teknis (coding), melainkan menjembatani teori di kelas dengan realitas dunia kerja. Melalui pendekatan Deep Learning, saya belajar bagaimana merancang pengalaman belajar yang bermakna (meaningful), berkesadaran (mindful), dan menggembirakan (joyful) agar siswa tidak hanya mencapai level \"tahu\", tetapi juga \"mampu melakukan\" dan memecahkan masalah layaknya profesional di industri.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan terbesarnya adalah membongkar kebiasaan mengajar yang masih didominasi metode ceramah (teacher-centered) atau pemberian tutorial step-by-step yang kaku. Selama ini, saya menyadari bahwa asesmen di kelas produktif sering kali terjebak pada tes kognitif (pilihan ganda) atau sekadar menilai hasil akhir produk. Mata kuliah ini memaksa saya untuk bergeser merancang asesmen autentik berbasis unjuk kerja (project/work-based) yang memotret proses berpikir kritis, kemampuan troubleshooting, dan kolaborasi siswa secara holistik, bukan sekadar nilai akhir.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep utama yang paling fundamental bagi saya adalah Keselarasan Konstruktif (Constructive Alignment) melalui kerangka Understanding by Design (UbD). Saya belajar bagaimana menyelaraskan Capaian Pembelajaran (CP) dengan Asesmen yang autentik, lalu merancang Aktivitas Belajar berbasis proyek nyata. Selain itu, saya juga mempelajari pentingnya Work-Related Learning (WRL) dan integrasi Desain Universal untuk Pembelajaran (DUP/UDL) guna mengakomodasi keberagaman kesiapan belajar siswa melalui scaffolding dan tutor sebaya (peer-teaching).",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Ke depannya, saya berkomitmen penuh untuk mengeliminasi penggunaan asesmen hafalan pada mata pelajaran produktif. Saya akan membiasakan penerapan Project-Based Learning (PjBL) yang disimulasikan seperti Surat Perintah Kerja (SPK) dari klien industri, seperti praktik deployment aplikasi. Saya juga akan membudayakan \"Lingkaran Refleksi\" di akhir proyek, di mana kegagalan atau error code tidak dihakimi sebagai nilai buruk, melainkan dibedah bersama sebagai proses debugging untuk membangun growth mindset siswa.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nArtefak yang menjadi bukti pemahaman saya meliputi LK 1.C dan 1.D (Analisis Kasus Kesiapan Kerja), LK 2.E (Sintesis Keselarasan Tujuan, Aktivitas, dan Asesmen), LK 3.D (Template Perencanaan Pembelajaran UbD), serta LK 3.E dan 4.A (Refleksi dan Rencana Tindak Lanjut Perancangan Pembelajaran).\n\n2. Mengapa artefak tersebut yang saya pilih?\nRangkaian artefak tersebut saya pilih karena merepresentasikan alur berpikir saya secara kronologis. Dimulai dari mengkritisi praktik mengajar konvensional yang mematikan nalar (LK 1), menyintesis solusi melalui kerangka UbD (LK 2), hingga akhirnya saya mampu merancang sebuah modul ajar nyata berbasis unjuk kerja (Deployment Aplikasi Web Laravel menggunakan Nginx) yang sangat kontekstual dengan kompetensi PPLG (LK 3 dan 4).\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nLK 1.D menunjukkan analisis saya bahwa kompetensi lulusan SMK gagal terbentuk jika ruang praktik dihilangkan. LK 2.E memuat refleksi saya mengenai tantangan menggeser pedagogi ke heutagogi (pembelajaran mandiri). Bukti terkuat ada pada LK 3.D dan 3.E, di mana saya berhasil merancang instrumen asesmen autentik (rubrik unjuk kerja deployment) yang tidak hanya menilai produk web yang berhasil diakses (live), tetapi juga menilai ketaatan pada SOP (security file .env) dan kemampuan siswa membaca error log saat melakukan troubleshooting.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK memberikan titik balik yang tegas bagi saya bahwa kualitas lulusan vokasi sangat ditentukan oleh bagaimana guru mendesain pengalaman belajarnya. Saya menyadari bahwa kepasifan siswa, seperti pada kasus SMK Karya Nyata, sering kali berakar dari metode pengajaran yang monoton dan asesmen yang tidak relevan dengan tuntutan zaman. Berbekal pemahaman kerangka Understanding by Design (UbD), saya kini lebih mantap untuk merancang pembelajaran PPLG yang bertumpu pada proyek nyata industri (Work-Related Learning). Ke depan, saya akan terus mengasah kemampuan menyusun rubrik asesmen autentik yang mampu mengukur hard skills (coding/deployment) sekaligus soft skills (problem solving, kolaborasi) secara berimbang. Harapannya, kelas saya tidak hanya menjadi tempat berlatih merangkai baris kode, tetapi menjadi simulator dunia kerja yang mencetak generasi vokasi yang adaptif, reflektif, dan berdaya saing global.",
      },
    ],
    artifacts: [
      { label: "LK 1.C & 1.D · Analisis Kasus Kesiapan Kerja", href: "#" },
      { label: "LK 2.E · Sintesis Keselarasan Tujuan, Aktivitas & Asesmen", href: "#" },
      { label: "LK 3.D · Template Perencanaan Pembelajaran UbD", href: "#" },
      { label: "LK 3.E & 4.A · Refleksi & RTL Perancangan Pembelajaran", href: "#" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 4 — Praktik Pengalaman Lapangan (PPL) Terbimbing
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 4 · PPL Terbimbing",
    title: "Praktik Pengalaman Lapangan (PPL) Terbimbing",
    pertemuan: "Pertemuan V",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "PPL Terbimbing memberi saya pengalaman langsung untuk menghubungkan teori perkuliahan dengan kondisi nyata di kelas. Melalui observasi, asistensi, dan praktik mengajar, saya belajar menyesuaikan pembelajaran dengan karakter siswa, kondisi laboratorium, serta kebutuhan pembelajaran RPL. Pada praktik deployment aplikasi web, siswa tidak hanya belajar coding, tetapi juga memahami server dan proses deployment secara langsung.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Saya menyadari bahwa rancangan pembelajaran tidak selalu berjalan sesuai rencana. Kendala internet, perbedaan perangkat, kesalahan konfigurasi, dan kemampuan siswa menggunakan CLI membuat waktu praktik sering bertambah. Tantangannya adalah tetap menjaga alur pembelajaran sambil mendampingi siswa yang membutuhkan bantuan tanpa terlalu cepat memberikan solusi.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep yang paling penting bagi saya adalah pembelajaran kontekstual, scaffolding, refleksi, dan perbaikan pembelajaran secara bertahap. Apersepsi dengan analogi sederhana membantu siswa memahami materi teknis, sedangkan praktik langsung membuat mereka lebih aktif. Saya juga memahami bahwa tujuan akhirnya bukan hanya siswa menyelesaikan praktik, tetapi semakin mampu melakukan troubleshooting secara mandiri.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Saya ingin lebih matang dalam mengatur waktu, menyiapkan alternatif ketika muncul kendala teknis, dan memberikan bantuan secara bertahap sesuai kebutuhan siswa. Saya juga ingin mempertahankan penggunaan contoh yang dekat dengan kehidupan siswa, memberi ruang lebih besar untuk mencoba sendiri, serta lebih konsisten menggunakan rubrik agar penilaian praktik lebih objektif.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nArtefak utama yang saya gunakan adalah LK 3 Refleksi Praktik Asistensi, LK 4 Refleksi Praktik Pembelajaran Terbimbing Siklus 1–3, serta Lampiran 7 dan 8 Penilaian Guru Pamong Siklus 1–3.\n\n2. Mengapa artefak tersebut yang saya pilih?\nArtefak tersebut menunjukkan proses PPL secara bertahap, mulai dari keterlibatan dalam pembelajaran, menemukan kendala, melakukan refleksi, sampai memperbaiki praktik pada siklus berikutnya. LK 3 menunjukkan keberhasilan sekaligus kendala saat praktik deployment. Sementara itu, refleksi tiap siklus memperlihatkan perkembangan strategi pembelajaran dan kemandirian siswa.\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nPada Siklus 1, siswa masih banyak mengalami kesulitan pada CLI dan proses troubleshooting. Pada Siklus 3, siswa mulai mampu membaca log error dan memperbaiki kesalahan sendiri serta memahami alur kerja yang lebih dekat dengan dunia industri. Lampiran 7 dan 8 menjadi bukti tambahan berupa penilaian Guru Pamong terhadap perangkat dan pelaksanaan pembelajaran pada setiap siklus.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah PPL Terbimbing membuat saya memahami bahwa kemampuan mengajar berkembang melalui praktik, refleksi, dan perbaikan yang dilakukan secara bertahap. Awalnya saya lebih fokus agar materi dan praktik dapat selesai, tetapi selama beberapa siklus saya semakin memahami pentingnya menyesuaikan strategi dengan kondisi siswa dan kendala di kelas. Pengalaman ini mendorong saya untuk lebih terencana, fleksibel, dan memberi ruang kepada siswa agar semakin mandiri dalam memecahkan masalah.",
      },
    ],
    artifacts: [
      { label: "LK 3 · Refleksi Praktik Asistensi", href: "#" },
      { label: "LK 4 · Refleksi Siklus 1", href: "#" },
      { label: "LK 4 · Refleksi Siklus 2", href: "#" },
      { label: "LK 4 · Refleksi Siklus 3", href: "#" },
      { label: "Lampiran 7 & 8 · Rekap Siklus 1–3", href: "#" },
    ],
    crossLink: {
      label: "Lihat Artefak & Analisis Lengkap",
      href: "/artefak",
    },
  },

  /* ----------------------------------------------------------------
     MK 5 — Pola Pikir Bertumbuh (Growth Mindset)
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 5 · Growth Mindset",
    title: "Pola Pikir Bertumbuh (Growth Mindset)",
    pertemuan: "Pertemuan VI",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Materi growth mindset sangat berkaitan dengan pembelajaran praktik Pemrograman Web. Dalam praktik, siswa sering menemui error, belum memahami langkah tertentu, atau membutuhkan waktu lebih lama dibanding temannya. Materi ini menguatkan pemahaman saya bahwa kesalahan bukan tanda siswa tidak mampu, tetapi bagian dari proses belajar dan latihan. Hal ini sejalan dengan konsep bahwa kesalahan dapat digunakan sebagai bahan evaluasi dan perbaikan.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangannya adalah tidak semua siswa memiliki daya juang yang sama. Ada siswa yang ketika mengalami error langsung bertanya, melihat pekerjaan teman, atau cepat menyerah. Di sisi guru, terkadang juga lebih mudah melihat hasil akhir daripada proses yang dilalui siswa. Karena itu, menerapkan growth mindset membutuhkan kesabaran dalam mendampingi siswa agar mau mencoba kembali sebelum diberikan solusi.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep utama yang saya pelajari adalah perbedaan fixed mindset dan growth mindset, neuroplastisitas, the power of yet, serta pentingnya menghargai proses, usaha, strategi, dan perbaikan. Saya juga memahami bahwa kemampuan dapat berkembang melalui latihan dan pengalaman, sehingga siswa tidak seharusnya cepat diberi label berdasarkan kemampuan awalnya.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Saya ingin lebih membiasakan siswa untuk mencoba dan melakukan debugging sebelum langsung diberikan jawaban. Ketika siswa belum berhasil, saya juga ingin lebih menekankan bahwa mereka belum bisa, bukan tidak bisa. Untuk siswa yang kesulitan, praktik dapat diarahkan secara bertahap agar mereka tetap memiliki kesempatan untuk berkembang tanpa merasa tertinggal.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nSaya memilih LK 3.2 “Aku Belum Berhasil, Bukan Tidak Berhasil”, LK 3.3 “Masalahku adalah Sahabat Belajarku”, dan LK 2.2 “Belajar dari Cara Otak Belajar”.\n\n2. Mengapa artefak tersebut yang saya pilih?\nKetiga artefak tersebut paling menunjukkan pemahaman saya tentang perubahan pola pikir, cara menghadapi kesalahan, serta tindakan yang dapat dilakukan guru untuk membantu siswa tetap mau belajar dan mencoba.\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nLK 3.2 menunjukkan bahwa kegagalan dapat dipandang seperti proses debugging, yaitu mencari bagian yang salah lalu memperbaikinya. LK 3.3 membahas strategi seperti scaffolding, memberi ruang aman untuk salah, dan memecah tugas menjadi bagian yang lebih kecil. Sementara LK 2.2 menekankan pentingnya umpan balik terhadap usaha dan penggunaan kesalahan sebagai bahan perbaikan.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pola Pikir Bertumbuh membuat saya lebih memahami bahwa kemampuan siswa tidak dapat dilihat hanya dari hasil atau kecepatan mereka memahami materi. Dalam pembelajaran pemrograman, error dan kegagalan justru menjadi bagian penting dari proses belajar. Ke depan, saya ingin lebih menghargai proses, memberi kesempatan siswa mencoba kembali, serta membimbing mereka agar tidak mudah menyerah ketika menghadapi kesulitan.",
      },
    ],
    artifacts: [
      { label: "LK 3.2 · Aku Belum Berhasil, Bukan Tidak Berhasil", href: "#" },
      { label: "LK 3.3 · Masalahku adalah Sahabat Belajarku", href: "#" },
      { label: "LK 2.2 · Belajar dari Cara Otak Belajar", href: "#" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 6 — Pengembangan Kebugaran Jasmani
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 6 · Kebugaran Jasmani",
    title: "Pengembangan Kebugaran Jasmani",
    pertemuan: "Pertemuan VII",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Materi kebugaran jasmani sangat relevan dengan peran saya sebagai calon guru vokasi (PPLG). Awalnya saya menganggap kebugaran fisik kurang penting bagi profesi yang identik dengan bekerja di depan komputer. Namun, materi ini menyadarkan saya bahwa guru membutuhkan stamina ekstra untuk berdiri lama, mendampingi praktikum, dan mengelola dinamika kelas. Selain itu, saya menyadari pentingnya menjadi role model bagi peserta didik SMK TI yang rentan terhadap gaya hidup pasif (sedentari) akibat posisi duduk statis berkepanjangan di laboratorium komputer.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan utamanya adalah menggeser fokus latihan dari sekadar mencapai hipertrofi otot (gym) menjadi kebugaran kardiovaskular dan kelenturan yang seimbang. Sebelumnya, saya jarang melakukan kardio spesifik dan minim stretching. Melalui mata kuliah ini, saya belajar mengintegrasikan interval training (lari-jalan) dan peregangan statis/dinamis untuk meningkatkan mobilitas serta mengurangi ketegangan otot setelah seharian di depan layar, tanpa membuat tubuh mengalami overtraining di tengah padatnya tugas PPG.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep utama yang sangat penting bagi saya adalah prinsip Inklusi Lieberman & Block, Body Recomposition, Low-Intensity Steady State (LISS), serta teknik manajemen stres (seperti pernapasan 4-7-8 dan stretching ergonomis). Saya belajar bahwa latihan fisik dapat dimodifikasi sesuai dengan kondisi tubuh dan kesibukan. Lebih luas lagi, saya mempelajari pentingnya merancang intervensi kebugaran yang kontekstual bagi siswa, seperti penerapan Posture Break dan edukasi ergonomi postur kerja untuk menanggulangi risiko sindrom forward head posture.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Secara personal, saya akan mempertahankan rutinitas gym yang sudah berhasil menurunkan BMI saya ke tingkat ideal (22,57), sambil konsisten menyisipkan kardio ringan dan peregangan fleksibilitas. Dalam konteks sekolah, saya ingin menginisiasi program kebugaran seperti \"Gerak Aktif Pagi\" atau membiasakan Posture Break (peregangan mikro 5-7 menit) di sela-sela jam pelajaran produktif komputer. Tujuannya agar siswa tidak hanya cerdas secara teknis, tetapi juga memiliki ketahanan fisik dan postur yang baik saat memasuki dunia kerja industri 4.0.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        content:
          "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?\nArtefak yang saya gunakan adalah LK 1.D (Laporan Diagnostik Kebugaran Personal), LK 1.E (Refleksi Kesiapan Mental dan Fisik Guru), LK 2.D (Logbook Program Kardio dan Manajemen Stres), LK 2.E (Refleksi Sesi Latihan Kardio Minggu 1), serta rancangan Proposal Program Kebugaran \"Sekolah Sehat & Bugar\".\n\n2. Mengapa artefak tersebut yang saya pilih?\nArtefak tersebut saya pilih karena merekam secara utuh perjalanan perubahan kebiasaan fisik saya secara kronologis; mulai dari asesmen awal dan penurunan berat badan (TKJU), perencanaan intervensi mandiri (Logbook), refleksi efektivitas latihan (kardio 20 menit), hingga kemampuan mengaplikasikan teori kebugaran menjadi sebuah rancangan program sekolah (Sekolah Sehat & Bugar) yang masif dan terstruktur untuk siswa kejuruan.\n\n3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?\nLK 1.D membuktikan progres kebugaran personal saya dengan capaian 22 repetisi step test dan penurunan berat badan. LK 2.D dan 2.E mendokumentasikan progres kardio saya dari yang awalnya terengah-engah di menit ke-7 menjadi mampu berlari konstan 20 menit, lengkap dengan catatan manajemen stres. Sementara itu, Proposal Program menyoroti strategi spesifik seperti integrasi Posture Break di laboratorium komputer, yang membuktikan pemahaman saya terhadap kebutuhan gerak siswa vokasi.",
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pengembangan Kebugaran Jasmani memberikan titik balik paradigma bahwa kesehatan fisik adalah fondasi utama dari kesiapan kerja, baik bagi saya sebagai pendidik maupun bagi siswa SMK yang saya ajar. Keberhasilan personal saya dalam mengatur komposisi tubuh dan meningkatkan kapasitas jantung-paru menyadarkan saya bahwa kebugaran dapat dicapai oleh siapa saja, terlepas dari seberapa padat jadwal yang dimiliki, asalkan terprogram dengan baik. Ke depan, saya berkomitmen untuk mempertahankan gaya hidup aktif ini dan mengaplikasikan edukasi ergonomi kerja serta manajemen istirahat aktif (seperti Posture Break) di dalam kelas. Harapannya, saya tidak hanya mencetak programmer yang kompeten, tetapi juga meluluskan generasi vokasi yang sehat, tangguh, dan produktif secara fisik maupun mental.",
      },
    ],
    artifacts: [
      { label: "LK 1.D · Laporan Diagnostik Kebugaran Personal", href: "#" },
      { label: "LK 1.E · Refleksi Kesiapan Mental & Fisik Guru", href: "#" },
      { label: "LK 2.D · Logbook Kardio & Manajemen Stres", href: "#" },
      { label: "LK 2.E · Refleksi Sesi Latihan Kardio Minggu 1", href: "#" },
      { label: "Proposal Program · Sekolah Sehat & Bugar", href: "#" },
    ],
  },
] as const;

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

/** Collapsible rubric banner — same pattern as CpmkBanner */
function RubricBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 rounded-lg border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700/60 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <CheckCircle className="size-4 text-emerald-500/80 shrink-0" />
          <span className="text-sm font-medium text-zinc-300">
            Komponen Penilaian LK 2 yang Dipenuhi
          </span>
        </div>
        <ChevronDown
          className={cn(
            "size-4 text-zinc-500 transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2.5 border-x border-b border-zinc-800/60 rounded-b-lg bg-zinc-900/20">
              {rubricItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="size-3.5 mt-0.5 text-emerald-500/70 shrink-0" />
                  <span className="text-xs text-zinc-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Collapsible accordion section for each 4C reflection area */
function AccordionSection({
  section,
}: {
  section: ReflectionSection;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isArtefak = section.fourCKey === "artefak";
  const isKesimpulan = section.fourCKey === "kesimpulan";

  const colorConfig = isArtefak || isKesimpulan
    ? null
    : fourCColors[section.fourCKey];

  return (
    <div className="border border-zinc-800/50 rounded-lg overflow-hidden bg-zinc-950 transition-colors hover:border-zinc-700/60">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {isArtefak ? (
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <Paperclip className="size-3 text-zinc-400" />
            </div>
          ) : isKesimpulan ? (
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <FlagTriangleRight className="size-3 text-zinc-400" />
            </div>
          ) : (
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold",
                colorConfig?.badge
              )}
            >
              C
            </span>
          )}
          <h4 className="text-sm font-bold tracking-tight text-white">
            {section.title}
          </h4>
        </div>
        <ChevronDown
          className={cn(
            "size-4 text-zinc-500 transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0 space-y-3">
              <Separator className="mb-3 bg-zinc-800/40" />
              {section.question && (
                <div className="rounded-md border border-zinc-800/60 bg-zinc-900/40 p-2.5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Pertanyaan Pemantik
                  </p>
                  <p className="mt-0.5 text-xs italic text-zinc-300">
                    {section.question}
                  </p>
                </div>
              )}
              <div className="text-sm leading-relaxed text-zinc-400 space-y-3">
                {renderContent(section.content)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Download component for artifact files — matches app/penilaian/page.tsx pattern */
function ArtifactDownload({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
      <div className="flex items-center gap-3">
        <FileText className="size-4 text-zinc-400" />
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="text-xs text-zinc-500">PDF Document</p>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
      >
        <Download className="size-3" />
        Unduh
      </a>
    </div>
  );
}

/** Single course tab content */
function CourseContent({ course }: { course: CourseData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Course header with student metadata */}
      <Card className="border-zinc-800/50 bg-zinc-950">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-zinc-700 font-mono text-zinc-400"
              >
                {course.pertemuan}
              </Badge>
              <span className="h-px w-8 bg-zinc-800/50 sm:w-16" aria-hidden="true" />
            </div>

            {/* Student Info Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="border-zinc-800 bg-zinc-900/60 font-mono text-[11px] text-zinc-400"
              >
                <User className="mr-1 size-3 text-zinc-500" />
                {studentInfo.name}
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-800 bg-zinc-900/60 font-mono text-[11px] text-zinc-500"
              >
                NIM: {studentInfo.nim}
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-800 bg-zinc-900/60 text-[11px] text-zinc-500"
              >
                {studentInfo.prodi}
              </Badge>
            </div>
          </div>

          <CardTitle className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {course.title}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* 6 sections — all collapsible */}
      <div className="space-y-3">
        {course.sections.map((section) => (
          <AccordionSection
            key={section.title}
            section={section}
          />
        ))}
      </div>

      {/* Artifact download */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
            <Download className="size-3.5 text-zinc-500" />
          </div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
            Dokumen Pendukung
          </h4>
        </div>
        <div className={cn("pl-9", course.artifacts.length > 1 ? "grid grid-cols-1 gap-3 md:grid-cols-2" : "")}>
          {course.artifacts.map((art) => (
            <ArtifactDownload
              key={art.label}
              label={art.label}
              href={art.href}
            />
          ))}
        </div>
      </div>

      {/* Cross-link to /artefak (only for MK 4 — PPL) */}
      {course.crossLink && (
        <div className="pl-9 pt-2">
          <Link
            href={course.crossLink.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            {course.crossLink.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}

/* ============================================================================
   MAIN CLIENT COMPONENT
   ============================================================================ */
export function RefleksiMatkulClient() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      {/* ================================================================
          RUBRIC SUMMARY BANNER
          ================================================================ */}
      <section className="py-6">
        <RubricBanner />
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          COURSE TABS + CONTENT
          ================================================================ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <button
                key={course.tabLabel}
                onClick={() => setActiveTabIndex(index)}
                className={cn(
                  "rounded-md border px-3 py-2 text-xs font-medium transition-all duration-200",
                  activeTabIndex === index
                    ? "border-white/20 bg-white/[0.08] text-white"
                    : "border-zinc-800/60 bg-zinc-900/30 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
                )}
              >
                {course.tabLabel}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {/* NOTE: Nama mata kuliah elektif spesifik belum diketahui saat prompt
              ini ditulis. Update "Selektif/Elektif" menjadi nama mata kuliah
              yang sebenarnya diambil sebelum submit final. */}
          <CourseContent
            key={courses[activeTabIndex].tabLabel}
            course={courses[activeTabIndex]}
          />
        </div>
      </section>
    </>
  );
}
