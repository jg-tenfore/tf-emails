import { ArrowRight, InfoCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
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
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your membership at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Member" value={firstName ?? golfer.fullName} />
          <DetailRow label="Membership" value={membership.tier} />
          <DetailRow label="Term" value={membership.term} />
          <DetailRow label="Active through" value={membership.activeThrough} />
        </div>

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
        <p className="mt-4 text-center text-sm text-tertiary">
          Questions?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the course
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
