# Changelog

All notable changes to the TenFore Golf email design system are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [1.2.0] — 2026-06-11

Punch cards, a signed cart-rental agreement, a reworked Golf Buddies launch
email, a pricing-hierarchy redesign, and another component-extraction pass.

### Added

- **Sagamore Punch Cards** — a new `Sagamore Golf Club / Punch Cards` sub-group
  with **10-Round** and **5-Round** templates, each across its full lifecycle as
  stories: *Fresh*, *Partially used*, *Fully used*, and *Expiring*. The fresh
  card carries how-to-use steps; every open card shows a QR redeem code with a
  manual `XXXX-XXXX` fallback for when the scan fails.
- **`PunchCard` component** — the visual punch grid (dark-green checked slots,
  numbered unused holes, "X of N left").
- **Sagamore Cart Rental Agreement** — a signed liability receipt (terms, cart #,
  confirmation/player IDs) under `Sagamore Golf Club / Cart Rental Agreement`,
  backed by a new **`SignatureBlock`** component.
- **`PaymentMethod` component** — a card-brand icon (Visa/Mastercard/Amex/
  Discover) next to "… ending in ####", used everywhere a saved card appears.
- **More shared components** — `IconBadge` (the brand chip behind `FeatureList`
  and hero icons), `Panel`, `EmailIntro`, `SummaryStrip`, and `NumberedSteps`.
- **`EmailHeader` `bordered` prop** — opt out of the header hairline (default on)
  so an email can butt the header straight against a full-bleed hero.

### Changed

- **Golf Buddies relaunch** — the `TenFore Golf / Golf Buddies` email now leads
  with the `tf-buddies` marketing hero graphic (which taps through to the Crane
  app store), runs divider-free against the header, and ends on a "How it works"
  block.
- **Pricing hierarchy redesign** — `PaymentSummary` reworked so the **total leads
  at the top**, with an optional tax sub-line plus a "Total charged" + payment-
  method footer. Adopted across the Receipt, Tee Time Confirmation, and every
  tee-time / orders template that shows payment.
- **Red treatment for cancellations** — cancellation emails use the new `Callout`
  `error` tone and `StatusHero` `danger` tone so the impact reads at a glance.
- **Real bullets** — `Checklist` now renders true bullets with a hanging indent;
  inline bullet lists converted to use it.
- **Tee Time Reserved → Golf Group Details** — renamed, with a course-image hero.

## [1.1.0] — 2026-06-10

Refinement pass: product imagery, redeemable codes, a leaner FloGolf section,
and a real component-adoption sweep so recycled markup is actually shared.

### Added

- **Product thumbnails on receipts** — `ItemizedList` line items now take an
  optional `image`, with the two Sagamore purchase receipts (Pro Shop, Snack Bar)
  rendering real product photos. Documented as `WithImages` / `WithoutImages`
  stories.
- **`RedemptionCode` component** — a redeemable voucher/add-on rendered three
  ways: a 6-digit **PIN**, a **UPC barcode**, or a **QR code**. Used for a new
  **range-bucket add-on** on the Tee Time Confirmation (stories for all three).
- **Two Sagamore purchase receipts** — in-person Pro Shop and Snack Bar orders
  under `Sagamore Golf Club / Orders / Purchase Receipt`.
- **New shared components** — `SupportLine` (the "Need help? …" line, 16 emails)
  and `CTAStack` (vertical button stack, 12 emails).
- **FloGolf multi-bay booking** — `SimBooking` gained optional `sessions[]`; the
  Simulator Booking Confirmation has a `Multiple Bays` variant that itemizes
  several bay/time slots.

### Changed

- **FloGolf Lounge streamlined** — collapsed two redundant parallel lifecycles
  (Activities + Booking, 7 templates) into one `Simulator Booking` sub-group of 4
  (Confirmation, Reminder, Modification, Cancellation); the multi-bay case is now
  a story variant rather than a duplicate set.
- **Simulator/bay content moved to FloGolf** — the simulator "Activities" emails
  were relocated out of Sagamore Golf Club, where they didn't belong.
- **Component-adoption sweep** — ~40 templates refactored to use the shared
  primitives (`DetailCard` ×32, `SupportLine` ×16, `CTAStack` ×12, `LocationBlock`,
  `Checklist`, `FeatureList`) instead of inlining the same markup.
- **Header order flipped** — across all 30 venue emails the headline (`StatusHero`)
  now comes first, with the venue `VenueBadge` beneath it as secondary context.
- Receipt line items align thumbnail + title vertically.

### Removed

- The duplicate FloGolf `Activities` lifecycle and the redundant `activity`
  scenario (merged into `SimBooking.sessions`).

## [1.0.0] — 2026-06-10

The email style guide grows into a full **multi-venue email design system**:
46 templates across four audiences, a 32-component library, a partner directory,
and an overview docs page.

### Added

**Documentation & navigation**
- `Introduction` overview page (MDX) explaining the platform/partner model,
  email anatomy, branding rules, and the edge-case philosophy.
- `TenFore Partners` group — a venue directory with brand assets, venue details,
  and general info: an Overview page plus profiles for Sagamore Spring Golf Club
  and FloGolf Lounge.

**Platform emails (`TenFore Golf`)**
- `Welcome` — app-signup welcome with the growing partner network.
- `Meet Crane` — TenFore Crane app feature tour.
- `Golf Buddies` — feature announcement for the Buddies feature.

**Sagamore Spring Golf Club emails (33)** — the full booking lifecycle across
Tee Times, Activities, Clinics, Events, Waitlist, Orders, Membership, Gift Cards,
Account & Security, and Social, with edge-case variants captured as stories
(e.g. refund/no-refund, manual/auto renewal, self/gift, single/multi-item).

**FloGolf Lounge emails (4)** — a new partner venue for indoor Golfzon simulator
bookings: Booking Confirmation, Reminder, Modification, Cancellation, with the
FloGolf brand (`src/lib/flogolf.ts`) and a 10-bay simulator scenario.

**Admin emails (6)** — operator/internal: Online Sale, Event Booked, Clinic Sold,
Failed Payment, Balance Warning, and a cross-course ACH Charge Report.

**Component library (`Email Components`)** — new shared primitives, each with a
story: `Callout`, `StatusHero`, `IdStamp`, `WhatChanged`, `ItemizedList`,
`PaymentSummary`, `StatusBadge`, `GiftCardVisual`, `ContactBlock`, `DataTable`,
`VenueBadge`, `DetailCard`, `FeatureList`, `LocationBlock`, `Checklist`,
`NumberedSteps`. Added stories for previously undocumented primitives
(SectionHeading, IdStamp, AppStoreBadge, Divider, EmailSection, EmailShell).

**Brand assets** — FloGolf logo + lounge photo, and a TenFore Admin logo.

**Scenario data** — expanded `scenario.ts` with activity, clinic, event,
membership, gift-card, and admin (customer, sale, balance, ACH) entities so every
default stays anchored to one coherent story.

**Planning** — `EMAIL-TEMPLATE-PLAN.md` capturing the analysis of 45 legacy
templates and the category taxonomy.

### Changed

- **Sidebar reorganized** into platform/venue/audience groups: `Foundations` →
  `TenFore Partners`; the flat `Emails` group → `Sagamore Golf Club` +
  `FloGolf Lounge`; added `TenFore Golf` and `Admin` top-level groups.
- **`EmailHeader`** gained a `variant` (`"platform"` | `"admin"`) — the header
  always shows a TenFore mark; the partner venue is identified in the body via
  `VenueBadge` and hero imagery, never by swapping the header logo.
- **`VenueBadge` applied across all customer emails** so every Sagamore and
  FloGolf message carries the venue logo + name + address.
- **`EmailHero`** now supports a venue logo overlaid on the hero image for
  sender identification.

### Removed

- Standalone `AdminHeader` component — merged into `EmailHeader` as the
  `variant="admin"` option.
- `Foundations / Brand Assets` story — replaced by the `TenFore Partners` group.
