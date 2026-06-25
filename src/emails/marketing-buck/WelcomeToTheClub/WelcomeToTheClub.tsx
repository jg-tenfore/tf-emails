import { ArrowRight, Calendar, ShoppingBag03, Trophy01, Users01 } from "@untitledui/icons";
import {
  BrandStrip,
  CTAButton,
  Divider,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  JarretteFooter,
  JarretteHeader,
  TextAlertsOptIn,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface WelcomeToTheClubProps {
  firstName?: string;
  bookingUrl?: string;
  /** Which hero imagery to show — swaps the photo for a men's or women's audience. */
  audience?: "men" | "women";
}

const perks = [
  {
    icon: Calendar,
    title: "Book tee times 24/7",
    body: "Reserve online in seconds, any day of the week — no phone calls needed.",
  },
  {
    icon: ShoppingBag03,
    title: "Gear up in the shop",
    body: "The latest apparel, balls, and footwear from the brands you trust.",
  },
  {
    icon: Trophy01,
    title: "Get better, faster",
    body: "Private lessons, group clinics, and junior camps with our PGA pros.",
  },
  {
    icon: Users01,
    title: "Bring your crew",
    body: "Leagues, events, and a clubhouse grill made for golf with friends.",
  },
];

/**
 * Marketing Buck — Welcome to the Club. Onboarding email that introduces new
 * members and first-time golfers to everything the course offers.
 */
export const WelcomeToTheClub = ({
  firstName = golfer.firstName,
  bookingUrl = course.bookingUrl,
  audience = "women",
}: WelcomeToTheClubProps) => {
  const hero =
    audience === "men" ? marketingHeroes.golfersMen : marketingHeroes.golfersSunset;
  return (
    <EmailShell preheader={`Welcome to ${course.name} — here's everything waiting for you.`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={hero.src}
        imageAlt={hero.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Welcome to the club"
        headline={`Great to have you, ${firstName}`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Your account is ready and the first tee is calling. Whether you're here
          to chase a personal best or enjoy a relaxed nine with friends,
          everything you need is a tap away.
        </p>

        <FeatureList className="mt-6" items={perks} />

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book Your First Tee Time
          </CTAButton>
        </div>

        <TextAlertsOptIn
          className="mt-4"
          href="https://www.sagamoregolf.com/text-alerts"
          prompt="Get text alerts for open tee times."
        />
      </EmailSection>

      <EmailSection padding="md">
        <BrandStrip label="Brands you'll find in our shop" />
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Questions? Just reply to this email or call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span>.
        </p>
      </EmailSection>

      <JarretteFooter reason={`You're receiving this because you joined ${course.name}.`} />
    </EmailShell>
  );
};
