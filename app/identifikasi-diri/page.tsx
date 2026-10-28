import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Visi Pribadi — Identifikasi Diri",
  description:
    "Seminar PPG Tahap 1: visi dan langkah awal sebagai calon guru sebelum mengikuti Seminar PPG, berdasarkan LK 1 Identifikasi Diri.",
};

// Source: artifacts/visi-pribadi-lk1-konten.md. Preserve the manuscript verbatim.
const visions = [
  {
    id: "pendidikan-indonesia",
    title: "Visi untuk Pendidikan Indonesia",
    paragraphs: [
      "Visi saya adalah terwujudnya pendidikan yang mampu mengembangkan potensi peserta didik, membentuk karakter, serta membekali mereka dengan pengetahuan dan keterampilan yang relevan dengan perkembangan zaman.",
      "Dalam pendidikan kejuruan, pembelajaran tidak cukup hanya berfokus pada penggunaan teknologi atau penguasaan keterampilan teknis. Peserta didik juga perlu dibiasakan berpikir logis, memecahkan masalah, bekerja sama, berkomunikasi, dan belajar secara mandiri.",
      "Saya juga menyadari bahwa kondisi setiap sekolah berbeda, baik dari sisi fasilitas, lingkungan, maupun kemampuan peserta didik. Oleh karena itu, pendidikan yang baik perlu tetap menyesuaikan dengan kondisi nyata tanpa kehilangan tujuan utama pembelajaran.",
    ],
  },
  {
    id: "calon-guru",
    title: "Visi sebagai Calon Guru",
    paragraphs: [
      "Visi saya sebagai calon guru adalah menjadi guru yang mampu menciptakan pembelajaran yang bermakna, relevan, dan mudah dipahami peserta didik.",
      "Sebagai calon guru bidang Pengembangan Perangkat Lunak dan Gim, saya ingin peserta didik tidak hanya mampu mengikuti langkah atau menulis sintaks, tetapi juga memahami logika dan proses pemecahan masalah di baliknya. Dengan demikian, mereka lebih siap menghadapi perkembangan teknologi yang terus berubah.",
      "Saya juga ingin menjadi guru yang terbuka, mau terus belajar, serta mampu memahami kebutuhan peserta didik. Bagi saya, keberhasilan pembelajaran tidak hanya terlihat dari selesainya materi, tetapi dari sejauh mana peserta didik memahami, mampu menerapkan, dan berkembang melalui proses belajar.",
    ],
  },
] as const;

const actions = [
  "Meningkatkan kompetensi secara berkelanjutan, baik dalam aspek pedagogik maupun perkembangan teknologi di bidang PPLG.",
  "Mengenali kemampuan dan kebutuhan peserta didik agar pembelajaran dapat disesuaikan dengan kondisi kelas.",
  "Menghubungkan materi dengan situasi nyata melalui contoh, latihan, studi kasus, maupun praktik yang relevan dengan kehidupan dan dunia kerja.",
  "Menyesuaikan pembelajaran dengan kondisi sekolah, termasuk ketika terdapat keterbatasan perangkat, jaringan, atau sumber belajar.",
  "Membangun lingkungan belajar yang positif agar peserta didik berani bertanya, mencoba, berdiskusi, dan belajar dari kesalahan.",
  "Melakukan refleksi dan perbaikan pembelajaran berdasarkan pengalaman mengajar, respon peserta didik, serta masukan dari guru pamong dan rekan sejawat.",
  "Terus mengikuti perkembangan pendidikan dan teknologi melalui pelatihan, komunitas, diskusi, dan sumber belajar yang relevan.",
] as const;

const sections = [
  ...visions,
  { id: "langkah-mencapai-visi", title: "Langkah-Langkah untuk Mencapai Visi" },
] as const;

export default function IdentifikasiDiriPage() {
  return (
    <article className={`${styles.page} px-6 pb-20 pt-16 md:pb-28 md:pt-24`}>
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">
            SEMINAR PPG / TAHAP 1
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl">
            Visi Pribadi
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Identifikasi diri melalui LK 1 ini memuat pandangan awal saya tentang
            pendidikan Indonesia, peran sebagai calon guru, dan langkah untuk
            mencapai visi tersebut sebelum mengikuti Seminar PPG.
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

        {visions.map((vision, index) => (
          <section
            key={vision.id}
            id={vision.id}
            aria-labelledby={`${vision.id}-heading`}
            className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16"
          >
            <h2 id={`${vision.id}-heading`} className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              <span className="font-mono text-base font-normal text-zinc-400">
                {String(index + 1).padStart(2, "0")} —{" "}
              </span>
              {vision.title}
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-zinc-300">
              {vision.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section
          id="langkah-mencapai-visi"
          aria-labelledby="langkah-mencapai-visi-heading"
          className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16"
        >
          <h2 id="langkah-mencapai-visi-heading" className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
            <span className="font-mono text-base font-normal text-zinc-400">03 — </span>
            Langkah-Langkah untuk Mencapai Visi
          </h2>
          <div className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">
            <p>Untuk mencapai visi tersebut, beberapa langkah yang akan saya lakukan adalah:</p>
            <ol className="mt-6 list-decimal space-y-4 pl-6 marker:font-mono marker:text-zinc-400">
              {actions.map((action) => (
                <li key={action} className="pl-2">{action}</li>
              ))}
            </ol>
          </div>
        </section>

      </div>
    </article>
  );
}
