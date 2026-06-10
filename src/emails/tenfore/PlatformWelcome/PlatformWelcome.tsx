import { ArrowRight, Calendar, Flag01, Users01, Zap } from "@untitledui/icons";
import {
  AppBanner,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  FeatureList,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { craneApp } from "@/lib/assets";
import { brand } from "@/lib/brand";
import { course, golfer } from "@/lib/scenario";
import { flogolf } from "@/lib/flogolf";

export interface PlatformWelcomeProps {
  firstName?: string;
  exploreUrl?: string;
  appUrl?: string;
}

const features = [
  {
    icon: Calendar,
    title: "Book anywhere",
    body: "Reserve tee times, simulator bays, lessons, and tables across every TenFore partner.",
  },
  {
    icon: Zap,
    title: "One profile, zero re-typing",
    body: "Your details, payment, and history live in one place — checkout takes seconds.",
  },
  {
    icon: Users01,
    title: "Golf Buddies",
    body: "Save your regular group and add players 2–4 in a single tap.",
  },
];

export const PlatformWelcome = ({
  firstName = golfer.firstName,
  exploreUrl = brand.url,
  appUrl = craneApp.appStoreUrl,
}: PlatformWelcomeProps) => {
  return (
    <EmailShell
      preheader={`Welcome to ${brand.name} — book your next round in seconds.`}
    >
      <EmailHeader />

      <StatusHero
        icon={Flag01}
        eyebrow={`Welcome to ${brand.name}`}
        title={`Welcome aboard, ${firstName}.`}
        subtitle="One account to book tee times, simulators, lessons, and dining across our growing network of partner venues."
      />

      <EmailSection padding="lg">
        <FeatureList items={features} />

        <div className="mt-8">
          <CTAButton href={exploreUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Explore courses & venues
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <SectionHeading
          title="A growing network of partners"
          description="One TenFore account books seamlessly across every venue — with more added all the time."
        />
        <div className="mt-4 flex flex-col gap-2 text-sm text-secondary">
          <p>
            · <span className="font-medium text-primary">{course.name}</span> —
            Lynnfield, MA
          </p>
          <p>
            · <span className="font-medium text-primary">{flogolf.name}</span> —
            Saugus, MA
          </p>
          <p className="text-tertiary">
            · …and more courses, lounges, and resorts joining every month.
          </p>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <AppBanner
          variant="card"
          title="Get the TenFore Crane app"
          body="Book, manage, and pay for every round from your phone — across the whole TenFore network."
          href={appUrl}
        />
      </EmailSection>

      <EmailFooter
        reason={`You're receiving this because you created a ${brand.name} account.`}
      />
    </EmailShell>
  );
};
