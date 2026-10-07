# Portfolio Project Rules

Panduan operasional lengkap: [AGENTS.md](../../AGENTS.md).

- Baca README → PRD → SRS → DESIGN → file ini → implementation plan yang relevan sebelum perubahan.
- Inspect kode sebelum edit; sebutkan requirement ID dan acceptance terkait.
- Status **Proposed** dan roadmap tidak memberikan izin implementasi.
- Gunakan perubahan terkecil yang koheren; hindari refactor, redesign, dan pergantian dependency di luar task.
- Pertahankan visual consistency dark/zinc, responsive behavior, dan konten PPG kecuali instruksi resmi meminta perubahan.
- Jangan invent konten, data, evidence, nilai, hasil siswa, kutipan, referensi, atau DOI. Tandai kebutuhan verifikasi.
- Pertahankan dinamika nilai yang nyata; jangan memaksakan peningkatan linear.
- Accessibility wajib diperiksa untuk perubahan UI: heading, keyboard/focus, labels, contrast, dan motion.
- Gunakan komponen/Base UI dan dependency aktual. Baca dokumentasi Next.js lokal sebelum menulis kode framework.
- Jangan mengubah salinan `.kilo/worktrees/` ketika mengerjakan repository utama.
- Verify sesuai tooling aktual dan review diff sebelum menyatakan selesai; laporkan warning dan pemeriksaan yang belum dilakukan.
- Perbarui dokumentasi hanya ketika underlying truth berubah. Jangan commit, push, atau deploy tanpa instruksi eksplisit pemilik.
