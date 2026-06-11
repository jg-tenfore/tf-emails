import { ArrowRight, Calendar, Clock, Flag01, Users01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import {
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailIntro,
  EmailSection,
  EmailShell,
  LocationBlock,
  PaymentSummary,
  PlayerRoster,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import {
  courseImage,
  golfer,
  revisedBooking,
  type RevisedBooking,
} from "@/lib/scenario";

export interface WorkshopTeeTimeConfirmationProps {
  firstName?: string;
  booking?: RevisedBooking;
  manageUrl?: string;
}

export const WorkshopTeeTimeConfirmation = ({
  firstName = golfer.firstName,
  booking = revisedBooking,
  manageUrl = `https://www.sagamoregolf.com/reservations/${revisedBooking.teeTimeId}`,
}: WorkshopTeeTimeConfirmationProps) => {
  const players = booking.roster.length;
  return (
    <EmailShell
      preheader={`You're booked at ${booking.course} — ${booking.date} at ${booking.time}.`}
    >
      <EmailHeader />

      {/* Intro — one reservation CTA + promoted Add to calendar */}
      <EmailSection padding="lg">
        <EmailIntro
          title={`You're booked, ${firstName}.`}
          subtitle={`Your group is confirmed for ${booking.date} at ${booking.time}. Add it to your calendar so it's locked in.`}
        >
          <CTAStack>
            <CTAButton href={`${manageUrl}/calendar`} size="lg" fullWidth iconLeading={Calendar}>
              Add to calendar
            </CTAButton>
            <CTAButton href={manageUrl} color="secondary" size="lg" fullWidth iconTrailing={ArrowRight}>
              Manage reservation
            </CTAButton>
          </CTAStack>
        </EmailIntro>
      </EmailSection>

      {/* Course-image hero */}
      <EmailHero
        imageUrl={courseImage}
        imageAlt={booking.course}
        logoUrl={assets.logo.src}
        logoAlt={booking.course}
        eyebrow="Tee time confirmed"
        headline={booking.course}
        details={[booking.layout, `${booking.date} · ${booking.time}`]}
      />

      {/* Player roster — names + per-player rate */}
      <EmailSection padding="lg">
        <SectionHeading
          title="Your group"
          aside={
            <Badge type="pill-color" color="gray" size="md">
              {players} players
            </Badge>
          }
        />
        <PlayerRoster className="mt-4" players={booking.roster} />
        <p className="mt-2 text-xs text-tertiary">
          Each golfer is added to the tee time — rates can differ within a group.
        </p>
      </EmailSection>

      <Divider />

      {/* Tee time details — incl. sub-course/layout + Tee Time ID */}
      <EmailSection padding="lg">
        <SectionHeading title="Tee time details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Date" value={booking.date} />
          <DetailRow icon={Clock} label="Tee time" value={booking.time} />
          <DetailRow label="Course" value={booking.course} />
          <DetailRow label="Layout" value={booking.layout} />
          <DetailRow
            icon={Flag01}
            label="Holes"
            value={`${booking.holes} holes`}
          />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${players} golfers`}
          />
          <DetailRow
            label="Tee Time ID"
            value={<span className="font-mono">{booking.teeTimeId}</span>}
          />
          <DetailRow
            label="Confirmation"
            value={<span className="font-mono">#{booking.confirmation}</span>}
          />
        </DetailCard>

        <LocationBlock
          className="mt-4"
          name={booking.course}
          note={booking.layout}
          address={booking.address}
          mapUrl={booking.mapUrl}
        />
      </EmailSection>

      <Divider />

      {/* Payment — itemized, supports mixed per-player rates */}
      <EmailSection padding="lg">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              {
                label: `Green fees (${players} players · mixed rates)`,
                value: booking.greenFees,
              },
              { label: "Cart fee", value: booking.cartFee },
              { label: "Tax", value: booking.tax },
            ]}
            total={{ label: "Total paid", value: booking.total }}
            status="paid"
            note="Rates vary by player — see Your group above for the per-player breakdown."
          />
        </div>
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you booked a tee time at ${booking.course}.`} />
    </EmailShell>
  );
};
