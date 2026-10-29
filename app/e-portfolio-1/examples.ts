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
    criterion: "Pemahaman",
    levels: [
      "Peserta didik belum dapat menyebutkan tujuan kegiatan meskipun sudah diberi pertanyaan penuntun.",
      "Peserta didik menyebutkan tujuan, tetapi masih memerlukan arahan untuk menghubungkannya dengan langkah kerja.",
      "Peserta didik menjelaskan tujuan dan hubungan langkah kerja dengan hasil yang diharapkan.",
      "Peserta didik menjelaskan hubungan tersebut dan memperkirakan akibat perubahan sederhana pada langkah kerja.",
    ],
  },
  {
    criterion: "Keterampilan praktik",
    levels: [
      "Peserta didik masih memerlukan pendampingan pada setiap langkah praktik.",
      "Peserta didik mengikuti sebagian langkah, tetapi memerlukan bantuan berulang untuk melanjutkan pekerjaan.",
      "Peserta didik menyelesaikan langkah sesuai panduan dan memeriksa hasil pekerjaannya.",
      "Peserta didik menyelesaikan langkah secara mandiri serta mencoba perbaikan ketika hasil belum sesuai.",
    ],
  },
  {
    criterion: "Kemampuan menjelaskan hasil",
    levels: [
      "Peserta didik belum dapat menceritakan langkah dan hasil pekerjaannya meskipun sudah diberi pertanyaan penuntun.",
      "Peserta didik menyebutkan hasil, tetapi penjelasan langkah atau kesulitannya masih perlu dipandu.",
      "Peserta didik menjelaskan langkah, hasil, dan kesulitan yang ditemui secara runtut.",
      "Peserta didik membandingkan hasil dengan tujuan serta mengusulkan perbaikan yang sesuai.",
    ],
  },
] as const;
