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
      <body className="bg-background text-foreground antialiased selection:bg-white selection:text-black">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
