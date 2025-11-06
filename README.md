## Mouin Boubakri — Portfolio 2025

A modern portfolio built with:
- Next.js (App Router, React 18, TypeScript)
- Tailwind CSS + shadcn/ui components
- Framer Motion (subtle animations)
- Self‑hosted Inter Variable font

Live demo: add after Vercel deploy

### Project structure
- `app/` — routes and pages (home, projects, about, resume, contact); SEO routes (`robots.ts`, `sitemap.ts`, `manifest.ts`)
- `components/` — UI components and layout (navbar, footer, cards, etc.)
- `lib/` — SEO config, types, and data (`lib/data`)
- `public/` — static assets (icons)

### Environment variables
Create `.env.local` at the project root:

```
NEXT_PUBLIC_SITE_URL=https://www.mouinboubakri.tech
# Optional — enable contact form submissions via Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
# Optional — search engine verifications
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
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

### Deploy (Vercel)
1) Push to GitHub (branch: `main`)
2) Import the repo in Vercel → add the environment variables above
3) Deploy; add `www.mouinboubakri.tech` in Vercel → set DNS CNAME to `cname.vercel-dns.com`

### Single‑branch policy
This repo uses a single branch: `main`.
- Create commits directly on `main`.
- No feature branches, PRs, or merges.
- If remote becomes divergent (e.g., edits on GitHub UI), rebase or merge locally, then push:
	- Rebase example: `git pull --rebase origin main && git push`

### Maintenance
- Images are optimized via Next Image with remotePatterns for Supabase URLs
- OG/Twitter images use a static `icon.svg`
- Structured data is embedded for Person and WebSite
- Sitemap and robots are generated from routes and data

### License
Personal portfolio — all rights reserved.
