# Rector

**Rector** is a curated resource hub for IT professionals and learners. It brings together useful websites and tools, production-minded Git repositories, and free learning collections in one place—so you spend less time searching and more time building.

## What is Rector?

Rector is a web app that surfaces hand-picked links and context for people who build or operate software. The home page is organized into sections for **sites & tools**, **repositories**, and **free collections**, with short framing notes between sections. The goal is signal over noise: fewer tabs, clearer next steps, and resources that hold up in real projects—not just tutorials.

## Why it’s useful

### For IT professionals

- **Faster discovery** — Curated starting points for tools, docs, and patterns you actually use in production.
- **Quality bar** — Emphasis on repositories and materials that reflect serious engineering (structure, maintenance, clarity), not one-off demos.
- **Single bookmark** — One place to return to when onboarding teammates, researching a stack, or refreshing your tool belt.

### For learners

- **Structured exposure** — You see categories of resources professionals rely on, not just random search results.
- **Free-first collections** — Access to legitimate free learning paths and references alongside “what pros use.”
- **Bridge to practice** — Links to real-world repos and utilities help you connect concepts to how teams ship software.

## Tech stack

| Layer | Technology |
|--------|------------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Linting | [ESLint](https://eslint.org) with `eslint-config-next` |
| Fonts | [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (via `next/font`) |

SEO and sharing are handled with metadata, `sitemap.ts`, `robots.ts`, and JSON-LD in the app. Images use AVIF/WebP where supported (`next.config.ts`).

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # run production server (after build)
npm run lint    # ESLint
```

## Environment variables

Optional variables (see `lib/site.ts`):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and structured data |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shown in the contact section when set |
| `VERCEL_URL` | Used automatically on Vercel when `NEXT_PUBLIC_SITE_URL` is unset |

## Deploy

You can deploy on [Vercel](https://vercel.com) or any platform that supports Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
