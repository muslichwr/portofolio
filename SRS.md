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

Navbar berisi tujuh route. Route aktif cocok exact atau child dengan delimiter `/`; `/refleksi` tidak cocok dengan `/refleksi-akhir`. Footer hanya memuat `/`, `/artefak`, `/penilaian`, `/refleksi`. `_not-found` adalah route internal hasil framework, bukan halaman produk kedelapan. Tidak ditemukan nested content route, dynamic segment, API route, middleware, atau custom error/loading page pada tree utama.

### Data flow dan batas server/client

```text
Konstanta TSX + foto lokal + URL dokumen eksternal
→ server pages dan root layout
→ HTML prerender + client components
→ state lokal (menu, Work/Studies, course tab, accordion)
→ klik tautan internal atau navigasi ke Google Drive/Docs/sosial
```

[RootLayout](app/layout.tsx) memasang Inter/Geist Mono, metadata root, `html lang="id"`, radial glow dekoratif, SmoothScrollProvider, Navbar, satu main, dan Footer. Provider client menerima children server; ini tidak otomatis mengubah semua page menjadi client component. Tidak ada proses fetch dokumen eksternal di source; link dibuka oleh visitor.

Client boundaries eksplisit: Navbar, SmoothScrollProvider, ArtifactCard, CpmkBanner, WorkStudiesToggle, RefleksiMatkulClient, dan primitive Separator/Sheet/Progress. Footer dan score calculation berada di server source. Badge/Button memakai primitive Base UI; jangan mengasumsikan seluruh primitive bebas JavaScript hanya dari directive file lokal.

State memakai React `useState`, tidak disimpan ke database, URL, atau localStorage. Refresh mengembalikan state awal. Navbar menutup menu ketika link mobile dipilih; penanganan Escape/focus management tidak ditemukan di kode custom. Tab mata kuliah merender satu course; pergantian key meremount isi dan mereset accordion. Modal rubrik tidak ditemukan pada implementasi saat ini meskipun disebut dokumen engineering lama.

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
| `ArtifactCardProps`, ArtifactCard | title, cycle, techTags, pedagogyTags, context, optional theoryIntro, theories `{name, description}`, strengths, weaknesses, adjustments, downloads `{label, href}`, optional index | Content berasal dari `artifacts` pada page Artefak; thumbnail/structured result/evidence preview belum tersedia |
| `TeachingCycle`, page Penilaian | cycle, label, rawScore, rawMaxScore, overallScore, highlight, metrics `{metric, icon, score, maxScore}` | Overall score tersimpan eksplisit, bukan dihitung otomatis dari rawScore; perubahan harus menjaga konsistensi konversi |
| `TimelineEntry`, WorkStudiesToggle | period, role, institution, description, icon, iconColor | Array workEntries/studiesEntries terpisah dari timeline PPG About; periksa semua narasi terkait |
| `CourseData`, RefleksiMatkulClient | tabLabel, title, lk2PdfHref `string\|null`, sections, artifacts, optional crossLink/devNote | Default tab index 0; enam course; all linked values currently non-null |
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
- **Deskripsi:** Menghubungkan tujuh route utama dan subset footer.
- **Rationale:** Semua area akademik/profesional dapat ditemukan.
- **Expected behavior:** Desktop links, menu mobile, active match exact/child; klik link mobile menutup menu.
- **Acceptance criteria:** Semua href internal resolve; `/refleksi` tidak aktif pada `/refleksi-akhir`; menu tersedia di bawah breakpoint md.
- **Status:** Implemented.
- **Related page/component:** Navbar, Footer.
- **Verification:** Source dan tujuh HTTP 200; interaksi mobile runtime belum diverifikasi.

### FR-NAV-002

- **Nama:** Evaluasi information architecture.
- **Deskripsi:** Menilai label dan pengelompokan sesuai dua audiens.
- **Rationale:** Tiga istilah refleksi berdekatan dan label bahasa bercampur.
- **Expected behavior:** Usulan pemetaan navigasi tanpa menganggap enam label sebagai route final.
- **Acceptance criteria:** Peta current→target, dampak konten/URL, journey kedua audiens, serta keputusan pemilik tercatat sebelum perubahan navigasi/route.
- **Status:** Proposed.
- **Related page/component:** Navbar/Footer, seluruh halaman.
- **Verification:** Belum ada user testing atau keputusan IA final.

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
- **Status:** Proposed.
- **Related page/component:** Artefak, ArtifactCard, teaser Home.
- **Verification:** Struktur ringkas belum diimplementasikan.

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
- **Verification:** Button native dan aria-expanded accordion tersedia; navbar tanpa aria-expanded/controls/current, tab tanpa selected-panel semantics; focus runtime belum diverifikasi.

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
- **Verification:** Responsive classes diperiksa; mobile/tablet/desktop render belum dinyatakan lolos; tiga kolom ringkasan Penilaian tetap perlu diuji pada mobile.

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
| ISSUE-002 | ISSUE | Karakter guru berulang Home/About/Akhir; kasus belum memiliki summary standar | Kurangi repetisi claim melalui evidence; FR-CASE-002, FR-EVIDENCE-002 |
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

## Verifikasi Dokumentasi Setelah Penulisan

Pemeriksaan terarah pada 7 Oktober 2026 menggunakan Python serta TypeScript AST yang sudah tersedia, tanpa menambahkan test tooling/script tracked:

- Delapan file dokumentasi/router tersedia; 117 tautan lokal beserta anchor Markdown yang digunakan valid; 25 tabel memiliki struktur kolom konsisten.
- 27 ID requirement unik memiliki delapan field wajib dan status yang valid; seluruh ID roadmap ada di registry.
- Tujuh phase memiliki delapan bagian wajib; phase aplikasi tetap NOT STARTED.
- 42 record EVD dan 15 issue teridentifikasi; URL inventory cocok persis dengan URL unik source aktif.
- Hash source/config/assets yang ada sebelum tugas cocok setelah penulisan. Perubahan hanya dokumen/router yang diizinkan; penghapusan awal CLAUDE dan sembilan dokumen lama tetap dipertahankan.
- Review whitespace dan diff selesai; tidak ada commit, deploy, atau implementasi roadmap. Verification ini tidak menutup gap aplikasi yang tercatat di atas.

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
