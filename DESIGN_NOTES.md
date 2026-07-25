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

## Homepage plan
1. **Hero** (built) — full-bleed translucent 3D glass molecule, "The Standard for Standards",
   nav-only search, "Browse Catalog" CTA, 4 pillar tags, real Chromachemie facts.
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
