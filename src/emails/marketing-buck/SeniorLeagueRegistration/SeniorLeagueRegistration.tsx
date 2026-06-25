import { ArrowRight, Calendar, Trophy01, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  JarretteFooter,
  JarretteHeader,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface SeniorLeagueRegistrationProps {
  firstName?: string;
  day?: string;
  startDate?: string;
  price?: string;
  registerUrl?: string;
}

const features = [
  {
    icon: Users01,
    title: "Great group, friendly play",
    body: "A welcoming weekly league for players 55+ of every skill level.",
  },
  {
    icon: Trophy01,
    title: "Weekly games & prizes",
    body: "Skins, closest-to-the-pin, and season-long standings to keep it fun.",
  },
  {
    icon: Calendar,
    title: "Same tee, every week",
    body: "A standing morning time so your week always has a round in it.",
  },
];

/**
 * Marketing Buck — Senior League Registration. Drives league sign-ups for the
 * 55+ weekly league, with member-pricing incentive.
 */
export const SeniorLeagueRegistration = ({
  firstName = golfer.firstName,
  day = "Wednesday mornings",
  startDate = "May 7",
  price = "$180 / season",
  registerUrl = "https://www.sagamoregolf.com/senior-league",
}: SeniorLeagueRegistrationProps) => {
  return (
    <EmailShell preheader={`The Senior League tees off ${startDate} — reserve your spot at member pricing.`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={marketingHeroes.seniorLeague.src}
        imageAlt={marketingHeroes.seniorLeague.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Senior league"
        headline="Make it a standing tee time"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, our 55+ Senior League is back, and it's the easiest way
          to keep golf in your week — good company, friendly games, and a tee time
          that's always yours.
        </p>

        <FeatureList className="mt-6" items={features} />

        <SectionHeading className="mt-8" title="League details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="When" value={day} />
          <DetailRow label="Season starts" value={startDate} />
          <DetailRow label="Fee" value={price} />
        </DetailCard>

        <Callout className="mt-6" tone="success" eyebrow="Early sign-up" icon={Trophy01}>
          Register before opening day and lock in member pricing for the full
          season. Spots are limited to keep pace comfortable.
        </Callout>

        <div className="mt-8">
          <CTAButton href={registerUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Join the League
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Want to bring a friend? Call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span>.
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
