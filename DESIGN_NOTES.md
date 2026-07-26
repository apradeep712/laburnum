# Chromachemie — Design & Direction Notes

Living record of the design language so it survives context resets. Creative resource owns the
final visual language; this repo owns the **design engineering** (motion, 3D, data-viz, perf, a11y).

## Aesthetic (locked via discovery)
- **Light, airy, minimal** — NOT dark. Glassmorphism + **translucent, futuristic "lab-glass"**
  elements (frosted glass, transparency, smooth, clean).
- **Accent:** ice-blue (`ice.500 #2e93da`, tints `ice.300 #94c8f2`).
- **Type:** neutral premium grotesk — **Geist Sans** (self-hosted; Azure-safe), **Geist Mono**
  for data tokens (CAS, catalog #). Big, tight-tracked display; generous whitespace.
- **Motion:** cinematic but purposeful — Lenis smooth scroll, Framer Motion reveals, pinned
  scroll-snap for section transitions. Always `prefers-reduced-motion` safe.

## Reference influences
- **POK Protein** — 3D molecule on a grid, kinetic headline, service tags anchored (one of several).
- **Tresmares** — pinned "Our values" scroll list (active item bold, background + copy swap per
  item), huge neutral grotesk, full-bleed image + centered overlay, tiny accent dot, footnote
  captions. → pattern reserved for the **4-pillar scroll story** section.
- Glassy-sphere infographic mood (translucency, gradients) — vibe only.
- **Hanergy** — GIANT full-bleed cinematic background (image/video), VERY few words, clean.
  Adopted for the hero. Client dislikes "AI slop" → use real filmed footage / original code, never
  generic AI-generated imagery.
- **Adwise** — two-tone highlight headline (key words solid, rest muted), full-bleed texture band
  between sections, glass stat cards (7+/140+/98%), GIANT wordmark footer, `// label` eyebrows,
  newsletter row with arrow. → adopt two-tone headline + giant footer wordmark + `//` labels.

## Homepage plan
1. **Hero** (built, v2) — **full-bleed real stock VIDEO** (Hanergy pattern): filmed blue-ink-in-a-
   glass clip (Pexels, free/commercial, compressed 83MB→2MB, `public/hero.mp4` + poster).
   Ultra-minimal white text: `//` eyebrow, "The Standard for Standards", one line, one CTA.
   Reduced-motion → shows poster still. Molecule (`components/Molecule.tsx`) reserved for a later
   section. Swap in Chromachemie's own lab footage at `public/hero.mp4` when available.
2. 4-pillar scroll story (pinned scroll-snap, Tresmares pattern).
3. Trust counters (30+ yrs · 3,500+ USP standards · 90% of Indian pharma).
4. Product categories — cinematic scroll panels (8 categories).
5. Testimonials (17 real pharma clients) + CTA band.

## Constraints
- **No paid AI tools / no 3D authoring** — molecules from free code + public data (PubChem/PDB);
  chromatograms from SVG/canvas; backgrounds from CSS/shaders.
- **Quote-driven B2B** — no e-commerce/webshop cues (no wishlist/qty/stock-in-red).
- **Azure handoff** — host-agnostic (`output: standalone` + Dockerfile); DNS at GoDaddy;
  build on Vercel preview, hand code to client's team for Azure deploy.

## Real facts to use (from site audit)
30+ yrs · 25,000+ customers · 3,500+ USP standards · supplies ~90% of Indian pharma · 180+ clients ·
first in India to introduce EP/BP/US pharmacopeial standards (1990s) · ISO 9001:2015 ·
offices: Bengaluru (HQ), Mumbai, Hyderabad, Goa, Ahmedabad, Dubai · exports to BD/LK/PK/MENA.
Pillars: Reference Standards (USP/EP/BP/IP/JP, ATCC, CIL) · Chromatography (Puritas™, COSMOSIL) ·
Custom Synthesis · Services (analytical/consultancy).

## Saved components (future use — NOT wired in yet)
- **ScrollExpandMedia** (`components/blocks/scroll-expansion-hero.tsx`) — scroll-driven hero where
  media expands to full-bleed then reveals content. Source: 21st.dev (@arunachalam / scroll-
  expansion-hero). Before use: gate scroll-jack behind reduced-motion, resolve conflict with Lenis,
  re-skin to ice-blue tokens, add next.config remotePatterns if remote media. Run `/impeccable polish`.
- **Globe → Map transform** (v0 template `99MAOQptgL3`, d3/dataviz) — candidate for a "Global reach"
  section (India/BD/PK/MENA/Dubai). Community template, license unclear → prefer building bespoke
  with `cobe` + D3/SVG in our aesthetic.

## Using v0 / 21st.dev components (how-to)
- v0 blocks install via the shadcn registry: `npx shadcn@latest add "https://v0.app/chat/b/<id>"`
  (get the exact URL from the template's "Open in v0" → "Add to Codebase"). Needs `npx shadcn init`
  first (creates components.json, `cn()`, `@/components/ui`).
- Always: check the license (community templates often have none), re-skin to our tokens, and run
  the Impeccable detector (`npx impeccable detect`) before shipping.
