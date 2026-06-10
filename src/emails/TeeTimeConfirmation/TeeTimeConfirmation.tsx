import { ArrowRight, Calendar, CheckCircle } from "@untitledui/icons";
import {
  BookingCard,
  type BookingDetails,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
} from "@/components/email";

export interface TeeTimeConfirmationProps {
  firstName?: string;
  booking?: BookingDetails;
  manageUrl?: string;
}

const defaultBooking: BookingDetails = {
  course: "Augusta Pines — Championship Course",
  location: "1040 Fairway Drive, Augusta, GA",
  date: "Saturday, June 14, 2026",
  time: "9:20 AM",
  players: 4,
  confirmationCode: "TF-8X4K2",
};

export const TeeTimeConfirmation = ({
  firstName = "Jordan",
  booking = defaultBooking,
  manageUrl = "https://tenforegolf.com/bookings/TF-8X4K2",
}: TeeTimeConfirmationProps) => {
  return (
    <EmailShell preheader={`Your tee time is confirmed for ${booking.date}.`}>
      <EmailHeader variant="brand" />

      <EmailSection padding="lg" align="center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-success-primary text-fg-success-primary">
          <CheckCircle className="size-6" />
        </span>
        <h1 className="mt-4 text-display-xs font-semibold text-primary">
          You're all set, {firstName}!
        </h1>
        <p className="mt-2 text-md text-secondary">
          Your tee time is confirmed. We've saved your spot and sent a copy of
          these details to your inbox.
        </p>
      </EmailSection>

      <EmailSection padding="sm">
        <BookingCard
          booking={booking}
          status={{ label: "Confirmed", color: "success" }}
        />

        <div className="mt-6 flex flex-col gap-3">
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            View or manage booking
          </CTAButton>
          <CTAButton
            href={`${manageUrl}/calendar`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Calendar}
          >
            Add to calendar
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection tone="muted">
        <p className="text-sm font-semibold text-primary">Good to know</p>
        <ul className="mt-2 flex flex-col gap-1.5 text-sm text-tertiary">
          <li>· Arrive 20 minutes early to check in at the pro shop.</li>
          <li>· Free cancellation up to 24 hours before your tee time.</li>
          <li>· Soft spikes and collared shirts required on the course.</li>
        </ul>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you booked a tee time with Tenfore Golf." />
    </EmailShell>
  );
};
