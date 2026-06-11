import { ArrowRight } from "@untitledui/icons";
import {
  AppBanner,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  NumberedSteps,
  SectionHeading,
} from "@/components/email";
import buddiesGraphic from "@/assets/brand/tf-buddies.png";
import { craneApp } from "@/lib/assets";
import { brand } from "@/lib/brand";
import { golfer } from "@/lib/scenario";

export interface GolfBuddiesProps {
  firstName?: string;
  addBuddiesUrl?: string;
  appUrl?: string;
}

const steps = [
  "Send a buddy request by name and email.",
  "Your buddy confirms (or declines) the request.",
  "Your buddies appear everywhere — app, web, kiosk, and the tee sheet.",
];

export const GolfBuddies = ({
  firstName = golfer.firstName,
  addBuddiesUrl = `${brand.url}/profile/buddies`,
  appUrl = craneApp.appStoreUrl,
}: GolfBuddiesProps) => {
  return (
    <EmailShell preheader="Introducing TenFore Buddies — book your regular group in one tap.">
      <EmailHeader />

      {/* Intro — centered, above the graphic */}
      <EmailSection padding="lg" align="center">
        <p className="text-md text-secondary">
          <span className="font-semibold text-primary">Hi {firstName}</span> —
          Buddies is the fastest way to book with your regular group, and it
          lives in the {craneApp.name} app. Download it to get started.
        </p>
      </EmailSection>

      {/* Marketing hero graphic (headline + tagline + app preview baked in) */}
      <div className="px-8 pb-2">
        <img
          src={buddiesGraphic}
          alt="Introducing TenFore Buddies — faster bookings, better data, happier golfers."
          className="block w-full rounded-xl ring-1 ring-black/5"
        />
      </div>

      {/* Top priority: download Crane */}
      <EmailSection padding="lg">
        <AppBanner
          variant="card"
          title={`Download the ${craneApp.name} app`}
          body="Get Buddies — save your group and add players to any booking in one tap."
          href={appUrl}
        />
      </EmailSection>

      <Divider />

      {/* How it works */}
      <EmailSection padding="lg">
        <SectionHeading title="How it works" />
        <NumberedSteps className="mt-4" steps={steps} />

        <div className="mt-8">
          <CTAButton
            href={addBuddiesUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Or add your buddies on the web
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter
        reason={`You're receiving this because you have a ${brand.name} account.`}
      />
    </EmailShell>
  );
};
