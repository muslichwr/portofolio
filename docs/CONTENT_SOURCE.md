# Content Source & Canonical Facts

This document serves as the **canonical source of truth** for all factual information within the portfolio repository. Every factual claim must reference this document. Factual discrepancies across pages are explicitly cataloged with their exact locations and verification status.

---

## 1. Identity

### Full Name
- **Canonical Value:** `Muslich Wahyu Romadhon`
- **Found In:**
  - `app/layout.tsx` (lines 22, 36, 38)
  - `app/page.tsx` (lines 170, 179)
  - `app/about/page.tsx` (lines 25, 186, 221, 231)
  - `components/layout/Footer.tsx` (lines 57, 86)
  - `components/sections/RefleksiMatkulClient.tsx` (line 29)
  - `components/layout/Footer.tsx` (line 112: `"Muslich Wahyu Ramadhan"`)
- **Status:** `INCONSISTENT`
- **Notes:** Line 112 of `components/layout/Footer.tsx` contains the typo `"Muslich Wahyu Ramadhan"`. All other repository references consistently use `"Muslich Wahyu Romadhon"`.

### Bachelor Education (Degree & Major)
- **Canonical Value:** `S1 Pendidikan Teknologi Informasi`
- **Found In:**
  - `app/about/page.tsx` (line 270: `"S1 Pendidikan Teknologi Informasi"`)
  - `components/sections/WorkStudiesToggle.tsx` (line 82: `"S1 Pendidikan Teknologi Informasi"`)
  - `app/refleksi/page.tsx` (line 170: `"S1 Teknik Informatika"`)
- **Status:** `INCONSISTENT`
- **Notes:** `app/refleksi/page.tsx` (line 170) mistakenly states `"S1 Teknik Informatika"`. The canonical degree is `"S1 Pendidikan Teknologi Informasi"`.

### Higher Education Institution
- **Canonical Value:** `Universitas Negeri Surabaya (UNESA)`
- **Found In:**
  - `app/about/page.tsx` (line 270)
  - `components/sections/WorkStudiesToggle.tsx` (lines 72, 81)
- **Status:** `CONSISTENT`
- **Notes:** Consistent across all educational narrative sections.

### Grade Point Average (GPA / IPK)
- **Canonical Value:** `3.78`
- **Found In:**
  - `components/sections/WorkStudiesToggle.tsx` (line 83)
  - `.agents/rules/portoflio.md` (legacy rule, line 9)
- **Status:** `REVIEW_REQUIRED`
- **Notes:** Originates from legacy prompt rules and is displayed on the homepage studies toggle. Must be verified against formal academic transcripts if challenged.

### Geographic Origin & Hometown
- **Canonical Value:** `Desa Wonosari, Kediri, Jawa Timur`
- **Found In:**
  - `app/about/page.tsx` (lines 252, 262)
- **Status:** `CONSISTENT`
- **Notes:** Documented in the student origin narrative.

### Student Administrative Identifier (NIM / No. Peserta PPG)
- **Canonical Value:** `2500103916524004`
- **Found In:**
  - `components/sections/RefleksiMatkulClient.tsx` (line 30)
- **Status:** `CONSISTENT`
- **Notes:** Administrative identifier strictly used within the Lembar Kerja 2 (LK 2) academic metadata header. Kept separate from public professional identity cards.

---

## 2. Professional & Academic Background

### Vocational Teacher Intern (PPL Terbimbing)
- **Canonical Value:** `SMK Negeri 1 Surabaya` (Tahun 2025/2026 — Sekarang)
- **Role / Assignment:** Praktik Pengalaman Lapangan (PPL) Terbimbing, Kelas XI Rekayasa Perangkat Lunak (RPL).
- **Found In:**
  - `components/sections/WorkStudiesToggle.tsx` (line 31)
  - `app/about/page.tsx` (line 132)
  - `app/refleksi-akhir/page.tsx` (lines 39, 56, 250)
- **Status:** `INCONSISTENT` (Topic description conflict)
- **Notes:** `WorkStudiesToggle.tsx` line 33 mentions `"konfigurasi DHCP Server, dan Web Deployment berbasis Nginx"`, whereas the documented 3 PPL cycles actually cover Linux Server OS, SSH, Apache2, Nginx, PHP-FPM, Laravel, BIND9 DNS, and Git Deployment. No DHCP Server content exists in the 3 PPL cycles.

### Vocational Teacher & Lab Administrator
- **Canonical Value:** `SMKS Tunas Bangsa Pare` (Tahun 2025 — Sekarang)
- **Role / Assignment:** Guru Kejuruan Konsentrasi Keahlian TKJ, Mata Pelajaran Administrasi Sistem Jaringan (ASJ), dan Pengelola Laboratorium Jaringan.
- **Found In:**
  - `components/sections/WorkStudiesToggle.tsx` (lines 38–45)
  - `app/layout.tsx` (keywords, line 33)
- **Status:** `CONSISTENT`
- **Notes:** Represents ongoing professional employment distinct from the PPG PPL practicum.

### Vocational Teacher Intern (Prior Practicum)
- **Canonical Value:** `SMK Negeri 1 Kediri` (Tahun 2023)
- **Role / Assignment:** Perangkat Pembelajaran & Fasilitator Teori/Praktik Administrasi Sistem Jaringan (ASJ).
- **Found In:**
  - `components/sections/WorkStudiesToggle.tsx` (lines 46–54)
- **Status:** `CONSISTENT`
- **Notes:** Prior undergraduate teaching internship.

### Fullstack Developer Intern
- **Canonical Value:** `Dinas Komunikasi dan Informatika (Diskominfo)` (Tahun 2023)
- **Role / Responsibilities:** Pengembangan & pemeliharaan aplikasi web frontend & backend, bug fixing, optimasi basis data, deployment sistem.
- **Found In:**
  - `components/sections/WorkStudiesToggle.tsx` (lines 55–63)
  - `app/refleksi/page.tsx` (line 81: `"pengalaman magang di Diskominfo"`)
  - `.agents/rules/portoflio.md` (legacy rule: `"Diskominfo Kediri"`)
- **Status:** `REVIEW_REQUIRED`
- **Notes:** Implementation mentions `"Dinas Komunikasi dan Informatika (Diskominfo)"` without specifying municipal ("Kota Kediri") or regency ("Kabupaten Kediri") jurisdiction.

### Secondary School Alma Mater (SMK)
- **Canonical Value:** `SMK Negeri 2 Kota Kediri (Teknik Komputer dan Jaringan / TKJ)`
- **Found In:**
  - `app/about/page.tsx` (line 269)
- **Status:** `CONSISTENT`
- **Notes:** Found in the student narrative background.

---

## 3. Skills & Competencies

### Technical Stacks (Software Development & System Administration)
- **Operating Systems & Infrastructure:** Linux / Ubuntu Server, VirtualBox, SSH, systemd.
- **Web Servers & DNS:** Apache2, Nginx, PHP-FPM, BIND9 (Forward & Reverse Zones).
- **Programming & Frameworks:** PHP, Laravel, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS.
- **Databases & Tooling:** MySQL, Composer, Git, GitHub (Personal Access Tokens / SSH), htop, netstat, Apache Benchmark (ab).
- **Status:** `CONSISTENT`

### Pedagogical Competencies Built
- **5 Core Competencies (Documented on `/about`):**
  1. *Pedagogical Content Knowledge (PCK):* Contextualized vocational instructional strategies.
  2. *Diferensiasi Pembelajaran:* Multi-tier scaffolding based on readiness and technical baseline.
  3. *Asesmen Autentik & Formatif:* Rubric-based evaluation and actionable feedback.
  4. *Komunikasi Teknis:* Structured student technical presentation and verbal architectural justification.
  5. *Refleksi Iteratif:* Evidence-based instructional revision cycle-over-cycle.
- **Status:** `CONSISTENT`

---

## 4. Personal Philosophy & Visi Pendidik

### Core Teaching Philosophy
- **Canonical Value:** `"Logic First, Syntax Later"`
- **Found In:**
  - `app/refleksi/page.tsx` (lines 91, 175)
  - `app/refleksi-akhir/page.tsx` (line 495)
- **Status:** `CONSISTENT`
- **Meaning:** Prioritizes systemic understanding, architectural awareness, and troubleshooting logic before memorizing command syntax.

### Growth-Mindset Quote (Legacy Rule Claim)
- **Canonical Value:** `"Aku belum Berhasil, Bukan tidak Berhasil"`
- **Found In:**
  - `.agents/rules/portoflio.md` (legacy rule, line 47)
- **Implementation Status:** `NOT_PRESENT`
- **Verification Status:** `REVIEW_REQUIRED`
- **Notes:** This phrase was prescribed in legacy rules but does not exist in any current page or component. It should not be added unless explicitly requested.

### Role Model Guru
- **Canonical Value:** `Parker J. Palmer` (*The Courage to Teach*)
- **Core Principle:** *"Good teaching cannot be reduced to technique — it comes from the identity and integrity of the teacher."*
- **Found In:**
  - `app/about/page.tsx` (lines 433–447)
- **Status:** `CONSISTENT`

### 4 Karakter Model Guru yang Dituju
- **Guru Reflektif:** Learns iteratively from classroom data and real dynamic friction.
- **Guru Fasilitatif:** Encourages inquiry and problem-solving before handing out solutions.
- **Guru Inovatif:** Integrates real-world industry tools and DevOps pipelines into vocational practice.
- **Guru Diferensiatif:** Implements tiered scaffolding based on individual learner profiles.
- **Found In:**
  - `app/page.tsx` (lines 70–95)
  - `app/about/page.tsx` (lines 37–62)
  - `app/refleksi-akhir/page.tsx` (lines 157–181)
- **Status:** `CONSISTENT`

---

## 5. PPL Context & Hierarchy

### Educational Classification
- **Program Keahlian (Bidang Studi PPG):** `Pengembangan Perangkat Lunak dan Gim (PPLG)`
- **Konsentrasi Keahlian (Kelas Praktik):** `Rekayasa Perangkat Lunak (RPL)`
- **Target Classroom:** `Kelas XI RPL, SMK Negeri 1 Surabaya`
- **Found In:**
  - `app/about/page.tsx` (lines 132, 246)
  - `app/refleksi-akhir/page.tsx` (line 56)
- **Status:** `CONSISTENT`
- **Notes:** Under the Kurikulum Merdeka structure, PPLG is the umbrella Program Keahlian and RPL is the specific Konsentrasi Keahlian. These terms coexist consistently.

---

## 6. PPL Cycles (Siklus 1, 2, 3)

### Siklus 1 — OS Server & Web Server Dasar
- **Timing:** Minggu 5–8 (Maret 2026)
- **Core Topics:** Instalasi Ubuntu Server di VirtualBox, konfigurasi IP static / dynamic (ifupdown vs netplan), remote access SSH via PuTTY, web server statis Apache2.
- **Pedagogical Foundations:**
  - Zone of Proximal Development (Vygotsky, 1978) via CLI cheatsheets & peer tutoring.
  - 5E Instructional Model in Assessment (Abell & Volkmann, 2006; secondary adoption of BSCS Bybee model).
  - Differentiated Instruction (Tomlinson, 2000).
- **Key Successes:** VirtualBox live demo engaged students; peer tutoring emerged naturally; successful PuTTY remote access and static web delivery.
- **Key Constraints:** "Network Unreachable" errors due to mixed Ubuntu 20.04 (ifupdown) and Ubuntu 22.04 (netplan) installations; lab time overrun during joint troubleshooting.
- **Contextual Adjustments:** Dual-path documentation (ifupdown + netplan); local offline package caching.
- **Status:** `CONSISTENT`

### Siklus 2 — Full Stack Environment & DNS Server Lokal
- **Timing:** Minggu 9–12 (Maret 2026)
- **Core Topics:** PHP, MySQL, Composer, Laravel installation; web server migration from Apache2 to Nginx + PHP-FPM; local DNS Server configuration via BIND9 (Forward & Reverse Zones).
- **Pedagogical Foundations:**
  - Cognitive Load Theory (Sweller, 1988) via small-unit checkpoints & error triage.
  - Transfer of Learning (Perkins & Salomon, 1992) via socket path & PHP version verification.
  - Mediated Learning Experience (Feuerstein) via specialized error consultants.
- **Key Successes:** Error triage strategy structured instructor intervention; `named-checkzone` checkpoints prevented invalid DNS zones; authentic demonstration of Laravel via local domain.
- **Key Constraints:** High cognitive load combining PHP/MySQL/Laravel/DNS in single sessions; `.env` configuration mismatches; PHP socket path errors; Windows client DNS adapter settings overlooked (`nslookup` failure).
- **Contextual Adjustments:** Split web stack installation into two distinct sessions; provide pictorial client-side DNS configuration guides.
- **Status:** `CONSISTENT`

### Siklus 3 — Git Deployment & Monitoring Server (Final Project)
- **Timing:** Minggu 13–15 (April 2026)
- **Core Topics:** Version control via Git & GitHub (Personal Access Token / HTTPS), automated pull deployment (`git pull`), system resource monitoring (`htop`, `netstat`), load testing (Apache Benchmark), end-to-end simulated production server demo.
- **Pedagogical Foundations:**
  - Metacognition (Flavell, 1979) via pre-demo verification checklists.
  - Flow Theory (Csikszentmihalyi, 1990) during real-time `htop` server monitoring.
  - Comprehensible Output Hypothesis (Swain, 1985; labeled in repository as Output-based Learning) via peer explanations and formal demonstration panels.
- **Key Successes:** Independent end-to-end server deployment demo before Guru Pamong and Dosen Pembimbing; architectural system diagram clarified component interactions; voluntary presentation model fostered student initiative.
- **Key Constraints:** Context-switching friction in SSH key setup for GitHub (resolved by migrating to HTTPS + PAT); students forgetting Windows DNS adapter reconfiguration; verbal technical articulation gap despite technical completion.
- **Contextual Adjustments:** Standardized pre-demo checklist; integrated early technical communication drills ("Technical Talks") starting from Cycle 1.
- **Status:** `CONSISTENT`

---

## 7. Assessment Data (Penilaian GP)

All raw scores were awarded by Guru Pamong (GP) using official instruments with a maximum raw score of 80.
Conversion Formula: $\text{Skor Konversi} = \frac{\text{Skor Mentah}}{80} \times 100$.

### Lampiran 7 — Penilaian Perangkat Pembelajaran (RPP / Modul Ajar)
| Siklus | Skor Mentah | Skor Konversi | Highlight | Identitas & Kompetensi | Materi & Media | Skenario | Penilaian |
|---|---|---|---|---|---|---|---|
| **Siklus 1** | 67 / 80 | **83.75** | Dasar Rancangan | 87.50 | 85.71 | 79.17 | 83.33 |
| **Siklus 2** | 67 / 80 | **83.75** | Konsistensi Rancangan | 100.00 | 82.14 | 79.17 | 75.00 |
| **Siklus 3** | 68 / 80 | **85.00** | Perbaikan Bertahap | 93.75 | 85.71 | 75.00 | 91.67 |

- **Growth Indicator:** +1.25 points from Siklus 1 to Siklus 3.
- **Status:** `CONSISTENT`

### Lampiran 8 — Penilaian Praktik Mengajar (Pelaksanaan Pembelajaran)
| Siklus | Skor Mentah | Skor Konversi | Highlight | Membuka Pelajaran | Kegiatan Inti | Menutup Pelajaran | Faktor Penunjang |
|---|---|---|---|---|---|---|---|
| **Siklus 1** | 67 / 80 | **83.75** | Fondasi Praktik | 75.00 | 88.64 | 75.00 | 80.00 |
| **Siklus 2** | 71 / 80 | **88.75** | Peningkatan Praktik | 100.00 | 81.82 | 100.00 | 95.00 |
| **Siklus 3** | 69 / 80 | **86.25** | Stabil Tinggi | 100.00 | 88.64 | 75.00 | 85.00 |

- **Growth Indicator:** +2.50 points overall from Siklus 1 to Siklus 3 (peaked at 88.75 in Siklus 2).
- **Status:** `CONSISTENT`

---

## 8. External Evidence Links (Google Drive Documents)

| Document Description | Google Drive URL | Location in App | Status |
|---|---|---|---|
| Modul Ajar / RPP Bab 1–2 (Siklus 1) | `https://drive.google.com/file/d/1qO5Esuec03ZuVwbiWlJUelYwp1Xvp0_1/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| LK 4 Refleksi Siklus 1 | `https://drive.google.com/file/d/1dvlBSuzJHo-zVoZxufi4lyv3Lap4LvOS/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| Lampiran 7 — Perangkat Pembelajaran Siklus 1 | `https://drive.google.com/file/d/1_1OW8PhuADKKc1INR4q_ixhIkWJuweul/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
| Lampiran 8 — Praktik Mengajar Siklus 1 | `https://drive.google.com/file/d/1J2ip4MbdvF_KPODPEIQFoglIKHwgmJfd/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
| Modul Ajar / RPP Bab 3–5 (Siklus 2) | `https://drive.google.com/file/d/1o90oVVmVE1BXgbyxRFSe12-fC7bbGRFE/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| LK 4 Refleksi Siklus 2 | `https://drive.google.com/file/d/1f23iF2ZEoJeAgC2QzowPNsrODawy7otq/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| Lampiran 7 — Perangkat Pembelajaran Siklus 2 | `https://drive.google.com/file/d/1oNuhUvzMpid9cpmR8PIt4xrohct0NThD/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
| Lampiran 8 — Praktik Mengajar Siklus 2 | `https://drive.google.com/file/d/1vZuxiZHHYtyXvh5u6m_AteZuMuQTlhQs/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
| Modul Ajar / RPP Bab 6–7 (Siklus 3) | `https://drive.google.com/file/d/1XZluvmimRlp6m5RiAva7OjXAciT5FjQU/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| LK 4 Refleksi Siklus 3 | `https://drive.google.com/file/d/1INyogUmrNagcepkGDABciYpKG3u2tiKS/view?usp=drive_link` | `/artefak` | `CONSISTENT` |
| Lampiran 7 — Perangkat Pembelajaran Siklus 3 | `https://drive.google.com/file/d/14yuX0ecREEf5mC8sHM_IWMv-K99R4rOp/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
| Lampiran 8 — Praktik Mengajar Siklus 3 | `https://drive.google.com/file/d/1HD2TaEYL3mCzviWq80ls24cD554brqR4/view?usp=drive_link` | `/artefak`, `/penilaian` | `CONSISTENT` |
