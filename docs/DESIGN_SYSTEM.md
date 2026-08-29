# Design System & Visual Architecture

This document reverse-engineers and formalizes the design system implemented across the portfolio. It establishes clear distinctions between **current implementation** and **recommended standards**.

---

## 1. Visual Direction & Design Philosophy

- **Aesthetic Identity:** Restrained, editorial, monochrome, academic, and developer-oriented.
- **Initial Inspiration Reference:** `rafaelamaral.dev` served as an initial visual benchmark for brutalist minimal card layouts, full-width work/studies toggle tabs, and restrained monochrome typography. It is an aesthetic reference, not an asset to copy identically.
- **Role of Visual Elements:** Design is in service of academic evidence and readability. Visual flair (e.g., radial cyan glows, border glows, micro-interactions) is subtle and restrained to maintain high reading comfort.

---

## 2. Color System (Permanent Dark Mode)

### `CURRENT IMPLEMENTATION`
The site operates in **permanent dark mode**. There is no theme switcher. The color palette is configured via Tailwind CSS v4 `@theme inline` tokens using perceptually uniform `oklch` values:

```css
:root {
  /* Core surfaces */
  --background: oklch(0.141 0.005 285.823);   /* zinc-950 (~#09090b) */
  --foreground: oklch(0.92 0.004 286.32);      /* zinc-200 (~#e4e4e7) */

  /* Cards & Popovers */
  --card: oklch(0.21 0.006 285.885);           /* zinc-900 (~#18181b) */
  --card-foreground: oklch(0.92 0.004 286.32); /* zinc-200 */

  /* Primary (Brutalist High-Contrast) */
  --primary: oklch(0.985 0 0);                 /* Pure near-white */
  --primary-foreground: oklch(0.141 0.005 285.823); /* zinc-950 */

  /* Secondary & Muted */
  --secondary: oklch(0.274 0.006 286.033);     /* zinc-800 */
  --secondary-foreground: oklch(0.92 0.004 286.32);
  --muted: oklch(0.274 0.006 286.033);         /* zinc-800 */
  --muted-foreground: oklch(0.552 0.016 285.938); /* zinc-500 */

  /* Borders & Inputs */
  --border: oklch(1 0 0 / 10%);                /* Subtle 10% white border */
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.552 0.016 285.938);          /* zinc-500 */

  /* Radius base */
  --radius: 0.5rem;
}
```

### Semantic Accent Colors
Color is used solely as a **semantic indicator**, not decoration:
- **Cyan / Teal Glow:** Ambient background glow (`rgba(6,182,212,0.12)`) and active timeline dots (`border-cyan-500 bg-cyan-500`).
- **Emerald / Green:** Positive growth indicators, pedagogical badges (`border-emerald-900/40 bg-emerald-950/20 text-emerald-400`), and rubric verification checks.
- **Amber / Yellow:** Warnings, active milestone badges (`border-amber-500/30 text-amber-400`), and Challenge dimensions in 4C reflection.
- **Sky / Blue:** Connection dimensions in 4C reflection and secondary highlights.
- **Violet / Indigo:** Change dimensions in 4C reflection and academic milestones.

### `RECOMMENDED STANDARD`
- Maintain the strict zinc monochrome surface base. Never introduce colorful full-bleed section backgrounds.
- Keep semantic accent colors constrained to badges, small status icons, and subtle border highlights.

---

## 3. Typography & Hierarchy

### `CURRENT IMPLEMENTATION`
Loaded via `next/font/google` in `app/layout.tsx`:
- **Sans Font:** `Inter` (variable: `--font-sans`, subsets: `["latin"]`, display: `"swap"`).
- **Mono Font:** `Geist_Mono` (variable: `--font-geist-mono`, subsets: `["latin"]`, display: `"swap"`).

### Type Scale & Hierarchy
- **Page Hero Heading (`h1`):** `text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter text-white`
- **Section Heading (`h2`):** `text-3xl md:text-5xl font-extrabold tracking-tighter text-white`
- **Subsection Heading (`h3`):** `text-base md:text-xl font-bold tracking-tight text-white`
- **Card Subhead / Item Title (`h4`):** `text-sm font-bold tracking-tight text-white`
- **Body Text:** `text-sm md:text-base leading-relaxed text-zinc-400`
- **Muted / Caption Text:** `text-xs text-zinc-500`
- **Eyebrow / Kicker:** `font-mono text-xs uppercase tracking-[0.2em] text-zinc-600`

### `RECOMMENDED STANDARD`
- Ensure all numbers and technical tags (scores, versions, dates, cycles) use `font-mono` for visual precision.
- Maintain high contrast between headers (`text-white`) and body text (`text-zinc-400`).

---

## 4. Layout & Spacing

### `CURRENT IMPLEMENTATION`
- **Main Reading Container:** `mx-auto max-w-4xl px-6` (Ensures optimal line length of 65–85 characters).
- **Footer Container:** `mx-auto max-w-6xl px-6`.
- **Vertical Section Rhythm:** `py-16 md:py-24` with `Separator` components (`bg-zinc-800/50`).
- **Main Shell Padding:** `<main className="relative z-10 min-h-screen pt-24">` to accommodate the floating pill navbar.

### `RECOMMENDED STANDARD`
- Avoid multi-column masonry grids on text-heavy academic pages. Single-column vertical reading flows allow deep reading of pedagogical analysis.
- Preserve generous whitespace (`gap-12`, `space-y-8`, `py-24`) to prevent visual crowding.

---

## 5. UI Components & Patterns

### 1. Floating Pill Navbar (`components/layout/Navbar.tsx`)
- Floating pill structure centered at `top-4 z-50`.
- Glassmorphism backdrop: `backdrop-blur-md` with `border-white/[0.06] bg-white/[0.03]`, transitioning to `bg-black/70 shadow-lg` on scroll.
- Active route indicator: Animated Framer Motion sliding pill (`layoutId="navbar-active-pill"`).
- Exact route matching to prevent `/refleksi` from remaining active on `/refleksi-akhir`.

### 2. Cards (`components/ui/card.tsx` & `components/sections/ArtifactCard.tsx`)
- **Border Style:** `border-zinc-800/50` or `border-white/[0.06]`.
- **Surface:** `bg-zinc-950` or `bg-white/[0.02]`.
- **Hover States:** Subtle border brightening (`hover:border-zinc-700/60` or `hover:border-cyan-500/20`) and background lift (`hover:bg-white/[0.04]`).
- **Corner Radius:** `rounded-xl` for cards, `rounded-md` max for inner buttons and controls.

### 3. Badges (`components/ui/badge.tsx`)
- Mono-styled tags for tech stacks (`border-zinc-800 bg-zinc-900 font-mono text-[11px] text-zinc-400`).
- Semantic outlined badges for pedagogy (`border-emerald-900/40 bg-emerald-950/20 text-emerald-400`).

### 4. Score Bars (`app/penilaian/page.tsx`)
- Pure server-rendered visual progress bars without client-side hydration overhead.
- Height: `h-2`, Track: `bg-zinc-800`, Fill: `bg-gradient-to-r from-zinc-500 to-zinc-300`.

### 5. Work & Studies Toggle (`components/sections/WorkStudiesToggle.tsx`)
- Grid toggle with sliding active highlight (`layoutId="experience-tab-active"`).
- Left-aligned circular icon indicators with subtle colored icon accents.

---

## 6. Motion & Smooth Scrolling

### `CURRENT IMPLEMENTATION`
- **Global Smooth Scroll:** Lenis library (`lenis: ^1.3.23`) initialized via `<SmoothScrollProvider>` in `app/layout.tsx`.
- **Micro-Animations:** Framer Motion (`framer-motion: ^12.38.0`) for:
  - Navbar scroll fade and active tab layout animations.
  - Work/Studies tab switching transitions (`AnimatePresence`).
  - Staggered on-scroll reveal for `ArtifactCard` (`whileInView="visible"`, `viewport={{ once: true }}`).
  - Collapsible accordions for CPMK and course cards.

### `RECOMMENDED STANDARD`
- Keep animations performant and non-intrusive (`duration: 0.3s - 0.6s`, cubic-bezier easings).
- Never block content accessibility or cause layout shift with heavy entry animations.

---

## 7. Accessibility & Interaction States

### `CURRENT IMPLEMENTATION`
- Custom selection highlight: Inverted pure white background with pure black text (`::selection { background-color: #ffffff; color: #000000; }`).
- Semantic landmarks: `<header role="banner">`, `<main>`, `<footer role="contentinfo">`, `<nav aria-label="Navigasi utama">`.
- Interactive labels: `aria-label` on all social links and hamburger buttons; `aria-expanded` on collapsible components.

### `RECOMMENDED STANDARD`
- Ensure all interactive links and buttons have clearly visible focus indicators (`outline-ring/50`).
- Maintain sufficient text contrast for WCAG AA compliance (Zinc-400 on Zinc-950 exceeds 4.5:1 ratio).
