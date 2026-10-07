# Operational Guide untuk Coding Agent

## Before Any Change

WAJIB baca urutan berikut sebelum mengubah repository:

```text
README.md
→ PRD.md
→ SRS.md
→ DESIGN.md
→ .kilo/rules/project.md
→ relevant implementation plan (docs/plans/implementation.md)
```

Setelah membaca:

1. Identifikasi requirement ID dan status yang terkait dengan task.
2. Inspect implementasi aktual, sumber konten, callers, dan dependencies terkait.
3. Pilih perubahan terkecil yang koheren untuk memenuhi requirement.
4. Nyatakan file yang kemungkinan berubah dan risiko terhadap route/konten lain.
5. Implementasikan hanya task yang diizinkan pemilik.
6. Verify dengan tooling yang tersedia dan skenario acceptance yang relevan.
7. Review diff; pisahkan perubahan sendiri dari perubahan awal pengguna.

Requirement **Proposed** dan phase roadmap bukan izin menjalankannya. Pada task dokumentasi, jangan mengubah aplikasi untuk membuat baseline terlihat sehat.

<!-- BEGIN:nextjs-agent-rules -->
## Panduan Framework Lokal

Versi Next.js ini dapat berbeda dari API/convention yang diingat agent. Sebelum menulis kode Next.js, baca panduan terkait di `node_modules/next/dist/docs/` dan perhatikan deprecation notices. Gunakan versi manifest/lockfile serta implementasi lokal sebagai dasar; jangan menerapkan pola versi lama secara otomatis.
<!-- END:nextjs-agent-rules -->

## Development Workflow

```text
READ → PLAN TASK → IMPLEMENT → VERIFY → REVIEW DIFF → COMMIT
```

**COMMIT hanya dilakukan bila project owner secara eksplisit meminta.** Tanpa instruksi commit, berhenti setelah review diff dan laporan. Jangan stage, commit, push, merge, atau deploy otomatis.

## Source of Truth Priority

Jika terdapat konflik requirement/arah produk:

```text
1. Instruksi terbaru project owner
2. SRS.md
3. PRD.md
4. DESIGN.md
5. docs/plans/implementation.md
6. existing implementation
```

Hierarchy ini tidak mengubah proposal menjadi requirement yang disetujui. Untuk **CURRENT STATE**, periksa kode aktual; laporkan jika dokumen baseline sudah tidak cocok. Keberadaan narasi atau angka di kode bukan bukti primer keasliannya.

Jika ada konflik material, **jangan menebak**: laporkan sumber yang bertentangan, requirement terkait, dampak, dan keputusan yang diperlukan. Lanjutkan pekerjaan independen yang tidak bergantung pada konflik. Jangan memperbaiki konflik faktual dengan membuat nilai, pengalaman, kutipan, atau sumber baru.

## Scope Control

- Jangan redesign otomatis, refactor tidak terkait, mengganti library tanpa alasan, atau melakukan perubahan besar di luar task.
- Pertahankan behavior, visual consistency, route, nilai, dan konten akademik kecuali instruksi/requirement yang disetujui meminta perubahan.
- Default mengikuti server page yang sudah ada. Tambahkan client boundary hanya bila diperlukan untuk state/browser API; jangan mengklaim halaman bebas hydration hanya karena page tidak memiliki `use client`.
- Gunakan dependency yang sudah terpasang dan `cn()` untuk class conditional. Inspect primitive Base UI lokal sebelum memakai contoh Radix atau versi shadcn lain.
- Jangan meninggalkan temporary debug logging atau unused imports setelah task selesai. Warning baseline ditangani hanya jika masuk scope, bukan dijadikan alasan cleanup tidak terkait.
- Konten saat ini tersebar dalam TSX. Cari seluruh kemunculan fakta/siklus/tautan sebelum mengubah satu halaman; konsistensi makna lebih penting daripada memaksa judul identik kata demi kata.
- Jangan menghapus file pengguna, mengembalikan dokumen lama yang sedang dihapus, atau mengubah `.kilo/worktrees/` sebagai bagian dari task utama.
- Jangan mengarang evidence, hasil siswa, skor, identitas sekolah/tempat kerja, tanggal, IPK, kutipan, DOI, atau referensi. Gunakan penanda kebutuhan verifikasi di dokumentasi bila sumber belum tersedia.
- Bedakan verifikasi bibliografis dari kesesuaian penerapan teori. Hindari klaim kausal tanpa evidence; jangan menganggap penerapan analogi sebagai reproduksi penelitian.
- Accessibility dan responsive behavior adalah bagian acceptance perubahan UI; jangan menyatakan lolos tanpa pemeriksaan relevan.

## Documentation Discipline

Perbarui dokumen **hanya ketika underlying truth berubah**: requirement resmi, route/navigasi, data, komponen, tokens, command, keputusan, atau status pekerjaan.

- Catat CURRENT STATE, ISSUE, DECISION, PROPOSED secara terpisah.
- ID requirement tidak boleh dipakai ulang untuk makna berbeda. Jika diganti, catat pengganti dan alasan.
- Perubahan route resmi memerlukan update peta route SRS, IA PRD, anatomy DESIGN, dan roadmap yang terdampak.
- Perubahan fakta memerlukan pemeriksaan evidence dan semua lokasi render; jangan memperbarui angka hanya di dokumentasi.
- Requirement Proposed hanya berubah setelah arahnya disetujui; status Implemented membutuhkan bukti implementasi, bukan sekadar task selesai ditulis.
- Roadmap bukan changelog. Catat status phase hanya ketika exit criteria terpenuhi; update tanggal/baseline hanya ketika audit baru benar-benar dilakukan.
- Jangan memperbarui dokumen agar tampak aktif atau menyalin ulang isi SRS ke semua file.

## Verification

Tooling aktual dari `package.json`:

```bash
npx tsc --noEmit --incremental false
npm run lint
npm run build
```

Pemeriksaan tambahan sesuai task: `npm run dev` atau `npm run start` setelah build; audit route, keyboard, responsive, external resource, dan metadata yang terkait. Script `test`/`typecheck` serta test runner belum tersedia; jangan mengarang command dan jangan memasang tooling baru untuk tugas dokumentasi.

- Baseline lint: 16 warning, delapan di source utama dan delapan duplikat worktree `.kilo`. `exit 0` bukan berarti tanpa warning.
- Baseline TypeScript/build berhasil pada audit 7 Oktober 2026. Jangan mengklaim hasil lama sebagai hasil command yang baru dijalankan.
- Untuk perubahan dokumentasi saja, periksa file, tautan lokal, requirement fields, ID roadmap, fakta inventory, dan diff. Hasil pemeriksaan aplikasi dari baseline masih relevan bila source/config tidak berubah; tidak perlu mengulang build tanpa alasan.
- Jika pemeriksaan tidak dapat dijalankan, laporkan command/skenario, keterbatasan, dan dampaknya. Browser timeout bukan bukti bahwa website rusak.
- Review `git status --short`, `git diff --check`, `git diff`, serta file baru yang belum tracked. Jangan memasukkan perubahan awal pengguna ke hasil kerja sendiri.

## Git dan Definition of Done

Satu perubahan koheren per commit bila diminta. Review diff sebelum commit; jangan mencampur cleanup, dependency update, atau perubahan worktree lain. `.agents/rules/portoflio.md` masih tracked meski direktorinya tercantum pada `.gitignore`; pertahankan namanya dan tautan valid.

Task selesai bila acceptance terkait terpenuhi, verification dilaporkan secara jujur, dokumentasi yang underlying truth-nya berubah telah diperbarui, dan diff hanya memuat scope yang diizinkan. Laporan akhir menjelaskan perubahan, tujuan, hasil pemeriksaan, serta masalah/ketidakpastian yang masih ada.
