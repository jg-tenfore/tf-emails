# Unlayer conversion layer

Turns the Storybook emails (React + Tailwind, browser-only) into
**[Unlayer Elements](https://docs.unlayer.com/elements)** so developers can copy
production-ready output straight from Storybook, and so every Marketing Buck
email can be exported for the Unlayer editor / sending engine.

For each email this produces three things, surfaced in a Storybook **"Unlayer"
panel** (and on disk via the export script):

| Output | What it's for |
| --- | --- |
| **Elements TSX** | The React source — copy the component into the app |
| **HTML** | Email-client-safe markup (tables + inline styles) for sending |
| **Design JSON** | Loads into the Unlayer editor via `loadDesign(json)` |

## Why a rewrite (not an HTML scrape)

The Storybook emails use Tailwind utility classes, flexbox, and `div` layout —
great in a browser, but not email-safe and nothing like Unlayer's format.
Unlayer Elements re-expresses the same content as table-based rows/columns with
inline styles. Because it's also React, it's a near 1:1 port of the original
component tree. **The port is a manual rewrite** — but every Marketing Buck email
is built from the same ~10 shared components, so once each has an Unlayer block
(below), converting a new email is fast assembly.

## Layout

```
src/unlayer/
  theme.ts          Hex palette + content width (email-safe equivalents of the Tailwind tokens)
  content.ts        Self-contained, node-safe data (course, brand, hero/logo URLs, merge tags)
  render.ts         renderUnlayer() + unlayerHandoff() (the parameters.unlayer payload)
  blocks/           Reusable Unlayer blocks — the "component library"
    header.tsx        ← JarretteHeader        cta.tsx          ← CTAButton
    hero.tsx          ← EmailHero             text-alerts.tsx  ← TextAlertsOptIn
    feature-list.tsx  ← FeatureList           brand-strip.tsx  ← BrandStrip
    footer.tsx        ← JarretteFooter
src/emails/marketing-buck/<Name>/
  <Name>.tsx          Tailwind email (Storybook source) — unchanged
  <Name>.unlayer.tsx  Unlayer Elements version  ← the handoff
  <Name>.stories.tsx  story + parameters.unlayer (the panel reads this)
.storybook/
  manager.tsx         Registers the "Unlayer" panel
  unlayer-panel.tsx   The panel UI (Preview / TSX / HTML / JSON tabs, each copyable)
scripts/
  gen-email.mjs       npm run gen:email -- "Name"   scaffold a new email (both versions + story)
  export-unlayer.mts  npm run export:unlayer        render all to dist/unlayer/*.{html,json,txt}
  check-unlayer.mjs   npm run check:unlayer         list Marketing Buck emails missing .unlayer.tsx
```

## Day-to-day

**See / copy the code:** `npm run storybook`, open a Marketing Buck email, and use
the **Unlayer** panel at the bottom. Tabs: live Preview, Elements TSX, HTML,
Design JSON — each with a copy button. Always in sync (rendered at runtime).

**Export for the backend / editor:** `npm run export:unlayer` → `dist/unlayer/`.
Set `IMAGE_BASE_URL` to your production CDN first (see `content.ts`).

**Add a new Marketing Buck email:** `npm run gen:email -- "Weekend Warm-Up"`,
then build out the Tailwind layout and mirror it in the `.unlayer.tsx` using the
shared blocks. The story + panel are already wired. (Or let the
`unlayerconvert` Claude skill do the Unlayer mirror for you.)

## Two rules that make Unlayer Elements work

1. **`renderToJson` is a static tree walk** — `<Email>`'s direct children must be
   literal `<Row>`s; component wrappers (`<Header/>`) are skipped. So blocks are
   **called as functions** (`Header()`, `...Hero({...})`) and flattened into the
   `Email` children array. `renderToHtml` doesn't care.
2. **Props are flat semantic props** (`backgroundColor`, `fontSize`, `href`,
   `padding`, `textAlign`…). The one gotcha: `Image` `src` is the object form
   `src={{ url, width }}`. Use `values={{…}}` as an escape hatch.

## Caveats before production

- **All images need absolute hosted URLs.** Defaults point at the deployed
  Storybook; move to a permanent CDN via `IMAGE_BASE_URL`.
- **Club logo** has no stable URL yet (placeholder in `content.ts`) — host a PNG/JPG (not SVG).
- **Feature icons** default to emoji; pass `iconUrl` (hosted PNG) for brand fidelity.
- **Brand logos are `.webp`** — Outlook can't render them; host PNG fallbacks.
- **Keep `content.ts` in sync** with `src/lib/{scenario,brand,marketing-images}.ts`
  (it's a deliberate node-safe copy — see the header comment there).
