# E-Portfolio 2 UAS dan perbaikan UI E-Portfolio 1

29 Oktober 2026 · OWN-020 · FR-PORTFOLIO-004 dan penyempurnaan FR-PORTFOLIO-003. Baseline `e968ad9`, working tree awal bersih. Tidak ada stage, commit, push atau deploy. Hasil QA sebelumnya dipertahankan.

## Implementasi dan batas bukti

Halaman server `/e-portfolio-2` mengikuti desain editorial gelap E-Portfolio 1, dengan lima bagian/anchor: Perencanaan Pembelajaran; Materi, Media, dan Penilaian; Pelaksanaan dan Video; Kegiatan Nonmengajar; Refleksi Akhir. Tiga ringkasan LK 4 memuat Siklus 2 MySQL/pengelolaan data (15 September 2026), Siklus 3 pengolahan data/susunan tabel (6 Oktober), dan Siklus 4 hubungan antartabel (20 Oktober). LK 4 menjadi bukti refleksi; LK 3 hanya konteks tahap terbimbing sebelumnya.

Keempat teks PDF dibaca melalui konektor Google Drive sebelum menyusun narasi. Ringkasan mempertahankan keterbatasan perangkat, kebutuhan pendampingan/pengingat memulai tugas, waktu latihan yang lebih panjang dan kendala yang masih muncul hingga Siklus 4. Tindak lanjut tetap berupa rencana. Tidak menambah kode program, skor, hasil belajar, pengalaman nonmengajar atau pernyataan kendala sudah teratasi.

**Siklus/rancangan terbaik belum dipilih.** Placeholder Modul Ajar lengkap dan rekaman asli berstatus belum dilampirkan. Materi/media, instrumen dan sampel pekerjaan asli juga belum tersedia pada halaman. LK refleksi tidak menggantikan rancangan lengkap serta video yang sesuai. Dokumentasi kegiatan nonmengajar asli belum tersedia; foto tetap ilustrasi.

Konfigurasi URL Modul Ajar/video kelak tersedia di `selectedArtifacts` dalam page E-Portfolio 2, saat ini null. Tidak ada tombol atau tautan berkas palsu. URL hanya diisi setelah identitas, akses, dan kesesuaian dokumen dengan rekaman diperiksa.

## Perbaikan UI

- Dua area kosong media/video E-Portfolio 1 diganti baris status berborder kiri. E-Portfolio 2 menggunakan pola yang sama untuk Modul Ajar, perangkat dan video. Tinggi render aktual sekitar 55–123px pada kedua ukuran, bukan area kosong 16:9.
- Screenshot sebelum edit menunjukkan pill desktop menutup teks. CSS module portfolio mengubah banner menjadi absolute pada semua lebar hanya jika marker portfolio ada di DOM. Navbar ikut bergulir keluar layar di kedua portfolio; Home/Artefak tetap fixed, termasuk setelah navigasi client.
- Foto potret aktif diganti ilustrasi horizontal 3:2 dari [Rasyid Ahmad/Pexels](https://www.pexels.com/photo/school-office-in-indonesia-5415447/), diunduh dari tautan Free download publik HTTP 200. [Lisensi Pexels](https://www.pexels.com/license/) diperiksa melalui penelusuran web; kredit dan label “bukan dokumentasi PPL” terlihat. Catatan URL, ukuran, MIME dan SHA256 ada di [photo-download.json](photo-download.json). Aset potret lama tidak dihapus. Dua foto horizontal dipakai bersama lewat array lama; komponen carousel tidak diubah.
- E-Portfolio 2 ditambahkan pada Semester 2 dan daftar mobile; kedua portfolio memiliki tautan penghubung. Review menemukan tautan terakhir di menu mobile melampaui viewport 375 × 667 (bottom 709px). Panel sekarang memakai max-height berdasarkan viewport dan overflow-y-auto; link UAS dapat digulir hingga bottom 634px di dalam layar.

## Verifikasi aktual

- `npx tsc --noEmit --incremental false`: exit 0 setelah edit source terakhir.
- `npm run lint`: exit 0; 0 error, 9 warning lama pada About, Identifikasi Diri, Home, Refleksi dan Footer. Tidak ada warning baru.
- `npm run build`: exit 0 setelah edit source terakhir. Tiga belas route produk, termasuk `/e-portfolio-2`, diprerender statis. Carousel tetap client component.
- Playwright Chromium 156.0.8078.4 dari cache, production lokal `http://localhost:3236`, desktop 1440 × 1000 dan mobile 390 × 844. Tidak memasang dependency/test runner. Skrip sementara `D:/TEMP/verify-eportfolio-uas.cjs`.
- Kedua halaman pada kedua viewport: satu h1, enam heading/anchor UTS dan lima UAS, Enter/focus-visible serta posisi target di bawah area atas diperiksa. Tiga tanggal/judul ringkasan siklus dan pemisahan LK 3 dari LK 4 sesuai. Tidak ada pre/code, video tutorial, iframe kosong, atau link artefak kosong.
- Carousel kedua halaman: kedua foto lokal dimuat, naturalWidth > naturalHeight, object-contain, caption/kredit dan penghitung sesuai. Enter/Space, disabled ujung, serta swipe sentuh native pada mobile lolos. Label ilustrasi tetap terlihat; tidak ada klaim foto sebagai kegiatan pemilik.
- Menu Semester 2, active child, Escape/focus-return desktop, 13 tujuan mobile, penutupan menu setelah pilihan dan tautan dua arah diuji melalui navigasi client. Uji tambahan 375 × 667 memastikan panel dapat digulir dan tautan terakhir dapat dipilih.
- Uji scroll menempatkan teks di posisi yang sebelumnya tertutup navbar; banner kedua portfolio kini berada di luar viewport. Setelah navigasi client ke Home dan Artefak Semester I, banner kembali fixed pada desktop/mobile. Hero homepage dan source Artefak Semester I tidak diubah.
- Tidak ditemukan clipping teks, horizontal overflow, console error atau page error pada checkpoint kedua ukuran. Screenshot hero, halaman penuh, carousel, menu dan scroll ditinjau visual.
- Empat tujuan Drive UAS dan LK 4 Siklus 1 diperiksa dalam browser context anonim: semuanya HTTP 200, dengan judul file sesuai. Tidak mengubah izin Drive. Akses/identitas publik tidak membuktikan kelengkapan UAS.
- Reviewer independen tidak menemukan Critical. Temuan Important pada menu pendek telah direproduksi dan diperbaiki, lalu pemeriksaan lengkap diulang. Catatan Minor jumlah tujuan Navbar pada DESIGN telah diselaraskan.

Rincian: [results.json](results.json). Bukti reproduksi: [overlap desktop sebelum](before-desktop-overlap.png), [geometri awal](before-scroll.json), [menu pendek sebelum](before-short-menu.png), [menu pendek sesudah](after-short-menu.png). Pemeriksaan hanya Chromium pada viewport tersebut, bukan audit WCAG menyeluruh, browser/perangkat lain atau zoom 200%.

## File dan dokumentasi

- Baru: `app/e-portfolio-2/page.tsx`, satu JPEG horizontal di `public/e-portfolio-1/ilustrasi/`.
- Diubah: page/CSS/data foto E-Portfolio 1; Navbar (satu tujuan baru dan batas tinggi/scroll menu); README sumber foto.
- README proyek, PRD, SRS, DESIGN dan roadmap diperbarui untuk route/navigasi, anatomy, keputusan OWN-020, requirement FR-PORTFOLIO-004 dan inventory empat sumber refleksi. Status Partial dan Phase 3 IN PROGRESS dipertahankan karena artefak wajib belum lengkap.
- Homepage, Artefak Semester I, Footer, renderer carousel, dependency dan config tidak diubah.

## Screenshot

| Halaman | Desktop | Mobile |
|---|---|---|
| E-Portfolio 1 | [penuh](desktop/e-portfolio-1-full.png), [carousel](desktop/e-portfolio-1-carousel.png), [scroll](desktop/e-portfolio-1-scroll-clear.png) | [penuh](mobile/e-portfolio-1-full.png), [carousel](mobile/e-portfolio-1-carousel.png), [menu](mobile/e-portfolio-1-menu.png) |
| E-Portfolio 2 | [hero](desktop/e-portfolio-2-hero.png), [penuh](desktop/e-portfolio-2-full.png), [menu](desktop/e-portfolio-2-menu.png) | [hero](mobile/e-portfolio-2-hero.png), [penuh](mobile/e-portfolio-2-full.png), [scroll](mobile/e-portfolio-2-scroll-clear.png) |
