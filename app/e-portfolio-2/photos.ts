import type { ActivityPhoto } from "@/components/sections/NonTeachingPhotoCarousel";

// Foto mengikuti folder pemilik; keterangan singkat sesuai isi foto.
export const teachingPhotos: readonly ActivityPhoto[] = [
  {
    src: "/e-portfolio-2/kegiatan-mengajar/pembelajaran di lab.png",
    activity: "Pembelajaran di Lab",
    caption: "Peserta didik mengikuti pembelajaran menggunakan komputer di laboratorium.",
    alt: "Peserta didik menggunakan komputer di laboratorium dengan contoh pengerjaan ditampilkan melalui proyektor",
  },
  {
    src: "/e-portfolio-2/kegiatan-mengajar/pembelajaran di lab 2.png",
    activity: "Pendampingan di Lab",
    caption: "Pendampingan peserta didik saat mengerjakan latihan di komputer.",
    alt: "Pendamping berdiri di samping peserta didik yang sedang bekerja menggunakan komputer",
  },
  {
    src: "/e-portfolio-2/kegiatan-mengajar/pendampingan pembelajaran kelas dengan guru pamong.png",
    activity: "Pendampingan Bersama Guru Pamong",
    caption: "Pendampingan pembelajaran di kelas bersama guru pamong.",
    alt: "Pendampingan peserta didik di ruang kelas dengan guru pamong dan pendamping berdiri di antara meja belajar",
  },
];

export const nonTeachingPhotos: readonly ActivityPhoto[] = [
  {
    src: "/e-portfolio-2/kegiatan-nonmengajar/pengajian.jpeg",
    activity: "Pengajian",
    caption: "Kegiatan pengajian bersama di lingkungan sekolah.",
    alt: "Peserta kegiatan duduk bersama di lapangan beratap dengan beberapa pendamping di tepi lapangan",
  },
  {
    src: "/e-portfolio-2/kegiatan-nonmengajar/piket pagi.png",
    activity: "Piket Pagi",
    caption: "Menyambut kedatangan peserta didik saat piket pagi.",
    alt: "Peserta didik menyalami pendamping di area masuk sekolah pada pagi hari",
  },
  {
    src: "/e-portfolio-2/kegiatan-nonmengajar/ruangbk.jpeg",
    activity: "Presentasi Ruang BK",
    caption: "Foto bersama di depan layar presentasi Ruang BK.",
    alt: "Foto kelompok di dalam ruangan dengan layar presentasi bertuliskan Ruang BK",
  },
];
