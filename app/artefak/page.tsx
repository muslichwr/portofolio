import { ArtifactCard } from "@/components/sections/ArtifactCard";

export const metadata = {
  title: "Analisis Artefak | Portofolio PPL",
  description: "Membedah modul ajar dan implementasi praktik dari 3 siklus Praktik Pengalaman Lapangan (PPL).",
};

export default function ArtefakPage() {
  const artifacts = [
    {
      title: "Implementasi Jaringan Dasar & DHCP Server",
      cycle: "Siklus 1",
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
      title: "Web Server Deployment (Nginx & Laravel)",
      cycle: "Siklus 2",
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
      title: "Evaluasi Komprehensif & Penilaian Kinerja",
      cycle: "Siklus 3",
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
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-32 px-6 md:px-12 lg:px-24">
      <header className="w-full max-w-4xl mx-auto mb-24 text-left">
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl mb-8 text-zinc-100">
          Analisis Artefak Pembelajaran
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">
          Halaman ini membedah modul ajar dan implementasi praktik dari 3 siklus Praktik Pengalaman Lapangan (PPL). 
          Fokus pada analisis mendalam terkait konteks materi, landasan pedagogi, evaluasi keberhasilan, serta refleksi perbaikan.
        </p>
      </header>

      <section className="w-full space-y-24">
        {artifacts.map((artifact, index) => (
          <ArtifactCard
            key={artifact.cycle}
            {...artifact}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
