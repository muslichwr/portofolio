import type { Metadata } from "next";
import { ArtifactCard } from "@/components/sections/ArtifactCard";
import { Separator } from "@/components/ui/separator";

/* ============================================================================
   SEO METADATA
   ============================================================================ */
export const metadata: Metadata = {
  title: "Artefak",
  description:
    "Analisis mendalam artefak pembelajaran dari 3 siklus PPL Terbimbing — perangkat pembelajaran, teori pedagogis, refleksi, dan penyesuaian kontekstual.",
};

/* ============================================================================
   ARTIFACT DATA — 3 Teaching Cycles
   ============================================================================ */
const artifacts = [
  {
    cycle: "Siklus 1",
    title: "Implementasi Jaringan Dasar & DHCP Server",
    techTags: ["DHCP Server", "Mikrotik", "Networking"],
    pedagogyTags: ["Problem Based Learning", "Constructivism"],
    context:
      "Merancang perangkat pembelajaran untuk Administrasi Sistem Jaringan (ASJ). Fokus utama adalah transisi dari pemahaman konseptual menuju praktik nyata konfigurasi DHCP Server.",
    theory:
      "Mengadopsi Problem Based Learning (PBL) berlandaskan teori Konstruktivisme Vygotsky, di mana siswa memecahkan masalah topologi jaringan secara kolaboratif.",
    strengths:
      "Pendekatan praktis membuat keterlibatan siswa sangat tinggi. Implementasi konsep 'low cost, low latency' dalam praktik manajemen bandwidth sangat relevan dengan industri.",
    weaknesses:
      "Terdapat kendala pada variasi pemahaman awal siswa terkait subnetting dasar yang memakan waktu alokasi praktik.",
    adjustments:
      "Untuk kelas dengan kemampuan dasar yang lebih rendah, materi akan disesuaikan dengan penambahan modul visual interaktif dan peer-tutoring sebelum simulasi di perangkat nyata.",
    downloadLink: "#",
  },
  {
    cycle: "Siklus 2",
    title: "Web Server Deployment (Nginx & Laravel)",
    techTags: ["Nginx", "Laravel", "Deployment"],
    pedagogyTags: ["Project Based Learning", "Growth Mindset"],
    context:
      "Mengajarkan best practice deployment aplikasi web, mengacu pada silabus 7 bab ASJ yang dirancang untuk menjembatani gap antara software engineering dan infrastruktur jaringan.",
    theory:
      "Menerapkan Project Based Learning dengan penekanan pada 'Growth Mindset' (Aku belum Berhasil, Bukan tidak Berhasil) saat menghadapi error log server.",
    strengths:
      "Siswa berhasil mendeploy aplikasi lokal ke environment server nyata, memberikan pengalaman layaknya Junior DevOps.",
    weaknesses:
      "Kendala resource hardware lab yang terbatas menyebabkan antrean dalam proses build aplikasi Next.js/Laravel.",
    adjustments:
      "Menerapkan sistem containerization ringan atau simulasi virtual machine berbasis cloud gratis untuk meminimalisir ketergantungan hardware lokal.",
    downloadLink: "#",
  },
  {
    cycle: "Siklus 3",
    title: "Evaluasi Komprehensif & Penilaian Kinerja",
    techTags: ["Troubleshooting", "System Administration"],
    pedagogyTags: ["Differentiated Learning", "Teaching at the Right Level"],
    context:
      "Siklus akhir difokuskan pada troubleshooting jaringan dan optimasi server, menguji ketahanan dan pemahaman holistik siswa terhadap materi SMK kejuruan TKJ.",
    theory:
      "Penerapan Differentiated Learning (TaRL) di mana ujian praktik disesuaikan tingkat kesulitannya berdasarkan capaian individu di siklus sebelumnya.",
    strengths:
      "Menciptakan lingkungan evaluasi yang adil dan meminimalisir frustrasi siswa, meningkatkan persentase kelulusan kompetensi dasar.",
    weaknesses:
      "Penyusunan rubrik penilaian berlapis membutuhkan waktu persiapan administratif yang jauh lebih lama bagi guru.",
    adjustments:
      "Mengembangkan instrumen penilaian otomatis atau skrip auto-grading sederhana untuk mempercepat evaluasi praktik siswa di masa mendatang.",
    downloadLink: "#",
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
          {/* Kicker */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            Portofolio PPL Terbimbing
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Analisis Artefak
            <br />
            Pembelajaran
          </h1>

          {/* Explanatory paragraph */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Halaman ini membedah secara mendalam modul pengajaran dan
            implementasi pembelajaran praktis dari 3 siklus PPL Terbimbing.
            Setiap artefak disertai analisis konteks, landasan teori pedagogis,
            faktor keberhasilan, kendala, serta rencana penyesuaian untuk
            skenario kelas yang berbeda.
          </p>
        </div>
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
              theory={artifact.theory}
              strengths={artifact.strengths}
              weaknesses={artifact.weaknesses}
              adjustments={artifact.adjustments}
              downloadLink={artifact.downloadLink}
            />
          ))}
        </div>
      </section>
    </>
  );
}
