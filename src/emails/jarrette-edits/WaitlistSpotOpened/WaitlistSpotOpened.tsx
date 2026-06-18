import { ArrowRight, Bell01, Calendar, MarkerPin02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  StatusHero,
} from "@/components/email";
import {
  golfer,
  teeTime as defaultTeeTime,
  type TeeTime,
} from "@/lib/scenario";

export interface WaitlistSpotOpenedProps {
  firstName?: string;
  teeTime?: TeeTime;
  waitlistId?: string;
  bookUrl?: string;
  /** mailto address for the "Leave the waitlist" opt-out link. */
  optOutEmail?: string;
}

export const WaitlistSpotOpened = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  waitlistId = "48211",
  bookUrl = "https://www.sagamoregolf.com/teetimes",
  optOutEmail = "proshop@sagamoregolf.com",
}: WaitlistSpotOpenedProps) => {
  const optOutHref = `mailto:${optOutEmail}?subject=${encodeURIComponent(
    `Leave the waitlist - #${waitlistId}`,
  )}`;

  return (
    <EmailShell
      preheader={`A spot opened on your waitlist at ${teeTime.course} — book now before it's gone.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Waitlist"
        title={`A spot opened up, ${firstName}.`}
        subtitle="Grab it before someone else does."
        stamps={[{ label: "Tee time", value: `#${waitlistId}` }]}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Heads up — spots go fast" icon={Bell01}>
          A spot just opened on your waitlist. The first golfer to confirm gets
          it — we're not holding it for you, so book now if you still want to
          play.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <DetailCard>
          <DetailRow
            icon={Calendar}
            label="When"
            value={`${teeTime.date} · ${teeTime.time}`}
          />
          <DetailRow icon={MarkerPin02} label="Course" value={teeTime.course} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={bookUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          Book now
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          <a
            href={optOutHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Not interested? Leave the waitlist
          </a>
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you joined the waitlist for a Sagamore Spring Golf Club tee time." />
    </EmailShell>
  );
};
