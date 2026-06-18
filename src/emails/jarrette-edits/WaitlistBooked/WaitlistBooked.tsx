import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MarkerPin02,
} from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  StatusHero,
  SupportLine,
} from "@/components/email";
import {
  golfer,
  teeTime as defaultTeeTime,
  type TeeTime,
} from "@/lib/scenario";

export interface WaitlistBookedProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** Whether payment is collected on arrival or already charged. */
  paymentMode?: "pay-at-course" | "paid";
  teeTimeId?: string;
  manageUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const WaitlistBooked = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  paymentMode = "pay-at-course",
  teeTimeId = "48211",
  manageUrl = "https://www.sagamoregolf.com/reservations",
  helpEmail = "proshop@sagamoregolf.com",
}: WaitlistBookedProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Waitlist booking question - Tee Time #${teeTimeId}`,
  )}`;

  const calloutBody =
    paymentMode === "paid"
      ? "Good news — a spot opened and we booked it for you. We charged the card on file; a separate receipt will follow."
      : "Good news — a spot opened and we booked it for you. Pay at the pro shop when you arrive.";

  return (
    <EmailShell
      preheader={`You're booked from the waitlist at ${teeTime.course} on ${teeTime.date}.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Waitlist filled"
        title={`You're booked from the waitlist, ${firstName}.`}
        stamps={[{ label: "Tee time", value: `#${teeTimeId}` }]}
      />

      <EmailSection padding="md">
        <Callout tone="success" eyebrow="Waitlist filled" icon={CheckCircle}>
          {calloutBody}
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <DetailCard>
          <DetailRow
            icon={Calendar}
            label="When"
            value={`${teeTime.date} · ${teeTime.time}`}
          />
          <DetailRow icon={MarkerPin02} label="Course" value={teeTime.course} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={manageUrl}
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          Manage reservation
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the pro shop" />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because a spot opened on your Sagamore Spring Golf Club waitlist and we booked it for you." />
    </EmailShell>
  );
};
