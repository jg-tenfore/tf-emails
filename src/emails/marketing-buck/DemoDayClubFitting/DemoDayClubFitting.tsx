import { ArrowRight, Calendar, Target04, Tool02, Zap } from "@untitledui/icons";
import {
  BrandStrip,
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
import { marketingHeroes, titleistLineup, titleistLogo } from "@/lib/marketing-images";

export interface DemoDayClubFittingProps {
  firstName?: string;
  date?: string;
  time?: string;
  bookingUrl?: string;
}

const features = [
  {
    icon: Tool02,
    title: "Free professional fitting",
    body: "Dial in the right shaft, loft, and lie with launch-monitor data.",
  },
  {
    icon: Target04,
    title: "Hit the latest gear",
    body: "Demo this year's drivers, irons, and putters before you buy.",
  },
  {
    icon: Zap,
    title: "Same-day order savings",
    body: "Place an order at the event and skip the fitting fee entirely.",
  },
];

/**
 * Marketing Buck — Demo Day / Club Fitting. Drives pro-shop revenue and bookings
 * for a demo-day event, with the brands on hand and a same-day order incentive.
 */
export const DemoDayClubFitting = ({
  firstName = golfer.firstName,
  date = "Saturday, May 17",
  time = "10 AM – 3 PM",
  bookingUrl = "https://www.sagamoregolf.com/demo-day",
}: DemoDayClubFittingProps) => {
  return (
    <EmailShell preheader={`Demo Day is ${date} — free fittings and the latest gear from every brand.`}>
      <JarretteHeader />

      <EmailHero
        imageUrl={marketingHeroes.demoDay.src}
        imageAlt={marketingHeroes.demoDay.alt}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow="Demo day & club fitting"
        headline="Find clubs built for your swing"
      />

      <EmailSection padding="lg">
        <p className="text-md text-secondary">
          Hi {firstName}, the reps are coming to the range. Try the newest clubs,
          get fit by the pros, and find exactly what your game's been missing —
          all in one afternoon.
        </p>

        <FeatureList className="mt-6" items={features} />

        <SectionHeading className="mt-8" title="Event details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Date" value={date} />
          <DetailRow label="Time" value={time} />
          <DetailRow label="Where" value="The practice range" />
        </DetailCard>

        <Callout className="mt-6" tone="success" eyebrow="Event-only offer" icon={Tool02}>
          Fittings are free all day, and any order placed at the event waives the
          fitting fee — plus trade-in credit on your old clubs.
        </Callout>

        <div className="mt-8">
          <CTAButton href={bookingUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Reserve Your Fitting
          </CTAButton>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading
          title="Featured fitting partner"
          aside={<img src={titleistLogo} alt="Titleist" className="h-5 w-auto" />}
        />
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-secondary">
          <img
            src={titleistLineup}
            alt="Titleist GT drivers, T-Series irons, and Scotty Cameron putters"
            className="block w-full object-cover"
          />
          <p className="bg-secondary px-5 py-4 text-sm text-secondary">
            Titleist fitting carts will be on site — get dialed in for GT drivers,
            T-Series irons, and Scotty Cameron putters.
          </p>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <BrandStrip label="Brands on hand at the event" />
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          Walk-ins welcome, but slots go fast. Call the pro shop at{" "}
          <span className="font-medium text-secondary">{course.phone}</span> to
          reserve a time.
        </p>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you're a golfer at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
