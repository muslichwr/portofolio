"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Paperclip,
  FlagTriangleRight,
  FileText,
  FileCheck,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
interface ReflectionSubItem {
  readonly label: string;
  readonly question: string;
  readonly content: string;
}

interface ReflectionSection {
  readonly fourCKey: FourCKey | "artefak" | "kesimpulan";
  readonly title: string;
  readonly question?: string;
  readonly content?: string;
  readonly subItems?: readonly ReflectionSubItem[];
}

interface CourseArtifact {
  readonly label: string;
  readonly href: string | null;
}

interface CourseData {
  readonly tabLabel: string;
  readonly title: string;
  /** Dedicated Google Drive URL for the formal completed LK 2 PDF worksheet */
  readonly lk2PdfHref: string | null;
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
   COURSE DATA — 6 Courses (Mata Kuliah) with 6-section structure:
   1. Connection
   2. Challenge
   3. Concept
   4. Change
   5. Analisis Artefak Pendukung (3 Sub-Item Terstruktur)
   6. Kesimpulan Mata Kuliah
   ============================================================================ */
const courses: readonly CourseData[] = [
  /* ----------------------------------------------------------------
     MK 1 — Filosofi Pendidikan dan Pendidikan Nilai
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 1 · Filosofi Pendidikan",
    title: "Filosofi Pendidikan dan Pendidikan Nilai",
    lk2PdfHref: "https://drive.google.com/file/d/1Hsw_bpM9ub4zq9K24pf52p-cJSMfNHTU/view?usp=drive_link",
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
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Artefak yang saya pilih adalah Aktivitas 1.6 Jurnal Refleksi, Aktivitas 1.5 Analisis dan Modifikasi Modul Ajar/RPP, serta 3.E Refleksi dan Tindak Lanjut.",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Ketiga artefak tersebut menunjukkan proses pemahaman saya mulai dari refleksi terhadap pemikiran Ki Hadjar Dewantara, penerapannya dalam rancangan pembelajaran, hingga pemahaman bahwa pendidikan vokasi juga perlu mengembangkan nilai dan karakter siswa.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "Jurnal Refleksi mendukung pemahaman tentang menuntun serta kodrat alam dan zaman. Analisis Modul Ajar menunjukkan penerapannya melalui pembelajaran kontekstual dan pendampingan sesuai kemampuan siswa. Sementara itu, Refleksi dan Tindak Lanjut memperkuat pemahaman bahwa guru vokasi juga bertanggung jawab menanamkan nilai, etika, dan kerja sama dalam pembelajaran.",
          },
        ],
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
      { label: "Aktivitas 1.6 · Jurnal Refleksi", href: "https://drive.google.com/file/d/1SmBdLtNF9s2MDeZEpiSoxAC2dDl_NvZj/view?usp=drive_link" },
      { label: "Aktivitas 1.5 · Analisis & Modifikasi Modul Ajar/RPP", href: "https://drive.google.com/file/d/1B229s4ndWBY5l5q0ySS2X9KFSAVtKW_U/view?usp=drive_link" },
      { label: "3.E · Refleksi dan Tindak Lanjut", href: "https://drive.google.com/file/d/1zTf49OzpseefmgVbfQMAo6rnLmdvgwQ9/view?usp=drive_link" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 2 — Pemahaman tentang Peserta Didik dan Pembelajaran
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 2 · Peserta Didik",
    title: "Pemahaman tentang Peserta Didik dan Pembelajaran",
    lk2PdfHref: "https://drive.google.com/file/d/12Ik2Jp8-aqWmEsyS5kncrgUvEODTKXyi/view?usp=drive_link",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Materi ini membantu saya melihat kebutuhan peserta didik saat menyusun pembelajaran. Dalam konteks guru PPLG, tingkat kesiapan siswa saat belajar coding (seperti dasar HTML/CSS) beragam. Teori perkembangan dan teori belajar menjadi panduan untuk memahami karakteristik kognitif, sosial-emosional, dan minat siswa, lalu menyesuaikan rancangan pembelajaran dengan kondisi kelas.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan utamanya adalah menggeser kebiasaan dari model instruksi langsung (direct instruction) yang seragam menuju pembelajaran yang berdiferensiasi. Sebelumnya, saya cenderung menyamaratakan target praktik coding untuk semua siswa. Kini saya menyadari bahwa kepasifan siswa dapat muncul karena berbagai kondisi. Siswa yang cemas saat menghadapi error memerlukan dukungan yang membuat mereka merasa aman, sedangkan siswa yang kurang terlibat perlu diberi aktivitas praktik yang lebih aktif dan kesempatan berpartisipasi. Siswa pemula juga membutuhkan pendampingan bertahap (scaffolding) agar tidak mudah frustrasi saat menghadapi error pada kode mereka.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Konsep yang saya pelajari meliputi Teori Perkembangan, Teori Belajar (terutama Konstruktivisme, Humanisme, dan Vygotsky), Pembelajaran Sosial Emosional (CASEL), serta iklim belajar yang aman (Mastery Climate). Asesmen Diagnostik digunakan untuk memetakan kesiapan, pengetahuan awal, dan kebutuhan dukungan siswa sebelum merancang modul ajar yang berdiferensiasi (TaRL).",
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
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Artefak yang saya pilih sebagai bukti dukung adalah LK 1.E (Refleksi Teori Perkembangan), LK 2.D dan 2.E (Sintesis & Rencana Strategi Pembelajaran Kasus Pak Anto), LK 3.E (Refleksi Teori Belajar Bu Sinta), serta LK 4A dan 4B (Asesmen Awal, Profiling 34 Siswa Kelas X RPL, dan Rekomendasi Desain Pembelajaran).",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Saya memilih rangkaian artefak ini karena memperlihatkan proses dari analisis studi kasus (Pak Anto dan Bu Sinta), profiling kondisi kelas, hingga perancangan Project Based Learning (PjBL) pembuatan website profil digital.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "LK 1.E dan 3.E menjadi bukti pemahaman saya tentang pentingnya bimbingan bertahap (scaffolding) dan ruang aman psikologis. LK 2.D merinci analisis penyelesaian masalah menggunakan pendekatan sosial-emosional (PSE). Bagian paling krusial ada pada LK 4A dan 4B, di mana saya memetakan 4 kelompok kesiapan belajar siswa (dari Sangat Siap hingga Perlu Pendampingan) dan menyusun strategi diferensiasi konten, proses, serta produk pada praktik pemrograman web.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pemahaman tentang Peserta Didik dan Pembelajaran membantu saya mempertimbangkan kondisi siswa saat merancang pembelajaran. Kesulitan menulis kode perlu ditelaah bersama kesiapan belajar, tahapan perkembangan, dan dukungan yang diberikan, sebelum saya menyimpulkan kemampuan siswa. Ke depan, saya ingin menggunakan rancangan asesmen dan strategi diferensiasi pada LK 4 untuk menyesuaikan pendampingan di kelas Pemrograman Web, agar siswa dapat bertanya dan mencoba tanpa takut salah.",
      },
    ],
    artifacts: [
      { label: "LK 1.E · Refleksi Teori Perkembangan", href: "https://drive.google.com/file/d/1RPzjNgs41jb0iomzs3v4hxumyvASVlyP/view?usp=drive_link" },
      { label: "LK 2.D & 2.E · Sintesis Kasus Pak Anto", href: "https://drive.google.com/file/d/1B3mESDJTb-b4sj9_k4AjALrMp8Fl5lto/view?usp=drive_link" },
      { label: "LK 3.E · Refleksi Teori Belajar Bu Sinta", href: "https://drive.google.com/file/d/1nCTN6FzI78o6kZ9S6A_YyKrsV-M-EKOr/view?usp=drive_link" },
      { label: "LK 4A & 4B · Asesmen Awal & Profiling 34 Siswa X RPL", href: "https://docs.google.com/document/d/17N2DksuBFnLl3stZbOu5hVZDPTuE3mUm/edit?usp=drive_link&ouid=116097001817209864458&rtpof=true&sd=true" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 3 — Pembelajaran Mendalam dan Asesmen Dasar
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 3 · Pembelajaran Mendalam",
    title: "Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK",
    lk2PdfHref: "https://drive.google.com/file/d/1WmhOSGkJYULGcGqmqqe4N-3-Yscax_-O/view?usp=drive_link",
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content:
          "Dalam mata kuliah Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK, saya belajar menghubungkan materi coding dengan kegiatan praktik sebagai calon guru vokasi (PPLG). Melalui pendekatan Deep Learning, saya mempelajari pembelajaran yang bermakna (meaningful), berkesadaran (mindful), dan menggembirakan (joyful). Saya ingin siswa dapat menjelaskan langkah yang diambil saat menerapkan materi dan menelusuri masalah selama praktik.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content:
          "Tantangan bagi saya adalah mengurangi ketergantungan pada ceramah (teacher-centered) dan tutorial step-by-step. Saya juga perlu meninjau asesmen yang hanya menggunakan tes kognitif (pilihan ganda) atau hasil akhir produk. Dalam mata kuliah ini, saya belajar merancang asesmen autentik berbasis unjuk kerja (project/work-based) yang menilai proses pemecahan masalah, troubleshooting, dan kolaborasi selama praktik.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content:
          "Melalui Keselarasan Konstruktif (Constructive Alignment) dan kerangka Understanding by Design (UbD), saya belajar menyelaraskan Capaian Pembelajaran (CP), asesmen autentik, dan aktivitas belajar berbasis proyek. Saya juga mempelajari Work-Related Learning (WRL) serta Desain Universal untuk Pembelajaran (DUP/UDL) untuk menyesuaikan dukungan dengan kesiapan siswa melalui scaffolding dan tutor sebaya (peer-teaching).",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content:
          "Ke depan, saya ingin mengurangi asesmen yang hanya mengandalkan hafalan pada mata pelajaran produktif. Saya akan mencoba Project-Based Learning (PjBL) dengan tugas yang disimulasikan sebagai Surat Perintah Kerja (SPK) dari klien industri, seperti praktik deployment aplikasi. Saya juga ingin menggunakan \"Lingkaran Refleksi\" di akhir proyek untuk membahas error code dan langkah debugging bersama, sebagai latihan growth mindset.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Artefak yang menjadi bukti pemahaman saya meliputi LK 1.C dan 1.D (Analisis Kasus Kesiapan Kerja), LK 2.D (Sintesis Keselarasan Tujuan, Aktivitas, dan Asesmen), LK 2.E (Refleksi dan Tindak Lanjut), LK 3.D (Template Perencanaan Pembelajaran UbD), serta LK 3.E dan 4.A (Refleksi dan Rencana Tindak Lanjut Perancangan Pembelajaran).",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Rangkaian artefak ini memperlihatkan urutan pekerjaan saya: menelaah keterbatasan praktik mengajar pada LK 1, menyusun rancangan melalui kerangka UbD pada LK 2, lalu merancang modul ajar berbasis unjuk kerja Deployment Aplikasi Web Laravel menggunakan Nginx untuk kompetensi PPLG pada LK 3 dan 4.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "LK 1.D memuat analisis saya tentang keterbatasan pembelajaran SMK ketika kesempatan praktik dikurangi. LK 2.D menunjukkan penyelarasan tujuan, aktivitas, dan asesmen, sedangkan LK 2.E memuat refleksi serta rencana tindak lanjut terhadap rancangan pembelajaran (termasuk tantangan menggeser pedagogi ke heutagogi). LK 3.D dan 3.E memuat instrumen asesmen autentik berupa rubrik unjuk kerja deployment. Rubrik ini menilai akses produk web (live), ketaatan pada SOP (security file .env), dan kemampuan membaca error log saat troubleshooting.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK membantu saya meninjau hubungan antara rancangan pembelajaran dan kesempatan siswa untuk berlatih. Dalam kasus SMK Karya Nyata, saya menelaah metode pengajaran dan asesmen yang digunakan serta kaitannya dengan kepasifan siswa. Melalui kerangka Understanding by Design (UbD), saya belajar menyelaraskan tujuan, kegiatan, dan asesmen dalam proyek PPLG berbasis Work-Related Learning. Ke depan, saya ingin memperbaiki rubrik asesmen autentik agar dapat menilai hard skills (coding/deployment) serta soft skills (problem solving, kolaborasi), termasuk langkah yang diambil siswa ketika menemukan error.",
      },
    ],
    artifacts: [
      { label: "LK 1.C & 1.D · Analisis Kasus Kesiapan Kerja", href: "https://drive.google.com/file/d/1yoNYqy_64hmcpwL7fXjJFERgK0pCM560/view?usp=drive_link" },
      { label: "LK 2.D · Sintesis Keselarasan Tujuan, Aktivitas & Asesmen", href: "https://drive.google.com/file/d/15D_17y-aRNoRxJEadkzDXr4lU9R5wR-O/view?usp=drive_link" },
      { label: "LK 2.E · Refleksi dan Tindak Lanjut", href: "https://drive.google.com/file/d/1pfz6c0tlbyR_NE3AKRrbwJArH9jRwjO1/view?usp=drive_link" },
      { label: "LK 3.D · Template Perencanaan Pembelajaran UbD", href: "https://drive.google.com/file/d/1wOzupHhfRDk7J2-V1gKzNdg-mryRJVEE/view?usp=drive_link" },
      { label: "LK 3.E & 4.A · Refleksi & RTL Perancangan Pembelajaran", href: "https://drive.google.com/file/d/1Ws5T3eoPwbde5tTLw1vzIM_Bw4DJdwOX/view?usp=drive_link" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 4 — Praktik Pengalaman Lapangan (PPL) Terbimbing
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 4 · PPL Terbimbing",
    title: "Praktik Pengalaman Lapangan (PPL) Terbimbing",
    lk2PdfHref: "https://drive.google.com/file/d/1OQ4vQnECX8DbztJkCE-ka38rwSSYvL5J/view?usp=drive_link",
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
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Artefak utama yang saya gunakan adalah LK 3 Refleksi Praktik Asistensi, LK 4 Refleksi Praktik Pembelajaran Terbimbing Siklus 1–3, serta Lampiran 7 dan 8 Penilaian Guru Pamong Siklus 1–3.",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Artefak tersebut menunjukkan proses PPL secara bertahap, mulai dari keterlibatan dalam pembelajaran, menemukan kendala, melakukan refleksi, sampai memperbaiki praktik pada siklus berikutnya. LK 3 menunjukkan keberhasilan sekaligus kendala saat praktik deployment. Sementara itu, refleksi tiap siklus memperlihatkan perkembangan strategi pembelajaran dan kemandirian siswa.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "Pada Siklus 1, siswa masih banyak mengalami kesulitan pada CLI dan proses troubleshooting. Pada Siklus 3, siswa mulai mampu membaca log error dan memperbaiki kesalahan sendiri serta memahami alur kerja yang lebih dekat dengan dunia industri. Lampiran 7 dan 8 menjadi bukti tambahan berupa penilaian Guru Pamong terhadap perangkat dan pelaksanaan pembelajaran pada setiap siklus.",
          },
        ],
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
      { label: "LK 3 · Refleksi Praktik Asistensi", href: "https://drive.google.com/file/d/1wvLCND3v0a5zll5FunPq2Uhotzl0XvmR/view?usp=drive_link" },
      { label: "LK 4 · Refleksi Siklus 1", href: "https://drive.google.com/file/d/1wTQeMN3ydOJDT32gZZF10HT2QWVnoEbG/view?usp=drive_link" },
      { label: "LK 4 · Refleksi Siklus 2", href: "https://drive.google.com/file/d/1ca1GNnvo8BEZmE_YF_BdNe-6wDhxTTdl/view?usp=drive_link" },
      { label: "LK 4 · Refleksi Siklus 3", href: "https://drive.google.com/file/d/1dzUVTWgV5sEqf3zoF1HYZuSpFsZzUGFu/view?usp=drive_link" },
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
    lk2PdfHref: "https://drive.google.com/file/d/11Tsl-ziUqbDaosIcw6GPCBo1S7bkU3lq/view?usp=drive_link",
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
          "Tantangan utamanya adalah tidak semua siswa memiliki daya juang yang sama. Ada siswa yang ketika mengalami error langsung bertanya, melihat pekerjaan teman, atau cepat menyerah. Di sisi guru, terkadang juga lebih mudah melihat hasil akhir daripada proses yang dilalui siswa. Karena itu, menerapkan growth mindset membutuhkan kesabaran dalam mendampingi siswa agar mau mencoba kembali sebelum diberikan solusi.",
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
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Saya memilih LK 3.2 “Aku Belum Berhasil, Bukan Tidak Berhasil”, LK 3.3 “Masalahku adalah Sahabat Belajarku”, dan LK 2.2 “Belajar dari Cara Otak Belajar”.",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Ketiga artefak tersebut paling menunjukkan pemahaman saya tentang perubahan pola pikir, cara menghadapi kesalahan, serta tindakan yang dapat dilakukan guru untuk membantu siswa tetap mau belajar dan mencoba.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "LK 3.2 menunjukkan bahwa kegagalan dapat dipandang seperti proses debugging, yaitu mencari bagian yang salah lalu memperbaikinya. LK 3.3 membahas strategi seperti scaffolding, memberi ruang aman untuk salah, dan memecah tugas menjadi bagian yang lebih kecil. Sementara LK 2.2 menekankan pentingnya umpan balik terhadap usaha dan penggunaan kesalahan sebagai bahan perbaikan.",
          },
        ],
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
      { label: "LK 3.2 · Aku Belum Berhasil, Bukan Tidak Berhasil", href: "https://drive.google.com/file/d/1id71fXmX3L6NKwmM5xZneYDucYwFbE0p/view?usp=drive_link" },
      { label: "LK 3.3 · Masalahku adalah Sahabat Belajarku", href: "https://drive.google.com/file/d/1mlXSAWcXB6_50Xrd86zGgMXs48Qo7EYg/view?usp=drive_link" },
      { label: "LK 2.2 · Belajar dari Cara Otak Belajar", href: "https://drive.google.com/file/d/1yHS47Odw1daKwYmi3LaACJjXDIQGleS9/view?usp=drive_link" },
    ],
  },

  /* ----------------------------------------------------------------
     MK 6 — Pengembangan Kebugaran Jasmani
     ---------------------------------------------------------------- */
  {
    tabLabel: "MK 6 · Kebugaran Jasmani",
    title: "Pengembangan Kebugaran Jasmani",
    lk2PdfHref: "https://drive.google.com/file/d/1ylD6A6Tqhy5GrbDAdViv1_kr6_7y4Bc4/view?usp=drive_link",
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
          "Saya ingin mempertahankan rutinitas gym, kardio ringan, dan peregangan. Dalam catatan latihan ini, BMI saya turun menjadi 22,57. Di sekolah, saya ingin mencoba program kebugaran seperti \"Gerak Aktif Pagi\" atau Posture Break (peregangan mikro 5-7 menit) di sela-sela jam pelajaran produktif komputer. Tujuannya memberi waktu bergerak setelah duduk lama dan mengenalkan kebiasaan menjaga postur saat bekerja di depan komputer.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        question: "Analisis artefak pembelajaran sebagai bukti dukung hasil refleksi pengalaman belajar.",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content:
              "Artefak yang saya gunakan adalah LK 1.D (Laporan Diagnostik Kebugaran Personal), LK 1.E (Refleksi Kesiapan Mental dan Fisik Guru), LK 2.D (Logbook Program Kardio dan Manajemen Stres), LK 2.E (Refleksi Sesi Latihan Kardio Minggu 1), serta rancangan Proposal Program Kebugaran \"Sekolah Sehat & Bugar\".",
          },
          {
            label: "Alasan Pemilihan",
            question: "Mengapa artefak tersebut yang saya pilih?",
            content:
              "Artefak ini memuat asesmen awal dan penurunan berat badan (TKJU), perencanaan latihan mandiri (Logbook), refleksi latihan kardio 20 menit, serta rancangan program Sekolah Sehat & Bugar untuk siswa kejuruan. Rangkaian tersebut memperlihatkan catatan latihan pribadi dan rencana penerapannya di sekolah.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content:
              "LK 1.D memuat catatan kebugaran saya berupa capaian 22 repetisi step test dan penurunan berat badan. LK 2.D dan 2.E mendokumentasikan perkembangan kardio dari yang awalnya terengah-engah di menit ke-7 menjadi mampu berlari konstan 20 menit, beserta catatan manajemen stres. Proposal Program memuat rencana integrasi Posture Break di laboratorium komputer untuk memberi siswa waktu bergerak di sela praktik.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        question: "Sintesis menyeluruh hasil refleksi pengalaman belajar mata kuliah.",
        content:
          "Mata kuliah Pengembangan Kebugaran Jasmani membantu saya meninjau kebiasaan latihan dan waktu yang dihabiskan di depan komputer. Dari catatan latihan pribadi, saya belajar mengatur latihan kekuatan, kardio, dan peregangan di tengah tugas PPG. Ke depan, saya ingin mempertahankan rutinitas tersebut dan mengenalkan ergonomi kerja serta istirahat aktif seperti Posture Break di kelas. Rencana ini masih perlu disesuaikan dengan waktu pelajaran dan kondisi siswa.",
      },
    ],
    artifacts: [
      { label: "LK 1.D · Laporan Diagnostik Kebugaran Personal", href: "https://drive.google.com/file/d/1aLdsUnfzG0z5Xv49v280d1NNOYSZejrF/view?usp=drive_link" },
      { label: "LK 1.E · Refleksi Kesiapan Mental & Fisik Guru", href: "https://drive.google.com/file/d/1Q4As7GbHEWCtP9mIR-cdZRqwp-E-nvRM/view?usp=drive_link" },
      { label: "LK 2.D · Logbook Kardio & Manajemen Stres", href: "https://drive.google.com/file/d/1cck_Js6-L67M_x7ZMZSiW_7j2CFH7Its/view?usp=drive_link" },
      { label: "LK 2.E · Refleksi Sesi Latihan Kardio Minggu 1", href: "https://drive.google.com/file/d/1CMYh3buZ432cjt-EF0L_RGJNF-BVUpkF/view?usp=drive_link" },
      { label: "Proposal Program · Sekolah Sehat & Bugar", href: "https://drive.google.com/file/d/1e5rF31sHq19Y9pGv88m4fH0gQ79zTfG5/view?usp=drive_link" },
    ],
  },
];

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

/** Collapsible accordion section for each 4C reflection area & artifact analysis */
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
              {section.subItems && section.subItems.length > 0 ? (
                <div className="space-y-3 pt-1">
                  {section.subItems.map((item, idx) => (
                    <div
                      key={item.label || idx}
                      className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-3.5 space-y-2"
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          {item.label}
                        </span>
                        <p className="text-xs italic text-zinc-400">
                          {item.question}
                        </p>
                      </div>
                      <div className="text-sm leading-relaxed text-zinc-300">
                        {renderContent(item.content)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : section.content ? (
                <div className="text-sm leading-relaxed text-zinc-400 space-y-3">
                  {renderContent(section.content)}
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FormalLk2CardProps {
  readonly courseTitle: string;
  readonly href: string | null;
}

/** Formal completed LK 2 worksheet slot (distinct from supporting learning artifacts) */
function FormalLk2Card({ courseTitle, href }: FormalLk2CardProps) {
  const isAvailable = Boolean(href && href.trim() !== "");

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
          <FileCheck className="size-4 text-zinc-400" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              LK 2 · Dokumen Resmi
            </span>
          </div>
          <p className="text-sm font-semibold text-white">
            Refleksi Pengalaman Belajar — {courseTitle}
          </p>
          <p className="text-xs text-zinc-400">
            Lembar kerja refleksi formal untuk mata kuliah ini.
          </p>
        </div>
      </div>

      {isAvailable ? (
        <a
          href={href!}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800"
        >
          <span>Buka Dokumen LK 2</span>
          <ExternalLink className="size-3.5 text-zinc-400" />
        </a>
      ) : (
        <span className="flex shrink-0 items-center self-start rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-500 sm:self-center">
          Tautan belum tersedia
        </span>
      )}
    </div>
  );
}

/** Evidence component for supporting learning artifact files */
function ArtifactEvidenceItem({
  label,
  href,
}: {
  label: string;
  href: string | null;
}) {
  const isAvailable = Boolean(href && href.trim() !== "");

  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
      <div className="flex items-center gap-3">
        <FileText className="size-4 shrink-0 text-zinc-400" />
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="text-xs text-zinc-500">Artefak Pembelajaran</p>
        </div>
      </div>
      {isAvailable ? (
        <a
          href={href!}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          <span>Lihat Artefak</span>
          <ExternalLink className="size-3" />
        </a>
      ) : (
        <span className="flex shrink-0 items-center rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-[11px] text-zinc-500">
          Tautan belum tersedia
        </span>
      )}
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
      {/* Course header */}
      <Card className="border-zinc-800/50 bg-zinc-950">
        <CardHeader>
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

      {/* Evidence Section: Formal LK 2 + Supporting Artifacts */}
      <div className="space-y-6">
        {/* 1. Formal LK 2 Document */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <FileCheck className="size-3.5 text-zinc-500" />
            </div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
              Dokumen Resmi LK 2
            </h4>
          </div>
          <div className="pl-9">
            <FormalLk2Card
              courseTitle={course.title}
              href={course.lk2PdfHref}
            />
          </div>
        </div>

        {/* 2. Supporting Learning Artifacts */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <FileText className="size-3.5 text-zinc-500" />
            </div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-zinc-500">
              Artefak Pembelajaran Pendukung
            </h4>
          </div>
          <div
            className={cn(
              "pl-9",
              course.artifacts.length > 1
                ? "grid grid-cols-1 gap-3 md:grid-cols-2"
                : ""
            )}
          >
            {course.artifacts.map((art) => (
              <ArtifactEvidenceItem
                key={art.label}
                label={art.label}
                href={art.href}
              />
            ))}
          </div>
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
        <CourseContent
          key={courses[activeTabIndex].tabLabel}
          course={courses[activeTabIndex]}
        />
      </div>
    </section>
  );
}
