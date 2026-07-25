# Chromachemie — new website (Laburnum)

A ground-up rebuild of chromachemie.co.in in **Next.js 14 + TypeScript + Tailwind CSS**, with
**React Three Fiber** for the interactive 3D molecule. Replaces the legacy ASP.NET Web Forms site.

> Current status: **Homepage Hero proof-of-concept.** Aesthetic — light, airy, glassmorphism /
> translucent "lab-glass", ice-blue accent, cinematic motion. See `DESIGN_NOTES.md`.

## Tech
- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS 3 (design tokens in `tailwind.config.ts`)
- React Three Fiber + drei (procedural glass molecule — no paid assets)
- Framer Motion (reveal/motion) · Lenis (smooth scroll)
- Geist font (self-hosted; no external font network call)

## Local dev
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build      # outputs .next/standalone (host-agnostic)
npm start
```

## Deploy

### Vercel (preview / review)
Import the repo in Vercel — it auto-detects Next.js. Every push gets a preview URL.

### Azure (final hosting)
The app is **host-agnostic** via `output: 'standalone'` + the included `Dockerfile`:
- **Azure Container Apps / App Service (container):** build and push the Docker image, deploy.
- **Azure Static Web Apps:** point at the repo; select the Next.js preset.

Set env vars (see `.env.example`) in the platform's configuration, not in code.

## Env
Copy `.env.example` → `.env.local`. Nothing secret is required for the Hero POC.

## Structure
```
app/            App Router (layout, page, globals.css)
components/     Header, Hero, Molecule (R3F), SmoothScroll (Lenis)
tailwind.config.ts   Design tokens (colors, fonts)
Dockerfile      Azure-portable container build
```
