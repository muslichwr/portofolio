import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refleksi",
  description:
    "Refleksi diri — Visi, misi, kekuatan, kelemahan, dan rencana tindak lanjut.",
};

export default function RefleksiPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl">
        Refleksi
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        Halaman refleksi diri — segera hadir.
      </p>
    </section>
  );
}
