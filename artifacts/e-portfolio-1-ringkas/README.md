# Verifikasi penyederhanaan E-Portfolio 1 UTS

29 Oktober 2026 · baseline `41ea81b` · OWN-018 / FR-PORTFOLIO-003. Working tree awal bersih. Hasil QA OWN-016 dan OWN-017 dipertahankan; laporan ini disimpan terpisah dan diabaikan Git.

## Perubahan

Enam judul menjadi Perencanaan Pembelajaran, Materi Pembelajaran, Media Pembelajaran, Video Pelaksanaan, Kegiatan Nonmengajar, Instrumen Penilaian. Enam ID anchor tetap sama. Setiap bagian mempertahankan artefak/contoh dan dua paragraf analisis pendek: penggunaan/kelebihan serta keterbatasan/perbaikan. Materi memiliki satu paragraf pengantar teknis tambahan.

Tabel analisis, katalog bukti, kajian teori panjang, helper analisis lima field dan uraian LK 3/Siklus 2–4 dihapus dari render. Materi menampilkan satu cuplikan Route dari data lama; data Controller/Blade tetap tersedia di examples.ts tanpa ditampilkan. Rubrik lima kriteria × empat tingkat tetap utuh. Empat RTL diringkas menjadi satu paragraf refleksi penutup; sumbernya tetap URL asli LK 4 Siklus 1, 25 Agustus 2026.

Teks baru bertumpu pada apersepsi Route–Controller, demonstrasi browser, keterbatasan laptop, kebutuhan pengingat memulai tugas, materi yang dilanjutkan dan rencana praktik lebih pendek/pemeriksaan berkala/alternatif tanpa perangkat. Uraian aktivitas diawali “Peserta didik”; refleksi guru memakai “saya”. Tidak menambah hasil belajar atau bukti penggunaan contoh.

Hero mempertahankan judul, ukuran, kelas visual, identitas, tema dan layout; dua paragraf pengantarnya dipadatkan untuk fokus Siklus 1. CSS, komponen bersama, data contoh/rubrik, data foto, aset lokal dan kredit tidak diubah. Tidak menambah komponen atau dependency.

## Pemeriksaan aktual

- `npx tsc --noEmit --incremental false`: exit 0 setelah edit terakhir.
- `npm run lint`: exit 0; 0 error dan 9 warning lama pada About, Identifikasi Diri, Home, Refleksi serta Footer. Tidak ada warning baru.
- `npm run build`: exit 0 setelah edit terakhir; `/e-portfolio-1` tetap prerender statis. Carousel tetap membutuhkan client JavaScript.
- Playwright cache yang sudah tersedia, Chromium 156.0.8078.4, production lokal `http://localhost:3233`, desktop 1440 × 1000 dan mobile 390 × 844, deviceScaleFactor 1. Skrip di `D:/TEMP/verify-eportfolio-ringkas.cjs`.
- Enam judul dan enam anchor diaktifkan dengan Enter/focus-visible; target tetap di bawah area navbar. Satu h1, satu code listing, 20 deskriptor rubrik, satu paragraf refleksi serta sumber LK 4 Siklus 1 diperiksa. Tidak ada tabel/katalog/helper analisis berulang atau uraian siklus lanjutan. Semua paragraf kurang dari 81 kata pada pemeriksaan ini.
- Label contoh format/materi/media/instrumen, video pihak ketiga dan foto ilustrasi terlihat di UI. Preview rekaman asli tetap `Belum dilampirkan`; tidak ada tombol atau URL artefak kosong.
- Kedua foto lokal dimuat (naturalWidth > 0), object-contain; caption/kredit dan penghitung berubah sesuai slide. Enter/Space, disabled pada ujung dan swipe sentuh pada mobile lolos. Menu desktop/mobile dan perbaikan menu mobile yang ikut scroll tetap bekerja.
- Tidak ditemukan clipping teks, horizontal overflow, console error atau page error pada kedua viewport. Screenshot hero, halaman penuh dan carousel diperiksa visual.
- Perbandingan teks artikel: baseline sekitar 3.559 kata, versi ringkas 1.110 kata pada kedua viewport, berkurang 68,8%. Baseline diperoleh dengan merender snapshot TSX sebelum edit memakai data/komponen yang sama; hanya elemen gambar diganti stub tanpa teks untuk pengukuran. Hitungan menggunakan pemisahan whitespace atas teks artikel. Salinan render ada di [baseline.html](baseline.html); ini alat pembanding teks, bukan salinan visual baseline. Tinggi artikel baru sekitar 7.039px desktop dan 8.547px mobile.
- Pemeriksaan independen tidak menemukan Critical/Important. Dua catatan minor pada pembuka aktivitas dan kecocokan caption dengan cuplikan Route telah diperbaiki sebelum build/browser akhir. Catatan hasil lama pada SRS ditandai historis dan diganti dengan hasil baru ini.

## Tautan dan keterbatasan akses

Sepuluh URL unik dipertahankan pada halaman, termasuk dua kredit foto yang diperiksa setelah berganti slide. Atribut target/rel dan ketiadaan link kosong diperiksa. Pemeriksaan anonim aktual:

| Tujuan | Hasil |
|---|---|
| LK 4 Siklus 1 | HTTP 200, judul file sesuai |
| Laravel Controllers/Requests 12.x dan Learn | HTTP 200, judul sesuai; docs melakukan redirect resmi |
| Organisasi modul XI PPLG SMK Bina Rahayu | HTTP 200, judul portal sesuai |
| Repositori BSKAP 33290 | HTTP 503 pada pemeriksaan awal dan satu percobaan ulang |
| Dua sumber foto Pexels, lisensi Pexels, Rumah Pendidikan | HTTP 403 dengan halaman CAPTCHA pada browser otomatis |

Tidak mengganti sumber atau mengklaim seluruh akses eksternal lolos. Respons 503/403 ini merupakan keterbatasan pemeriksaan saat ini, bukan bukti bahwa URL telah dihapus. Foto lokal tetap berfungsi. Detail semua URL/status/judul dan hasil uji ada di [results.json](results.json).

## Bukti asli yang masih dibutuhkan

UTS masih memerlukan Modul Ajar lengkap terbaik Siklus 1 beserta kelengkapannya dan video pelaksanaan asli yang sesuai rancangan. Materi/media asli, instrumen yang benar-benar digunakan serta sampel hasil kerja/asesmen siswa belum terlampir atau belum terverifikasi. Foto kegiatan nonmengajar asli juga belum tersedia. Format, tutorial, rubrik dan foto stok tetap contoh sementara; tidak menggantikan bukti UTS.

## Scope dan bukti visual

Source aplikasi yang berubah hanya `app/e-portfolio-1/page.tsx`. README, PRD, SRS, DESIGN dan roadmap diperbarui untuk mencatat isi/keputusan/status terkini. FR-PORTFOLIO-003 tetap Partial dan Phase 3 tetap IN PROGRESS. Tidak mengubah halaman lain atau shared components. Tidak melakukan stage, commit, push atau deploy pada task penyederhanaan ini.

Screenshot: [desktop hero](desktop-hero.png), [mobile hero](mobile-hero.png), [desktop penuh](desktop-full.png), [mobile penuh](mobile-full.png), [carousel desktop](desktop-carousel-portrait.png), [carousel mobile](mobile-carousel-portrait.png).

Pengujian terbatas Chromium pada dua viewport tersebut; tidak mengklaim audit WCAG menyeluruh, browser/perangkat lain atau zoom 200%.
