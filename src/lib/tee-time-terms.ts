import type { CalloutTone } from "@/components/email";
import { course } from "@/lib/scenario";

/** One titled group of terms (e.g. "Cancellation Policy"). */
export interface TermsSection {
  title: string;
  items: string[];
}

/** A highlighted notice shown above the terms (e.g. a policy change alert). */
export interface TermsNotice {
  tone: CalloutTone;
  eyebrow: string;
  body: string;
  link?: { href: string; label: string };
}

/** Everything a course attaches to its tee time emails. */
export interface TeeTimeTerms {
  /** Header that tells the reader who "I" is when terms are first-person. */
  audience?: { title: string; body: string };
  notices?: TermsNotice[];
  sections: TermsSection[];
  /** Closing "by making this booking…" statement. */
  acknowledgment?: string;
}

/**
 * Formal booking terms, carried over from the legacy tee time confirmation
 * (Laytonsville / MCG Golf). Wording is kept as the course wrote it, in the
 * booker's first-person voice, because it's the agreement the booker accepted.
 */
export const standardTerms: TeeTimeTerms = {
  audience: {
    title: "You, the booker",
    body: "These terms are written in your voice — every “I” below means you, the person who booked this tee time and is responsible for the reservation.",
  },
  sections: [
    {
      title: "Responsibility for payment",
      items: [
        "As the individual booking this tee time (“the Booker”), I am financially responsible for the entire reservation, including all players listed.",
        "In the event any member(s) of my group do not show up for the scheduled tee time, I agree that the golf club may charge my credit card for the no-show(s).",
      ],
    },
    {
      title: "Cancellation policy",
      items: [
        "Cancellations must be made at least 24 hours prior to the scheduled tee time.",
        "Cancellations must be completed through my TenFore account or by contacting the golf club via phone no later than 24 hours in advance.",
        "I acknowledge that a cancellation is not complete until I receive a confirmation and that it is my responsibility to follow up with the golf course if the confirmation is not received.",
        "I understand and agree that if I fail to cancel or modify my booking within this timeframe, the golf club may charge my credit card in accordance with its no-show or late cancellation fee.",
      ],
    },
    {
      title: "Check-in requirement",
      items: ["All players must check in with the Starter before beginning play."],
    },
    {
      title: "Pairing of groups",
      items: [
        "I acknowledge that if my group has fewer than four players, the golf club may pair my group with other players to form a complete foursome.",
      ],
    },
    {
      title: "Online merchandise add-ons",
      items: [
        "As the Booker, I am responsible for any online merchandise or other add-ons selected during the reservation process.",
        "I authorize the golf club to charge my credit card for these add-ons at the time of booking or upon arrival, as applicable.",
      ],
    },
    {
      title: "Green fee and cart policy",
      items: [
        "Green Fee pricing does not include cart rentals, unless otherwise specified.",
        "Golf cart rental fees are separate, and I understand I will be charged accordingly if I choose to rent a cart.",
      ],
    },
    {
      title: "Golf cart rental terms",
      items: [
        "I must be at least 18 years of age and possess a valid driver’s license to rent or operate a golf cart.",
        "I agree not to allow any unlicensed individual to operate the cart.",
        "I accept financial responsibility for any damage to the cart during my rental period, whether caused by me or anyone operating the cart under my reservation.",
        "I agree to return the cart immediately upon completion of my round.",
      ],
    },
    {
      title: "Authorization and dispute resolution",
      items: [
        "By providing my credit card information and booking a tee time, I authorize the golf club to charge my card for all applicable fees, including no-show fees, late cancellations, and any preselected merchandise add-ons.",
        "In the event of a dispute with my credit card company, these Terms and Conditions will serve as evidence that I agreed to the applicable charges under the stated policies.",
      ],
    },
  ],
  acknowledgment:
    "By making this booking, I confirm that I have read, understood, and agree to abide by these Terms and Conditions. I further acknowledge that my credit card may be charged for any applicable fees in accordance with the policies set forth above.",
};

/** Pull a subset of sections by title — for the shorter reminder/cancel emails. */
export const pickSections = (terms: TeeTimeTerms, titles: string[]): TermsSection[] =>
  terms.sections.filter((s) => titles.includes(s.title));

/**
 * Free-form course notes, carried over from the legacy Coral Canyon
 * confirmation and re-pointed at the scenario course. Shows how a course that
 * writes "house rules" (rather than a formal agreement) lands in the same
 * layout: alerts become notices, the rest is grouped into titled sections.
 */
export const courseNotesTerms: TeeTimeTerms = {
  notices: [
    {
      tone: "error",
      eyebrow: "Policy change",
      body: "Starting September 1st 2025, we will not be allowing any “extra riders” or “extra carts” for any groups.",
    },
  ],
  sections: [
    {
      title: "Pricing and payment",
      items: [
        "The price shown for this tee time is per person and does not include tax. Tax (6.75%) will be added at check out, either online or in person at the golf course.",
        "A credit card is required at the time of booking, both online and over the phone, to make a tee time reservation.",
      ],
    },
    {
      title: "Cancellations",
      items: [
        "Cancellations must be made outside of 24 hours. Any no-show or cancellation within 24 hours will be charged the full rate.",
      ],
    },
    {
      title: "Before your round",
      items: [
        "Please arrive at least thirty minutes before your scheduled tee time to allow ample check-in time.",
        "Range balls are included in your golf fee and available prior to your tee time.",
      ],
    },
    {
      title: "Dress code",
      items: [
        "Proper golf attire is expected at all times. A shirt, pants/shorts, and footwear must be worn at all times.",
        "Denim of any kind is strictly prohibited, and collared shirts are required.",
        "Prohibited items include but are not limited to gym clothes, sleeveless and tank tops, and any items adorned with offensive, profane, or inappropriate words or images.",
        "Course management, in its sole and absolute discretion, may at any time deem attire inappropriate.",
      ],
    },
    {
      title: "Twilight tee times",
      items: [
        "Twilight tee times do not guarantee you will finish 18 holes, which is why they are discounted. During twilight time frames you have the option to play only 9 holes and pay the 9-hole rate — please check with the golf shop staff at check-in.",
      ],
    },
    {
      title: "Course maintenance",
      items: [
        `The driving range is closed Tuesday afternoons for maintenance. Times vary throughout the year — please call the golf shop at ${course.phone} for details.`,
        "Aeration: May 4th starting at 1:00 PM; May 5th–6th all day; August 15th–25th greens and golf course aeration.",
      ],
    },
  ],
};

/** Optional partner offer that rode along on the Coral Canyon confirmation. */
export const shipSticksNotice: TermsNotice = {
  tone: "info",
  eyebrow: "Travel partner",
  body: `${course.name} is proud to partner with Ship Sticks to provide an easier way to get your golf clubs to and from your golf trip. Save 10% by using our link.`,
  link: { href: "https://www.shipsticks.com/", label: "Set up your shipment" },
};
