import { ArrowRight } from "@untitledui/icons";
import {
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
import { brand } from "@/lib/brand";

export interface GolfBuddiesProps {
  addBuddiesUrl?: string;
}

const steps = [
  "Send a buddy request by name and email.",
  "Your buddy confirms (or declines) the request.",
  "Your buddies appear everywhere — app, web, kiosk, and the tee sheet.",
];

export const GolfBuddies = ({
  addBuddiesUrl = `${brand.url}/profile/buddies`,
}: GolfBuddiesProps) => {
  return (
    <EmailShell preheader="Introducing TenFore Buddies — book your regular group in one tap.">
      <EmailHeader />

      {/* Marketing hero graphic (headline + tagline + app preview baked in) */}
      <div className="px-8 pt-6 pb-6">
        <img
          src={buddiesGraphic}
          alt="Introducing TenFore Buddies — faster bookings, better data, happier golfers."
          className="block w-full rounded-xl ring-1 ring-black/5"
        />
      </div>

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
