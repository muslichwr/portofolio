import type { ActivityPhoto } from "@/components/sections/NonTeachingPhotoCarousel";

// Nama dan pengelompokan mengikuti file/folder yang ditunjuk pemilik.
// Kedua folder saat ini berisi pasangan foto yang sama. Caption/alt hanya
// mendeskripsikan yang terlihat, tanpa menetapkan nama acara atau tanggal.
const photoFiles = [
  {
    fileName: "WhatsApp Image 2026-10-30 at 20.58.37.jpeg",
    caption: "Peserta kegiatan duduk bersama di lapangan beratap.",
    alt: "Sejumlah peserta duduk berkelompok di lapangan beratap, dengan beberapa orang berdiri di tepi lapangan",
  },
  {
    fileName: "WhatsApp Image 2026-10-30 at 20.58.59.jpeg",
    caption: "Foto kelompok di depan layar bertuliskan Ruang BK.",
    alt: "Sekelompok orang berdiri berjajar di depan layar bertuliskan Ruang BK dalam sebuah ruangan",
  },
] as const;

function photosFor(folder: "kegiatan-mengajar" | "kegiatan-nonmengajar"): readonly ActivityPhoto[] {
  return photoFiles.map((photo) => ({
    src: `/e-portfolio-2/${folder}/${photo.fileName}`,
    activity: photo.fileName,
    caption: photo.caption,
    alt: photo.alt,
  }));
}

export const teachingPhotos = photosFor("kegiatan-mengajar");
export const nonTeachingPhotos = photosFor("kegiatan-nonmengajar");
