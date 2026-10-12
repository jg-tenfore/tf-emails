import { bookerAudience } from "@/lib/tee-time-terms";
import { resolveTerms, type TermId, type TermsStyle } from "@/lib/terms-catalog";
import { TermsAndConditions, type TermsAndConditionsProps } from "./terms-and-conditions";

interface CourseTermsProps extends Omit<TermsAndConditionsProps, "sections" | "audience"> {
  /** Term types to show, in order. See the Terms Library for every id. */
  include: TermId[];
  /** Formal first-person agreement, or the course's house rules. */
  style?: TermsStyle;
  /** Show draft wording (flagged "Draft"). Off by default — drafts need course review. */
  includeDrafts?: boolean;
  /** Override or hide (`null`) the "You, the booker" header. Defaults on for agreements. */
  audience?: TermsAndConditionsProps["audience"] | null;
}

/**
 * Terms & conditions picked by type from the terms catalog — name the term ids
 * an email needs and the standard wording fills in. Terms with no wording in
 * the chosen style are skipped.
 */
export const CourseTerms = ({
  include,
  style = "agreement",
  includeDrafts = false,
  audience,
  ...rest
}: CourseTermsProps) => (
  <TermsAndConditions
    {...rest}
    audience={
      audience === null
        ? undefined
        : (audience ?? (style === "agreement" ? bookerAudience : undefined))
    }
    sections={resolveTerms(include, style, { includeDrafts }).map((t) => ({
      title: t.title,
      items: t.items,
      draft: t.status === "draft",
    }))}
  />
);
