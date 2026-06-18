import {
  ArrowRight,
  Calendar,
  RefreshCw02,
  Trophy01,
  Users01,
} from "@untitledui/icons";
import {
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  type FieldChange,
  SectionHeading,
  StatusHero,
  WhatChanged,
} from "@/components/email";
import { golfEvent, golfer, type GolfEvent } from "@/lib/scenario";

export interface EventModificationProps {
  firstName?: string;
  event?: GolfEvent;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  manageUrl?: string;
}

const defaultChanges: FieldChange[] = [
  { label: "Date", from: "Jun 19", to: "Jun 20" },
  { label: "Players", from: "32", to: "40" },
  { label: "Format", from: "Scramble", to: "Best Ball" },
];

export const EventModification = ({
  firstName = golfer.firstName,
  event = golfEvent,
  changes = defaultChanges,
  manageUrl = `https://www.sagamoregolf.com/events/${golfEvent.eventId}`,
}: EventModificationProps) => {
  return (
    <EmailShell
      preheader={`Your event "${event.name}" was updated.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Event updated"
        title={`Your event changed, ${firstName}.`}
        subtitle="Here's what's different — and your updated event details."
        stamps={[{ label: "Event", value: `#${event.eventId}` }]}
      />

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Event details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
          <DetailRow label="Groups" value={event.groups} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAStack>
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Manage event
          </CTAButton>
          <CTAButton
            href={`${manageUrl}/calendar`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={RefreshCw02}
          >
            Update calendar
          </CTAButton>
        </CTAStack>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because your Sagamore Spring Golf Club event was updated." />
    </EmailShell>
  );
};
