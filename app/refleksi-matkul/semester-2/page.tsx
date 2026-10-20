import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { RefleksiMatkulClient, type CourseData } from "@/components/sections/RefleksiMatkulClient";

/* ============================================================================
   SEMESTER II COURSE DATA
   ============================================================================ */
const courses: readonly CourseData[] = [
  {
    tabLabel: "MK 1 · Sosial Emosional",
    title: "Pembelajaran Sosial Emosional",
    lk2PdfHref: null,
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content: "Mata kuliah Pembelajaran Sosial Emosional membuat saya melihat bahwa keberhasilan pembelajaran tidak hanya ditentukan oleh materi dan metode yang sudah disiapkan.\n\nCara guru membaca keadaan kelas, mengelola emosinya sendiri, dan merespons perilaku peserta didik ikut menentukan bagaimana pembelajaran berlangsung.\n\nHal ini terasa ketika saya mengajar praktik Pemrograman Web. Secara umum peserta didik cukup aktif saat mulai mencoba langsung, tetapi beberapa masih mudah kehilangan fokus dan beralih pada aktivitas lain yang dianggap lebih menarik. Kondisi tersebut tetap muncul meskipun HP sudah dikumpulkan.\n\nDari pengalaman ini saya mulai memahami bahwa mengurangi sumber distraksi dari luar belum tentu cukup. Peserta didik juga perlu belajar mengenali kondisi dirinya dan mengelola perhatian agar dapat kembali pada kegiatan belajar. Pemahaman ini sejalan dengan kompetensi kesadaran diri dan pengelolaan diri dalam PSE yang sebelumnya saya pelajari.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content: "Sebelumnya saya lebih banyak melihat persoalan fokus dan kedisiplinan dari sisi pengelolaan kelas. Ketika peserta didik terdistraksi, respons yang paling mudah terpikir adalah mengurangi sumber gangguan atau mengingatkan mereka agar kembali mengerjakan tugas. Setelah mempelajari PSE, saya mulai melihat persoalan yang sama dari sisi yang berbeda. Peserta didik yang kehilangan fokus belum tentu sedang menolak pembelajaran. Mereka bisa saja kesulitan mempertahankan perhatian, merasa materi terlalu berat, atau menemukan aktivitas lain yang lebih menarik pada saat itu.\n\nTantangannya justru muncul pada cara saya merespons keadaan tersebut. Saya perlu tetap tegas agar kegiatan praktik berjalan, tetapi tidak terburu-buru memberi label kepada peserta didik sebagai malas atau tidak serius. Pengalaman pada tugas penerapan PSE juga memperlihatkan bahwa ketika kelas mulai gaduh atau peserta didik terlihat bingung, respons yang lebih tenang dan penjelasan yang disederhanakan dapat membantu suasana kembali terkendali. Dalam refleksi praktik tersebut, saya menahan diri untuk tidak langsung menegur dengan nada keras, mengambil jeda, lalu mengubah cara menjelaskan materi. Bagi saya, bagian ini membuat PSE terasa lebih dekat dengan pekerjaan guru sehari-hari, bukan hanya teori tentang emosi.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content: "Konsep utama yang paling saya pahami adalah lima kompetensi PSE, yaitu kesadaran diri, pengelolaan diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab. Kelima kompetensi tersebut saling berkaitan dalam praktik mengajar. Guru perlu terlebih dahulu mengenali emosinya sendiri sebelum merespons keadaan kelas, kemudian mencoba memahami kondisi peserta didik, berkomunikasi dengan tepat, dan menentukan tindakan yang tidak hanya menyelesaikan masalah sesaat. Pada tugas Analisis dan Sintesis PSE, prinsip ini diterjemahkan melalui pola JEDA, yaitu mengenali emosi, mengelolanya, memberikan respons, lalu melakukan refleksi.\n\nSaya juga memahami bahwa guru menjadi teladan melalui respons yang ditampilkan ketika menghadapi kesalahan. Hal ini sangat dekat dengan pembelajaran Pemrograman Web karena error, kode yang tidak berjalan, atau konfigurasi yang keliru merupakan bagian biasa dari praktik. Dalam rancangan pembelajaran berbasis PSE pada Laravel, peserta didik diarahkan untuk tidak langsung panik ketika menemui error, tetapi berhenti sejenak, membaca pesan yang muncul, mencari sumber masalah, lalu mencoba kembali. Guru pun perlu mencontohkan sikap yang sama ketika demonstrasi atau pembelajaran tidak berjalan sesuai rencana.\n\nKonsep experiential learning juga memperluas pemahaman saya. Pengalaman belajar dapat dimulai dari situasi yang benar-benar dirasakan peserta didik, kemudian direfleksikan, dihubungkan dengan konsep, dan dicoba kembali. Pada rancangan Pemrograman Web, misalnya, peserta didik terlebih dahulu mengalami kebingungan saat menggunakan form tanpa validasi dan notifikasi, lalu pengalaman tersebut digunakan untuk memahami fungsi validasi, flash message, dan Eloquent ORM.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content: "Saya ingin lebih memperhatikan pengelolaan perhatian peserta didik selama praktik. Pengumpulan HP tetap dapat digunakan apabila memang diperlukan, tetapi saya tidak ingin menjadikannya satu-satunya cara mengatasi distraksi. Kegiatan praktik akan saya pecah menjadi target yang lebih pendek agar peserta didik memiliki arah yang jelas tentang apa yang harus diselesaikan terlebih dahulu. Ketika ada peserta didik yang mulai kehilangan fokus, saya ingin mendekatinya dan mencari tahu kendalanya sebelum memberikan teguran.\n\nSaya juga ingin lebih konsisten memberi ruang bagi peserta didik untuk mengenali kondisi belajarnya sendiri. Refleksi singkat dapat digunakan setelah kegiatan tertentu, misalnya dengan meminta mereka menyebutkan bagian yang sudah dipahami, bagian yang masih membingungkan, atau apa yang dilakukan ketika mengalami error. Pada pembelajaran Pemrograman Web, pendekatan experiential learning yang sudah saya rancang juga ingin saya gunakan secara lebih nyata, terutama agar peserta didik dapat merasakan hubungan antara pengalaman sebagai pengguna, keputusan teknis saat membuat aplikasi, dan tanggung jawab mereka sebagai calon pengembang perangkat lunak.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content: "Artefak yang saya pilih adalah 1.D Analisis dan Sintesis PSE di Lingkungan Sekolah, 1.E Penerapan dan Evaluasi PSE di Lingkungan Sekolah, 2.E Rencana Pembelajaran Guru Teladan Berbasis PSE, serta 3.E Penerapan Experiential Learning dan PSE di Lingkungan Sekolah. Keempat artefak tersebut memperlihatkan perkembangan pemahaman saya mulai dari mengenali kompetensi PSE, mencoba menerapkannya saat mengajar, menghubungkannya dengan pembelajaran Laravel, sampai merancang experiential learning yang terintegrasi dengan PSE.",
          },
          {
            label: "Alasan Pemilihan",
            question: "2. Mengapa artefak tersebut yang saya pilih?",
            content: "Saya memilih 1.D karena artefak tersebut paling jelas memperlihatkan dasar pemahaman saya tentang lima kompetensi PSE dan bagaimana guru mengelola emosi melalui proses mengenali, mengelola, merespons, dan merefleksikan.\n\nArtefak 1.E saya pilih karena sudah memuat pengalaman praktik dan refleksi yang nyata. Di dalamnya terdapat catatan tentang rasa gugup, peserta didik yang mulai bingung dan gaduh, serta keputusan untuk menenangkan diri dan mengubah cara menjelaskan materi.\n\nArtefak 2.E lebih dekat dengan bidang yang saya ajarkan sekarang karena membahas penerapan PSE pada Pemrograman Web menggunakan Laravel. Di sana, masalah seperti error konfigurasi, migration, CRUD, autentikasi, dan debugging tidak hanya dipandang sebagai persoalan teknis, tetapi juga sebagai kesempatan melatih kesabaran, tanggung jawab, serta kemampuan meminta dan memberikan bantuan.\n\nSementara itu, 3.E menunjukkan arah pengembangan pembelajaran yang ingin saya lakukan melalui experiential learning. Artefak ini masih berupa rancangan pembelajaran dan belum saya gunakan sebagai bukti keberhasilan praktik.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content: "Pada 1.D, bagian yang paling mendukung refleksi saya adalah program pengelolaan emosi guru melalui pola JEDA serta penjelasan mengenai lima kompetensi PSE. Bagian tersebut membantu saya memahami bahwa guru perlu memberikan jeda sebelum merespons situasi kelas dan memisahkan perilaku peserta didik dari penilaian terhadap pribadinya.\n\nPada 1.E, bukti yang paling konkret terdapat pada catatan refleksi diri. Saya menuliskan bahwa ketika beberapa peserta didik mulai bingung dan gaduh, saya tidak langsung menegur keras. Saya mengambil napas, menghentikan penjelasan sejenak, lalu menggunakan cara yang lebih sederhana. Setelah itu peserta didik lebih mudah mengikuti pembelajaran dan suasana kelas kembali lebih cair. Bagian ini paling dekat dengan pengalaman saya sekarang ketika menghadapi beberapa peserta didik yang mudah terdistraksi saat praktik.\n\nPada 2.E, hubungan PSE dengan Pemrograman Web terlihat pada cara peserta didik diarahkan menghadapi error Laravel secara bertahap dan pada sikap guru ketika menemui kemampuan belajar yang beragam. Guru tidak langsung memberikan jawaban atau menunjukkan kekesalan, tetapi mendengarkan masalah peserta didik dan membimbing proses debugging.\n\nPada 3.E, bagian yang paling relevan adalah rancangan empat tahap experiential learning. Peserta didik mengalami sendiri form yang tidak komunikatif, merefleksikan rasa bingung sebagai pengguna, mempelajari validasi dan flash message sebagai solusi teknis, lalu menerapkannya pada proyek Laravel. PSE masuk melalui kesadaran terhadap rasa frustrasi, empati terhadap pengguna, regulasi emosi ketika debugging, dan komunikasi saat memberi umpan balik.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        content: "Mata kuliah Pembelajaran Sosial Emosional membuat saya melihat perilaku peserta didik dengan sudut pandang yang lebih luas. Peserta didik yang kehilangan fokus, kesulitan mengikuti praktik, atau mudah frustrasi tidak selalu cukup ditangani dengan aturan dan teguran. Guru perlu membaca penyebabnya, menjaga responsnya sendiri, lalu menentukan bentuk bantuan yang sesuai. Pengalaman mengajar membuat saya semakin memahami bahwa suasana belajar juga dibentuk oleh cara guru menghadapi situasi yang tidak berjalan sesuai rencana. Ke depan, saya ingin mengembangkan pembelajaran Pemrograman Web yang tetap memiliki tuntutan teknis yang jelas, tetapi memberi ruang bagi peserta didik untuk mengenali kesulitan, mengelola respons, mencoba kembali, dan belajar bertanggung jawab atas proses yang mereka jalani.",
      },
    ],
    artifacts: [
      { label: "1.D — Analisis dan Sintesis PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1I6YW_j4Ul4HabwNx7DK-jao-cets7nHf/view?usp=drive_link" },
      { label: "1.E — Penerapan dan Evaluasi PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1bqNWVTDWehCxRn4FGQPPMl5Vj6aHh-8V/view?usp=drive_link" },
      { label: "2.E — Rencana Pembelajaran Guru Teladan Berbasis PSE", href: "https://drive.google.com/file/d/15AldYGTKYewMfK5NilV7EMz1gMw1qdyA/view?usp=drive_link" },
      { label: "3.E — Penerapan Experiential Learning dan PSE di Lingkungan Sekolah", href: "https://drive.google.com/file/d/1jl8CuAMMH1_yjYrEyjF4r_iVDHYthTHC/view?usp=drive_link" },
    ],
  },
  {
    tabLabel: "MK 2 · Asesmen Lanjut",
    title: "Pembelajaran Mendalam dan Asesmen Lanjut",
    lk2PdfHref: null,
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content: "Mata kuliah Pembelajaran Mendalam dan Asesmen Lanjut membantu saya memahami bahwa pembelajaran perlu disusun berdasarkan kondisi peserta didik, bukan hanya berdasarkan materi yang harus selesai.\n\nPengalaman mengajar Pemrograman Web dan Basis Data memperlihatkan bahwa kesiapan peserta didik berbeda. Ada yang dapat mengikuti praktik dengan cepat, sedangkan sebagian masih membutuhkan contoh dan pendampingan.\n\nMateri tentang asesmen awal membuat saya semakin memahami bahwa informasi mengenai kemampuan awal dapat digunakan untuk menentukan bentuk bantuan dan aktivitas yang lebih sesuai. Pemahaman ini juga muncul dalam LK 1.E yang menempatkan asesmen awal sebagai dasar dalam merancang pembelajaran yang lebih fleksibel.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content: "Sebelumnya saya cenderung melihat asesmen sebagai kegiatan untuk mengetahui hasil belajar setelah materi diberikan. Melalui PMAL, saya mulai memahami bahwa asesmen dapat digunakan sejak awal dan selama proses pembelajaran. Perbedaan kesiapan peserta didik yang saya temui ketika praktik membuat konsep ini terasa relevan. Peserta didik yang masih kesulitan tidak selalu membutuhkan pengulangan materi secara keseluruhan, sedangkan peserta didik yang sudah memahami dasar dapat diberikan kesempatan untuk melanjutkan atau mencoba tantangan lain.\n\nMateri perkuliahan juga membuat saya melihat bahwa pembelajaran mendalam bukan berarti memberikan materi atau soal yang semakin sulit. Pembelajaran justru perlu memberi kesempatan kepada peserta didik untuk memahami konsep, menggunakannya dalam situasi yang relevan, dan melihat kembali proses yang sudah dijalani. Pemahaman serupa tercatat dalam refleksi LK 2.E.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content: "Konsep yang paling penting bagi saya adalah penggunaan asesmen sebagai bagian dari proses belajar. Asesmen awal membantu guru mengetahui titik awal peserta didik, asesmen formatif membantu melihat perkembangan selama pembelajaran, sedangkan asesmen akhir digunakan untuk mengetahui ketercapaian kompetensi.\n\nSaya juga memahami fungsi Assessment as Learning, Assessment for Learning, dan Assessment of Learning. Ketiganya membuat penilaian tidak hanya berakhir pada pemberian nilai, tetapi dapat digunakan untuk memberikan umpan balik dan membantu peserta didik memperbaiki hasil belajarnya. Hal tersebut menjadi pembahasan utama dalam LK 3.E.\n\nSaya juga memperoleh pemahaman mengenai DUP, TaRL, dan CRT. Bagi saya, inti dari pendekatan tersebut adalah guru perlu mengenali keberagaman peserta didik dan menggunakan informasi tersebut ketika menentukan cara belajar, tingkat pendampingan, maupun konteks pembelajaran. Pengelompokan atau penyesuaian kegiatan juga tidak seharusnya menjadi label tetap karena kemampuan peserta didik dapat berkembang. Gagasan ini terlihat dalam refleksi dan tindak lanjut pada LK 4.E.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content: "Saya ingin lebih membiasakan penggunaan asesmen awal sebelum masuk ke materi baru, terutama pada pembelajaran yang membutuhkan kemampuan prasyarat. Bentuknya tidak harus selalu berupa tes tertulis. Pertanyaan singkat, latihan sederhana, atau pengamatan ketika peserta didik mulai praktik dapat memberikan informasi yang cukup untuk menentukan kebutuhan pendampingan.\n\nSelama pembelajaran berlangsung, saya juga ingin memberikan umpan balik lebih awal daripada menunggu pekerjaan selesai. Pada praktik Pemrograman Web maupun Basis Data, kesalahan syntax, alur program, atau perintah dapat menjadi bahan untuk melihat bagian yang belum dipahami. Peserta didik yang sudah cukup mandiri dapat diberikan ruang untuk mencoba lebih jauh, sementara peserta didik yang masih kesulitan memperoleh bantuan secara bertahap. Saya ingin menggunakan hasil asesmen sebagai bahan memperbaiki pembelajaran berikutnya, bukan hanya sebagai catatan nilai.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content: "Artefak yang saya pilih adalah LK 1.E Refleksi dan Tindak Lanjut, LK 2.E Refleksi dan Tindak Lanjut Microteaching, LK 3.E Asesmen sebagai Alat Belajar, serta LK 4.E Refleksi dan Tindak Lanjut Penguatan Praktik Pembelajaran. Artefak tersebut mewakili perkembangan pembelajaran mulai dari asesmen awal, pemahaman mengenai pembelajaran mendalam, asesmen berkelanjutan, hingga penerapan TaRL dan CRT.",
          },
          {
            label: "Alasan Pemilihan",
            question: "2. Mengapa artefak tersebut yang saya pilih?",
            content: "LK 1.E saya pilih karena menunjukkan perubahan pemahaman saya terhadap fungsi asesmen awal dan DUP. Pada bagian tindak lanjut, hasil asesmen digunakan untuk menentukan tingkat pendampingan, variasi bahan ajar, dan tingkat kesulitan kegiatan.\n\nLK 2.E memperlihatkan perubahan pemahaman saya mengenai pembelajaran mendalam. Saya sebelumnya masih melihatnya dekat dengan materi atau soal yang sulit, kemudian memahami bahwa pembelajaran mendalam lebih berkaitan dengan hubungan antara konsep, praktik, pemecahan masalah, dan refleksi.\n\nLK 3.E saya pilih karena memperlihatkan pemahaman mengenai asesmen sebagai alat belajar. Dalam dokumen tersebut, asesmen digunakan untuk memberikan umpan balik, memberi kesempatan memperbaiki kesalahan, dan membantu peserta didik mencapai kompetensi secara bertahap.\n\nLK 4.E melengkapi ketiga artefak tersebut karena membahas bagaimana hasil asesmen dapat digunakan untuk menyesuaikan pembelajaran melalui TaRL dan mempertimbangkan pengalaman peserta didik melalui CRT.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content: "Pada LK 1.E, bagian yang paling mendukung refleksi adalah rencana penggunaan asesmen awal untuk memetakan kesiapan belajar sebelum menentukan bentuk pendampingan. Dokumen tersebut juga menegaskan bahwa perlakuan yang adil tidak selalu berarti memberikan kegiatan yang sama kepada seluruh peserta didik.\n\nPada LK 2.E, bagian refleksi mengenai perubahan pemahaman terhadap Pembelajaran Mendalam mendukung pandangan saya bahwa peserta didik perlu memahami alasan di balik suatu langkah, bukan hanya mengikuti instruksi.\n\nPada LK 3.E, bagian tentang Assessment as Learning, Assessment for Learning, dan Assessment of Learning mendukung perubahan cara saya melihat asesmen. Umpan balik dan kesempatan memperbaiki pekerjaan menjadi bagian dari proses belajar, bukan diberikan setelah seluruh kegiatan selesai.\n\nSementara itu, LK 4.E menunjukkan hubungan antara asesmen awal dengan penyesuaian tingkat tugas dan pendampingan. Artefak tersebut juga menekankan bahwa pengelompokan peserta didik perlu bersifat fleksibel agar tidak menjadi label kemampuan yang tetap.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        content: "Mata kuliah Pembelajaran Mendalam dan Asesmen Lanjut membuat saya lebih memperhatikan hubungan antara perencanaan, proses belajar, dan asesmen. Saya mulai memahami bahwa informasi mengenai kemampuan peserta didik dapat membantu guru menentukan langkah pembelajaran yang lebih sesuai. Asesmen juga tidak harus menunggu akhir kegiatan karena kesalahan, hasil praktik, dan respons peserta didik selama proses belajar dapat menjadi bahan untuk memberikan umpan balik. Ke depan, saya ingin menggunakan asesmen dengan cara yang lebih sederhana tetapi berguna untuk membaca perkembangan peserta didik dan menentukan tindak lanjut pembelajaran.",
      },
    ],
    artifacts: [
      { label: "LK 1.E — Refleksi dan Tindak Lanjut", href: "https://drive.google.com/file/d/16QzrhPySLQw5KobghAzqM6nRWqcXemRi/view?usp=drive_link" },
      { label: "LK 2.E — Refleksi dan Tindak Lanjut Microteaching", href: "https://drive.google.com/file/d/1hgwpj20ynXJyetxnTKoxbcImH5vjxO9c/view?usp=drive_link" },
      { label: "LK 3.E — Asesmen sebagai Alat Belajar", href: "https://drive.google.com/file/d/1VNLEOHARApsnn1ait8iE2UiwzSFKMDBl/view?usp=drive_link" },
      { label: "LK 4.E — Refleksi dan Tindak Lanjut Penguatan Praktik Pembelajaran", href: "https://drive.google.com/file/d/1--_PoicjfqIKYU5inHq57jD4sLqolHKL/view?usp=drive_link" },
    ],
  },
  {
    tabLabel: "MK 3 · PPL Mandiri",
    title: "Praktik Pengalaman Lapangan (PPL) Mandiri",
    lk2PdfHref: null,
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content: "PPL Mandiri memberikan kesempatan kepada saya untuk menjalankan pembelajaran dengan tanggung jawab yang lebih besar, mulai dari menyiapkan materi, melaksanakan kegiatan, hingga mengevaluasi hasilnya. Setelah menjalani orientasi sekolah dan praktik mengajar terbimbing, saya melaksanakan empat siklus pembelajaran yang mencakup Pemrograman Web menggunakan Laravel dan Basis Data menggunakan MySQL.\n\nSelama proses tersebut, saya semakin memahami bahwa tugas guru bukan hanya menyampaikan materi sesuai rancangan, tetapi juga mengambil keputusan berdasarkan kondisi kelas. Keterbatasan perangkat, perbedaan kesiapan belajar, dan peserta didik yang belum segera mengerjakan tugas menjadi bagian dari pengalaman yang perlu saya hadapi. Melalui PPL Mandiri, saya belajar menyesuaikan kegiatan pembelajaran tanpa mengabaikan tujuan yang ingin dicapai.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content: "Tantangan terbesar yang saya rasakan adalah menjaga keterlibatan peserta didik selama kegiatan praktik. Dalam rancangan pembelajaran, setiap tahapan sudah disusun dengan alokasi waktu tertentu. Namun, pelaksanaannya tidak selalu berjalan sesuai harapan. Sebagian peserta didik belum dapat mencoba langsung karena tidak membawa perangkat, sedangkan beberapa lainnya masih perlu diingatkan berulang kali untuk mulai mengerjakan tugas.\n\nKondisi ini tidak hanya terjadi pada pembelajaran Laravel, tetapi kembali muncul ketika materi beralih ke Basis Data hingga siklus keempat. Saya menyadari bahwa memberikan contoh dan mengulang instruksi belum tentu cukup untuk membuat seluruh peserta didik terlibat. Pengalaman tersebut menunjukkan bahwa saya masih perlu memperbaiki cara membagi tugas, memantau pengerjaan, dan mengelola waktu agar kegiatan praktik dapat berjalan lebih terarah.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content: "Konsep yang paling bermakna bagi saya adalah pembelajaran yang dilaksanakan secara bertahap dan terus diperbaiki melalui refleksi. Selama PPL Mandiri, materi berkembang dari pembuatan halaman dan pengelolaan data pada Laravel menuju penggunaan SQL, penyusunan struktur tabel, hingga perancangan database relasional. Rangkaian tersebut membuat saya memahami pentingnya menghubungkan materi sebelumnya dengan materi baru melalui apersepsi dan contoh yang dapat langsung dicoba.\n\nSaya juga belajar bahwa keterlibatan peserta didik tidak cukup dilihat dari perhatian mereka terhadap penjelasan guru, tetapi perlu diperiksa melalui pekerjaan yang benar-benar dilakukan.\n\nUmpan balik Guru Pamong turut menguatkan pemahaman saya bahwa guru perlu memberikan pendampingan yang cukup sekaligus kesempatan kepada peserta didik untuk bertanggung jawab terhadap proses belajarnya.\n\nRefleksi dari setiap siklus kemudian menjadi bahan untuk menentukan bagian pembelajaran yang masih perlu diperbaiki.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content: "Berdasarkan pengalaman empat siklus, saya ingin memperbaiki pengelolaan kegiatan praktik agar peserta didik memiliki target pekerjaan yang lebih jelas. Instruksi akan saya bagi menjadi beberapa tahapan pendek dengan pemeriksaan hasil secara berkala, sehingga peserta didik tidak terlalu lama menunda pengerjaan.\n\nSaya juga perlu menyiapkan kegiatan alternatif bagi peserta didik yang belum dapat menggunakan perangkat, misalnya menganalisis perintah SQL, memperkirakan hasil query, atau menggambar hubungan antartabel secara tertulis.\n\nSelain itu, saya ingin lebih konsisten memantau perkembangan pekerjaan dan memberikan bantuan sesuai kesulitan yang ditemukan.\n\nPerubahan tersebut akan saya terapkan secara bertahap karena pengalaman selama PPL Mandiri menunjukkan bahwa kendala yang sama dapat muncul kembali meskipun pembelajaran sudah direncanakan dengan baik.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content: "Artefak utama yang saya pilih adalah LK 3 Refleksi Praktik Mengajar Terbimbing dan empat dokumen LK 4 Refleksi Praktik Pembelajaran Mandiri dari Siklus 1 sampai Siklus 4. LK 3 menjadi penghubung antara pengalaman praktik terbimbing dan pembelajaran yang kemudian saya jalankan secara mandiri. Sementara itu, keempat LK 4 memperlihatkan pengalaman saya dalam melaksanakan pembelajaran Laravel dan Basis Data, menghadapi kendala selama kegiatan praktik, serta menentukan rencana perbaikan.\n\nDokumen LK 1 Orientasi dan Observasi Manajemen Sekolah serta LK 2 Observasi Lingkungan Belajar tetap menjadi pendukung untuk memahami kondisi sekolah dan fasilitas pembelajaran, tetapi fokus utama refleksi ini berada pada pengalaman mengajar selama empat siklus.",
          },
          {
            label: "Alasan Pemilihan",
            question: "2. Mengapa artefak tersebut yang saya pilih?",
            content: "Saya memilih LK 3 karena dokumen tersebut memperlihatkan pengalaman awal saya dalam merancang dan melaksanakan pembelajaran bersama Guru Pamong, termasuk kesulitan peserta didik memahami konsep prasyarat dan keterbatasan kesempatan praktik.\n\nKeempat LK 4 saya pilih karena lebih langsung menggambarkan proses pembelajaran mandiri.\n\nPada Siklus 1, saya merefleksikan kegiatan Pemrograman Web yang belum berjalan merata karena keterbatasan perangkat dan peserta didik yang masih menunda pekerjaan. Siklus 2 dan 3 menunjukkan bahwa tantangan serupa tetap muncul ketika pembelajaran beralih ke penggunaan MySQL dan pengolahan data menggunakan SQL.\n\nPada Siklus 4, kendala tersebut masih ditemukan ketika peserta didik mempelajari relasi antartabel dan merancang database.\n\nRangkaian artefak ini penting karena menunjukkan perkembangan materi yang saya ajarkan sekaligus tantangan pengelolaan pembelajaran yang masih perlu diperbaiki, bukan sekadar keberhasilan menyelesaikan setiap siklus.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content: "Pada LK 3, bagian refleksi kendala dan umpan balik Guru Pamong menjadi dasar pemahaman saya mengenai pentingnya menyesuaikan pembelajaran dengan kesiapan peserta didik serta kondisi perangkat. Saya juga memperoleh masukan bahwa guru perlu memberikan kesempatan belajar dan pendampingan yang cukup tanpa mengharapkan seluruh peserta didik memahami materi pada waktu yang sama.\n\nPada LK 4 Siklus 1, bagian evaluasi kegiatan inti mencatat bahwa sebagian peserta didik belum dapat melakukan praktik langsung dan masih perlu diingatkan untuk memulai pekerjaan. Pada Siklus 2, kondisi tersebut kembali ditemukan ketika peserta didik belajar menggunakan MySQL CLI, sehingga saya merencanakan pembagian tugas menjadi langkah-langkah sederhana dan menyiapkan latihan yang dapat dilakukan tanpa perangkat.\n\nPada Siklus 3, refleksi menunjukkan bahwa contoh penggunaan SQL cukup membantu peserta didik mengikuti penjelasan, tetapi belum sepenuhnya mendorong keterlibatan seluruh peserta didik dalam praktik.\n\nSementara itu, pada Siklus 4, pembelajaran telah berkembang menuju penggunaan Foreign Key, JOIN, dan perancangan database relasional. Namun, kendala pengerjaan tugas dan ketersediaan perangkat masih muncul. Bagian tindak lanjut pada siklus terakhir menegaskan perlunya target pekerjaan yang jelas, pemeriksaan perkembangan secara berkala, serta kegiatan alternatif berupa rancangan hubungan antartabel secara tertulis.\n\nKeempat siklus tersebut mendukung refleksi saya bahwa perbaikan pembelajaran tidak selalu menghasilkan perubahan yang langsung terlihat. Saya masih perlu mengembangkan cara mengelola kegiatan praktik agar peserta didik memperoleh kesempatan belajar yang lebih merata dan bertanggung jawab terhadap penyelesaian tugasnya.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        content: "PPL Mandiri memberikan pengalaman bagi saya untuk memahami bahwa keberhasilan pembelajaran tidak cukup ditentukan oleh kesiapan materi dan kemampuan menjelaskan. Selama empat siklus, saya menghadapi tantangan yang berulang, terutama keterbatasan perangkat, peserta didik yang belum segera mengerjakan tugas, dan penyelesaian praktik yang membutuhkan waktu lebih panjang. Pengalaman tersebut membuat saya menyadari pentingnya pengelolaan kegiatan, pemantauan pekerjaan, dan penyesuaian pembelajaran berdasarkan kondisi kelas. Saya belum dapat menganggap seluruh kendala tersebut terselesaikan, tetapi refleksi pada setiap siklus membantu saya mengenali bagian yang masih perlu diperbaiki. Ke depan, saya ingin mengembangkan pembelajaran yang lebih terarah, memberikan kesempatan praktik yang sesuai dengan kondisi peserta didik, serta tetap mendorong mereka untuk bertanggung jawab terhadap proses belajarnya.",
      },
    ],
    artifacts: [
      { label: "LK 3 — Refleksi Praktik Mengajar Terbimbing", href: "https://drive.google.com/file/d/13H2_vJKEMtRCCNC0vjHn-cCCNvd9jyre/view?usp=drive_link" },
      { label: "LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus 1", href: "https://drive.google.com/file/d/1msRUpD-Xj4-aBBZ7wxh_KF1fVFtaXmqo/view?usp=drive_link" },
      { label: "LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus 2", href: "https://drive.google.com/file/d/1tlVTr52mGQ2vMZ6nB888ChzIENvNbX11/view?usp=drive_link" },
      { label: "LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus 3", href: "https://drive.google.com/file/d/1jEREVsTg7xDhui4wS_hf4_dL-AT1jtV7/view?usp=drive_link" },
      { label: "LK 4 — Refleksi Praktik Pembelajaran Mandiri Siklus 4", href: "https://drive.google.com/file/d/1WGDruy6V-yJ82rtlmqmV8G4nyLz2w751/view?usp=drive_link" },
      { label: "LK 1 — Orientasi dan Observasi Manajemen Sekolah", href: "https://drive.google.com/file/d/1h5GyG3t1Ggfo1iZBR6fuETKuAAH-pagq/view?usp=drive_link" },
      { label: "LK 2 — Observasi Lingkungan Belajar", href: "https://drive.google.com/file/d/1agomWjaww4YXBFvULq3RBWkK2QIJmf1P/view?usp=drive_link" },
    ],
  },
  {
    tabLabel: "MK 4 · Projek Kepemimpinan",
    title: "Projek Kepemimpinan",
    lk2PdfHref: null,
    sections: [
      { fourCKey: "connection", title: "Connection", content: "Belum tersedia" },
      { fourCKey: "challenge", title: "Challenge", content: "Belum tersedia" },
      { fourCKey: "concept", title: "Concept", content: "Belum tersedia" },
      { fourCKey: "change", title: "Change", content: "Belum tersedia" },
      { fourCKey: "artefak", title: "Analisis Artefak Pendukung", content: "Belum tersedia" },
      { fourCKey: "kesimpulan", title: "Kesimpulan Mata Kuliah", content: "Belum tersedia" },
    ],
    artifacts: [],
  },
  {
    tabLabel: "MK 5 · Pendidikan Inklusi",
    title: "Pendidikan Inklusi",
    lk2PdfHref: null,
    sections: [
      {
        fourCKey: "connection",
        title: "Connection",
        question: "1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?",
        content: "Artefak yang saya pilih adalah 2.D Menyusun Rekomendasi Mengenal Alya Sebelum Menyusun Pembelajaran, 3.D Menyusun Satu Rencana Pembelajaran untuk Semua Murid, 4.A Pelaksanaan Pembelajaran di Sekolah Inklusif, serta 4.E Refleksi dan Tindak Lanjut Pelaksanaan Pembelajaran di Sekolah Inklusif. Keempat artefak tersebut memperlihatkan perkembangan pemahaman saya mengenai pendidikan inklusif, mulai dari mengenali kebutuhan peserta didik melalui identifikasi dan asesmen, menyusun pembelajaran yang akomodatif, menganalisis strategi pelaksanaan berdasarkan studi kasus, hingga merencanakan tindak lanjut. Seluruhnya merupakan hasil kegiatan analisis, perancangan, dan refleksi perkuliahan, sehingga tidak saya gunakan sebagai bukti bahwa rancangan tersebut sudah dilaksanakan di sekolah tempat saya menjalani PPL.",
      },
      {
        fourCKey: "challenge",
        title: "Challenge",
        question: "2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?",
        content: "Sebelumnya, ketika peserta didik kesulitan mengikuti praktik, saya lebih sering memberikan penjelasan ulang, menunjukkan contoh, atau mendampingi pengerjaan tugas secara langsung. Melalui Pendidikan Inklusi, saya memahami bahwa bantuan yang diberikan perlu mempertimbangkan penyebab kesulitan dan kondisi setiap peserta didik.\n\nPada studi kasus Alya, misalnya, instruksi yang panjang dan lingkungan yang terlalu ramai dapat menjadi hambatan dalam mengikuti pembelajaran. Permasalahan tersebut tidak cukup ditangani dengan mengulang instruksi yang sama. Guru perlu mempertimbangkan penggunaan media visual, pembagian tugas menjadi langkah yang lebih sederhana, dan penyesuaian lingkungan belajar.\n\nTantangan bagi saya adalah mempersiapkan pembelajaran yang tetap memiliki tujuan jelas, tetapi tidak mengharuskan seluruh peserta didik mengikuti kegiatan atau menunjukkan pemahaman dengan cara yang seragam.",
      },
      {
        fourCKey: "concept",
        title: "Concept",
        question: "3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?",
        content: "Konsep utama yang saya pelajari adalah bahwa pendidikan inklusif perlu dimulai dari pemahaman terhadap kebutuhan peserta didik. Proses identifikasi dan asesmen membantu guru mengenali kemampuan, hambatan, kekuatan, serta dukungan yang diperlukan sebelum menyusun pembelajaran.\n\nSaya juga memahami pentingnya adaptasi dan akomodasi, yaitu menyesuaikan aktivitas, media, lingkungan, dan cara penilaian agar peserta didik dapat mengikuti pembelajaran sesuai kondisinya. Dalam tugas rancangan pembelajaran akomodatif, prinsip tersebut diterapkan melalui penggunaan jadwal visual, kartu komunikasi, media dengan kontras tinggi, pendampingan teman sebaya, dan bentuk asesmen yang fleksibel.\n\nKonsep lain yang penting adalah kolaborasi antara guru, orang tua, Guru Pembimbing Khusus, dan pihak terkait. Pembelajaran inklusif bukan hanya tanggung jawab satu guru, melainkan memerlukan komunikasi dan tindak lanjut agar bantuan yang diberikan benar-benar sesuai dengan perkembangan peserta didik.",
      },
      {
        fourCKey: "change",
        title: "Change",
        question: "4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?",
        content: "Setelah mempelajari Pendidikan Inklusi, saya ingin lebih memperhatikan kemudahan akses terhadap kegiatan pembelajaran yang saya rancang. Pada mata pelajaran Pemrograman Web dan Basis Data, saya dapat memulai dengan memberikan instruksi yang lebih singkat dan bertahap, menyediakan contoh visual, serta memberi kesempatan kepada peserta didik untuk menunjukkan pemahaman melalui cara yang sesuai dengan kebutuhan mereka.\n\nSaya juga ingin lebih memperhatikan hambatan yang mungkin muncul dari media atau lingkungan belajar, bukan hanya dari kemampuan peserta didik.\n\nApabila terdapat peserta didik dengan kebutuhan dukungan khusus, saya perlu melakukan identifikasi bersama pihak yang berkompeten sebelum menentukan penyesuaian pembelajaran. Hasil pengamatan dan asesmen kemudian digunakan untuk mengevaluasi bantuan yang diberikan.\n\nPerubahan tersebut ingin saya lakukan secara bertahap agar pembelajaran lebih mudah diikuti tanpa mengurangi kesempatan peserta didik untuk berkembang secara mandiri.",
      },
      {
        fourCKey: "artefak",
        title: "Analisis Artefak Pendukung",
        subItems: [
          {
            label: "Artefak yang Dipilih",
            question: "1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?",
            content: "Artefak yang saya pilih adalah 2.D Menyusun Rekomendasi Mengenal Alya Sebelum Menyusun Pembelajaran, 3.D Menyusun Satu Rencana Pembelajaran untuk Semua Murid, 4.A Pelaksanaan Pembelajaran di Sekolah Inklusif, serta 4.E Refleksi dan Tindak Lanjut Pelaksanaan Pembelajaran di Sekolah Inklusif. Keempat artefak tersebut memperlihatkan perkembangan pemahaman saya mengenai pendidikan inklusif, mulai dari mengenali kebutuhan peserta didik melalui identifikasi dan asesmen, menyusun pembelajaran yang akomodatif, menganalisis strategi pelaksanaan berdasarkan studi kasus, hingga merencanakan tindak lanjut. Seluruhnya merupakan hasil kegiatan analisis, perancangan, dan refleksi perkuliahan, sehingga tidak saya gunakan sebagai bukti bahwa rancangan tersebut sudah dilaksanakan di sekolah tempat saya menjalani PPL.",
          },
          {
            label: "Alasan Pemilihan",
            question: "2. Mengapa artefak tersebut yang saya pilih?",
            content: "Saya memilih LK 2.D karena dokumen tersebut menunjukkan pentingnya mengenali kondisi peserta didik sebelum menyusun pembelajaran. Dalam tugas yang disusun bersama rekan mahasiswa, profil awal Alya tidak langsung ditetapkan hanya berdasarkan dugaan Autism Spectrum Disorder (ASD). Guru masih perlu mengumpulkan informasi mengenai kemampuan akademik, komunikasi, interaksi sosial, kemandirian, serta minat dan kekuatan yang dimiliki Alya.\n\nLK 3.D saya pilih karena memperlihatkan penerapan pemahaman tersebut ke dalam rancangan pembelajaran. Melalui kasus kelas inklusif tingkat SMP, saya mencoba menyusun kegiatan yang memberikan kesempatan belajar kepada murid reguler, murid autis, murid dengan hambatan penglihatan, dan murid tunadaksa. Penyesuaian tidak hanya dilakukan pada materi, tetapi juga pada kegiatan, media, lingkungan, dan asesmen.\n\nSementara itu, LK 4.A saya pilih karena membantu saya menganalisis cara guru menghadapi hambatan belajar dalam studi kasus Alya. LK 4.E melengkapi analisis tersebut melalui refleksi mengenai pentingnya pengelolaan kelas yang fleksibel, penilaian yang akomodatif, dan kerja sama dengan pihak terkait. Keempat artefak ini saling mendukung karena menggambarkan hubungan antara pemahaman kebutuhan, perencanaan, strategi pelaksanaan, dan tindak lanjut pembelajaran.",
          },
          {
            label: "Bagian yang Mendukung Refleksi",
            question: "3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?",
            content: "Pada LK 2.D, bagian profil awal Alya menjadi dasar refleksi saya mengenai pentingnya identifikasi dan asesmen. Dokumen tersebut mencatat bahwa data kemampuan akademik dan kekuatan Alya belum diketahui secara lengkap. Oleh karena itu, rekomendasi pembelajaran masih bersifat sementara dan perlu diperbarui setelah informasi yang lebih memadai diperoleh. Bagian ini menguatkan pemahaman saya bahwa guru tidak seharusnya menentukan kebutuhan belajar hanya berdasarkan dugaan disabilitas.\n\nPada LK 3.D, bagian rancangan pembelajaran akomodatif memperlihatkan penyesuaian yang lebih konkret. Dalam kegiatan mengenal diri dan menjalin pertemanan, murid dapat memperkenalkan diri melalui komunikasi lisan, kartu gambar, simbol, atau bentuk respons lain yang sesuai. Media pembelajaran juga dirancang dengan mempertimbangkan kebutuhan penglihatan, komunikasi, gerak, dan kenyamanan sensorik. Bagian asesmen menunjukkan bahwa perkembangan murid dapat diamati melalui keterlibatan, komunikasi, kerja sama, serta kemampuan mengikuti kegiatan, bukan hanya melalui satu bentuk penilaian.\n\nPada LK 4.A, strategi untuk studi kasus Alya mencakup pembagian instruksi menjadi langkah-langkah pendek, penggunaan jadwal visual, penyediaan sudut tenang, dan pendampingan teman sebaya. Bentuk evaluasinya juga disesuaikan melalui observasi harian, waktu tambahan, serta pilihan respons menggunakan gambar atau kartu. Bagian ini mendukung pemahaman saya bahwa hambatan belajar perlu ditanggapi melalui penyesuaian pembelajaran, bukan sekadar tuntutan agar peserta didik mengikuti cara yang sama.\n\nPada LK 4.E, bagian refleksi dan tindak lanjut menegaskan pentingnya lingkungan belajar yang aman, penilaian yang fleksibel, dan dukungan berkelanjutan. Rencana tindak lanjut mencakup penggunaan media visual, pengembangan rubrik observasi, komunikasi dengan orang tua, dan diskusi bersama Guru Pembimbing Khusus. Bagi saya, rangkaian tersebut menunjukkan bahwa pendidikan inklusif memerlukan evaluasi dan penyesuaian secara berkelanjutan. Strategi dalam dokumen masih berupa hasil analisis studi kasus dan rencana penerapan, bukan hasil pengujian langsung di kelas.",
          },
        ],
      },
      {
        fourCKey: "kesimpulan",
        title: "Kesimpulan Mata Kuliah",
        content: "Mata kuliah Pendidikan Inklusi membantu saya memahami bahwa pembelajaran yang adil tidak selalu berarti memberikan kegiatan dan perlakuan yang sama kepada seluruh peserta didik. Guru perlu mengenali kemampuan, hambatan, dan kebutuhan belajar sebelum menentukan bentuk pendampingan. Melalui studi kasus dan rancangan pembelajaran yang saya susun, saya belajar bahwa penyesuaian dapat dilakukan pada instruksi, media, lingkungan, aktivitas, maupun asesmen tanpa mengabaikan tujuan pembelajaran. Sebagai calon guru PPLG, pemahaman ini menjadi bekal untuk lebih memperhatikan kebutuhan peserta didik ketika merancang dan melaksanakan pembelajaran praktik. Saya juga menyadari bahwa kemampuan menerapkan pendidikan inklusif masih perlu terus dikembangkan melalui pengalaman, evaluasi, dan kerja sama dengan pihak yang memiliki kompetensi sesuai kebutuhan peserta didik.",
      },
    ],
    artifacts: [
      { label: "2.D — Menyusun Rekomendasi Mengenal Alya Sebelum Menyusun Pembelajaran", href: null },
      { label: "3.D — Menyusun Satu Rencana Pembelajaran untuk Semua Murid", href: null },
      { label: "4.A — Pelaksanaan Pembelajaran di Sekolah Inklusif", href: null },
      { label: "4.E — Refleksi dan Tindak Lanjut Pelaksanaan Pembelajaran di Sekolah Inklusif", href: null },
    ],
  },
];

/* SEO metadata */
export const metadata: Metadata = {
  title: "Refleksi Mata Kuliah Semester II",
  description:
    "Struktur refleksi pengalaman belajar dari 5 mata kuliah Semester II menggunakan model 4C: Connection, Challenge, Concept, dan Change.",
};

/* ============================================================================
   PAGE COMPONENT (Server Component)
   ============================================================================ */
export default function RefleksiMatkulSemester2Page() {
  return (
    <>
      {/* ================================================================
          HERO / PAGE HEADER
          ================================================================ */}
      <section className="px-6 pb-8 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
            LEMBAR KERJA 2 — REFLEKSI PENGALAMAN BELAJAR SEMESTER II
          </p>

          {/* Massive title */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Refleksi
            <br />
            Mata Kuliah Semester II
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Struktur refleksi pengalaman belajar dari 5 mata kuliah Semester II, disusun menggunakan model 4C:
            Connection, Challenge, Concept, dan Change.
            Refleksi Pembelajaran Sosial Emosional, Pembelajaran Mendalam dan Asesmen Lanjut, PPL Mandiri, serta Pendidikan Inklusi telah tersedia. Refleksi Projek Kepemimpinan dan dokumen resmi LK 2 belum tersedia.
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          4C MODEL EXPLAINER CARDS
          ================================================================ */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connection */}
          <div className="rounded-lg border border-sky-900/40 bg-sky-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-sky-900/30 font-mono text-xs font-bold text-sky-400">
                C
              </span>
              <h2 className="text-sm font-bold text-sky-300">Connection</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Menghubungkan pengalaman belajar dengan peran sebagai calon guru
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-lg border border-amber-900/40 bg-amber-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-amber-900/30 font-mono text-xs font-bold text-amber-400">
                C
              </span>
              <h2 className="text-sm font-bold text-amber-300">Challenge</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Mengidentifikasi tantangan yang menonjol selama perkuliahan
            </p>
          </div>

          {/* Concept */}
          <div className="rounded-lg border border-emerald-900/40 bg-emerald-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-900/30 font-mono text-xs font-bold text-emerald-400">
                C
              </span>
              <h2 className="text-sm font-bold text-emerald-300">Concept</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Memahami konsep dan teori utama yang dipelajari
            </p>
          </div>

          {/* Change */}
          <div className="rounded-lg border border-violet-900/40 bg-violet-950/10 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-violet-900/30 font-mono text-xs font-bold text-violet-400">
                C
              </span>
              <h2 className="text-sm font-bold text-violet-300">Change</h2>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Merencanakan perubahan nyata untuk pembelajaran ke depan
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-4xl bg-zinc-800/50" />

      {/* ================================================================
          INTERACTIVE CLIENT SECTIONS (Course Tabs)
          ================================================================ */}
      <RefleksiMatkulClient courses={courses} />
    </>
  );
}
