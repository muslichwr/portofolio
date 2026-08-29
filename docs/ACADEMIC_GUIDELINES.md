# Academic Guidelines & Citation Verification

This document establishes the standards for citing pedagogical theories, educational frameworks, and academic literature within the portfolio.

---

## 1. Two-Tier Academic Verification Framework

To prevent treating the mere existence of a publication as validation of how a theory is interpreted or applied, this documentation system enforces a strict **two-tier verification evaluation** for every academic reference:

```
┌────────────────────────────────────────────────────────┐
│ 1. Bibliographic Verification                          │
│    "Does this publication/concept exist, and is the    │
│     bibliographic attribution accurate?"               │
│    [ VERIFIED | PARTIALLY_VERIFIED | REVIEW_REQUIRED ] │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ 2. Portfolio Application Verification                  │
│    "Is the portfolio's usage consistent with the       │
│     source's actual concept, scope, and domain?"       │
│    [ APPROPRIATE | LIMITED | REVIEW_REQUIRED |         │
│      INAPPROPRIATE ]                                   │
└────────────────────────────────────────────────────────┘
```

### Tier 1: Bibliographic Verification Definitions

- `VERIFIED`: The author, title, publication venue, year, and core conceptual definition have been verified against authoritative scholarly records.
- `PARTIALLY_VERIFIED`: The author and underlying scholarly work exist and are relevant, but specific metadata (e.g., publication year, author surname spelling, or primary source title) is missing or imprecise in the codebase.
- `REVIEW_REQUIRED`: The reference lacks reliable bibliographic tracking, contains severe naming ambiguities, or was derived from an unverified prompt claim.

### Tier 2: Portfolio Application Verification Definitions

- `APPROPRIATE`: The portfolio's application of the concept is directly aligned with the author's original theoretical scope and established pedagogical mechanisms.
- `LIMITED`: The portfolio applies the concept partially, relies on a secondary/adopter source rather than the foundational theorist, or uses the concept informally without full methodological alignment.
- `REVIEW_REQUIRED`: The portfolio applies a theory across disparate disciplinary domains (e.g., language acquisition to server troubleshooting) without establishing an explicit conceptual bridge, or claims a codified "model" where none exists in the literature.
- `INAPPROPRIATE`: The portfolio fundamentally mischaracterizes or misapplies the theoretical construct.

---

## 2. Rules for Academic Integrity & Citations

1. **No Citation Hallucination:** Never fabricate author names, attach arbitrary publication years, or invent theoretical models to artificially project academic sophistication.
2. **Distinct Disciplinary Domains:** Explicitly record the original disciplinary origin of every theory (e.g., cognitive psychology, second-language acquisition, science education) and flag cross-domain applications for review.
3. **No Secondary-Source Misattribution:** Do not attribute foundational models to secondary authors who merely applied or adapted them (e.g., Abell & Volkmann applied the 5E cycle in science assessment, but did not originate the BSCS 5E Model).
4. **No Unsupported Causal Inferences:** Do not assert that a theoretical framework "caused" student success. Use disciplined phrasing: instructional interventions were *guided by*, *informed by*, or *structured around* the concept.
5. **No Fixed "Learning Style" Conflation:** When citing Tomlinson's Differentiated Instruction, adhere to her canonical dimensions (**Readiness, Interest, Learning Profile**). Avoid asserting that students must be categorized and taught according to debunked fixed "learning styles." The *learning profile / profil belajar* construct must never be interpreted as a fixed learner type or as justification for matching instruction to fixed learning styles.

---

## 3. Current Academic References Inventory

All 11 academic references present in the portfolio codebase are cataloged below with full bibliographic metadata and two-tier verification evaluations:

---

### 1. Zone of Proximal Development (ZPD) & Scaffolding
- **Author(s):** Lev S. Vygotsky
- **Year:** 1978
- **Title:** *Mind in Society: The Development of Higher Psychological Processes*
- **Publication / Source:** Harvard University Press (Edited by M. Cole, V. John-Steiner, S. Scribner, & E. Souberman)
- **DOI / Stable Identifier:** ISBN: 978-0-674-57629-2
- **Repository Location:** `app/artefak/page.tsx` (lines 26, 33–36)
- **Concept / Established Name:** Zone of Proximal Development (ZPD) & Scaffolding / Assisted Learning
- **Original Disciplinary Domain:** Developmental Psychology / Educational Psychology
- **Current Portfolio Usage:** Structuring CLI mastery through initial command cheatsheets with gradual fading toward collaborative peer tutoring.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:** Direct and appropriate application of ZPD principles to procedural technical skills.

---

### 2. 5E Instructional Model in Assessment
- **Author(s):** Sandra K. Abell & Mark J. Volkmann
- **Year:** 2006
- **Title:** *Seamless Assessment in Science: A Guide for Elementary and Middle School Teachers*
- **Publication / Source:** Heinemann / NSTA Press
- **DOI / Stable Identifier:** ISBN: 978-0-325-00769-4
- **Repository Location:** `app/artefak/page.tsx` (lines 38–41: labeled as `"Model 5E dalam Asesmen — Abell & Volkmann (2006)"`)
- **Concept / Established Name:** 5E Instructional Model (Engagement, Exploration, Explanation, Elaboration, Evaluation) in Inquiry and Assessment
- **Original Disciplinary Domain:** Science Education / Pedagogical Assessment
- **Current Portfolio Usage:** Structuring the procedural phases of Ubuntu Server installation from live demonstration (Engagement) to student evaluation, applying assessment within 5E.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `LIMITED`
- **Analysis & Traceability:**
  - *Bibliographic Accuracy:* Abell & Volkmann (2006) is a valid, published work focusing on embedding assessment within the 5E inquiry cycle.
  - *Attribution Limitation:* Abell & Volkmann are presented accurately as applying/embedding assessment within the 5E cycle rather than originating the model itself (originated by Bybee et al., BSCS).
  - *Remediation (2026-08-29):* Label clarified to `"Model 5E dalam Asesmen — Abell & Volkmann (2006)"` with explicit description of assessment integration.

---

### 3. Differentiated Instruction (Pembelajaran Berdiferensiasi)
- **Author(s):** Carol Ann Tomlinson
- **Year:** 2000 / 2001
- **Title:** *How to Differentiate Instruction in Mixed-Ability Classrooms* (2nd ed.) / *The Differentiated Classroom: Responding to the Needs of All Learners*
- **Publication / Source:** Association for Supervision and Curriculum Development (ASCD)
- **DOI / Stable Identifier:** ISBN: 978-0-87120-512-4
- **Repository Location:** `app/artefak/page.tsx` (lines 43–46), `components/sections/RefleksiMatkulClient.tsx` (Course 6), `app/about/page.tsx` (line 84)
- **Concept / Established Name:** Differentiated Instruction (DI)
- **Original Disciplinary Domain:** Curriculum Design / General Pedagogy
- **Current Portfolio Usage:** Structuring tiered scaffolding based on student readiness and prior technical experience.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:**
  - *Theoretical Dimensions vs. Operational Descriptors:* Tomlinson's (2000, 2001) established theoretical dimensions of differentiated instruction are **Readiness**, **Interest**, and **Learning Profile**. The website's operational phrasing (*"kesiapan belajar, pengetahuan awal, dan kebutuhan dukungan teknis"*) functions as a context-specific operational description of entry-level learner baseline in a vocational IT laboratory, rather than redefining the canonical theoretical dimensions.
  - *Learning Profile Guardrail:* The construct of *learning profile / profil belajar* must not be interpreted as a fixed learner type or used as justification for matching instruction to fixed learning styles (*gaya belajar*).
  - *Siklus 1 Application:* Tiered scaffolding in `app/artefak/page.tsx` is appropriately based on technical readiness (prior Linux exposure).

---

### 4. Cognitive Load Theory (CLT)
- **Author(s):** John Sweller
- **Year:** 1988
- **Title:** "Cognitive load during problem solving: Effects on learning"
- **Publication / Source:** *Cognitive Science*, 12(2), 257–285
- **DOI / Stable Identifier:** `10.1207/s15516709cog1202_4`
- **Repository Location:** `app/artefak/page.tsx` (lines 79, 84–87)
- **Concept / Established Name:** Cognitive Load Theory (Intrinsic, Extraneous, and Germane Load)
- **Original Disciplinary Domain:** Cognitive Psychology / Instructional Design
- **Current Portfolio Usage:** Segmenting dense multi-tier web application installations (PHP, MySQL, Composer, Laravel) into checkpointed units with error triage to manage working memory.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:** Exact, appropriate application of cognitive load management to complex multi-step technical configuration.

---

### 5. Transfer of Learning (Transfer Belajar)
- **Author(s):** David N. Perkins & Gavriel Salomon
- **Year:** 1992
- **Title:** "Transfer of Learning"
- **Publication / Source:** *International Encyclopedia of Education* (2nd ed.), Oxford, England: Pergamon Press
- **DOI / Stable Identifier:** ERIC ED367142
- **Repository Location:** `app/artefak/page.tsx` (lines 89–92)
- **Concept / Established Name:** Transfer of Learning (Low-road / High-road Transfer, Context Mindful Abstraction)
- **Original Disciplinary Domain:** Educational Psychology / Cognitive Science
- **Current Portfolio Usage:** Training students to inspect environment-specific variables (PHP socket paths, OS releases) rather than copying static configurations.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:** Accurate conceptual alignment with mindful abstraction and context verification.

---

### 6. Mediated Learning Experience (MLE)
- **Author(s):** Reuven Feuerstein (with P. S. Klein & A. J. Tannenbaum)
- **Year:** Undated in code (Key foundational text: 1980 / 1991)
- **Title:** *Instrumental Enrichment: An Intervention Program for Cognitive Modifiability* (1980) / *Mediated Learning Experience (MLE): Resolving Implications for Human Development* (1991)
- **Publication / Source:** University Park Press / Freund Publishing
- **DOI / Stable Identifier:** ISBN: 978-9652940605
- **Repository Location:** `app/artefak/page.tsx` (lines 94–97)
- **Concept / Established Name:** Mediated Learning Experience (MLE) / Structural Cognitive Modifiability
- **Original Disciplinary Domain:** Cognitive Psychology / Special & Developmental Education
- **Current Portfolio Usage:** Utilizing advanced students as specialized "error consultants" to mediate and explain troubleshooting steps.
- **Bibliographic Verification:** `PARTIALLY_VERIFIED`
- **Portfolio Application Verification:** `LIMITED`
- **Analysis & Traceability:**
  - *Bibliographic Gap:* Year is missing in codebase (`Feuerstein`). Should be standardized to `Feuerstein (1980)` or `Feuerstein (1991)` in future updates.
  - *Application Limitation:* MLE specifically addresses intentional mediation by an adult/expert mediator to modify cognitive structures. Using peer consultants is closer to collaborative scaffolding or reciprocal peer tutoring than formal Feuersteinian MLE.

---

### 7. Metacognition (Metakognisi)
- **Author(s):** John H. Flavell
- **Year:** 1979
- **Title:** "Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry"
- **Publication / Source:** *American Psychologist*, 34(10), 906–911
- **DOI / Stable Identifier:** `10.1037/0003-066X.34.10.906`
- **Repository Location:** `app/artefak/page.tsx` (lines 132, 137–140)
- **Concept / Established Name:** Metacognition & Cognitive Monitoring (Knowledge and Regulation of Cognition)
- **Original Disciplinary Domain:** Cognitive Developmental Psychology
- **Current Portfolio Usage:** Mandating pre-demo verification checklists so students self-monitor and evaluate server readiness prior to formal evaluation.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:** Standard, accurate application of metacognitive self-regulation to a technical readiness workflow.

---

### 8. Flow Theory (Teori Flow)
- **Author(s):** Mihaly Csikszentmihalyi
- **Year:** 1990
- **Title:** *Flow: The Psychology of Optimal Experience*
- **Publication / Source:** Harper & Row
- **DOI / Stable Identifier:** ISBN: 978-0-06-016253-5
- **Repository Location:** `app/artefak/page.tsx` (lines 132, 142–145)
- **Concept / Established Name:** Flow (Optimal Experience / Challenge-Skill Balance)
- **Original Disciplinary Domain:** Positive Psychology / Human Motivation
- **Current Portfolio Usage:** Characterizing high student engagement observed during live server resource monitoring (`htop`).
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `LIMITED`
- **Analysis & Traceability:**
  - *Application Limitation:* High situational engagement during terminal monitoring is descriptive of interest, but asserting a full psychological state of "Flow" (requiring strict challenge-skill equilibrium and loss of self-consciousness) is an informal, metaphorical extension.

---

### 9. Comprehensible Output Hypothesis (Swain)
- **Author(s):** Merrill Swain
- **Year:** 1985
- **Title:** "Communicative competence: Some roles of comprehensible input and comprehensible output in its development"
- **Publication / Source:** In S. Gass & C. Madden (Eds.), *Input in second language acquisition* (pp. 235–253). Rowley, MA: Newbury House
- **DOI / Stable Identifier:** ISBN: 978-0-88377-293-5
- **Repository Location:** `app/artefak/page.tsx` (lines 147–150: labeled as `"Comprehensible Output Hypothesis — Swain (1985)"`)
- **Concept / Established Name:** Comprehensible Output Hypothesis / The Output Hypothesis (*NOT* formally established as "Output-based Learning")
- **Original Disciplinary Domain:** Second-Language Acquisition (SLA) / Applied Linguistics
- **Current Portfolio Usage:** Analogical application justifying peer-to-peer technical explanations and verbal architecture presentations.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `REVIEW_REQUIRED`
- **Analysis & Traceability:**
  - *Naming Resolution (2026-08-29):* Standardized from the informal `"Output-based Learning"` to the canonically accurate `"Comprehensible Output Hypothesis"`.
  - *Cross-Domain Translation:* Swain formulated the hypothesis for language acquisition (producing language forces grammatical processing). The portfolio presents the connection as an explicit analogical application to technical communication and verbal articulation.

---

### 10. Teacher Identity and Integrity (Palmer)
- **Author(s):** Parker J. Palmer
- **Year:** 1998 (10th Anniv. 2007)
- **Title:** *The Courage to Teach: Exploring the Inner Landscape of a Teacher's Life*
- **Publication / Source:** Jossey-Bass
- **DOI / Stable Identifier:** ISBN: 978-0-7879-1058-7
- **Repository Location:** `app/about/page.tsx` (lines 433–447)
- **Concept / Established Name:** Teacher Identity and Integrity (*"We teach who we are"*)
- **Original Disciplinary Domain:** Philosophy of Education / Teacher Formation
- **Current Portfolio Usage:** Professional role model grounding educator identity before technical technique.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `APPROPRIATE`
- **Analysis & Traceability:** Faithful quote and direct alignment with Palmer's core thesis.

---

### 11. Reflection on Teaching Action and Student Learning (Lefebvre et al.)
- **Author(s):** Julie Lefebvre, Hélène Lefebvre, Jérôme Gauvin-Lepage, Raymonde Gosselin, & Dan Lecocq (Lefebvre et al.)
- **Year:** 2023
- **Title:** "Reflection on teaching action and student learning"
- **Publication / Source:** *Teaching and Teacher Education*, Volume 134, Article 104305
- **DOI / Stable Identifier:** `10.1016/j.tate.2023.104305`
- **Repository Location:** `app/about/page.tsx` (line 102: `"Menerapkan refleksi terstruktur terhadap tindakan mengajar dan respons belajar murid (Lefebvre et al., 2023)..."`)
- **Concept / Established Name:** Reflection on teaching practice and its relationship with factors that may facilitate or hinder student learning
- **Original Disciplinary Domain:** Teacher Education / Reflective Practice
- **Current Portfolio Usage:** Cited as justification for continuous cycle-over-cycle iterative reflective improvement.
- **Bibliographic Verification:** `VERIFIED`
- **Portfolio Application Verification:** `LIMITED`
- **Analysis & Traceability:**
  - *Author Spelling (Resolved 2026-08-29):* Corrected typo **`Levebvre`** to **`Lefebvre et al.`**.
  - *Application Alignment & Scope:* The revised wording is conceptually aligned with the publication's focus on reflection on teaching action and student learning. The portfolio does not claim to reproduce the study's specific reflective procedures or constitute a formally named reflective model.
