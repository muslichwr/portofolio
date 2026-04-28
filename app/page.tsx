import Link from "next/link";
import { Navigation, ArrowRight, Code2, GraduationCap, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-950/80 to-black text-white selection:bg-white selection:text-black -mt-14 flex flex-col items-center w-full pb-24">

      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 pt-14">

        {/* Profile Module (Top Stack) */}
        <div className="flex flex-col items-center mb-8 z-10">
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-zinc-700/50 ring-offset-4 ring-offset-black">
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            {/* <Image src="/avatar.jpg" alt="Muslich" fill className="object-cover" /> */}
          </div>
          <div className="text-center">
            <h2 className="text-white font-bold text-lg">Muslich.</h2>
            <p className="text-zinc-400 text-xs mt-1">🇮🇩 Based in Indonesia</p>
          </div>
        </div>

        {/* Massive Typography (Center Stack) */}
        <div className="relative z-10 text-center mb-12">
          <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.85] drop-shadow-2xl">
            VOCATIONAL<br />
            EDUCATOR
          </h1>
        </div>

        {/* Side-Action Button */}
        <div className="z-10 mb-12">
          <Link href="#filosofi" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-colors">
            <Navigation className="w-4 h-4" />
            Kenali Filosofi Saya.
          </Link>
        </div>

        {/* Social Icons (Bottom Stack) */}
        <div className="flex items-center gap-4 z-10">
          <a href="https://linkedin.com/in/muslichwr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-zinc-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://github.com/muslichwr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-zinc-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          <a href="https://instagram.com/muslichwr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-zinc-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
        </div>
      </section>

      {/* Descriptive Narrative (Below the Fold) */}
      <section id="filosofi" className="max-w-3xl mx-auto py-32 px-6 text-center">
        <div className="space-y-8 text-lg text-zinc-400 leading-relaxed">
          <p>
            Tumbuh dan berkembang di kawasan persimpangan industri budaya Kediri dan Surabaya, pendekatan saya terhadap pendidikan vokasi sangat dipengaruhi oleh dinamika kota-kota tersebut. Saya percaya bahwa etos kerja yang kuat, resiliensi, dan adaptabilitas adalah inti dari keunggulan kompetitif.
          </p>
          <p>
            Pengalaman saya sebagai Fullstack Developer Intern di Diskominfo Kediri dan pengajar penuh waktu di SMKS Tunas Bangsa Pare telah membentuk landasan filosofis saya: menjembatani kesenjangan antara industri perangkat lunak dan pendidikan vokasi. Saya berkomitmen untuk menghadirkan solusi teknologi dengan prinsip &quot;low cost, low latency, best practice&quot; ke dalam ruang kelas, mencetak lulusan SMK yang tidak hanya siap kerja, tetapi juga relevan dengan kemajuan zaman.
          </p>
        </div>

        <blockquote className="mt-16 mx-auto max-w-2xl border-l-4 border-zinc-800 pl-8 text-left">
          <p className="text-3xl md:text-5xl font-bold tracking-tighter text-white italic">
            &quot;Aku belum Berhasil, <br /> Bukan tidak Berhasil.&quot;
          </p>
        </blockquote>
      </section>

      {/* Experience Timeline */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-16">
          Perjalanan PPL & Profesional
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-transparent border-zinc-800 rounded-md hover:bg-zinc-900/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-md bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Pengajar Penuh Waktu</CardTitle>
              <CardDescription className="text-zinc-500 font-medium mt-1">SMKS Tunas Bangsa Pare</CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-400 text-sm leading-relaxed">
              Mengampu Konsentrasi Keahlian Teknik Komputer dan Jaringan (TKJ). Mengintegrasikan kurikulum industri ke dalam kelas untuk meningkatkan kesiapan kerja siswa.
            </CardContent>
          </Card>

          <Card className="bg-transparent border-zinc-800 rounded-md hover:bg-zinc-900/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-md bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800">
                <Server className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white">PPL Terbimbing (3 Siklus)</CardTitle>
              <CardDescription className="text-zinc-500 font-medium mt-1">Praktik Pengalaman Lapangan</CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-400 text-sm leading-relaxed">
              Menerapkan metode Problem Based Learning (PBL) dan diferensiasi pembelajaran pada materi esensial vokasi, seperti deployment dan konfigurasi DHCP Server.
            </CardContent>
          </Card>

          <Card className="bg-transparent border-zinc-800 rounded-md hover:bg-zinc-900/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-md bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Fullstack Developer Intern</CardTitle>
              <CardDescription className="text-zinc-500 font-medium mt-1">Diskominfo Kediri</CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-400 text-sm leading-relaxed">
              Mengembangkan arsitektur sistem informasi pemerintahan dengan performa tinggi. Pengalaman ini membentuk standar &quot;best practice&quot; yang saya bawa ke ruang kelas vokasi.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Artifact Teasers */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24 border-t border-zinc-800/50 flex flex-col items-center text-center">
        <div className="flex flex-col items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">
              Artefak Pembelajaran
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              Dokumentasi dan analisis mendalam dari implementasi pedagogi pada siklus PPL Terbimbing.
            </p>
          </div>
          <Link href="/artefak" className={buttonVariants({ variant: "outline", className: "rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-sm px-8 py-6 text-sm font-medium text-white transition-colors" })}>
            Lihat Analisis Lengkap <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-zinc-950 border-zinc-800 rounded-md overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border-zinc-800 rounded-sm">
                  [PBL]
                </Badge>
                <Badge className="bg-zinc-900 text-blue-400 hover:bg-zinc-800 border-zinc-800 rounded-sm">
                  [DHCP Server]
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                Implementasi PBL pada Konfigurasi Jaringan
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Analisis penerapan Problem Based Learning untuk meningkatkan pemahaman siswa kelas XI TKJ dalam melakukan instalasi dan konfigurasi DHCP Server.
              </p>
              <Link href="/artefak" className={buttonVariants({ variant: "outline", className: "rounded-md border-zinc-800 text-white hover:bg-zinc-900 w-full sm:w-auto inline-flex items-center justify-center h-10 px-4 py-2" })}>
                Baca Selengkapnya
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800 rounded-md overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border-zinc-800 rounded-sm">
                  [Diferensiasi]
                </Badge>
                <Badge className="bg-zinc-900 text-emerald-400 hover:bg-zinc-800 border-zinc-800 rounded-sm">
                  [Routing Dasar]
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                Pendekatan Diferensiasi di Kelas Praktikum
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Mengakomodasi berbagai tingkat keterampilan teknis siswa melalui penyesuaian instrumen dan modul ajar pada materi Routing Statis.
              </p>
              <Link href="/artefak" className={buttonVariants({ variant: "outline", className: "rounded-md border-zinc-800 text-white hover:bg-zinc-900 w-full sm:w-auto inline-flex items-center justify-center h-10 px-4 py-2" })}>
                Baca Selengkapnya
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
