---
trigger: always_on
---

# Portfolio Project Rules

## Required Context

Always read:
- `docs/PROJECT_CONTEXT.md`
- `docs/CONTENT_SOURCE.md`

For content changes:
- `docs/CONTENT_GUIDELINES.md`

For academic claims:
- `docs/ACADEMIC_GUIDELINES.md`

For rubric-related changes:
- `docs/RUBRIC.md`

For UI & visual design:
- `docs/DESIGN_SYSTEM.md`

For engineering & code architecture:
- `docs/ENGINEERING_GUIDE.md`

Before completion / QA:
- `docs/QA_CHECKLIST.md`

For long-term architectural decisions:
- `docs/DECISIONS.md`

---

## Source-of-Truth Hierarchy

1. User's explicit current instruction
2. Verified primary project evidence (scanned PDFs, official rubrics)
3. `docs/CONTENT_SOURCE.md`
4. `docs/RUBRIC.md`
5. `docs/ACADEMIC_GUIDELINES.md`
6. `docs/DESIGN_SYSTEM.md`
7. `docs/ENGINEERING_GUIDE.md`
8. Existing implementation where no stronger source exists

Never silently resolve factual contradictions. Use `REVIEW_REQUIRED` for unresolved factual or academic uncertainty.

---

## Academic Integrity

Never invent:
- teaching experiences
- student responses
- artifacts
- scores
- assessment results
- quotations
- references
- theories
- professional experiences

Target academic rubric excellence using **real, verifiable evidence**.

---

## Change Discipline

- No unrelated refactoring.
- Preserve existing application behavior unless explicit instructions require change.
- Use installed dependencies as the default (`package.json` is the dependency source of truth).
- Default to React Server Components; avoid unnecessary `"use client"` directives.
- Zero production `console.log` or debug statements.

---

## Documentation Maintenance

Update documentation only when the corresponding source of truth changes.