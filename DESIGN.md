# Design, UX, UI, Architecture & Interaction

Baseline: **7 Oktober 2026**, commit `4c043ef`. Deskripsi CURRENT STATE diturunkan dari CSS/TSX dan HTML production, bukan screenshot yang berhasil diverifikasi. Audit browser otomatis gagal; jangan menganggap dokumen ini sebagai sertifikat tampilan mobile, keyboard, atau WCAG. Konteks produk ada di [PRD](PRD.md); requirement dan register gap ada di [SRS](SRS.md).

## Design Philosophy

**CURRENT STATE:** visual menggunakan dark surface zinc, judul besar rapat, kicker monospaced, detail editorial, kartu dengan border tipis, navbar pill mengambang, radial glow cyan/biru, dan animasi ringan. Warna semantik tetap muncul pada badge, ikon, timeline, dan 4C; website bukan monochrome murni.

Komentar CSS menyebut brutalist/Amaral aesthetic; WorkStudiesToggle menyebut `rafaelamaral.dev`. Ini jejak inspirasi pada source, bukan bukti keputusan pemilik atau izin menyalin asset pihak lain. Dark theme dan stack dipertahankan sebagai baseline untuk perubahan terbatas.

**DECISION:** kejelasan, evidence, suara personal profesional, kedalaman akademik, accessibility, responsive behavior, dan maintainability memandu pengembangan. **CURRENT STATE:** tiga ArtifactCard memiliki Ringkasan Kasus sesuai FR-CASE-002. **PROPOSED:** penguatan ringkasan profesional pada homepage. Tidak ada redesign atau desain layar baru yang disetujui oleh dokumentasi ini.

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
| Penilaian | Dua area L7/L8, cards/metric bars | Ringkasan satu kolom pada mobile, tiga mulai sm; badge highlight dapat wrap; judul rincian dan skor memiliki gap, skor tidak menyusut; download L7/L8 satu→dua kolom md |
| Refleksi Akhir | Long-form, timeline, callout, link cards | Nilai guru satu→dua kolom md |
| Mata Kuliah Semester I/II | Pengantar 4C dan satu active course; renderer sama pada kedua route | Semester I enam tab, Semester II lima tab; pengantar satu→dua kolom sm→empat lg; tab flex-wrap; dokumen LK2 flex-col→row sm; supporting artifacts dua kolom md; kelima refleksi Semester II terisi; resource tanpa URL memakai fallback yang sama |
| E-Portfolio 1 | Editorial vertikal max-w-4xl; hero aktual minimal, lima bagian bernomor, tanpa Daftar Isi | Naskah final OWN-024, pola DocumentEvidenceRow lokal mengikuti E-Portfolio 2; tombol Modul Ajar/Media Ajar/Refleksi serta Canva; iframe responsif dan dua carousel memakai data foto E-Portfolio 2 |
| E-Portfolio 2 | Editorial gelap max-w-4xl, hero besar dan lima bagian bernomor | Placeholder ringkas berborder kiri, tiga ringkasan siklus dengan tanggal/tautan LK 4, carousel horizontal berkredit, refleksi akhir dan tautan E-Portfolio 1 |
| Navbar | Pill centered, fixed, px-4/pt-4, z-50; absolute hanya pada kedua portfolio | Desktop md:flex: Home/About + dua tombol semester; grouping lama dipertahankan, E-Portfolio 2 ditambahkan ke Semester 2. Panel desktop absolute right-0, mt-3, w-[360px]. Mobile tiga belas link termasuk kedua E-Portfolio; panel fixed top-[4.5rem], mx-4, tinggi maksimal calc(100dvh - 5.5rem) dan overflow-y-auto agar tujuan terakhir terjangkau pada layar pendek. Header transparan meneruskan pointer di mobile; pill/menu tetap interaktif |
| Footer | max-w-6xl px-6 py-16 | Susunan flex-col→row md; navigation flex-wrap |

**ISSUE:** overflow, ukuran target kontrol, wrapping judul panjang, ringkasan Penilaian, dan kedekatan menu tetap membutuhkan render test. Lenis CSS memakai width 100vw; dampak scrollbar/overflow belum diverifikasi. Tidak ditemukan jaminan overflow-x hidden global yang dapat diwarisi dari checklist lama.

Default verification mendatang: 360/390, 768, 1440 CSS px dan zoom 200%, dengan page dan state yang diuji dicatat. Ini skenario uji, bukan hasil lolos baseline.

## Component System

### Komponen aktif

| Komponen | Source | Peran dan batas |
|---|---|---|
| Navbar | [Navbar.tsx](components/layout/Navbar.tsx) | Shared client nav, parent/child active, scroll state, dropdown semester desktop dan panel mobile; panel bukan Sheet |
| Footer | [Footer.tsx](components/layout/Footer.tsx) | Shared server footer, subset nav, sosial, current year saat render |
| SmoothScrollProvider | [smooth-scroll.tsx](components/providers/smooth-scroll.tsx) | Lenis global dan rAF; tidak mengelola route/content data |
| ArtifactCard | [ArtifactCard.tsx](components/sections/ArtifactCard.tsx) | Client motion reveal; Ringkasan Kasus inline; ParagraphSection, TheorySection, ListSection, DownloadGrid sebagai helper internal |
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
| Artefak | Hero/penjelasan/orientasi Pembelajaran Mendalam → CpmkBanner → tiga ArtifactCard; setiap card: cycle/title/tags → Ringkasan Kasus (Masalah/Tindakan/Bukti/Hasil/Refleksi; dl lima baris, md label/value dua kolom, border zinc-800, bg-zinc-900/30) → konteks → teori → keberhasilan → kendala → penyesuaian → dokumen |
| Penilaian | Hero Transparansi Evaluasi → Penilaian Perangkat L7 (rekap + rincian 3 siklus) → Praktik Mengajar L8 (rekap + rincian 3 siklus) → download L7/L8 |
| Refleksi PPL | Hero Refleksi & Visi Pendidik → model/filosofi → strengths/weaknesses → tiga RTL → CTA Refleksi Akhir |
| Refleksi Akhir | Hero → perjalanan 6 tahap → tantangan/solusi 4 kasus → feedback GP → filosofi → nilai guru 4 item → empat link pendukung |
| Refleksi Mata Kuliah | Hero/konteks semester → pengantar Connection/Challenge/Concept/Change → course tab bar → active course title → enam accordion → LK 2 → supporting artifacts → optional cross-link PPL |
| Refleksi Program PPG | Minimal hero TAHAP 4 / REFLEKSI AKHIR → daftar isi tiga anchor bergaris → tiga bagian bernomor dengan jawaban LK 3 verbatim; RTL mempertahankan tiga paragraf bernomor. Tidak ada kartu atau tautan dokumen tanpa URL terverifikasi |
| Visi Pribadi / Identifikasi Diri | Minimal hero SEMINAR PPG / TAHAP 1 → daftar isi tiga anchor → Visi untuk Pendidikan Indonesia (tiga paragraf) → Visi sebagai Calon Guru (tiga paragraf) → Langkah-Langkah untuk Mencapai Visi (pengantar dan ordered list tujuh tindakan) → Dokumen Pendukung (keterangan tanpa link PDF) dan tautan teks ke Tahap 4. Naskah LK 1 verbatim sebagai pandangan sebelum Seminar PPG |
| Karya Inovasi Pendidikan | Hero SEMINAR PPG / TAHAP 5 — LK 4, judul proyek/sasaran dan batas kesiapan teknis → daftar isi enam anchor → kebutuhan → gagasan (alur teks dan lima langkah) → riset → produk utama/daftar enam perangkat → rencana 240 menit → rancangan evaluasi → Dokumen Utama LK 4. Lima dokumen publik terverifikasi ditautkan; prototipe dan buku HTML berupa teks tanpa link |
| E-Portfolio 1 | Hero “Praktik Mengajar Mandiri Siklus 1” dan eyebrow aktual → Perencanaan Pembelajaran (empat Modul Ajar) → Materi, Media, dan Penilaian (Canva, empat Media Ajar, penilaian umum) → Pelaksanaan dan Video (status sementara, iframe/fallback, galeri mengajar) → Kegiatan Nonmengajar (galeri) → Refleksi Akhir (satu LK 3 terbimbing) → tautan E-Portfolio 2. Lima ID mengikuti bagian E-Portfolio 2; tanpa Daftar Isi, contoh/rubrik atau foto stok. Caption/aset berasal langsung dari konfigurasi foto E-Portfolio 2 |
| E-Portfolio 2 | Sampul UAS formal (teks kiri/foto kanan desktop, teks lalu foto mobile; static import muslich1.jpg, tanpa logo; anchor Lihat Isi Portofolio ke hero) → Hero minimal “Praktik Mengajar Mandiri 2” dan identitas UAS, tanpa Daftar Isi → lima bagian/ID anchor → Perencanaan Pembelajaran (enam Modul Ajar dan status rancangan utama) → Materi, Media, dan Penilaian (naskah OWN-023, empat subjudul, satu Canva, enam baris Media Ajar, satu folder tugas) → Pelaksanaan dan Video (video sementara berstatus/fallback, galeri mengajar) → Kegiatan Nonmengajar (galeri lokal) → Refleksi Akhir (empat LK 4) → tautan E-Portfolio 1. Design lock OWN-023 sudah sesuai source awal task; task ini hanya mengganti isi bagian 02 dan memperluas label aksi DocumentEvidenceRow, tanpa mengganti hero/navigasi/bagian lain |

Root Navbar/main/Footer mengapit semua anatomy tersebut. Source location dan model data detail tersedia di SRS.

**CURRENT STATE (30 Oktober 2026, OWN-022, setelah klarifikasi):** E-Portfolio 2 memakai baris dokumen berikon FileText, judul asli dan tombol Lihat Modul Ajar/Lihat LK 4; border zinc-800, latar zinc-900/50 dan tombol zinc-900 mengikuti ArtifactEvidenceItem/FormalLk2Card. Baris bertumpuk pada mobile dan berjajar pada sm; tombol mempunyai focus-visible serta nama aksesibel yang mencakup judul dokumen. Video sementara memakai iframe aspect-video/w-full, lazy loading, referrerPolicy strict-origin-when-cross-origin dan fallback Tonton di YouTube, dengan keterangan belum terverifikasi sebagai rekaman mengajar. Kedua galeri memakai carousel lama dengan label dan emptyMessage opsional; default tetap menjaga E-Portfolio 1. Konfigurasi E-Portfolio 2 memakai foto lokal sesuai folder pemilik, judul nama file dan caption/alt deskriptif. Ilustrasi stok dan status media lama diganti; hero, shell, lima anchor dan paragraf akademik lain tidak berubah.

**CURRENT STATE (20 Oktober 2026):** `/refleksi-matkul` mempertahankan seluruh anatomy dan isi Semester I. `/refleksi-matkul/semester-2` memakai typography, pengantar 4C, tab, accordion, analisis, kesimpulan, serta pola resource yang sama, dengan judul/deskripsi Semester II dan lima course. Pada struktur awal, masing-masing enam bagian menampilkan Belum tersedia; LK 2 null dan artifacts kosong menjadi status non-link Belum tersedia. Pengisian PSE dan PMAL berikutnya memakai accordion yang sama: empat jawaban 4C, tiga subitem analisis, dan kesimpulan; masing-masing empat kartu artefak memakai tautan Drive terverifikasi. PPL Mandiri terisi dari naskah revisi menggunakan enam accordion yang sama; resource memuat LK 3, empat LK 4 per siklus, dan LK 1/2 dengan status tautan belum tersedia. Pendidikan Inklusi memakai enam accordion yang sama dengan isi verbatim dari PDF pemilik serta empat resource (2.D, 3.D, 4.A, 4.E) berstatus tautan belum tersedia. Projek Kepemimpinan kini memakai enam accordion yang sama, dengan delapan blok jawaban dan 17 paragraf dari PDF pemilik (OWN-013, 28 Oktober 2026). Empat resource LK 1.11, Laporan Akhir Ruang BK (draf kerja; dokumentasi hingga 21 Oktober 2026), Tugas 1.1 Individu, dan Tugas 2.1 Individu memakai status tautan belum tersedia. Dokumen resmi LK 2 tetap belum memiliki URL. Nama elektif dikonfirmasi sebagai Pendidikan Inklusi (OWN-009). Data Semester I menjadi default RefleksiMatkulClient; halaman baru mengirim prop courses. Penanda navigasi memilih tujuan paling spesifik sehingga kedua semester tidak aktif sekaligus.

**DECISION / CURRENT STATE (20 Oktober 2026, OWN-010; revisi 21 Oktober 2026, OWN-011):** E-Portfolio 1 memakai typography Inter/Geist Mono, max-w-4xl, warna zinc, whitespace, dan garis pemisah proyek. Tidak ada kartu ringkasan, ikon judul, badge berulang, atau dekorasi/animasi baru. Root shell tetap diwarisi. Halaman server memakai anchor native dengan `scroll-mt-28` untuk menjaga heading dari navbar fixed. Client boundary terbatas pada NonTeachingPhotoCarousel untuk scroll/state dan tombol. Data `photos.ts` menyediakan `src`, `alt`, `caption`, `activity`, saat ini kosong. Carousel memakai scroll-snap native, geser smooth dari tombol (instant untuk reduced motion), swipe sentuh, Previous/Next dengan focus-visible dan disabled pada ujung, serta live caption/penghitung; tidak ada autoplay atau efek 3D. Hero, bagian 01–03/06, dan Refleksi Diri dipertahankan. Analisis LK 4 tidak dinyatakan menggantikan video resmi.

**DECISION / CURRENT STATE (27 Oktober 2026, OWN-012):** Refleksi Program PPG memakai server page dengan max-w-4xl, paragraf max-w-2xl, Inter/Geist Mono, zinc, dan divider. Tiga anchor native memakai scroll-mt-28 serta focus-visible. CSS module dengan selector body:has(.page) menyembunyikan elemen data-site-glow root hanya saat halaman ini tampil; footer dan halaman lain dipertahankan. Tidak ada client boundary atau animasi baru. Navigasi menambah satu tujuan pada Semester 2 dan mobile. Teks dan tiga paragraf RTL disalin verbatim dari DOCX LK 3 pemilik; URL pendukung belum tersedia.

**DECISION / CURRENT STATE (29 Oktober 2026, OWN-016):** isi E-Portfolio 1 memakai naskah revisi UTS Siklus 1. Enam bagian menggantikan susunan awal OWN-010/011 di atas; refleksi profesional masuk bagian 05. Hero besar, Inter/Geist Mono, zinc, max-w-4xl, divider, `scroll-mt-28` dan anchor native/focus-visible dipertahankan. Tabel analisis dan katalog memakai caption serta heading baris/kolom. Tidak merender carousel kosong atau kontrol media tanpa berkas; komponen/data lama tidak dihapus. Shared source Navbar/Footer tidak berubah. Setelah screenshot menunjukkan pill mobile menutupi teks ketika scroll, CSS module lokal memakai `body:has(.page)` untuk mengubah banner menjadi absolute hanya di route ini pada lebar di bawah 48rem; menu ikut bergulir keluar layar, desktop tetap fixed. Route lain tetap mengikuti perilaku shared Navbar.

**DECISION / CURRENT STATE (29 Oktober 2026, OWN-017):** enam bagian utama kembali mengikuti kategori artefak Topik 3. Setiap bagian memakai `dl` konteks/tujuan/kekuatan/keterbatasan/RTL. Contoh format, materi/kode, media dan instrumen memakai label teks dengan garis kiri; placeholder screenshot dan rekaman bukan gambar/video bukti. Referensi Laravel Learn terpisah dari URL rekaman asli null di examples.ts. Dua foto Pexels lokal mengaktifkan carousel lama; caption menampilkan label ilustrasi dan kredit opsional. Pola object-contain, swipe, keyboard, penghitung dan reduced motion carousel dipertahankan. Hero, shared Navbar/Footer serta CSS mobile OWN-016 tidak diubah. Penutup artikel menampung analisis/refleksi dan bukti asli tanpa menjadi bagian utama ketujuh.

**DECISION / CURRENT STATE (29 Oktober 2026, OWN-018):** uraian per bagian dipadatkan menjadi contoh dan dua paragraf analisis; helper analisis lima field, dua tabel, katalog, kajian panjang dan uraian siklus lanjutan dihapus. Materi hanya menampilkan cuplikan Route dari data contoh yang sudah ada. Empat RTL dirangkum dalam satu paragraf refleksi, disertai satu tautan LK 4 Siklus 1. Hero mempertahankan skala/kelas visual dengan pengantar lebih pendek. Enam ID anchor, typography, warna, spacing, CSS menu mobile, data/rubrik/foto/kredit, dan komponen bersama tidak berubah.

**DECISION / CURRENT STATE (29 Oktober 2026, OWN-019):** revisi bersifat editorial untuk penguji PPG. Listing kode dan tautan tutorial dihapus dari render; materi menjadi contoh urutan kegiatan, rubrik menjadi tiga aspek dengan empat tingkat indikator. Label paragraf analisis berulang dihilangkan. Kegiatan Nonmengajar hanya menyatakan ketiadaan dokumentasi asli serta status ilustrasi, tanpa menilai stok foto sebagai pengalaman. Layout, enam ID anchor, hero besar, warna, CSS, foto/kredit, carousel dan komponen bersama tetap.

**DECISION / CURRENT STATE (29 Oktober 2026, OWN-020):** kedua portfolio memakai placeholder ringkas dengan border kiri dan padding, tanpa area 16:9 kosong. Navbar ikut bergulir keluar layar pada desktop/mobile hanya saat marker CSS portfolio tampil; E-Portfolio 2 mengimpor CSS module yang sudah ada. Ini memperluas perbaikan mobile OWN-016 setelah screenshot desktop membuktikan overlap teks. Route lain tetap memakai header fixed. Dua slide memakai foto horizontal 3:2 berlisensi/kredit (Katerina Holmes dan Rasyid Ahmad), dengan object-contain dan kontrol lama; aset potret lama dipertahankan tanpa dirender. Navbar menambah satu tujuan E-Portfolio 2 pada Semester 2/mobile, total tiga belas tujuan; kedua halaman memiliki tautan penghubung. Tidak mengubah homepage atau Artefak Semester I.

## Interaction dan Motion

**DECISION / CURRENT STATE (OWN-015, 28 Oktober 2026):** `/karya-inovasi` memakai pola server page editorial Tahap 1/4, Inter/Geist Mono, max-w-4xl dengan area baca max-w-2xl, divider zinc, dan CSS module lokal tanpa glow. Heading semantik dan enam anchor native dengan scroll-mt-28/focus-visible. Rencana waktu memakai `dl` satu kolom di mobile dan label/aktivitas dua kolom pada md; bobot memakai tabel fixed dengan heading baris/kolom dan caption rencana asesmen. Link dokumen bergaris bawah, status non-link untuk dua perangkat. Tidak ada client boundary, animasi atau dependency baru. Navbar menambah satu tujuan Semester 2/mobile; desktop kini sebelas tujuan dan mobile dua belas. Penempatan/deskripsi tujuan lama mengikuti baseline aktual yang dicatat di SRS.

**DECISION / CURRENT STATE (28 Oktober 2026, OWN-014):** `/identifikasi-diri` mengikuti Minimal Hero + Linear Sections Tahap 4: server page, max-w-4xl, paragraf max-w-2xl, Inter/Geist Mono, zinc, divider, anchor native dengan scroll-mt-28/focus-visible. CSS module lokal menyembunyikan glow hanya pada route ini. Tujuh tindakan memakai penomoran native `ol` dengan indentasi dan jarak antaritem; tidak diringkas ke kartu. Navbar menambah Visi Pribadi pada Semester 2 dan daftar mobile; footer tetap diwarisi. Tidak ada client boundary/dependency/animasi baru. PDF LK 1 belum tersedia untuk ditautkan.

| Kontrol | State awal dan perilaku source | Batas/gap |
|---|---|---|
| Navbar | isMobileOpen false, hasScrolled false, openSemester null; listener passive setelah scrollY>20. Desktop toggle satu panel; link, klik luar, fokus keluar, Escape menutup; Escape fokus ke trigger. Mobile tetap menutup saat link dipilih | Desktop expanded/controls, child/Home/About aria-current, focus-visible, active pill parent; panel opacity/y duration 0.2. Header subtitle, link bernomor/deskripsi, child aktif bg-white/[0.08]. Menu mobile tetap baseline |
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

**ISSUE:** CardTitle berupa div; Artefak langsung h1→h4; About timeline h2→h4; course header div diikuti h4. Menu mobile/tab/panel lain belum lengkap statusnya; dropdown desktop memiliki status expanded dan link aktif (FR-NAV-003). Link resource berulang “Unduh”, “Lihat Artefak”, dan “Buka Dokumen LK 2”. Full keyboard/focus audit belum berhasil.

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
| Evidence dekat claim, lebih sedikit repetisi | FR-EVIDENCE-002 | Resource/hasil/diagram diverifikasi atau ditandai belum tersedia |
| Navigasi dan refleksi lebih jelas | FR-NAV-002, FR-REFLECTION-004 | Pemetaan konten/URL dan keputusan pemilik |
| Indikator penilaian non-linear koheren | FR-ASSESSMENT-002 | Nilai dipertahankan; simbol positif/nol/negatif bermakna |
| References, accessibility, social preview | FR-ACADEMIC-002, FR-A11Y-001–003, FR-SEO-002 | Sumber primer, verifikasi keyboard/contrast, asset sosial yang sah |

Shared primitive dapat berdampak pada beberapa page. Sebelum mengubah CardTitle, Navbar, CSS token, atau motion provider, telusuri semua caller dan jalankan acceptance lintas halaman terkait. Jangan melakukan normalisasi visual menyeluruh sebagai cleanup task kecil.
