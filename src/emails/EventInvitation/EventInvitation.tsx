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
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfEvent, golfer, type GolfEvent } from "@/lib/scenario";

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
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="You're invited to play at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
          <DetailRow label="Transportation" value="Cart provided" />
        </div>

        <SectionHeading title="Players" className="mt-6" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Invited by" value={organizer} />
          <DetailRow label="Playing as" value={firstName} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={viewUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          View event
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          Can't make it?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the course
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you were invited to an event at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
