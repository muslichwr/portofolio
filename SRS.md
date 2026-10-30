# Software Requirements Specification

Baseline audit: **7 Oktober 2026**, commit `4c043ef`. SRS menjadi sumber requirement dan fakta implementasi aktif. [PRD](PRD.md) menjelaskan konteks/keputusan, [DESIGN](DESIGN.md) menjelaskan UI, [AGENTS](AGENTS.md) mengatur workflow, dan [roadmap](docs/plans/implementation.md) mengurutkan pekerjaan.

## Konvensi dan Batas Source of Truth

- **CURRENT STATE:** fakta yang diamati di source atau hasil audit. Keberadaan narasi/angka di kode tidak membuktikan kebenaran pengalaman atau dokumen primernya.
- **ISSUE:** perbedaan, kekurangan, atau risiko yang ditemukan; sertakan lokasi dan batas verifikasi.
- **DECISION:** instruksi eksplisit pemilik, dicatat pada register keputusan PRD.
- **PROPOSED:** perubahan mendatang; tidak memberikan izin implementasi.

Status requirement: **Implemented** = perilaku baseline ditemukan; **Partial** = sebagian tersedia dengan gap yang diketahui; **Proposed** = perilaku target belum diterapkan/disetujui sebagai task aplikasi. Status tidak sama dengan kelulusan pengujian. Kolom Verification menjelaskan apa yang sudah diperiksa dan apa yang belum.

ID stabil tidak boleh digunakan ulang untuk makna lain. Status, acceptance, dan source diperbarui hanya saat underlying truth berubah. Untuk konflik, ikuti AGENTS; kode tetap sumber fakta CURRENT STATE, bukan otorisasi mengabaikan requirement resmi.

## Current Architecture

### Routing, rendering, dan hubungan halaman

Semua page berikut tidak memiliki directive `use client`. Build menghasilkan route prerender statis. Client components di dalam page tetap membutuhkan JavaScript/hydration.

| Route | Page source | Komponen/pola utama | Hubungan keluar |
|---|---|---|---|
| `/` | [app/page.tsx](app/page.tsx) | Foto/hero, Badge, WorkStudiesToggle, karakter guru, teaser siklus | About, Artefak, Refleksi Akhir, sosial |
| `/about` | [app/about/page.tsx](app/about/page.tsx) | Profil Image, narasi, Badge, kompetensi, role model, timeline inline | Artefak, Refleksi Mata Kuliah |
| `/artefak` | [app/artefak/page.tsx](app/artefak/page.tsx) | CpmkBanner, tiga ArtifactCard, Separator | 12 dokumen Google Drive |
| `/penilaian` | [app/penilaian/page.tsx](app/penilaian/page.tsx) | Card, ScoreBar inline, formatScore/formatDelta, rekap L7/L8 | Enam dokumen, juga tersedia pada Artefak |
| `/refleksi` | [app/refleksi/page.tsx](app/refleksi/page.tsx) | Visi, strength/weakness Cards, RTL | Refleksi Akhir |
| `/refleksi-akhir` | [app/refleksi-akhir/page.tsx](app/refleksi-akhir/page.tsx) | Timeline, tantangan/solusi, feedback, filosofi, nilai guru | Artefak, Penilaian, Refleksi PPL, About |
| `/refleksi-matkul` | [app/refleksi-matkul/page.tsx](app/refleksi-matkul/page.tsx) | Pengantar 4C, RefleksiMatkulClient | LK 2/artefak eksternal; tab PPL menuju Artefak |
| `/refleksi-matkul/semester-2` | [app/refleksi-matkul/semester-2/page.tsx](app/refleksi-matkul/semester-2/page.tsx) | Pengantar 4C dan RefleksiMatkulClient dengan lima course Semester II | PSE dan PMAL berisi refleksi dari PDF pemilik, masing-masing dengan empat tautan artefak terverifikasi; PPL Mandiri terisi dari naskah revisi dengan tujuh status artefak tanpa URL; Pendidikan Inklusi terisi dari PDF pemilik dengan empat artefak tanpa URL; Projek Kepemimpinan terisi dari PDF pemilik dengan empat artefak tanpa URL; dokumen LK 2 belum tersedia |
| `/refleksi-program-ppg` | [app/refleksi-program-ppg/page.tsx](app/refleksi-program-ppg/page.tsx) | Server page Tahap 4; minimal hero, tiga anchor teks, tiga jawaban LK 3 verbatim | Anchor lokal; tidak menampilkan link dokumen karena URL belum tersedia |
| `/identifikasi-diri` | [app/identifikasi-diri/page.tsx](app/identifikasi-diri/page.tsx) | Server page Seminar PPG Tahap 1; minimal hero, tiga anchor, enam paragraf visi dan tujuh langkah LK 1 verbatim | Refleksi Program PPG Tahap 4; dokumen pendukung tanpa link karena PDF/URL belum tersedia |
| `/karya-inovasi` | [app/karya-inovasi/page.tsx](app/karya-inovasi/page.tsx) | Server page Seminar PPG Tahap 5; enam bagian editorial, lima tahap, rencana 240 menit, bobot dan ambang evaluasi | Lima dokumen publik terverifikasi; prototipe Laravel dan buku HTML berupa status non-link |
| `/e-portfolio-1` | [app/e-portfolio-1/page.tsx](app/e-portfolio-1/page.tsx) | Server page editorial UTS Siklus 1 Laravel untuk penguji PPG; enam bagian tanpa kode/tutorial, instrumen contoh tiga aspek dan refleksi penutup; carousel dua ilustrasi tetap | Sumber refleksi LK 4 Siklus 1; rujukan format/asesmen dan kredit dipertahankan; dokumentasi nonmengajar, Modul Ajar dan video asli belum dilampirkan |
| `/e-portfolio-2` | [app/e-portfolio-2/page.tsx](app/e-portfolio-2/page.tsx) | Server page editorial UAS Pembelajaran Basis Data; naskah final pemilik, lima bagian/anchor, placeholder ringkas dan carousel ilustrasi horizontal | Enam Modul Ajar, empat LK 4 dalam Dokumen Refleksi, tautan E-Portfolio 1; rancangan utama belum ditetapkan dan video sesuai belum dilampirkan |

Navbar menghubungkan tiga belas route produk melalui menu desktop/mobile. OWN-020/FR-PORTFOLIO-004 menambahkan `/e-portfolio-2` pada Semester 2 dan daftar mobile, serta tautan dua arah dengan E-Portfolio 1. **ISSUE:** penempatan refleksi mata kuliah Semester I masih pada Semester 2, berbeda dari OWN-008; task ini mempertahankan pengelompokan awal. Active route memakai tujuan paling spesifik dengan delimiter `/`; `/refleksi` tidak cocok dengan `/refleksi-akhir`. Footer tetap memuat `/`, `/artefak`, `/penilaian`, `/refleksi`. `_not-found` adalah route internal framework, bukan halaman produk. Tidak ditemukan dynamic segment, API route, middleware, atau custom error/loading page pada tree utama.

### Data flow dan batas server/client

**CURRENT STATE (task OWN-015):** tersedia dua belas route produk. Navbar desktop aktual menyediakan sebelas tujuan: Home/About, empat tujuan Semester 1, dan lima tujuan Semester 2 (Visi Pribadi, refleksi mata kuliah I/II, Refleksi Program PPG, Karya Inovasi). Mobile menyediakan dua belas link langsung. `/e-portfolio-1` masih tersedia di mobile tetapi entri desktop dikomentari pada baseline awal task; deskripsi Refleksi Program PPG masih menyebut PPL Mandiri. Ini perbedaan baseline dari narasi navigasi sebelumnya, tidak diperbaiki melalui task halaman inovasi. OWN-015 hanya menambah Karya Inovasi; seluruh tujuan awal dipertahankan.

```text
Konstanta TSX + foto lokal + URL dokumen eksternal
→ server pages dan root layout
→ HTML prerender + client components
→ state lokal (menu, Work/Studies, course tab, accordion)
→ klik tautan internal atau navigasi ke Google Drive/Docs/sosial
```

[RootLayout](app/layout.tsx) memasang Inter/Geist Mono, metadata root, `html lang="id"`, radial glow dekoratif, SmoothScrollProvider, Navbar, satu main, dan Footer. Provider client menerima children server; ini tidak otomatis mengubah semua page menjadi client component. Tidak ada proses fetch dokumen eksternal di source; link dibuka oleh visitor.

Client boundaries eksplisit: Navbar, SmoothScrollProvider, ArtifactCard, CpmkBanner, WorkStudiesToggle, RefleksiMatkulClient, dan primitive Separator/Sheet/Progress. Footer dan score calculation berada di server source. Badge/Button memakai primitive Base UI; jangan mengasumsikan seluruh primitive bebas JavaScript hanya dari directive file lokal.

State memakai React `useState`, tidak disimpan ke database, URL, atau localStorage. Refresh mengembalikan state awal. Navbar menutup menu ketika link mobile dipilih. Dropdown desktop menutup saat tujuan dipilih, klik di luar, fokus meninggalkan desktop nav, atau Escape; Escape mengembalikan fokus ke tombol semester. Menu mobile tetap seperti baseline. Tab mata kuliah merender satu course; pergantian key meremount isi dan mereset accordion. Modal rubrik tidak ditemukan pada implementasi saat ini meskipun disebut dokumen engineering lama.

### Tooling dan configuration

- Stack dan rentang/versi package: [README](README.md#tech-stack). `package-lock.json` tersedia; tidak ada script test/typecheck atau test runner yang dikonfigurasi.
- [tsconfig.json](tsconfig.json): strict, noEmit, incremental, moduleResolution bundler, JSX react-jsx, alias `@/*` ke root, include types `.next`, exclude node_modules.
- [next.config.ts](next.config.ts): hanya `allowedDevOrigins: ["172.31.16.1"]`. Bukan konfigurasi domain production, canonical, CORS umum, atau output static export.
- [eslint.config.mjs](eslint.config.mjs): Next core-web-vitals + TypeScript, ignore `.next`, out, build, next-env. `.kilo/worktrees` belum dikecualikan.
- [postcss.config.mjs](postcss.config.mjs): `@tailwindcss/postcss`; [components.json](components.json): base-nova, RSC/TSX, neutral, CSS variables, Lucide, Base UI pada implementasi lokal.
- Tidak ditemukan environment variable yang dibaca source, backend, CMS, authentication, analytics, CI workflow, atau `vercel.json` di tree utama. Dashboard Vercel dan konfigurasi eksternal belum diperiksa.
- Worktree detached `.kilo/worktrees/coconut-edam` berada pada baseline yang sama. Bukan source canonical repository utama.

### Assets dan external dependencies

Foto JPG [muslich1.jpg](assets/images/muslich1.jpg) dipakai melalui static import `next/image` pada Home/About dengan alt nama pemilik. [muslich1.png](assets/images/muslich1.png) tersedia tetapi tidak ditemukan sebagai import page. [app/favicon.ico](app/favicon.ico) tersedia. `public/` memuat lima SVG bawaan: file, globe, next, vercel, window; tidak ditemukan referensi penggunaannya pada page portfolio atau PDF lokal.

Dependencies eksternal runtime: Google Drive/Docs untuk evidence, GitHub/LinkedIn/Instagram untuk kanal sosial. Font memakai `next/font/google`, sehingga build dapat memerlukan pengambilan font; font production disajikan sebagai asset Next. Domain Vercel melayani production. Ketersediaan eksternal bukan jaminan build atau bukti primer.

## Current Content dan Model Data

### Fakta yang tampil, bukan hasil verifikasi dokumen primer

| Fakta | Nilai/kondisi di source | Lokasi / batas verifikasi |
|---|---|---|
| Pemilik dan positioning | Muslich Wahyu Romadhon; Vocational IT Educator | Home, About, layout/footer; juga dikonfirmasi instruksi pemilik |
| Pendidikan | S1 Pendidikan Teknologi Informasi, UNESA; studi 2020–2025 | About, WorkStudiesToggle; ijazah/transkrip belum diperiksa |
| PPG | UNESA, 2026—Sekarang; PPLG; praktik XI RPL SMK Negeri 1 Surabaya | About, WorkStudiesToggle, refleksi; nomenklatur resmi perlu sumber primer |
| IPK | 3.78 pada Studies | WorkStudiesToggle; transkrip belum diperiksa |
| Asal | Desa Wonosari, Kediri; SMK Negeri 2 Kota Kediri/TKJ | About; jangan memperluas detail biografi tanpa sumber |
| Pengalaman | Teacher Intern SMK Negeri 1 Surabaya (2025—Sekarang), Teacher & Admin Lab SMKS Tunas Bangsa Pare (2025—Sekarang), Teacher Intern SMK Negeri 1 Kediri (2023), Fullstack Developer Intern Diskominfo (2023) | WorkStudiesToggle; instansi Diskominfo tidak menyebut kota/kabupaten; jangan menambah jurisdiksi |
| Temporal | Timeline About: Januari–Mei 2026, semua berlabel selesai; beberapa pengalaman masih “Sekarang” | Jangan mengubah status otomatis dari tanggal kalender; perlu konfirmasi pemilik |
| Filosofi | Logic First, Syntax Later; membaca error/log sebagai proses belajar | Refleksi PPL/Akhir; belum menjadi kalimat utama hero |
| Kontak | GitHub `muslichwr`, LinkedIn `muslich-wahyu-romadhon`, Instagram `mumussyy` | Home/footer; belum ada form, email, telepon, atau route kontak |

Dokumen lama mencatat identifier mahasiswa pada header LK 2. Header/identifier tersebut tidak ditemukan dalam source aktif; jangan memulihkannya sebagai kebutuhan baru. Dokumen lama juga mengklaim beberapa fakta telah CONFIRMED; audit saat ini membedakan keberadaan teks dari verifikasi primer.

### Model aktual

| Model/source | Fields penting | Dampak perubahan |
|---|---|---|
| `ArtifactCardProps`, ArtifactCard | title, cycle, techTags, pedagogyTags, summary `{problem, action, evidence, result, reflection}`, context, optional theoryIntro, theories `{name, description}`, strengths, weaknesses, adjustments, downloads `{label, href}`, optional index | Content berasal dari `artifacts` pada page Artefak; thumbnail/evidence preview belum tersedia; summary hasil berasal dari narasi, bukan pengukuran baru |
| `TeachingCycle`, page Penilaian | cycle, label, rawScore, rawMaxScore, overallScore, highlight, metrics `{metric, icon, score, maxScore}` | Overall score tersimpan eksplisit, bukan dihitung otomatis dari rawScore; perubahan harus menjaga konsistensi konversi |
| `TimelineEntry`, WorkStudiesToggle | period, role, institution, description, icon, iconColor | Array workEntries/studiesEntries terpisah dari timeline PPG About; periksa semua narasi terkait |
| `CourseData`, RefleksiMatkulClient | tabLabel, title, lk2PdfHref `string\|null`, sections, artifacts, optional crossLink/devNote | Default tab index 0; default enam course Semester I dengan URL terisi; prop courses memasok lima course Semester II; PSE dan PMAL masing-masing memiliki enam section terisi dan empat artefak, PPL Mandiri memiliki enam section terisi serta tujuh artefak tanpa URL (LK 3, empat LK 4, LK 1, LK 2); Pendidikan Inklusi memiliki enam section terisi dan empat artefak tanpa URL; Projek Kepemimpinan memiliki enam section terisi dan empat artefak tanpa URL; seluruh lk2PdfHref null |
| `ReflectionSection` | fourCKey connection/challenge/concept/change/artefak/kesimpulan, title, optional question/content/subItems | Semua section accordion default tertutup; subItems memuat label/question/content |
| `CourseArtifact` | label, href `string\|null` | URL kosong/null menghasilkan label “Tautan belum tersedia”, bukan link palsu |
| Data inline lainnya | Karakter guru, kompetensi, strengths/weaknesses/RTL, timelineSteps, challenges, guruValues, supportLinks, teaser siklus | Tidak ada content registry bersama; perubahan berisiko menyebabkan perbedaan antarpages |

`renderContent()` membagi paragraf dengan dua newline dan menandai string `[CONDITION: ...]`; bukan markdown renderer. Tidak ditemukan placeholder tersebut dalam data content aktif, `href: null`, atau URL evidence `#`. Komentar ArtifactCard yang menyarankan `#` sebagai placeholder bukan perilaku yang harus dilestarikan; jangan membuat tautan evidence palsu.

### Siklus praktik

| Siklus | Cakupan dalam narasi | Analisis yang tersedia |
|---|---|---|
| 1, Minggu 5–8 | Ubuntu Server/VirtualBox, konfigurasi IP, SSH/PuTTY, Apache2 | Variasi ifupdown/netplan, Network Unreachable, tutor sebaya, waktu troubleshooting |
| 2, Minggu 9–12 | PHP/MySQL/Composer/Laravel, Nginx/PHP-FPM, BIND9 | Beban materi, permission/APP_KEY, versi paket/socket, named-checkzone, DNS klien |
| 3, Minggu 13–15 | Git/GitHub/PAT, git pull, htop/netstat, demonstrasi server | SSH key/context switching, checklist, artikulasi teknis, peer evaluation; refleksi akhir juga menyebut Apache Benchmark |

Label ringkas antarpages bervariasi tetapi merujuk siklus yang sama. Istilah Laravel/PHP/Nginx di sini adalah **materi ajar**, bukan stack aplikasi portfolio. Diagram disebut dalam narasi; asset diagram/artefak siswa/before-after tidak ditemukan di repository lokal. Ketersediaannya dalam dokumen eksternal belum diperiksa.

### Penilaian baseline

Sumber: `lampiran7Cycles`/`lampiran8Cycles` di page Penilaian. Semua rawMaxScore = 80; konversi `rawScore / 80 × 100`. OverallScore dan submetrics disalin dari kode; belum dibandingkan dengan seluruh scan instrumen.

| Instrumen | Siklus | Raw / 80 | Konversi / 100 | Delta dari siklus sebelumnya |
|---|---|---|---|---|
| Lampiran 7 | 1 | 67 | 83,75 | — |
| Lampiran 7 | 2 | 67 | 83,75 | 0 |
| Lampiran 7 | 3 | 68 | 85,00 | +1,25 |
| Lampiran 8 | 1 | 67 | 83,75 | — |
| Lampiran 8 | 2 | 71 | 88,75 | +5,00 |
| Lampiran 8 | 3 | 69 | 86,25 | −2,50 |

Submetric L7 (Identitas/Kompetensi; Materi/Media; Skenario; Penilaian): S1 `87.5 / 85.71 / 79.17 / 83.33`; S2 `100 / 82.14 / 79.17 / 75`; S3 `93.75 / 85.71 / 75 / 91.67`.

Submetric L8 (Membuka; Kegiatan Inti; Menutup; Penunjang): S1 `75 / 88.64 / 75 / 80`; S2 `100 / 81.82 / 100 / 95`; S3 `100 / 88.64 / 75 / 85`.

**CURRENT STATE:** L8 menggunakan narasi “dinamika”, delta negatif, warna amber untuk penurunan; overall delta S1→S3 +2,50. **ISSUE:** ikon TrendingUp tetap dipakai ketika delta negatif. Jangan menyamakan submetric dengan rata-rata aritmetika untuk menghitung overall; bobot instrumen primer belum diverifikasi.

### Refleksi mata kuliah dan pemetaan akademik

| Tab | Judul source aktif | Supporting artifacts | Catatan |
|---|---|---|---|
| MK 1 | Filosofi Pendidikan dan Pendidikan Nilai | 3 | Narasi nilai/pendidikan dan Ki Hadjar Dewantara |
| MK 2 | Pemahaman tentang Peserta Didik dan Pembelajaran | 4 | Salah satu resource berlabel profiling 34 siswa X RPL; jangan menyamakan populasi ini dengan XI RPL PPL |
| MK 3 | Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK | 5 | Keselarasan tujuan/aktivitas/asesmen, UbD, WRL, DUP/UDL |
| MK 4 | Praktik Pengalaman Lapangan (PPL) Terbimbing | 4 | Cross-link ke Artefak; URL LK 4 berbeda dari page Artefak |
| MK 5 | Pola Pikir Bertumbuh (Growth Mindset) | 3 | Resource berlabel “Aku Belum Berhasil, Bukan Tidak Berhasil” tersedia; klaim NOT_PRESENT pada docs lama sudah tidak cocok |
| MK 6 | Pengembangan Kebugaran Jasmani | 5 | Docs lama mencatat konfirmasi pemilik sebagai elective; catat sebagai jejak historis, bukan verifikasi transkrip baru |

Setiap course memiliki satu LK 2, empat bagian 4C, Analisis Artefak Pendukung dengan tiga subitems, dan Kesimpulan Mata Kuliah. Total 24 supporting artifacts + 6 LK 2 = 30 URL pada komponen ini. Semua URL terisi; itu tidak menjamin file publik/valid.

Pertanyaan yang benar-benar tersimpan di source (penomoran 1–4 di UI):

1. Connection: “Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?”
2. Challenge: “Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?”
3. Concept: “Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?”
4. Change: “Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?”

Analisis artefak menjawab artefak yang dipilih, alasan pemilihan, dan bagian yang mendukung refleksi. Pertahankan hubungan **Artefak → Alasan → Bagian Pendukung → Claim Refleksi** saat perubahan; external link tidak menggantikan analisis.

**CURRENT STATE — riwayat:** `git show 4c043ef:docs/RUBRIC.md` mencatat CPMK analisis perangkat/teori/kendala/penilaian/refleksi, E-Portfolio 2, serta LK 2 dengan bobot 50 untuk kelengkapan 4C dan 50 untuk kekuatan artefak. Nama kategori historis mencakup Peserta Didik dan Pemahamannya serta Mata Kuliah Selektif/Elektif. Instrumen resmi/LMS/transkrip belum diperiksa ulang. Status COMPLETE, CONFIRMED, “Gap: None”, serta angka bobot tersebut **bukan sertifikasi kepatuhan akademik saat ini**. Pertahankan catatan sebagai kebutuhan validasi Phase 2, bukan requirement rubrik baru yang dianggap final.

## Referensi Akademik

Inventory berikut mencatat yang digunakan kode, bukan bibliography terverifikasi. Tahun adalah tahun yang tertulis pada source; jangan melengkapi tahun/DOI dengan tebakan.

| Teori/sumber | Author/year yang tertulis | Lokasi | Kebutuhan verifikasi |
|---|---|---|---|
| Zone of Proximal Development | Vygotsky (1978) | Artefak S1; konsep MK 2 | Identitas publikasi dan hubungan scaffolding/tutor sebaya |
| Model 5E dalam Asesmen | Abell & Volkmann (2006) | Artefak S1 | Bedakan penerapan asesmen 5E dari pencipta model |
| Diferensiasi Pembelajaran | Tomlinson (2000) | Artefak S1; About | Pastikan atribusi/tahun; jangan mengubah profil belajar menjadi kategori gaya belajar tetap |
| Cognitive Load Theory | Sweller (1988) | Artefak S2 | Bibliografi dan batas klaim dampak pembagian materi |
| Transfer Belajar | Perkins & Salomon (1992) | Artefak S2 | Publikasi/tahun dan interpretasi verifikasi lingkungan |
| Mediated Learning Experience | Feuerstein, tanpa tahun | Artefak S2 | Tahun/karya belum ditentukan; jangan menyamakan konsultan sebaya dengan penerapan model formal tanpa dasar |
| Metacognition | Flavell (1979) | Artefak S3 | Publikasi dan penggunaan checklist |
| Flow Theory | Csikszentmihalyi (1990) | Artefak S3 | Engagement yang dinarasikan tidak otomatis membuktikan state Flow |
| Comprehensible Output Hypothesis | Swain (1985) | Artefak S3 | Source menyebut analogi komunikasi teknis; jangan mengklaim validasi lintas domain |
| The Courage to Teach | Parker J. Palmer, tanpa tahun pada UI | About | Identitas karya, edisi, dan akurasi kutipan |
| Refleksi tindakan mengajar dan respons belajar | Lefebvre et al. (2023) | About | Identitas publikasi; tidak ada DOI/link di source |
| Pemikiran pendidikan/nilai | Ki Hadjar Dewantara | MK 1 | Narasi/artefak sumber tanpa citation publikasi lengkap |
| Framework/konsep pembelajaran | Konstruktivisme, Humanisme, CASEL, Mastery Climate, TaRL, Constructive Alignment, UbD, WRL, DUP/UDL, Growth Mindset | RefleksiMatkulClient | Konsep yang disebut bukan bibliography lengkap; jangan menambahkan author/year yang tidak ada di kode |

**DECISION:** jangan membuat referensi/DOI baru atau menganggap status VERIFIED pada docs lama sebagai hasil audit baru. Bibliographic verification (identitas publikasi) dan application verification (ketepatan penggunaan) harus dipisahkan. Bibliografi lengkap, source primer, dan konsistensi citation adalah **PROPOSED** pada FR-ACADEMIC-002.

## Functional Requirements

### FR-HOME-001

- **Nama:** Homepage baseline.
- **Deskripsi:** Menyajikan identitas educator dan pintu masuk portfolio.
- **Rationale:** Visitor mengenali pemilik dan dapat membuka profil/praktik.
- **Expected behavior:** Hero foto/nama/positioning, Pembelajaran Mendalam, empat karakter guru, Work/Studies, tiga teaser, CTA About/Artefak/Refleksi Akhir, sosial.
- **Acceptance criteria:** Seluruh bagian dan href sesuai source; default Work terlihat; semua teaser menuju `/artefak`; alt foto nama pemilik.
- **Status:** Implemented.
- **Related page/component:** Home, WorkStudiesToggle, Navbar/Footer.
- **Verification:** Source dan HTML production diperiksa; pergantian tab runtime belum diuji berhasil.

### FR-HOME-002

- **Nama:** Lapisan positioning profesional.
- **Deskripsi:** Mempercepat alur siapa → keahlian → cara mengajar → bukti.
- **Rationale:** Menjawab kebutuhan profesional tanpa kehilangan PPG.
- **Expected behavior:** Ringkasan kemampuan relevan, filosofi, CTA utama praktik/case study; detail akademik tetap dapat dijangkau.
- **Acceptance criteria:** Copy berdasarkan fakta/evidence yang tersedia; CTA menuju tujuan valid yang disetujui; reviewer dapat mengidentifikasi identitas, bidang, pendekatan, dan bukti dari landing.
- **Status:** Proposed.
- **Related page/component:** Home, teaser, WorkStudiesToggle; desain target di PRD/DESIGN.
- **Verification:** Arah pemilik; layout/copy/tujuan detail belum final.

### FR-NAV-001

- **Nama:** Navigasi baseline.
- **Deskripsi:** Menghubungkan tiga belas route utama dan subset footer.
- **Rationale:** Semua area akademik/profesional dapat ditemukan.
- **Expected behavior:** Desktop Home/About dan dropdown semester (FR-NAV-003/FR-REFLECTION-005), menu mobile tiga belas link, active match pada tujuan paling spesifik; klik link mobile menutup menu. E-Portfolio 2 berada pada Semester 2 (OWN-020).
- **Acceptance criteria:** Semua href internal resolve; `/refleksi` tidak aktif pada `/refleksi-akhir`; menu tersedia di bawah breakpoint md.
- **Status:** Implemented.
- **Related page/component:** Navbar, Footer.
- **Verification:** Source dan tujuh HTTP 200 pada baseline. Pemeriksaan mobile lokal 19 Oktober 2026 pada 390 x 844 dan 360 x 800 memverifikasi menu saat awal/scroll, tujuh link terlihat, serta navigasi About menutup menu. Header transparan di luar pill tidak lagi menangkap tap konten; geometri navigasi dipertahankan. Rincian ada pada verifikasi navigasi mobile.

### FR-NAV-002

- **Nama:** Evaluasi information architecture.
- **Deskripsi:** Menilai label dan pengelompokan sesuai dua audiens.
- **Rationale:** Tiga istilah refleksi berdekatan dan label bahasa bercampur.
- **Expected behavior:** Usulan pemetaan navigasi tanpa menganggap enam label sebagai route final.
- **Acceptance criteria:** Peta current→target, dampak konten/URL, journey kedua audiens, serta keputusan pemilik tercatat sebelum perubahan navigasi/route.
- **Status:** Proposed.
- **Related page/component:** Navbar/Footer, seluruh halaman.
- **Verification:** Evaluasi IA menyeluruh belum selesai; keputusan grouping desktop terbatas tercatat di FR-NAV-003 dan OWN-007.

### FR-NAV-003

- **Nama:** Grouping semester pada desktop.
- **Deskripsi:** Home/About tetap langsung; Semester 1 dan Semester 2 membuka panel kompak dengan judul, subtitle, deskripsi link, dan nomor urut.
- **Rationale:** Instruksi pemilik mengelompokkan konten semester tanpa mengubah URL atau desain keseluruhan.
- **Expected behavior:** Semester 1 menurut OWN-008 menuju `/artefak`, `/penilaian`, `/refleksi`, `/refleksi-akhir`, `/refleksi-matkul`; Semester 2 menuju `/refleksi-matkul/semester-2` (OWN-008/FR-REFLECTION-005), `/e-portfolio-1` (OWN-010/FR-PORTFOLIO-001), `/refleksi-program-ppg` (OWN-012/FR-REFLECTION-006), dan `/identifikasi-diri` (OWN-014/FR-REFLECTION-007). CURRENT STATE berbeda pada penempatan Semester I seperti dicatat di Current Architecture; task OWN-012 tidak mengubah grouping lama atau memutuskan konflik tersebut. Satu panel terbuka; toggle, memilih tujuan, klik di luar, fokus keluar, atau Escape menutup panel. Parent aktif mengikuti child route; child aktif ditandai visual dan `aria-current`. Home/About mempertahankan active match.
- **Acceptance criteria:** Pada desktop 1440px semua tiga belas tujuan bekerja, parent/child aktif benar, panel menutup saat memilih tujuan, judul/subtitle/deskripsi sesuai instruksi, serta styling mengikuti floating pill gelap. Grouping mengikuti floating pill yang ada; route baru Semester II diatur FR-REFLECTION-005. Mobile mempertahankan pola link langsung dengan dua tujuan refleksi semester yang jelas; tidak ada dependency baru atau perubahan isi Semester I.
- **Status:** Implemented.
- **Related page/component:** [Navbar.tsx](components/layout/Navbar.tsx); OWN-007; Phase 3.
- **Verification:** Pemeriksaan desktop dan tooling task navigasi dicatat pada bagian verifikasi navigasi; izin terbatas ini tidak mengimplementasikan proposal IA lainnya.

### FR-ABOUT-001

- **Nama:** Profil profesional dan akademik.
- **Deskripsi:** Menyajikan narasi, visi, kompetensi, role model, dan timeline.
- **Rationale:** Memberi konteks pribadi serta pendidikan/keahlian.
- **Expected behavior:** Profil/foto, asal/pendidikan, inspirasi/tujuan, pendekatan, empat karakter, lima kompetensi, Palmer, timeline PPG.
- **Acceptance criteria:** Nama/pendidikan/siklus konsisten maknanya dengan source terkait; CTA Artefak/Mata Kuliah valid; biografi tidak diperluas tanpa evidence.
- **Status:** Implemented.
- **Related page/component:** About, WorkStudiesToggle untuk cross-check pengalaman.
- **Verification:** Source dan HTML production; ijazah/IPK/pengalaman/kutipan belum diverifikasi primer.

### FR-CASE-001

- **Nama:** Analisis tiga siklus praktik.
- **Deskripsi:** Menampilkan konteks, teori, keberhasilan, kendala, penyesuaian, dan lampiran.
- **Rationale:** Menjaga kedalaman analisis PPL.
- **Expected behavior:** Tiga ArtifactCard berurutan, empat dokumen per siklus, banner komponen analisis.
- **Acceptance criteria:** Cakupan tiap siklus sesuai tabel baseline; semua bagian analisis tersedia; 12 tautan terisi; banner expand/collapse mempertahankan isi.
- **Status:** Implemented.
- **Related page/component:** Artefak, ArtifactCard, CpmkBanner.
- **Verification:** Source/HTML; keaslian hasil belajar, runtime banner, dan klaim pemenuhan CPMK belum disertifikasi.

### FR-CASE-002

- **Nama:** Ringkasan teaching case study.
- **Deskripsi:** Menambahkan inti kasus yang mudah dipindai di atas detail.
- **Rationale:** Pembaca profesional memahami praktik tanpa harus membaca seluruh analisis.
- **Expected behavior:** Problem → Action → Evidence → Result → Reflection atau struktur ekuivalen, dengan detail akademik dipertahankan.
- **Acceptance criteria:** Tiap kasus memiliki masalah/tindakan/bukti/hasil/refleksi nyata; evidence yang belum tersedia diberi kebutuhan; ringkasan tidak mengubah proposal tindakan menjadi hasil yang sudah terjadi.
- **Status:** Implemented.
- **Related page/component:** Artefak, ArtifactCard; teaser Home tidak diubah dalam task ini.
- **Verification:** Tiga objek summary dirender sebagai Ringkasan Kasus (Masalah/Tindakan/Bukti/Hasil/Refleksi) setelah tags, sebelum konteks. Seluruh detail dan URL lama dipertahankan. Hasil berasal dari narasi, bukan pengukuran baru; dokumen eksternal hanya disebut sebagai pendukung dan isinya belum diverifikasi. Desktop 1440px serta TypeScript/lint/build diperiksa pada task ini.

Penelusuran ringkasan ke source lama [app/artefak/page.tsx](app/artefak/page.tsx):

| Siklus | Masalah | Tindakan | Bukti | Hasil | Refleksi |
|---|---|---|---|---|---|
| 1 | weaknesses: Network Unreachable, versi OS, waktu refleksi | theories ZPD dan strengths: panduan CLI/tutor sebaya | downloads: Modul Bab 1–2, LK 4 S1, L7/L8 | strengths: mini-presentasi web statis dan Putty | adjustments/weaknesses: dua jalur konfigurasi, identifikasi OS, rubrik formatif |
| 2 | weaknesses: kepadatan materi, permission/APP_KEY, paket/socket, DNS klien | theories/strengths: unit kecil, checkpoint, triase, verifikasi PHP/socket, named-checkzone | downloads: Modul Bab 3–5, LK 4 S2, L7/L8 | strengths/weaknesses: demo domain lokal dan kendala DNS Windows Host | adjustments: dua pertemuan, variasi paket, panduan DNS klien |
| 3 | weaknesses: SSH key, DNS klien, penjelasan arsitektur | weaknesses/theories: peralihan HTTPS/PAT, pre-demo checklist, peer explanation | downloads: Modul Bab 6–7, LK 4 S3, L7/L8 | strengths/weaknesses: demo mandiri dalam narasi dan keterbatasan penjelasan lisan | adjustments/weaknesses: standardisasi checklist, panduan bergambar, komunikasi teknis lebih awal |

### FR-EVIDENCE-001

- **Nama:** Akses dokumen baseline.
- **Deskripsi:** Memberikan tautan modul, refleksi, penilaian, LK 2, dan artefak.
- **Rationale:** Mendukung penelusuran evidence akademik.
- **Expected behavior:** URL aktual di inventory; L7/L8 digunakan bersama Artefak/Penilaian; course memisahkan LK 2 dari supporting artifacts dan menampilkan fallback untuk link kosong.
- **Acceptance criteria:** URL/label sesuai source; tidak memakai `#` sebagai evidence; fallback tidak clickable; perubahan URL ditelusuri ke semua lokasi penggunaan.
- **Status:** Implemented.
- **Related page/component:** ArtifactCard, Penilaian, FormalLk2Card, ArtifactEvidenceItem.
- **Verification:** Seluruh URL diekstrak dari source; tiga contoh mendapat HTML 200, bukan bukti seluruh file publik/autentik. Direct download lintas origin belum diverifikasi.

### FR-EVIDENCE-002

- **Nama:** Traceability dan presentasi evidence.
- **Deskripsi:** Memetakan claim ke dokumen/bagian/artefak yang mendukungnya.
- **Rationale:** Narasi kuat harus dapat diperiksa, bukan hanya dipercaya.
- **Expected behavior:** Evidence tersedia ditonjolkan; kebutuhan siswa/rubrik/log/diagram/before-after dicatat bila belum tersedia.
- **Acceptance criteria:** Setiap claim hasil yang diprioritaskan menunjuk evidence dan bagian relevan atau keterbatasan; hubungan LK 4 lintas page diverifikasi; akses visitor diperiksa; tidak ada evidence baru rekaan.
- **Status:** Proposed.
- **Related page/component:** Artefak, Penilaian, Refleksi Akhir/Mata Kuliah.
- **Verification:** Belum ada pemetaan lengkap terhadap isi dokumen primer.

### FR-ASSESSMENT-001

- **Nama:** Rekap nilai baseline.
- **Deskripsi:** Menampilkan raw score, skala 100, submetrics, dan dokumen L7/L8.
- **Rationale:** Transparansi perkembangan rancangan/praktik.
- **Expected behavior:** Nilai sesuai tabel baseline, locale id-ID, ScoreBar lebar score/maxScore, delta antar-siklus dan total.
- **Acceptance criteria:** Enam overall score cocok dengan raw/80×100; seluruh submetrics sesuai source; L8 turun −2,50 pada S3; enam resource terhubung.
- **Status:** Implemented.
- **Related page/component:** Penilaian, ScoreBar, formatScore/formatDelta.
- **Verification:** Source dan HTML; belum semua nilai dibandingkan dengan scan instrumen.

### FR-ASSESSMENT-002

- **Nama:** Representasi dinamika nilai yang jujur.
- **Deskripsi:** Mempertahankan naik/turun dan menyelaraskan semua indikator dengan arah nilai.
- **Rationale:** Nilai turun adalah bagian refleksi, bukan data yang disembunyikan.
- **Expected behavior:** Narasi perkembangan, tanda/label/ikon koheren untuk positif, nol, negatif; interpretasi terpisah dari angka.
- **Acceptance criteria:** L8 tetap 83,75→88,75→86,25; delta negatif tidak diikonkan naik; makna tidak hanya bergantung warna; tidak membuat penjelasan penyebab tanpa evidence.
- **Status:** Partial.
- **Related page/component:** Penilaian; ISSUE-004.
- **Verification:** Narasi/delta sudah ada; TrendingUp tetap muncul saat negatif.

### FR-REFLECTION-001

- **Nama:** Refleksi PPL dan RTL.
- **Deskripsi:** Menyajikan visi, kekuatan, kelemahan, dan tindak lanjut.
- **Rationale:** Memperlihatkan evaluasi jujur proses mengajar.
- **Expected behavior:** Filosofi, tiga strength, tiga weakness, tiga RTL, CTA Refleksi Akhir.
- **Acceptance criteria:** Kelemahan/manajemen waktu/materi tidak dihapus demi branding; RTL tetap dibedakan dari tindakan yang telah selesai; CTA valid.
- **Status:** Implemented.
- **Related page/component:** Refleksi PPL.
- **Verification:** Source dan HTML; realisasi RTL belum diperiksa.

### FR-REFLECTION-002

- **Nama:** Refleksi akhir PPL.
- **Deskripsi:** Mensintesis perjalanan, tantangan, feedback, filosofi, dan nilai guru.
- **Rationale:** Menjelaskan pembelajaran profesional dari tiga siklus.
- **Expected behavior:** Enam tahap perjalanan, empat tantangan/solusi, umpan balik GP, filosofi, empat nilai, empat tautan pendukung internal.
- **Acceptance criteria:** Semua area tetap tersedia; route pendukung valid; kutipan dan claim hasil tidak ditambah/diperkuat tanpa sumber.
- **Status:** Implemented.
- **Related page/component:** Refleksi Akhir.
- **Verification:** Source dan HTML; autentisitas kutipan GP belum diverifikasi.

### FR-REFLECTION-003

- **Nama:** Enam refleksi mata kuliah 4C.
- **Deskripsi:** Menampilkan narasi course, analisis, kesimpulan, LK 2, dan artefak.
- **Rationale:** Mempertahankan bentuk refleksi website serta dokumen formal.
- **Expected behavior:** Enam tab, enam section per course, tiga subitems analisis, satu LK 2/course; default MK 1, accordion tertutup.
- **Acceptance criteria:** Enam course/30 URL cocok source; semua pertanyaan dan sintesis tersedia ketika dibuka; pergantian tab menampilkan course benar; fallback link kosong jelas; PPL cross-link menuju Artefak.
- **Status:** Implemented.
- **Related page/component:** Refleksi Mata Kuliah, RefleksiMatkulClient.
- **Verification:** Source dan default SSR; seluruh interaksi course belum diuji berhasil; kepatuhan instrumen resmi belum diverifikasi.

### FR-REFLECTION-004

- **Nama:** Pengorganisasian refleksi dan konsistensi konteks.
- **Deskripsi:** Mengevaluasi label/entry point dan perbedaan semester tanpa kehilangan isi.
- **Rationale:** Membantu visitor membedakan refleksi diri, sintesis PPL, dan course.
- **Expected behavior:** Tujuan tiap area jelas; semester/nomenklatur ditentukan dari evidence/pemilik, bukan tebakan.
- **Acceptance criteria:** Pemetaan seluruh konten lama tersedia; semester metadata/body konsisten setelah dikonfirmasi; penggabungan/penggantian route mendapat keputusan pemilik dan rencana kompatibilitas.
- **Status:** Proposed.
- **Related page/component:** Tiga route refleksi, Navbar; ISSUE-006/007.
- **Verification:** Belum ada keputusan arsitektur refleksi final.

### FR-REFLECTION-005

- **Nama:** Struktur refleksi mata kuliah Semester II.
- **Deskripsi:** Menyiapkan lima mata kuliah Semester II di route baru tanpa mengubah isi Semester I.
- **Rationale:** Pengisian refleksi dan evidence dilakukan bertahap berdasarkan konten nyata dari pemilik.
- **Expected behavior:** `/refleksi-matkul` tetap enam course Semester I. `/refleksi-matkul/semester-2` memuat Pembelajaran Sosial Emosional; Pembelajaran Mendalam dan Asesmen Lanjut; PPL Mandiri; Projek Kepemimpinan; Pendidikan Inklusi (nama elektif dikonfirmasi melalui OWN-009). Tiap course memiliki Connection, Challenge, Concept, Change, Analisis Artefak Pendukung, dan Kesimpulan Mata Kuliah. Isi/dokumen/artefak awal Belum tersedia, tanpa href palsu. Pengisian PSE diotorisasi pemilik pada 19 Oktober 2026: salin refleksi dari seluruh delapan halaman `artifacts/3.3. Pembelajaran Sosial Emosional.pdf` tanpa perubahan isi akademik; empat artefak memakai URL yang telah tersedia dan diverifikasi. Pada pengisian PSE, empat course lain serta Semester I dipertahankan. Pengisian PMAL berikutnya diotorisasi pemilik dari enam halaman `artifacts/3.3. Pembelajaran Mendalam dan Asesmen Lanjut.pdf`, dengan perbaikan typo/format halaman 5 tanpa perubahan substansi; PSE, Semester I, dan tiga course lainnya dipertahankan.
- **Acceptance criteria:** Pengisian PPL Mandiri memakai seluruh naskah revisi pemilik yang kini berada pada `artifacts/3.3. PPL Mandiri.pdf` (tujuh halaman), tanpa perubahan substansi: empat siklus mandiri menjadi fokus dan kendala berulang sampai siklus terakhir tetap dinyatakan. LK 3 dan empat LK 4 menjadi artefak utama, LK 1/2 pendukung; URL hanya dipakai bila tersedia dan terverifikasi. PSE, PMAL, Semester I, dan course lain dipertahankan. Desain memakai renderer yang sama; lima tab dan enam accordion/course bekerja di 1440px/390px tanpa overflow. Pengisian Pendidikan Inklusi diotorisasi pada 20 Oktober 2026 dari seluruh tujuh halaman `artifacts/3.3. Pendidikan Inklusi.pdf`: empat jawaban 4C, tiga jawaban analisis, dan kesimpulan disalin tanpa perubahan kata; hanya pemisahan paragraf dirapikan. Pemilik mengonfirmasi agar Connection yang identik dengan jawaban analisis pertama tetap disalin persis. Artefak 2.D, 3.D, 4.A, dan 4.E memakai status tautan belum tersedia karena URL yang sesuai belum tersedia dan terverifikasi. Semester I, PSE, PMAL, PPL Mandiri, dan Projek Kepemimpinan dipertahankan. Data dan 30 URL Semester I dipertahankan. Dropdown Semester 1 menuju refleksi lama, Semester 2 menuju route baru; mobile membedakan keduanya dan penanda aktif tidak ganda.
- **Acceptance tambahan (OWN-013, 28 Oktober 2026):** Projek Kepemimpinan diisi dari seluruh delapan halaman `artifacts/3.3. Proyek Kepemimpinan.pdf`: empat jawaban 4C, tiga analisis, dan satu kesimpulan, dengan kata, sudut pandang, serta paragraf dipertahankan. Peran penulis adalah Backend Developer Ruang BK di SMK Negeri 1 Surabaya; hasil tim tidak diatribusikan sebagai pekerjaan individu. Empat artefak adalah LK 1.11, Laporan Akhir Projek Kepemimpinan Ruang BK (draf kerja; dokumentasi hingga 21 Oktober 2026), Tugas 1.1 Individu, dan Tugas 2.1 Individu. Semuanya `href: null` karena URL belum terverifikasi; LK 2 juga tetap null. Jangan mengklaim adopsi rutin atau peningkatan layanan terukur, atau mengekspos data/sistem sensitif. Course lain, Semester I, desain enam accordion, dan navigasi dipertahankan.
- **Status:** Implemented.
- **Related page/component:** Halaman Semester II, RefleksiMatkulClient, Navbar; OWN-008; Phase 3.
- **Verification:** Build dan pemeriksaan browser lokal dicatat pada bagian verifikasi Semester II; verifikasi struktur tersebut mendahului pengisian PSE; lihat catatan pengisian PSE, PMAL, PPL Mandiri, Pendidikan Inklusi, dan Projek Kepemimpinan berikut.

### FR-REFLECTION-006

- **Nama:** Refleksi Program PPG Secara Keseluruhan.
- **Deskripsi:** Halaman khusus Tahap 4 di `/refleksi-program-ppg`, terpisah dari refleksi akhir PPL.
- **Rationale:** Menyajikan tiga respons resmi LK 3 tentang keseluruhan pengalaman PPG Semester I dan II.
- **Expected behavior:** Minimal hero, daftar isi tiga anchor, bagian 01 Pandangan tentang Pendidikan di Indonesia, 02 Menjadi Guru Profesional, 03 Rencana Tindak Lanjut. Salin jawaban dan paragraf verbatim; tiga tindakan lanjutan terlihat terpisah. Satu link LK 3 hanya bila URL terverifikasi tersedia; saat ini tidak ada URL. Akses melalui Semester 2 dan menu mobile.
- **Acceptance criteria:** Teks cocok DOCX pemilik; tidak membuat pengalaman, perubahan filosofi, atau link. Typography/zinc/layout mengikuti portfolio, tanpa kartu, gradient/glow, media atau animasi baru. Navigasi/anchor/keyboard, desktop 1440 x 1000 dan mobile 390 x 844 diperiksa; seluruh route lama dipertahankan.
- **Status:** Implemented.
- **Related page/component:** [page.tsx](app/refleksi-program-ppg/page.tsx), Navbar; OWN-012; Phase 3.
- **Verification:** Sumber `artifacts/4.2. Unggah Hasil Refleksi Pengalaman Belajar Selama Mengikuti Program PPG (LK 3).docx`, ditunjuk pemilik. Jawaban terdiri dari satu paragraf pendidikan, satu paragraf guru profesional, dan tiga paragraf RTL. Hasil tooling/browser dicatat dalam verifikasi task berikut.

### FR-REFLECTION-007

- **Nama:** Visi Pribadi / Identifikasi Diri (LK 1).
- **Deskripsi:** Halaman Semester II `/identifikasi-diri`, Seminar PPG Tahap 1.
- **Rationale:** Menyajikan pandangan awal penulis sebelum Seminar PPG, terpisah dari refleksi akhir Tahap 4.
- **Expected behavior:** Minimal Hero + Linear Sections seperti `/refleksi-program-ppg`: eyebrow SEMINAR PPG / TAHAP 1, judul Visi Pribadi, pengantar faktual, tiga paragraf visi pendidikan Indonesia, tiga paragraf visi calon guru, pengantar dan tujuh langkah dalam ordered list. Tiga anchor native, dokumen pendukung hanya ditautkan bila file/URL terverifikasi, tautan teks ke Tahap 4. Navbar Semester 2 dan menu mobile memuat Visi Pribadi tanpa top-level baru.
- **Acceptance criteria:** Naskah `artifacts/visi-pribadi-lk1-konten.md` verbatim; tidak menambah pencapaian/perubahan filosofi atau URL. Typography/dark theme/spacing/navbar/footer mengikuti baseline; tanpa dependency/dekorasi/animasi baru. Build/lint serta Playwright 1440 × 1000 dan 390 × 844 memeriksa seluruh naskah, tujuh langkah, navigasi/keyboard, responsive typography, dan overflow; screenshot disimpan.
- **Status:** Implemented.
- **Related page/component:** [page.tsx](app/identifikasi-diri/page.tsx), [page.module.css](app/identifikasi-diri/page.module.css), Navbar; OWN-014; Phase 3.
- **Verification:** Sumber Markdown pemilik; PDF yang disebut naskah tidak ditemukan di workspace dan tidak ada URL publik dalam naskah. Build/lint/TypeScript berhasil; lint 0 error dan 8 warning baseline. Playwright Chromium 156.0.8078.4 pada production lokal (1440 × 1000 dan 390 × 844) memverifikasi enam paragraf, pengantar, tujuh tindakan verbatim, anchor/keyboard, menu dan tautan Tahap 4; tidak ditemukan overflow/clipping atau console/page error. Sebelas route HTTP 200. Screenshot dan rincian tersimpan di `artifacts/identifikasi-diri/README.md`; belum mencakup browser lain atau audit aksesibilitas menyeluruh.

### FR-INNOVATION-001

- **Nama:** Karya Inovasi Pendidikan (Seminar PPG Tahap 5, LK 4).
- **Deskripsi:** Route Semester II `/karya-inovasi` untuk Praktikum Integrasi Laravel dan MySQL, sasaran kelas XI RPL.
- **Rationale:** Mendokumentasikan desain pembelajaran beserta perangkat pendukung, membedakan kesiapan teknis dari efektivitas pembelajaran yang belum diuji.
- **Expected behavior:** Minimal hero dan enam bagian: Identifikasi Kebutuhan dan Tantangan, Gagasan dan Tujuan Inovasi, Riset Sederhana, Produk dan Perangkat Pendukung, Rencana Implementasi, Rancangan Evaluasi. Alur Prediksi → Telusuri → Coba → Buktikan → Jelaskan. Rencana 240 menit (30/25/40/45/45/25/30); bobot 25/35/30/10%, target ≥75 dan pembuktian/penjelasan tingkat baik sebagai ukuran yang direncanakan. Perangkat telah disiapkan secara teknis; kegiatan belum diterapkan bersama siswa.
- **Acceptance criteria:** Semua bagian sesuai Markdown pemilik dan LK 4; tidak membuat hasil kelas, skor/testimoni, atau klaim efektivitas. Lima link dokumen hanya setelah verifikasi tujuan dan akses anonim; tidak menautkan file privat atau arsip sumber yang belum ditinjau. Daftar editorial dan waktu/bobot responsif tanpa dashboard/dekorasi/animasi/dependency baru. Karya Inovasi di Semester 2/mobile; halaman lain dipertahankan. Build/lint, Playwright 1440 × 1000 dan 390 × 844, screenshot, keyboard/navigasi, serta overflow/clipping diperiksa.
- **Status:** Implemented.
- **Related page/component:** [page.tsx](app/karya-inovasi/page.tsx), [content.ts](app/karya-inovasi/content.ts), [page.module.css](app/karya-inovasi/page.module.css), Navbar; OWN-015; Phase 3.
- **Verification:** Sumber `artifacts/karya-inovasi-ppg-konten.md` dan PDF LK 4 di Drive; lima dokumen memiliki izin anyone/reader dan dapat diunduh tanpa login, dengan judul tujuan sesuai. PPT berbasis gambar diperiksa visual. Prototipe Laravel dan buku HTML belum ditautkan karena belum tersedia paket publik yang selesai ditinjau. Build, lint, dan TypeScript berhasil (lint 0 error, 9 warning baseline). Playwright Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memverifikasi enam bagian, lima tahap, total 240 menit/100%, enam anchor dan navigasi; tidak ditemukan overflow/clipping atau console/page error. Dua belas route HTTP 200. Screenshot serta batas pemeriksaan ada di `artifacts/karya-inovasi/README.md`.

### FR-PORTFOLIO-001

- **Nama:** Struktur editorial E-Portfolio 1.
- **Deskripsi:** Menyediakan halaman PPL Mandiri Semester II pada `/e-portfolio-1` dalam tahap UI/UX.
- **Rationale:** Menyiapkan wadah artefak dan analisis akademik tanpa mendahului konten nyata dari pemilik.
- **Expected behavior:** Hero Praktik Mengajar Mandiri, daftar isi enam anchor teks, bagian Perencanaan Pembelajaran, Materi Pembelajaran, Media Pembelajaran, Pelaksanaan Pembelajaran, Kegiatan Nonmengajar, Instrumen Penilaian, dan penutup Refleksi Diri. Area modul ajar/PPT/code listing/instrumen berupa placeholder teks. Bagian 04 menyediakan empat baris siklus untuk analisis berdasarkan LK 4 tanpa embed/placeholder video; analisis tertulis tidak menggantikan persyaratan video. Bagian 05 memakai carousel scroll-snap satu foto aktif dengan caption/activity dan penghitung tersinkron, tombol Previous/Next berlabel accessible, swipe native, object-contain, lazy loading slide berikutnya, tanpa autoplay/library tambahan. Navigasi disembunyikan untuk satu foto; data kosong menampilkan teks sederhana. Setiap bagian memiliki area analisis yang belum diisi. Navbar Semester 2 dan mobile menautkan halaman baru. Revisi terbatas diotorisasi OWN-011.
- **Acceptance criteria:** Identitas typography/zinc/spacing proyek dipertahankan; susunan editorial vertikal dengan variasi sesuai artefak. Tidak ada dashboard, summary cards, status badge berulang, dekorasi/animasi baru, URL/media rekaan, atau kontrol yang belum berfungsi. Enam anchor bekerja dengan keyboard dan tidak tertutup navbar; tidak ada clipping/overflow pada 1440 x 1000 dan 390 x 844. Delapan route lama, konten lama, dan footer dipertahankan. Tidak ada dependency baru, commit, deploy, atau pengisian konten akademik.
- **Status:** Implemented (struktur UI/UX historis OWN-010/011; susunan dan isi saat ini digantikan FR-PORTFOLIO-002/OWN-016).
- **Related page/component:** [page.tsx](app/e-portfolio-1/page.tsx), [photos.ts](app/e-portfolio-1/photos.ts), [NonTeachingPhotoCarousel.tsx](components/sections/NonTeachingPhotoCarousel.tsx), Navbar; OWN-010/OWN-011; Phase 3.
- **Verification:** Build/lint dan Playwright lokal dicatat pada verifikasi E-Portfolio 1; screenshot awal di `artifacts/e-portfolio-1/`, revisi OWN-011 di `artifacts/e-portfolio-1-revision/`.

### FR-PORTFOLIO-002

- **Nama:** Isi UTS E-Portfolio 1 Siklus 1.
- **Deskripsi:** Menyajikan enam bagian UTS PPL Mandiri Siklus 1 Laravel dari naskah revisi pemilik; menggantikan susunan awal FR-PORTFOLIO-001 tanpa memakai ulang makna ID tersebut.
- **Rationale:** Memisahkan bukti inti Siklus 1 dari konteks terbimbing dan siklus lanjutan, serta memperlihatkan keterbatasan kelengkapan UTS.
- **Expected behavior:** Perencanaan Pembelajaran → Materi dan Media → Pelaksanaan Praktik dan Video → Analisis Artefak dan Asesmen → Refleksi Profesional/RTL → Bukti Pendukung. Analisis mencakup konteks, tujuan, kekuatan, keterbatasan dan pedagogi. Model guru, filosofi, kelemahan serta empat tindakan/indikator dinyatakan sebagai refleksi dan rencana. LK 4 Siklus 1 utama; LK 3 dan LK 4 Siklus 2–4 berlabel pendukung. Status Modul Ajar/LKPD, video, materi/media dan asesmen asli disatukan dalam katalog; tidak membuat link/media/hasil siswa rekaan.
- **Acceptance criteria:** Naskah diadaptasi ringan tanpa mengubah klaim faktual; URL LK 3 asli dan empat URL LK 4 dipertahankan. LK 1/2 tidak ditampilkan. Hero besar, dark editorial, Navbar/Footer, route dan halaman lain dipertahankan. Enam anchor dapat diaktifkan dengan keyboard, tampilan 1440 × 1000 dan 390 × 844 terbaca; link dokumen diperiksa. Tidak ada dependency baru atau refactor shared. Kelengkapan UTS tidak diklaim sebelum rancangan asli dan video tersedia.
- **Status:** Partial (isi akademik OWN-016 diterapkan, prasyarat dokumen/video belum lengkap; susunan enam bagian digantikan FR-PORTFOLIO-003/OWN-017).
- **Related page/component:** [page.tsx](app/e-portfolio-1/page.tsx), [page.module.css](app/e-portfolio-1/page.module.css); OWN-016; Phase 3. CSS khusus route membuat navbar mobile ikut bergulir keluar layar setelah overlap teks terbukti; shared Navbar tidak diubah. Komponen carousel dan data foto lama tetap ada tanpa dirender.
- **Verification:** TypeScript/build exit 0; lint 0 error, 9 warning baseline. Playwright Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memeriksa enam anchor dengan Enter/focus-visible, 35 paragraf naskah, katalog bukti, lima URL publik dengan judul sesuai, tanpa clipping/overflow/error browser. Banner mobile ikut scroll dan About kembali fixed setelah navigasi client. Rincian dan batas ada di [folder laporan UTS lokal](artifacts/e-portfolio-1-uts/). Ini bukan sertifikasi rubrik lengkap atau audit isi ulang seluruh PDF.

### FR-PORTFOLIO-003

- **Nama:** Enam artefak Topik 3 dengan contoh sementara.
- **Deskripsi:** Menata ulang E-Portfolio 1 menjadi Perencanaan, Materi, Media, Video Pelaksanaan, Kegiatan Nonmengajar, Instrumen Penilaian; menggantikan susunan FR-PORTFOLIO-002 tanpa menghapus analisis/refleksi atau QA sebelumnya.
- **Rationale:** Menjaga enam kategori tugas sekaligus membedakan contoh format dari artefak asli Siklus 1 Laravel.
- **Expected behavior:** Enam bagian bernama Perencanaan Pembelajaran, Materi Pembelajaran, Media Pembelajaran, Video Pelaksanaan, Kegiatan Nonmengajar, Instrumen Penilaian. Narasi pendidikan menjelaskan tujuan, aktivitas peserta didik, media, kendala dan perbaikan tanpa label paragraf berulang atau kode program. Contoh format/materi/media tetap dibedakan dari artefak asli. Video hanya menampilkan area rekaman asli yang belum dilampirkan, tanpa tutorial. Instrumen contoh memakai tiga aspek pemahaman, keterampilan praktik, kemampuan menjelaskan hasil × empat tingkat indikator. Dua ilustrasi lokal/kredit dipertahankan dengan status dokumentasi nonmengajar asli yang belum tersedia, tanpa menganalisis stok foto sebagai kegiatan nyata. Refleksi penutup bersumber LK 4 Siklus 1 (OWN-019). OWN-020 memadatkan placeholder media/video, memakai dua ilustrasi horizontal, membuat navbar ikut scroll hanya di kedua portfolio pada semua lebar, dan menambah tautan E-Portfolio 2.
- **Acceptance criteria:** Enam section utama dan anchor persis kategori Topik 3; hero dan Navbar/CSS lokal OWN-016 dipertahankan. Bukti faktual LK 4 Siklus 1 tidak diperluas menjadi klaim penggunaan contoh atau hasil siswa. Tampilan tidak memuat kode program, tutorial pada bagian Video, atau jargon teknis berulang. Indikator tiga aspek jelas dan berstatus contoh. Carousel foto lokal/kredit, keyboard/swipe, tampilan 1440/390, TypeScript/lint/build diperiksa; keterbatasan dilaporkan. Tanpa dependency baru, route lain atau redesign. OWN-019 meminta hasil dilaporkan sebelum commit/push.
- **Status:** Partial (contoh dan struktur diterapkan; dokumen, video serta bukti asesmen asli belum lengkap).
- **Related page/component:** [page.tsx](app/e-portfolio-1/page.tsx), [examples.ts](app/e-portfolio-1/examples.ts), [photos.ts](app/e-portfolio-1/photos.ts), [carousel](components/sections/NonTeachingPhotoCarousel.tsx); [sumber/lisensi foto](public/e-portfolio-1/ilustrasi/README.md); OWN-017/OWN-018/OWN-019; Phase 3. Editorial OWN-019 mengubah page dan data rubrik saja; foto, CSS dan carousel bersama tetap.
- **Verification:** Hasil historis [OWN-017](artifacts/e-portfolio-1-topik3/README.md) dan [OWN-018](artifacts/e-portfolio-1-ringkas/README.md) tetap tersedia. Pada OWN-019, TypeScript/build exit 0; lint 0 error/9 warning baseline. Playwright Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memastikan nol elemen pre/code, tidak ada pola kode/jargon berulang atau tutorial di render, tiga aspek × empat indikator, enam anchor, foto/kredit dan carousel keyboard/swipe tanpa clipping/overflow/error browser. LK 4 Siklus 1 dan portal modul HTTP 200; BSKAP 503 serta empat halaman Pexels/Rumah Pendidikan CAPTCHA 403. [Laporan editorial](artifacts/e-portfolio-1-editorial/README.md) mencatat hasil dan batas; contoh tidak memenuhi bukti wajib UTS.

### FR-PORTFOLIO-004

- **Nama:** E-Portfolio 2 UAS PPL Mandiri.
- **Deskripsi:** Menyajikan analisis artefak dan refleksi akhir Siklus 2–4 di `/e-portfolio-2`, sebagai kelanjutan E-Portfolio 1.
- **Rationale:** Membedakan cakupan UTS Siklus 1 dari kebutuhan UAS memilih rancangan lengkap terbaik Siklus 2–4 dan video yang sesuai.
- **Expected behavior:** Lima bagian Perencanaan Pembelajaran; Materi, Media, dan Penilaian; Pelaksanaan dan Video; Kegiatan Nonmengajar; Refleksi Akhir. OWN-021 mengganti copy OWN-020 dengan naskah final “Praktik Mengajar Mandiri — Pembelajaran Basis Data” dari prompt pemilik, utuh tanpa parafrasa atau tambahan analisis. Enam tautan Modul Ajar dalam satu daftar; empat LK 4 dalam Dokumen Refleksi, dengan Siklus 1 Laravel sebagai konteks awal. LK 3 dan ringkasan siklus lama tidak dirender. Rancangan utama UAS akan ditetapkan setelah dicocokkan dengan rekaman; video belum dilampirkan, bukti penilaian dan dokumentasi nonmengajar asli masih perlu dilengkapi. Dua ilustrasi horizontal berkredit bukan bukti kegiatan.
- **Acceptance criteria:** Desain editorial gelap mengikuti E-Portfolio 1; lima anchor, dokumen, carousel dan menu diuji pada 1440/390. Tambah satu tujuan Semester 2/mobile, tautan dua arah, active state dan penutupan menu bekerja. Placeholder kedua halaman ringkas. Navbar tidak menutup teks saat scroll di kedua portfolio melalui CSS khusus route; perilaku halaman lain tetap. E-Portfolio 1 mempertahankan enam anchor, hero homepage dan Artefak Semester I tidak berubah. Tanpa dependency, commit, push atau deploy.
- **Status:** Partial (halaman/analisis tersedia; Modul Ajar lengkap terbaik belum dipilih dan video serta artefak asli lain belum dilampirkan).
- **Related page/component:** [page.tsx](app/e-portfolio-2/page.tsx), [CSS portfolio](app/e-portfolio-1/page.module.css), [data ilustrasi](app/e-portfolio-1/photos.ts), [Navbar](components/layout/Navbar.tsx); OWN-020/OWN-021; Phase 3. Revisi naskah OWN-021 hanya mengubah page; carousel dan komponen bersama dipakai ulang tanpa perubahan.
- **Verification OWN-021 (30 Oktober 2026):** TypeScript/build exit 0; lint 0 error/9 warning pada file di luar perubahan. Playwright Chromium 156.0.8078.4 pada 1440 × 1000, 768 × 1024, 390 × 844 dan 360 × 800 mencocokkan seluruh naskah (normalisasi whitespace), sepuluh label/URL, lima anchor/keyboard, carousel keyboard/swipe mobile, pemuatan foto dan placeholder ringkas tanpa overflow/clipping/error browser. Sepuluh halaman Drive anonim HTTP 200 dengan judul file sesuai; tidak mengaudit ulang substansi PDF atau kesesuaiannya dengan video. [Laporan naskah final](artifacts/e-portfolio-2-final/README.md).
- **Verification historis OWN-020 (29 Oktober 2026):** LK 3 dan tiga LK 4 dibaca melalui konektor Google Drive. TypeScript/build exit 0; lint 0 error/9 warning baseline. Playwright Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memeriksa enam anchor UTS/lima UAS, menu, tautan dua arah, carousel keyboard/swipe, placeholder 55–123px dan navbar ikut scroll tanpa clipping/overflow/error browser. Home dan Artefak kembali fixed setelah navigasi client. Menu 375 × 667 dapat digulir hingga tautan UAS; lima tujuan Drive (termasuk LK 4 Siklus 1) HTTP 200 dengan judul sesuai. Screenshot sebelum/sesudah serta batas ada di [laporan UAS](artifacts/e-portfolio-2-uas/README.md); keberadaan refleksi tidak membuktikan kelengkapan rancangan/video.

### FR-ACADEMIC-001

- **Nama:** Konteks teori dan analisis baseline.
- **Deskripsi:** Mempertahankan teori yang dihubungkan ke praktik/narasi.
- **Rationale:** Landasan pedagogis merupakan kebutuhan akademik.
- **Expected behavior:** Sembilan teori pada tiga siklus, role model/citation About, konsep mata kuliah; analisis tetap terbaca di website.
- **Acceptance criteria:** Nama/tahun yang dicatat sesuai source; analogi Swain tidak dinyatakan sebagai bukti penelitian server; tidak menambah author/year/DOI atau status verifikasi tanpa sumber.
- **Status:** Implemented.
- **Related page/component:** Artefak, About, RefleksiMatkulClient.
- **Verification:** Inventory source; ketepatan bibliografi dan penerapan belum seluruhnya diverifikasi.

### FR-ACADEMIC-002

- **Nama:** Sistem citation dan bibliography konsisten.
- **Deskripsi:** Menelusuri sumber dan membedakan verifikasi bibliografi dari aplikasi.
- **Rationale:** Mencegah atribusi salah dan kredibilitas semu.
- **Expected behavior:** Author/year konsisten, bibliography sumber yang benar-benar digunakan, DOI/link hanya bila diverifikasi primer; batas interpretasi terdokumentasi.
- **Acceptance criteria:** Setiap citation terhubung record sumber; karya/tahun ambigu tetap kebutuhan verifikasi; tidak menciptakan referensi baru; quote dan bobot rubrik diperiksa terhadap sumber yang sah.
- **Status:** Proposed.
- **Related page/component:** Artefak, About, course content.
- **Verification:** Docs akademik historis dibaca; status VERIFIED lamanya tidak diwariskan sebagai audit baru.

### FR-SEO-001

- **Nama:** Metadata baseline.
- **Deskripsi:** Menyediakan title/description dan identitas metadata root.
- **Rationale:** Memberi konteks halaman untuk browser dan sharing dasar.
- **Expected behavior:** Default title Muslich/IT Educator, template `%s | Portfolio`, description/keywords/authors, root OG id_ID/website; enam child page memiliki title/description; favicon dan html lang id.
- **Acceptance criteria:** Judul tujuh route sesuai render; description tersedia; favicon terlayani; metadata yang belum tersedia tidak diklaim ada.
- **Status:** Implemented.
- **Related page/component:** RootLayout, enam child page, favicon.
- **Verification:** Source/HTML production; HTML juga memiliki Twitter summary metadata walau tidak ada object twitter eksplisit pada source.

### FR-SEO-002

- **Nama:** Kelengkapan SEO dan social preview.
- **Deskripsi:** Mengisi gap canonical, crawl assets, metadata sharing, dan identitas profesional.
- **Rationale:** Metadata root masih berfokus UTS PPL; sharing belum memiliki gambar.
- **Expected behavior:** Canonical/metadataBase, OG URL/image dan metadata per-page yang sesuai; robots/sitemap; favicon ditinjau; Person hanya memakai fakta/link nyata bila relevan.
- **Acceptance criteria:** URL canonical production benar; sitemap memuat route yang disepakati; robots tidak menghalangi indeks tanpa alasan; preview terverifikasi; structured data tidak mengarang atribut; hasil Search Console/indexing tidak diklaim tanpa akses.
- **Status:** Proposed.
- **Related page/component:** Layout/pages, kandidat metadata route/assets baru.
- **Verification:** Baseline robots/sitemap 404; canonical/og:image/JSON-LD tidak ditemukan pada tujuh HTML.

### FR-A11Y-001

- **Nama:** Struktur semantik dan heading.
- **Deskripsi:** Memastikan navigasi dokumen mencerminkan hirarki isi.
- **Rationale:** Pembaca screen reader membutuhkan struktur yang bermakna.
- **Expected behavior:** Landmark dan satu h1/page, heading section/case berurutan, judul penting tidak hanya bergaya heading melalui div.
- **Acceptance criteria:** Outline tujuh halaman termasuk konten course yang dibuka diperiksa; judul kasus menjadi heading relevan; tidak ada lompatan yang mengaburkan struktur; dekorasi tetap aria-hidden.
- **Status:** Partial.
- **Related page/component:** Layout, ArtifactCard, CardTitle, About, RefleksiMatkulClient.
- **Verification:** Landmark/h1/alt tersedia; CardTitle berupa div dan heading melompat pada Artefak/About/Mata Kuliah.

### FR-A11Y-002

- **Nama:** Keyboard, status kontrol, dan focus.
- **Deskripsi:** Memberikan akses interaksi dan status yang dapat dikenali assistive technology.
- **Rationale:** Menu/tab/accordion tidak cukup hanya berubah visual.
- **Expected behavior:** Kontrol reachable/operable, focus terlihat, hubungan expanded-controls/selected-panel sesuai pola yang dipilih; navigasi aktif dapat dikenali.
- **Acceptance criteria:** Tab/Enter/Space dan pola keyboard tab yang relevan diuji; menu dapat ditutup dan focus dikelola sesuai desain; state diumumkan; link aktif memiliki informasi yang sesuai; accordion memiliki hubungan kontrol/konten.
- **Status:** Partial.
- **Related page/component:** Navbar, WorkStudiesToggle, CpmkBanner, RefleksiMatkulClient.
- **Verification:** Button native dan aria-expanded accordion tersedia; dropdown desktop memiliki aria-expanded/controls, link desktop aria-current dan Escape/focus return; menu mobile baseline belum memiliki status lengkap, tab tanpa selected-panel semantics. Audit keyboard/focus menyeluruh tetap belum selesai.

### FR-A11Y-003

- **Nama:** Nama resource, keterbacaan, dan makna indikator.
- **Deskripsi:** Memperjelas tujuan link/download dan informasi yang tidak hanya bergantung warna.
- **Rationale:** Daftar link harus dapat dipahami tanpa konteks visual terdekat.
- **Expected behavior:** Nama accessible membedakan dokumen/siklus/course; tindakan buka versus download sesuai perilaku; teks cukup kontras; indikator nilai memiliki makna teks.
- **Acceptance criteria:** Link list membedakan semua dokumen; label file tidak menjanjikan PDF/direct download yang belum diverifikasi; negative/zero/positive dapat dibedakan tanpa warna; icon-only controls memiliki nama; pasangan teks/background memenuhi kriteria kontras DESIGN berdasarkan pengukuran aktual.
- **Status:** Partial.
- **Related page/component:** ArtifactCard.DownloadGrid, Penilaian, FormalLk2Card, ArtifactEvidenceItem, sosial.
- **Verification:** Sosial/hamburger memiliki aria-label; repeated Unduh/Lihat Artefak/Buka Dokumen LK 2 belum membedakan resource melalui nama linknya.

## Non-Functional Requirements

### NFR-PERF-001

- **Nama:** Baseline performa terukur.
- **Deskripsi:** Menilai dampak prerender, client content, motion, image/font tanpa jaminan rekaan.
- **Rationale:** Website harus cepat dipahami dan nyaman dibaca.
- **Expected behavior:** Ukur representative Home/Artefak/Mata Kuliah pada kondisi perangkat/jaringan yang dicatat sebelum optimasi.
- **Acceptance criteria:** Laporan mencatat metode/kondisi, load/layout/interaksi dan bottleneck; target berikutnya berdasar pengukuran; tidak menyatakan skor Lighthouse/CWV/bundle saving tanpa hasil.
- **Status:** Proposed.
- **Related page/component:** Layout, Home, ArtifactCard, RefleksiMatkulClient, SmoothScrollProvider.
- **Verification:** Prerender build berhasil; belum ada Lighthouse, field analytics, atau audit bundle terukur.

### NFR-RESP-001

- **Nama:** Responsive behavior baseline.
- **Deskripsi:** Mempertahankan layout responsif yang ada dan memverifikasi penggunaan layar kecil.
- **Rationale:** Kedua audiens mengakses melalui perangkat beragam.
- **Expected behavior:** Navbar berubah pada md, grid/content mengikuti sm/md/lg, text wrap dan download cards tidak menghalangi akses.
- **Acceptance criteria:** Perubahan UI diuji minimal 360/390, 768, dan 1440 CSS px serta zoom 200%; seluruh route tetap terbaca/operable tanpa overflow yang memotong isi. Ukuran ini adalah default verification mendatang, bukan hasil pengujian baseline.
- **Status:** Implemented.
- **Related page/component:** Global CSS dan seluruh page/component layout.
- **Verification:** Responsive classes diperiksa pada baseline. Task polish 19 Oktober 2026 memverifikasi Penilaian lokal pada Chromium di lebar 360, 390, 640, 768, dan 1440 CSS px: ringkasan satu kolom sebelum sm, tanpa clipping teks atau overflow horizontal; judul dan badge skor tidak bertumpuk. Ini bukan kelulusan seluruh route, zoom 200%, atau browser lain.

### NFR-MAINT-001

- **Nama:** Maintainability dan verification repository.
- **Deskripsi:** Menghubungkan requirement, source, dokumentasi, dan pemeriksaan aktual.
- **Rationale:** Developer/agent berikutnya dapat mengubah bagian terkait tanpa kehilangan konteks.
- **Expected behavior:** TypeScript strict, command aktual, docs canonical, scope lint tepat, perubahan minimal, dokumentasi mengikuti truth.
- **Acceptance criteria:** Requirement/task dapat ditelusuri; typecheck/build tetap berhasil; lint tidak mendapat warning baru dari task; masalah baseline dan worktree tidak disembunyikan; diff hanya scope yang diizinkan.
- **Status:** Partial.
- **Related page/component:** Docs/rules, tsconfig, eslint config, manifest.
- **Verification:** Docs/guardrails tersedia; baseline lint delapan warning source + delapan worktree; belum ada CI/tests.

### NFR-RELIABILITY-001

- **Nama:** Lifecycle dan dependensi eksternal.
- **Deskripsi:** Menjaga resource cleanup dan akses evidence yang tidak dikendalikan aplikasi.
- **Rationale:** Motion/scroll dan dokumen eksternal dapat mempengaruhi keterandalan.
- **Expected behavior:** Cleanup menghentikan scheduled animation, reduced motion dihormati, resource tidak tersedia diberi penjelasan yang jujur; konten inti tetap dapat dibaca.
- **Acceptance criteria:** Mount/unmount dan reduced motion diperiksa; tidak ada loop tersisa setelah cleanup; availability resource dicatat tanpa menyimpulkan palsu dari request failure; fallback kosong tetap jelas.
- **Status:** Partial.
- **Related page/component:** SmoothScrollProvider, motion components, evidence components.
- **Verification:** lenis.destroy ada tetapi rAF tidak dibatalkan eksplisit; reduced-motion handler tidak ditemukan; empty-link fallback course tersedia.

### NFR-COMPAT-001

- **Nama:** Verifikasi browser.
- **Deskripsi:** Mendokumentasikan kompatibilitas setelah diuji, bukan mengasumsikannya dari library.
- **Rationale:** OKLCH, backdrop blur, motion, dan download lintas origin dapat berbeda antar-browser.
- **Expected behavior:** Verification mendatang mencakup Chromium, Firefox, dan Safari/WebKit dengan versi/perangkat dicatat; fallback critical behavior diperiksa.
- **Acceptance criteria:** Tujuh route, keyboard, menu, tab, accordion, scroll, CSS, dan external links diuji pada matrix tersebut; batas/bug dicatat. Ini target uji Proposed, bukan jaminan support versi minimum saat ini.
- **Status:** Proposed.
- **Related page/component:** Seluruh route, layout, motion, downloads.
- **Verification:** Audit browser otomatis gagal; tidak ada matrix browser terverifikasi pada baseline.

## Register Gap

| ID | Label | Temuan / sumber | Dampak dan requirement |
|---|---|---|---|
| ISSUE-001 | ISSUE | Hero Home CTA menuju About; filosofi eksplisit hanya refleksi | Jalur bukti profesional dapat diperjelas; FR-HOME-002 |
| ISSUE-002 | ISSUE | Repetisi karakter guru Home/About/Akhir perlu dievaluasi; tiga kasus kini memiliki summary standar (FR-CASE-002) | Kurangi repetisi claim melalui evidence; FR-CASE-002, FR-EVIDENCE-002 |
| ISSUE-003 | ISSUE | 42 URL ditemukan; isi seluruh evidence belum diperiksa | Akses/link bukan sertifikasi keaslian; FR-EVIDENCE-002, FR-ACADEMIC-002 |
| ISSUE-004 | ISSUE | TrendingUp pada delta negatif di Penilaian | Indikator arah belum koheren; FR-ASSESSMENT-002 |
| ISSUE-005 | ISSUE | LK 4 S1/S2/S3 memakai file ID berbeda di Artefak dan tab PPL course | Bisa versi berbeda, belum terbukti salah; FR-EVIDENCE-002 |
| ISSUE-006 | ISSUE | Metadata Mata Kuliah Semester 1–2; kicker/subtitle Semester 1 | Fakta semester perlu konfirmasi; FR-REFLECTION-004 |
| ISSUE-007 | ISSUE | Tiga entri refleksi dan campuran bahasa Navbar/footer | Evaluasi IA, tanpa menghapus isi otomatis; FR-NAV-002 |
| ISSUE-008 | ISSUE | Canonical/OG image/JSON-LD tidak ditemukan; robots/sitemap 404 | Sharing/crawl completeness, indexing belum diketahui; FR-SEO-002 |
| ISSUE-009 | ISSUE | CardTitle div; h1→h4 Artefak, h2→h4 timeline About, course title bukan heading | Struktur dokumen kurang mewakili isi; FR-A11Y-001 |
| ISSUE-010 | ISSUE | Menu/tab/accordion belum lengkap status/control relation | Assistive technology dan keyboard perlu audit; FR-A11Y-002 |
| ISSUE-011 | ISSUE | Nama link berulang dan `download` pada URL Google Drive view | Tujuan dan tindakan belum jelas/terjamin; FR-A11Y-003 |
| ISSUE-012 | ISSUE | Teks zinc-500/600 dan muted rendah kontras dalam perhitungan statis | Periksa pasangan aktual; DESIGN dan FR-A11Y-003 |
| ISSUE-013 | ISSUE | rAF Lenis tidak cancel, reduced motion tidak ditangani source | Risiko lifecycle/motion; NFR-RELIABILITY-001 |
| ISSUE-014 | ISSUE | ESLint memasukkan worktree; delapan unused-symbol warning source | Baseline health dan waktu scan; NFR-MAINT-001 |
| ISSUE-015 | ISSUE | Belum ada performa/matrix browser/indexing measurement; browser audit timeout | Jangan mengklaim kelulusan yang belum diukur; NFR-PERF-001, NFR-COMPAT-001 |

## Hasil Verifikasi Baseline

Pemeriksaan dilakukan pada tahap audit/perencanaan dalam sesi yang sama, 7 Oktober 2026. Penulisan dokumentasi tidak mengubah source/config aplikasi; hasil berikut bukan klaim command dijalankan ulang setelah edit Markdown.

| Pemeriksaan | Hasil | Batas |
|---|---|---|
| `npm run build` | Exit 0; compile/type generation/prerender berhasil; tujuh route dan internal not-found | Bukan hasil perf/accessibility test |
| `npx tsc --noEmit --incremental false` | Exit 0 | Bukan runtime test |
| `npm run lint` | Exit 0, 0 error, 16 warning | Delapan utama: ArrowLeft/ChevronRight/Quote (About), StatMetric (Home), Compass/Wrench/Users (Refleksi), Heart (Footer); delapan duplikat worktree |
| Production HTTP | Ketujuh route 200 | Tidak menjamin interaksi client |
| HTML main comparison | Teks main production sama dengan build lokal untuk tujuh route | Course SSR hanya default tab; isi accordion tersembunyi tidak dianggap sudah diuji di browser |
| SEO HTML | Title/description/root OG/favicon/lang ada; Twitter summary muncul; canonical/OG image/JSON-LD tidak ditemukan | Indexing/Search Console dan dashboard belum diperiksa |
| Crawl endpoints | `/robots.txt`, `/sitemap.xml`: 404 | Tidak berarti seluruh website tidak terindeks |
| Evidence inventory | 42 URL unik dari source, 48 penggunaan tautan | Keaslian/permission seluruh file belum diperiksa |
| Contoh resource | Lampiran 7 S1 dan LK 2 Filosofi merespons HTML 200 dengan title file; satu Docs profiling merespons HTML 200 dengan title loading/error | Bukan verifikasi isi PDF atau keberhasilan akses Docs; jangan menyatakan file hilang dari respons ini |
| Static contrast | muted token di root background ≈4,12:1; zinc-600 ≈2,57:1 dengan asumsi opaque/root surface | Glow, opacity, surface, font size, dan computed style seluruh elemen belum diverifikasi |
| Browser render/interaksi | Chrome headless production timeout; Edge headless lokal ERR_ABORTED/timeout | Mobile, overflow, focus, keyboard, accordion, tab, dan kontras render belum dinyatakan lolos |

## Verifikasi Dokumentasi Setelah Penulisan (Baseline sebelum Task Navigasi)

Pemeriksaan terarah pada 7 Oktober 2026 menggunakan Python serta TypeScript AST yang sudah tersedia, tanpa menambahkan test tooling/script tracked:

- Delapan file dokumentasi/router tersedia; 117 tautan lokal beserta anchor Markdown yang digunakan valid; 25 tabel memiliki struktur kolom konsisten.
- 27 ID requirement unik memiliki delapan field wajib dan status yang valid; seluruh ID roadmap ada di registry.
- Tujuh phase memiliki delapan bagian wajib; phase aplikasi tetap NOT STARTED.
- 42 record EVD dan 15 issue teridentifikasi; URL inventory cocok persis dengan URL unik source aktif.
- Hash source/config/assets yang ada sebelum tugas cocok setelah penulisan. Perubahan hanya dokumen/router yang diizinkan; penghapusan awal CLAUDE dan sembilan dokumen lama tetap dipertahankan.
- Review whitespace dan diff selesai; tidak ada commit, deploy, atau implementasi roadmap. Verification ini tidak menutup gap aplikasi yang tercatat di atas.

## Verifikasi Projek Kepemimpinan (28 Oktober 2026)

FR-REFLECTION-005/OWN-013: enam accordion diisi dari delapan halaman `artifacts/3.3. Proyek Kepemimpinan.pdf`. Delapan blok jawaban (empat 4C, tiga analisis, satu kesimpulan), 17 paragraf, dan tujuh pertanyaan yang dirender cocok dengan naskah setelah normalisasi pemenggalan baris PDF; `e-` di akhir baris disambung dengan `Tatib` menjadi `e-Tatib`. Tidak ada ringkasan, pengalaman, atau kontribusi tim yang ditambahkan sebagai pekerjaan individu. Empat artefak dan LK 2 tetap tanpa URL terverifikasi; label laporan menyebut draf kerja dengan dokumentasi hingga 21 Oktober 2026 sesuai batas pemilik. Tidak ada data murid, isi konseling, kredensial, endpoint API, atau rincian sistem sensitif yang ditambahkan.

`npm run build` berhasil termasuk TypeScript/prerender; `npm run lint` exit 0 dengan delapan warning unused symbol baseline di About, Home, Refleksi PPL, dan Footer, tanpa error. Playwright dengan Chromium 156.0.8078.4 pada production lokal `http://localhost:3218` memeriksa desktop 1440 x 1000 dan mobile 390 x 844: seluruh jawaban/paragraf/pertanyaan, enam accordion default tertutup, klik/Enter/Space dan fokus native, reset state setelah berpindah course, empat fallback artefak dan fallback LK 2 non-link. Tidak ditemukan horizontal overflow, clipping teks, console error, atau page error; screenshot desktop/mobile ditinjau visual. Ini bukan audit accessibility menyeluruh atau pengujian browser lain.

Empat objek course lain identik dengan snapshot awal; renderer bersama, Semester I, dan source halaman lain tidak diubah. Perubahan awal pemilik pada Navbar dipertahankan byte per byte. Bukti lokal tersedia di `artifacts/projek-kepemimpinan/` (diabaikan Git). Tidak ada dependency baru, commit, push, atau deploy.

## Verifikasi Refleksi Program PPG (27 Oktober 2026)

FR-REFLECTION-006/OWN-012: `npm run build`, `npm run lint`, dan `npx tsc --noEmit --incremental false` berhasil. Lint menghasilkan delapan warning unused baseline pada About, Home, Refleksi PPL, dan Footer, tanpa error. Route baru diprerender statis. Lima paragraf jawaban yang dirender cocok persis dengan paragraf XML DOCX pemilik tanpa normalisasi whitespace; tidak ada URL eksternal pada relasi DOCX, sehingga link pendukung tidak ditampilkan.

Chromium 156.0.8078.4 pada production lokal `http://localhost:3215` diperiksa pada 1440 x 1000 dan 390 x 844: navigasi desktop/mobile menuju halaman baru, menu mobile sepuluh link utuh dan menutup setelah navigasi, active child desktop, Escape/focus return, tiga anchor via keyboard Enter, focus-visible, heading terlihat di bawah navbar, lima paragraf dan tiga tindakan RTL. Tidak ditemukan clipping/overflow horizontal atau console/page error. Lebar paragraf 672px desktop dan 342px mobile, line-height 32px. Screenshot hero/full/footer diperiksa visual; footer tetap terlihat dan dapat diklik setelah penggantian overlay awal dengan CSS module khusus halaman. Glow disembunyikan hanya saat halaman ini hadir. Sepuluh route publik merespons HTTP 200. Screenshot dan laporan tersedia lokal di `artifacts/refleksi-program-ppg/` (diabaikan Git). Browser lain dan audit accessibility menyeluruh belum dilakukan.

## Verifikasi revisi E-Portfolio 1 (21 Oktober 2026)

FR-PORTFOLIO-001/OWN-011: `npx tsc --noEmit --incremental false` dan `npm run build` berhasil; `/e-portfolio-1` tetap prerender statis. `npm run lint` exit 0 dengan delapan warning baseline pada About, Home, Refleksi, dan Footer; tidak ada error. Skrip Playwright sementara dipindahkan ke luar repository setelah sempat ikut lint; source/config tooling tidak diubah.

Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memeriksa enam anchor melalui Enter (target sekitar 112px di bawah navbar), empat ruang siklus, empty state, serta ketiadaan iframe/overflow horizontal. Carousel diuji pada dev lokal dengan lima gambar kalibrasi SVG berlabel TEST FIXTURE, bukan foto kegiatan: Previous/Next melalui Enter/Space dan klik, swipe sentuh dua arah melalui CDP pada mobile, caption/activity/penghitung sinkron, tombol disabled pada ujung, foto portrait object-contain, lazy loading slide berikutnya, navigasi reduced motion, serta kontrol tersembunyi untuk satu foto. Tidak ditemukan runtime error atau clipping foto/kontrol pada screenshot yang ditinjau. Fixture dikembalikan ke array kosong sebelum build akhir; pemeriksaan production lokal di port 3206 mengulang anchor dan empty state. Screenshot halaman aktual diambil dari production; screenshot carousel fixture dari dev menggunakan font fallback karena unduhan Google Fonts dev gagal, sehingga bukan bukti tipografi production. Build production berhasil tanpa peringatan font.

Bukti desktop/mobile dan hasil terstruktur berada di [laporan revisi](artifacts/e-portfolio-1-revision/README.md). Foto asli dan analisis LK 4 belum tersedia, sehingga isi akademik/kesesuaian artefak belum diperiksa. Hero, bagian 01–03/06, Refleksi Diri, Navbar, halaman lain, dependency, dan CSS global tidak diubah. Tidak ada commit atau deploy.

## Verifikasi E-Portfolio 1 (20 Oktober 2026)

FR-PORTFOLIO-001/OWN-010: `npm run build` berhasil termasuk TypeScript dan prerender `/e-portfolio-1`. `npm run lint` exit 0 dengan delapan warning baseline pada About, Home, Refleksi, dan Footer. Pemeriksaan Playwright menggunakan Chromium 156.0.8078.4 pada production lokal `http://localhost:3204`, desktop 1440 x 1000 dan mobile 390 x 844.

Enam anchor diuji dengan keyboard Enter dan hash/posisi target diperiksa; bagian tujuan berada sekitar 112px dari tepi viewport, di bawah navbar. Rasio video tepat 16:9. Enam bagian dan Refleksi Diri tersedia tanpa embed, gambar, tombol, atau tautan artefak rekaan. Navigasi desktop/mobile menuju halaman baru, penanda aktif Semester 2/child, Escape pada dropdown, penutupan menu setelah navigasi, dan daftar tujuan lama diperiksa. Sembilan route merespons HTTP 200. Tidak ditemukan clipping, horizontal overflow, console error, atau page error. Screenshot penuh, hero, dan area media desktop/mobile serta hasil terstruktur disimpan di `artifacts/e-portfolio-1/` (diabaikan Git). Source delapan halaman lama, layout, CSS global, serta manifest/lockfile identik dengan snapshot awal task; Navbar hanya menambah dua entri data. Verifikasi ini mencakup struktur UI/UX, bukan konten akademik atau akses dokumen/media yang belum tersedia.

## Verifikasi Struktur Semester II (19 Oktober 2026)

### Verifikasi pengisian Pendidikan Inklusi - 20 Oktober 2026

FR-REFLECTION-005/OWN-009: delapan blok jawaban (empat 4C, tiga analisis, satu kesimpulan) dari tujuh halaman PDF pemilik cocok setelah normalisasi whitespace. Connection yang mengulang jawaban analisis pertama dipertahankan sesuai konfirmasi pemilik. Empat artefak 2.D, 3.D, 4.A, dan 4.E memakai `href: null`; dokumen resmi LK 2 juga belum memiliki URL.

Build production lokal berhasil; lint exit 0 dengan delapan warning baseline di About, Home, Refleksi, dan Footer. Chromium 156.0.8078.4 pada 1440 x 1000 dan 390 x 844 memverifikasi seluruh jawaban dan tujuh pertanyaan, buka/tutup enam accordion melalui klik, Enter/Space, empat label/status artefak, serta tidak adanya clipping paragraf, horizontal overflow, console error, dan page error. Source Semester I, renderer bersama, Navbar, serta isi refleksi empat course lain cocok dengan snapshot awal task. Tujuh URL artefak PPL Mandiri ditambahkan secara bersamaan dari luar task ini dan dipertahankan; akses/isinya tidak diverifikasi dalam task Pendidikan Inklusi. Bukti lokal tersimpan di `artifacts/pendidikan-inklusi/` (diabaikan Git). Tidak ada perubahan dependency, commit, atau deploy.

### Pengisian PPL Mandiri dari naskah revisi

**CURRENT STATE (19 Oktober 2026):** enam accordion PPL Mandiri telah diisi lengkap dari versi terbaru `artifacts/3.3. PPL Mandiri.pdf` (195.482 byte, tujuh halaman, diperbarui pemilik 19 Oktober 2026). Naskah kini memuat empat siklus praktik mandiri dan kendala perangkat, keterlibatan, serta waktu yang masih muncul sampai siklus terakhir. Tidak ada perubahan kata selain whitespace dan pemisahan paragraf. Versi lama yang sebelumnya diperiksa tidak digunakan sebagai sumber pengisian.

LK 3 dan empat LK 4 per siklus ditampilkan terlebih dahulu, diikuti LK 1 dan LK 2. Seluruhnya tanpa URL karena tautan yang sesuai belum tersedia; LK 4 Semester I bukan pengganti artefak mandiri. Build berhasil; lint exit 0 dengan delapan warning baseline pada file lain. Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memastikan delapan blok jawaban dan tujuh pertanyaan cocok dengan PDF setelah normalisasi whitespace, accordion/keyboard bekerja, tanpa clipping, horizontal overflow, console error, atau page error. Data PSE, PMAL, dan MK 4–5 identik sebelum/sesudah task; halaman Semester I dan renderer bersama tidak berubah. Bukti dan batas verifikasi ada di [laporan PPL Mandiri](artifacts/ppl-mandiri/README.md).

### Pengisian PMAL setelah PSE

**CURRENT STATE (19 Oktober 2026):** enam accordion PMAL telah terisi lengkap dari PDF enam halaman pemilik. Empat jawaban 4C, tiga jawaban analisis, dan kesimpulan dipertahankan; formatting halaman 5 diperbaiki dengan menyambung `kompeten` dan `si secara bertahap.` serta memindahkan paragraf LK 4.E yang tersisip menjadi paragraf tersendiri. Empat URL artefak yang sudah diberikan pemilik berhasil diakses tanpa login (HTTP 200), dengan judul file sesuai LK 1.E–4.E; isi artefak eksternal tidak diaudit. PSE, Semester I, renderer bersama, dan tiga course lainnya tidak berubah.

Build berhasil; lint exit 0 dengan delapan warning baseline pada file lain. Chromium 156.0.8078.4 pada 1440 × 1000 dan 390 × 844 memastikan seluruh delapan blok jawaban dan tujuh pertanyaan tampil lengkap, accordion/keyboard bekerja, tanpa clipping, horizontal overflow, console error, atau page error. Bukti dan rincian koreksi tersedia di [laporan PMAL](artifacts/pmal/README.md).

### Pengisian PSE setelah verifikasi struktur

**CURRENT STATE (19 Oktober 2026):** enam accordion PSE telah diisi dari seluruh delapan halaman `artifacts/3.3. Pembelajaran Sosial Emosional.pdf` sesuai instruksi pemilik: empat jawaban 4C, tiga jawaban analisis, dan kesimpulan. Kata dan sudut pandang dipertahankan; hanya whitespace/paragraf dirapikan. Empat URL artefak yang sudah ada berhasil diakses tanpa login (HTTP 200), dengan judul file cocok untuk 1.D, 1.E, 2.E, dan 3.E; isi artefak eksternal tidak diaudit. URL resmi LK 2 tetap null. Empat course lain serta Semester I dipertahankan.

Build dan lint berhasil; lint memiliki delapan warning baseline di file lain. Browser lokal pada 1440 × 1000 dan 390 × 844 memastikan seluruh delapan blok jawaban dan tujuh pertanyaan cocok dengan PDF setelah normalisasi whitespace, enam accordion serta keyboard Enter/Space bekerja, tanpa overflow horizontal, clipping paragraf, atau page error. Bukti dan batas pemeriksaan ada di [laporan PSE](artifacts/pse/README.md). Catatan struktur awal berikut merupakan hasil sebelum pengisian PSE.

FR-REFLECTION-005 diverifikasi pada build lokal production dengan Chromium headless 156.0.8078.4, viewport 1440 x 1000 dan 390 x 844. Seluruh enam tab Semester I dan lima tab Semester II diperiksa pada kedua ukuran: enam accordion/course, keyboard Enter/Space, status Belum tersedia, tanpa clipping/overflow horizontal. Navigasi kedua semester bekerja dan menutup panel; hanya parent semester yang sesuai aktif, termasuk navigasi client dari MK 6 Semester I ke Semester II. Tidak ada console/page error; 251 assertion terarah lolos.

File page Semester I identik byte per byte dan initializer data courses identik dengan sebelum task. Pemeriksaan DOM seluruh course mempertahankan narasi dan 30 URL lama; Semester II tidak memiliki tautan dokumen rekaan. Build berhasil termasuk TypeScript/prerender delapan halaman. Lint exit 0 dengan delapan warning baseline pada file lain. Screenshot dan log tersedia di `artifacts/semester-2/`. Verifikasi lokal ini bukan deployment, pengisian refleksi, audit evidence eksternal, atau sertifikasi accessibility seluruh situs.

## Verifikasi Navigasi Mobile (19 Oktober 2026)

Pada build lokal, Chromium headless 156.0.8078.4 menguji Penilaian pada viewport 390 x 844 dan 360 x 800 saat awal, scroll pengantar, dan menu terbuka. Pill tetap 54 x 54 pada y=16; konten yang melewatinya tertutup sementara dan bisa dibaca dengan scroll, sehingga posisi/ukuran dipertahankan. Ditemukan header transparan selebar viewport menghalangi tap Unduh di samping pill: hit-test mengenai HEADER dan tap koordinat tidak menghasilkan click pada link. Setelah pointer events header mobile dinonaktifkan dan diaktifkan kembali pada pill/panel, hit-test mengenai link dan tap menghasilkan satu click. Uji click mencegah navigasi eksternal; akses dokumen tidak diaudit.

Menu awal dan sesudah scroll menampilkan tujuh link, buka/tutup serta navigasi About berhasil pada kedua ukuran. Smoke test menu pada Home/About/Artefak dan dropdown desktop 1440 x 1000 (buka/Escape) lolos. Tidak ada page error/overflow horizontal pada checkpoint Penilaian; geometri pill sebelum/sesudah identik. Build berhasil; lint exit 0 dengan delapan warning lama di file lain. Screenshot dan pengukuran ada di `artifacts/mobile-navigation/`. Pemeriksaan ini tidak mengklaim audit accessibility menyeluruh atau perangkat fisik.

## Verifikasi Polish Penilaian (19 Oktober 2026)

Perubahan dibatasi pada class styling halaman Penilaian: ringkasan L7/L8 satu kolom sebelum sm, badge highlight dapat wrap, header rincian memiliki gap dan skor tidak menyusut, serta teks kecil zinc-500/600 dinaikkan ke zinc-400. Nilai, label, URL, dan logika tidak berubah (perbandingan AST setelah mengabaikan className). Screenshot dan pengukuran lokal tersedia di `artifacts/ui-polish/`; artefak dapat diabaikan Git sesuai konfigurasi workspace.

`npm run build` berhasil termasuk TypeScript dan prerender. `npm run lint` exit 0 dengan delapan warning unused declarations pada file lain, tanpa warning Penilaian. Chromium headless 156.0.8078.4 memverifikasi HTTP 200, tanpa page error, clipping teks oleh ancestor, atau overflow horizontal pada lebar 360, 390, 640, 768, dan 1440 CSS px; screenshot 390 x 844 dan 1440 x 1000 diperiksa. Ini verifikasi terbatas Penilaian, bukan audit WCAG/kontras terukur, zoom 200%, seluruh halaman, atau penutupan FR-A11Y-003/ISSUE-012.

## Verifikasi Task Navigasi Desktop (7 Oktober 2026)

FR-NAV-003 diverifikasi pada build lokal production menggunakan Chrome headless dengan viewport 1440 x 1000. Home/About dan lima child link berhasil navigasi; parent semester dan child aktif benar; panel menutup saat memilih tujuan. Kedua panel menampilkan judul, subtitle, deskripsi, dan nomor; satu panel terbuka; Escape mengembalikan fokus; klik di luar menutup. Screenshot kedua panel diperiksa terhadap visual floating pill gelap dan tidak ditemukan overflow desktop. Tujuh route merespons HTTP 200; tidak ada browser error pada sesi tersebut. TypeScript dan build berhasil; lint exit 0 dengan 16 warning baseline, tanpa warning baru. Mobile, browser lain, dan audit accessibility menyeluruh tidak termasuk verifikasi ini.

## Inventory Dokumen Eksternal

**CURRENT STATE:** tabel berikut diekstrak dari konstanta TSX aktif, bukan dari dokumen lama. Total **42 URL unik**: 12 Artefak + 30 Mata Kuliah; enam Penilaian menggunakan kembali URL L7/L8 Artefak. Label/course/siklus hanya konteks penggunaan pada kode, bukan pemeriksaan isi file. Identitas LK 2 disusun dari peran `lk2PdfHref` dan judul course; bukan nama file primer yang sudah diverifikasi. ID EVD adalah inventory dokumentasi, bukan public API atau key data aplikasi; pertahankan ID saat memperbarui record yang sama.

Status semua record: **SOURCE OBSERVED; CONTENT/PUBLIC ACCESS UNVERIFIED**. UI “PDF Document” dan atribut `download` tidak menjamin MIME PDF atau direct download lintas origin. Jangan mengganti URL berbeda hanya karena label mirip; verifikasi file/versi dahulu (ISSUE-005).

| ID | Label / identitas dari source | Konteks penggunaan | URL dan sumber |
|---|---|---|---|
| EVD-001 | RPP / Modul Ajar Bab 1–2 | Siklus 1 · Minggu 5–8 · /artefak | [Buka resource](https://drive.google.com/file/d/1qO5Esuec03ZuVwbiWlJUelYwp1Xvp0_1/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-002 | LK 4 Refleksi Siklus 1 | Siklus 1 · Minggu 5–8 · /artefak | [Buka resource](https://drive.google.com/file/d/1dvlBSuzJHo-zVoZxufi4lyv3Lap4LvOS/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-003 | Lampiran 7 — Penilaian Perangkat Pembelajaran (GP); Lampiran 7 · Siklus 1 | Siklus 1 · Minggu 5–8 · /artefak; Lampiran 7 · /penilaian | [Buka resource](https://drive.google.com/file/d/1_1OW8PhuADKKc1INR4q_ixhIkWJuweul/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-004 | Lampiran 8 — Penilaian Praktik Mengajar (GP); Lampiran 8 · Siklus 1 | Siklus 1 · Minggu 5–8 · /artefak; Lampiran 8 · /penilaian | [Buka resource](https://drive.google.com/file/d/1J2ip4MbdvF_KPODPEIQFoglIKHwgmJfd/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-005 | RPP / Modul Ajar Bab 3–5 | Siklus 2 · Minggu 9–12 · /artefak | [Buka resource](https://drive.google.com/file/d/1o90oVVmVE1BXgbyxRFSe12-fC7bbGRFE/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-006 | LK 4 Refleksi Siklus 2 | Siklus 2 · Minggu 9–12 · /artefak | [Buka resource](https://drive.google.com/file/d/1f23iF2ZEoJeAgC2QzowPNsrODawy7otq/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-007 | Lampiran 7 — Penilaian Perangkat Pembelajaran (GP); Lampiran 7 · Siklus 2 | Siklus 2 · Minggu 9–12 · /artefak; Lampiran 7 · /penilaian | [Buka resource](https://drive.google.com/file/d/1oNuhUvzMpid9cpmR8PIt4xrohct0NThD/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-008 | Lampiran 8 — Penilaian Praktik Mengajar (GP); Lampiran 8 · Siklus 2 | Siklus 2 · Minggu 9–12 · /artefak; Lampiran 8 · /penilaian | [Buka resource](https://drive.google.com/file/d/1vZuxiZHHYtyXvh5u6m_AteZuMuQTlhQs/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-009 | RPP / Modul Ajar Bab 6–7 | Siklus 3 · Minggu 13–15 · /artefak | [Buka resource](https://drive.google.com/file/d/1XZluvmimRlp6m5RiAva7OjXAciT5FjQU/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-010 | LK 4 Refleksi Siklus 3 | Siklus 3 · Minggu 13–15 · /artefak | [Buka resource](https://drive.google.com/file/d/1INyogUmrNagcepkGDABciYpKG3u2tiKS/view?usp=drive_link); [source](app/artefak/page.tsx) |
| EVD-011 | Lampiran 7 — Penilaian Perangkat Pembelajaran (GP); Lampiran 7 · Siklus 3 | Siklus 3 · Minggu 13–15 · /artefak; Lampiran 7 · /penilaian | [Buka resource](https://drive.google.com/file/d/14yuX0ecREEf5mC8sHM_IWMv-K99R4rOp/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-012 | Lampiran 8 — Penilaian Praktik Mengajar (GP); Lampiran 8 · Siklus 3 | Siklus 3 · Minggu 13–15 · /artefak; Lampiran 8 · /penilaian | [Buka resource](https://drive.google.com/file/d/1HD2TaEYL3mCzviWq80ls24cD554brqR4/view?usp=drive_link); [source](app/artefak/page.tsx), [source](app/penilaian/page.tsx) |
| EVD-013 | LK 2 · Filosofi Pendidikan dan Pendidikan Nilai | MK 1 · Filosofi Pendidikan · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1Hsw_bpM9ub4zq9K24pf52p-cJSMfNHTU/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-014 | Aktivitas 1.6 · Jurnal Refleksi | MK 1 · Filosofi Pendidikan · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1SmBdLtNF9s2MDeZEpiSoxAC2dDl_NvZj/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-015 | Aktivitas 1.5 · Analisis & Modifikasi Modul Ajar/RPP | MK 1 · Filosofi Pendidikan · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1B229s4ndWBY5l5q0ySS2X9KFSAVtKW_U/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-016 | 3.E · Refleksi dan Tindak Lanjut | MK 1 · Filosofi Pendidikan · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1zTf49OzpseefmgVbfQMAo6rnLmdvgwQ9/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-017 | LK 2 · Pemahaman tentang Peserta Didik dan Pembelajaran | MK 2 · Peserta Didik · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/12Ik2Jp8-aqWmEsyS5kncrgUvEODTKXyi/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-018 | LK 1.E · Refleksi Teori Perkembangan | MK 2 · Peserta Didik · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1RPzjNgs41jb0iomzs3v4hxumyvASVlyP/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-019 | LK 2.D & 2.E · Sintesis Kasus Pak Anto | MK 2 · Peserta Didik · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1B3mESDJTb-b4sj9_k4AjALrMp8Fl5lto/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-020 | LK 3.E · Refleksi Teori Belajar Bu Sinta | MK 2 · Peserta Didik · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1nCTN6FzI78o6kZ9S6A_YyKrsV-M-EKOr/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-021 | LK 4A & 4B · Asesmen Awal & Profiling 34 Siswa X RPL | MK 2 · Peserta Didik · /refleksi-matkul | [Buka resource](https://docs.google.com/document/d/17N2DksuBFnLl3stZbOu5hVZDPTuE3mUm/edit?usp=drive_link&ouid=116097001817209864458&rtpof=true&sd=true); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-022 | LK 2 · Pembelajaran Mendalam dan Asesmen (PMA) Dasar SMK | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1WmhOSGkJYULGcGqmqqe4N-3-Yscax_-O/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-023 | LK 1.C & 1.D · Analisis Kasus Kesiapan Kerja | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1yoNYqy_64hmcpwL7fXjJFERgK0pCM560/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-024 | LK 2.D · Sintesis Keselarasan Tujuan, Aktivitas & Asesmen | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/15D_17y-aRNoRxJEadkzDXr4lU9R5wR-O/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-025 | LK 2.E · Refleksi dan Tindak Lanjut | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1pfz6c0tlbyR_NE3AKRrbwJArH9jRwjO1/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-026 | LK 3.D · Template Perencanaan Pembelajaran UbD | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1wOzupHhfRDk7J2-V1gKzNdg-mryRJVEE/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-027 | LK 3.E & 4.A · Refleksi & RTL Perancangan Pembelajaran | MK 3 · Pembelajaran Mendalam · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1Ws5T3eoPwbde5tTLw1vzIM_Bw4DJdwOX/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-028 | LK 2 · Praktik Pengalaman Lapangan (PPL) Terbimbing | MK 4 · PPL Terbimbing · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1OQ4vQnECX8DbztJkCE-ka38rwSSYvL5J/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-029 | LK 3 · Refleksi Praktik Asistensi | MK 4 · PPL Terbimbing · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1wvLCND3v0a5zll5FunPq2Uhotzl0XvmR/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-030 | LK 4 · Refleksi Siklus 1 | MK 4 · PPL Terbimbing · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1wTQeMN3ydOJDT32gZZF10HT2QWVnoEbG/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-031 | LK 4 · Refleksi Siklus 2 | MK 4 · PPL Terbimbing · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1ca1GNnvo8BEZmE_YF_BdNe-6wDhxTTdl/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-032 | LK 4 · Refleksi Siklus 3 | MK 4 · PPL Terbimbing · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1dzUVTWgV5sEqf3zoF1HYZuSpFsZzUGFu/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-033 | LK 2 · Pola Pikir Bertumbuh (Growth Mindset) | MK 5 · Growth Mindset · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/11Tsl-ziUqbDaosIcw6GPCBo1S7bkU3lq/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-034 | LK 3.2 · Aku Belum Berhasil, Bukan Tidak Berhasil | MK 5 · Growth Mindset · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1id71fXmX3L6NKwmM5xZneYDucYwFbE0p/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-035 | LK 3.3 · Masalahku adalah Sahabat Belajarku | MK 5 · Growth Mindset · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1mlXSAWcXB6_50Xrd86zGgMXs48Qo7EYg/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-036 | LK 2.2 · Belajar dari Cara Otak Belajar | MK 5 · Growth Mindset · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1yHS47Odw1daKwYmi3LaACJjXDIQGleS9/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-037 | LK 2 · Pengembangan Kebugaran Jasmani | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1ylD6A6Tqhy5GrbDAdViv1_kr6_7y4Bc4/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-038 | LK 1.D · Laporan Diagnostik Kebugaran Personal | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1aLdsUnfzG0z5Xv49v280d1NNOYSZejrF/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-039 | LK 1.E · Refleksi Kesiapan Mental & Fisik Guru | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1Q4As7GbHEWCtP9mIR-cdZRqwp-E-nvRM/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-040 | LK 2.D · Logbook Kardio & Manajemen Stres | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1cck_Js6-L67M_x7ZMZSiW_7j2CFH7Its/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-041 | LK 2.E · Refleksi Sesi Latihan Kardio Minggu 1 | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1CMYh3buZ432cjt-EF0L_RGJNF-BVUpkF/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |
| EVD-042 | Proposal Program · Sekolah Sehat & Bugar | MK 6 · Kebugaran Jasmani · /refleksi-matkul | [Buka resource](https://drive.google.com/file/d/1e5rF31sHq19Y9pGv88m4fH0gQ79zTfG5/view?usp=drive_link); [source](components/sections/RefleksiMatkulClient.tsx) |


### Tambahan inventory Karya Inovasi (OWN-015)

Lima tujuan berikut memiliki izin anyone/reader, judul sesuai, serta unduhan anonim HTTP 200 pada pemeriksaan 28 Oktober 2026. Isi dokumen ditinjau sebagai rancangan/perangkat, bukan bukti pelaksanaan atau hasil kelas. Tidak ada perubahan akses berbagi. Prototipe dan buku HTML belum ditautkan.

| ID | Dokumen | Konteks | Resource / source |
|---|---|---|---|
| EVD-043 | 5.2. Unggah Hasil Tahap Penyusunan Karya Inovasi Pendidikan (LK 4).pdf | Seminar PPG Tahap 5 · /karya-inovasi | [Buka resource](https://drive.google.com/file/d/1r02zLNpoLKK_cKRTE4oGZ8ACgHdQBzr_/view?usp=drivesdk); [source](app/karya-inovasi/page.tsx) |
| EVD-044 | Modul Ajar.docx | Seminar PPG Tahap 5 · /karya-inovasi | [Buka resource](https://docs.google.com/document/d/1pYSbXbOEBjEtzzvBb0I4mPvco0JhIi4J/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true); [source](app/karya-inovasi/page.tsx) |
| EVD-045 | Instrumen_Asesmen_Inventaris_Kelas_Revisi.docx | Seminar PPG Tahap 5 · /karya-inovasi | [Buka resource](https://docs.google.com/document/d/1JCIMeh9ZfgAbWS5b8x3Yk90d7hIEklri/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true); [source](app/karya-inovasi/page.tsx) |
| EVD-046 | LKPD_Inventaris_Kelas_Revisi.docx | Seminar PPG Tahap 5 · /karya-inovasi | [Buka resource](https://docs.google.com/document/d/1SILfvzFJ94O--i6mCUzdZHKWma-0bPVh/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true); [source](app/karya-inovasi/page.tsx) |
| EVD-047 | Bahan Ajar.pptx | Seminar PPG Tahap 5 · /karya-inovasi | [Buka resource](https://docs.google.com/presentation/d/1fwFg2-KwITEtXsYUJPQFVIJQXfuQhunl/edit?usp=drivesdk&ouid=116097001817209864458&rtpof=true&sd=true); [source](app/karya-inovasi/page.tsx) |

### Tambahan inventory E-Portfolio 2 (OWN-020)

Teks keempat PDF dibaca melalui Google Drive pada 29 Oktober 2026. Halaman tujuan anonim HTTP 200 dengan judul sesuai; ini bukti akses/identitas dan catatan refleksi, bukan pemeriksaan Modul Ajar atau video. Tidak mengubah izin berbagi.

| ID | Dokumen | Konteks | Resource / source |
|---|---|---|---|
| EVD-048 | LK 3 Refleksi Praktik Mengajar Terbimbing | Historis OWN-020; tidak lagi dirender pada /e-portfolio-2 sejak naskah final OWN-021 | [Buka resource](https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view); [source historis](artifacts/e-portfolio-2-uas/README.md) |
| EVD-049 | LK 4 Refleksi Siklus 2 | MySQL/pengelolaan data · 15 September 2026 · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-050 | LK 4 Refleksi Siklus 3 | Pengolahan data/susunan tabel · 6 Oktober 2026 · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-051 | LK 4 Refleksi Siklus 4 | Hubungan antartabel · 20 Oktober 2026 · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view); [source](app/e-portfolio-2/page.tsx) |

### Tambahan inventory naskah final E-Portfolio 2 (OWN-021)

Enam URL Modul Ajar dari prompt pemilik ditambahkan pada 30 Oktober 2026. LK 4 Siklus 1 memakai kembali URL yang sama dengan E-Portfolio 1. Kesepuluh halaman tujuan diperiksa anonim: HTTP 200 dan judul file sesuai nomor Modul Ajar/siklus. Pemeriksaan ini memastikan akses halaman tujuan dan identitas file, bukan audit substansi PDF, hasil siswa atau pemilihan rancangan utama UAS. EVD-049–051 tetap dirender dalam Dokumen Refleksi; tanggal di inventory adalah konteks historis, tidak ditambahkan ke naskah final.

| ID | Dokumen | Konteks | Resource / source |
|---|---|---|---|
| EVD-052 | Modul Ajar 1 — Pengenalan Basis Data | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/15FBTxHhIAXNrzgkZw4hMp7T3J2DDWXLq/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-053 | Modul Ajar 2 — Pengelolaan Data | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1mcBgR0FzLKpaXBavg2bg6QnczzeSskSy/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-054 | Modul Ajar 3 — Pencarian dan Pengolahan Data | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1EkbSUeBNoUXutPlGuZSMCIbABeQJMhG5/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-055 | Modul Ajar 4 — Struktur dan Aturan Tabel | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/1Xp_llEKpXvG_Hxus0dsCUSp7PIST6H74/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-056 | Modul Ajar 5 — Hubungan Antartabel | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/13eAyAqVkZAMob7sCZTnmyDcH9m-t5jux/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-057 | Modul Ajar 6 — Penerapan Basis Data | Perangkat Pembelajaran Basis Data · /e-portfolio-2 | [Buka resource](https://drive.google.com/file/d/10EKiKAuKb5M-1IB9YqtMbDZEyFp_82v0/view); [source](app/e-portfolio-2/page.tsx) |
| EVD-058 | LK 4 — Refleksi Siklus 1 | Konteks awal Laravel · Dokumen Refleksi /e-portfolio-2; URL juga dipakai /e-portfolio-1 | [Buka resource](https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view); [source](app/e-portfolio-2/page.tsx) |
