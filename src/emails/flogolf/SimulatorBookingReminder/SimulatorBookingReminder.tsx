import {
  ArrowRight,
  Calendar,
  Clock,
  MarkerPin02,
  Users01,
} from "@untitledui/icons";
import {
  Checklist,
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  SectionHeading,
} from "@/components/email";
import { golfer } from "@/lib/scenario";
import { flogolf, type SimBooking, simBooking } from "@/lib/flogolf";

export interface SimulatorBookingReminderProps {
  firstName?: string;
  booking?: SimBooking;
  directionsUrl?: string;
  manageUrl?: string;
}

export const SimulatorBookingReminder = ({
  firstName = golfer.firstName,
  booking = simBooking,
  directionsUrl = flogolf.mapUrl,
  manageUrl = flogolf.bookingUrl,
}: SimulatorBookingReminderProps) => {
  return (
    <EmailShell
      preheader={`Reminder: your ${flogolf.name} bay is ${booking.startTime} on ${booking.date}.`}
    >
      <EmailHeader />

      <EmailHero
        imageUrl={flogolf.loungeImage}
        imageAlt={`${flogolf.name} simulator lounge`}
        logoUrl={flogolf.logo}
        logoAlt={flogolf.name}
        eyebrow="Upcoming booking"
        headline={`See you soon, ${firstName}.`}
        details={[
          `${flogolf.name} · ${flogolf.address.line1}, ${flogolf.address.line2}`,
          `${booking.bay} · ${booking.date} · ${booking.startTime}–${booking.endTime}`,
        ]}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your simulator bay is coming up — here are the details one more time.
        </p>
      </EmailSection>

      <EmailSection padding="lg">
        <SectionHeading title="Your simulator session" />
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

        <CTAStack className="mt-6">
          <CTAButton
            href={directionsUrl}
            size="lg"
            fullWidth
            iconLeading={MarkerPin02}
          >
            Get directions
          </CTAButton>
          <CTAButton
            href={manageUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Manage booking
          </CTAButton>
        </CTAStack>
      </EmailSection>

      <EmailSection padding="lg" tone="muted">
        <p className="text-sm font-semibold text-primary">Before you arrive</p>
        <Checklist
          className="mt-2"
          items={[
            "Arrive 10 minutes early to check in at the front desk.",
            "Clubs are provided, or bring your own — both play great.",
            "Full bar and food are available all session long.",
            "Up to 6 players can share a bay; the rate covers the bay.",
          ]}
        />
      </EmailSection>

      <EmailFooter reason="You're receiving this reminder for an upcoming FloGolf Lounge simulator booking." />
    </EmailShell>
  );
};
