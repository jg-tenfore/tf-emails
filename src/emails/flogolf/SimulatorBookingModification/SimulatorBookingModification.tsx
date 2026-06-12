import { ArrowRight, Calendar, Clock, Users01 } from "@untitledui/icons";
import {
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  type FieldChange,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
  WhatChanged,
} from "@/components/email";
import { golfer } from "@/lib/scenario";
import { flogolf, type SimBooking, simBooking } from "@/lib/flogolf";

export interface SimulatorBookingModificationProps {
  firstName?: string;
  booking?: SimBooking;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  /** Refund amount if the change reduced the total. */
  refund?: string;
  manageUrl?: string;
}

const defaultChanges: FieldChange[] = [
  { label: "Time", from: "6:00 PM", to: "7:00 PM" },
  { label: "Bay", from: "Bay 7", to: "Bay 9" },
];

export const SimulatorBookingModification = ({
  firstName = golfer.firstName,
  booking = simBooking,
  changes = defaultChanges,
  refund,
  manageUrl = flogolf.bookingUrl,
}: SimulatorBookingModificationProps) => {
  return (
    <EmailShell
      preheader={`Your ${flogolf.name} bay booking was updated for ${booking.date}.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Booking updated"
        title={`Your bay booking changed, ${firstName}.`}
        subtitle="Here's what's different — and your updated session."
        stamps={[{ label: "Confirmation", value: `#${booking.confirmation}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your booking at"
          logoUrl={flogolf.logo}
          name={flogolf.name}
          location={`${flogolf.address.line1}, ${flogolf.address.line2}`}
          mapUrl={flogolf.mapUrl}
        />
      </EmailSection>

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Updated session" />
        <DetailCard className="mt-4">
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
          <DetailRow
            label="Confirmation"
            value={
              <span className="font-mono tracking-wide">
                #{booking.confirmation}
              </span>
            }
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
          href={manageUrl}
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          Manage booking
        </CTAButton>
      </EmailSection>

      <EmailFooter reason="You're receiving this because your FloGolf Lounge simulator booking was changed." />
    </EmailShell>
  );
};
