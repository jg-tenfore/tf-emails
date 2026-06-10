import { ArrowRight, Clock, MarkerPin02 } from "@untitledui/icons";
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

export interface TeeTimeReminderProps {
  firstName?: string;
  booking?: BookingDetails;
  forecast?: { summary: string; tempF: number };
  directionsUrl?: string;
  manageUrl?: string;
}

const defaultBooking: BookingDetails = {
  course: "Augusta Pines — Championship Course",
  location: "1040 Fairway Drive, Augusta, GA",
  date: "Tomorrow · Saturday, June 14",
  time: "9:20 AM",
  players: 4,
  confirmationCode: "TF-8X4K2",
};

export const TeeTimeReminder = ({
  firstName = "Jordan",
  booking = defaultBooking,
  forecast = { summary: "Sunny, light breeze", tempF: 74 },
  directionsUrl = "https://maps.google.com/?q=Augusta+Pines",
  manageUrl = "https://tenforegolf.com/bookings/TF-8X4K2",
}: TeeTimeReminderProps) => {
  return (
    <EmailShell preheader={`Reminder: your tee time is ${booking.time} ${booking.date}.`}>
      <EmailHeader variant="brand" />

      <EmailSection padding="lg" align="center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-primary text-brand-secondary">
          <Clock className="size-6" />
        </span>
        <h1 className="mt-4 text-display-xs font-semibold text-primary">
          See you tomorrow, {firstName}
        </h1>
        <p className="mt-2 text-md text-secondary">
          Just a friendly reminder that your round is coming up. Here are the
          details one more time.
        </p>
      </EmailSection>

      <EmailSection padding="sm">
        <BookingCard
          booking={booking}
          status={{ label: "Tomorrow", color: "brand" }}
        />

        <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-section px-5 py-4 text-white">
          <div>
            <p className="text-xs font-medium text-white/70 uppercase">
              Forecast
            </p>
            <p className="mt-0.5 text-sm font-semibold">{forecast.summary}</p>
          </div>
          <p className="text-display-xs font-semibold">{forecast.tempF}°</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <CTAButton href={directionsUrl} size="lg" fullWidth iconLeading={MarkerPin02}>
            Get directions
          </CTAButton>
          <CTAButton
            href={manageUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Need to make a change?
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection tone="muted">
        <p className="text-sm font-semibold text-primary">Pre-round checklist</p>
        <ul className="mt-2 flex flex-col gap-1.5 text-sm text-tertiary">
          <li>· Check in at the pro shop 20 minutes early.</li>
          <li>· Bring a valid ID for cart rental.</li>
          <li>· Pack sunscreen and plenty of water.</li>
        </ul>
      </EmailSection>

      <EmailFooter reason="You're receiving this reminder for an upcoming Tenfore Golf tee time." />
    </EmailShell>
  );
};
