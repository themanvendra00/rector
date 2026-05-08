# Rector Hub — Design specification (Stitch-aligned)

Source: Google Stitch project **Rector Hub**. Use this when Stitch MCP is not connected.

## Brand

- **Name:** Rector Hub
- **Audience:** IT professionals, engineers, continuous learners
- **Tone:** Clear, trustworthy, modern technical

## Color tokens

| Token | Hex | Usage |
|-------|-----|--------|
| `surface` | `#f4f6fb` | Page background |
| `surface-elevated` | `#ffffff` | Cards, header |
| `text-primary` | `#0c1222` | Headings, body |
| `text-secondary` | `#5c6578` | Supporting text |
| `text-muted` | `#8b93a7` | Meta, captions |
| `accent` | `#3d5af1` | Primary actions, links |
| `accent-hover` | `#2d49d8` | Hover states |
| `accent-soft` | `#e8ecff` | Badges, chips |
| `border` | `#e4e8f0` | Dividers, card borders |
| `success` | `#0d9668` | Positive labels |

## Typography

- **Display / H1:** Strong sans, tight tracking, ~clamp(2rem, 4vw, 3.25rem)
- **H2:** ~1.5–1.875rem
- **H3:** ~1.125–1.25rem
- **Body:** 1rem, line-height 1.6
- **UI / buttons:** 0.875rem semibold, uppercase optional for small CTAs

Fonts (web): **DM Sans** (400, 500, 600, 700), **JetBrains Mono** (500) — code tags / badges only.

## Spacing & radius

- **Section padding vertical:** 4rem (mobile) → 6rem (desktop)
- **Container:** max-width `72rem` (1152px), horizontal padding `1.25rem` → `2rem`
- **Card radius:** `1rem` (16px)
- **Button radius:** `0.5rem` (8px) pill optional for secondary

## Breakpoints (Tailwind defaults)

- `sm`: 640px  
- `md`: 768px  
- `lg`: 1024px  
- `xl`: 1280px  

## Page structure — Home

1. **Header:** Logo, nav (Resources, Paths, Community), primary CTA “Get started”
2. **Hero:** H1 value prop, supporting line, primary + secondary CTA, abstract gradient/visual (no heavy LCP image required)
3. **Featured resources:** Grid of cards (title, category, short description, link)
4. **Learning paths:** Horizontal cards or 2-column feature list with icon
5. **Social proof / stats:** Optional numbers (learners, resources)
6. **Footer:** Logo blurb, link columns, copyright

## Accessibility

- Focus rings: 2px `accent` outline offset 2px
- Contrast: text on white ≥ 4.5:1 for body
- `prefers-reduced-motion`: reduce transitions

## Assets

- Prefer SVG icons inline or small sprite; hero uses CSS gradient mesh to avoid large images.
