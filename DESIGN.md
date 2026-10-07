# Design, UX, UI, Architecture & Interaction

Baseline: **7 Oktober 2026**, commit `4c043ef`. Deskripsi CURRENT STATE diturunkan dari CSS/TSX dan HTML production, bukan screenshot yang berhasil diverifikasi. Audit browser otomatis gagal; jangan menganggap dokumen ini sebagai sertifikat tampilan mobile, keyboard, atau WCAG. Konteks produk ada di [PRD](PRD.md); requirement dan register gap ada di [SRS](SRS.md).

## Design Philosophy

**CURRENT STATE:** visual menggunakan dark surface zinc, judul besar rapat, kicker monospaced, detail editorial, kartu dengan border tipis, navbar pill mengambang, radial glow cyan/biru, dan animasi ringan. Warna semantik tetap muncul pada badge, ikon, timeline, dan 4C; website bukan monochrome murni.

Komentar CSS menyebut brutalist/Amaral aesthetic; WorkStudiesToggle menyebut `rafaelamaral.dev`. Ini jejak inspirasi pada source, bukan bukti keputusan pemilik atau izin menyalin asset pihak lain. Dark theme dan stack dipertahankan sebagai baseline untuk perubahan terbatas.

**DECISION:** kejelasan, evidence, suara personal profesional, kedalaman akademik, accessibility, responsive behavior, dan maintainability memandu pengembangan. **PROPOSED:** ringkasan profesional/case study yang lebih mudah dipindai. Tidak ada redesign atau desain layar baru yang disetujui oleh dokumentasi ini.

## Visual Language

### Typography

Sumber: [layout](app/layout.tsx), [global CSS](app/globals.css), dan page classes.

| Elemen | Implementasi aktual |
|---|---|
| Sans | Inter melalui `next/font/google`, variable `--font-sans`, subset latin, display swap |
| Mono | Geist Mono, variable `--font-geist-mono`, subset latin, display swap |
| Token heading | `--font-heading: var(--font-sans)`; bukan font ketiga |
| Home h1 | `text-[clamp(2.5rem,7vw,6.5rem)]`, extrabold, leading 0.9, tracking-tighter; EDUCATOR memakai text gradient |
| Child page h1 | `text-4xl sm:text-5xl md:text-7xl`, extrabold, tracking-tighter |
| Section headings | Variasi `text-2xl/3xl` hingga `md:text-3xl/5xl`; jangan menganggap satu scale seragam |
| Body | `text-sm`/`text-base`, leading-relaxed, umumnya zinc-400; secondary text zinc-500 |
| Kicker/caption | Mono, text-xs atau text-[11px], uppercase, tracking-widest/[0.2em], sering zinc-600 |
| Angka/teknis | font-mono untuk score, tags, dan beberapa istilah teknis; tidak semua tanggal memakai mono |

Font dimuat oleh Next dan disajikan sebagai asset production. Jangan menyimpulkan tidak ada kebutuhan network pada build atau tidak ada layout shift dari penggunaan next/font saja.

### Color tokens

Nilai aktual `:root` dan mapping `@theme inline` di global CSS:

| Token | Nilai |
|---|---|
| `--background`, `--primary-foreground` | `oklch(0.141 0.005 285.823)` |
| `--foreground`, `--card-foreground`, `--popover-foreground`, `--secondary-foreground`, `--accent-foreground` | `oklch(0.92 0.004 286.32)` |
| `--card`, `--popover` | `oklch(0.21 0.006 285.885)` |
| `--primary` | `oklch(0.985 0 0)` |
| `--secondary`, `--muted`, `--accent` | `oklch(0.274 0.006 286.033)` |
| `--muted-foreground`, `--ring` | `oklch(0.552 0.016 285.938)` |
| `--destructive` | `oklch(0.704 0.191 22.216)` |
| `--border` | `oklch(1 0 0 / 10%)` |
| `--input` | `oklch(1 0 0 / 15%)` |
| `--chart-1` hingga `--chart-5` | `oklch(0.87 0 0)`, `oklch(0.7 0 0)`, `oklch(0.55 0 0)`, `oklch(0.4 0 0)`, `oklch(0.25 0 0)` |

Sidebar tokens juga tersedia: sidebar `0.21 0.006 285.885`, foreground/accent-foreground `0.92 0.004 286.32`, primary `0.985 0 0`, primary-foreground `0.141 0.005 285.823`, accent `0.274 0.006 286.033`, border putih 10%, ring `0.552 0.016 285.938` dalam OKLCH. **CURRENT STATE:** belum ada sidebar yang menggunakannya. Chart tokens tidak berarti ada chart component; Penilaian memakai ScoreBar inline dengan gradient zinc.

CSS memetakan token ke `--color-*`, sehingga utility semantic seperti bg-background/text-foreground dapat dipakai. Banyak page juga memakai zinc/white utility langsung dan nilai opacity/arbitrary; dokumentasi tidak mengklaim semua styling sudah token-only.

Dark palette didefinisikan pada root tanpa theme switcher. Variant `.dark` tersedia, tetapi root layout tidak memasang class `.dark`. Jangan mengubah activation variant demi “merapikan” tema pada task yang tidak meminta perubahan itu.

### Semantic accents dan imagery

- Cyan/teal/blue: glow latar dan foto, indikator timeline/ikon tertentu. Glow root memakai `rgba(6,182,212,0.12)` dan `rgba(59,130,246,0.06)`.
- Emerald: pedagogy badges, checklist, delta non-negatif.
- Amber: peringatan, beberapa status, delta negatif.
- 4C: Connection sky, Challenge amber, Concept emerald, Change violet; source color map menggunakan bg-*-900/30, border-*-900/40, text-*-400.
- Foto profil JPG memakai next/image, alt nama pemilik, crop object-cover. Home avatar 96×96 dan priority; About memakai presentasi profil berbeda. PNG tersedia tetapi belum ditemukan penggunaannya.
- Ikon UI memakai Lucide; brand GitHub/LinkedIn/Instagram memakai SVG inline karena source tidak memakai brand icon Lucide. SVG dekoratif diberi aria-hidden pada beberapa lokasi.
- Diagram pembelajaran disebut dalam narasi, tetapi asset diagram dan foto kegiatan/artefak siswa belum ditemukan secara lokal. Jangan membuat visual baru sebagai evidence dokumenter.

### Spacing, radius, border, shadows

Tailwind terpasang memiliki `--spacing: 0.25rem`. Pola yang sering dipakai: `px-6` (1.5rem), `py-16` (4rem), `md:py-24` (6rem), `gap-3/4/6/8/12`, dan `space-y-3/4/6/8`. Ini inventory, bukan satu sistem spacing formal yang sudah diterapkan merata.

Radius root `--radius: 0.5rem`; derived tokens: sm ×0.6, md ×0.8, lg ×1, xl ×1.4, 2xl ×1.8, 3xl ×2.2, 4xl ×2.6. Page juga memakai rounded-md/lg/xl/2xl/full. Navbar/CTA pill dan avatar rounded-full tidak mengikuti radius card.

Card primitive: rounded-xl, bg-card, ring-1 ring-foreground/10; page sering override menjadi bg-zinc-950 atau bg-white/[0.02], border-zinc-800/50 atau border-white/[0.06]. Hover meningkatkan border/background secara halus. Navbar setelah scroll memakai shadow-lg shadow-black/20; kebanyakan card mengandalkan surface/border, bukan heavy shadow. Separator menggunakan warna zinc dengan opacity.

## Layout System dan Responsive Design

Nilai default Tailwind terpasang: sm **40rem**, md **48rem**, lg **64rem**. Pada root font 16px setara 640/768/1024 CSS px. Tidak ada custom breakpoint override pada global CSS. Container 4xl **56rem**, 6xl **72rem**, diverifikasi dari theme Tailwind lokal.

| Area | Current layout | Responsive behavior dalam kode |
|---|---|---|
| Root shell | Satu `main`, relative z-10, min-h-screen, pt-24; navbar fixed top | Main memberi ruang navbar; beberapa page juga memiliki pt-24/md:pt-32 |
| Reading content | mx-auto max-w-4xl, px-6 | Lebar dibatasi untuk long-form; line length aktual belum diukur |
| Home hero | min-h-[90vh], centered, py-10, clamp heading | Copy sm:text-base; karakter guru dua kolom mulai sm; teaser tiga kolom mulai md |
| About | Profil/narasi satu kolom lalu md:grid-cols-3; narasi span dua kolom | Card lain satu→dua/tiga kolom pada md; alur praktik vertikal→horizontal pada sm |
| Artefak | Tiga card ditumpuk dengan gap-12 | Download grid satu→dua kolom pada md |
| Penilaian | Dua area L7/L8, cards/metric bars | Ringkasan masing-masing tetap grid-cols-3 bahkan mobile; download L7/L8 satu→dua kolom md |
| Refleksi Akhir | Long-form, timeline, callout, link cards | Nilai guru satu→dua kolom md |
| Mata Kuliah | Pengantar 4C dan satu active course | Pengantar satu→dua kolom sm→empat lg; tab flex-wrap; dokumen LK2 flex-col→row sm; supporting artifacts dua kolom md |
| Navbar | Pill centered, fixed, px-4/pt-4, z-50 | Desktop md:flex; tombol mobile md:hidden; panel mobile fixed top-[4.5rem], mx-4 |
| Footer | max-w-6xl px-6 py-16 | Susunan flex-col→row md; navigation flex-wrap |

**ISSUE:** overflow, ukuran target kontrol, wrapping judul panjang, ringkasan Penilaian, dan kedekatan menu tetap membutuhkan render test. Lenis CSS memakai width 100vw; dampak scrollbar/overflow belum diverifikasi. Tidak ditemukan jaminan overflow-x hidden global yang dapat diwarisi dari checklist lama.

Default verification mendatang: 360/390, 768, 1440 CSS px dan zoom 200%, dengan page dan state yang diuji dicatat. Ini skenario uji, bukan hasil lolos baseline.

## Component System

### Komponen aktif

| Komponen | Source | Peran dan batas |
|---|---|---|
| Navbar | [Navbar.tsx](components/layout/Navbar.tsx) | Shared client nav, route active, scroll state, mobile panel; panel bukan Sheet |
| Footer | [Footer.tsx](components/layout/Footer.tsx) | Shared server footer, subset nav, sosial, current year saat render |
| SmoothScrollProvider | [smooth-scroll.tsx](components/providers/smooth-scroll.tsx) | Lenis global dan rAF; tidak mengelola route/content data |
| ArtifactCard | [ArtifactCard.tsx](components/sections/ArtifactCard.tsx) | Client motion reveal; ParagraphSection, TheorySection, ListSection, DownloadGrid sebagai helper internal |
| CpmkBanner | [CpmkBanner.tsx](components/sections/CpmkBanner.tsx) | Accordion empat komponen analisis; bukan sertifikasi pemenuhan rubrik |
| WorkStudiesToggle | [WorkStudiesToggle.tsx](components/sections/WorkStudiesToggle.tsx) | Tab pengalaman/pendidikan dan timeline; default Work |
| RefleksiMatkulClient | [RefleksiMatkulClient.tsx](components/sections/RefleksiMatkulClient.tsx) | Enam course, AccordionSection, CourseContent, FormalLk2Card, ArtifactEvidenceItem, renderContent |
| Card family | [card.tsx](components/ui/card.tsx) | Wrapper lokal div untuk header/title/content/footer; CardTitle bukan heading semantic |
| Badge | [badge.tsx](components/ui/badge.tsx) | Variants default/secondary/destructive/outline/ghost/link, Base UI useRender |
| Separator | [separator.tsx](components/ui/separator.tsx) | Base UI separator, horizontal/vertical |
| ScoreBar | [page Penilaian](app/penilaian/page.tsx) | Helper server inline; track/fill div dan numeric span; tidak memakai Progress primitive |

### Tersedia tetapi belum dipakai oleh halaman

| Primitive | Source | Kondisi |
|---|---|---|
| Button | [button.tsx](components/ui/button.tsx) | Dipakai oleh Sheet lokal; belum ditemukan penggunaan page/section aktif |
| Sheet | [sheet.tsx](components/ui/sheet.tsx) | Base UI Dialog, portal/backdrop/close; tidak digunakan Navbar saat ini |
| Progress | [progress.tsx](components/ui/progress.tsx) | Base UI Progress; tidak digunakan score bars Penilaian |

Hero, CTA, timeline About/Akhir, assessment card, dan reflection card adalah **pola inline**, bukan reusable component baru bernama Hero/Timeline/CTA. Jangan membuat inventory seolah komponen tersebut sudah ada. `cn()` dari [utils](lib/utils.ts) menggabungkan clsx dan tailwind-merge.

## Page Anatomy

| Page | Urutan isi aktual |
|---|---|
| Home | Hero avatar/nama/location badge/positioning/Pembelajaran Mendalam/CTA/sosial → Model Guru (4 karakter) → Work & Studies → teaser 3 artefak + CTA Artefak/Refleksi Akhir |
| About | Page hero → Narasi & Perjalanan (profil, biografi, inspirasi, tujuan) → Model Guru (pendekatan Pembelajaran Mendalam/alur praktik, CTA, karakter, kompetensi, role model Palmer) → Timeline PPG |
| Artefak | Hero/penjelasan/orientasi Pembelajaran Mendalam → CpmkBanner → tiga ArtifactCard; setiap card: cycle/title/tags → konteks → teori → keberhasilan → kendala → penyesuaian → dokumen |
| Penilaian | Hero Transparansi Evaluasi → Penilaian Perangkat L7 (rekap + rincian 3 siklus) → Praktik Mengajar L8 (rekap + rincian 3 siklus) → download L7/L8 |
| Refleksi PPL | Hero Refleksi & Visi Pendidik → model/filosofi → strengths/weaknesses → tiga RTL → CTA Refleksi Akhir |
| Refleksi Akhir | Hero → perjalanan 6 tahap → tantangan/solusi 4 kasus → feedback GP → filosofi → nilai guru 4 item → empat link pendukung |
| Refleksi Mata Kuliah | Hero/konteks semester → pengantar Connection/Challenge/Concept/Change → course tab bar → active course title → enam accordion → LK 2 → supporting artifacts → optional cross-link PPL |

Root Navbar/main/Footer mengapit semua anatomy tersebut. Source location dan model data detail tersedia di SRS.

## Interaction dan Motion

| Kontrol | State awal dan perilaku source | Batas/gap |
|---|---|---|
| Navbar | isMobileOpen false, hasScrolled false; listener passive mengubah style setelah scrollY>20; link mobile menutup panel | Belum ada expanded/controls/current attributes atau handler Escape/focus pada custom menu |
| Work/Studies | activeTab work; dua button memilih data; sliding highlight + AnimatePresence mode wait | Tab bukan ARIA tablist/tabpanel; tidak ada aria-selected/pressed atau arrow-key handler custom |
| CPMK | isOpen false; button aria-expanded; content ditambahkan/dihapus dengan animasi height/opacity | aria-controls/ID panel tidak ditemukan |
| Mata kuliah | activeTabIndex 0; enam button; active CourseContent keyed by tabLabel | State tab tidak masuk URL; inactive course tidak dirender; direct link tiap course belum tersedia |
| Accordion course | Semua tertutup; button aria-expanded; content hanya dirender ketika terbuka | Berganti course mereset accordion; relationship controls-panel dan keyboard/focus runtime perlu audit |
| External documents | ArtifactCard/Penilaian memakai `download` pada URL Drive view; course memakai target blank + rel noopener noreferrer | Direct download tidak dijamin; label accessible berulang |
| Artefak reveal | initial hidden, whileInView visible, once true, margin −60px, stagger by index | Progressive reading/JS-disabled visibility belum diverifikasi |

Lenis: duration **1.2**, easing `min(1, 1.001 - 2^(-10t))`, infinite false, manual requestAnimationFrame. Cleanup memanggil destroy dan mengosongkan ref, tetapi tidak cancel scheduled rAF. Risiko lifecycle dicatat pada NFR-RELIABILITY-001; belum diperbaiki pada tugas dokumentasi.

Motion memakai Framer Motion untuk navbar enter/active pill, mobile panel, Work/Studies, artefak, CPMK, course/accordion. Source tidak menggunakan `useReducedMotion`, MotionConfig reducedMotion, atau media prefers-reduced-motion. Jangan menganggap dependensi otomatis membuat semua motion aksesibel.

## Content Design

**DECISION / aturan perubahan:** gunakan suara “saya” untuk pengalaman/refleksi; profesional, natural, tidak hiperbolis. Istilah teknis dipasangkan dengan tujuan pedagogis. Pertahankan friksi nyata: typo, versi OS/paket, koneksi, waktu lab, kesulitan komunikasi, dan materi yang belum tuntas.

- Bedakan observasi dari interpretasi dan rencana. “Perlu dibuat” tidak boleh ditulis ulang sebagai intervensi yang sudah berhasil.
- Heading menjelaskan isi; ringkasan dapat diikuti detail panjang. **CURRENT STATE:** judul visual belum selalu menjadi heading semantik.
- Tunjukkan evidence dekat dengan claim bila tersedia; kurangi pengulangan nilai reflektif/fasilitatif/inovatif/adaptif dengan menghubungkannya ke kasus nyata.
- Konsistensi istilah: Muslich Wahyu Romadhon; S1 Pendidikan Teknologi Informasi; SMK Negeri 1 Surabaya; SMKS Tunas Bangsa Pare; Guru Pamong/GP; Dosen Pembimbing Lapangan/DPL; Lampiran 7 perangkat dan Lampiran 8 praktik. PPLG dan RPL memiliki konteks berbeda; jangan menyamakan jurusan/bidang PPG dengan kelas praktik tanpa bukti.
- Nomenklatur semester/course/IPK/tanggal pekerjaan harus dikonfirmasi dari sumber/pemilik sebelum diubah. Jangan memperbaikinya hanya dari perkiraan.
- Citation yang ada dipertahankan sesuai source sampai diverifikasi. Jangan menambah author/year/DOI untuk membuat copy tampak ilmiah.

## Accessibility Design

### Current state

Landmark header/nav/main/footer, `html lang=id`, satu h1 per page, alt foto, social icon labels, serta aria-expanded accordion tersedia. Primitive Button/Badge memiliki focus-visible styles, tetapi sebagian besar kontrol aktif adalah button/link custom; kelas primitive yang belum digunakan bukan bukti seluruh UI memiliki focus yang baik.

**ISSUE:** CardTitle berupa div; Artefak langsung h1→h4; About timeline h2→h4; course header div diikuti h4. Navbar/tab/panel belum lengkap statusnya. Link resource berulang “Unduh”, “Lihat Artefak”, dan “Buka Dokumen LK 2”. Full keyboard/focus audit belum berhasil.

Perhitungan statis dengan foreground opaque di root background menghasilkan muted token sekitar **4,12:1**, zinc-600 sekitar **2,57:1**. Nilai ini menunjukkan risiko; tidak memperhitungkan seluruh background/glow/opacity/font size atau computed style. Jangan menyatakan semua elemen gagal/lolos dari perhitungan pasangan tunggal.

### Aturan target untuk perubahan UI

**PROPOSED remediation**, berdasarkan FR-A11Y-001–003 dan NFR-RELIABILITY-001:

- Heading semantic mengikuti struktur isi; satu h1, heading kasus/section relevan, landmark tetap bermakna.
- Semua action reachable dan operable melalui keyboard; focus terlihat dan tidak tertutup navbar/panel. Status/control relation jelas; jangan menambahkan role tab tanpa perilaku keyboard yang mendukung.
- Nama accessible resource mencantumkan identitas dokumen/siklus/course; label buka/download sesuai tindakan yang nyata.
- Kontras teks biasa minimal 4,5:1 dan teks besar minimal 3:1, dengan pengecualian yang memang berlaku menurut [WCAG 2.2 SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Ukur pasangan actual; ini target, bukan klaim compliance saat ini.
- Bila memilih tab semantics, terapkan hubungan tablist/tab/tabpanel, selected state, dan keyboard sesuai [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Pilihan kontrol harus koheren, bukan atribut ARIA dekoratif.
- Hormati reduced motion; konten tidak bergantung animation reveal untuk dapat dibaca. Nilai naik/turun memiliki makna teks/indikator selain warna.

## Target Design Improvements

Semua item berikut **PROPOSED** dan bukan spesifikasi redesign final:

| Arah | Requirement | Kebutuhan sebelum implementasi |
|---|---|---|
| Homepage positioning/filsafat/CTA praktik | FR-HOME-002 | Copy dan tujuan link disetujui; gunakan fakta tersedia |
| Case study dengan ringkasan cepat | FR-CASE-002 | Kasus/evidence aktual dipetakan; detail akademik tetap tersedia |
| Evidence dekat claim, lebih sedikit repetisi | FR-EVIDENCE-002 | Resource/hasil/diagram diverifikasi atau ditandai belum tersedia |
| Navigasi dan refleksi lebih jelas | FR-NAV-002, FR-REFLECTION-004 | Pemetaan konten/URL dan keputusan pemilik |
| Indikator penilaian non-linear koheren | FR-ASSESSMENT-002 | Nilai dipertahankan; simbol positif/nol/negatif bermakna |
| References, accessibility, social preview | FR-ACADEMIC-002, FR-A11Y-001–003, FR-SEO-002 | Sumber primer, verifikasi keyboard/contrast, asset sosial yang sah |

Shared primitive dapat berdampak pada beberapa page. Sebelum mengubah CardTitle, Navbar, CSS token, atau motion provider, telusuri semua caller dan jalankan acceptance lintas halaman terkait. Jangan melakukan normalisasi visual menyeluruh sebagai cleanup task kecil.
