# Academic Rubric & Evidence Mapping

This document maps all portfolio content against the evaluation rubrics of **UTS PPL Terbimbing (E-Portfolio 1)**, **Refleksi Akhir PPL Terbimbing (E-Portfolio 2)**, and **Lembar Kerja 2 (Refleksi Mata Kuliah 4C)**.

> [!IMPORTANT]
> Rubrics serve as an **evidence mapping tool**, not an authorization to invent unverified claims. Criteria without complete real-world evidence must remain marked as `PARTIAL` or `MISSING`.

---

## 1. CPMK 1 — Analisis Penyusunan & Implementasi Perangkat Pembelajaran (3 Siklus)

- **Requirement:** Comprehensive breakdown of instructional design and practical implementation across three sequential teaching cycles in vocational IT education.
- **Evidence:**
  - Siklus 1: OS Server & Web Server Dasar (Ubuntu Server, SSH Putty, Apache2).
  - Siklus 2: Full Stack Environment & DNS Lokal (PHP, MySQL, Composer, Laravel, Nginx, PHP-FPM, BIND9).
  - Siklus 3: Git Deployment & Monitoring Server — Final Project (Git, GitHub, PAT, `htop`, `netstat`, Apache Benchmark).
  - Primary document downloads: Modul Ajar Bab 1–2, Bab 3–5, and Bab 6–7.
- **Portfolio Location:** `/artefak` (`#artefak-cards`), `/` (`#artefak-preview`)
- **Relevant Files:**
  - `app/artefak/page.tsx`
  - `components/sections/ArtifactCard.tsx`
  - `components/sections/CpmkBanner.tsx`
  - `app/page.tsx`
- **Status:** `COMPLETE`
- **Gap:** None. All 3 cycles have contextual analysis, step-by-step topics, and official Modul Ajar download links.

---

## 2. CPMK 2 — Integrasi & Artikulasi Landasan Teori Pedagogis

- **Requirement:** Articulation of recognized pedagogical theories and learning principles underlying each instructional intervention, explaining *how* and *why* they were applied.
- **Evidence:**
  - *Siklus 1:* Zone of Proximal Development (Vygotsky, 1978), 5E Instructional Model in Assessment (Abell & Volkmann, 2006; secondary adopter of Bybee BSCS model), Differentiated Instruction (Tomlinson, 2000).
  - *Siklus 2:* Cognitive Load Theory (Sweller, 1988), Transfer of Learning (Perkins & Salomon, 1992), Mediated Learning Experience (Feuerstein).
  - *Siklus 3:* Metacognition (Flavell, 1979), Flow Theory (Csikszentmihalyi, 1990), Comprehensible Output Hypothesis (Swain, 1985; applied analogously to vocational technical communication).
- **Portfolio Location:** `/artefak` (per-cycle *Landasan Teori Pedagogis* section)
- **Relevant Files:**
  - `app/artefak/page.tsx` (lines 31–47, 82–98, 135–151)
  - `components/sections/ArtifactCard.tsx` (lines 126–156)
- **Status:** `COMPLETE`
- **Gap:** None in structure. Verification status of individual references (bibliographic and portfolio application) is maintained in `docs/ACADEMIC_GUIDELINES.md`.

---

## 3. CPMK 3 — Faktor Keberhasilan, Kendala, & Penyesuaian Kontekstual

- **Requirement:** Explicit evaluation of success factors (*Faktor Keberhasilan*), obstacles/friction (*Kendala & Hambatan*), and actionable modifications for alternative classroom conditions (*Penyesuaian Kontekstual*).
- **Evidence:**
  - *Faktor Keberhasilan:* 4 distinct evidence-based points per cycle (e.g., peer tutoring, named-checkzone checkpoints, live monitoring engagement, voluntary presentation model).
  - *Kendala & Hambatan:* 3–4 authentic classroom failure modes per cycle (e.g., ifupdown vs netplan conflicts, PHP package naming disparities across Ubuntu releases, terminal context-switching during GitHub SSH setup, unconfigured client DNS adapters).
  - *Penyesuaian Kontekstual:* 3–4 concrete adjustments per cycle (e.g., dual-path OS cheatsheets, session splitting for web stack installation, standardized pre-demo checklists, local offline package caching).
- **Portfolio Location:** `/artefak` (per-cycle breakdown cards)
- **Relevant Files:**
  - `app/artefak/page.tsx` (lines 48–63, 99–116, 152–169)
  - `components/sections/ArtifactCard.tsx`
  - `components/sections/CpmkBanner.tsx`
- **Status:** `COMPLETE`
- **Gap:** None. Follows realistic vocational laboratory constraints without artificial sanitization.

---

## 4. CPMK 4 — Transparansi Data Penilaian (Lampiran 7 & Lampiran 8)

- **Requirement:** Transparent reporting of official Guru Pamong (GP) assessment scores for both learning device preparation (Lampiran 7) and teaching practice execution (Lampiran 8), including score progression and raw score verification links.
- **Evidence:**
  - *Lampiran 7 Data:* Raw scores 67/80 (83.75), 67/80 (83.75), 68/80 (85.00) with 4-dimensional breakdown (Identitas, Materi, Skenario, Penilaian).
  - *Lampiran 8 Data:* Raw scores 67/80 (83.75), 71/80 (88.75), 69/80 (86.25) with 4-dimensional breakdown (Membuka, Inti, Menutup, Penunjang).
  - *Growth Visualization:* Linear score bars, delta indicators (+1.25 for L7, +2.50 for L8).
  - *Direct Downloads:* 6 separate download links pointing to scanned official Google Drive PDF evaluations.
- **Portfolio Location:** `/penilaian`
- **Relevant Files:**
  - `app/penilaian/page.tsx`
- **Status:** `COMPLETE`
- **Gap:** None. Visual progression, sub-dimension metrics, and verifiable source PDFs are fully wired.

---

## 5. CPMK 5 — Refleksi Diri, Evaluasi Praktik, & Rencana Tindak Lanjut (RTL)

- **Requirement:** Honest self-evaluation of professional teacher competencies, identification of personal strengths and weaknesses, formulation of target teacher model, and actionable follow-up plans (*Rencana Tindak Lanjut*).
- **Evidence:**
  - *Filosofi Mengajar:* "Logic First, Syntax Later" approach.
  - *Kekuatan (3 Poin):* Real-world Diskominfo experience, practice-first pedagogy, focus on logic over syntax.
  - *Kelemahan & Area Pengembangan (3 Poin):* Lab time management overruns during multi-student errors, overly technical vocabulary, partial curriculum pacing slippage.
  - *RTL (3 Poin):* Self-explanatory jobsheet redesign, structured peer-tutoring system, curriculum priority re-mapping.
- **Portfolio Location:** `/refleksi`
- **Relevant Files:**
  - `app/refleksi/page.tsx`
- **Status:** `COMPLETE`
- **Gap:** None. The bachelor degree naming conflict on `app/refleksi/page.tsx` (line 170) has been resolved to `S1 Pendidikan Teknologi Informasi`.

---

## 6. E-Portfolio 2 — Refleksi Akhir PPL Terbimbing

- **Requirement:** Comprehensive synthesis of entire PPL Terbimbing experience (orientation, assistance, 3 cycles), mentoring feedback from Guru Pamong, crystallized teacher values, and teaching philosophy for independent teaching practice (PPL Mandiri).
- **Evidence:**
  - *Timeline Perjalanan Belajar:* 6-stage narrative (Orientasi, Asistensi, Siklus 1, Siklus 2, Siklus 3, Penutup).
  - *Tantangan & Solusi:* 4 structured case studies (CLI adaptation, Internet bandwidth constraints, Server configuration debugging, Git workflow & server production SOP).
  - *Umpan Balik Guru Pamong:* Verbatim mentoring advice on inquiry-based debugging (*"jangan terlalu cepat memberi tahu letak salahnya..."*).
  - *Nilai Keguruan:* Reflektif, Fasilitatif, Adaptif, Berorientasi Dunia Kerja.
- **Portfolio Location:** `/refleksi-akhir`
- **Relevant Files:**
  - `app/refleksi-akhir/page.tsx`
- **Status:** `COMPLETE`
- **Gap:** None.

---

## 7. Lembar Kerja 2 (LK 2) — Refleksi Mata Kuliah 4C (6 Mata Kuliah)

- **Requirement:** Structured reflection across 6 PPG Semester 1–2 courses using the 4C framework (*Connection, Challenge, Concept, Change*), citing concrete academic artifacts.
- **Evidence:**
  - *6 Courses Covered:*
    1. Filosofi Pendidikan Indonesia
    2. Pemahaman tentang Peserta Didik dan Pembelajarannya
    3. Prinsip Pengajaran dan Asesmen I
    4. Praktik Pengalaman Lapangan I
    5. Kebugaran Jasmani dan Manajemen Kebugaran Personal (Pilihan)
    6. Pembelajaran Berdiferensiasi (Pilihan)
  - *4C Dimensions per Course:* Full narrative with artifact justifications and download anchors.
  - *Student Metadata:* Name, NIM, and Program Keahlian.
- **Portfolio Location:** `/refleksi-matkul`
- **Relevant Files:**
  - `app/refleksi-matkul/page.tsx`
  - `components/sections/RefleksiMatkulClient.tsx`
- **Status:** `COMPLETE`
- **Gap:** None.
