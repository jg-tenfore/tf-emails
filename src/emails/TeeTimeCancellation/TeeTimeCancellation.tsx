import {
  Calendar,
  Clock,
  Flag01,
  RefreshCw02,
  Users01,
} from "@untitledui/icons";
import {
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  LocationBlock,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { golfer, teeTime as defaultTeeTime, type TeeTime } from "@/lib/scenario";

export interface TeeTimeCancellationProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** Refund returned for the cancelled tee time. Omit for a non-refundable cancel. */
  refund?: string;
  rebookUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const TeeTimeCancellation = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  refund = "$221.52",
  rebookUrl = "https://www.sagamoregolf.com/teetimes",
  helpEmail = "proshop@sagamoregolf.com",
}: TeeTimeCancellationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Cancellation question - Tee Time #${teeTime.confirmation}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} on ${teeTime.date} was cancelled.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Reservation cancelled"
        title={`Your tee time was cancelled, ${firstName}.`}
        subtitle="We've cancelled the reservation below. We hope to see you back on the course soon."
        stamps={[{ label: "Confirmation", value: `#${teeTime.confirmation}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your reservation at"
          logoUrl={assets.logo.src}
          name={teeTime.course}
          location={teeTime.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Cancelled reservation" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Date" value={teeTime.date} />
          <DetailRow icon={Clock} label="Tee time" value={teeTime.time} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${teeTime.players} ${teeTime.players === 1 ? "golfer" : "golfers"}`}
          />
          <DetailRow
            icon={Flag01}
            label="Holes"
            value={`${teeTime.holes} holes`}
          />
        </DetailCard>

        <LocationBlock
          className="mt-4"
          name={teeTime.course}
          address={teeTime.address}
        />
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

      <EmailFooter reason="You're receiving this because a Sagamore Spring Golf Club tee time was cancelled." />
    </EmailShell>
  );
};
