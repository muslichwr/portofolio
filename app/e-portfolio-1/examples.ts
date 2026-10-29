// Contoh mandiri untuk menjelaskan format; bukan arsip perangkat Siklus 1.
export const references = {
  planning: "https://repositori.kemendikdasmen.go.id/33290/",
  moduleOrganization: "https://modul.smkbinarahayu.sch.id/pemrograman-web/semester-2",
  controllers: "https://laravel.com/docs/12.x/controllers",
  requests: "https://laravel.com/docs/12.x/requests",
  video: "https://laravel.com/learn",
  assessment: "https://pusatinformasi.rumahpendidikan.kemendikdasmen.go.id/hc/id/articles/52478161007257-Tipe-Latihan-Asesmen-Dokumen-Kelengkapan-Bahan-Ajar",
  photoLicense: "https://www.pexels.com/license/",
} as const;

// Isi hanya dengan URL rekaman asli yang sudah diperiksa akses dan identitasnya.
// URL referensi pihak ketiga tetap terpisah di references.video.
export const teachingRecording: { href: string | null } = { href: null };

export const codeExamples = [
  {
    title: "Route — routes/web.php",
    code: `use App\\Http\\Controllers\\ContohController;
use Illuminate\\Support\\Facades\\Route;

Route::get('/contoh', [ContohController::class, 'show'])
    ->name('contoh.show');`,
  },
  {
    title: "Controller dan Request — app/Http/Controllers/ContohController.php",
    code: `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class ContohController extends Controller
{
    public function show(Request $request)
    {
        $request->validate(['pesan' => 'nullable|string|max:80']);
        $pesan = (string) $request->input('pesan', '');

        return view('contoh', ['pesan' => $pesan]);
    }
}`,
  },
  {
    title: "Blade/form — resources/views/contoh.blade.php",
    code: `<form method="GET" action="{{ route('contoh.show') }}">
    <label for="pesan">Pesan contoh (maksimal 80 karakter)</label>
    <input id="pesan" name="pesan" maxlength="80">
    <button type="submit">Tampilkan pesan</button>
</form>
<p>Pesan: {{ $pesan }}</p>
@error('pesan')
    <p>{{ $message }}</p>
@enderror`,
  },
] as const;

export const sampleRubric = [
  {
    criterion: "Ketepatan Route",
    levels: [
      "Belum dapat menghubungkan alamat dengan Route yang sesuai.",
      "Menentukan alamat, tetapi method atau tujuan Route masih perlu diperbaiki dengan arahan.",
      "Menghubungkan alamat, method GET, dan method Controller dengan tepat.",
      "Memenuhi tingkat 3 serta menjelaskan dan menguji akibat perubahan alamat atau tujuan Route.",
    ],
  },
  {
    criterion: "Controller",
    levels: [
      "Belum dapat menunjukkan method yang menangani permintaan.",
      "Membuat method dengan bantuan, tetapi pengiriman data ke view belum konsisten.",
      "Method menerima Request dan mengirim data bernama yang sesuai ke view.",
      "Memenuhi tingkat 3 serta menjelaskan tanggung jawab Controller dan menelusuri kesalahan alur.",
    ],
  },
  {
    criterion: "Penerimaan data",
    levels: [
      "Belum dapat menghubungkan nama input form dengan data permintaan.",
      "Membaca input dengan arahan, tetapi belum memeriksa input kosong atau tidak sesuai.",
      "Membaca input yang tepat dan memeriksa batas format/panjang pada contoh.",
      "Memenuhi tingkat 3 serta menguji input kosong, valid, dan tidak valid lalu menjelaskan hasilnya.",
    ],
  },
  {
    criterion: "Penjelasan alur",
    levels: [
      "Belum dapat mengurutkan hubungan browser, Route, dan Controller.",
      "Menjelaskan sebagian alur, tetapi hubungan Request dan Blade masih perlu dipandu.",
      "Menjelaskan alur dari form/Request melalui Route dan Controller menuju Blade/browser.",
      "Memenuhi tingkat 3 serta memprediksi keluaran ketika satu bagian kode diubah.",
    ],
  },
  {
    criterion: "Ketekunan dan debugging",
    levels: [
      "Belum menunjukkan langkah pemeriksaan error meskipun dukungan sudah diberikan.",
      "Mencoba perbaikan setelah diarahkan, tetapi belum mencatat bagian yang diperiksa.",
      "Membaca pesan error, memeriksa satu dugaan, dan mencoba kembali secara terarah.",
      "Memenuhi tingkat 3 serta menjelaskan dugaan, hasil pemeriksaan, dan langkah perbaikan berikutnya.",
    ],
  },
] as const;
