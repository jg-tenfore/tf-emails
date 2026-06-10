import {
  ArrowRight,
  Calendar,
  Clock,
  MarkerPin02,
  Users01,
} from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
} from "@/components/email";
import { golfer } from "@/lib/scenario";
import { flogolf, type SimBooking, simBooking } from "@/lib/flogolf";

export interface SimulatorBookingConfirmationProps {
  firstName?: string;
  booking?: SimBooking;
  manageUrl?: string;
}

export const SimulatorBookingConfirmation = ({
  firstName = golfer.firstName,
  booking = simBooking,
  manageUrl = flogolf.bookingUrl,
}: SimulatorBookingConfirmationProps) => {
  return (
    <EmailShell
      preheader={`Your ${flogolf.name} bay is booked — ${booking.bay}, ${booking.date} at ${booking.startTime}.`}
    >
      <EmailHeader />

      <EmailHero
        imageUrl={flogolf.loungeImage}
        imageAlt={`${flogolf.name} simulator lounge`}
        logoUrl={flogolf.logo}
        logoAlt={flogolf.name}
        eyebrow="Booking confirmed"
        headline={`You're booked, ${firstName}.`}
        details={[
          `${flogolf.name} · ${flogolf.address.line1}, ${flogolf.address.line2}`,
          `${booking.bay} · ${booking.date} · ${booking.startTime}–${booking.endTime}`,
          `Confirmation #${booking.confirmation}`,
        ]}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your simulator bay at {flogolf.name} is locked in. Bring your crew,
          grab a drink, and play world-famous courses on Golfzon — here are your
          details.
        </p>
        <div className="mt-5">
          <CTAButton href={manageUrl} size="lg" iconTrailing={ArrowRight}>
            Manage booking
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="lg">
        <SectionHeading title="Your simulator session" />
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
          <DetailRow label="Experience" value={booking.experience} />
          <DetailRow
            label="Confirmation"
            value={
              <span className="font-mono tracking-wide">
                #{booking.confirmation}
              </span>
            }
          />
        </div>

        <div className="mt-4 flex items-start gap-3">
          <MarkerPin02 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
          <p className="text-sm text-secondary">
            <span className="font-semibold text-primary">{flogolf.name}</span>
            <br />
            {flogolf.address.line1}, {flogolf.address.line2} ·{" "}
            <a
              href={flogolf.mapUrl}
              className="font-medium text-brand-secondary underline underline-offset-2"
            >
              Map it
            </a>
          </p>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              {
                label: `Bay rental — ${booking.duration} (${booking.ratePerHour})`,
                value: booking.total,
              },
            ]}
            total={{ value: booking.total }}
            status="paid"
          />
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg" tone="muted">
        <SectionHeading title="Good to know" />
        <ul className="mt-3 flex flex-col gap-2 text-sm text-tertiary">
          <li>· Arrive 10 minutes early to check in at the front desk.</li>
          <li>· Clubs are provided, or bring your own — both play great.</li>
          <li>
            · Full bar, food, and sports on the big screens while you play.
          </li>
          <li>
            · Up to 6 players can share a bay; your rate covers the whole bay.
          </li>
        </ul>
        <div className="mt-5">
          <CTAButton
            href={flogolf.mapUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={MarkerPin02}
          >
            Get directions
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you booked a simulator bay at ${flogolf.name}.`} />
    </EmailShell>
  );
};
