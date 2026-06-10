import { InfoCircle, RefreshCw02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  ItemizedList,
  type LineItem,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";

export interface OrderRefundProps {
  firstName?: string;
  refundId?: string;
  /** Why the refund was issued. */
  reason?: string;
  items?: LineItem[];
  refundTotal?: string;
  rebookUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

const defaultItems: LineItem[] = [
  { label: "Green fee — 18 holes", amount: "$100.00" },
  { label: "Tax", amount: "$6.50" },
];

export const OrderRefund = ({
  firstName = golfer.firstName,
  refundId = "8472104",
  reason = "Weather closure — the course closed before your tee time.",
  items = defaultItems,
  refundTotal = "$106.50",
  rebookUrl = "https://www.sagamoregolf.com/teetimes",
  helpEmail = "proshop@sagamoregolf.com",
}: OrderRefundProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Refund question - Order #${refundId}`,
  )}`;

  return (
    <EmailShell
      preheader={`We issued a refund of ${refundTotal} for your Sagamore Spring order.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your order from"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Refund issued"
        title={`We issued your refund, ${firstName}.`}
        stamps={[{ label: "Refund order", value: `#${refundId}` }]}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Reason" icon={InfoCircle}>
          {reason}
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Refunded items" />
        <div className="mt-4">
          <ItemizedList items={items} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <PaymentSummary
          total={{ label: "Refund", value: refundTotal }}
          status="refund"
          note="Refunds take 2–3 business days to appear on your statement."
        />
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={rebookUrl}
          color="secondary"
          size="lg"
          fullWidth
          iconLeading={RefreshCw02}
        >
          Book again
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

      <EmailFooter reason="You're receiving this because a refund was issued for a Sagamore Spring Golf Club booking." />
    </EmailShell>
  );
};
