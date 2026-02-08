## Mouin Boubakri — Portfolio 2025

A modern portfolio built with:
- Next.js (App Router, React 18, TypeScript)
- Tailwind CSS + shadcn/ui components
- Framer Motion (subtle animations)
- Self‑hosted Inter Variable font

Live demo: [https://www.mouinboubakri.me/]

### Project structure
- `app/` — routes and pages (home, projects, about, resume, contact); SEO routes (`robots.ts`, `sitemap.ts`, `manifest.ts`)
- `components/` — UI components and layout (navbar, footer, cards, etc.)
- `lib/` — SEO config, types, and data (`lib/data`)
- `public/` — static assets (icons)
```

### Development
```
npm install
npm run dev
```

### Build
```
npm run build

```

### Maintenance
- Images are optimized via Next Image with remotePatterns for Supabase URLs
- OG/Twitter images use a static `icon.svg`
- Structured data is embedded for Person and WebSite
- Sitemap and robots are generated from routes and data

### License
Personal portfolio — all rights reserved.
