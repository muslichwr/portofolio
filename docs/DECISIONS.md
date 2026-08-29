# Architecture & Project Decisions Log

This document records architectural, technical, and editorial decisions that shape the portfolio.

---

## Existing Decisions Inferred From Repository

### DEC-001: Permanent Dark Mode & Zinc Monochrome Palette
- **Status:** `ACCEPTED (INFERRED)`
- **Context:** The portfolio aims for an editorial, developer-oriented visual identity inspired by high-contrast technical portfolios.
- **Decision:** Implement a permanent dark theme using Tailwind CSS v4 `@theme inline` with perceptually uniform `oklch` Zinc values. Omit light/dark theme toggles.
- **Consequences:** Eliminates theme-switching hydration flash, simplifies CSS token maintenance, and establishes a distinctive brutalist identity.

### DEC-002: Next.js App Router with Server-First Component Strategy
- **Status:** `ACCEPTED (INFERRED)`
- **Context:** The portfolio contains text-heavy academic prose, score metrics, and downloadable attachments requiring fast initial paint and high SEO visibility.
- **Decision:** Default to React Server Components (RSC) across all pages. Restrict `"use client"` exclusively to leaf nodes requiring DOM event listeners, state, or Framer Motion animations.
- **Consequences:** Zero JavaScript hydration overhead for main reading content; instant page loads; optimal Core Web Vitals.

### DEC-003: Pure Server-Rendered Score Bars & Metrics
- **Status:** `ACCEPTED (INFERRED)`
- **Context:** Transparansi Penilaian requires displaying Lampiran 7 and 8 assessment scores and progress bars across 3 teaching cycles.
- **Decision:** Build lightweight, pure-CSS score bars (`ScoreBar` component) calculated and rendered entirely on the server rather than importing heavy client-side charting libraries (such as Chart.js or Recharts).
- **Consequences:** Eliminates ~150KB of client-side JavaScript bundle; renders charts instantly during initial server HTML streaming.

### DEC-004: Global Smooth Scrolling via Lenis
- **Status:** `ACCEPTED (INFERRED)`
- **Context:** Editorial long-form reading flows benefit from refined scrolling physics matching contemporary design standards.
- **Decision:** Wrap the application layout in a client-side `<SmoothScrollProvider>` running Lenis (`lenis: ^1.3.23`).
- **Consequences:** Provides consistent, inertia-driven smooth scrolling across desktop browsers while maintaining native scroll fallback on touch devices.

### DEC-005: Project-Based Learning (PjBL) and Real-World DevOps Topics
- **Status:** `ACCEPTED (INFERRED)`
- **Context:** Vocational high school curriculum (SMK TKJ/RPL) requires authentic technical training aligned with industry expectations.
- **Decision:** Structure all three PPL teaching cycles around real-world infrastructure and DevOps workflows (Linux server configuration, SSH remote access, Nginx + PHP-FPM, BIND9 DNS, and Git pull deployment pipelines).
- **Consequences:** Aligns instructional design with vocational competency rubrics and showcases the author's dual competency as an IT developer and educator.

---

## Formal Project Decisions

### 2026-08-29 — Creation of Dedicated Documentation Layer (`docs/`)
- **Status:** `ACCEPTED`
- **Context:** The project rules in `.agents/rules/portoflio.md` had become a monolithic file conflating personal facts, outdated framework versions (Next.js 14/15 vs 16.3.1), design system guidelines, and engineering standards. Multiple content inconsistencies (e.g., name spelling, degree title) existed across pages.
- **Decision:** Separate concerns by establishing a comprehensive `docs/` layer (9 dedicated documents covering context, canonical facts, rubric mapping, writing guidelines, academic citations, design system, engineering guide, QA checklist, and decision log) and refactor `.agents/rules/portoflio.md` into a lightweight documentation router.
- **Reason:** Ensures consistent future development, establishes unambiguous sources of truth, eliminates prompt hallucination, and preserves academic integrity.
- **Alternatives Considered:** Keeping rules inside `.agents/rules/portoflio.md` only. Rejected due to token bloat, rule overlapping, and lack of modularity.
- **Consequences:** All AI agents and developers must consult `docs/CONTENT_SOURCE.md` before making factual claims and follow `docs/ACADEMIC_GUIDELINES.md` before introducing theoretical citations.

### 2026-08-29 — DEC-006: Dual-Format Evidence Strategy for Refleksi Mata Kuliah (LK 2)
- **Status:** `ACCEPTED`
- **Context:** The official PPG Prajabatan LMS evaluation requires students to submit a public digital portfolio website URL, while the formal course assessment instrument remains the completed Lembar Kerja 2 (LK 2) worksheet document.
- **Decision:** Implement a dual-format evidence presentation strategy for the Refleksi Mata Kuliah section (`/refleksi-matkul`):
  1. *Primary presentation:* Fully readable, in-depth 4C reflection narrative, artifact analysis, and reflection synthesis rendered directly on the digital portfolio.
  2. *Formal supporting evidence:* Downloadable formal LK 2 worksheet PDF for each course, alongside links to authentic learning artifacts.
  - The PDF does **not** replace the website reflection; the website does **not** replace the formal LK 2 document.
- **Evidence Architecture:**
  $$\text{Course} \longrightarrow \text{Connection} \longrightarrow \text{Challenge} \longrightarrow \text{Concept} \longrightarrow \text{Change} \longrightarrow \text{Artifact Analysis} \longrightarrow \text{Reflection Synthesis} \longrightarrow \text{Supporting Documents}\begin{cases}\text{LK 2 PDF}\\\text{Learning Artifact}\end{cases}$$
- **Reason:** Ensures evaluators assessing via the digital portfolio website have immediate, transparent access to all reflective claims, while preserving formal institutional compliance through downloadable LK 2 PDF instruments.
- **Consequences:** Evaluators can assess reflections directly on-screen without requiring external downloads, while official verification can still inspect the formal LK 2 PDFs.

---

## Decision Record Template (for Future Decisions)

```markdown
### YYYY-MM-DD — [Decision Title]

- **Status:** `PROPOSED` | `ACCEPTED` | `REPLACED`
- **Context:** What problem or requirement triggered this decision?
- **Decision:** What is the specific architectural or editorial choice?
- **Reason:** Why was this option selected over alternatives?
- **Alternatives:** What other approaches were evaluated and why were they rejected?
- **Consequences:** What positive outcomes, trade-offs, or constraints result from this decision?
```
