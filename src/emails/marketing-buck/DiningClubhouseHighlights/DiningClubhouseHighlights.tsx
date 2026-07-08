import { ArrowRight, Calendar, Star01, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  BuckFooter,
  BuckHeader,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { diningDishes, marketingHeroes } from "@/lib/marketing-images";

export interface DiningClubhouseHighlightsProps {
  firstName?: string;
  reserveUrl?: string;
}

const highlights = [
  {
    icon: Star01,
    title: "Chef's weekly specials",
    body: "A fresh rotating menu of plates worth coming in for — round or no round.",
  },
  {
    icon: Calendar,
    title: "Weekend brunch",
    body: "Saturdays and Sundays on the patio, with the best views in town.",
  },
  {
    icon: Users01,
    title: "Trivia & live music",
    body: "Thursday trivia and weekend live music at the 19th hole.",
  },
];

/**
 * Marketing Buck — Dining & Clubhouse Highlights. Drives restaurant and bar
 * traffic with weekly programming and a free-appetizer incentive.
 */
export const DiningClubhouseHighlights = ({
  firstName = golfer.firstName,
  reserveUrl = "https://www.sagamoregolf.com/dining",
}: DiningClubhouseHighlightsProps) => {
  return (
    <EmailShell preheader="Chef's specials, weekend brunch, and live music at the 19th hole.">
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.clubhouseDining.src}
        imageAlt={marketingHeroes.clubhouseDining.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="At the grill"
        headline="Great food after a great round"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, the clubhouse is about more than the back nine. From
          chef's specials to live music nights, there's always a reason to pull up
          a chair.
        </p>

        <FeatureList className="mt-6" items={highlights} />

        <Callout className="mt-6" tone="success" eyebrow="On us">
          Show this email and get a complimentary appetizer with any two entrées
          at the grill.
        </Callout>

        <div className="mt-8">
          <CTAButton href={reserveUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Make a Reservation
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="On the menu" description="A taste of what's coming off the grill." />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          {diningDishes.map((dish) => (
            <figure
              key={dish.title}
              className="flex-1 overflow-hidden rounded-xl ring-1 ring-secondary"
            >
              <img
                src={dish.src}
                alt={dish.alt}
                className="block aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm font-semibold text-primary">
                {dish.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a guest at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
