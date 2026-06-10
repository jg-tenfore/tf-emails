# TenFore Email System — Analysis & Build Plan

_Source: 45 old `stage0-*.html` reference templates in `/references`, analyzed and reorganized for the new Untitled-UI + Storybook design system._

## The core insight

The 45 reference files are **not 45 designs**. They are one template skeleton parameterized across a few axes. The old HTML even documents the principle in a comment:

> "No status pill — state is conveyed by **title text + CTA color**."

Every email is: `Shell → Header → Hero (title/subtitle/IDs) → optional colored Callout → content card → CTA(s) → Footer`. What changes between them is content and **four cross-cutting axes**:

| Axis | Values | How it's expressed |
|---|---|---|
| **Audience** | customer · course operator/admin · TenFore-internal | operator/internal emails drop the CTA, add PII/contact tables, may be multi-tenant |
| **Lifecycle state** | confirm → modify → cancel → refund | title copy + CTA fill |
| **Status / tone** | success · info · warning/urgent | callout box color (green / blue / amber) |
| **Payment state** | paid-online · pay-at-course · amount-due · refund · failed | summary card's final row + status badge |

Collapsing the variant-pairs (single/multi, 30-day/7-day, auto/manual, self/gift, short/long…) into **Storybook story args** turns 45 files into **~35 templates**, of which **4 already exist** (`Receipt`, `TeeTimeConfirmation`, `TeeTimeReminder`, `Welcome`).

---

## Proposed Storybook taxonomy

Sidebar: `Emails / <Category> / <Template>`. ✅ = already built. ➕ = new. Parentheses = story-arg variants of one template.

### 1. Tee Times
- ✅ `TeeTimeConfirmation` (paid-online · pay-at-course)
- ✅ `TeeTimeReminder`
- ➕ `TeeTimeModification` — adds "What changed" diff callout + refund row
- ➕ `TeeTimeCancellation` — refund row, outline CTA "Book Again"

### 2. Activities (simulator bays)
- ➕ `ActivityConfirmation` (multi-booking line items)
- ➕ `ActivityModification`
- ➕ `ActivityCancellation`

### 3. Clinics & Camps
- ➕ `ClinicConfirmation` — adds program details + "What you told us" intake block + tax
- ➕ `ClinicModification`
- ➕ `ClinicCancellation`
- ➕ `ClinicWaitlist` — blue "what happens next" callout, no payment/ID yet

### 4. Events (tournaments / outings)
- ➕ `EventConfirmation` (short · long — long stress-tests ~24 line items)
- ➕ `EventModification`
- ➕ `EventCancellation`
- ➕ `EventInvitation` — guest-facing, blue "you're on the roster" callout, no pricing
- ➕ `EventPaymentReceipt` — payment-method row + "Paid in full" badge

### 5. Waitlist (tee-time)
- ➕ `WaitlistSpotOpened` — notify-only, urgent, deep-links to the tee time, opt-out link
- ➕ `WaitlistBooked` (pay-at-course · paid-and-booked) — minimal When/Course card
- ➕ `WaitlistPaymentFailed` — amber alert, "booking did NOT happen"

### 6. Orders & Receipts
- ✅ `Receipt` / `OrderReceipt` (single · multi-tee-time grouping + "Other Items")
- ➕ `OrderRefund` — blue "Reason" callout, only refunded lines shown, partial-refund capable

### 7. Membership
- ➕ `MembershipExpiring` (30-day manual: amber + "Renew Now" · 7-day autorenew: blue + passive CTA + Auto-renew row)
- ➕ `MembershipRenewed` (auto · manual) — green success + Price/Tax/Total "Paid" receipt
- ➕ `MembershipLapsed` — blue win-back, "Reactivate"
- ➕ `InitiationDues` (billed: amber, amount-due, "Pay Online" · charged: green, paid, installment schedule)

### 8. Gift Cards
- ➕ `GiftCardPurchase` (self: shows own card+barcode · gift: green "Gift sent" + recipient fields)
- ➕ `GiftCardReceived` — recipient-facing, "From {sender}", optional note, redeemable barcode
- ➕ `GiftCardExpiring` — amber, original/used/remaining balance tracking

### 9. Account & Security
- ✅ `Welcome` / `AccountWelcome`
- ➕ `PasswordReset` — tokenized expiring link, "ignore if not you" reassurance
- ➕ `CheckInConfirmation` — (the mislabeled "verification-confirmation"; actually a check-in receipt)

### 10. Lifecycle & Social
- ➕ `Birthday` — leanest layout, perk offer, no tables
- ➕ `BuddyRequest` — **platform-branded** (TenFore, not course), blue social callout, accept/ignore

### 11. Operator Notifications  ⚠️ different archetype (see Decision 1)
_Audience = course staff. No CTA button. Expose customer PII + revenue._
- ➕ `OnlineSaleNotification` — itemized sale, customer record
- ➕ `EventBookedNotification` — full Contact block + event order + balance due
- ➕ `ClinicSoldNotification` — per-participant rows + intake answers
- ➕ `FailedPaymentAlert` — dunning alert, decline reason, customer + charge blocks
- ➕ `BalanceWarning` — AR report: table of N customers with outstanding balances

### 12. Platform / Internal  ⚠️ multi-tenant (see Decision 1)
- ➕ `ACHChargeReport` — TenFore-branded, aggregates across **multiple courses**, grand totals + per-course tables

---

## New shared components to build first (the foundation)

These primitives unlock most of the templates. Build/verify these before mass-producing emails.

| Component | Purpose | Drives |
|---|---|---|
| `Callout` (tone: `success`/`info`/`warning`, eyebrow + body) | the colored left-border box — green/blue/amber | nearly every template |
| `StatusHero` (eyebrow · title · subtitle · ID stamps · optional icon) | non-image hero (current `EmailHero` requires a photo) | most non-booking emails |
| `IdStamp` | monospace ID label/value (ORDER ID, PARENT TTC ID…) | all hero blocks |
| `WhatChanged` (old → new, strikethrough) | the modification diff block | all `*Modification` emails |
| `LineItemGroup` / `ItemizedList` (+ optional group subheaders) | receipts, orders, events; single + grouped/multi | receipts, events, orders, operator sales |
| `PaymentSummary` (Subtotal/Tax/Fees/Total) + `StatusBadge` | Paid · Paid in full · Amount due · Refund | all financial emails |
| `GiftCardVisual` (amount + UPC/barcode) | the card artwork | all gift-card emails |
| `ContactBlock` (name · email · phone · IDs) | operator-facing customer record | operator notifications |
| `DataTable` (header + N rows) | tabular reports | `BalanceWarning`, `ACHChargeReport` |

Existing reusable primitives that already cover the rest: `EmailShell`, `EmailHeader`, `EmailHero`, `EmailSection`, `CTAButton`, `DetailRow`, `BookingCard`, `ForecastCard`, `Divider`, `SectionHeading`, `EmailFooter`.

**CTA convention to encode:** solid = primary/positive (Manage / View / Book Now); outline = recovery/passive (Book Again / Update Payment / Contact Course).

---

## Open decisions (need your call)

1. **Scope of operator + platform emails (categories 11–12).** They're a genuinely different archetype (no CTA, PII tables, multi-tenant). Options: (a) build customer-facing first, defer operator/internal to a later phase; (b) put them under a separate `Admin /` namespace; (c) skip them entirely for now. _Recommendation: (a) — finish the 29 customer-facing templates, then do operator as Phase 4._
2. **Branding model.** Old emails are **course-branded** in hero + footer with a small "Sent by TenFore Golf" sub-attribution. The new system currently uses the Sagamore logo header + a full **TenFore company footer**. Keep the new approach, or replicate the old course-hero + course-footer + TenFore-sub-footer? And the 2 platform-branded outliers (`BuddyRequest`, `ACHChargeReport`) need a TenFore-branded header variant either way.
3. **Variant strategy.** Confirm collapsing pairs (single/multi, 30/7-day, auto/manual, self/gift, short/long) into **story args** rather than separate template files. _Recommendation: yes — matches the repo's `scenario.ts` + story-args philosophy._
4. **Scenario data.** Extend `scenario.ts` with the new entities the old emails imply: `activity` (bays), `clinic`/`camp` (+ intake), `event`/tournament (+ line items, F&B), `membership` (+ tiers/benefits), `giftCard`, plus a couple of extra people (sender/recipient/guest). Keep one canonical Sagamore scenario; express edge cases as story args.

---

## Suggested build sequence

- **Phase 0 — Foundations:** build the 9 new shared components above + extend `scenario.ts`. Nothing ships without these.
- **Phase 1 — Booking lifecycles:** Tee Times, Activities, Clinics, Events, Waitlist, Order refund (categories 1–6). Highest volume, maximum component reuse.
- **Phase 2 — Account/money/social:** Membership, Gift Cards, Account & Security, Lifecycle & Social (categories 7–10).
- **Phase 3 — Operator/internal** (if approved): categories 11–12.

Each template = `src/emails/<Name>/<Name>.tsx` + `<Name>.stories.tsx` titled `Emails/<Category>/<Name>`, defaults from `scenario.ts`, variants as story exports.
