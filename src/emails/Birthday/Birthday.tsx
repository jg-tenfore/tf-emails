import { ArrowRight, CheckCircle, Heart } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";

export interface BirthdayProps {
  firstName?: string;
  planVisitUrl?: string;
  perk?: string;
}

export const Birthday = ({
  firstName = golfer.firstName,
  planVisitUrl = course.bookingUrl,
  perk = "a complimentary range bucket",
}: BirthdayProps) => {
  return (
    <EmailShell preheader={`Happy birthday, ${firstName}! A little something from Sagamore Spring.`}>
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="A note from"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        icon={Heart}
        eyebrow="Happy birthday"
        title={`Happy birthday, ${firstName}!`}
        subtitle="Wishing you a great year ahead."
      />

      <EmailSection padding="md">
        <Callout tone="success" eyebrow="A note from the course" icon={CheckCircle}>
          Happy birthday from everyone at Sagamore Spring! Stop by this week and
          enjoy {perk} on us — just mention this email at the pro shop.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={planVisitUrl}
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          Plan your visit
        </CTAButton>
      </EmailSection>

      <EmailFooter reason="You're receiving this birthday note as a Sagamore Spring Golf Club member." />
    </EmailShell>
  );
};
