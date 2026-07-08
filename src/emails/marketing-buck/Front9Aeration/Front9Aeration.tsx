import { ArrowRight, CheckCircle, Droplets01, Tag01, Zap } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailHero,
  EmailSection,
  EmailShell,
  FeatureList,
  BuckFooter,
  BuckHeader,
  RedemptionCode,
  SectionHeading,
  TextAlertsOptIn,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";
import { marketingHeroes } from "@/lib/marketing-images";

export interface Front9AerationProps {
  firstName?: string;
  /** Aeration window, e.g. "September 8–12". */
  dates?: string;
  /** Discount headline, e.g. "25% off". */
  discount?: string;
  /** Barcode digits the golfer shows at the counter. */
  discountCode?: string;
  bookingUrl?: string;
}

const why = [
  {
    icon: Zap,
    title: "Healthier roots",
    body: "Relieving compaction lets air, water, and nutrients reach the roots — the foundation of great turf.",
  },
  {
    icon: CheckCircle,
    title: "Smoother, firmer greens",
    body: "Aeration is the single best thing we do for long-term green quality and true roll.",
  },
  {
    icon: Droplets01,
    title: "Better drainage",
    body: "Less standing water means more playable days after rain, all season long.",
  },
];

/**
 * Marketing Buck — Front 9 Aeration (Seasonal Course Update). Keeps golfers
 * informed about the aeration process and why it matters, while filling the tee
 * sheet during recovery with a round discount.
 */
export const Front9Aeration = ({
  firstName = golfer.firstName,
  dates = "September 8–12",
  discount = "25% off",
  discountCode = "204 825 0912",
  bookingUrl = course.bookingUrl,
}: Front9AerationProps) => {
  return (
    <EmailShell preheader={`We're aerating the front 9 ${dates} — and rounds are ${discount} while we do.`}>
      <BuckHeader />

      <EmailHero
        imageUrl={marketingHeroes.aeration.src}
        imageAlt={marketingHeroes.aeration.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Course update"
        headline="We're aerating the front 9"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, a quick heads-up from the grounds team: we'll be
          aerating the front 9 (holes 1–9) the week of {dates}. It's the most
          important maintenance we do all year — and it's what keeps our greens
          rolling true.
        </p>

        <Callout className="mt-6" tone="info" eyebrow="What to expect">
          The back 9 stays fully open during the work, and the front 9 greens
          typically recover within 10–14 days. You may see sand and cores on the
          greens for a few days — that's the good stuff doing its job.
        </Callout>

        <SectionHeading className="mt-8" title="Why we aerate" />
        <FeatureList className="mt-4" items={why} />

        <Callout className="mt-6" tone="success" eyebrow="Limited time · this week only" icon={Tag01}>
          Play with us while we work and take {discount} your round — back 9 and
          twilight rates included. Valid {dates} only.
        </Callout>

        <RedemptionCode
          className="mt-4"
          variant="barcode"
          code={discountCode}
          label={`Aeration week · ${discount}`}
          instructions="Show this at the pro shop or starter. Valid this week only — one round per golfer."
        />

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book a Discounted Round
          </CTAButton>
        </div>

        <TextAlertsOptIn
          className="mt-4"
          href="https://www.sagamoregolf.com/text-alerts"
          prompt="Want updates on course conditions and open times?"
        />
      </EmailSection>

      <BuckFooter reason="You're receiving this course update because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
