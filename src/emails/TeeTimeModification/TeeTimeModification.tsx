import {
  ArrowRight,
  Calendar,
  Clock,
  Flag01,
  Users01,
} from "@untitledui/icons";
import {
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  type FieldChange,
  LocationBlock,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
  WhatChanged,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { golfer, teeTime as defaultTeeTime, type TeeTime } from "@/lib/scenario";

export interface TeeTimeModificationProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  /** Refund amount if the change reduced the total (e.g. fewer players). */
  refund?: string;
  manageUrl?: string;
}

const defaultChanges: FieldChange[] = [
  { label: "Tee time", from: "6:00 PM", to: "5:30 PM" },
  { label: "Players", from: "2", to: "3" },
];

export const TeeTimeModification = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  changes = defaultChanges,
  refund,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultTeeTime.confirmation}`,
}: TeeTimeModificationProps) => {
  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} was updated for ${teeTime.date}.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Reservation updated"
        title={`Your tee time changed, ${firstName}.`}
        subtitle="Here's what's different — and your updated reservation."
        stamps={[{ label: "Confirmation", value: `#${teeTime.confirmation}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your reservation at"
          logoUrl={assets.logo.src}
          name={teeTime.course}
          location={teeTime.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Updated reservation" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Date" value={teeTime.date} />
          <DetailRow icon={Clock} label="Tee time" value={teeTime.time} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${teeTime.players} ${teeTime.players === 1 ? "golfer" : "golfers"}`}
          />
          <DetailRow
            icon={Flag01}
            label="Holes"
            value={`${teeTime.holes} holes`}
          />
          <DetailRow
            label="Confirmation"
            value={<span className="font-mono">#{teeTime.confirmation}</span>}
          />
        </DetailCard>

        <LocationBlock
          className="mt-4"
          name={teeTime.course}
          address={teeTime.address}
          mapUrl={teeTime.mapUrl}
        />
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
        <CTAStack>
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Manage reservation
          </CTAButton>
          <CTAButton
            href={`${manageUrl}/calendar`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Calendar}
          >
            Update calendar
          </CTAButton>
        </CTAStack>
      </EmailSection>

      <EmailFooter reason="You're receiving this because your Sagamore Spring Golf Club tee time was changed." />
    </EmailShell>
  );
};
