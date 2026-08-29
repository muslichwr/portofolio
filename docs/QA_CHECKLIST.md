# Quality Assurance & Definition of Done Checklist

This checklist defines the criteria required before any branch merge, release, or formal academic submission.

---

## 1. Content Integrity & Fact Verification

- [ ] **Full Name Spelling:** Confirmed as `Muslich Wahyu Romadhon` across all metadata, headers, cards, and footer copy.
- [ ] **Bachelor Degree Consistency:** Stated as `S1 Pendidikan Teknologi Informasi` (Universitas Negeri Surabaya).
- [ ] **Teaching Practicum School:** Accurately referenced as `SMK Negeri 1 Surabaya` (Kelas XI RPL).
- [ ] **Secondary Workplace:** Accurately referenced as `SMKS Tunas Bangsa Pare` (TKJ / ASJ).
- [ ] **Prior Internship:** Accurately referenced as `Dinas Komunikasi dan Informatika (Diskominfo)`.
- [ ] **PPL Cycles Alignment:** Cycles 1, 2, and 3 topics match identically across `/`, `/artefak`, `/penilaian`, and `/refleksi-akhir`.
- [ ] **Assessment Score Accuracy:** Lampiran 7 (83.75, 83.75, 85.00) and Lampiran 8 (83.75, 88.75, 86.25) match official GP evaluation documents.
- [ ] **No Fabricated Evidence:** All claims are grounded in actual project deliverables; no artificial claims have been added.
- [ ] **Canonical Alignment:** Content strictly matches `docs/CONTENT_SOURCE.md`.

---

## 2. Academic Integrity & Two-Tier Citation Verification

- [ ] **Two-Tier Evaluation Applied:** Bibliographic existence (*Bibliographic Verification*) and portfolio usage (*Portfolio Application Verification*) were evaluated separately.
- [ ] **No Automatic Interpretation Pass:** A verified publication is not automatically treated as a verified or appropriate classroom interpretation.
- [ ] **Accurate Theory Terminology:** Theory names match terminology established in canonical literature (e.g., Swain's *Comprehensible Output Hypothesis*, not *Output-based Learning*).
- [ ] **Disciplinary Domain Context:** Original disciplinary context is explicitly recorded for every theoretical framework.
- [ ] **Cross-Domain Justification:** Cross-domain applications (e.g., SLA concepts applied to vocational IT server demos) are explicitly justified or flagged as `REVIEW_REQUIRED`.
- [ ] **Secondary Source Discipline:** Secondary sources or adopter texts (e.g., Abell & Volkmann for 5E) are not misattributed as foundational theory originators.
- [ ] **No Citation Hallucination:** Zero unverified or invented academic citations.
- [ ] **Author Spelling Verified:** Author names checked against source publications (e.g., *Lefebvre* vs *Levebvre* tracked).
- [ ] **Publication Years Verified:** Dates match canonical publications (Vygotsky 1978, Sweller 1988, Flavell 1979, Csikszentmihalyi 1990, Swain 1985, Perkins & Salomon 1992, Abell & Volkmann 2006, Palmer 1998, Lefebvre et al. 2023).
- [ ] **No Learning Style Misconceptions:** Differentiated instruction claims avoid rigid matching to debunked fixed "learning styles".
- [ ] **Status Discipline:** Items marked `REVIEW_REQUIRED`, `PARTIALLY_VERIFIED`, or `LIMITED` in `docs/ACADEMIC_GUIDELINES.md` are not presented as incontrovertible pedagogical proofs.

---

## 3. Lembar Kerja 2 (LK 2) — Refleksi Mata Kuliah Quality Checks

- [ ] **All Six Courses Represented:** All six required course reflection categories are present and mapped.
- [ ] **Elective Course Traceability:** *Kebugaran Jasmani* is traceable as the official Selective/Elective course (*Mata Kuliah Selektif/Elektif*).
- [ ] **Connection Component:** Every course contains a substantive *Connection* reflection answering the official prompt (*Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?*).
- [ ] **Challenge Component:** Every course contains a substantive *Challenge* reflection answering the official prompt (*Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?*), identifying the significant challenge and explaining why it occurred.
- [ ] **Concept Component:** Every course contains a substantive *Concept* reflection answering the official prompt (*Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?*).
- [ ] **Change Component:** Every course contains a substantive *Change* reflection answering the official prompt (*Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?*).
- [ ] **Artifact Identification:** Every selected learning artifact is explicitly identified with its formal code/title.
- [ ] **Reason for Selection:** The pedagogical and experiential rationale for selecting each artifact is explicitly articulated.
- [ ] **Specific Supporting Part:** Specific excerpts, sections, or outputs within each artifact are directly connected to the reflective claims.
- [ ] **Artifact Analysis Rigor:** Document download links are not treated as substitutes for in-depth artifact analysis ($\text{Artifact} \to \text{Reason} \to \text{Supporting Part} \to \text{Reflective Claim}$).
- [ ] **Reflection Synthesis:** Comprehensive overall conclusion / synthesis is present for every course.
- [ ] **Supporting Artifact Access:** Direct access to authentic supporting learning artifacts is functional.
- [ ] **Formal LK 2 PDF Document:** Completed official LK 2 PDF document is attached/available when finalized.

---

## 4. UI, Responsiveness, & Visual Quality

- [ ] **Desktop Layout (>= 1024px):** Floating pill navbar centered, hero typography balanced, 2-column and 3-column grids aligned.
- [ ] **Tablet Layout (768px - 1023px):** Grids adapt smoothly; text remains legible without awkward line wraps.
- [ ] **Mobile Layout (< 768px):** Mobile navigation drawer opens and closes cleanly; no horizontal viewport overflow (`overflow-x: hidden` behavior verified).
- [ ] **Typography Hierarchy:** Strict sequential order (`h1` -> `h2` -> `h3` -> `h4`), high contrast (`text-white` on `text-zinc-400`).
- [ ] **Visual Spacing:** Consistent vertical rhythm (`py-16` / `py-24`) and horizontal padding (`px-6`).
- [ ] **Interactive Hover States:** Subtle border and background transitions on all cards, links, and buttons.

---

## 5. Accessibility (A11y)

- [ ] **Semantic HTML:** Proper landmark elements (`<header role="banner">`, `<main>`, `<footer role="contentinfo">`, `<nav aria-label="...">`, `<article>`, `<section>`).
- [ ] **Heading Order:** Single `<h1>` per page without skipped heading levels.
- [ ] **Accessible Names:** `aria-label` present on all icon-only buttons (mobile menu, social links).
- [ ] **Image Alt Text:** Descriptive `alt` attributes on all `<Image>` components.
- [ ] **Color Contrast:** Text-to-background contrast exceeds WCAG AA standards (4.5:1 for body text, 3:1 for large headers).
- [ ] **Keyboard Navigation:** All interactive elements reachable and operable via standard Tab / Enter / Space keys.

---

## 6. Navigation & Link Integrity

- [ ] **All Routes Reachable:**
  - [x] `/` (Homepage)
  - [x] `/about` (Profil & Model Guru)
  - [x] `/artefak` (Artefak & Analisis PPL)
  - [x] `/penilaian` (Transparansi Penilaian)
  - [x] `/refleksi` (Refleksi PPL)
  - [x] `/refleksi-akhir` (Refleksi Akhir)
  - [x] `/refleksi-matkul` (Refleksi 6 Mata Kuliah)
- [ ] **Navbar Active State:** Exact matching ensures `/refleksi` is not highlighted when visiting `/refleksi-akhir`.
- [ ] **Internal Links Valid:** All cross-page links resolve to active internal routes.
- [ ] **External Links Valid:** All Google Drive download links point to live, accessible PDF documents with `target="_blank"` or `download` attributes.

---

## 7. Engineering, Build Health, & Workspace Verification

Execute and verify the following commands from the project root:

```bash
# 1. Type check & compilation verification
npm run build

# 2. Linting verification
npm run lint

# 3. Development server sanity test
npm run dev
```

- [ ] **TypeScript Check:** Zero compilation errors (`tsc --noEmit`).
- [ ] **ESLint Check:** Zero lint errors or warnings.
- [ ] **Production Build:** `npm run build` completes successfully with clean static page generation.
- [ ] **No Dead Code:** No unused imports or unreachable code branches.
- [ ] **No Production Console Logs:** Zero `console.log` or debug statements in code.
- [ ] **RSC Boundaries:** `"use client"` restricted strictly to interactive leaf components.
- [ ] **Dependency Hygiene:** No unapproved packages added to `package.json`.
- [ ] **Workspace Change Boundary:** Working-tree changes are limited strictly to approved documentation and agent-configuration files; application source code remains unchanged.
