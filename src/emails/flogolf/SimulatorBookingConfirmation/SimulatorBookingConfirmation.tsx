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
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  ItemizedList,
  LocationBlock,
  Panel,
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
  const sessions = booking.sessions ?? [];
  const isMultiBay = sessions.length > 0;

  return (
    <EmailShell
      preheader={`Your ${flogolf.name} ${isMultiBay ? "bays are" : "bay is"} booked — ${booking.date}.`}
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
          isMultiBay
            ? `${sessions.length} bays · ${booking.date}`
            : `${booking.bay} · ${booking.date} · ${booking.startTime}–${booking.endTime}`,
          `Confirmation #${booking.confirmation}`,
        ]}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your simulator {isMultiBay ? "bays are" : "bay is"} locked in at{" "}
          {flogolf.name}. Bring your crew, grab a drink, and play world-famous
          courses on Golfzon — here are your details.
        </p>
        <div className="mt-5">
          <CTAButton href={manageUrl} size="lg" iconTrailing={ArrowRight}>
            Manage booking
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="lg">
        {isMultiBay ? (
          <>
            <SectionHeading title="Your bays" />
            <Panel className="mt-4">
              <ItemizedList
                items={sessions.map((s) => ({
                  label: s.bay,
                  sublabel: `${s.date} · ${s.time}`,
                  amount: s.price,
                }))}
              />
            </Panel>
            <p className="mt-3 text-sm text-tertiary">
              Confirmation{" "}
              <span className="font-mono tracking-wide text-secondary">
                #{booking.confirmation}
              </span>{" "}
              · {booking.players}{" "}
              {booking.players === 1 ? "player" : "players"}
            </p>
          </>
        ) : (
          <>
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
              <DetailRow label="Experience" value={booking.experience} />
              <DetailRow
                label="Confirmation"
                value={
                  <span className="font-mono tracking-wide">
                    #{booking.confirmation}
                  </span>
                }
              />
            </DetailCard>
          </>
        )}

        <LocationBlock
          className="mt-4"
          name={flogolf.name}
          address={`${flogolf.address.line1}, ${flogolf.address.line2}`}
          mapUrl={flogolf.mapUrl}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={
              isMultiBay
                ? undefined
                : [
                    {
                      label: `Bay rental — ${booking.duration} (${booking.ratePerHour})`,
                      value: booking.total,
                    },
                  ]
            }
            total={{ value: booking.total }}
            status="paid"
          />
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg" tone="muted">
        <SectionHeading title="Good to know" />
        <Checklist
          className="mt-3 gap-2"
          items={[
            "Arrive 10 minutes early to check in at the front desk.",
            "Clubs are provided, or bring your own — both play great.",
            "Full bar, food, and sports on the big screens while you play.",
            "Up to 6 players can share a bay; your rate covers the whole bay.",
          ]}
        />
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

      <EmailFooter reason={`You're receiving this because you booked at ${flogolf.name}.`} />
    </EmailShell>
  );
};
