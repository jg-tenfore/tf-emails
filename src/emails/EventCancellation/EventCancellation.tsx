import { Calendar, Trophy01, Users01, XCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfEvent, golfer, type GolfEvent } from "@/lib/scenario";

export interface EventCancellationProps {
  firstName?: string;
  event?: GolfEvent;
  /** Refund returned for the cancelled event. Defaults to the amount paid. */
  refund?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const EventCancellation = ({
  firstName = golfer.firstName,
  event = golfEvent,
  refund = golfEvent.paid,
  helpEmail = "proshop@sagamoregolf.com",
}: EventCancellationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Cancellation question - Event #${event.eventId}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your event "${event.name}" was cancelled.`}
    >
      <EmailHeader />

      <StatusHero
        tone="danger"
        eyebrow="Event cancelled"
        title={`Your event was cancelled, ${firstName}.`}
        subtitle="We've cancelled the event below. We hope to see your group back on the course soon."
        stamps={[{ label: "Event", value: `#${event.eventId}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your event at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <Callout tone="error" eyebrow="Cancelled" icon={XCircle}>
          Your event, {event.name}, has been cancelled.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Cancelled event" />
        <DetailCard className="mt-4">
          <DetailRow label="Event" value={event.name} />
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
        </DetailCard>
      </EmailSection>

      {refund ? (
        <>
          <Divider />
          <EmailSection padding="md">
            <SectionHeading title="Refund" />
            <div className="mt-4">
              <PaymentSummary
                total={{ label: "Refund", value: refund }}
                status="refund"
                note="Refunds take 2–3 business days to appear on your statement."
              />
            </div>
          </EmailSection>
        </>
      ) : null}

      <EmailSection padding="md">
        <CTAButton
          href={helpHref}
          color="secondary"
          size="lg"
          fullWidth
        >
          Contact the course
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Email the pro shop" />
      </EmailSection>

      <EmailFooter reason="You're receiving this because a Sagamore Spring Golf Club event was cancelled." />
    </EmailShell>
  );
};
