import { ArrowRight, Calendar, Users01, Zap } from "@untitledui/icons";
import {
  AppBanner,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  FeatureList,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets, craneApp } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";

export interface WorkshopWelcomeProps {
  firstName?: string;
  exploreUrl?: string;
  appUrl?: string;
}

const features = [
  {
    icon: Calendar,
    title: "Book tee times 24/7",
    body: `Reserve at ${course.name} in seconds, from anywhere.`,
  },
  {
    icon: Users01,
    title: "Golf Buddies",
    body: "Save your regular group and add players to a booking in one tap.",
  },
  {
    icon: Zap,
    title: "Manage on the go",
    body: "Change or cancel a reservation right from your phone.",
  },
];

/**
 * Account welcome that doubles as soft advertising for the TenFore Crane app
 * (Weston's idea): show new golfers what they can do, then point them to Crane.
 */
export const WorkshopWelcome = ({
  firstName = golfer.firstName,
  exploreUrl = course.bookingUrl,
  appUrl = craneApp.appStoreUrl,
}: WorkshopWelcomeProps) => {
  return (
    <EmailShell
      preheader={`Welcome to ${course.name} — book your next round in seconds.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow={`Welcome to ${course.name}`}
        title={`Welcome, ${firstName}.`}
        subtitle="Your account is ready — here's everything you can do with it."
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your account at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="lg">
        <FeatureList items={features} />
        <div className="mt-8">
          <CTAButton href={exploreUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book a tee time
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <AppBanner
          variant="card"
          title="Get the TenFore Crane app"
          body="Book, manage, and pay for every round — plus Golf Buddies — right from your phone."
          href={appUrl}
        />
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you created an account with ${course.name}.`} />
    </EmailShell>
  );
};
