# Engineering Guide & Architecture

This document provides technical guidelines for building, maintaining, and extending the Next.js codebase.

---

## 1. Verified Tech Stack (Source of Truth: `package.json`)

| Layer / Technology | Package | Installed Version | Architectural Role |
|---|---|---|---|
| **Framework** | `next` | `^16.3.1` | Next.js App Router, Turbopack, React Server Components |
| **Runtime / UI Library** | `react`, `react-dom` | `19.2.4` | React 19 concurrent features, RSC primitives |
| **Language** | `typescript` | `^5` | Strict static typing, path aliases (`@/*`) |
| **Styling Engine** | `tailwindcss`, `@tailwindcss/postcss` | `^4` | Tailwind CSS v4 CSS-first configuration (`@theme inline`) |
| **Component Primitives** | `@base-ui/react` | `^1.4.1` | Base UI primitives powering shadcn v4 components |
| **Component Pattern** | `shadcn` | `^4.5.0` | Reusable UI component scaffolding (`components.json`) |
| **Utility Libraries** | `clsx`, `tailwind-merge`, `class-variance-authority` | `^2.1.1`, `^3.5.0`, `^0.7.1` | Class merging (`cn()`) and component variant typing |
| **Animation & Scroll** | `framer-motion`, `lenis` | `^12.38.0`, `^1.3.23` | Client micro-interactions and smooth scrolling engine |
| **Icons** | `lucide-react` | `^1.11.0` | Semantic vector icons |
| **Linting** | `eslint`, `eslint-config-next` | `^9`, `16.2.4` | Flat ESLint configuration (`eslint.config.mjs`) |

> [!NOTE]
> Outdated legacy rules referenced Next.js 14/15 and Radix UI. The actual installed dependencies are **Next.js 16.3.1**, **React 19.2.4**, **Tailwind CSS v4**, and **Base UI (`@base-ui/react`)**.

---

## 2. Application Architecture & Directory Structure

```
├── app/
│   ├── layout.tsx              # Root server layout (fonts, smooth scroll, navbar, footer)
│   ├── globals.css             # Tailwind v4 theme tokens & resets
│   ├── page.tsx                # Homepage (Hero, Model Guru, Work/Studies, Artifact preview)
│   ├── about/page.tsx          # About (Student profile, narrative, 4 Karakter, 5 Kompetensi, Timeline)
│   ├── artefak/page.tsx        # Artifacts (3 teaching cycles, theories, constraints, adjustments)
│   ├── penilaian/page.tsx      # Assessment (Lampiran 7 & 8 rekap, score bars, PDF downloads)
│   ├── refleksi/page.tsx       # Self-reflection (Visi pendidik, strengths/weaknesses, RTL)
│   ├── refleksi-akhir/page.tsx # Final PPL reflection (6-stage journey, GP feedback, values)
│   └── refleksi-matkul/page.tsx# 4C Course reflection (6 PPG courses, LK 2)
├── components/
│   ├── layout/                 # Structural chrome (Navbar.tsx, Footer.tsx)
│   ├── providers/              # Client wrappers (smooth-scroll.tsx)
│   ├── sections/               # Smart layout blocks (ArtifactCard, WorkStudiesToggle, RefleksiMatkulClient, CpmkBanner)
│   └── ui/                     # Dumb shadcn/Base UI primitives (badge, button, card, separator, progress, sheet)
├── lib/
│   └── utils.ts                # cn() class merge helper
├── assets/
│   └── images/                 # Static local images (muslich1.jpg)
├── docs/                       # Project documentation layer
└── public/                     # Static root assets (SVG icons, favicon)
```

---

## 3. React Component Strategy (RSC vs. Client Components)

Default to **React Server Components (RSC)**. Use `"use client"` strictly at leaf nodes where interactivity or browser APIs are required.

### Server Components by Default:
- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/artefak/page.tsx`
- `app/penilaian/page.tsx` (all score bars and charts are pure server rendered)
- `app/refleksi/page.tsx`
- `app/refleksi-akhir/page.tsx`
- `app/refleksi-matkul/page.tsx`
- `components/layout/Footer.tsx`

### Client Components (`"use client"`):
- `components/layout/Navbar.tsx` (scroll event listener, mobile menu toggle, Framer Motion active pill)
- `components/providers/smooth-scroll.tsx` (Lenis requestAnimationFrame hook)
- `components/sections/WorkStudiesToggle.tsx` (tab switching state & animation)
- `components/sections/ArtifactCard.tsx` (on-scroll motion reveal)
- `components/sections/CpmkBanner.tsx` (collapsible accordion state)
- `components/sections/RefleksiMatkulClient.tsx` (course tab state, rubric modal)
- `components/ui/sheet.tsx`, `components/ui/progress.tsx`, `components/ui/separator.tsx` (Base UI primitives)

---

## 4. TypeScript Standards

1. **Strict Mode Enabled:** `strict: true`, `noEmit: true` in `tsconfig.json`.
2. **No `any`:** All data objects, props, and callbacks must have explicit interfaces or types.
3. **Readonly Data Structures:** Define static data arrays with `as const` and `readonly` properties to enforce immutability:
   ```typescript
   interface TimelineEntry {
     readonly period: string;
     readonly role: string;
     readonly institution: string;
     readonly description: string;
   }
   ```
4. **Component Props Typing:** Explicitly type component props. For child-receiving components, use `Readonly<{ children: React.ReactNode }>`.

---

## 5. Styling Architecture (Tailwind CSS v4)

- **Entry Point:** `app/globals.css` using `@import "tailwindcss";`, `@import "tw-animate-css";`, `@import "shadcn/tailwind.css";`.
- **Token Definition:** Uses `@theme inline` mapping to CSS custom properties (`var(--background)`, `var(--foreground)`, etc.).
- **No Arbitrary Classes Where Tokens Exist:** Use `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground` to maintain system cohesion.
- **Utility Merging:** Always use `cn(...)` from `@/lib/utils` when concatenating conditional or dynamic class names.

---

## 6. Performance & Asset Optimization

1. **Images:** Always use `next/image` with explicit `width`, `height`, `alt`, and `priority` for above-the-fold hero images.
2. **Font Loading:** Use `next/font/google` (`display: "swap"`) to prevent layout shifts (CLS) and eliminate external font network requests.
3. **Server-Side Math & Rendering:** Complex calculations (score percentages, delta calculations, data formatting) must be performed during server render, not in client-side useEffects.
4. **No Heavy Third-Party Libraries:** Do not install heavy charting libraries (e.g., Chart.js, Recharts) when clean CSS score bars and semantic HTML progress elements satisfy all data visualization needs.

---

## 7. SEO & Metadata Implementation

- **Root Metadata (`app/layout.tsx`):** Title template (`"%s | Portfolio"`), default title, description, keywords, Open Graph metadata with locale (`"id_ID"`).
- **Page Metadata:** Every route exports a static `Metadata` object with a concise title and descriptive summary:
  - `/about` -> `title: "About"`
  - `/artefak` -> `title: "Artefak & Analisis"`
  - `/penilaian` -> `title: "Penilaian"`
  - `/refleksi` -> `title: "Refleksi"`
  - `/refleksi-akhir` -> `title: "Refleksi Akhir"`
  - `/refleksi-matkul` -> `title: "Refleksi Mata Kuliah"`

---

## 8. Dependency Policy & Clean Code

1. **Minimal Dependency Policy:** Never add third-party dependencies without explicit architectural need. Solve UI and logic requirements using the installed Next.js 16, React 19, Tailwind v4, and Base UI stack.
2. **No Production Logging:** Zero `console.log`, `console.debug`, or debugging output in committed code.
3. **No Dead Code / Unused Imports:** Maintain clean imports. ESLint flat configuration (`eslint.config.mjs`) enforces type and import safety.
4. **Preserve Documentation Integrity:** Maintain accurate comments and docstrings.
