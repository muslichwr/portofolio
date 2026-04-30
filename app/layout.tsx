import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muslich Wahyu R. | Pendidik Vokasi & Developer",
    template: "%s | Portfolio",
  },
  description:
    "E-Portfolio UTS PPL Terbimbing — Praktik Pengalaman Lapangan Pendidikan Profesi Guru Prajabatan. Fullstack Developer & Pendidik Vokasi TKJ.",
  keywords: [
    "E-Portfolio",
    "PPL Terbimbing",
    "PPG Prajabatan",
    "Pendidik Vokasi",
    "Fullstack Developer",
    "TKJ",
    "Next.js",
  ],
  authors: [{ name: "Muslich Wahyu Ramadhan" }],
  openGraph: {
    title: "Muslich Wahyu R. | Pendidik Vokasi & Developer",
    description:
      "E-Portfolio UTS PPL Terbimbing — Fullstack Developer & Pendidik Vokasi TKJ.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="relative bg-background text-foreground antialiased selection:bg-white selection:text-black">
        {/* ── Signature Radial Glow — Top-center teal/cyan gradient ── */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[600px]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12)_0%,_rgba(59,130,246,0.06)_40%,_transparent_70%)] blur-3xl" />
        </div>

        <SmoothScrollProvider>
          <Navbar />
          <main className="relative z-10 min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
