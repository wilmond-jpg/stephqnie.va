## Build plan — Stephanie Anne Corpuz VA Portfolio

Single-page front-end only site. No backend, no DB, no working forms.

### Design system (`src/styles.css`)

Add `@theme` tokens for the 8 brand colors:

- `--color-chocolate` `#1E1712`, `--color-brown-deep` `#4A2F08`, `--color-cream` `#F7F1E3`, `--color-beige` `#E8D7B8`, `--color-gold` `#B47A1E`, `--color-yellow-pale` `#FFF27A`, `--color-soft-black` `#17120D`, `--color-card` `#FFF9EF`.
- Map shadcn semantic tokens (background, foreground, primary, muted, border, etc.) onto these so all primitives inherit the warm palette.
- Register `--font-display: "Fraunces"` and `--font-sans: "Inter"`. Load both via `<link>` in `__root.tsx` head (preconnect + Google Fonts stylesheet) — never `@import` URLs in CSS.
- Utilities: `.section-label` (uppercase tracked gold), `.page-number` (corner numeral, small gold), `.divider-thin` (1px beige rule), `.placeholder-frame` (dashed warm-beige border with centered label).

### Root + meta (`src/routes/__root.tsx`)

- Add font `<link>` tags.
- Page title: "Stephanie Anne Corpuz — Virtual Assistant Portfolio".
- Description: "Content, calendars, and chaos handled. Social media, systems, and operations for small businesses."
- OG/Twitter tags matching.

### File structure

```
src/
  routes/
    __root.tsx
    index.tsx                 (assembles all sections)
  components/site/
    Nav.tsx                   (sticky desktop, mobile Sheet hamburger)
    Hero.tsx
    WhatIDo.tsx               (split dark/cream)
    Skills.tsx                (two columns: skills + tools)
    ProjectsOverview.tsx      (5 cards)
    ProjectLaVenne.tsx
    ProjectDeCocatris.tsx
    ProjectTheVillage.tsx
    ProjectAuraCrystals.tsx
    Lumera.tsx                (one band wrapping the 5 Lumera sub-sections)
      LumeraIntro
      LumeraWorkflow          (4-step horizontal timeline)
      LumeraGHL               (with external link to vercel site)
      LumeraOperations        (4 cards)
      LumeraResults
    Contact.tsx               (mailto, LinkedIn, Download Portfolio placeholder)
    Footer.tsx
    ImagePlaceholder.tsx      (props: label, aspectRatio; dashed beige frame)
    SectionLabel.tsx          (small uppercase tracked-out gold)
    PageNumber.tsx            (e.g. "01 / 12" in section corner)
    StatBlock.tsx             (large editorial numeral + thin divider + caption)
    ExternalLink.tsx          (text + arrow icon, target=_blank, rel=noopener)
```

### Section rhythm (alternating dark/light)

1. Hero — chocolate bg, pale-yellow headline, gold sublabel, photo placeholder right.
2. What I Do — split: dark-brown service list left, cream intro right.
3. Skills & Tools — cream bg, two columns.
4. Selected Projects — chocolate bg, 5 cards.
5. La Venné — cream.
6. De Cocatris — chocolate.
7. The Village — cream.
8. Aura Energy Crystals — chocolate (with cream image insets — Aura visuals as accents only).
9. **Lumera Case Study band** — chocolate wrapper with cream insets for sub-sections; single `#lumera` anchor at the top, internal sub-headings for Workflow / GHL / Operations / Results.
10. Contact — chocolate, pale-yellow headline, gold labels, contact rows + 3 buttons.
11. Footer — soft-black, small print.

### Stats presentation

Editorial numerals: very large display-serif number (Fraunces, ~6rem), thin gold hairline below, small uppercase caption. Rows separated by hairline beige dividers. No card chrome. Applied to: La Venné (4 stats), De Cocatris (4 stats), Lumera GHL (4 stats), Lumera Results (4 stats).

### Image placeholders

Reusable `<ImagePlaceholder label aspect />` component:

- Dashed 1.5px `#E8D7B8` border, `#FFF9EF` fill.
- Centered label, e.g. "Replace: La Venné Instagram feed (4:5)".
- Aspect ratios chosen per slot to match PDF (square for IG, 4:5 for portrait posts, 16:9 for screenshots, 3:4 for menus).

### Navigation

- Sticky top bar: name left, links right (About, Skills, Projects, Lumera Case Study, Contact).
- Smooth-scroll to `#about`, `#skills`, `#projects`, `#lumera`, `#contact`.
- Under `md`: collapses into Sheet (shadcn) hamburger.
- Subtle backdrop blur + bottom hairline once scrolled.

### Contact section

- Mailto on Email Me → `corpuzstephanieanne.va@gmail.com`.
- LinkedIn button → `https://www.linkedin.com/in/CorpuzStephanieAnne` (new tab).
- Download Portfolio button: static `<a download href="/portfolio.pdf">` placeholder; visually present, labeled "Download Portfolio". Comment in code marking where to drop the real PDF into `public/portfolio.pdf` later.
- No form. Contact rows: Name / Role / Email / Phone / LinkedIn / Website (website left as "Coming soon" placeholder).

### Motion

Light only: fade-up on section enter (CSS, IntersectionObserver), subtle translateY hover lift on project cards. No parallax.

### Responsiveness

- Mobile-first. All split layouts stack under `md`.
- Hero stacks: copy → image placeholder.
- Project image grids: 1 col → 2 cols → asymmetric layouts at `lg`.
- Use `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `shrink-0` for nav/header rows so nothing clips.

### Out of scope (explicit)

No backend, no DB, no auth, no API, no CMS, no payments, no analytics, no working forms, no fake dashboards.

### Acceptance check

- Every section from the brief is present with verbatim copy.
- All anchors scroll cleanly from the sticky nav.
- Palette and typography visibly match the PDF.
- Image placeholders are clearly labeled.
- Mailto, LinkedIn, and Download Portfolio buttons render and behave statically.
- Mobile/tablet/desktop layouts all hold together.

Approve to switch to build mode and I'll implement.
