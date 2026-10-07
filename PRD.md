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

| Navbar | Route | Peran |
|---|---|---|
| Home | `/` | Identitas, karakter guru, pengalaman/pendidikan, teaser praktik |
| About | `/about` | Profil, narasi, pendekatan, kompetensi, role model, timeline |
| Artefak & Analisis | `/artefak` | Tiga siklus, teori, keberhasilan, kendala, penyesuaian, lampiran |
| Penilaian | `/penilaian` | Lampiran 7/8, skor per siklus, delta, dokumen |
| Refleksi PPL | `/refleksi` | Visi, kekuatan, kelemahan, rencana tindak lanjut |
| Refleksi Akhir | `/refleksi-akhir` | Perjalanan PPL, tantangan, feedback, filosofi, nilai guru |
| Refleksi Mata Kuliah | `/refleksi-matkul` | Enam mata kuliah, 4C, analisis artefak, kesimpulan, LK 2 |

Navbar memuat semua route; footer memuat subset Beranda, Artefak, Penilaian, Refleksi. CTA utama hero menuju About. Teaser dan CTA akhir homepage menuju Artefak; CTA tambahan menuju Refleksi Akhir. About menuju Artefak dan Refleksi Mata Kuliah. Refleksi PPL menuju Refleksi Akhir. Refleksi Akhir menuju Artefak, Penilaian, Refleksi PPL, dan About. Tab PPL pada Refleksi Mata Kuliah menuju Artefak.

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

- Pada tugas ini: redesign, rewrite halaman, perubahan routing/component, refactor, upgrade dependency, deployment, dan commit.
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
| HIST-001 | CURRENT STATE — riwayat | Git mencatat pembentukan lapisan docs pada 2026-08-29 | `git show 4c043ef:docs/DECISIONS.md`; pemisahan konteks/fakta/desain/engineering tetap berguna, nama file lama tidak lagi canonical |
| HIST-002 | CURRENT STATE — riwayat | DEC-006 lama mencatat narasi website + LK 2 + artefak | Source mata kuliah mendukung pola ini; alasan kepatuhan LMS belum diperiksa terhadap instrumen resmi |
| HIST-003 | CURRENT STATE — riwayat | DEC-001–005 lama berlabel ACCEPTED (INFERRED) | Dark theme, server pages, CSS score bars, Lenis, dan topik praktik ditemukan di kode; motivasi desain dan manfaat performa bukan keputusan owner yang terverifikasi |

Visual dark theme dan stack saat ini adalah baseline yang harus dijaga dalam perubahan terbatas, bukan larangan permanen mengganti teknologi/desain bila pemilik kelak memutuskan lain.

Untuk keputusan baru, tambahkan ID stabil, tanggal, status DECISION/PROPOSED, konteks, keputusan, rationale, alternatif, konsekuensi, serta sumber persetujuan. Proposal baru menjadi keputusan setelah ada instruksi eksplisit pemilik; jangan menyimpulkan persetujuan dari keberadaan backlog.
