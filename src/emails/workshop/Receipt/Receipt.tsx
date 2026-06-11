import { Download01, Receipt as ReceiptIcon } from "@untitledui/icons";
import {
  CTAButton,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  ItemizedList,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer, receipt, type ReceiptLine } from "@/lib/scenario";

export interface WorkshopReceiptProps {
  firstName?: string;
  orderNumber?: string;
  orderDate?: string;
  items?: ReceiptLine[];
  subtotal?: string;
  tax?: string;
  total?: string;
  cardLast4?: string;
  receiptUrl?: string;
}

/**
 * No-hero, text-first receipt (Weston's feedback): keep it simple — just the
 * order details. No big imagery that email clients may block.
 */
export const WorkshopReceipt = ({
  firstName = golfer.firstName,
  orderNumber = receipt.orderNumber,
  orderDate = receipt.orderDate,
  items = receipt.items,
  subtotal = receipt.subtotal,
  tax = receipt.tax,
  total = receipt.total,
  cardLast4 = receipt.cardLast4,
  receiptUrl = `https://www.tenfore.golf/receipts/${receipt.orderNumber}`,
}: WorkshopReceiptProps) => {
  return (
    <EmailShell preheader={`Receipt for order #${orderNumber} — ${total}.`}>
      <EmailHeader />

      <StatusHero
        icon={ReceiptIcon}
        eyebrow="Receipt"
        title={`Your receipt, ${firstName}.`}
        subtitle={orderDate}
        stamps={[{ label: "Order", value: `#${orderNumber}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Order from"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Order details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 py-2">
          <ItemizedList items={items} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <PaymentSummary
          rows={[
            { label: "Subtotal", value: subtotal },
            { label: "Tax", value: tax },
          ]}
          total={{ label: "Total paid", value: total }}
          status="paid"
          note={`Paid on ${orderDate} with Visa ending in ${cardLast4}.`}
        />
        <div className="mt-6">
          <CTAButton
            href={`${receiptUrl}.pdf`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Download01}
          >
            Download PDF receipt
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason={`You're receiving this receipt for an order at ${course.name}.`} />
    </EmailShell>
  );
};
