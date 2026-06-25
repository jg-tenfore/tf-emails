# tf-emails — project guide for Claude

Storybook component library of transactional + marketing emails for TenFore Golf
(a golf-course SaaS). Emails are **React + Tailwind** components under
`src/emails/**`, composed from shared pieces in `src/components/email/**`, with
data in `src/lib/{brand,scenario,marketing-images}.ts`. Run it with
`npm run storybook`.

Marketing emails live under `src/emails/marketing-buck/<Name>/`:
- `<Name>.tsx` — the Tailwind email (what renders in the Storybook Canvas)
- `<Name>.stories.tsx` — the story
- `<Name>.unlayer.tsx` — the **Unlayer** version (see below), if converted

---

## The Unlayer conversion system

These browser-only Tailwind emails are **not** email-safe and aren't in Unlayer's
format. The `src/unlayer/` layer re-expresses each email with **Unlayer Elements**
(`@unlayer/react-elements`, a code-first React library) so we can produce, for
each email, three copyable artifacts surfaced in a Storybook panel:

- **Elements TSX** — the React source
- **HTML** — email-client-safe markup (tables + inline styles) for sending
- **Design JSON** — loads into the Unlayer editor via `loadDesign(json)`

This is a **manual rewrite**, not auto-translation — but every Marketing Buck
email is built from the same ~10 shared components, each ported once to a reusable
block in `src/unlayer/blocks/`, so converting a new email is fast assembly.

### Key files
- `src/unlayer/blocks/` — reusable blocks: Header, Hero, FeatureList, Cta,
  TextAlerts, BrandStrip, Footer (mirror `src/components/email/*`).
- `src/unlayer/theme.ts` — hex palette (email-safe Tailwind-token equivalents).
- `src/unlayer/content.ts` — node-safe data copy (course, brand, hosted image
  URLs, merge tags). KEEP IN SYNC with `src/lib/*` (it's a deliberate copy because
  `src/lib/scenario.ts` imports image binaries that break the Node export).
- `src/unlayer/render.ts` — `renderUnlayer()`, `unlayerHandoff()`,
  `unlayerHandoffSafe()` (factory form used by stories; catches render errors so a
  broken Unlayer render never takes down the story's main Canvas).
- `.storybook/{manager.tsx,unlayer-panel.tsx}` — the **"unLayer Code"** panel (a
  tab beside Controls/Actions/Accessibility) with Preview / Elements TSX / HTML /
  Design JSON, each copyable. Reads `parameters.unlayer` from the story.
- `.storybook/preview-head.html` — a `window.process` shim;
  `@unlayer/react-elements` has an unguarded `process.env` reference that
  otherwise throws "process is not defined" in the browser. Do not remove.
- `src/unlayer/README.md` — full mechanics + production caveats.

### Two rules that make Unlayer Elements work
1. **`renderToJson` is a static tree walk** — `<Email>`'s direct children must be
   literal `<Row>`s. So blocks are **called as functions** (`Header()`,
   `...Hero({...})`) and flattened into the `Email` children array — never used as
   `<Header/>` JSX. `renderToHtml` doesn't care.
2. **Props are flat semantic props** (`backgroundColor`, `fontSize`, `href`,
   `padding`, `textAlign`…). Exception: `Image` `src` is the object form
   `src={{ url, width }}`. Use `values={{…}}` as an escape hatch.

### Scripts
- `npm run gen:email -- "Name"` — scaffold a new email: Tailwind email + Unlayer
  stub + wired story (panel works immediately).
- `npm run export:unlayer` — render all `*.unlayer.tsx` → `dist/unlayer/*.{html,json,txt}`.
  Set `IMAGE_BASE_URL` for a production CDN.
- `npm run check:unlayer` — lists Marketing Buck emails missing an Unlayer version;
  exits 1 (CI / pre-commit guardrail).

---

## The `/unlayerconvert` action

`.claude/skills/unlayerconvert/` — invoke with `/unlayerconvert <Email Name>` (or
plain English: "unlayerconvert the Weekend Warm-Up email"). When you see a
Marketing Buck email in the Storybook environment that lacks a `<Name>.unlayer.tsx`
(or `npm run check:unlayer` flags it), this skill converts it:

1. Reads `<Name>.tsx`, maps each shared component to the matching `src/unlayer` block.
2. Writes `<Name>.unlayer.tsx` mirroring the layout (faithful rewrite — match copy,
   order, colors, links; flag anything email-unsafe).
3. Wires `parameters.unlayer = unlayerHandoffSafe(() => <Name>Unlayer(args), source)`
   into the story so the "unLayer Code" panel renders it.
4. Verifies: `npm run export:unlayer`, `npx tsc -b` (must stay 0 errors),
   `npm run check:unlayer`.

After a conversion, the "unLayer Code" tab shows the rendered Unlayer email +
copyable TSX/HTML/JSON. (Panel/manager changes need a Storybook restart; a
story-level conversion shows on refresh.)

See `docs/automation/marketing-buck-unlayer.md` for the batch prompt and CI wiring.

---

## Conventions
- Files are kebab-case; React Aria imports prefixed `Aria*` (where used).
- Marketing hero images must stay small — they render in the Canvas. Oversized
  source photos were downscaled (max ~1600px); keep new ones lean.
- Deploy: pushing to `main` auto-publishes Storybook to GitHub Pages via
  `.github/workflows/deploy-storybook.yml`.
