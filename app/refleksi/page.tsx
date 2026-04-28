import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Refleksi | Portofolio PPL",
  description: "Refleksi pelaksanaan praktik mengajar dan visi pendidik.",
};

export default function RefleksiPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 py-24 selection:bg-zinc-800 selection:text-zinc-50">
      <main className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-50 leading-tight">
            Refleksi & Visi Pendidik
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Evaluasi kritis terhadap praktik pengajaran dan peta jalan pengembangan diri sebagai pendidik vokasi profesional.
          </p>
        </section>

        <Separator className="bg-zinc-800/50" />

        {/* SECTION 1: Misi & Karakter Guru Profesional */}
        <article className="space-y-6">
          <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
            Misi & Karakter Guru Profesional
          </h2>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              Sebagai pendidik vokasi berlatar belakang Fullstack Developer, visi saya adalah menjembatani kesenjangan antara kurikulum SMK dan best-practice industri nyata. Model guru yang saya tuju adalah fasilitator yang adaptif, berorientasi pada pemecahan masalah (Problem-Solver), dan mengutamakan filosofi <strong className="font-semibold text-zinc-200">'low cost, low latency'</strong> dalam efisiensi pembelajaran.
            </p>
            <p>
              Saya menanamkan prinsip <strong className="font-semibold text-zinc-200">'Growth Mindset'</strong>—<em>Aku belum Berhasil, Bukan tidak Berhasil</em>—agar siswa tangguh menghadapi error dan bug, baik dalam kode maupun kehidupan.
            </p>
          </div>
        </article>

        <Separator className="bg-zinc-800/50" />

        {/* SECTION 2: Analisis Diri (Kekuatan & Kelemahan) */}
        <article className="space-y-8">
          <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
            Refleksi Pelaksanaan Praktik Mengajar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-200 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-500"></span>
                Kekuatan Utama
              </h3>
              <p className="text-base leading-relaxed">
                Kekuatan utama saya terletak pada penguasaan materi teknis (seperti DHCP Server, Nginx, Next.js) dan kemampuan mengintegrasikan tools industri ke dalam kelas. Pendekatan praktis membuat siswa lebih mudah memahami abstraksi jaringan dan programming.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-200 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-700"></span>
                Area Pengembangan
              </h3>
              <p className="text-base leading-relaxed">
                Kelemahan yang masih perlu diperbaiki adalah manajemen waktu saat transisi antara penyampaian teori dan sesi lab praktik, serta tantangan dalam menyederhanakan bahasa teknis tingkat lanjut agar mudah dicerna oleh siswa dengan tingkat literasi awal yang beragam.
              </p>
            </div>
          </div>
        </article>

        <Separator className="bg-zinc-800/50" />

        {/* SECTION 3: Rencana Tindak Lanjut (RTL) */}
        <article className="space-y-8">
          <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
            Rencana Tindak Lanjut (RTL) & Pengembangan Diri
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-md bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
              <div className="flex gap-4">
                <div className="font-mono text-zinc-500 font-bold">01</div>
                <p className="text-base leading-relaxed">
                  <strong className="text-zinc-200 block mb-1">Differentiated Learning (TaRL)</strong>
                  Mengikuti pelatihan spesifik terkait Differentiated Learning untuk memetakan gaya belajar siswa vokasi secara lebih akurat sebelum semester dimulai.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-md bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
              <div className="flex gap-4">
                <div className="font-mono text-zinc-500 font-bold">02</div>
                <p className="text-base leading-relaxed">
                  <strong className="text-zinc-200 block mb-1">Automated Assessment Systems</strong>
                  Mengembangkan sistem auto-grading lokal berbasis skrip untuk mempercepat evaluasi praktikum jaringan (Cisco Packet Tracer/Mikrotik), sehingga waktu guru dapat difokuskan pada pendampingan siswa yang tertinggal.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-md bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
              <div className="flex gap-4">
                <div className="font-mono text-zinc-500 font-bold">03</div>
                <p className="text-base leading-relaxed">
                  <strong className="text-zinc-200 block mb-1">Standardized Pre-Lab Modules</strong>
                  Menyusun modul interaktif berbasis web untuk menstandarkan literasi awal siswa sebelum sesi lab dimulai, meminimalisir bottleneck pemahaman dasar.
                </p>
              </div>
            </div>
          </div>
        </article>

      </main>
    </div>
  );
}
