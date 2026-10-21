import type { Metadata } from "next";
import { NonTeachingPhotoCarousel } from "@/components/sections/NonTeachingPhotoCarousel";
import { nonTeachingPhotos } from "./photos";

export const metadata: Metadata = {
  title: "E-Portfolio 1 — Praktik Mengajar Mandiri",
  description:
    "Ruang dokumentasi dan analisis PPL Mandiri Semester II: perencanaan, materi, media, pelaksanaan pembelajaran, kegiatan nonmengajar, dan instrumen penilaian.",
};

const contents = [
  { id: "perencanaan-pembelajaran", title: "Perencanaan Pembelajaran" },
  { id: "materi-pembelajaran", title: "Materi Pembelajaran" },
  { id: "media-pembelajaran", title: "Media Pembelajaran" },
  { id: "pelaksanaan-pembelajaran", title: "Pelaksanaan Pembelajaran" },
  { id: "kegiatan-nonmengajar", title: "Kegiatan Nonmengajar" },
  { id: "instrumen-penilaian", title: "Instrumen Penilaian" },
] as const;

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <header className="mb-8 flex items-baseline gap-4 md:mb-10 md:gap-6">
      <span className="font-mono text-xs text-zinc-400" aria-hidden="true">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </header>
  );
}

function DocumentArea({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-y border-zinc-800 py-5 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
      <h3 className="text-base font-medium text-zinc-200">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:mt-0">
        {description}
      </p>
    </div>
  );
}

export default function EPortfolio1Page() {
  return (
    <article className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMESTER II / E-PORTFOLIO 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl md:text-7xl">
            Praktik Mengajar Mandiri
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Dokumentasi dan analisis Praktik Pengalaman Lapangan Mandiri,
            dari perencanaan pembelajaran hingga refleksi atas peran sebagai guru.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Halaman ini menyiapkan ruang untuk artefak dan narasi akademik.
            Dokumen, foto, video, dan analisis akan ditambahkan kemudian.
          </p>
        </header>

        <nav aria-labelledby="daftar-isi" className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">
            Daftar Isi
          </h2>
          <ol>
            {contents.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-baseline gap-4 rounded-sm py-2.5 text-sm text-zinc-300 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                >
                  <span className="font-mono text-xs text-zinc-400" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="perencanaan-pembelajaran" aria-label="Perencanaan Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="01" title="Perencanaan Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <DocumentArea title="Modul Ajar" description="Dokumen modul ajar akan ditambahkan di sini." />
            <div className="max-w-2xl">
              <h3 className="text-base font-medium text-zinc-200">Analisis perencanaan dan pelaksanaan</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ruang untuk analisis perencanaan pembelajaran dan pelaksanaannya.
              </p>
            </div>
          </div>
        </section>

        <section id="materi-pembelajaran" aria-label="Materi Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="02" title="Materi Pembelajaran" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:pl-10">
            <div className="border-l border-zinc-700 pl-5">
              <h3 className="text-base font-medium text-zinc-200">PPT Pembelajaran</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Dokumen presentasi materi akan ditambahkan di sini.
              </p>
            </div>
            <div>
              <h3 className="text-base font-medium text-zinc-200">Analisis isi dan penyajian materi</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ruang untuk analisis isi materi dan cara penyajiannya dalam pembelajaran.
              </p>
            </div>
          </div>
        </section>

        <section id="media-pembelajaran" aria-label="Media Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="03" title="Media Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <DocumentArea title="Code Listing / Panduan Praktik" description="Dokumen panduan praktik akan ditambahkan di sini." />
            <div className="max-w-2xl">
              <h3 className="text-base font-medium text-zinc-200">Analisis fungsi dan penggunaan media</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ruang untuk analisis fungsi media dan penggunaannya dalam kegiatan praktik.
              </p>
            </div>
          </div>
        </section>

        <section id="pelaksanaan-pembelajaran" aria-label="Pelaksanaan Pembelajaran" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="04" title="Pelaksanaan Pembelajaran" />
          <div className="space-y-8 md:pl-10">
            <div className="max-w-2xl">
              <p className="text-sm leading-relaxed text-zinc-400">
                Ruang analisis pelaksanaan praktik mengajar mandiri berdasarkan LK 4
                untuk empat siklus pembelajaran. Analisis dan tautan dokumen akan
                ditambahkan setelah sumber tersedia.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Analisis tertulis ini tidak menggantikan persyaratan video praktik mengajar.
              </p>
            </div>
            <ol className="divide-y divide-zinc-800 border-y border-zinc-800">
              {[1, 2, 3, 4].map((cycle) => (
                <li key={cycle} className="py-6 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <h3 className="text-base font-medium text-zinc-200">Siklus {cycle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:mt-0">
                    Analisis pelaksanaan berdasarkan LK 4 Siklus {cycle} belum ditambahkan.
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kegiatan-nonmengajar" aria-label="Kegiatan Nonmengajar" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="05" title="Kegiatan Nonmengajar" />
          <div className="space-y-8 md:pl-10">
            <NonTeachingPhotoCarousel photos={nonTeachingPhotos} />
            <div>
              <h3 className="text-base font-medium text-zinc-200">Uraian kegiatan dan refleksi peran</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ruang untuk uraian kegiatan nonmengajar dan refleksi atas peran yang dijalankan.
              </p>
            </div>
          </div>
        </section>

        <section id="instrumen-penilaian" aria-label="Instrumen Penilaian" className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
          <SectionHeading number="06" title="Instrumen Penilaian" />
          <div className="space-y-8 md:pl-10">
            <DocumentArea title="Instrumen Asesmen" description="Dokumen instrumen asesmen akan ditambahkan di sini." />
            <div className="max-w-2xl">
              <h3 className="text-base font-medium text-zinc-200">Analisis kesesuaian dan penggunaan instrumen</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Ruang untuk analisis kesesuaian instrumen dan penggunaannya dalam penilaian pembelajaran.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="refleksi-diri" className="border-t border-zinc-700 pb-4 pt-12 md:pt-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">Penutup</p>
          <h2 id="refleksi-diri" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Refleksi Diri
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Narasi refleksi diri atas pengalaman PPL Mandiri akan ditambahkan di sini.
          </p>
        </section>
      </div>
    </article>
  );
}
