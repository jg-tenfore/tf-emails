import {
  ArrowRight,
  Calendar,
  InfoCircle,
  Trophy01,
  Users01,
} from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import { golfEvent, golfer, type GolfEvent } from "@/lib/scenario";

export interface EventInvitationProps {
  /** The invitee receiving this email. */
  firstName?: string;
  event?: GolfEvent;
  /** Who sent the invitation. */
  organizer?: string;
  viewUrl?: string;
  helpEmail?: string;
}

export const EventInvitation = ({
  firstName = golfer.firstName,
  event = golfEvent,
  organizer = golfEvent.organizer,
  viewUrl = `https://www.sagamoregolf.com/events/${golfEvent.eventId}`,
  helpEmail = "proshop@sagamoregolf.com",
}: EventInvitationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Event invitation - Event #${event.eventId}`,
  )}`;

  return (
    <EmailShell
      preheader={`${organizer} invited you to play in ${event.name}.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="You're invited"
        title="You're on the roster"
        subtitle={`${organizer} invited you to play`}
        stamps={[
          { label: "Invitation", value: `#${event.invitationId}` },
          { label: "Event", value: `#${event.eventId}` },
        ]}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="You're on the roster" icon={InfoCircle}>
          {organizer} invited you to play in {event.name}.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Event" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
          <DetailRow label="Transportation" value="Cart provided" />
        </DetailCard>

        <SectionHeading title="Players" className="mt-6" />
        <DetailCard className="mt-4">
          <DetailRow label="Invited by" value={organizer} />
          <DetailRow label="Playing as" value={firstName} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={viewUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          View event
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the course">
          Can't make it?
        </SupportLine>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you were invited to an event at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
