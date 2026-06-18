import { ArrowRight, CheckCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
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
