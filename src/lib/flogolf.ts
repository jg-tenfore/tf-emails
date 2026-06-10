/**
 * FloGolf Lounge — a separate brand used ONLY for indoor simulator-bay
 * bookings (Saugus, MA). Distinct from the TenFore/Sagamore golf-course brand:
 * its emails use the FloGolf header/footer and the deep-emerald palette from
 * the FloGolf mark.
 *
 * Real venue details: 880 Broadway, Saugus, MA 01906 · (339) 231-7042 ·
 * 10 Golfzon simulator bays · full bar + food. https://flogolflounge.com
 */
import flogolfLogo from "@/assets/brand/flogolf-logo.png";
import flogolfLounge from "@/assets/brand/flogolf-lounge.jpg";

export const flogolf = {
  name: "FloGolf Lounge",
  shortName: "FloGolf",
  tagline: "Indoor Golfzon simulators, a full bar, and sports — Saugus, MA.",
  url: "https://flogolflounge.com",
  bookingUrl: "https://flogolflounge.com/book",
  phone: "(339) 231-7042",
  address: { line1: "880 Broadway", line2: "Saugus, MA 01906" },
  mapUrl: "https://maps.google.com/?q=880+Broadway,+Saugus,+MA+01906",
  /** Deep emerald from the FloGolf mark — used for header/footer bands. */
  green: "#15311f",
  /** Number of simulator bays at the Saugus location. */
  totalBays: 10,
  /** Authored brand assets (swap `loungeImage` for the real lounge photo). */
  logo: flogolfLogo,
  loungeImage: flogolfLounge,
} as const;

/** One bay/time slot within a reservation (used by multi-bay bookings). */
export interface SimSession {
  /** Which bay, e.g. "Bay 3". */
  bay: string;
  date: string;
  time: string;
  price: string;
}

export interface SimBooking {
  /** Which simulator bay, e.g. "Bay 7" (1–10). */
  bay: string;
  date: string;
  startTime: string;
  endTime: string;
  /** Booked length, e.g. "2 hours". */
  duration: string;
  players: number;
  /** Experience/software, e.g. "Golfzon simulator". */
  experience: string;
  confirmation: string;
  ratePerHour: string;
  total: string;
  /**
   * Optional multi-bay breakdown. When present, the booking covers several
   * bay/time slots and the email itemizes them instead of showing one session.
   */
  sessions?: SimSession[];
}

/** Canonical FloGolf simulator booking — a Saturday-evening 2-hour bay for 4. */
export const simBooking: SimBooking = {
  bay: "Bay 7",
  date: "Saturday, May 9, 2026",
  startTime: "6:00 PM",
  endTime: "8:00 PM",
  duration: "2 hours",
  players: 4,
  experience: "Golfzon simulator",
  confirmation: "FG-58117",
  ratePerHour: "$60.00 / hour",
  total: "$120.00",
};

/** Edge case: one reservation spanning several bays/time slots. */
export const simBookingMultiBay: SimBooking = {
  bay: "3 bays",
  date: "Saturday, May 9, 2026",
  startTime: "6:00 PM",
  endTime: "7:00 PM",
  duration: "2 hours total",
  players: 3,
  experience: "Golfzon simulator",
  confirmation: "FG-58142",
  ratePerHour: "$50.00 / hour",
  total: "$150.00",
  sessions: [
    { bay: "Bay 3", date: "May 9, 2026", time: "6:00 PM", price: "$50.00" },
    { bay: "Bay 3", date: "May 9, 2026", time: "7:00 PM", price: "$50.00" },
    { bay: "Bay 4", date: "May 9, 2026", time: "6:00 PM", price: "$50.00" },
  ],
};
