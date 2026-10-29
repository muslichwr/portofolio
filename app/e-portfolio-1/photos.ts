import type { ActivityPhoto } from "@/components/sections/NonTeachingPhotoCarousel";

// Contoh sementara. Untuk dokumentasi asli, ganti array ini dengan path lokal
// /e-portfolio-1/kegiatan-nonmengajar/ serta caption/credit yang terverifikasi.
// Jangan menghapus label ilustrasi sebelum foto benar-benar diganti.
export const nonTeachingPhotos: readonly ActivityPhoto[] = [
  {
    src: "/e-portfolio-1/ilustrasi/pexels-katerina-holmes-5905441.jpg",
    alt: "Ilustrasi ruang kelas dengan papan tulis dan meja berisi alat tulis",
    activity: "Foto ilustrasi dari Pexels — bukan dokumentasi PPL",
    caption: "Ruang kelas dan alat tulis sebagai contoh tampilan galeri. Foto ini tidak membuktikan lokasi, peserta, atau kegiatan nonmengajar saya.",
    credit: {
      label: "Kredit: Katerina Holmes / Pexels — lihat sumber foto",
      href: "https://www.pexels.com/photo/classroom-with-whiteboard-and-desk-with-stationery-5905441/",
    },
  },
  {
    src: "/e-portfolio-1/ilustrasi/pexels-didsss-2675050.jpg",
    alt: "Ilustrasi ruang kelas kosong dengan meja, kursi, dan papan tulis hijau",
    activity: "Foto ilustrasi dari Pexels — bukan dokumentasi PPL",
    caption: "Ruang kelas kosong sebagai contoh foto berorientasi potret. Foto ini tidak memiliki hubungan dokumenter dengan pengalaman PPL saya.",
    credit: {
      label: "Kredit: Diana / Pexels — lihat sumber foto",
      href: "https://www.pexels.com/photo/photo-of-empty-class-room-2675050/",
    },
  },
];
