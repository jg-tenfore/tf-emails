import { ArrowRight, Calendar, Flag01, HeartHand, Trophy01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  BuckFooter,
  BuckHeader,
  SectionHeading,
} from "@/components/email";
import { golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface ScrambleCharityRegistrationProps {
  firstName?: string;
  cause?: string;
  date?: string;
  format?: string;
  pricePerTeam?: string;
  registerUrl?: string;
}

const features = [
  {
    icon: Flag01,
    title: "Four-person scramble",
    body: "A relaxed, fun format for every skill level — bring your crew.",
  },
  {
    icon: Trophy01,
    title: "Lunch, prizes & contests",
    body: "Green fees, cart, lunch, and on-course contests all included.",
  },
  {
    icon: HeartHand,
    title: "Play for a cause",
    body: "Every registration supports a great local cause — golf that gives back.",
  },
];

/**
 * Marketing Buck — Scramble Charity Event Registration. Drives tournament
 * registrations for a charity scramble, with an early-bird team incentive.
 */
export const ScrambleCharityRegistration = ({
  firstName = golfer.firstName,
  cause = "the First Tee of Greater Boston",
  date = "Saturday, August 16 · 8:00 AM shotgun",
  format = "4-person scramble",
  pricePerTeam = "$600 / foursome",
  registerUrl = "https://www.sagamoregolf.com/charity-scramble",
}: ScrambleCharityRegistrationProps) => {
  return (
    <EmailShell preheader={`Register your foursome for the Charity Scramble benefiting ${cause}.`}>
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.charityScramble.src}
        imageAlt={marketingHeroes.charityScramble.alt}
        imageHeight={268}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, round up three friends and join us for our annual
          Charity Scramble. A great day of golf, great prizes, and every entry
          supports {cause}.
        </p>

        <FeatureList className="mt-6" items={features} />

        <SectionHeading className="mt-8" title="Event details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="When" value={date} />
          <DetailRow label="Format" value={format} />
          <DetailRow label="Entry" value={pricePerTeam} />
        </DetailCard>

        <Callout className="mt-6" tone="success" eyebrow="Early-bird offer" icon={Trophy01}>
          Register your foursome before July 1 and receive two mulligans per
          player plus a tee gift for every golfer.
        </Callout>

        <div className="mt-8">
          <CTAButton href={registerUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Register Your Foursome
          </CTAButton>
        </div>
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're part of the Sagamore Spring Golf Club community." />
    </EmailShell>
  );
};
