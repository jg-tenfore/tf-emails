import { ArrowRight, Clock, MarkerPin02, SunSetting03 } from "@untitledui/icons";
import {
  BookingCard,
  type BookingDetails,
  Checklist,
  CTAButton,
  CTAStack,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  ForecastCard,
} from "@/components/email";
import { assets } from "@/lib/assets";
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
          logoUrl={assets.logo.src}
          status={{ label: "Tomorrow", color: "brand" }}
        />

        <ForecastCard
          className="mt-4"
          summary={forecast.summary}
          tempF={forecast.tempF}
          icon={SunSetting03}
        />

        <CTAStack className="mt-6">
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
        </CTAStack>
      </EmailSection>

      <Divider />

      <EmailSection tone="muted">
        <p className="text-sm font-semibold text-primary">Pre-round checklist</p>
        <Checklist
          className="mt-2"
          items={[
            "Check in at the pro shop 15 minutes early.",
            "Collared shirt required; no denim or tank tops.",
            "Pack a layer — evenings get cool in Lynnfield.",
          ]}
        />
      </EmailSection>

      <EmailFooter reason="You're receiving this reminder for an upcoming Sagamore Spring Golf Club tee time." />
    </EmailShell>
  );
};
