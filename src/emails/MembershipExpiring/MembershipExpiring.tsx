import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  InfoCircle,
} from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer, membership as defaultMembership, type Membership } from "@/lib/scenario";

export interface MembershipExpiringProps {
  firstName?: string;
  membership?: Membership;
  /** "manual" prompts the member to renew; "autorenew" reassures them it's automatic. */
  mode?: "manual" | "autorenew";
  renewUrl?: string;
}

export const MembershipExpiring = ({
  firstName = golfer.firstName,
  membership = defaultMembership,
  mode = "manual",
  renewUrl = "https://www.sagamoregolf.com/membership/renew",
}: MembershipExpiringProps) => {
  const isAuto = mode === "autorenew";

  return (
    <EmailShell
      preheader={`Your ${membership.tier} membership expires ${membership.activeThrough}.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Membership"
        title="Your membership expires soon"
        subtitle={`Expires ${membership.activeThrough}`}
        stamps={[{ label: "Membership", value: `#${membership.memberId}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your membership at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        {isAuto ? (
          <Callout tone="info" eyebrow="Renewing automatically" icon={InfoCircle}>
            Your {membership.tier} membership expires in 7 days. We'll
            automatically charge the card on file — no action needed.
          </Callout>
        ) : (
          <Callout tone="warning" eyebrow="Time to renew" icon={AlertTriangle}>
            Your {membership.tier} membership expires in 30 days. Renew now to
            keep your benefits without interruption.
          </Callout>
        )}
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Your membership" />
        <DetailCard className="mt-4">
          <DetailRow label="Member" value={firstName ?? golfer.fullName} />
          <DetailRow label="Membership" value={membership.tier} />
          <DetailRow label="Term" value={membership.term} />
          <DetailRow label="Active through" value={membership.activeThrough} />
          {isAuto ? <DetailRow label="Auto-renew" value="On" /> : null}
        </DetailCard>

        <h3 className="mt-6 text-sm font-semibold text-primary">
          What's included
        </h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-tertiary [&>li]:mt-1">
          {membership.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </EmailSection>

      <EmailSection padding="md">
        {isAuto ? (
          <CTAButton
            href={renewUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Manage membership
          </CTAButton>
        ) : (
          <CTAButton
            href={renewUrl}
            size="lg"
            fullWidth
            iconTrailing={CheckCircle}
          >
            Renew now
          </CTAButton>
        )}
      </EmailSection>

      <EmailFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
