import { ArrowRight, CheckCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  Divider,
  EmailSection,
  EmailShell,
  JarretteFooter,
  JarretteHeader,
  MembershipSummary,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import { golfer, membership as defaultMembership, type Membership } from "@/lib/scenario";

export interface MembershipRenewedProps {
  firstName?: string;
  membership?: Membership;
  /** "auto" was charged automatically; "manual" the member renewed themselves. */
  mode?: "auto" | "manual";
  manageUrl?: string;
  helpEmail?: string;
}

export const MembershipRenewed = ({
  firstName = golfer.firstName,
  membership = defaultMembership,
  mode = "auto",
  manageUrl = "https://www.sagamoregolf.com/membership",
  helpEmail = "proshop@sagamoregolf.com",
}: MembershipRenewedProps) => {
  const isAuto = mode === "auto";
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Membership question - #${membership.memberId}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your membership is renewed through ${membership.activeThrough}.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Membership"
        title="Your membership is renewed"
        subtitle={membership.tier}
        stamps={[{ label: "Membership", value: `#${membership.memberId}` }]}
      />

      <EmailSection padding="md">
        <Callout
          tone="success"
          eyebrow={isAuto ? "Auto-renewed" : "Thanks for renewing"}
          icon={CheckCircle}
        >
          Your membership is renewed through {membership.activeThrough}.
          {isAuto ? " We charged the card on file." : ""}
        </Callout>
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

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Membership", value: membership.price },
              { label: "Tax", value: membership.tax },
            ]}
            total={{ value: membership.total }}
            status="paid"
          />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={manageUrl}
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          Manage membership
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Email the pro shop" />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
