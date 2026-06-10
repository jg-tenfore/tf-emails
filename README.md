# Tenfore Golf — Email Style Guide

A catalog of Tenfore Golf transactional and marketing emails, built from a shared
set of [Untitled UI](https://www.untitledui.com/react) React components and
documented in Storybook.

- **Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Untitled UI · Storybook 10
- **Live catalog:** https://jg-tenfore.github.io/tf-emails/ (after first deploy)

## Getting started

```bash
npm install
npm run storybook     # browse every email + component at http://localhost:6006
npm run dev           # the lightweight Vite landing page
npm run build         # typecheck + production build of the landing app
npm run build-storybook  # build the static catalog into ./storybook-static
```

## Project structure

```
src/
  components/
    base/        # Untitled UI components (added via the Untitled UI CLI — don't hand-edit)
    email/       # shared email primitives, each with a Storybook story
      email-shell.tsx     EmailHeader  EmailFooter  EmailHero
      email-section.tsx   CTAButton    Divider      DetailRow   BookingCard
  emails/        # one folder per email: the composition + its story
    Welcome/  TeeTimeConfirmation/  TeeTimeReminder/  Receipt/  Newsletter/
  lib/brand.ts   # Tenfore Golf name, address, social, contact — single source of truth
  styles/        # Untitled UI theme tokens (brand palette overridden to golf green)
```

Storybook is organised into **Email Components** (the reusable parts) and
**Emails** (full compositions). Each email exposes props/controls so you can
preview different content (names, bookings, forecasts, line items).

## Adding an Untitled UI component

```bash
npx untitledui@latest add <component-name>      # e.g. avatar, input, checkbox
```

Components land in `src/components/base/` and import via the `@/` alias.

## Adding a new email

1. Create `src/emails/<Name>/<Name>.tsx` composing primitives from
   `@/components/email`.
2. Wrap the body in `<EmailShell>` and reuse `EmailHeader` / `EmailFooter`.
3. Add `src/emails/<Name>/<Name>.stories.tsx` with `title: "Emails/<Name>"`.

## Brand tokens

The brand color scale lives in `src/styles/theme.css` (`--color-brand-*`),
overridden from the Untitled UI default to a Tenfore forest green. Change those
values to re-theme every email at once.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-storybook.yml`, which builds
Storybook and publishes it to GitHub Pages. Enable it once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Note on real email sending

These emails use Untitled UI web components for a faithful, on-brand preview.
They are a **design style guide**, not pre-rendered email HTML — modern email
clients (Outlook in particular) need table-based, inline-styled markup. If/when
you want to actually send these, port the compositions to
[React Email](https://react.email) using the same brand tokens.
