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
import { golfer, teeTime } from "@/lib/scenario";

export interface TeeTimeReminderProps {
  firstName?: string;
  booking?: BookingDetails;
  forecast?: { summary: string; tempF: number };
  directionsUrl?: string;
  manageUrl?: string;
}

const defaultBooking: BookingDetails = {
  course: teeTime.course,
  location: "Lynnfield, MA",
  date: "Tomorrow · Monday, April 20",
  time: teeTime.time,
  players: teeTime.players,
  confirmationCode: teeTime.confirmation,
};

export const TeeTimeReminder = ({
  firstName = golfer.firstName,
  booking = defaultBooking,
  forecast = { summary: "Clear skies, light breeze", tempF: 58 },
  directionsUrl = teeTime.mapUrl,
  manageUrl = `https://www.sagamoregolf.com/reservations/${teeTime.confirmation}`,
}: TeeTimeReminderProps) => {
  return (
    <EmailShell preheader={`Reminder: your tee time is ${booking.time} ${booking.date}.`}>
      <EmailHeader />

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

        <div className="mt-4 flex items-center justify-between rounded-xl border border-secondary bg-secondary px-5 py-4">
          <div>
            <p className="text-xs font-medium text-tertiary uppercase">
              Forecast
            </p>
            <p className="mt-0.5 text-sm font-semibold text-primary">
              {forecast.summary}
            </p>
          </div>
          <p className="text-display-xs font-semibold text-brand-secondary">
            {forecast.tempF}°
          </p>
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
          <li>· Check in at the pro shop 15 minutes early.</li>
          <li>· Collared shirt required; no denim or tank tops.</li>
          <li>· Pack a layer — evenings get cool in Lynnfield.</li>
        </ul>
      </EmailSection>

      <EmailFooter reason="You're receiving this reminder for an upcoming Sagamore Spring Golf Club tee time." />
    </EmailShell>
  );
};
