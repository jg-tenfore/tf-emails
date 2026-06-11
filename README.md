# TenFore Golf — Email Design System

A living Storybook of every transactional and lifecycle email the **TenFore Golf**
platform sends — built from a shared library of [Untitled UI](https://www.untitledui.com/react)
React components and previewed across their real-world edge cases.

- **Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Untitled UI · Storybook 10
- **Live catalog:** https://jg-tenfore.github.io/tf-emails/
- **48 email templates · 42 shared components · 2 partner venues**

## The model — platform + partners

TenFore Golf is a cloud booking platform for golf venues. The system has three
kinds of sender, and that distinction drives the branding:

- **TenFore Golf** — the platform itself (the Crane booking app, accounts, Golf Buddies)
- **Partner venues** — where you actually book: **Sagamore Spring Golf Club**
  (golf course) and **FloGolf Lounge** (indoor Golfzon simulator lounge)
- **Admin** — operator- and finance-facing internal notifications

The **header always shows a TenFore platform mark**; the **partner venue is
identified in the body** via a `VenueBadge` (logo + name + address) and/or hero
imagery with the venue logo overlaid. Header logos are never swapped per venue.

## Storybook structure

| Group | What's inside |
| --- | --- |
| **Introduction** | Overview of the system, conventions, and edge-case philosophy. |
| **TenFore Partners** | Venue directory — brand assets, venue details, general info per partner. |
| **Email Components** | The primitive library every email is built from. |
| **TenFore Golf** | Platform / app emails — Welcome, Meet Crane, Golf Buddies. |
| **Sagamore Golf Club** | Golf-course customer emails (35) across the full booking lifecycle — tee times, clinics, events, membership, gift cards, receipts, punch cards, cart-rental agreement, account. |
| **FloGolf Lounge** | Simulator-lounge customer emails (4). |
| **Admin** | Operator / internal notifications and reports (6). |

## Getting started

```bash
npm install
npm run storybook        # browse every email + component at http://localhost:6006
npm run dev              # the lightweight Vite landing page
npm run build            # typecheck + production build of the landing app
npm run build-storybook  # build the static catalog into ./storybook-static
```

## Anatomy of an email

```
EmailShell            neutral canvas + centered 600px white card + inbox preheader
  EmailHeader         TenFore mark (variant="platform" | "admin")
  Hero / StatusHero   image hero (with venue logo overlay) or text status block
  VenueBadge          which partner this is from (logo + name + address)
  EmailSection(s)     details, payment, callouts, CTAs
  EmailFooter         TenFore platform footer
```

## Edge cases are story args

One template per archetype; its variations (refund vs. none, manual vs.
auto-renew, single vs. multi-item, self vs. gift) are **Storybook stories**, not
separate files. Variation runs along clear axes: lifecycle
(confirm → modify → cancel → refund), payment state, status tone
(success/info/warning via `Callout` color), and audience.

All defaults flow from one canonical scenario in `src/lib/scenario.ts`
(+ `src/lib/flogolf.ts`); stories override simple props.

## Project structure

```
src/
  Introduction.mdx       # the overview docs page
  components/
    base/                # Untitled UI components (added via CLI — don't hand-edit)
    email/               # shared email primitives, each with a Storybook story
  emails/                # one folder per email: composition + story
    flogolf/             # FloGolf Lounge simulator emails
    tenfore/             # TenFore platform (app) emails
    <Sagamore + Admin emails>/
  foundations/           # TenFore Partners pages (venue profiles)
  lib/
    brand.ts             # TenFore platform identity
    scenario.ts          # canonical Sagamore scenario + entities
    flogolf.ts           # FloGolf Lounge brand + simulator scenario
    assets.ts            # registered brand assets
  styles/                # Untitled UI theme tokens (brand palette → golf green)
```

## Adding a partner venue

1. Drop the venue's assets in `src/assets/brand/`.
2. Add `src/lib/<partner>.ts` (brand details + scenario data).
3. Copy a profile under `src/foundations/` (TenFore Partners) and an email
   folder. Header/footer chrome stays the same; only the `VenueBadge` and hero
   imagery change.

## Adding a new email

1. Create `src/emails/<Name>/<Name>.tsx` composing primitives from `@/components/email`.
2. Default its props from `@/lib/scenario`; wrap the body in `<EmailShell>`.
3. Add `src/emails/<Name>/<Name>.stories.tsx`, titling it under the right group,
   and express edge cases as extra story exports.

## Brand tokens

The brand color scale lives in `src/styles/theme.css` (`--color-brand-*`),
overridden from the Untitled UI default to a TenFore forest green. Change those
values to re-theme every email at once.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-storybook.yml`, which builds
Storybook and publishes it to GitHub Pages.

## Note on real email sending

These emails use Untitled UI web components for a faithful, on-brand preview.
They are a **design system**, not pre-rendered email HTML — modern email clients
(Outlook in particular) need table-based, inline-styled markup. To actually send
these, port the compositions to [React Email](https://react.email) using the
same brand tokens.

See [CHANGELOG.md](./CHANGELOG.md) for the full history.
