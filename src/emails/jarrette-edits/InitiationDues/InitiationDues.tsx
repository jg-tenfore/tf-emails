import { AlertTriangle, ArrowRight, CheckCircle } from "@untitledui/icons";
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

export interface InitiationDuesProps {
  firstName?: string;
  membership?: Membership;
  /** "billed" = an installment is due; "charged" = a payment was taken. */
  mode?: "billed" | "charged";
  amount?: string;
  nextPayment?: string;
  remaining?: string;
  payUrl?: string;
  helpEmail?: string;
}

export const InitiationDues = ({
  firstName = golfer.firstName,
  membership = defaultMembership,
  mode = "billed",
  amount = "$250.00",
  nextPayment = "Jul 1, 2026",
  remaining = "3 payments remaining",
  payUrl = "https://www.sagamoregolf.com/membership/initiation/pay",
  helpEmail = "proshop@sagamoregolf.com",
}: InitiationDuesProps) => {
  const isCharged = mode === "charged";
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Initiation dues question - #${membership.memberId}`,
  )}`;

  return (
    <EmailShell
      preheader={
        isCharged
          ? `We received your initiation payment of ${amount}.`
          : `An initiation installment of ${amount} is due.`
      }
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Initiation dues"
        title={
          isCharged
            ? "Initiation payment received"
            : "An initiation payment is due"
        }
        stamps={[{ label: "Membership", value: `#${membership.memberId}` }]}
      />

      <EmailSection padding="md">
        {isCharged ? (
          <Callout tone="success" eyebrow="Payment received" icon={CheckCircle}>
            We charged {amount} to your card on file. No action needed.
          </Callout>
        ) : (
          <Callout tone="warning" eyebrow="Payment due" icon={AlertTriangle}>
            An initiation installment of {amount} is due. Pay online, in person,
            or by check.
          </Callout>
        )}
      </EmailSection>

      {isCharged ? (
        <EmailSection padding="md">
          <SectionHeading title="Initiation schedule" />
          <DetailCard className="mt-4">
            <DetailRow label="Status" value={remaining} />
            <DetailRow label="Next payment" value={nextPayment} />
          </DetailCard>
        </EmailSection>
      ) : null}

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            total={{
              label: isCharged ? "Charged" : "Amount due",
              value: amount,
            }}
            status={isCharged ? "paid" : "amount-due"}
          />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        {isCharged ? (
          <CTAButton
            href={payUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            View account
          </CTAButton>
        ) : (
          <CTAButton href={payUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Pay online
          </CTAButton>
        )}
      </EmailSection>

      <Divider />

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

        <SupportLine className="mt-6" href={helpHref} linkText="Email the pro shop" />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because of your membership at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
