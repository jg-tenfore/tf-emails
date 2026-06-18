import { InfoCircle, RefreshCw02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  ItemizedList,
  type LineItem,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import { golfer } from "@/lib/scenario";

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
      <JarretteHeader />

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
        <SupportLine
          className="mt-4"
          href={helpHref}
          linkText="Contact the pro shop"
        />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because a refund was issued for a Sagamore Spring Golf Club booking." />
    </EmailShell>
  );
};
