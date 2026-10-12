import type { CalloutTone } from "@/components/email";
import { course } from "@/lib/scenario";
import { courseNotesTermIds, getTerm, resolveTerms, teeTimeEmailTerms } from "@/lib/terms-catalog";

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

/** Shown above first-person ("agreement" style) terms. */
export const bookerAudience = {
  title: "You, the booker",
  body: "These terms are written in your voice — every “I” below means you, the person who booked this tee time and is responsible for the reservation.",
};

/** Closing statement for agreement-style terms (Laytonsville / MCG Golf). */
export const bookingAcknowledgment =
  "By making this booking, I confirm that I have read, understood, and agree to abide by these Terms and Conditions. I further acknowledge that my credit card may be charged for any applicable fees in accordance with the policies set forth above.";

/**
 * Formal booking terms, carried over from the legacy tee time confirmation
 * (Laytonsville / MCG Golf). Wording is kept as the course wrote it, in the
 * booker's first-person voice, because it's the agreement the booker accepted.
 * Built from the terms catalog.
 */
export const standardTerms: TeeTimeTerms = {
  audience: bookerAudience,
  sections: resolveTerms(teeTimeEmailTerms.Confirmation, "agreement"),
  acknowledgment: bookingAcknowledgment,
};

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
      body: getTerm("group-size").houseRules!.items[0],
    },
  ],
  sections: resolveTerms(courseNotesTermIds, "houseRules"),
};

/** Optional partner offer that rode along on the Coral Canyon confirmation. */
export const shipSticksNotice: TermsNotice = {
  tone: "info",
  eyebrow: "Travel partner",
  body: `${course.name} is proud to partner with Ship Sticks to provide an easier way to get your golf clubs to and from your golf trip. Save 10% by using our link.`,
  link: { href: "https://www.shipsticks.com/", label: "Set up your shipment" },
};
