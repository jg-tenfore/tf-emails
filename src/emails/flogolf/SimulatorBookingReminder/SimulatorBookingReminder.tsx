import { ArrowRight, Clock, MarkerPin02 } from "@untitledui/icons";
import {
  BookingCard,
  Checklist,
  CTAButton,
  CTAStack,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  IconBadge,
  PolicyTag,
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

      <EmailSection padding="lg" align="center">
        <IconBadge icon={Clock} shape="circle" size="lg" className="mx-auto" />
        <h1 className="mt-4 text-display-xs font-semibold text-primary">
          See you soon, {firstName}
        </h1>
        <p className="mt-2 text-md text-secondary">
          Your simulator bay is coming up — here are the details one more time.
        </p>
      </EmailSection>

      <EmailSection padding="sm">
        <PolicyTag block color="pink" className="mb-4">
          Inside 24 hours, this rate is non-refundable
        </PolicyTag>

        <BookingCard
          booking={{
            course: flogolf.name,
            location: `${flogolf.address.line1}, ${flogolf.address.line2}`,
            unit: { label: "Bay", value: booking.bay },
            date: booking.date,
            time: `${booking.startTime}–${booking.endTime} (${booking.duration})`,
            players: booking.players,
            confirmationCode: booking.confirmation,
          }}
          logoUrl={flogolf.logo}
          logoAlt={flogolf.name}
          timeLabel="Time"
          playerNoun="player"
          status={{ label: "Upcoming", color: "brand" }}
        />

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

      <Divider />

      <EmailSection tone="muted">
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
