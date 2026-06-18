import { ArrowRight, InfoCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import { golfer, membership as defaultMembership, type Membership } from "@/lib/scenario";

export interface MembershipLapsedProps {
  firstName?: string;
  membership?: Membership;
  reactivateUrl?: string;
  helpEmail?: string;
}

export const MembershipLapsed = ({
  firstName = golfer.firstName,
  membership = defaultMembership,
  reactivateUrl = "https://www.sagamoregolf.com/membership/reactivate",
  helpEmail = "proshop@sagamoregolf.com",
}: MembershipLapsedProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Membership reactivation - #${membership.memberId}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your ${membership.tier} membership expired — reactivate to pick up where you left off.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Membership"
        title="Your membership has expired"
        subtitle={`Expired ${membership.activeThrough}`}
        stamps={[{ label: "Membership", value: `#${membership.memberId}` }]}
      />

      <EmailSection padding="md">
        <Callout
          tone="info"
          eyebrow="We'd love to have you back"
          icon={InfoCircle}
        >
          Your {membership.tier} membership expired. Reactivate to pick up right
          where you left off — your benefits return immediately.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Your membership" />
        <DetailCard className="mt-4">
          <DetailRow label="Member" value={firstName ?? golfer.fullName} />
          <DetailRow label="Membership" value={membership.tier} />
          <DetailRow label="Term" value={membership.term} />
          <DetailRow label="Active through" value={membership.activeThrough} />
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
        <CTAButton
          href={reactivateUrl}
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          Reactivate membership
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the course">
          Questions?
        </SupportLine>
      </EmailSection>

      <JarretteFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
