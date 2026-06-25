import { ArrowRight, Calendar, Flag01, Star01, Users01 } from "@untitledui/icons";
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

export interface JuniorCampRegistrationProps {
  parentName?: string;
  dates?: string;
  ages?: string;
  price?: string;
  registerUrl?: string;
}

const features = [
  {
    icon: Flag01,
    title: "Real fundamentals",
    body: "Full swing, short game, and on-course basics taught by our PGA pros.",
  },
  {
    icon: Users01,
    title: "Small groups, big fun",
    body: "Friendly coaching that keeps kids engaged — and clubs provided if needed.",
  },
  {
    icon: Star01,
    title: "Confidence that lasts",
    body: "Every camper leaves with new skills and a love for the game.",
  },
];

/**
 * Marketing Buck — Junior Camp Registration. Drives clinic registrations for
 * junior summer camp, with an early-bird / sibling incentive.
 */
export const JuniorCampRegistration = ({
  parentName = golfer.firstName,
  dates = "June 16–20",
  ages = "Ages 8–14",
  price = "$325",
  registerUrl = "https://www.sagamoregolf.com/junior-camp",
}: JuniorCampRegistrationProps) => {
  return (
    <EmailShell preheader={`Junior Summer Camp is open — register by ${dates} and a sibling joins half price.`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={marketingHeroes.juniorCamp.src}
        imageAlt={marketingHeroes.juniorCamp.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Junior camp"
        headline="Summer golf for the kids"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {parentName}, registration for Junior Summer Camp is open. Five
          mornings of fundamentals, fun, and real improvement — spots are limited
          and fill quickly.
        </p>

        <FeatureList className="mt-6" items={features} />

        <SectionHeading className="mt-8" title="Camp details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Dates" value={dates} />
          <DetailRow icon={Users01} label="Ages" value={ages} />
          <DetailRow label="Tuition" value={price} />
        </DetailCard>

        <Callout className="mt-6" tone="success" eyebrow="Family savings" icon={Star01}>
          Register one camper and a sibling joins at half price. Early registration
          is encouraged — sessions sell out every year.
        </Callout>

        <div className="mt-8">
          <CTAButton href={registerUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Register Your Junior
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Questions about camp? Call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span> —
          we're happy to help.
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you're part of the Sagamore Spring Golf Club community." />
    </EmailShell>
  );
};
