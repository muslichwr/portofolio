# Content & Writing Guidelines

This guide defines the editorial voice, tone, narrative structure, and quality standards for all written content within the portfolio.

---

## 1. Voice & Tone

### Authentic First-Person Voice
- **Pronoun:** Consistently use first-person singular (**"saya"**) for reflective, narrative, and analytical sections. Never use passive third-person ("penulis") or detached impersonal framing when describing personal teaching decisions.
- **Tone:** Professional, restrained, intellectually humble, reflective, and grounded in vocational engineering reality.
- **Avoid Hype & Clichés:** Eliminate hyperbolic assertions (e.g., *"guru terbaik"*, *"metode revolusioner"*, *"pembelajaran sempurna"*). Let concrete classroom data and student outcomes speak for themselves.

### Balance Between Engineering & Pedagogy
- The author holds a dual identity: a software developer and a vocational educator.
- Technical terminology (e.g., *Nginx Server Block, BIND9 Forward Zone, Git commit history, systemd socket*) should be paired with pedagogical intent (e.g., *scaffolding, cognitive load management, formative error triage, authentic assessment*).

---

## 2. Terminology & Nomenclature Conventions

| Concept / Entity | Canonical Terminology | Prohibited / Outdated Variants |
|---|---|---|
| Program Keahlian (PPG Level) | **Pengembangan Perangkat Lunak dan Gim (PPLG)** | *Jurusan RPL* (in formal program context) |
| Konsentrasi Keahlian (Classroom) | **Rekayasa Perangkat Lunak (RPL)** | *PPLG* (when referring to the specific class group) |
| Teaching Practicum School | **SMK Negeri 1 Surabaya** | *SMKN 1 Surabaya* (in formal body prose) |
| Ongoing Teaching Workplace | **SMKS Tunas Bangsa Pare** | *SMK Tunas Bangsa* |
| Prior Internship Institution | **Dinas Komunikasi dan Informatika (Diskominfo)** | *Kominfo* (in formal portfolio text) |
| Practicum Mentors | **Guru Pamong (GP)** & **Dosen Pembimbing Lapangan (DPL)** | *Guru Pengampu*, *Dosen Wali* |
| Educational Unit / Design | **Modul Ajar / RPP** | *Silabus* (when referring to lesson plans) |
| Assessment Instruments | **Lampiran 7 (Perangkat)** & **Lampiran 8 (Praktik)** | *Nilai PPL*, *Form Penilaian* |

---

## 3. Heading & Typography Conventions

1. **Title Case & Hierarchical Order:**
   - Single `<h1>` per page (Massive typography, `tracking-tighter`, `font-extrabold`).
   - `<h2>` for primary content sections (e.g., *Faktor Keberhasilan*, *Landasan Teori Pedagogis*).
   - `<h3>` for individual cycle or card sub-headings.
   - `<h4>` for granular items or meta-labels.
   - Never skip heading levels (e.g., `<h1>` directly to `<h3>`).
2. **Kicker / Eyebrow Text:**
   - Use small, uppercase, monospaced kickers (`font-mono`, `text-xs`, `uppercase`, `tracking-[0.2em]`, `text-zinc-600`) above section headers to establish context (e.g., `ARTEFAK PEMBELAJARAN`, `TRANSPARANSI EVALUASI`, `LEMBAR KERJA 2`).

---

## 4. Reflective Narrative Conceptual Flow

When analyzing a teaching episode, cycle, or pedagogical experiment, follow this natural cognitive progression:

$$\text{Context} \longrightarrow \text{Problem} \longrightarrow \text{Evidence} \longrightarrow \text{Analysis} \longrightarrow \text{Adjustment} \longrightarrow \text{Result} \longrightarrow \text{Remaining Limitation}$$

### Progression Elements:
1. **Context:** What was the vocational topic, target class environment, and technical setup?
2. **Problem:** What unexpected error, misunderstanding, or classroom friction occurred?
3. **Evidence:** What concrete observations, error logs, command outputs, or student responses indicated this issue?
4. **Analysis:** Why did this happen? (Apply pedagogical principles like Cognitive Load, ZPD, or packaging differences).
5. **Adjustment:** What immediate or subsequent pedagogical intervention was introduced?
6. **Result:** How did students respond to the adjustment?
7. **Remaining Limitation:** What aspects could still be improved in future iterations?

> [!NOTE]
> This flow is a **conceptual thinking tool**, not a rigid mechanical template. Paragraphs should read naturally as coherent reflective prose.

---

## 5. Distinction Between Observation and Interpretation

To maintain academic rigor and prevent unsubstantiated causal assertions:

- **Observation (Fakta Empiris):** What actually occurred in the classroom that can be objectively described or measured.
  - *Example:* "Ketika 36 siswa mengunduh package Laravel secara serentak, koneksi internet lab mengalami penurunan kecepatan drastis dan 14 siswa mendapati terminalnya timeout."
- **Interpretation (Analisis Konseptual):** The pedagogical or technical meaning attributed to that observation.
  - *Example:* "Hal ini menunjukkan bahwa rancangan pembelajaran berbasis PjBL memerlukan manajemen ketergantungan jaringan eksternal, seperti penyediaan repository cache lokal sebelum praktikum dimulai."

**Rule:** Never present an interpretation as an empirical fact, and never make an interpretive claim without citing the underlying observation.

---

## 6. Writing About Artifacts & Teaching Practice

### Artifact Description Standards:
- State the vocational relevance clearly (e.g., why local DNS resolution via BIND9 matters for web developers).
- Avoid generic descriptions like *"siswa belajar konfigurasi DNS"*. Specify the exact technical scope (*"konfigurasi Forward Zone, Reverse Zone, serta pengujian menggunakan nslookup dan named-checkzone"*).
- Connect tools to industry workflows (e.g., Git pull deployment vs unsafe direct file editing in production).

### Embracing Real Friction & Imperfection:
- Authentic reflection requires acknowledging mistakes, planning misjudgments, and unexpected variables.
- Preserve descriptions of:
  - Time allocation overruns.
  - Student confusion caused by CLI syntax vs GUI habits.
  - Operating system version disparities (Ubuntu 20.04 ifupdown vs 22.04 netplan).
  - Terminal context-switching fatigue.

---

## 7. Consistency Guardrails

1. **Synchronized Cycle Topics:** If a cycle is described on the homepage preview (`/`), it must match word-for-word in topic and scope on `/artefak`, `/penilaian`, and `/refleksi-akhir`.
2. **Synchronized Scores:** Any numeric score reported in text or metrics must exactly equal the official Lampiran 7 / 8 values documented in `docs/CONTENT_SOURCE.md`.
3. **Download Links:** Document links must point to the verified Google Drive files with identical labels across pages.
