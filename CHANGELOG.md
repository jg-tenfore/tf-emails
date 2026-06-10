# Changelog

All notable changes to the TenFore Golf email design system are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/).

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
