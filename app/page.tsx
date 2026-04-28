import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap, Server } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center pb-24 bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-32 md:py-48 flex flex-col items-start">
        <Badge variant="outline" className="mb-6 rounded-md border-zinc-800 text-zinc-300 px-3 py-1 text-sm font-medium">
          S1 Pendidikan Teknologi Informasi, UNESA
        </Badge>
        <h1 className="text-6xl font-extrabold tracking-tighter md:text-8xl lg:leading-[1.1] text-white">
          Muslich.
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-bold tracking-tight text-zinc-300 uppercase">
          Fullstack Developer & Pendidik Vokasi TKJ
        </p>

        <div className="mt-8 max-w-3xl space-y-6 text-base md:text-lg text-zinc-400 leading-relaxed">
          <p>
            Tumbuh dan berkembang di kawasan persimpangan industri budaya Kediri dan Surabaya membentuk etos kerja saya: resiliensi, adaptabilitas, dan fokus pada efisiensi. Sebagai seorang pengembang dan pendidik, saya meyakini bahwa teknologi harus solutif dan inklusif.
          </p>
          <p>
            Misi utama saya adalah menjembatani kesenjangan antara industri perangkat lunak (dengan filosofi "low cost, low latency, best practice") dan pendidikan vokasi. Pengalaman di industri, seperti di Diskominfo Kediri, menjadi fondasi saya dalam mencetak lulusan SMK yang tidak hanya siap kerja, tetapi juga relevan dengan kebutuhan teknologi masa kini.
          </p>
        </div>

        <blockquote className="mt-12 border-l-4 border-zinc-800 pl-6">
          <p className="text-2xl md:text-4xl font-extrabold tracking-tighter text-white italic">
            "Aku belum Berhasil, <br className="hidden md:block" /> Bukan tidak Berhasil."
          </p>
        </blockquote>
      </section>

      {/* Experience Timeline */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-zinc-800/50">
        <h2 className="text-4xl font-extrabold tracking-tighter text-white mb-16">
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
              Mengembangkan arsitektur sistem informasi pemerintahan dengan performa tinggi. Pengalaman ini membentuk standar "best practice" yang saya bawa ke ruang kelas vokasi.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Artifact Teasers */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tighter text-white mb-4">
              Artefak Pembelajaran
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg">
              Dokumentasi dan analisis mendalam dari implementasi pedagogi pada siklus PPL Terbimbing.
            </p>
          </div>
          <Link href="/artefak" className={buttonVariants({ variant: "default", className: "rounded-md bg-white text-black hover:bg-zinc-200 font-bold px-8 h-12" })}>
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
