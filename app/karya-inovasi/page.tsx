import type { Metadata } from "next";
import type { ReactNode } from "react";
import { content } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Karya Inovasi Pendidikan",
  description:
    "Seminar PPG Tahap 5: desain Praktikum Integrasi Laravel dan MySQL untuk kelas XI RPL. Perangkat telah disiapkan secara teknis; pembelajaran belum diterapkan di kelas.",
};

const sections = [
  { id: "kebutuhan", title: "Identifikasi Kebutuhan dan Tantangan" },
  { id: "gagasan", title: "Gagasan dan Tujuan Inovasi" },
  { id: "riset", title: "Riset Sederhana" },
  { id: "produk", title: "Produk dan Perangkat Pendukung" },
  { id: "implementasi", title: "Rencana Implementasi" },
  { id: "evaluasi", title: "Rancangan Evaluasi" },
] as const;

// Destinations reviewed and downloaded without authentication; see artifacts/karya-inovasi/.
const supportingDocuments: readonly { label: string; href?: string }[] = [
  { label: "Modul Ajar", href: "https://docs.google.com/document/d/1pYSbXbOEBjEtzzvBb0I4mPvco0JhIi4J/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true" },
  { label: "LKPD Inventaris Kelas — Revisi", href: "https://docs.google.com/document/d/1SILfvzFJ94O--i6mCUzdZHKWma-0bPVh/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true" },
  { label: "Instrumen Asesmen Inventaris Kelas — Revisi", href: "https://docs.google.com/document/d/1JCIMeh9ZfgAbWS5b8x3Yk90d7hIEklri/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true" },
  { label: "Bahan Ajar.pptx", href: "https://docs.google.com/presentation/d/1fwFg2-KwITEtXsYUJPQFVIJQXfuQhunl/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true" },
  { label: "Prototipe Laravel — Inventaris Kelas", href: "https://drive.google.com/file/d/133od2PHOpndiTHQkMJR0xo1SejmjQA-G/view?usp=drive_link" },
  { label: "Buku Praktikum Digital HTML (offline)", href: "https://drive.google.com/file/d/1Re76BBtxHHkOswI82oLP2uE4hTDI2Q8f/view?usp=drive_link" },
] as const;

const documentLinkClass = "rounded-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300";

function InlineText({ text }: { text: string }) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index} className="font-semibold text-zinc-200">{part.slice(2, -2)}</strong>
      : part
  );
}

function Paragraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return paragraphs.map((paragraph) => <p key={paragraph}><InlineText text={paragraph} /></p>);
}

function Section({ index, children }: { index: number; children: ReactNode }) {
  const section = sections[index];
  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 border-t border-zinc-800 py-12 md:py-16">
      <h2 id={`${section.id}-heading`} className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
        <span className="font-mono text-base font-normal text-zinc-400">{String(index + 1).padStart(2, "0")} — </span>
        {section.title}
      </h2>
      <div className="mt-6 max-w-2xl space-y-6 text-base leading-8 text-zinc-300">{children}</div>
    </section>
  );
}

export default function KaryaInovasiPage() {
  return (
    <article className={`${styles.page} px-6 pb-20 pt-16 md:pb-28 md:pt-24`}>
      <div className="mx-auto max-w-4xl">
        <header className="pb-12 md:pb-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400">SEMINAR PPG / TAHAP 5 — LK 4</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-5xl md:text-6xl">Karya Inovasi Pendidikan</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-snug tracking-tight text-zinc-200 sm:text-2xl">Praktikum Integrasi Laravel dan MySQL</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-zinc-400">Sasaran: Kelas XI RPL</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300">Desain pembelajaran disertai perangkat praktik. Perangkat pendukung sudah dikembangkan dan diperiksa secara teknis; kegiatan pembelajaran inovatif belum diterapkan di kelas.</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">Halaman ini menjelaskan rancangan karya inovasi pendidikan berdasarkan LK 4. Informasi mengenai hasil belajar, efektivitas, dan tanggapan peserta didik belum tersedia karena rancangan pembelajaran belum diuji dalam pelaksanaan kelas.</p>
        </header>

        <nav aria-labelledby="daftar-isi" className="border-t border-zinc-800 py-8 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
          <h2 id="daftar-isi" className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-400 md:mb-0 md:pt-3">Daftar Isi</h2>
          <ol className="divide-y divide-zinc-800">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="flex min-h-11 items-baseline gap-4 rounded-sm py-3 text-sm text-zinc-300 underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-300">
                  <span className="font-mono text-xs text-zinc-400" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <Section index={0}><Paragraphs paragraphs={content.needs} /></Section>

        <Section index={1}>
          <Paragraphs paragraphs={content.ideas} />
          <h3 className="text-lg font-semibold text-white">Alur kegiatan</h3>
          <p className="text-base font-medium leading-8 text-zinc-200">Prediksi → Telusuri → Coba → Buktikan → Jelaskan</p>
          <ol className="list-decimal space-y-4 pl-6 marker:font-mono marker:text-zinc-400">
            {content.stages.map((stage) => <li key={stage.name} className="pl-2"><strong className="font-semibold text-zinc-200">{stage.name}:</strong> {stage.description}</li>)}
          </ol>
          <p>{content.novelty}</p>
        </Section>

        <Section index={2}><Paragraphs paragraphs={content.research} /></Section>

        <Section index={3}>
          <p><InlineText text={content.product} /></p>
          <h3 className="text-lg font-semibold text-white">Perangkat pendukung yang disusun:</h3>
          <ul className="divide-y divide-zinc-800">
            {supportingDocuments.map((document, index) => (
              <li key={document.label} className="py-5 first:pt-0">
                {document.href
                  ? <a className={documentLinkClass} href={document.href}>{document.label}</a>
                  : <span className="font-medium text-zinc-200">{document.label}</span>}
                <p className="mt-2 text-sm leading-7 text-zinc-400">{content.support[index].description}</p>
                {!document.href && <p className="mt-2 text-sm leading-relaxed text-zinc-400">Tautan publik belum tersedia.</p>}
              </li>
            ))}
          </ul>
          <p>{content.productClosing}</p>
        </Section>

        <Section index={4}>
          <p><InlineText text={content.implementationIntro} /></p>
          <dl className="divide-y divide-zinc-800 border-y border-zinc-800">
            {content.schedule.map(([stage, duration, activity]) => (
              <div key={stage} className="py-5 md:grid md:grid-cols-[10rem_1fr] md:gap-6">
                <dt className="font-medium text-zinc-200">{stage}<span className="ml-3 font-mono text-xs font-normal text-zinc-400 md:ml-0 md:block">{duration}</span></dt>
                <dd className="mt-2 text-sm leading-7 text-zinc-300 md:mt-0">{activity}</dd>
              </div>
            ))}
          </dl>
          <Paragraphs paragraphs={content.implementationClosing} />
        </Section>

        <Section index={5}>
          <p>{content.evaluationIntro}</p>
          <table className="w-full table-fixed border-y border-zinc-800 text-left text-sm leading-7">
            <caption className="pb-4 text-left font-medium text-zinc-200">Bobot asesmen yang direncanakan</caption>
            <thead><tr className="border-b border-zinc-800"><th scope="col" className="py-3 pr-4 font-medium">Aspek</th><th scope="col" className="w-20 py-3 text-right font-medium">Bobot</th></tr></thead>
            <tbody>{content.weights.map(([aspect, weight]) => <tr key={aspect} className="border-b border-zinc-800 last:border-0"><th scope="row" className="py-4 pr-4 font-normal">{aspect}</th><td className="py-4 text-right font-mono text-zinc-200">{weight}</td></tr>)}</tbody>
          </table>
          <Paragraphs paragraphs={content.evaluationClosing} />
        </Section>

        <section aria-labelledby="dokumen-utama" className="border-t border-zinc-800 pt-8">
          <h2 id="dokumen-utama" className="text-lg font-semibold text-white">Dokumen Utama</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400"><InlineText text={content.document} /></p>
          <a className={`${documentLinkClass} mt-4 inline-flex min-h-11 items-center text-sm`} href="https://drive.google.com/file/d/1r02zLNpoLKK_cKRTE4oGZ8ACgHdQBzr_/view?usp=drivesdk">Buka LK 4 — Penyusunan Desain Karya Inovatif (PDF)</a>
        </section>
      </div>
    </article>
  );
}
