// Authoritative manuscript: artifacts/karya-inovasi-ppg-konten.md; cross-checked with completed LK 4.
export const content = {
  "needs": [
    "Selama pembelajaran Pemrograman Web dan Basis Data, saya melihat sebagian peserta didik kelas XI RPL sudah dapat mengelola data melalui halaman web maupun melalui alat pengelolaan basis data. Namun, ketika diminta menjelaskan hubungan kedua kegiatan tersebut, sebagian peserta didik masih ragu. Keduanya cenderung dipahami sebagai pekerjaan yang terpisah, padahal aplikasi dan perintah SQL dapat mengakses data yang sama.",
    "Temuan ini berasal dari pengamatan selama pembelajaran, bukan dari penelitian khusus. Saya memilihnya sebagai dasar karya inovasi karena peserta didik perlu memahami asal, penyimpanan, dan perubahan data. Keberhasilan mengikuti langkah praktik belum tentu menunjukkan bahwa mereka memahami hubungan aplikasi web dengan basis data."
  ],
  "ideas": [
    "Saya merancang **Praktikum Integrasi Laravel dan MySQL** dengan contoh pencatatan barang kelas. Kegiatan menghubungkan dua pengalaman belajar yang sebelumnya dipelajari melalui elemen berbeda: mengelola data menggunakan halaman web berbasis Laravel dan memeriksa atau mengubah data melalui MySQL.",
    "Peserta didik terlebih dahulu memperkirakan tempat data disimpan, menelusuri koneksi aplikasi, kemudian melakukan percobaan dari dua arah. Pada percobaan pertama, barang dicatat melalui halaman web dan hasilnya diperiksa melalui MySQL. Pada percobaan kedua, data dimasukkan langsung ke MySQL lalu hasilnya dilihat kembali pada halaman web. Peserta didik mencatat bukti, menggambar alur, dan menjelaskan temuannya sendiri.",
    "Tujuannya agar peserta didik mampu menunjukkan sumber data yang digunakan aplikasi, membuktikan kesesuaian data yang dilihat melalui dua cara, serta menjelaskan perjalanan data dari masukan pengguna sampai ditampilkan kembali."
  ],
  "stages": [
    {
      "name": "Prediksi",
      "description": "menuliskan dugaan tentang lokasi penyimpanan dan alur data."
    },
    {
      "name": "Telusuri",
      "description": "memeriksa sumber data serta konfigurasi hubungan aplikasi dengan MySQL."
    },
    {
      "name": "Coba",
      "description": "menambahkan barang dari halaman web, kemudian memeriksanya di MySQL."
    },
    {
      "name": "Buktikan",
      "description": "melakukan perubahan dari MySQL, kemudian memeriksa hasilnya melalui aplikasi."
    },
    {
      "name": "Jelaskan",
      "description": "menyusun diagram alur dan simpulan berdasarkan hasil percobaan."
    }
  ],
  "novelty": "Kebaruan rancangan ini terletak pada cara saya mempertemukan praktik Basis Data dan Pemrograman Web dalam satu rangkaian pembuktian yang sebelumnya belum digunakan pada kelas tersebut. Ini bukan klaim bahwa teknik tersebut belum pernah diterapkan di sekolah lain.",
  "research": [
    "Sebelum menyusun rancangan, saya meninjau kembali pengamatan pembelajaran, materi ajar yang telah digunakan, dan kajian mengenai kesulitan peserta didik memahami pengelolaan data. LK 4 mencatat penelaahan terhadap Li dkk. (2023), Alkhabaz dkk. (2023), serta Litherland dan Kluge (2024), yang digunakan untuk mempertimbangkan perpindahan pemahaman antarcara pengelolaan data dan pentingnya kegiatan mencoba, mengamati, serta menjelaskan hasil.",
    "Kajian tersebut menjadi landasan perancangan kegiatan berbasis pembuktian. Penelitian yang ditinjau tidak menguji langsung Praktikum Integrasi Laravel dan MySQL, sehingga hasilnya tidak dapat digunakan untuk menyatakan bahwa rancangan ini sudah efektif."
  ],
  "product": "**Produk utama:** desain pembelajaran praktikum integrasi Laravel dan MySQL.",
  "support": [
    {
      "title": "Modul Ajar",
      "description": "rancangan tujuan, langkah pembelajaran, dan pengaturan kegiatan praktik."
    },
    {
      "title": "LKPD",
      "description": "tempat mencatat prediksi, hasil pengamatan, bukti dua arah, diagram alur, dan penjelasan peserta didik."
    },
    {
      "title": "Instrumen Asesmen",
      "description": "kriteria untuk menilai ketepatan pembuktian dan kualitas penjelasan."
    },
    {
      "title": "Bahan Ajar (PPT)",
      "description": "pengantar konsep Laravel, MySQL, hubungan aplikasi–basis data, dan alur kegiatan."
    },
    {
      "title": "Prototipe Laravel — Inventaris Kelas",
      "description": "aplikasi latihan pencatatan barang untuk percobaan melalui halaman web."
    },
    {
      "title": "Buku Praktikum Digital (HTML offline)",
      "description": "panduan langkah praktik yang dapat dibuka tanpa internet."
    }
  ],
  "productClosing": "Semua perangkat menggunakan konteks inventaris barang kelas agar peserta didik dapat mengikuti satu kasus yang sama dari awal hingga akhir. Prototipe digunakan sebagai sarana percobaan; bukti pemahaman tetap dikumpulkan melalui LKPD dan penjelasan masing-masing peserta didik.",
  "implementationIntro": "Rancangan disiapkan untuk satu pertemuan kelas XI RPL selama **240 menit**:",
  "schedule": [
    [
      "Pembuka",
      "30 menit",
      "Orientasi kegiatan dan pemeriksaan pemahaman awal"
    ],
    [
      "Prediksi",
      "25 menit",
      "Menuliskan dugaan tentang penyimpanan dan alur data"
    ],
    [
      "Telusuri",
      "40 menit",
      "Menelusuri aplikasi dan sumber data"
    ],
    [
      "Coba",
      "45 menit",
      "Mengisi data dari web dan memeriksanya melalui MySQL"
    ],
    [
      "Buktikan",
      "45 menit",
      "Mengubah data melalui MySQL dan memeriksa hasilnya pada web"
    ],
    [
      "Jelaskan",
      "25 menit",
      "Membuat diagram alur dan menjelaskan kesimpulan"
    ],
    [
      "Penutup",
      "30 menit",
      "Refleksi dan umpan balik"
    ]
  ],
  "implementationClosing": [
    "Praktik direncanakan dilakukan bergantian dalam kelompok dua sampai tiga peserta didik, sedangkan jawaban awal dan penjelasan akhir dikerjakan secara individu. Pembagian kelompok mempertimbangkan ketersediaan perangkat di kelas.",
    "**Status:** langkah di atas merupakan rencana implementasi dari LK 4, bukan laporan pelaksanaan."
  ],
  "evaluationIntro": "Evaluasi disiapkan sejak awal sampai akhir kegiatan. Guru akan memeriksa kesiapan perangkat dan dugaan awal, mengamati pengerjaan, kemudian menilai bukti serta penjelasan peserta didik.",
  "weights": [
    [
      "Ketepatan mengenali sumber data",
      "25%"
    ],
    [
      "Pembuktian melalui dua cara",
      "35%"
    ],
    [
      "Penjelasan alur data",
      "30%"
    ],
    [
      "Kemandirian dan ketelitian",
      "10%"
    ]
  ],
  "evaluationClosing": [
    "Target yang direncanakan adalah nilai sekurang-kurangnya **75**, disertai capaian tingkat baik pada aspek pembuktian dan penjelasan. Guru juga akan membandingkan jawaban awal dan akhir, mencatat hambatan, lalu memperbaiki rancangan berdasarkan bukti pelaksanaan.",
    "**Belum ada hasil asesmen atau data peningkatan belajar** karena kegiatan ini belum diterapkan bersama peserta didik. Uji teknis pada prototipe dan buku praktikum hanya menunjukkan kesiapan perangkat pendukung, bukan efektivitas pembelajarannya."
  ],
  "document": "**LK 4 — Penyusunan Desain Karya Inovatif** merupakan acuan utama halaman ini. Dokumen itu memuat identifikasi kebutuhan, gagasan, riset sederhana, prototipe dan perangkat, rencana implementasi, serta evaluasi."
} as const;
