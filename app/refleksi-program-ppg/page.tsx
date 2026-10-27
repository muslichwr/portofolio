import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Refleksi Program PPG Secara Keseluruhan",
  description:
    "Tahap 4 — refleksi akhir pengalaman belajar selama mengikuti Program PPG pada Semester I dan II.",
};

const sections = [
  {
    id: "pandangan-pendidikan",
    title: "Pandangan tentang Pendidikan di Indonesia",
    paragraphs: [
      "Pendidikan yang berpusat pada peserta didik, memperhatikan perbedaan kebutuhan belajar, memberikan kesempatan yang adil, serta mengembangkan pengetahuan, keterampilan, dan karakter. PPG memperkuat keyakinan tersebut.",
    ],
  },
  {
    id: "guru-profesional",
    title: "Menjadi Guru Profesional",
    paragraphs: [
      "Terus belajar, memahami karakteristik peserta didik, merancang pembelajaran yang sesuai, melakukan asesmen, dan merefleksikan praktik mengajar untuk memperbaiki kualitas pembelajaran.",
    ],
  },
  {
    id: "rencana-tindak-lanjut",
    title: "Rencana Tindak Lanjut",
    paragraphs: [
      "(1) Mengenali peserta didik",
      "(2) melaksanakan pembelajaran yang bermakna, dan",
      "(3) melakukan evaluasi serta pengembangan diri secara berkelanjutan.",
    ],
  },
] as const;

export default function RefleksiProgramPpgPage() {
  return (
    <article className={`${styles.page} px-6 pb-20 pt-16 md:pb-28 md:pt-24`}>
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            TAHAP 4 / REFLEKSI AKHIR
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl">
            Refleksi Program PPG Secara Keseluruhan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Refleksi akhir ini mencakup pengalaman belajar selama mengikuti
            Program PPG pada Semester I dan II, pandangan tentang pendidikan,
            peran guru profesional, serta rencana tindak lanjut.
          </p>
        </header>

        <nav
          aria-labelledby="daftar-isi"
          className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10"
        >
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">
            Daftar Isi
          </h2>
          <ol className="divide-y divide-zinc-800">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex min-h-11 items-baseline gap-4 rounded-sm py-3 text-sm text-zinc-300 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300"
                >
                  <span className="font-mono text-xs text-zinc-400" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16"
          >
            <h2 id={`${section.id}-heading`} className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              <span className="font-mono text-base font-normal text-zinc-400">
                {String(index + 1).padStart(2, "0")} —{" "}
              </span>
              {section.title}
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-zinc-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
