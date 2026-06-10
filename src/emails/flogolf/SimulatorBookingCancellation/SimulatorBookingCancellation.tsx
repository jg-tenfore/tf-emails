import {
  Calendar,
  Clock,
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
import { golfer } from "@/lib/scenario";
import { flogolf, type SimBooking, simBooking } from "@/lib/flogolf";

export interface SimulatorBookingCancellationProps {
  firstName?: string;
  booking?: SimBooking;
  /** Refund returned for the cancelled booking. Omit for a non-refundable cancel. */
  refund?: string;
  rebookUrl?: string;
}

export const SimulatorBookingCancellation = ({
  firstName = golfer.firstName,
  booking = simBooking,
  refund = "$120.00",
  rebookUrl = flogolf.bookingUrl,
}: SimulatorBookingCancellationProps) => {
  const helpHref = `mailto:hello@flogolflounge.com?subject=${encodeURIComponent(
    `Cancellation question — Booking #${booking.confirmation}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your ${flogolf.name} bay booking on ${booking.date} was cancelled.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your booking at"
          logoUrl={flogolf.logo}
          name={flogolf.name}
          location={`${flogolf.address.line1}, ${flogolf.address.line2}`}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Booking cancelled"
        title={`Your bay booking was cancelled, ${firstName}.`}
        subtitle="We hope to see you back at the lounge soon."
        stamps={[{ label: "Confirmation", value: `#${booking.confirmation}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Cancelled session" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Bay" value={booking.bay} />
          <DetailRow icon={Calendar} label="Date" value={booking.date} />
          <DetailRow
            icon={Clock}
            label="Time"
            value={`${booking.startTime}–${booking.endTime} (${booking.duration})`}
          />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${booking.players} ${booking.players === 1 ? "player" : "players"}`}
          />
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
          Book another bay
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Email the lounge
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because a FloGolf Lounge simulator booking was cancelled." />
    </EmailShell>
  );
};
