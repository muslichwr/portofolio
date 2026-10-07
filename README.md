# Portfolio Muslich Wahyu Romadhon

## Project Overview

Portfolio pribadi, profesional, dan akademik milik **Muslich Wahyu Romadhon**, dengan positioning utama **Vocational IT Educator / Pendidik IT Vokasi**.

- Production: [portofolio-muslich.vercel.app](https://portofolio-muslich.vercel.app/).
- Nama package: `portofolio`; versi `0.1.0`; private.
- **CURRENT STATE:** website berjalan dengan tujuh halaman, tiga siklus praktik mengajar, dan enam refleksi mata kuliah.
- **DECISION:** tahap ini membangun dokumentasi. Roadmap merupakan pekerjaan mendatang, bukan izin mengubah aplikasi.
- Baseline audit: **7 Oktober 2026**, commit `4c043ef`. Rincian hasil dan keterbatasan pemeriksaan ada di [SRS](SRS.md#hasil-verifikasi-baseline).

## Product Context

Website menghubungkan pendidikan vokasi dengan software development, Linux/server, web infrastructure, troubleshooting, dan refleksi guru. Audiens akademik/PPG membutuhkan analisis serta dokumen pendukung; audiens profesional membutuhkan pemahaman cepat tentang profil, keahlian, pendekatan mengajar, pengalaman, dan bukti praktik.

**DECISION:** kebutuhan PPG tetap dipertahankan. Lapisan portfolio profesional akan diperkuat secara bertahap. Filosofi **Logic First, Syntax Later** sudah hadir pada halaman refleksi; penempatan sebagai elemen utama homepage masih **PROPOSED**. Konteks lengkap ada di [PRD](PRD.md).

## Tech Stack

Sumber: [package.json](package.json), [package-lock.json](package-lock.json), dan konfigurasi aktual. Rentang manifest tidak sama dengan versi terpasang.

| Teknologi | Manifest | Terpasang saat audit | Fungsi |
|---|---|---|---|
| Next.js | `^16.3.1` | `16.3.1` | App Router, prerender statis, metadata, image/font |
| React / React DOM | `19.2.4` | `19.2.4` | UI dan state client |
| TypeScript | `^5` | `5.9.3` | Typing strict, alias `@/*` |
| Tailwind CSS / PostCSS plugin | `^4` | `4.2.4` | CSS-first tokens dan utility classes |
| shadcn / Base UI | `^4.5.0` / `^1.4.1` | `4.5.0` / `1.4.1` | Komponen lokal, style `base-nova` |
| Framer Motion / Lenis | `^12.38.0` / `^1.3.23` | `12.38.0` / `1.3.23` | Animasi dan smooth scroll |
| Lucide React | `^1.11.0` | `1.11.0` | Ikon |
| ESLint / eslint-config-next | `^9` / `16.2.4` | `9.39.4` / `16.2.4` | Flat config, aturan Next/TypeScript |

Utilitas: `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`. Font aktual: **Inter** dan **Geist Mono**, melalui `next/font/google`. Tidak ditemukan database, CMS, API route, atau integrasi analytics pada source yang diaudit.

## Project Structure

```text
app/                   Route pages, root layout, global CSS, favicon
components/layout/     Navbar dan Footer
components/providers/  SmoothScrollProvider (Lenis)
components/sections/   Artefak, CPMK, pengalaman, refleksi mata kuliah
components/ui/         Primitive UI lokal berbasis shadcn/Base UI
assets/images/         Foto profil JPG dan PNG
lib/utils.ts           Penggabungan class melalui cn()
public/                Lima SVG bawaan; bukan penyimpanan PDF portfolio
docs/plans/            Roadmap implementasi
.kilo/rules/           Aturan ringkas untuk Kilo
.agents/rules/         Router dokumentasi yang sudah ada
```

Konten, nilai, dan URL dokumen didefinisikan dalam TSX. Dokumen pendukung menggunakan Google Drive/Docs, bukan file PDF lokal. Peta route dan data ada di [SRS](SRS.md); sistem komponen ada di [DESIGN](DESIGN.md).

## Local Development

Gunakan Node.js yang memenuhi engine Next.js terpasang: **>=20.9.0**. Audit memakai Node `24.12.0` dan npm `11.7.0`; repository belum menetapkan versi Node melalui `engines` atau file pinning. Gunakan npm karena `package-lock.json` tersedia. Tidak ditemukan konfigurasi environment yang diperlukan oleh source saat ini.

```bash
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Command aktual:

| Command | Fungsi |
|---|---|
| `npm ci` | Instalasi dari lockfile; bukan langkah yang dijalankan pada tugas dokumentasi |
| `npm run dev` | `next dev` |
| `npm run build` | `next build` |
| `npm run start` | `next start`; jalankan setelah build |
| `npm run lint` | `eslint` |
| `npx tsc --noEmit --incremental false` | Pemeriksaan tambahan memakai TypeScript lokal, tanpa cache incremental |

Script `test` dan `typecheck` belum tersedia. Jangan menggunakan `npm test` atau `npm run typecheck` seolah sudah dikonfigurasi. Lint baseline berhasil keluar dengan code 0 tetapi menghasilkan 16 warning, termasuk salinan worktree `.kilo`.

Deployment production menggunakan domain Vercel. Tidak ditemukan `vercel.json` atau workflow CI pada tree utama. Pengaturan dashboard, environment deployment, auto-deploy, dan Search Console belum diperiksa; jangan mengasumsikan konfigurasinya.

## Documentation Map

| Dokumen | Tanggung jawab |
|---|---|
| [PRD.md](PRD.md) | WHAT & WHY: produk, audiens, prinsip, IA, keputusan |
| [SRS.md](SRS.md) | Requirement, arsitektur, fakta konten, inventory evidence, gap, verification |
| [DESIGN.md](DESIGN.md) | UX/UI, token, komponen, anatomi halaman, interaksi |
| [AGENTS.md](AGENTS.md) | Operational guide dan workflow coding agent |
| [.kilo/rules/project.md](.kilo/rules/project.md) | Aturan inti agent |
| [docs/plans/implementation.md](docs/plans/implementation.md) | Roadmap terurut dengan requirement dan exit criteria |
| [.agents/rules/portoflio.md](.agents/rules/portoflio.md) | Router kompatibilitas ke dokumentasi baru |

## Required Reading Order

```text
README.md
→ PRD.md
→ SRS.md
→ DESIGN.md
→ .kilo/rules/project.md
→ docs/plans/implementation.md
```

Agent juga wajib mengikuti [AGENTS.md](AGENTS.md). Baca hanya bagian roadmap yang relevan setelah memahami baseline.

## Cara Membaca Status

- **CURRENT STATE:** diamati pada kode atau hasil audit; keberadaan klaim di kode tidak membuktikan keaslian klaim tersebut.
- **ISSUE:** gap yang ditemukan beserta dampak dan batas verifikasinya.
- **DECISION:** instruksi atau keputusan pemilik yang sudah eksplisit.
- **PROPOSED:** arah yang belum menjadi izin implementasi.

Dokumentasi lama dikonsolidasikan sesuai instruksi pemilik. Riwayatnya tetap tersedia lewat Git, misalnya `git show 4c043ef:docs/DECISIONS.md`. Jangan memulihkan file lama atau meneruskan status verifikasi lama tanpa pemeriksaan ulang.
