import { ArrowRight, Award05, CoinsStacked01, Heart } from "@untitledui/icons";
import {
  Callout,
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
import { course, courseImage, golfer } from "@/lib/scenario";

export interface MemberAnniversaryProps {
  firstName?: string;
  /** Years of membership, e.g. "5". */
  years?: string;
  credit?: string;
  bookingUrl?: string;
}

/**
 * Marketing Buck — Member Anniversary. Celebrates a membership milestone to drive
 * retention and repeat visits, with an anniversary clubhouse credit.
 */
export const MemberAnniversary = ({
  firstName = golfer.firstName,
  years = "5",
  credit = "$25",
  bookingUrl = course.bookingUrl,
}: MemberAnniversaryProps) => {
  const perks = [
    {
      icon: CoinsStacked01,
      title: `${credit} clubhouse credit`,
      body: "On us — spend it on green fees, the grill, or the pro shop.",
    },
    {
      icon: Heart,
      title: "Thanks for being a member",
      body: `${years} years of rounds, friends, and good golf at ${course.name}.`,
    },
  ];

  return (
    <EmailShell preheader={`Happy ${years}-year anniversary — here's a little something to celebrate.`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={courseImage}
        imageAlt={`A round at ${course.name}`}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Member anniversary"
        headline={`${years} years strong, ${firstName}`}
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          It's been {years} years since you joined {course.name} — and we're
          grateful for every round. To say thank you, here's an anniversary gift
          to enjoy on your next visit.
        </p>

        <FeatureList className="mt-6" items={perks} />

        <Callout className="mt-6" tone="success" eyebrow="Anniversary gift" icon={Award05}>
          Your {credit} clubhouse credit is ready. Book your next round and we'll
          have it waiting at check-in.
        </Callout>

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book Your Round
          </CTAButton>
        </div>

        <TextAlertsOptIn
          className="mt-4"
          href="https://www.sagamoregolf.com/text-alerts"
          prompt="Want first dibs on open tee times?"
        />
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Here's to many more. Questions? Call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span>.
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you're a valued member of Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
