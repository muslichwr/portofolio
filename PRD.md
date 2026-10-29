# Product Requirements Document

Baseline: **7 Oktober 2026**, repository `4c043ef`. Dokumen ini menjelaskan WHAT & WHY; fakta teknis dan status requirement berada di [SRS](SRS.md), desain di [DESIGN](DESIGN.md), pekerjaan berikutnya di [roadmap](docs/plans/implementation.md).

## Product Vision

**DECISION:** membangun portfolio profesional Muslich Wahyu Romadhon dengan positioning utama **Vocational IT Educator / Pendidik IT Vokasi**. Portfolio memperlihatkan hubungan pendidikan vokasi, software development, Linux/server, web infrastructure, problem solving, troubleshooting, praktik pembelajaran, refleksi guru, dan dunia kerja.

Website harus membantu pembaca memahami siapa Muslich, kompetensinya, cara mengajar, pengalaman, dan bukti praktik; sekaligus mempertahankan kedalaman akademik PPL/PPG.

**CURRENT STATE:** homepage menampilkan “VOCATIONAL IT EDUCATOR”, Pembelajaran Mendalam, empat karakter guru, Work/Studies, serta tiga teaser artefak. Halaman akademik sudah terpisah dan kaya narasi. Lapisan profesional tersebut sudah memiliki fondasi, tetapi belum seluruhnya mengikuti alur cepat siapa → keahlian → pendekatan → bukti.

## Problem Statement

Bagi pemilik, pengalaman mengajar dan kompetensi IT membutuhkan satu tempat yang dapat ditelusuri serta dikembangkan tanpa kehilangan konteks. Bagi evaluator akademik, portfolio perlu menghubungkan rancangan, analisis, refleksi, nilai, dan dokumen. Bagi visitor profesional, detail akademik yang panjang perlu dapat dimasuki melalui penjelasan singkat yang relevan.

**ISSUE:** dokumentasi sebelumnya tidak tersedia pada working tree aktif; router agent masih merujuk dokumen yang dihapus. Source tersebar dalam TSX sehingga perubahan fakta, label siklus, dan tautan berisiko tidak konsisten. Pengulangan karakter guru serta navigasi refleksi yang berdekatan perlu dievaluasi, bukan otomatis dihapus.

## Target Users dan User Needs

| Audiens | Contoh | Kebutuhan |
|---|---|---|
| Academic / PPG | Dosen, guru pamong, asesor, evaluator PPG | Artefak, analisis, landasan teori, refleksi, penilaian, dokumen formal, dan hubungan evidence dengan klaim |
| Professional | Kepala sekolah, sekolah, recruiter, calon pemberi kerja, rekan profesional | Identitas, bidang ajar, kompetensi teknis/pedagogis, pendekatan mengajar, pengalaman, bukti praktik, dan kanal kontak |

**CURRENT STATE:** kontak tersedia sebagai tautan GitHub, LinkedIn, dan Instagram pada homepage/footer. Tidak ditemukan halaman kontak, form, `mailto:`, atau `tel:`. Jangan menciptakan alamat email atau nomor telepon untuk melengkapi journey.

## Product Principles

**DECISION:** prinsip berikut menjadi pedoman perubahan ke depan; ini bukan pernyataan bahwa seluruh UI saat ini telah memenuhinya.

- **Evidence over claims:** tunjukkan kasus dan bukti; narasi bukan pengganti bukti primer.
- **Clarity over decoration:** identitas, konteks, dan tindakan berikutnya mudah dipahami.
- **Professional but personal:** suara “saya”, profesional, jujur, dan tetap natural.
- **Academic credibility:** bedakan observasi, interpretasi, dan proposal; jangan mengarang sumber, nilai, atau hasil belajar.
- **Fast understanding:** pembaca profesional dapat memahami inti sebelum membaca detail akademik.
- **Progressive disclosure:** ringkasan membuka akses ke detail, bukan menghilangkannya. Audit efek tab/accordion terhadap keterbacaan dan akses konten.
- **Accessibility dan responsive design:** kebutuhan penggunaan keyboard, label, heading, kontras, motion, dan layar kecil dipertahankan/diperbaiki.
- **Maintainability:** requirement terhubung ke source dan verification; gunakan perubahan terkecil yang koheren.

**DECISION:** filosofi “Logic First, Syntax Later” dipertahankan. Error diperlakukan sebagai informasi yang dibaca dan dipahami. **CURRENT STATE:** filosofi eksplisit berada pada `/refleksi` dan `/refleksi-akhir`; narasi troubleshooting juga terdapat pada artefak dan profil. **PROPOSED:** memperkuat filosofi pada homepage.

## Information Architecture

### Current architecture

| Halaman (tersedia melalui Navbar) | Route | Peran |
|---|---|---|
| Home | `/` | Identitas, karakter guru, pengalaman/pendidikan, teaser praktik |
| About | `/about` | Profil, narasi, pendekatan, kompetensi, role model, timeline |
| Artefak & Analisis | `/artefak` | Tiga siklus, teori, keberhasilan, kendala, penyesuaian, lampiran |
| Penilaian | `/penilaian` | Lampiran 7/8, skor per siklus, delta, dokumen |
| Refleksi PPL | `/refleksi` | Visi, kekuatan, kelemahan, rencana tindak lanjut |
| Refleksi Akhir | `/refleksi-akhir` | Perjalanan PPL, tantangan, feedback, filosofi, nilai guru |
| Refleksi Mata Kuliah Semester I | `/refleksi-matkul` | Enam mata kuliah, 4C, analisis artefak, kesimpulan, LK 2; isi dipertahankan |
| Refleksi Mata Kuliah Semester II | `/refleksi-matkul/semester-2` | Lima mata kuliah, enam bagian/course; refleksi PSE dan PMAL tersedia dari PDF pemilik, masing-masing dengan empat tautan artefak terverifikasi; PPL Mandiri terisi dari naskah revisi dengan status tautan artefak belum tersedia; Pendidikan Inklusi terisi dari PDF pemilik dengan empat artefak tanpa URL; Projek Kepemimpinan terisi dari PDF pemilik dengan empat artefak tanpa URL; dokumen resmi LK 2 belum tersedia |
| Refleksi Program PPG | `/refleksi-program-ppg` | Tahap 4: refleksi pendidikan di Indonesia, guru profesional, dan tiga tindakan lanjutan dari LK 3 |
| Visi Pribadi | `/identifikasi-diri` | Seminar PPG Tahap 1: identifikasi diri (LK 1), visi awal pendidikan Indonesia/calon guru dan tujuh langkah sebelum Seminar PPG |
| Karya Inovasi Pendidikan | `/karya-inovasi` | Seminar PPG Tahap 5 (LK 4): desain Praktikum Integrasi Laravel dan MySQL untuk XI RPL; perangkat disiapkan secara teknis, pembelajaran belum diterapkan |
| E-Portfolio 1 | `/e-portfolio-1` | UTS Siklus 1 Laravel: enam bagian artefak Topik 3 dengan contoh berlabel; refleksi/filosofi/RTL dan katalog bukti di penutup; LK 3 serta LK 4 Siklus 2–4 pendukung; Modul Ajar dan video asli belum terlampir |

**DECISION / CURRENT STATE (7 Oktober 2026):** desktop Navbar berisi Home, About, Semester 1, Semester 2. Semester 1 mengelompokkan Artefak & Analisis, Penilaian, Refleksi PPL, dan Refleksi Akhir; Semester 2 berisi Refleksi Mata Kuliah. Panel menampilkan subtitle serta deskripsi singkat tiap tujuan. Ini grouping navigasi saja: tujuh route tetap sama; mobile tetap menampilkan tujuh link langsung. Footer memuat subset Beranda, Artefak, Penilaian, Refleksi. CTA utama hero menuju About. Teaser dan CTA akhir homepage menuju Artefak; CTA tambahan menuju Refleksi Akhir. About menuju Artefak dan Refleksi Mata Kuliah. Refleksi PPL menuju Refleksi Akhir. Refleksi Akhir menuju Artefak, Penilaian, Refleksi PPL, dan About. Tab PPL pada Refleksi Mata Kuliah menuju Artefak.

**DECISION / CURRENT STATE (19 Oktober 2026, OWN-008):** tautan Semester I dipindahkan ke dropdown Semester 1; dropdown Semester 2 menuju `/refleksi-matkul/semester-2`. Mobile memiliki delapan tautan langsung dengan label semester yang berbeda. URL lama, seluruh isi Semester I, footer, dan tautan lain dipertahankan. Halaman baru memakai desain dan renderer refleksi yang sama, tanpa mengarang isi atau URL. Nama mata kuliah elektif dikonfirmasi sebagai Pendidikan Inklusi pada 20 Oktober 2026 (OWN-009). Keputusan ini menggantikan penempatan refleksi mata kuliah pada OWN-007, bukan menyetujui redesign IA lainnya.

**DECISION / CURRENT STATE (20 Oktober 2026, OWN-010):** `/e-portfolio-1` ditambahkan pada dropdown Semester 2 dan daftar mobile. Delapan tujuan lama dan footer dipertahankan. Halaman memakai pendekatan academic editorial dengan daftar isi enam anchor, bagian bernomor, area dokumen/video/foto dan analisis, serta Refleksi Diri. Tahap ini hanya UI/UX; pengisian akademik menunggu task berikutnya.

**DECISION / CURRENT STATE (27 Oktober 2026, OWN-012):** `/refleksi-program-ppg` menjadi halaman Tahap 4 — Refleksi Program PPG Secara Keseluruhan. Konsep Minimal Hero + Linear Sections memakai tiga anchor teks dan tiga jawaban LK 3 verbatim, termasuk tiga paragraf tindakan lanjutan. Sumber adalah DOCX lengkap yang ditunjuk pemilik di workspace; tidak ada URL dokumen terverifikasi. Entri ditambahkan pada Semester 2 dan menu mobile tanpa top-level baru. Seluruh route dan konten lama dipertahankan.

### Identified issues

- Tiga entri refleksi berbeda tujuan, tetapi kedekatan istilah dapat membebani navigasi awal; belum dilakukan user testing.
- Label Home/About/Work/Studies berbahasa Inggris sedangkan sebagian besar isi berbahasa Indonesia.
- Banyak karakter guru muncul pada beberapa halaman tanpa selalu memperlihatkan bukti di dekat claim.
- Konten akademik mudah dijangkau, tetapi pengunjung profesional belum diberi jalur eksplisit ke ringkasan teaching case study.

### Target direction

**PROPOSED:** mengevaluasi label Beranda, Profil, Praktik Mengajar, Bukti & Penilaian, Refleksi, Mata Kuliah. Ini opsi navigasi, bukan keputusan route baru atau penggabungan isi. Dokumentasikan pemetaan dan dampak sebelum implementasi; jangan menghilangkan halaman, tautan lama, atau konten PPG tanpa instruksi pemilik.

## Core User Journeys

### Professional visitor

**CURRENT STATE:** Landing → identitas educator → About atau Work/Studies → teaser Artefak → analisis tiga siklus → dokumen eksternal → kanal sosial pada footer.

**PROPOSED:** Landing → profil/keahlian singkat → pendekatan mengajar → ringkasan teaching case → evidence → pengalaman → kanal kontak yang memang diberikan pemilik. Tujuan utamanya kecepatan memahami kompetensi, bukan mengubah portfolio menjadi CV generik.

### Academic visitor

**CURRENT STATE:** Landing/Navbar → Artefak → analisis siklus dan lampiran → Penilaian → Refleksi PPL/Refleksi Akhir → Refleksi Mata Kuliah → pilih mata kuliah → buka accordion 4C/analisis/kesimpulan → LK 2 dan artefak eksternal.

**DECISION:** narasi website dan dokumen formal tetap saling melengkapi. Tautan dokumen saja tidak membuktikan pemenuhan rubrik; kepatuhan instrumen resmi membutuhkan pemeriksaan sumber primer.

## Success Criteria

Untuk fondasi dokumentasi: tujuh route dapat ditelusuri ke source; seluruh requirement memiliki acceptance criteria; seluruh roadmap merujuk ID yang valid; keputusan/proposal terpisah; agent baru mengetahui command dan batas perubahan; tidak ada perubahan aplikasi pada penyerahan ini.

Untuk produk berikutnya, **PROPOSED**:

- Pembaca profesional dapat menjelaskan identitas, bidang ajar, pendekatan, dan lokasi bukti setelah menjelajah landing; verifikasi melalui review terarah dengan visitor, bukan klaim conversion rate.
- Pembaca akademik dapat menemukan analisis, nilai, refleksi, dan dokumen untuk seluruh tiga siklus dan enam mata kuliah yang sekarang tersedia.
- Setiap hasil yang dinyatakan memiliki evidence yang dapat ditelusuri atau keterbatasan yang dinyatakan jelas.
- Tidak ada route/tautan internal yang rusak; navigasi, tab, dan accordion dapat digunakan dengan keyboard; tampilan diuji pada perangkat yang ditentukan dalam task.
- Nilai turun/naik tetap sesuai data. Tidak ada angka performa, analytics, atau tingkat keberhasilan siswa yang dibuat untuk memenuhi target.

## Non-Goals

- Tugas fondasi dokumentasi tidak mengimplementasikan roadmap. Task navigasi berikutnya hanya mengubah grouping desktop; redesign, rewrite halaman, perubahan route, refactor, upgrade dependency, deployment, dan commit tetap di luar scope.
- Untuk arah produk saat ini: LMS, CBT, manajemen kelas, autentikasi, dashboard admin, CMS, atau backend baru tanpa kebutuhan dan persetujuan terpisah.
- Menghapus kedalaman akademik demi tampilan profesional, menambah evidence palsu, mengklaim semua rubrik terpenuhi, atau menjamin SEO/performa tanpa pengukuran.

## Keputusan dan Jejak Historis

| ID | Label | Keputusan / catatan | Dasar dan konsekuensi |
|---|---|---|---|
| OWN-001 | DECISION | Identitas dan positioning educator | Instruksi pemilik; developer/software infrastructure memperkuat identitas educator |
| OWN-002 | DECISION | Dua audiens tetap dilayani | Instruksi pemilik; pengembangan lapisan profesional mempertahankan konten akademik |
| OWN-003 | DECISION | Filosofi dan error sebagai informasi dipertahankan | Instruksi pemilik dan narasi aktual; penempatan baru masih proposal |
| OWN-004 | DECISION | Evidence nyata dan nilai non-linear | Instruksi pemilik; dilarang mengubah angka demi narasi peningkatan |
| OWN-005 | DECISION | Dokumentasi dahulu, tanpa implementasi roadmap/commit | Batas task eksplisit; review pemilik mendahului pekerjaan aplikasi |
| OWN-006 | DECISION | Konsolidasi dokumentasi lama ke struktur baru | Pilihan pemilik saat perencanaan; penghapusan lama selain AGENTS dipertahankan |
| OWN-007 | DECISION | Desktop Home/About + dropdown Semester 1/2; route dan mobile dipertahankan | Instruksi eksplisit pemilik 7 Oktober 2026; panel kompak dengan subtitle/deskripsi, parent/child active, tanpa landing page semester atau placeholder. Alternatif enam label tetap Proposed; konten halaman tidak diklasifikasi ulang. |
| OWN-008 | DECISION | Pisahkan refleksi Semester I dan struktur Semester II | Instruksi pemilik 19 Oktober 2026: `/refleksi-matkul` tetap berisi Semester I, tambah `/refleksi-matkul/semester-2` dengan lima mata kuliah dan status Belum tersedia; navigasi semester disesuaikan. Renderer dipakai ulang untuk menjaga desain; tidak membuat landing semester, refleksi, atau URL dokumen rekaan. Menggantikan grouping mata kuliah OWN-007; nama elektif tetap menunggu konfirmasi. |
| OWN-009 | DECISION | Pendidikan Inklusi sebagai mata kuliah pilihan Semester II | Instruksi pemilik 20 Oktober 2026: isi enam accordion dari naskah final LK 2 tanpa rewrite, tampilkan empat artefak 2.D/3.D/4.A/4.E tanpa URL bila belum terverifikasi. Pemilik mengonfirmasi Connection tetap disalin persis meskipun identik dengan jawaban analisis pertama. Desain, Semester I, dan empat course lain dipertahankan; tanpa dependency, commit, atau deploy. Menggantikan status nama elektif menunggu konfirmasi pada OWN-008; tidak mengizinkan pekerjaan roadmap lain. |
| OWN-010 | DECISION | Struktur editorial E-Portfolio 1 untuk PPL Mandiri | Instruksi pemilik 20 Oktober 2026: route `/e-portfolio-1`, enam bagian dan Refleksi Diri, daftar isi anchor sederhana, tautan Semester 2. Hanya UI/UX dan placeholder; tanpa analisis, media, URL rekaan, kontrol palsu, dependency, commit, atau deploy. Tidak mengubah isi atau tujuan navigasi lama. |
| OWN-011 | DECISION | Revisi bagian 04 dan carousel bagian 05 E-Portfolio 1 | Instruksi pemilik 21 Oktober 2026: Pelaksanaan Pembelajaran menggantikan area video dengan empat ruang siklus LK 4; analisis tertulis bukan pengganti persyaratan video. Kegiatan Nonmengajar memakai carousel ringan satu foto, panah/keyboard, swipe, caption/penghitung, foto utuh, lazy loading, serta empty state dan kontrol tersembunyi bila satu foto. Menyempurnakan OWN-010; hero, bagian 01–03/06, Refleksi Diri, halaman lain dan desain editorial dipertahankan. Tanpa konten akademik/media rekaan, dependency carousel, commit atau deploy. |
| OWN-012 | DECISION | Halaman refleksi keseluruhan program PPG | Instruksi pemilik 27 Oktober 2026; route `/refleksi-program-ppg`, Minimal Hero + Linear Sections, isi LK 3 verbatim, navigasi Semester 2/mobile, tanpa URL rekaan |
| OWN-013 | DECISION | Pengisian refleksi Projek Kepemimpinan Semester II | Instruksi pemilik 28 Oktober 2026: isi enam accordion dari `artifacts/3.3. Proyek Kepemimpinan.pdf` tanpa rewrite; pertahankan peran Backend Developer pada Ruang BK di SMK Negeri 1 Surabaya serta pemisahan kontribusi individu/tim. Empat artefak tanpa URL terverifikasi memakai fallback. Laporan adalah draf kerja dengan temuan terdokumentasi hingga 21 Oktober 2026; adopsi rutin dan peningkatan layanan terukur belum ditetapkan. Desain, course lain, Semester I, dan navigasi dipertahankan; tanpa dependency, commit, push, atau deploy. |
| OWN-014 | DECISION | Visi Pribadi / Identifikasi Diri Seminar PPG Tahap 1 | Instruksi pemilik 28 Oktober 2026: tambah `/identifikasi-diri` dengan Minimal Hero + Linear Sections mengikuti Tahap 4. Sumber otoritatif `artifacts/visi-pribadi-lk1-konten.md`; enam paragraf visi, pengantar langkah, serta tujuh langkah verbatim sebagai pandangan sebelum Seminar PPG. Tambah Visi Pribadi pada Semester 2/mobile dan tautan halus ke Tahap 4; tanpa top-level baru. PDF/URL belum tersedia, sehingga dokumen pendukung berupa keterangan tanpa link. Halaman lain dipertahankan; tanpa dependency, commit, push, atau deploy. |
| OWN-015 | DECISION | Karya Inovasi Pendidikan Seminar PPG Tahap 5 | Instruksi pemilik 28 Oktober 2026: tambah `/karya-inovasi` dari `artifacts/karya-inovasi-ppg-konten.md` dan LK 4 lengkap; desain pembelajaran Praktikum Integrasi Laravel dan MySQL, sasaran XI RPL. Enam bagian editorial, lima tahap, rencana 240 menit, bobot 25/35/30/10 dan target ≥75 sebagai ukuran yang direncanakan. Perangkat disiapkan teknis, kegiatan belum diterapkan di kelas; tanpa hasil/nilai/testimoni rekaan. Lima dokumen ditautkan setelah pemeriksaan tujuan/akses anonim; prototipe dan buku HTML tanpa tautan sebelum pemeriksaan selesai. Tambah Karya Inovasi pada Semester 2/mobile; grouping lama dipertahankan. Tanpa dependency baru, commit, push, atau deploy. |
| OWN-016 | DECISION | Revisi isi E-Portfolio 1 untuk UTS PPL Mandiri Siklus 1 | Instruksi pemilik 29 Oktober 2026: enam bagian dari `artifacts/E-Portfolio_1_UTS_Konten_Revisi.md`, fokus Laravel Siklus 1; LK 3 terbimbing dan LK 4 Siklus 2–4 sebagai pendukung. Pertahankan URL LK 3 asli, gunakan empat URL LK 4 naskah; LK 1/2 tidak dipertahankan. Kelengkapan bukti dinyatakan jujur tanpa media/hasil siswa rekaan. Hero besar, dark editorial, route, Navbar/Footer dan halaman lain dipertahankan; tidak ada dependency, commit atau deploy. Menggantikan susunan placeholder OWN-010/011 pada halaman ini; FR-PORTFOLIO-002 mencatat isi UTS, FR-PORTFOLIO-001 tetap jejak struktur awal. |
| OWN-017 | DECISION | Enam artefak Topik 3 dan contoh sementara E-Portfolio 1 | Instruksi pemilik 29 Oktober 2026: lanjutkan hasil OWN-016 tanpa reset/menimpa QA. Enam bagian utama Perencanaan, Materi, Media, Video Pelaksanaan, Kegiatan Nonmengajar, Instrumen Penilaian; tiap bagian memuat konteks/tujuan/kekuatan/keterbatasan/RTL. Contoh format/kode/media/rubrik, referensi video pihak ketiga dan dua foto lokal Pexels diberi label serta sumber; tidak menggantikan bukti asli. Analisis pedagogis, filosofi, refleksi, empat RTL dan LK dipertahankan pada subbagian/penutup. Hero, Navbar, route lain dan dependency tetap. Menggantikan susunan enam bagian OWN-016 melalui FR-PORTFOLIO-003; rekaman dan Modul Ajar asli tetap belum lengkap. Pemilik mengizinkan commit dan push setelah verifikasi selesai. |
| HIST-001 | CURRENT STATE — riwayat | Git mencatat pembentukan lapisan docs pada 2026-08-29 | `git show 4c043ef:docs/DECISIONS.md`; pemisahan konteks/fakta/desain/engineering tetap berguna, nama file lama tidak lagi canonical |
| HIST-002 | CURRENT STATE — riwayat | DEC-006 lama mencatat narasi website + LK 2 + artefak | Source mata kuliah mendukung pola ini; alasan kepatuhan LMS belum diperiksa terhadap instrumen resmi |
| HIST-003 | CURRENT STATE — riwayat | DEC-001–005 lama berlabel ACCEPTED (INFERRED) | Dark theme, server pages, CSS score bars, Lenis, dan topik praktik ditemukan di kode; motivasi desain dan manfaat performa bukan keputusan owner yang terverifikasi |

Visual dark theme dan stack saat ini adalah baseline yang harus dijaga dalam perubahan terbatas, bukan larangan permanen mengganti teknologi/desain bila pemilik kelak memutuskan lain.

Untuk keputusan baru, tambahkan ID stabil, tanggal, status DECISION/PROPOSED, konteks, keputusan, rationale, alternatif, konsekuensi, serta sumber persetujuan. Proposal baru menjadi keputusan setelah ada instruksi eksplisit pemilik; jangan menyimpulkan persetujuan dari keberadaan backlog.
