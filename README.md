# Rector

**Rector** is a curated resource hub for IT professionals and learners. It brings together useful websites and tools, production-minded Git repositories, and free learning collections in one place—so you spend less time searching and more time building.

## What is Rector?

Rector is a web app that surfaces hand-picked links and context for people who build or operate software. The home page is organized into sections for **sites & tools**, **repositories**, and **free collections**, with short framing notes between sections. The goal is signal over noise: fewer tabs, clearer next steps, and resources that hold up in real projects—not just tutorials.

<img width="1901" height="919" alt="image" src="https://github.com/user-attachments/assets/3080afe8-3901-4605-b135-be31f8225124" />

## Why it’s useful

### For IT professionals

- **Faster discovery** — Curated starting points for tools, docs, and patterns you actually use in production.
- **Quality bar** — Emphasis on repositories and materials that reflect serious engineering (structure, maintenance, clarity), not one-off demos.
- **Single bookmark** — One place to return to when onboarding teammates, researching a stack, or refreshing your tool belt.

<img width="1900" height="960" alt="image" src="https://github.com/user-attachments/assets/cf9660a7-69c9-438c-9a4e-4811c85d8abd" />

### For learners

- **Structured exposure** — You see categories of resources professionals rely on, not just random search results.
- **Free-first collections** — Access to legitimate free learning paths and references alongside “what pros use.”
- **Bridge to practice** — Links to real-world repos and utilities help you connect concepts to how teams ship software.

<img width="1900" height="996" alt="image" src="https://github.com/user-attachments/assets/5619c7e2-214f-418d-bd3e-c2a5088d6b90" />

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

<img width="1900" height="222" alt="image" src="https://github.com/user-attachments/assets/96afeca6-756b-42a7-bf93-ab2c4c7e81ad" />
<img width="1901" height="409" alt="image" src="https://github.com/user-attachments/assets/7563f1dc-5bb4-4a0c-ac6d-aba096a1086d" />


