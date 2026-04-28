import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Penilaian | Portofolio PPL",
  description: "Rekapitulasi penilaian dari Guru Pamong untuk penyusunan perangkat dan praktik mengajar.",
};

const lampiran7Data = [
  { criteria: "Perumusan Tujuan Pembelajaran", score: 95 },
  { criteria: "Pemilihan & Pengorganisasian Materi", score: 92 },
  { criteria: "Skenario Pembelajaran (Sintaks)", score: 94 },
  { criteria: "Pemilihan Sumber Belajar/Media", score: 96 },
  { criteria: "Skenario Penilaian Pembelajaran", score: 90 },
];

const lampiran8Data = [
  {
    siklus: "Siklus 1",
    score: 88,
    metrics: [
      { name: "Penguasaan Kelas", value: 85 },
      { name: "Penggunaan Media Teknologi", value: 90 },
      { name: "Evaluasi Pembelajaran", value: 88 },
    ],
  },
  {
    siklus: "Siklus 2",
    score: 92,
    metrics: [
      { name: "Penguasaan Kelas", value: 90 },
      { name: "Penggunaan Media Teknologi", value: 94 },
      { name: "Evaluasi Pembelajaran", value: 92 },
    ],
  },
  {
    siklus: "Siklus 3",
    score: 95,
    metrics: [
      { name: "Penguasaan Kelas", value: 95 },
      { name: "Penggunaan Media Teknologi", value: 96 },
      { name: "Evaluasi Pembelajaran", value: 94 },
    ],
  },
];

export default function PenilaianPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-400 py-24 selection:bg-zinc-800 selection:text-zinc-50">
      <main className="max-w-5xl mx-auto px-6 lg:px-8 space-y-24">
        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-50">
            Transparansi Evaluasi
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            Rekapitulasi penilaian dari Guru Pamong (GP) untuk penyusunan perangkat dan praktik mengajar.
          </p>
        </section>

        <Separator className="bg-zinc-800/50" />

        {/* SECTION A: Lampiran 7 */}
        <section className="space-y-12">
          <div className="space-y-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">Lampiran 7</h2>
              <p className="mt-2 text-lg">Instrumen Penilaian Penyusunan Perangkat Pembelajaran</p>
            </div>
            <Button variant="outline" className="border-zinc-800 hover:bg-zinc-900 text-zinc-300">
              Unduh Dokumen Lampiran 7 (PDF)
            </Button>
          </div>

          <Card className="bg-zinc-950 border-zinc-800/50 rounded-md">
            <CardHeader>
              <CardTitle className="text-zinc-50">Rata-rata Nilai Siklus 1 - 3</CardTitle>
              <CardDescription className="text-zinc-500">
                Berdasarkan observasi penyusunan RPP/Modul Ajar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {lampiran7Data.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-zinc-300">{item.criteria}</span>
                      <span className="text-zinc-50">{item.score}</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-900 rounded-sm overflow-hidden">
                      <div 
                        className="h-full bg-zinc-400 rounded-sm transition-all duration-1000 ease-out" 
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SECTION B: Lampiran 8 */}
        <section className="space-y-12">
          <div className="space-y-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">Lampiran 8</h2>
              <p className="mt-2 text-lg">Instrumen Penilaian Praktik Mengajar 3 Siklus</p>
            </div>
            <Button variant="outline" className="border-zinc-800 hover:bg-zinc-900 text-zinc-300">
              Unduh Dokumen Lampiran 8 (PDF)
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lampiran8Data.map((cycle, index) => (
              <Card key={index} className="bg-zinc-950 border-zinc-800/50 rounded-md flex flex-col h-full hover:border-zinc-700 transition-colors duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 rounded-sm">
                      {cycle.siklus}
                    </Badge>
                    <span className="text-3xl font-bold text-zinc-50 tracking-tighter">{cycle.score}</span>
                  </div>
                  <CardTitle className="text-zinc-50 hidden">Score {cycle.siklus}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end space-y-4">
                  <div className="space-y-4">
                    {cycle.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-zinc-400">{metric.name}</span>
                          <span className="text-zinc-200">{metric.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-900 rounded-sm overflow-hidden">
                          <div 
                            className="h-full bg-zinc-500 rounded-sm transition-all duration-1000 ease-out" 
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
