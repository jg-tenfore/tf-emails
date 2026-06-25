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

## Notes
- The conversion is a faithful rewrite, not auto-translation — match copy, order,
  colors, and links to the source. Flag (don't silently drop) anything email-unsafe
  (absolute-positioned overlays, SVG icons, webp logos) per the README caveats.
