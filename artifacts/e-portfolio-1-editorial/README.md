# Verifikasi editorial E-Portfolio 1 untuk penguji PPG

29 Oktober 2026 · OWN-019 / FR-PORTFOLIO-003 · baseline source terbaru `8db7c80`. Working tree awal bersih. Laporan dan screenshot task sebelumnya dipertahankan; pemeriksaan ini disimpan terpisah.

## Perubahan editorial

- Materi berisi contoh urutan kegiatan belajar, tanpa listing kode. Istilah teknis berulang di hero, perencanaan, materi, media, instrumen dan refleksi diganti dengan penjelasan tujuan, langkah kerja dan hasil pembelajaran yang diharapkan. Laravel tetap disebut sebagai materi Siklus 1.
- Narasi merujuk apersepsi materi sebelumnya, demonstrasi halaman web, keterbatasan laptop, pengingat memulai tugas, materi yang dilanjutkan dan rencana perbaikan. Tidak menambahkan hasil belajar atau pengalaman baru. Aktivitas ditulis dengan subjek “Peserta didik”; refleksi memakai “saya”.
- Label paragraf “Penggunaan dan kelebihan”, “Keterbatasan dan perbaikan” serta “Pelaksanaan dan kelebihan” dihapus. Narasi mengalir tanpa mengulang label tersebut.
- Instrumen contoh menjadi **Pemahaman**, **Keterampilan praktik**, **Kemampuan menjelaskan hasil**. Masing-masing memiliki empat tingkat indikator yang dapat diamati, bukan skor atau hasil penilaian siswa. Label tegas: “Contoh instrumen — bukan instrumen penilaian asli Siklus 1”.
- Tutorial Laravel dihapus dari bagian Video Pelaksanaan. Area tersebut hanya menyediakan rekaman asli yang saat ini berstatus “Belum dilampirkan”.
- Carousel, dua foto lokal, label ilustrasi, caption dan kredit dipertahankan tanpa perubahan. Uraian nonmengajar hanya menyatakan bahwa dokumentasi asli belum tersedia; tidak menganalisis stok foto sebagai kegiatan saya.
- Enam bagian/ID anchor, hero besar, tema, layout, CSS mobile, komponen bersama, refleksi penutup dan URL LK 4 Siklus 1 dipertahankan. Source contoh kode lama di examples.ts tidak dihapus sebagai cleanup; tidak lagi diimpor atau dirender oleh page.

## Pemeriksaan aktual

- `npx tsc --noEmit --incremental false`: exit 0 setelah edit source terakhir.
- `npm run lint`: exit 0; 0 error dan 9 warning lama di About, Identifikasi Diri, Home, Refleksi dan Footer; tanpa warning baru.
- `npm run build`: exit 0 setelah edit source terakhir; `/e-portfolio-1` tetap prerender statis, dengan carousel sebagai client component.
- Playwright dari cache, Chromium 156.0.8078.4, production lokal `http://localhost:3235`, desktop 1440 × 1000 dan mobile 390 × 844. Tidak memasang dependency. Skrip sementara: `D:/TEMP/verify-eportfolio-editorial.cjs`.
- Pemeriksaan editorial DOM pada kedua viewport: **0 elemen pre/code**, tidak ada pola kode program atau istilah Route/Controller/Request/Blade/method/debugging pada teks artikel, dan tidak ada tautan tutorial atau tautan eksternal lain pada bagian Video. Laravel tetap ada pada narasi. Label contoh terlihat.
- Ketiga aspek instrumen dan seluruh 12 indikator sesuai urutan; enam heading/anchor, fokus-visible dan Enter, status rekaman asli, satu refleksi penutup dan URL LK 4 Siklus 1 diperiksa. Tidak ada tabel/katalog/uraian siklus lanjutan atau tautan kosong.
- Kedua foto dimuat tanpa broken image, object-contain; caption/kredit/penghitung serta disabled pada ujung sesuai slide. Navigasi Enter/Space dan swipe native pada mobile lolos. Menu desktop/mobile tetap berfungsi.
- Tidak ada clipping teks, horizontal overflow, console error atau page error pada checkpoint kedua ukuran. Screenshot hero, halaman penuh dan carousel ditinjau visual. Teks artikel sekitar 948 kata pada kedua viewport, dihitung dari whitespace teks DOM.
- Reviewer independen tidak menemukan Critical/Important. Dua catatan minor mengenai ketegasan label contoh instrumen dan kalimat indikator telah diperbaiki sebelum build dan browser akhir.
- Skrip browser awal masih mengharapkan label tutorial lama; assertion tersebut disesuaikan dengan requirement penghapusannya. Percobaan pembaruan skrip sempat gagal karena escaping regex, kemudian diperbaiki. Kedua masalah hanya pada skrip sementara di luar repo; pemeriksaan lengkap terakhir berhasil.

## Akses rujukan

Tujuh URL unik masih dirender: rujukan perencanaan/asesmen, lisensi dan dua kredit foto, serta LK 4 Siklus 1. LK 4 Siklus 1 dan portal modul SMK Bina Rahayu HTTP 200 dengan judul sesuai. Repositori BSKAP merespons 503; dua halaman sumber Pexels, lisensi Pexels dan Rumah Pendidikan menampilkan CAPTCHA 403 pada browser otomatis. Foto lokal tetap berfungsi. Tidak mengklaim akses seluruh layanan eksternal lolos dan tidak mengganti sumber karena respons tersebut.

Detail: [results.json](results.json). Batas pengujian: Chromium pada dua viewport, bukan audit WCAG penuh, seluruh browser/perangkat, zoom 200%, atau audit ulang isi seluruh PDF sumber.

## Bukti UTS dan scope

Modul Ajar lengkap terbaik Siklus 1 beserta kelengkapannya dan video pelaksanaan asli yang sesuai rancangan masih perlu dilampirkan. Bahan ajar/media serta instrumen dan hasil penilaian asli belum tersedia pada halaman untuk ditinjau. Dokumentasi nonmengajar asli juga belum tersedia. Contoh sementara dan ilustrasi bukan bukti pelaksanaan; status FR-PORTFOLIO-003 tetap Partial, Phase 3 tetap IN PROGRESS.

Source aplikasi yang berubah hanya `app/e-portfolio-1/page.tsx` dan data rubrik di `examples.ts`. Catatan truth diperbarui pada README, PRD, SRS, DESIGN dan roadmap. Data foto, aset, CSS, carousel, Navbar/Footer, halaman lain dan dependency tidak diubah. Tidak melakukan stage, commit, push atau deploy.

Screenshot: [desktop hero](desktop-hero.png), [mobile hero](mobile-hero.png), [desktop penuh](desktop-full.png), [mobile penuh](mobile-full.png), [carousel desktop](desktop-carousel-portrait.png), [carousel mobile](mobile-carousel-portrait.png).
