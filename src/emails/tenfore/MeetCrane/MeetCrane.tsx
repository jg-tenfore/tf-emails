import {
  ArrowRight,
  Bell01,
  Calendar,
  CreditCard02,
  RefreshCw02,
  Users01,
} from "@untitledui/icons";
import {
  AppBanner,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailRating,
  EmailSection,
  EmailShell,
  FeatureList,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { craneApp } from "@/lib/assets";
import { brand } from "@/lib/brand";
import { golfer } from "@/lib/scenario";

export interface MeetCraneProps {
  firstName?: string;
  appUrl?: string;
}

const features = [
  {
    icon: Calendar,
    title: "Book in seconds, 24/7",
    body: "Tee times, simulator bays, lessons, and tables — reserved in a few taps.",
  },
  {
    icon: RefreshCw02,
    title: "Manage on the go",
    body: "Reschedule, modify, or cancel any booking from anywhere.",
  },
  {
    icon: Users01,
    title: "Golf Buddies",
    body: "Add your regular group to any booking with a single tap.",
  },
  {
    icon: Bell01,
    title: "Waitlist & alerts",
    body: "Get notified the moment a sold-out tee time opens up.",
  },
  {
    icon: CreditCard02,
    title: "Pay & pro-shop",
    body: "Securely pay and make pro-shop purchases right from the app.",
  },
];

export const MeetCrane = ({
  firstName = golfer.firstName,
  appUrl = craneApp.appStoreUrl,
}: MeetCraneProps) => {
  return (
    <EmailShell
      preheader={`Meet ${craneApp.name} — your whole round, in one app.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow={`The ${craneApp.name} app`}
        title={`Your whole round, in one app, ${firstName}.`}
        subtitle={craneApp.tagline}
      />

      <EmailSection padding="lg">
        <SectionHeading title="What you can do with Crane" />
        <FeatureList className="mt-5" items={features} />

        <div className="mt-8">
          <CTAButton href={appUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Get the app
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <AppBanner
          variant="card"
          title={`Download ${craneApp.name}`}
          body="Free on the App Store. Book seamlessly across the entire TenFore partner network."
          href={appUrl}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="lg" align="center">
        <EmailRating question="How excited are you to try Crane?" />
      </EmailSection>

      <EmailFooter
        reason={`You're receiving this because you have a ${brand.name} account.`}
      />
    </EmailShell>
  );
};
