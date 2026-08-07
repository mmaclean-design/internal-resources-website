# Internal Resources Website

The Design Lab's internal resources site — a React + Vite single-page app covering onboarding, IT support, ops requests, brand guidelines, and FAQs.

Exported from [Figma Make](https://www.figma.com/make/ZIqds33wdBmDMz0s5zOOXM/Internal-Resources-Website).

**Live:** https://mmaclean-design.github.io/internal-resources-website/

## Deployment

Pushes to `master` build and deploy automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The build sets `FIGMA_PUBLIC_URL=/internal-resources-website` so asset paths and the router's `basename` (`src/routes.ts`) resolve correctly under the Pages subpath, and `dist/index.html` is copied to `dist/404.html` so deep links (e.g. `/faqs`) work on refresh.

## Fonts

- **Headers:** Refrigerator Deluxe (Extra Bold), served via [Adobe Fonts](https://fonts.adobe.com/fonts/refrigerator-deluxe) — the kit link lives in `index.html`, with weight-mapped `@font-face` aliases in `src/index.css`.
- **Body:** Source Sans Pro, loaded free via Google Fonts.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/resources` | Resources |
| `/brand-guidelines` | Brand Guidelines |
| `/it-resources` | IT Resources |
| `/contact` | Contact |
| `/ops-request` | Ops Request |
| `/faqs` | FAQs |

## Stack

- React 19 + React Router
- Vite 8 + TypeScript
- Tailwind CSS 4

## Getting started

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm preview
```
