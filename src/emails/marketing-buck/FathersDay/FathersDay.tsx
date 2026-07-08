import { ArrowRight, Calendar, Gift01, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  CTAStack,
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

export interface FathersDayProps {
  firstName?: string;
  bookingUrl?: string;
  giftCardUrl?: string;
}

const ideas = [
  {
    icon: Users01,
    title: "A round together",
    body: "Book a father–child tee time and make the day about more than golf.",
  },
  {
    icon: Gift01,
    title: "The easy gift",
    body: "A gift card he'll actually use — green fees, lessons, or new gear.",
  },
  {
    icon: Calendar,
    title: "Brunch at the grill",
    body: "Cap the morning with a table on the patio overlooking the course.",
  },
];

/**
 * Marketing Buck — Father's Day. Drives tee-time bookings and gift-card sales
 * around the holiday, with a gift-card bonus incentive.
 */
export const FathersDay = ({
  firstName = golfer.firstName,
  bookingUrl = course.bookingUrl,
  giftCardUrl = "https://www.sagamoregolf.com/gift-cards",
}: FathersDayProps) => {
  return (
    <EmailShell preheader="Give Dad the perfect Father's Day — a round, a gift card, and a bonus on us.">
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.fathersDay.src}
        imageAlt={marketingHeroes.fathersDay.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Father's Day"
        headline="Give Dad his perfect day"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, this Father's Day, skip the necktie. Book a round
          together, gift him something he'll love, or do both — here's how.
        </p>

        <FeatureList className="mt-6" items={ideas} />

        <Callout className="mt-6" tone="success" eyebrow="Father's Day bonus" icon={Gift01}>
          Buy a $100 gift card this week and we'll add a $20 bonus — perfect for
          Dad, or a little something for yourself.
        </Callout>

        <div className="mt-8">
          <CTAStack>
            <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
              Book a Round with Dad
            </CTAButton>
            <CTAButton href={giftCardUrl} color="secondary" size="lg" fullWidth iconLeading={Gift01}>
              Shop Gift Cards
            </CTAButton>
          </CTAStack>
        </div>
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
