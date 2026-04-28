import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penilaian",
  description:
    "Instrumen penilaian — Lampiran 7 & 8 penyusunan perangkat dan praktik mengajar.",
};

export default function PenilaianPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">
        Penilaian
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Halaman penilaian — segera hadir.
      </p>
    </section>
  );
}
