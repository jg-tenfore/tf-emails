import { ArrowRight, Calendar } from "@untitledui/icons";
import { CTAButton } from "./cta-button";
import { CTAStack } from "./cta-stack";

interface BookingActionsProps {
  manageUrl: string;
  /** Defaults to `${manageUrl}/calendar`. */
  calendarUrl?: string;
  manageLabel?: string;
  calendarLabel?: string;
  className?: string;
}

/**
 * The standard booking button pair: a primary "Manage" button over a
 * secondary "Add to calendar" button. Used by tee time, event and clinic
 * emails so the order and colors stay the same everywhere.
 */
export const BookingActions = ({
  manageUrl,
  calendarUrl = `${manageUrl}/calendar`,
  manageLabel = "Manage reservation",
  calendarLabel = "Add to calendar",
  className,
}: BookingActionsProps) => (
  <CTAStack className={className}>
    <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
      {manageLabel}
    </CTAButton>
    <CTAButton href={calendarUrl} color="secondary" size="lg" fullWidth iconLeading={Calendar}>
      {calendarLabel}
    </CTAButton>
  </CTAStack>
);
