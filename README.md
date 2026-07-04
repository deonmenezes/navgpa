# NAV Global Project Advisory (NavGPA)

Marketing website for **NAV Global Project Advisory** — a USA-based construction
and commercial advisory firm. Quantity surveying, cost management, BIM & 5D,
contract administration and project controls, delivered globally.

> Building Confidence. Delivering Value. — *Advise · Manage · Deliver Value*

## Tech stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- Deployed on **Vercel**

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx      # fonts, SEO metadata, OpenGraph
    page.tsx        # section assembly + JSON-LD
    globals.css     # design tokens & utilities (Tailwind v4 @theme)
    icon.svg        # favicon (brand emblem)
  components/        # Header, Hero, ValueProps, Approach, Services,
                     # About, TrackRecord, Sectors, Legacy, Contact, Footer
  lib/
    content.ts       # single source of truth for all copy & data
public/
  logo-navgpa.jpg
  brand-overview.jpg
  vasudeva-smart-contracts-construction-ice.pdf
```

## Editing content

All copy, services, projects and contact details live in
[`src/lib/content.ts`](src/lib/content.ts) — edit there, no component changes needed.

## Contact form

The enquiry form composes a `mailto:` to `n.n.vasudeva@navgpa.com`. To capture
submissions server-side later, swap the handler in
`src/components/ContactForm.tsx` for a form endpoint (Formspree, Web3Forms,
or a Next.js route handler).

---

© 2026 NAV Global Project Advisory — the evolution of Nav Projects Support Ltd.
