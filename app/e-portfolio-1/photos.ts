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
    src: "/e-portfolio-1/ilustrasi/pexels-rasyidahmad-5415447.jpg",
    alt: "Ilustrasi dua orang berbincang di sebuah ruangan kantor sekolah",
    activity: "Foto ilustrasi dari Pexels — bukan dokumentasi PPL",
    caption: "Suasana percakapan di kantor sekolah sebagai ilustrasi. Orang, lokasi, dan kegiatan pada foto ini bukan dokumentasi pengalaman PPL saya.",
    credit: {
      label: "Kredit: Rasyid Ahmad / Pexels — lihat sumber foto",
      href: "https://www.pexels.com/photo/school-office-in-indonesia-5415447/",
    },
  },
];
