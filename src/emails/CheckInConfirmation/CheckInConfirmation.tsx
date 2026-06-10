import { ArrowRight, Clock } from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer, membership } from "@/lib/scenario";

export interface CheckInConfirmationProps {
  firstName?: string;
  membershipTier?: string;
  transactionId?: string;
  checkInTime?: string;
  expires?: string;
  subtotal?: string;
  tax?: string;
  total?: string;
  paid?: boolean;
  accountUrl?: string;
  helpEmail?: string;
}

export const CheckInConfirmation = ({
  firstName = golfer.firstName,
  membershipTier = membership.tier,
  transactionId = "VRF-882201",
  checkInTime = "Sat May 17, 2026 · 9:42 AM",
  expires = "Dec 31, 2026",
  subtotal = "$48.00",
  tax = "$3.12",
  total = "$51.12",
  paid = true,
  accountUrl = "https://www.sagamoregolf.com/account",
  helpEmail = "proshop@sagamoregolf.com",
}: CheckInConfirmationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Check-in question - Transaction #${transactionId}`,
  )}`;

  return (
    <EmailShell
      preheader={`You're checked in at Sagamore Spring — ${checkInTime}.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your account at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Check-in confirmed"
        title={`You're checked in, ${firstName}.`}
        subtitle={checkInTime}
        stamps={[{ label: "Transaction", value: `#${transactionId}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Check-in details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Type" value="Membership card scan" />
          <DetailRow label="Customer" value={firstName} />
          <DetailRow icon={Clock} label="Date" value={checkInTime} />
          <DetailRow label="Membership" value={membershipTier} />
          <DetailRow label="Expires" value={expires} />
        </div>
      </EmailSection>

      {paid ? (
        <>
          <Divider />
          <EmailSection padding="md">
            <SectionHeading title="Payment" />
            <div className="mt-4">
              <PaymentSummary
                rows={[
                  { label: "Subtotal", value: subtotal },
                  { label: "Tax", value: tax },
                ]}
                total={{ value: total }}
                status="paid"
              />
            </div>
          </EmailSection>
        </>
      ) : null}

      <EmailSection padding="md">
        <CTAButton href={accountUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          View account
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the pro shop
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you checked in at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
