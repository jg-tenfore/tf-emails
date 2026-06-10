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
  shortName: "Sagamore Spring",
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
