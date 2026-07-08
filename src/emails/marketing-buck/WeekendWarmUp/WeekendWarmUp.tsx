import { ArrowRight, Calendar, Flag01, Sun } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  BuckFooter,
  BuckHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  TextAlertsOptIn,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface WeekendWarmUpProps {
  firstName?: string;
  bookingUrl?: string;
}

const perks = [
  {
    icon: Calendar,
    title: "Prime weekend times",
    body: "Saturday and Sunday mornings go fast — claim yours before they're gone.",
  },
  {
    icon: Sun,
    title: "On us: a range bucket",
    body: "Warm up before you tee off with a complimentary bucket of balls.",
  },
  {
    icon: Flag01,
    title: "Book in seconds",
    body: "Reserve online any time, from any device — no phone tag required.",
  },
];

/**
 * Marketing Buck — Weekend Warm-Up. Hero + CTA email that fills peak weekend
 * tee times, sweetened with a complimentary range bucket.
 */
export const WeekendWarmUp = ({
  firstName = golfer.firstName,
  bookingUrl = course.bookingUrl,
}: WeekendWarmUpProps) => {
  return (
    <EmailShell preheader="Prime weekend tee times are filling fast — grab yours and warm up on us.">
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.golferSwing.src}
        imageAlt={marketingHeroes.golferSwing.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="This weekend"
        headline="Your weekend tee time awaits"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, the forecast looks perfect and the tee sheet is filling
          up. Lock in your weekend round now — and your range warm-up is on the
          house.
        </p>

        <FeatureList className="mt-6" items={perks} />

        <Callout className="mt-6" tone="success" eyebrow="Weekend perk">
          Book any Saturday or Sunday round this weekend and receive a
          complimentary range bucket at check-in.
        </Callout>

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book Tee Time
          </CTAButton>
        </div>

        <TextAlertsOptIn
          className="mt-4"
          href="https://www.sagamoregolf.com/text-alerts"
          prompt="Want first dibs on weekend tee times?"
        />
      </EmailSection>

      <BuckFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
