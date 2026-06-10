import {
  ArrowRight,
  BarChartSquare02,
  Heart,
  UserPlus01,
  Users01,
  Zap,
} from "@untitledui/icons";
import {
  AppBanner,
  Callout,
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { craneApp } from "@/lib/assets";
import { brand } from "@/lib/brand";
import { golfer } from "@/lib/scenario";

export interface GolfBuddiesProps {
  firstName?: string;
  addBuddiesUrl?: string;
  appUrl?: string;
}

const benefits = [
  {
    icon: Zap,
    title: "Faster bookings",
    body: "Add players 2–4 from your buddy list — no more re-typing names and emails.",
  },
  {
    icon: BarChartSquare02,
    title: "Better data",
    body: "Everyone in the group is on the booking, not just the primary golfer.",
  },
  {
    icon: Heart,
    title: "Happier golfers",
    body: "Your regular foursome is one tap away, every single time.",
  },
];

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

      <StatusHero
        icon={Users01}
        eyebrow="New feature"
        title={`Meet TenFore Buddies, ${firstName}.`}
        subtitle="Faster bookings, better data, happier golfers."
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Why we built it" icon={UserPlus01}>
          Most golfers play with the same group every week — but booking still
          means re-entering everyone's info. Buddies remembers your players so
          you don't have to.
        </Callout>
      </EmailSection>

      <EmailSection padding="lg">
        <SectionHeading title="Why you'll love it" />
        <div className="mt-5 flex flex-col gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
                <b.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{b.title}</p>
                <p className="mt-0.5 text-sm text-tertiary">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <SectionHeading title="How it works" />
        <ol className="mt-4 flex flex-col gap-4">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-brand-secondary">
                {i + 1}
              </span>
              <p className="pt-0.5 text-sm text-secondary">{s}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <CTAButton
            href={addBuddiesUrl}
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Add your buddies
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="lg">
        <AppBanner
          variant="card"
          title={`Buddies lives in the ${craneApp.name} app`}
          body="Add your regular group and book together in seconds, across the whole TenFore network."
          href={appUrl}
        />
      </EmailSection>

      <EmailFooter
        reason={`You're receiving this because you have a ${brand.name} account.`}
      />
    </EmailShell>
  );
};
