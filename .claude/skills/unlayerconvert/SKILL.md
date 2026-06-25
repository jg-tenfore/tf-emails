---
name: unlayerconvert
description: Convert a Marketing Buck email (React + Tailwind Storybook source) into its Unlayer Elements version and wire the Storybook "unLayer Code" handoff panel. Use when a new email is added under src/emails/marketing-buck, when `npm run check:unlayer` reports a missing .unlayer.tsx, or when asked to "unlayerconvert" / "convert/port/unlayer-ify a Marketing Buck email".
---

# Convert a Marketing Buck email to Unlayer

Goal: for one Marketing Buck email, produce `<Name>.unlayer.tsx` next to its
`<Name>.tsx`, wire `parameters.unlayer` in the story, and verify it renders.

## 0. Pick the target
- If given a name, use it. Otherwise run `npm run check:unlayer` and convert the
  first missing email (or ask which one).
- Folder: `src/emails/marketing-buck/<Name>/`. The Tailwind source is `<Name>.tsx`.

## 1. Read the source and the toolkit
- Read `src/emails/marketing-buck/<Name>/<Name>.tsx` — note its props
  (e.g. `firstName`, `audience`, `bookingUrl`) and which shared components it uses.
- Read `src/unlayer/blocks/index.ts`, `src/unlayer/theme.ts`, `src/unlayer/content.ts`.
- Read `WelcomeToTheClub.unlayer.tsx` as the reference implementation.

## 2. Map components → blocks
The Tailwind email is built from shared components in `src/components/email`.
Map each to an Unlayer block (extend a block only if the email needs something new):

| Source component | Unlayer block / element |
| --- | --- |
| `EmailShell` | `<Email backgroundColor contentWidth previewText>` (preheader → previewText) |
| `JarretteHeader` | `Header()` |
| `EmailHero` | `...Hero({ imageUrl, imageAlt, eyebrow, headline })` |
| `EmailSection` + `<p>` | a literal `<Row><Column><Paragraph/></Column></Row>` |
| `FeatureList` | `...FeatureList({ items })` (icons: `emoji`, or hosted `iconUrl`) |
| `CTAButton` | `Cta({ href, label })` |
| `TextAlertsOptIn` | `TextAlerts({ href, prompt, label })` |
| `BrandStrip` | `...BrandStrip({ label })` |
| `Divider` | `<Row><Column><Divider/></Column></Row>` |
| `JarretteFooter` | `...Footer({ reason })` |

Content (course/brand/hero URLs) comes from `@/unlayer/content`, colors from
`@/unlayer/theme`. Use the `{{merge_tag}}` from `content.ts` for per-recipient
fields (default `firstName` to `mergeTags.firstName`).

## 3. Write `<Name>.unlayer.tsx`
Mirror the source layout. Critical rules (see `src/unlayer/README.md`):
- Export a function named `<Name>Unlayer` that **returns a literal `<Email>`** and
  takes an optional props object (so it can be called with `{}`).
- `<Email>`'s children must be **literal `<Row>`s**. Call blocks as functions and
  flatten: single-row blocks (`Header()`, `Cta(...)`) go in directly; multi-row
  blocks (`Hero`, `FeatureList`, `BrandStrip`, `Footer`) are spread with `...`.
- `Image` uses the object form: `src={{ url, width }}`.
- If a block doesn't exist for some bespoke section, build literal Rows/Columns
  with `Paragraph`/`Heading`/`Image`/`Button`/`Divider`, or add a new reusable
  block under `src/unlayer/blocks/` if it'll recur.

## 4. Wire the story
If `<Name>.stories.tsx` lacks `parameters.unlayer`, add to each story:
```ts
import { <Name>Unlayer } from "./<Name>.unlayer";
import unlayerSource from "./<Name>.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";
// in the story (factory form so a render error can't break the main Canvas):
parameters: { unlayer: unlayerHandoffSafe(() => <Name>Unlayer({ /* same args */ }), unlayerSource) }
```
(The generator `npm run gen:email` already writes this for new emails.)

## 5. Verify
- `npm run export:unlayer` — must render the new email with no error and non-trivial
  html/json byte counts.
- `npx tsc -b` — must stay at 0 errors.
- `npm run check:unlayer` — the email should no longer be listed.
- Report the byte counts and confirm the email appears in `dist/unlayer/`.

## Rule: flatten complex layouts to static graphics

Some layouts can't be faithfully (or safely) reproduced with Unlayer's native
rows/columns. **When a layout element is "complex", pre-render it to a single
flattened PNG via Playwright and drop it in as one `<img>`** instead of fighting
Unlayer. A layout is complex when any of these hold:

- **Overlays / compositing** — text or a logo on top of an image (email has no
  absolute positioning). e.g. the hero club-logo → baked into the photo.
- **Mixed-width multi-item wraps** — a logo wall / brand strip where items have
  different widths and wrap across rows. e.g. the "Shop by Brand" grid.
- **Pixel-precise small UI** — icon chips, badges, barcodes (centering and
  rounded boxes don't survive email CSS). e.g. the FeatureList icon chips.
- **Unsafe source formats** — `.webp` logos or inline SVG (Outlook strips them).
  Rasterizing to PNG fixes deliverability for free.

Keep **live** anything that's dynamic (headlines, per-recipient text, prices,
CTAs, labels) — flatten only the static visual. The existing generators are the
pattern to copy (all read images over the running Storybook, write to
`marketing-buck/...`, and are referenced from `src/unlayer/content.ts`):

- `scripts/gen-unlayer-icon-pngs.mjs` — FeatureList icon chips (40×40 PNG).
- `scripts/gen-hero-composites.mjs` — hero photo + club logo baked in.
- `scripts/gen-brand-strip.mjs` — the flattened brand logo grid.
- `scripts/shot.mjs` — screenshot a rendered `dist/unlayer/*.html` to eyeball it.

To add a new flattened graphic: write a small Playwright script modeled on the
above, host the PNG under `marketing-buck/`, expose its URL from `content.ts`,
and reference it from the block as a single `RawHtml`/`<img>`.

## Notes
- The conversion is a faithful rewrite, not auto-translation — match copy, order,
  colors, and links to the source. Flag (don't silently drop) anything email-unsafe
  (absolute-positioned overlays, SVG icons, webp logos) per the README caveats —
  or, better, **flatten it** per the rule above.
- Full-bleed / flush blocks (hero, header divider, flattened graphics) use the
  `RawHtml` block (a zero-`containerPadding` Paragraph) so they sit edge-to-edge.
