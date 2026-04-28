import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
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
    default: "Portfolio | Pendidik Vokasi & Developer",
    template: "%s | Portfolio",
  },
  description:
    "E-Portfolio UTS PPL Terbimbing — Praktik Pengalaman Lapangan Pendidikan Profesi Guru Prajabatan.",
  keywords: [
    "E-Portfolio",
    "PPL Terbimbing",
    "PPG Prajabatan",
    "Pendidik Vokasi",
    "Developer",
    "Next.js",
  ],
  authors: [{ name: "Pendidik Vokasi" }],
  openGraph: {
    title: "Portfolio | Pendidik Vokasi & Developer",
    description:
      "E-Portfolio UTS PPL Terbimbing — Praktik Pengalaman Lapangan Pendidikan Profesi Guru Prajabatan.",
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
          <main className="min-h-screen">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
