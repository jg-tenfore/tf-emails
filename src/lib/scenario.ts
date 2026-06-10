/**
 * Canonical Sagamore Spring Golf Club scenario.
 *
 * This is the foundation for every email's default content. New "edge cases"
 * should be expressed as Storybook story args that override fields here, so all
 * scenarios stay anchored to one realistic booking.
 */
import { assets } from "./assets";

export interface Golfer {
  firstName: string;
  fullName: string;
  phone: string;
  /** TenFore account / user ID. */
  userId: string;
}

export interface TeeTime {
  course: string;
  courseNote?: string;
  address: string;
  mapUrl: string;
  date: string;
  time: string;
  players: number;
  holes: number;
  rateType: string;
  groupName: string;
  confirmation: string;
  courseConfirmation: string;
}

export interface PaymentBreakdown {
  greenFees: string;
  greenFeesPerPlayer: string;
  convenienceFee: string;
  taxes: string;
  discounts: string;
  discountNote: string;
  donation: string;
  grandTotal: string;
  paidOnline: string;
  dueAtCourse: string;
}

export interface ReceiptLine {
  label: string;
  amount: string;
}

export interface Receipt {
  orderNumber: string;
  orderDate: string;
  items: ReceiptLine[];
  subtotal: string;
  tax: string;
  total: string;
  cardLast4: string;
}

/**
 * The partner course featured in this scenario. TenFore Golf (the brand) is the
 * platform; the course is the secondary, swappable content.
 */
export const course = {
  name: "Sagamore Spring Golf Club",
  phone: "(781) 334-3151",
  address: "1287 Main Street, Lynnfield, MA 01940",
  mapUrl: "https://maps.google.com/?q=1287+Main+Street,+Lynnfield,+MA+01940",
  bookingUrl: "https://www.sagamoregolf.com/teetimes",
} as const;

/** Hero image used across booking emails — the Sagamore Spring 9th hole. */
export const courseImage = assets.courseHero.src;

export const golfer: Golfer = {
  firstName: "Justin",
  fullName: "Justin Girard",
  phone: "617-470-7879",
  userId: "6174707879",
};

export const teeTime: TeeTime = {
  course: course.name,
  courseNote: "Twilight · 9 holes",
  address: course.address,
  mapUrl: course.mapUrl,
  date: "Tuesday, April 21, 2026",
  time: "6:00 PM",
  players: 2,
  holes: 9,
  rateType: "Twilight Deal",
  groupName: `${golfer.fullName} · ${golfer.phone}`,
  confirmation: "421292164",
  courseConfirmation: "SSGC|34938",
};

export const payment: PaymentBreakdown = {
  greenFees: "$41.40",
  greenFeesPerPlayer: "$20.70 / player",
  convenienceFee: "$6.98",
  taxes: "$0.00",
  discounts: "−$36.06",
  discountNote: "Sagamore Pass waived-fee credit · Worry Free",
  donation: "$0.68",
  grandTotal: "$13.00",
  paidOnline: "$13.00",
  dueAtCourse: "$0.00",
};

export const receipt: Receipt = {
  orderNumber: teeTime.confirmation,
  orderDate: "April 18, 2026",
  items: [
    { label: "Twilight green fee — 9 holes × 2", amount: "$41.40" },
    { label: "Convenience fee", amount: "$6.98" },
    { label: "Youth On Course donation", amount: "$0.68" },
    { label: "Sagamore Pass credit", amount: "−$36.06" },
  ],
  subtotal: "$13.00",
  tax: "$0.00",
  total: "$13.00",
  cardLast4: "4242",
};

/**
 * Additional people for emails involving more than one party
 * (buddy requests, event invitations, gift cards). All anchored to the same
 * Sagamore Spring scenario; override via story args for edge cases.
 */
export const buddy: Pick<Golfer, "firstName" | "fullName"> & { email: string } = {
  firstName: "Marcus",
  fullName: "Marcus Webb",
  email: "marcus.webb@example.com",
};

/** A simulator-bay activity reservation (single day, one or more time slots). */
export interface ActivityBooking {
  resource: string;
  date: string;
  time: string;
  price: string;
}

export interface Activity {
  name: string;
  bookingId: string;
  players: number;
  bookings: ActivityBooking[];
  total: string;
}

export const activity: Activity = {
  name: "Simulator Bays",
  bookingId: "88421",
  players: 3,
  bookings: [
    { resource: "Bay 3", date: "April 21, 2026", time: "2:00 PM", price: "$50.00" },
    { resource: "Bay 3", date: "April 21, 2026", time: "3:00 PM", price: "$50.00" },
    { resource: "Bay 4", date: "April 21, 2026", time: "2:00 PM", price: "$50.00" },
  ],
  total: "$150.00",
};

/** A multi-day clinic / camp registration with intake answers. */
export interface ClinicIntake {
  label: string;
  value: string;
}

export interface Clinic {
  name: string;
  registrationId: string;
  instance: string;
  dateRange: string;
  time: string;
  ages: string;
  equipment: string;
  details: string;
  intake: ClinicIntake[];
  fee: string;
  tax: string;
  total: string;
}

export const clinic: Clinic = {
  name: "Junior Summer Camp",
  registrationId: "88001",
  instance: "5566",
  dateRange: "June 16–20, 2026",
  time: "9:00 AM – 12:00 PM",
  ages: "Ages 8–14",
  equipment: "Clubs provided if needed",
  details: "Five mornings of short-game, full-swing and on-course fundamentals.",
  intake: [
    { label: "Allergies", value: "Tree nut" },
    { label: "T-shirt size", value: "Youth M" },
  ],
  fee: "$325.00",
  tax: "$21.13",
  total: "$346.13",
};

/** A booked golf event / tournament / outing with itemized order. */
export interface EventLineItem {
  label: string;
  qty?: number;
  amount: string;
}

export interface GolfEvent {
  name: string;
  eventId: string;
  invitationId: string;
  organizer: string;
  organizerEmail: string;
  organization: string;
  when: string;
  format: string;
  players: number;
  groups: string;
  items: EventLineItem[];
  subtotal: string;
  tax: string;
  fees: string;
  total: string;
  paid: string;
  balanceDue: string;
}

export const golfEvent: GolfEvent = {
  name: "Sagamore Member-Guest Outing",
  eventId: "4477",
  invitationId: "5511",
  organizer: "Marcus Webb",
  organizerEmail: "marcus.webb@example.com",
  organization: "Webb & Co.",
  when: "Saturday, June 20, 2026 · 8:00 AM shotgun",
  format: "Scramble",
  players: 32,
  groups: "8 foursomes",
  items: [
    { label: "Green fees", qty: 32, amount: "$2,560.00" },
    { label: "Boxed lunch", qty: 32, amount: "$640.00" },
    { label: "Hole sponsor signs", qty: 8, amount: "$400.00" },
  ],
  subtotal: "$3,600.00",
  tax: "$322.00",
  fees: "$250.00",
  total: "$4,000.00",
  paid: "$2,500.00",
  balanceDue: "$1,500.00",
};

/** A club membership with renewal/dues state. */
export interface Membership {
  tier: string;
  term: string;
  memberId: string;
  activeThrough: string;
  autoRenew: boolean;
  benefits: string[];
  price: string;
  tax: string;
  total: string;
}

export const membership: Membership = {
  tier: "Gold Annual",
  term: "Annual",
  memberId: "77777",
  activeThrough: "May 31, 2026",
  autoRenew: true,
  benefits: [
    "40 rounds per year",
    "14-day advance booking",
    "1 point per $1 spent",
  ],
  price: "$1,200.00",
  tax: "$78.00",
  total: "$1,278.00",
};

/** A purchased gift card, with optional partial-spend tracking. */
export interface GiftCard {
  amount: string;
  code: string;
  giftCardId: string;
  orderId: string;
  type: string;
  purchaseDate: string;
  expiration: string;
  useFor: string;
  /** Partial-spend fields (used by the expiration-warning email). */
  used?: string;
  remaining?: string;
}

export const giftCard: GiftCard = {
  amount: "$100.00",
  code: "8472103556677",
  giftCardId: "5577",
  orderId: "8472103",
  type: "Standard Gift Card",
  purchaseDate: "May 12, 2026",
  expiration: "May 12, 2027",
  useFor: "tee times, food & beverage, and merchandise",
  used: "$30.00",
  remaining: "$70.00",
};

/* ---------------------------------------------------------------------------
 * Admin / operator scenario data.
 *
 * These power the operator-facing (course staff) and TenFore-internal emails.
 * Unlike the golfer emails, they surface customer PII and revenue and carry no
 * customer call-to-action — they're internal notifications and reports.
 * ------------------------------------------------------------------------- */

/** A customer record as shown to course staff (operator notifications). */
export interface CustomerRecord {
  name: string;
  customerId: string;
  email: string;
  phone: string;
}

export const customer: CustomerRecord = {
  name: "Cody Sanders",
  customerId: "1234567",
  email: "cody.sanders@example.com",
  phone: "(781) 555-0148",
};

/** An online storefront sale, as notified to the course. */
export interface OnlineSale {
  orderId: string;
  dateTime: string;
  items: EventLineItem[];
  tax: string;
  total: string;
}

export const onlineSale: OnlineSale = {
  orderId: "8472103",
  dateTime: "May 12, 2026 · 2:32 PM",
  items: [
    { label: "Gift card", amount: "$100.00" },
    { label: "Pro V1 sleeve", qty: 2, amount: "$100.00" },
    { label: "Range bucket", amount: "$100.00" },
  ],
  tax: "$8.00",
  total: "$308.00",
};

/** A declined charge, as alerted to course staff for follow-up. */
export interface FailedCharge {
  customerId: string;
  detectedAt: string;
  amount: string;
  source: string;
  relatedTo: string;
  reason: string;
}

export const failedCharge: FailedCharge = {
  customerId: "9988",
  detectedAt: "May 18, 2026 · 8:30 AM",
  amount: "$1,278.00",
  source: "Membership auto-renew charge",
  relatedTo: "Membership #77777",
  reason: "Card declined — insufficient funds",
};

/** A recurring accounts-receivable report of customers carrying balances. */
export interface BalanceRow {
  customer: string;
  email: string;
  balance: string;
}

export interface BalanceReport {
  asOf: string;
  count: number;
  totalOutstanding: string;
  rows: BalanceRow[];
}

export const balanceReport: BalanceReport = {
  asOf: "Monday, May 18, 2026 · 8:00 AM",
  count: 5,
  totalOutstanding: "$1,724.50",
  rows: [
    { customer: "Cody Sanders", email: "cody.sanders@example.com", balance: "$247.50" },
    { customer: "Marcus Webb", email: "marcus.webb@example.com", balance: "$1,050.00" },
    { customer: "Weston Farnsworth", email: "weston@example.com", balance: "$247.00" },
    { customer: "Jarrette Schule", email: "jarrette@example.com", balance: "$120.00" },
    { customer: "Marie Delgado", email: "marie.delgado@acmecorp.example", balance: "$60.00" },
  ],
};

/** A cross-course ACH charge run, reported to TenFore platform staff. */
export interface AchCourseRow {
  range: string;
  preTax: string;
  tax: string;
  collected: string;
  status: "Succeeded" | "Declined";
}

export interface AchCourse {
  name: string;
  rows: AchCourseRow[];
  tally: string;
}

export interface AchReport {
  asOf: string;
  attempted: number;
  succeeded: number;
  declined: number;
  recorded: number;
  preTax: string;
  tax: string;
  collected: string;
  courses: AchCourse[];
}

export const achReport: AchReport = {
  asOf: "Monday, May 18, 2026 · 6:00 AM UTC",
  attempted: 15,
  succeeded: 14,
  declined: 1,
  recorded: 15,
  preTax: "$660.50",
  tax: "$42.93",
  collected: "$703.43",
  courses: [
    {
      name: "Sagamore Spring Golf Club",
      rows: [
        { range: "May 1 – May 7", preTax: "$300.00", tax: "$19.50", collected: "$319.50", status: "Succeeded" },
        { range: "May 8 – May 14", preTax: "$240.13", tax: "$15.00", collected: "$255.63", status: "Succeeded" },
        { range: "May 15 – May 18", preTax: "$60.00", tax: "$3.90", collected: "$0.00", status: "Declined" },
      ],
      tally: "12 attempted · 1 declined · $575.63 collected",
    },
    {
      name: "Pinecrest Sister Course",
      rows: [
        { range: "May 1 – May 14", preTax: "$60.37", tax: "$4.53", collected: "$127.80", status: "Succeeded" },
      ],
      tally: "3 attempted · 0 declined · $127.80 collected",
    },
  ],
};
