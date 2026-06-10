import {
  Calendar,
  Clock,
  Flag01,
  MarkerPin02,
  RefreshCw02,
  Users01,
} from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
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

      <EmailSection padding="md">
        <VenueBadge
          label="Your reservation at"
          logoUrl={assets.logo.src}
          name={teeTime.course}
          location={teeTime.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Reservation cancelled"
        title={`Your tee time was cancelled, ${firstName}.`}
        subtitle="We've cancelled the reservation below. We hope to see you back on the course soon."
        stamps={[{ label: "Confirmation", value: `#${teeTime.confirmation}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Cancelled reservation" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
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
        </div>

        <div className="mt-4 flex items-start gap-3">
          <MarkerPin02 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
          <p className="text-sm text-secondary">
            <span className="font-semibold text-primary">{teeTime.course}</span>
            <br />
            {teeTime.address}
          </p>
        </div>
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
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the pro shop
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because a Sagamore Spring Golf Club tee time was cancelled." />
    </EmailShell>
  );
};
