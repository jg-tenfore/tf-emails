import {
  RefreshCw02,
  XCircle,
} from "@untitledui/icons";
import {
  Callout,
  CourseTerms,
  CTAButton,
  Divider,
  EmailSection,
  EmailShell,
  JarretteFooter,
  JarretteHeader,
  RefundSection,
  SectionHeading,
  StatusHero,
  SupportLine,
  TeeTimeDetails,
} from "@/components/email";
import { golfer, teeTime as defaultTeeTime, type TeeTime } from "@/lib/scenario";
import { teeTimeEmailTerms, type TermId } from "@/lib/terms-catalog";

export interface TeeTimeCancellationProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** Refund returned for the cancelled tee time. Omit for a non-refundable cancel. */
  refund?: string;
  rebookUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
  /** The cancellation terms this cancel was processed under. */
  terms?: TermId[];
}

export const TeeTimeCancellation = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  refund = "$221.52",
  rebookUrl = "https://www.sagamoregolf.com/teetimes",
  helpEmail = "proshop@sagamoregolf.com",
  terms = teeTimeEmailTerms.Cancellation,
}: TeeTimeCancellationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Cancellation question - Tee Time #${teeTime.confirmation}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} on ${teeTime.date} was cancelled.`}
    >
      <JarretteHeader />

      <StatusHero
        tone="danger"
        eyebrow="Reservation cancelled"
        title={`Your tee time was cancelled, ${firstName}.`}
        subtitle="We've cancelled the reservation below. We hope to see you back on the course soon."
        stamps={[{ label: "Confirmation", value: `#${teeTime.confirmation}` }]}
      />

      <EmailSection padding="md">
        <Callout tone="error" eyebrow="Cancelled" icon={XCircle}>
          Your tee time on {teeTime.date} has been cancelled and removed from the
          tee sheet. Keep this email — it's your cancellation confirmation.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Cancelled reservation" />
        <TeeTimeDetails
          className="mt-4"
          date={teeTime.date}
          time={teeTime.time}
          players={teeTime.players}
          holes={teeTime.holes}
        />
      </EmailSection>

      {refund ? <RefundSection amount={refund} /> : null}

      <Divider />

      <EmailSection padding="md">
        <CourseTerms
          title="Cancellation terms"
          description="This cancellation was processed under the terms you agreed to when you booked."
          include={terms}
        />
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={rebookUrl}
          color="secondary"
          size="lg"
          fullWidth
          iconLeading={RefreshCw02}
        >
          Book again
        </CTAButton>
        <SupportLine
          className="mt-4"
          href={helpHref}
          linkText="Contact the pro shop"
        />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because a Sagamore Spring Golf Club tee time was cancelled." />
    </EmailShell>
  );
};
