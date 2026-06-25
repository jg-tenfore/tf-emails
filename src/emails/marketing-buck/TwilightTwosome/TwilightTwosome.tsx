import { ArrowRight, Clock, SunSetting03, Tag01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  Divider,
  JarretteFooter,
  JarretteHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  SectionHeading,
  TextAlertsOptIn,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes, twilightMenu } from "@/lib/marketing-images";

export interface TwilightTwosomeProps {
  firstName?: string;
  bookingUrl?: string;
  /** Restaurant reservation link for the menu showcase. */
  reservationUrl?: string;
  /** SMS opt-in link for tee-time alerts. */
  textAlertsUrl?: string;
}

const perks = [
  {
    icon: Clock,
    title: "Tee off after 4pm",
    body: "Skip the crowds and play a relaxed nine in the best light of the day.",
  },
  {
    icon: Tag01,
    title: "Discounted twilight rate",
    body: "Our lowest green fees of the day — golf that's easy on the wallet.",
  },
  {
    icon: SunSetting03,
    title: "Then nine and dine",
    body: "Wrap your round at the grill with a food & beverage voucher on us.",
  },
];

/**
 * Marketing Buck — Twilight Twosome. Split content + offer email that fills the
 * slow late-day tee sheet and routes players into the clubhouse for F&B.
 */
export const TwilightTwosome = ({
  firstName = golfer.firstName,
  bookingUrl = course.bookingUrl,
  reservationUrl = "https://www.sagamoregolf.com/dining",
  textAlertsUrl = "https://www.sagamoregolf.com/text-alerts",
}: TwilightTwosomeProps) => {
  return (
    <EmailShell preheader="Discounted twilight golf plus a food & beverage voucher — unwind after work.">
      <JarretteHeader />

      <EmailHero
        imageUrl={marketingHeroes.twilightTwosome.src}
        imageAlt={marketingHeroes.twilightTwosome.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Twilight golf"
        headline="Nine and dine at twilight"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, the course is quiet, the light is perfect, and the rate
          is our best of the day. Play a relaxed evening nine, then settle in at
          the grill.
        </p>

        <FeatureList className="mt-6" items={perks} />

        <Callout className="mt-6" tone="warning" eyebrow="Evening offer">
          Book a twilight round and receive a $10 food & beverage voucher to use
          at the grill after your round.
        </Callout>

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Claim Your Offer
          </CTAButton>
        </div>

        <TextAlertsOptIn
          className="mt-4"
          href={textAlertsUrl}
          prompt="Never miss a twilight deal."
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading
          title="Tonight at the grill"
          description="What our kitchen is cooking up for your nine-and-dine."
        />
        <div className="mt-4 grid grid-cols-2 gap-3">
          {twilightMenu.map((dish) => (
            <figure
              key={dish.title}
              className="overflow-hidden rounded-xl ring-1 ring-secondary"
            >
              <img
                src={dish.src}
                alt={dish.alt}
                className="block aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-3 py-2.5 text-sm font-semibold text-primary">
                {dish.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6">
          <CTAButton href={reservationUrl} color="secondary" size="lg" fullWidth iconTrailing={ArrowRight}>
            Make a Reservation
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Twilight times are limited each evening. Call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span> with
          any questions.
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
