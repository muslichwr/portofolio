# Roadmap Implementasi Portfolio

Baseline: **7 Oktober 2026**, commit aplikasi `4c043ef`. Dibangun dari audit repository/production dan perbandingan dengan [PRD](../../PRD.md), [SRS](../../SRS.md), [DESIGN](../../DESIGN.md), dan [AGENTS](../../AGENTS.md).

Ini roadmap, bukan changelog atau izin implementasi. **DECISION:** tugas fondasi berhenti pada dokumentasi. Task lanjutan telah mengizinkan grouping semester desktop (FR-NAV-003) dan Ringkasan Kasus di Artefak (FR-CASE-002); pekerjaan lain tetap menunggu instruksi terpisah. Requirement Proposed tidak berubah menjadi keputusan final hanya karena dicantumkan sebagai task.

Status phase: **NOT STARTED**, **IN PROGRESS**, **BLOCKED**, **DONE**. DONE hanya jika exit criteria terpenuhi. BLOCKED digunakan bila dependensi nyata menghalangi task, dengan sumber/dampak dijelaskan; kebutuhan konfirmasi mendatang tidak otomatis berarti seluruh phase saat ini BLOCKED.

## Ringkasan Urutan

| Phase | Fokus | Status |
|---|---|---|
| 0 | Dokumentasi & Guardrails | DONE |
| 1 | Technical Health & Accessibility | NOT STARTED |
| 2 | Evidence & Academic Integrity | NOT STARTED |
| 3 | Information Architecture & Reflections | IN PROGRESS |
| 4 | Homepage & Positioning | NOT STARTED |
| 5 | Teaching Cases & Assessment | IN PROGRESS |
| 6 | SEO & Final Verification | NOT STARTED |

Urutan menempatkan reliability/accessibility awal, verifikasi evidence sebelum penguatan claim, dan keputusan IA sebelum perubahan entry point. Audit indexing/visual dapat dilakukan ketika akses tersedia; roadmap tidak mensyaratkan menunggu phase akhir untuk mengetahui masalah mendasar. Scope implementasi tiap task tetap harus diminta/disetujui pemilik.

## Phase 0 — Dokumentasi & Guardrails

### Objective

Menyediakan fondasi source of truth yang dapat dibaca agent/developer baru tanpa memulihkan informasi lama secara buta.

### Why

README masih bawaan; dokumentasi lama sedang dihapus dan router menunjuk file yang tidak ada. Fakta aktual, keputusan pemilik, dan proposal membutuhkan pemisahan.

### Requirements

NFR-MAINT-001. Inventory baseline mendukung FR-HOME-001, FR-NAV-001, FR-ABOUT-001, FR-CASE-001, FR-EVIDENCE-001, FR-ASSESSMENT-001, FR-REFLECTION-001, FR-REFLECTION-002, FR-REFLECTION-003, FR-ACADEMIC-001, FR-SEO-001, NFR-RESP-001.

### Tasks

- Tulis tujuh dokumen yang diminta dan perbarui router `.agents` ke sumber aktif.
- Konsolidasi informasi valid dari Git; catat klaim/keputusan inferensial sebagai riwayat, bukan verifikasi baru.
- Hubungkan 27 requirement, 15 issue, fakta konten, serta 42 URL unik ke source.
- Catat hasil baseline build/typecheck/lint/HTTP dan keterbatasan browser/evidence.
- Verify dokumentasi dan diff; pertahankan penghapusan awal pengguna selain AGENTS yang dibuat kembali.

### Files likely affected

README.md, PRD.md, SRS.md, DESIGN.md, AGENTS.md, `.kilo/rules/project.md`, `.agents/rules/portoflio.md`, file roadmap ini. Tidak ada source/config aplikasi yang diubah.

### Verification

Periksa eksistensi file, local links/anchors, urutan baca, requirement fields/ID uniqueness, referensi roadmap, URL/label dari source, fakta tokens/route, dan diff whitespace/scope. Cocokkan hash source/config/assets sebelum/sesudah penulisan. Hasil aplikasi dari audit tetap relevan karena source tidak berubah; jangan menyebutnya sebagai command baru setelah edit Markdown.

### Exit Criteria

Dokumen lengkap dan dapat ditelusuri; seluruh ID roadmap valid; proposal/keputusan/baseline terpisah; semua pemeriksaan dokumentasi lulus; diff terbatas pada dokumen/router. Penyelesaian phase ini tidak menyatakan NFR-MAINT-001 seluruhnya selesai: warning dan cakupan lint masih backlog Phase 1.

### Status

**DONE** — delapan file dokumentasi/router tersedia; 117 local links, 27 requirement, tujuh struktur phase, dan 42 URL inventory lolos pemeriksaan terarah; hash source/config/assets tidak berubah. Penyelesaian phase ini bukan persetujuan pemilik atas implementasi roadmap atau penutupan issue aplikasi.

## Phase 1 — Technical Health & Accessibility

### Objective

Mengatasi gap teknis/semantik yang sudah diketahui sebelum memperluas konten atau merombak navigasi.

### Why

ISSUE-009–014: heading, kontrol/status, resource names, kontras, lifecycle/reduced motion, serta lint worktree mempengaruhi penggunaan dan pemeliharaan.

### Requirements

FR-NAV-001, FR-A11Y-001, FR-A11Y-002, FR-A11Y-003, NFR-MAINT-001, NFR-RELIABILITY-001, NFR-RESP-001, NFR-PERF-001.

### Tasks

- Ukur baseline performa representative Home/Artefak/Mata Kuliah sebelum optimasi; catat kondisi, tanpa target skor rekaan.
- Pada task terpisah yang diizinkan, batasi ESLint agar worktree tidak ikut scan; tangani delapan warning utama tanpa cleanup di luar scope.
- Tinjau/cancel rAF Lenis pada cleanup dan reduced-motion behavior motion/scroll.
- Perbaiki heading di caller yang terdampak; evaluasi CardTitle div tanpa mengganti semantik seluruh card secara buta.
- Tentukan pola aksesibel menu/tab/accordion; terapkan state/control relations dan focus/keyboard yang koheren.
- Buat nama resource yang membedakan dokumen; sesuaikan label buka/download setelah memeriksa tindakan sebenarnya.
- Ukur kontras pasangan actual dan verifikasi overflow/zoom, terutama Penilaian serta kartu resource judul panjang.

### Files likely affected

`eslint.config.mjs`; Navbar; SmoothScrollProvider; WorkStudiesToggle; CpmkBanner; ArtifactCard; RefleksiMatkulClient; `components/ui/card.tsx` bila perlu; page About/Penilaian; `app/globals.css` untuk perbaikan yang benar-benar diperlukan. Lokasi lengkap ada di SRS/DESIGN.

### Verification

Typecheck/lint/build aktual; outline heading seluruh route; keyboard Tab/Enter/Space serta pattern tab/menu yang dipilih; focus saat close/switch; reduced motion dan mount/unmount; resource link list; kontras; 360/390/768/1440 CSS px dan zoom 200%. Bandingkan pengukuran performa hanya pada kondisi yang dicatat.

### Exit Criteria

Masalah yang masuk scope task ditutup dengan evidence verifikasi; source utama lint tanpa warning yang ditargetkan, worktree tidak ikut scan; build/typecheck tetap lolos; konten/routes/angka tidak berubah di luar instruksi. Unverified browser behavior tetap dicatat, tidak ditandai lulus.

### Status

**NOT STARTED**. Memerlukan task aplikasi yang diizinkan; temuan dokumentasi tidak mengizinkan cleanup otomatis.

## Phase 2 — Evidence & Academic Integrity

### Objective

Membuat claim, data, dokumen formal, dan referensi dapat ditelusuri secara jujur.

### Why

ISSUE-003/005/006: 42 URL bukan bukti seluruh file valid; LK 4 memiliki ID berbeda; semester dan status akademik historis belum cukup untuk verifikasi primer.

### Requirements

FR-EVIDENCE-001, FR-EVIDENCE-002, FR-ASSESSMENT-001, FR-ACADEMIC-001, FR-ACADEMIC-002, FR-REFLECTION-003, FR-REFLECTION-004, NFR-RELIABILITY-001.

### Tasks

- Periksa 42 record inventory terhadap akses visitor, jenis file, isi, versi, dan label; catat metode/tanggal/status per record.
- Bandingkan pasangan LK 4 pada Artefak versus tab PPL; tentukan apakah versi sama, versi berbeda, atau salah link berdasarkan isi/pemilik.
- Bandingkan raw/overall/submetrics terhadap instrumen asli L7/L8; jangan mengubah bobot berdasarkan rata-rata tebakan.
- Konfirmasi semester, nama course, konteks elective, timeline/pengalaman/IPK, dan quote GP bila akan digunakan sebagai claim terverifikasi.
- Petakan claim hasil prioritas ke bagian evidence; catat kebutuhan artefak siswa/rubrik/log/diagram/before-after yang belum tersedia.
- Verifikasi bibliografi dan penggunaan teori secara terpisah; siapkan citation/bibliography konsisten hanya untuk sumber yang dipakai dan dapat diverifikasi.
- Periksa instrumen resmi rubrik sebelum menyatakan pemenuhan CPMK/LK 2; jangan mengadopsi status COMPLETE atau bobot docs lama sebagai hasil audit baru.

### Files likely affected

SRS inventory/fakta/reference records; content Artefak/Penilaian/About; RefleksiMatkulClient; Refleksi Akhir jika kutipan dikoreksi. Presentation bibliography baru hanya ditentukan dalam task yang disetujui; belum ada file/route referensi yang final.

### Verification

Dokumen primer dan akses visitor diperiksa; label/course/siklus cocok; scores tetap sesuai sumber; citation terhubung ke bibliography; DOI/link tidak dibuat; setiap claim diberi evidence atau batas. Typecheck/lint/build jika source berubah.

### Exit Criteria

Claim yang akan dipublikasikan sebagai verified memiliki sumber primer; resource yang belum bisa diperiksa tetap berstatus unverified; konflik material diputuskan pemilik; dokumentasi menunjukkan hubungan evidence→claim. Tugas yang membutuhkan file tidak tersedia dicatat blocked secara spesifik, bukan ditutup dengan evidence rekaan.

### Status

**NOT STARTED**. Dependensi: akses resource/instrumen primer dan konfirmasi fakta yang tidak dapat diperoleh dari kode.

## Phase 3 — Information Architecture & Reflections

### Objective

Menentukan navigasi/entry point yang jelas bagi kedua audiens, dengan cakupan refleksi tetap lengkap.

### Why

ISSUE-007: tujuh link valid tetapi istilah refleksi berdekatan dan bahasa label bercampur. Belum ada keputusan bahwa route perlu digabung atau diganti.

### Requirements

FR-NAV-001, FR-NAV-002, FR-NAV-003, FR-REFLECTION-001, FR-REFLECTION-002, FR-REFLECTION-003, FR-REFLECTION-004, FR-A11Y-002.

### Tasks

- Grouping desktop Semester 1/2 selesai dalam scope FR-NAV-003; tujuh URL, konten, footer, dan menu mobile dipertahankan.
- Buat pemetaan current→target untuk opsi Beranda/Profil/Praktik Mengajar/Bukti & Penilaian/Refleksi/Mata Kuliah.
- Evaluasi label/grouping dahulu; bandingkan terhadap perubahan route atau penggabungan isi sebagai alternatif yang lebih besar.
- Pastikan tujuan refleksi diri, sintesis PPL, dan course tetap berbeda dan mudah ditemukan.
- Catat dampak link/bookmark, academic journey, metadata, navbar/footer, dan kompatibilitas URL lama.
- Minta keputusan pemilik atas pemetaan konkret sebelum mengubah aplikasi. Jika route berubah, tentukan redirect/preservasi URL dalam task tersebut.

### Files likely affected

Navbar/Footer, link internal page, tiga route refleksi; PRD/SRS/DESIGN setelah keputusan resmi berubah. Route baru dan redirects belum diputuskan.

### Verification

Review dua journey dengan peta navigasi; semua konten akademik terpetakan; href/active state/keyboard diuji jika implementasi diizinkan; URL lama diperiksa bila berubah.

### Exit Criteria

Keputusan IA pemilik tercatat beserta mapping, konsekuensi, dan compatibility plan yang relevan. Implementasi hanya dilakukan dalam scope berikutnya yang disetujui; seluruh journey dan konten existing terjaga.

### Status

**IN PROGRESS**. Grouping desktop terbatas telah diimplementasikan (FR-NAV-003); evaluasi journey/refleksi menyeluruh dan exit criteria phase belum selesai. Enam label tetap opsi. Tidak ada izin melanjutkan task lain setelah navigasi ini.

## Phase 4 — Homepage & Positioning

### Objective

Mempercepat pemahaman profil educator, kemampuan, pendekatan, dan bukti.

### Why

ISSUE-001/002: fondasi positioning tersedia, tetapi CTA utama masih About dan personal philosophy berada jauh pada refleksi.

### Requirements

FR-HOME-001, FR-HOME-002, FR-ABOUT-001, FR-CASE-002, FR-EVIDENCE-002, FR-A11Y-001, FR-A11Y-003, NFR-RESP-001.

### Tasks

- Siapkan copy/pemetaan section berdasarkan fakta yang tersedia: siapa → bidang ajar/keahlian → pendekatan → bukti.
- Usulkan penempatan Logic First, Syntax Later dan makna error sebagai informasi, tanpa mengulang claim berlebihan.
- Usulkan CTA utama praktik/case study menggunakan tujuan yang sudah tersedia atau telah diputuskan Phase 3.
- Pertahankan akses Work/Studies, About, dan akademik; gunakan kanal kontak yang diberikan pemilik, tanpa membuat email/nomor baru.
- Review perubahan konkret dengan pemilik sebelum implementasi positioning/desain yang belum disetujui.

### Files likely affected

Home, WorkStudiesToggle, About bila isi terkait berubah; metadata root bila positioning description resmi berubah; PRD/SRS/DESIGN.

### Verification

Reviewer menemukan identitas, bidang, pendekatan, evidence; semua CTA valid; tidak ada claim baru tanpa sumber; responsive/keyboard/heading diperiksa; build/typecheck/lint bila source berubah.

### Exit Criteria

Copy/layout/CTA yang diimplementasikan memiliki persetujuan yang relevan, bukti/fakta nyata, dan jalur akademik tetap tersedia. Tidak mengklaim conversion rate atau hasil user testing yang belum dilakukan.

### Status

**NOT STARTED**. Dependensi: mapping navigasi yang relevan dan ketersediaan evidence untuk claim prioritas.

## Phase 5 — Teaching Cases & Assessment

### Objective

Memperlihatkan inti pengalaman mengajar dan evidence, serta menjaga representasi nilai yang jujur.

### Why

Detail tiga siklus kuat, tetapi pembaca membutuhkan ringkasan; L8 sudah non-linear namun ikon negatif belum koheren (ISSUE-004).

### Requirements

FR-CASE-001, FR-CASE-002, FR-EVIDENCE-001, FR-EVIDENCE-002, FR-ASSESSMENT-001, FR-ASSESSMENT-002, FR-ACADEMIC-002, FR-A11Y-001, FR-A11Y-003, NFR-RESP-001.

### Tasks

- DONE (FR-CASE-002): tiga Ringkasan Kasus dari narasi source, dengan Masalah/Tindakan/Bukti/Hasil/Refleksi. Penelusuran tercatat di SRS; dokumen eksternal belum diverifikasi isinya.
- Pertahankan long-form teori, kendala, penyesuaian, dan dokumen; jangan menjadikan rencana perbaikan sebagai hasil intervensi.
- Tonjolkan bagian evidence yang tersedia; tampilkan kebutuhan yang belum ada tanpa visual/before-after rekaan.
- Kurangi claim karakter yang berulang melalui tautan ke kasus; periksa konsistensi teaser Home/About/Akhir.
- Selaraskan label/ikon/makna teks delta positif/nol/negatif; pertahankan L8 83,75→88,75→86,25 dan seluruh angka sumber.

### Files likely affected

Artefak/ArtifactCard, Home teaser, Penilaian/ScoreBar, About/Refleksi Akhir jika cross-link atau claim terkait berubah; dokumen sumber kebenaran terkait.

### Verification

Review tiga ringkasan terhadap dokumen sumber; cek link dan heading; hitung ulang konversi/delta tanpa mengganti bobot; uji negative/zero/positive; periksa nama accessible dan responsive cards; typecheck/lint/build.

### Exit Criteria

Inti setiap kasus dapat dipindai dan detail tetap tersedia; evidence nyata dapat ditelusuri atau keterbatasannya dinyatakan; angka/narasi/indikator konsisten tanpa memaksakan tren naik.

### Status

**IN PROGRESS**. Ringkasan tiga kasus selesai; penelusuran isi evidence eksternal dan konsistensi indikator penilaian masih pending. Exit criteria phase belum seluruhnya terpenuhi; task ini tidak melanjutkan pekerjaan lain. Dependensi tersisa: evidence Phase 2 dan keputusan presentasi terkait.

## Phase 6 — SEO & Final Verification

### Objective

Melengkapi discovery/social preview dan memastikan perubahan yang telah disetujui tidak merusak portfolio.

### Why

Metadata dasar sudah ada; ISSUE-008/015 menunjukkan gap canonical/preview/crawl serta pemeriksaan browser/performa yang belum tersedia.

### Requirements

FR-SEO-001, FR-SEO-002, FR-NAV-001, FR-A11Y-001, FR-A11Y-002, FR-A11Y-003, NFR-PERF-001, NFR-RESP-001, NFR-MAINT-001, NFR-RELIABILITY-001, NFR-COMPAT-001.

### Tasks

- Selaraskan title/description/per-page OG dengan positioning dan route yang benar-benar disepakati.
- Lengkapi canonical/metadataBase, OG URL/image dan social preview; review favicon aktual sebelum mengusulkan penggantian.
- Tambahkan robots/sitemap hanya dalam task yang diizinkan; pastikan route public dan kebijakan indexing sesuai keputusan pemilik.
- Evaluasi Person structured data jika relevan; hanya gunakan identitas/link nyata, tanpa atribut sekolah/sertifikasi/kontak yang belum dibuktikan.
- Uji semua route/state dan resource kritis pada Chromium, Firefox, Safari/WebKit dengan versi/perangkat dicatat; lakukan audit responsive, focus, contrast, reduced motion.
- Bandingkan performa representative pages; indexing/Search Console hanya diperiksa jika akses tersedia, tanpa menyimpulkan dari HTTP 200.
- Review diff dan perbarui docs bila underlying truth berubah. Deployment/commit hanya sesuai instruksi terpisah pemilik.

### Files likely affected

RootLayout, page metadata, kandidat `app/robots.ts` dan `app/sitemap.ts`, metadata image assets bila disetujui, shared UI yang masih bermasalah; README/PRD/SRS/DESIGN/roadmap.

### Verification

Typecheck/lint/build; HTTP/metadata tujuh route atau mapping resmi baru; canonical dan sitemap benar; preview link/image; structured data valid bila diterapkan; link/resource checks; keyboard/motion/contrast/zoom; browser matrix; laporan performa dengan kondisi tercatat.

### Exit Criteria

Scope yang disetujui memenuhi acceptance; seluruh kegagalan/untested condition tercatat; docs cocok implementasi; konten/nilai akademik dan URL kompatibel tetap terjaga. Tidak ada claim WCAG, indexing, Lighthouse, atau browser support tanpa hasil yang mendukungnya.

### Status

**NOT STARTED**. Tidak ada publishing, deployment, commit, atau pelaksanaan phase ini pada tugas dokumentasi.
