import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artefak",
  description:
    "Artefak pembelajaran — Portofolio PPL Terbimbing 3 siklus praktik mengajar.",
};

export default function ArtefakPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">
        Artefak
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Halaman artefak pembelajaran — segera hadir.
      </p>
    </section>
  );
}
