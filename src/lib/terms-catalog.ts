import { course } from "@/lib/scenario";

/**
 * Every kind of term a course might attach to a tee time booking, in one
 * place. Emails pick terms by id; the Terms Library page in Storybook lists
 * the whole catalog. Wording is either *sourced* (carried over from a real
 * course's confirmation) or a *draft* we wrote that still needs course review.
 * Drafts are left out of emails unless a caller opts in.
 */

/** Two ways courses write terms: a formal first-person agreement, or house rules. */
export type TermsStyle = "agreement" | "houseRules";

export type TermStatus = "sourced" | "draft";

export interface TermWording {
  status: TermStatus;
  /** Where sourced wording came from. */
  source?: string;
  /** Overrides the term's title for this style (e.g. "Before your round"). */
  title?: string;
  items: string[];
}

export type TermsCategoryId =
  | "booking-payment"
  | "cancellations-changes"
  | "arrival-play"
  | "carts-equipment"
  | "weather-conditions"
  | "conduct-safety"
  | "legal";

export interface TermsCategory {
  id: TermsCategoryId;
  title: string;
  description: string;
}

export const termsCategories: TermsCategory[] = [
  {
    id: "booking-payment",
    title: "Booking & payment",
    description: "Who pays, what the price includes, and what gets charged to the card.",
  },
  {
    id: "cancellations-changes",
    title: "Cancellations & changes",
    description: "Deadlines, late fees, no-shows, modifications and refunds.",
  },
  {
    id: "arrival-play",
    title: "Arrival & play",
    description: "Check-in, pairing, pace of play and rate-specific rules on the day.",
  },
  {
    id: "carts-equipment",
    title: "Carts & equipment",
    description: "Cart fees, cart rental rules, riders and rental clubs.",
  },
  {
    id: "weather-conditions",
    title: "Weather & course conditions",
    description: "Rain checks, closures, frost delays and maintenance.",
  },
  {
    id: "conduct-safety",
    title: "Conduct & safety",
    description: "Dress code, alcohol, juniors, liability and personal property.",
  },
  {
    id: "legal",
    title: "Legal & communications",
    description: "Card authorization, disputes, and how the course contacts the golfer.",
  },
];

export type TermId =
  | "payment-responsibility"
  | "pricing-tax"
  | "prepayment"
  | "rate-eligibility"
  | "merchandise-add-ons"
  | "booking-limits"
  | "cancellation"
  | "modifications"
  | "refunds-credits"
  | "check-in"
  | "pairing"
  | "pace-of-play"
  | "twilight"
  | "green-fee-cart"
  | "cart-rental"
  | "group-size"
  | "rental-clubs"
  | "rain-checks"
  | "closures-delays"
  | "maintenance-aeration"
  | "dress-code"
  | "alcohol"
  | "juniors"
  | "liability"
  | "personal-property"
  | "authorization-disputes"
  | "communications";

export interface TermType {
  id: TermId;
  title: string;
  category: TermsCategoryId;
  /** One line on what the term covers — shown in the Terms Library. */
  purpose: string;
  agreement?: TermWording;
  houseRules?: TermWording;
}

const LAYTONSVILLE = "Laytonsville Golf Course (MCG Golf) confirmation";
const CORAL_CANYON = "Coral Canyon Golf Course confirmation";
const SAGAMORE = "Sagamore Spring confirmation template";

export const termsCatalog: TermType[] = [
  // ── Booking & payment ────────────────────────────────────────────────
  {
    id: "payment-responsibility",
    title: "Responsibility for payment",
    category: "booking-payment",
    purpose: "The booker is on the hook for the whole group, including no-shows.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "As the individual booking this tee time (“the Booker”), I am financially responsible for the entire reservation, including all players listed.",
        "In the event any member(s) of my group do not show up for the scheduled tee time, I agree that the golf club may charge my credit card for the no-show(s).",
      ],
    },
  },
  {
    id: "pricing-tax",
    title: "Pricing and payment",
    category: "booking-payment",
    purpose: "Whether prices are per person, what tax is added, and when a card is required.",
    agreement: {
      status: "draft",
      items: [
        "I understand that tee time prices are per player and do not include applicable taxes, which will be added at check out.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      items: [
        "The price shown for this tee time is per person and does not include tax. Tax (6.75%) will be added at check out, either online or in person at the golf course.",
        "A credit card is required at the time of booking, both online and over the phone, to make a tee time reservation.",
      ],
    },
  },
  {
    id: "prepayment",
    title: "Prepayment",
    category: "booking-payment",
    purpose: "Rates that must be paid in full online and can't be moved to another slot.",
    agreement: {
      status: "draft",
      items: [
        "I understand that prepaid rates are paid in full at the time of booking and are valid only for the tee time reserved.",
        "Pro shop staff cannot transfer a prepaid rate to a different date or tee time.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: SAGAMORE,
      items: [
        "Payment is due online in full at the time of reservation; pro-shop staff can't change the tee time or honor the prepaid rate for another slot.",
      ],
    },
  },
  {
    id: "rate-eligibility",
    title: "Rate eligibility",
    category: "booking-payment",
    purpose: "Resident, senior, junior, military or member rates that need proof at check-in.",
    agreement: {
      status: "draft",
      items: [
        "If I book a discounted rate (resident, senior, junior, military, or member), I agree to show valid proof of eligibility at check-in.",
        "I understand that if a player cannot show eligibility, the golf club may charge the difference to the standard rate.",
      ],
    },
  },
  {
    id: "merchandise-add-ons",
    title: "Online merchandise add-ons",
    category: "booking-payment",
    purpose: "Range buckets, merchandise and other extras bought with the tee time.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "As the Booker, I am responsible for any online merchandise or other add-ons selected during the reservation process.",
        "I authorize the golf club to charge my credit card for these add-ons at the time of booking or upon arrival, as applicable.",
      ],
    },
  },
  {
    id: "booking-limits",
    title: "Booking limits",
    category: "booking-payment",
    purpose: "Caps on how many tee times one golfer can hold, and no reselling.",
    agreement: {
      status: "draft",
      items: [
        "I understand the golf club may limit the number of tee times a single golfer can hold, and may cancel duplicate or speculative reservations.",
        "I agree not to resell or transfer this reservation for payment.",
      ],
    },
  },

  // ── Cancellations & changes ─────────────────────────────────────────
  {
    id: "cancellation",
    title: "Cancellation policy",
    category: "cancellations-changes",
    purpose: "The cancellation deadline, how to cancel, and late-cancel / no-show charges.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "Cancellations must be made at least 24 hours prior to the scheduled tee time.",
        "Cancellations must be completed through my TenFore account or by contacting the golf club via phone no later than 24 hours in advance.",
        "I acknowledge that a cancellation is not complete until I receive a confirmation and that it is my responsibility to follow up with the golf course if the confirmation is not received.",
        "I understand and agree that if I fail to cancel or modify my booking within this timeframe, the golf club may charge my credit card in accordance with its no-show or late cancellation fee.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      title: "Cancellations",
      items: [
        "Cancellations must be made outside of 24 hours. Any no-show or cancellation within 24 hours will be charged the full rate.",
      ],
    },
  },
  {
    id: "modifications",
    title: "Changes to a booking",
    category: "cancellations-changes",
    purpose: "Changing the time, date or number of players, and when that costs money.",
    agreement: {
      status: "draft",
      items: [
        "I may change the date, time, or number of players through my TenFore account, subject to availability.",
        "I understand that reducing the number of players within 24 hours of the tee time is treated as a late cancellation for each removed player.",
      ],
    },
  },
  {
    id: "refunds-credits",
    title: "Refunds and credits",
    category: "cancellations-changes",
    purpose: "Whether refunds go back to the card or to account credit, and how long credit lasts.",
    agreement: {
      status: "draft",
      items: [
        "I understand that eligible refunds are returned to the original form of payment and may take 2–3 business days to appear on my statement.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: SAGAMORE,
      items: [
        "Reservations are refundable only if cancelled 24+ hours in advance, if the course is closed on the day of play, or with an eligible pass cancellation.",
        "Refunds are issued as account credit valid for six months.",
      ],
    },
  },

  // ── Arrival & play ──────────────────────────────────────────────────
  {
    id: "check-in",
    title: "Check-in requirement",
    category: "arrival-play",
    purpose: "Where and how early players need to check in before teeing off.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: ["All players must check in with the Starter before beginning play."],
    },
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      title: "Before your round",
      items: [
        "Please arrive at least thirty minutes before your scheduled tee time to allow ample check-in time.",
        "Range balls are included in your golf fee and available prior to your tee time.",
      ],
    },
  },
  {
    id: "pairing",
    title: "Pairing of groups",
    category: "arrival-play",
    purpose: "Groups under four may be paired with other golfers.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "I acknowledge that if my group has fewer than four players, the golf club may pair my group with other players to form a complete foursome.",
      ],
    },
  },
  {
    id: "pace-of-play",
    title: "Pace of play",
    category: "arrival-play",
    purpose: "Expected round time and what happens to groups that fall behind.",
    agreement: {
      status: "draft",
      items: [
        "I agree that my group will keep pace with the group ahead and finish 18 holes in about 4 hours 30 minutes.",
        "I understand that course staff may ask a slow group to skip a hole or pick up to restore pace, without a refund.",
      ],
    },
  },
  {
    id: "twilight",
    title: "Twilight tee times",
    category: "arrival-play",
    purpose: "Discounted late rates that don't guarantee a full 18 holes.",
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      items: [
        "Twilight tee times do not guarantee you will finish 18 holes, which is why they are discounted. During twilight time frames you have the option to play only 9 holes and pay the 9-hole rate — please check with the golf shop staff at check-in.",
      ],
    },
  },

  // ── Carts & equipment ───────────────────────────────────────────────
  {
    id: "green-fee-cart",
    title: "Green fee and cart policy",
    category: "carts-equipment",
    purpose: "Whether the green fee includes a cart, and how cart fees are charged.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "Green Fee pricing does not include cart rentals, unless otherwise specified.",
        "Golf cart rental fees are separate, and I understand I will be charged accordingly if I choose to rent a cart.",
      ],
    },
  },
  {
    id: "cart-rental",
    title: "Golf cart rental terms",
    category: "carts-equipment",
    purpose: "Driver age and license, damage responsibility, and returning the cart.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "I must be at least 18 years of age and possess a valid driver’s license to rent or operate a golf cart.",
        "I agree not to allow any unlicensed individual to operate the cart.",
        "I accept financial responsibility for any damage to the cart during my rental period, whether caused by me or anyone operating the cart under my reservation.",
        "I agree to return the cart immediately upon completion of my round.",
      ],
    },
  },
  {
    id: "group-size",
    title: "Group size and extra riders",
    category: "carts-equipment",
    purpose: "Maximum players per group, and whether non-golfing riders or extra carts are allowed.",
    agreement: {
      status: "draft",
      items: [
        "I understand that groups are limited to four players and that non-playing riders or extra carts may not be permitted.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      items: [
        "Starting September 1st 2025, we will not be allowing any “extra riders” or “extra carts” for any groups.",
      ],
    },
  },
  {
    id: "rental-clubs",
    title: "Rental clubs",
    category: "carts-equipment",
    purpose: "Reserving rental clubs and paying for lost or damaged sets.",
    agreement: {
      status: "draft",
      items: [
        "Rental clubs are subject to availability and must be returned to the golf shop at the end of my round.",
        "I accept financial responsibility for rental clubs that are lost or damaged while in my care.",
      ],
    },
  },

  // ── Weather & course conditions ─────────────────────────────────────
  {
    id: "rain-checks",
    title: "Weather and rain checks",
    category: "weather-conditions",
    purpose: "What the golfer gets back if weather stops play partway through.",
    agreement: {
      status: "draft",
      items: [
        "I understand that if the golf club suspends play for weather, I may receive a rain check for the holes not played, issued at the golf shop on the day of play.",
        "I understand that rain checks are not issued once play has started unless the course closes, and are not cash refunds.",
      ],
    },
  },
  {
    id: "closures-delays",
    title: "Closures and frost delays",
    category: "weather-conditions",
    purpose: "How frost delays, cart-path-only days and closures affect a booking.",
    agreement: {
      status: "draft",
      items: [
        "I understand that frost delays may push back my tee time, and the golf club will reschedule my group as close to the original time as possible.",
        "If the golf club closes the course on my day of play, my reservation will be cancelled without a fee.",
      ],
    },
  },
  {
    id: "maintenance-aeration",
    title: "Course maintenance",
    category: "weather-conditions",
    purpose: "Scheduled aeration and practice-area closures the golfer should know about.",
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      items: [
        `The driving range is closed Tuesday afternoons for maintenance. Times vary throughout the year — please call the golf shop at ${course.phone} for details.`,
        "Aeration: May 4th starting at 1:00 PM; May 5th–6th all day; August 15th–25th greens and golf course aeration.",
      ],
    },
  },

  // ── Conduct & safety ────────────────────────────────────────────────
  {
    id: "dress-code",
    title: "Dress code",
    category: "conduct-safety",
    purpose: "What players must and mustn't wear on the course.",
    agreement: {
      status: "draft",
      items: [
        "I agree that all players in my group will follow the golf club’s dress code, and that players in inappropriate attire may be refused play without a refund.",
      ],
    },
    houseRules: {
      status: "sourced",
      source: CORAL_CANYON,
      items: [
        "Proper golf attire is expected at all times. A shirt, pants/shorts, and footwear must be worn at all times.",
        "Denim of any kind is strictly prohibited, and collared shirts are required.",
        "Prohibited items include but are not limited to gym clothes, sleeveless and tank tops, and any items adorned with offensive, profane, or inappropriate words or images.",
        "Course management, in its sole and absolute discretion, may at any time deem attire inappropriate.",
      ],
    },
  },
  {
    id: "alcohol",
    title: "Alcohol",
    category: "conduct-safety",
    purpose: "Outside alcohol, age to drink, and when staff can stop service or play.",
    agreement: {
      status: "draft",
      items: [
        "I understand that outside alcohol is not permitted and that alcohol may only be served to guests 21 or older.",
        "I agree that the golf club may remove any player who is visibly intoxicated, without a refund.",
      ],
    },
  },
  {
    id: "juniors",
    title: "Junior golfers",
    category: "conduct-safety",
    purpose: "Age limits and adult supervision for players under 18.",
    agreement: {
      status: "draft",
      items: [
        "I understand that players under 16 must be accompanied by an adult, and that juniors may not drive a golf cart.",
      ],
    },
  },
  {
    id: "liability",
    title: "Assumption of risk",
    category: "conduct-safety",
    purpose: "Golf's inherent risks (errant balls, lightning, terrain) are accepted by the player.",
    agreement: {
      status: "draft",
      items: [
        "I understand that golf involves inherent risks, including errant golf balls, uneven terrain, and weather, and I accept these risks for myself and my group.",
        "I agree to stop play and seek shelter when the golf club signals a lightning delay.",
      ],
    },
  },
  {
    id: "personal-property",
    title: "Personal property",
    category: "conduct-safety",
    purpose: "The course isn't liable for lost, stolen or damaged belongings.",
    agreement: {
      status: "draft",
      items: [
        "I understand that the golf club is not responsible for lost, stolen, or damaged personal property, including clubs and items left in carts.",
      ],
    },
  },

  // ── Legal & communications ──────────────────────────────────────────
  {
    id: "authorization-disputes",
    title: "Authorization and dispute resolution",
    category: "legal",
    purpose: "Card authorization for all fees, and using these terms as evidence in a chargeback.",
    agreement: {
      status: "sourced",
      source: LAYTONSVILLE,
      items: [
        "By providing my credit card information and booking a tee time, I authorize the golf club to charge my card for all applicable fees, including no-show fees, late cancellations, and any preselected merchandise add-ons.",
        "In the event of a dispute with my credit card company, these Terms and Conditions will serve as evidence that I agreed to the applicable charges under the stated policies.",
      ],
    },
  },
  {
    id: "communications",
    title: "Booking messages",
    category: "legal",
    purpose: "Consent to booking emails and texts, and how to opt out.",
    agreement: {
      status: "draft",
      items: [
        "I agree to receive emails and text messages about this reservation, including confirmations, reminders, and changes. Message and data rates may apply; I can opt out of texts at any time by replying STOP.",
      ],
    },
  },
];

export interface ResolvedTerm {
  id: TermId;
  title: string;
  items: string[];
  status: TermStatus;
}

const byId = new Map(termsCatalog.map((t) => [t.id, t]));

export const getTerm = (id: TermId): TermType => {
  const term = byId.get(id);
  if (!term) throw new Error(`Unknown term "${id}"`);
  return term;
};

/**
 * Resolve term ids into renderable sections in the given style. Terms with no
 * wording in that style are skipped, as are drafts unless `includeDrafts`.
 */
export const resolveTerms = (
  ids: TermId[],
  style: TermsStyle = "agreement",
  { includeDrafts = false }: { includeDrafts?: boolean } = {},
): ResolvedTerm[] =>
  ids.flatMap((id) => {
    const term = getTerm(id);
    const wording = term[style];
    if (!wording || (wording.status === "draft" && !includeDrafts)) return [];
    return [
      {
        id,
        title: wording.title ?? term.title,
        items: wording.items,
        status: wording.status,
      },
    ];
  });

/** Which terms each tee time email shows — the single source for emails and the Library. */
export const teeTimeEmailTerms = {
  Confirmation: [
    "payment-responsibility",
    "cancellation",
    "check-in",
    "pairing",
    "merchandise-add-ons",
    "green-fee-cart",
    "cart-rental",
    "authorization-disputes",
  ],
  "Golf Group Details": [
    "payment-responsibility",
    "cancellation",
    "check-in",
    "pairing",
    "merchandise-add-ons",
    "green-fee-cart",
    "cart-rental",
    "authorization-disputes",
  ],
  Modification: [
    "payment-responsibility",
    "cancellation",
    "check-in",
    "pairing",
    "merchandise-add-ons",
    "green-fee-cart",
    "cart-rental",
    "authorization-disputes",
  ],
  Reminder: ["cancellation", "check-in", "pairing"],
  Cancellation: ["cancellation"],
} satisfies Record<string, TermId[]>;

/** The house-rules set used by the "Course Notes" stories. */
export const courseNotesTermIds: TermId[] = [
  "pricing-tax",
  "cancellation",
  "check-in",
  "dress-code",
  "twilight",
  "maintenance-aeration",
];

/** Tee time emails that show a given term. */
export const emailsUsingTerm = (id: TermId): string[] =>
  Object.entries(teeTimeEmailTerms)
    .filter(([, ids]) => (ids as TermId[]).includes(id))
    .map(([email]) => email);
