import Link from "next/link";
import Image from "next/image";
import profilePhoto from "@/assets/images/muslich1.png";
import { ArrowRight, ArrowUpRight, Server, Globe, Code2, Target, Layers, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkStudiesToggle } from "@/components/sections/WorkStudiesToggle";

/* ============================================================================
   Brand SVG Icons — Social icons (hollow/outline style)
   ============================================================================ */
function GitHubIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { readonly className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

/* ============================================================================
   DATA — Stats metrics
   ============================================================================ */
interface StatMetric {
  readonly value: string;
  readonly label: string;
}

/* ============================================================================
   DATA — Model Guru karakter cards
   ============================================================================ */
interface GuruKarakter {
  readonly icon: typeof Target;
  readonly title: string;
  readonly description: string;
}

const guruKarakterCards: readonly GuruKarakter[] = [
  {
    icon: Target,
    title: "Guru Reflektif",
    description:
      "Belajar dari setiap siklus mengajar secara iteratif dan terstruktur berdasarkan data nyata di kelas.",
  },
  {
    icon: Layers,
    title: "Guru Fasilitatif",
    description:
      "Memberi ruang murid menemukan solusi sendiri sebelum jawaban diberikan — mendorong kemandirian belajar.",
  },
  {
    icon: Zap,
    title: "Guru Inovatif",
    description:
      "Mengintegrasikan teknologi dan tools industri nyata ke dalam setiap praktikum pembelajaran vokasi.",
  },
  {
    icon: Users,
    title: "Guru Diferensiatif",
    description:
      "Menyesuaikan scaffolding dan pendekatan berdasarkan profil kemampuan dan kebutuhan tiap murid.",
  },
] as const;

/* ============================================================================
   DATA — Artifact teasers (synced with actual Modul Ajar & GP assessment)
   ============================================================================ */
interface ArtifactTeaser {
  readonly cycle: string;
  readonly weekRange: string;
  readonly title: string;
  readonly tags: readonly string[];
  readonly icon: typeof Server;
}

const artifactTeasers: readonly ArtifactTeaser[] = [
  {
    cycle: "Siklus 1",
    weekRange: "Minggu 5–8",
    title: "OS Server & Web Server Dasar",
    tags: ["PjBL", "Ubuntu Server", "SSH", "Apache2"],
    icon: Server,
  },
  {
    cycle: "Siklus 2",
    weekRange: "Minggu 9–12",
    title: "Full Stack Environment & DNS Lokal",
    tags: ["PjBL", "Nginx", "Laravel", "BIND9"],
    icon: Globe,
  },
  {
    cycle: "Siklus 3",
    weekRange: "Minggu 13–15",
    title: "Git Deployment & Monitoring Server",
    tags: ["PjBL", "Git", "GitHub", "htop"],
    icon: Code2,
  },
] as const;

const socialLinks = [
  {
    href: "https://github.com/muslichwr",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/muslichwr",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://instagram.com/muslichwr",
    label: "Instagram",
    icon: InstagramIcon,
  },
] as const;

/* ============================================================================
   PAGE COMPONENT
   ============================================================================ */
export default function HomePage() {
  return (
    <>
      {/* ==================================================================
          HERO SECTION
          ================================================================== */}
      <section
        id="hero"
        className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-10"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* ── Profile Module — Avatar + Name + Badge ── */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 blur-md" />
              <Image
                src={profilePhoto}
                alt="Muslich Wahyu Romadhon"
                width={96}
                height={96}
                className="relative size-24 rounded-full border border-white/10 object-cover"
                priority
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Muslich Wahyu Romadhon</span>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-1.5 border-white/[0.08] bg-white/[0.03] text-zinc-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3 2"
                  className="size-3.5 shrink-0 rounded-[2px]"
                  aria-hidden="true"
                >
                  <rect width="3" height="1" fill="#FF0000" />
                  <rect width="3" height="1" y="1" fill="#FFFFFF" />
                </svg>
                Based in Indonesia
              </Badge>
            </div>
          </div>

          {/* ── Massive Typography ── */}
          <h1
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter text-white"
          >
            VOCATIONAL IT
            <br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              EDUCATOR
            </span>
          </h1>

          {/* CTA Button — navigates to /about */}
          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              Tentang Saya
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Social Icons ── */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                  aria-label={social.label}
                >
                  <IconComponent className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================
          MODEL GURU YANG DITUJU — E-Portfolio 1 mandatory component
          ================================================================== */}
      <section id="model-guru" className="px-2 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Visi Pendidikan
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Model Guru yang Dituju
            </h2>
          </div>

          {/* Karakter cards grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {guruKarakterCards.map((karakter) => {
              const IconComponent = karakter.icon;
              return (
                <div
                  key={karakter.title}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
                >
                  <div className="mb-4 flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <IconComponent className="size-4 text-zinc-500" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-white">
                    {karakter.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {karakter.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================
          WORK / STUDIES SECTION
          ================================================================== */}
      <section id="about" className="px-2 py-14">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Experience
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Work &amp; Studies
            </h2>
          </div>

          <WorkStudiesToggle />
        </div>
      </section>

      {/* ⚠️ CONSISTENCY CHECK REQUIRED:
          Homepage siklus topics must exactly match these documents:
          ─ Siklus 1: Ubuntu Server, Jaringan (ifupdown/netplan), SSH, Apache2
          ─ Siklus 2: PHP/MySQL/Composer/Laravel, Nginx+PHP-FPM, BIND9 DNS
          ─ Siklus 3: Git/GitHub (PAT), git pull deploy, htop/netstat monitoring
          Cross-check against:
          - LK 4 Refleksi Siklus 1, 2, 3 (PDF di /artefak)
          - Modul Ajar / RPP Bab 1–7
          - Lampiran 7 & 8 penilaian GP
          Inconsistency between homepage and assessment documents WILL be
          flagged by PPG evaluators. Verify before final submission.
      */}

      {/* ==================================================================
          ARTIFACTS / PROJECTS SECTION
          ================================================================== */}
      <section id="artefak-preview" className="px-2 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
              Teaching Portfolio
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
              Artefak Pembelajaran
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-500">
              Kumpulan artefak dari 3 siklus PPL Terbimbing yang memuat analisis
              mendalam, teori pedagogis, dan refleksi berbasis konteks
              pembelajaran nyata.
            </p>
          </div>

          {/* Cards grid — compact teasers */}
          <div className="grid gap-6 md:grid-cols-3">
            {artifactTeasers.map((artifact, index) => {
              const IconComponent = artifact.icon;
              return (
                <Link
                  key={index}
                  href="/artefak"
                  className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-500/20 hover:bg-white/[0.04]"
                >
                  {/* Glowing border effect on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-500/10" />
                  </div>

                  <div className="relative space-y-3">
                    {/* Header — cycle label + week range + icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">
                        {artifact.cycle} · {artifact.weekRange}
                      </span>
                      <div className="flex size-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                        <IconComponent className="size-4 text-zinc-500 transition-colors group-hover:text-cyan-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold tracking-tight text-white">
                      {artifact.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {artifact.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-xs text-zinc-500 transition-colors group-hover:border-cyan-500/10 group-hover:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-1 pt-1 text-xs text-zinc-600 transition-colors group-hover:text-cyan-400">
                      <span>Lihat Detail</span>
                      <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-14 flex justify-center">
            <Link
              href="/artefak"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              Lihat Analisis Lengkap
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
