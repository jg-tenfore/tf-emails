import { ArrowRight, Flag01, Heart, Star01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  BuckFooter,
  BuckHeader,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface MothersDayProps {
  firstName?: string;
  reservationUrl?: string;
}

const highlights = [
  {
    icon: Star01,
    title: "Mother's Day brunch",
    body: "A special menu on the patio with the best views in town.",
  },
  {
    icon: Heart,
    title: "Mom plays free",
    body: "Book a tee time for the family and Mom's green fee is on us.",
  },
  {
    icon: Flag01,
    title: "Make it a morning",
    body: "Nine holes together, then brunch — the whole family, one place.",
  },
];

/**
 * Marketing Buck — Mother's Day. Drives dining reservations (and family tee
 * times) for the holiday, with a "Mom plays free" incentive.
 */
export const MothersDay = ({
  firstName = golfer.firstName,
  reservationUrl = "https://www.sagamoregolf.com/dining",
}: MothersDayProps) => {
  return (
    <EmailShell preheader="Treat Mom this Mother's Day — brunch on the patio and she plays free.">
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.clubhouseDining.src}
        imageAlt={marketingHeroes.clubhouseDining.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Mother's Day"
        headline="Treat Mom to her day"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, give Mom a Mother's Day she'll remember — a relaxed
          brunch on the patio, a morning on the course, or both. Tables fill fast,
          so reserve early.
        </p>

        <FeatureList className="mt-6" items={highlights} />

        <Callout className="mt-6" tone="success" eyebrow="This weekend only" icon={Heart}>
          Reserve a Mother's Day brunch table and Mom's green fee is free with any
          family tee time. Our gift to her.
        </Callout>

        <div className="mt-8">
          <CTAButton href={reservationUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Make a Reservation
          </CTAButton>
        </div>
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a guest at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
