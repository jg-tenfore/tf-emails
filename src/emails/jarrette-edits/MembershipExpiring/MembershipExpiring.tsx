import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  InfoCircle,
} from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailSection,
  EmailShell,
  JarretteFooter,
  JarretteHeader,
  MembershipSummary,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { golfer, membership as defaultMembership, type Membership } from "@/lib/scenario";

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
      <JarretteHeader />

      <StatusHero
        eyebrow="Membership"
        title="Your membership expires soon"
        subtitle={`Expires ${membership.activeThrough}`}
        stamps={[{ label: "Membership", value: `#${membership.memberId}` }]}
      />

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
        <MembershipSummary
          className="mt-4"
          member={firstName ?? golfer.fullName}
          membership={membership}
          showAutoRenew={isAuto}
        />
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

      <JarretteFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
