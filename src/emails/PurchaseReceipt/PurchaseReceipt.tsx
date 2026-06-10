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
import {
  course,
  golfer,
  proShopOrder,
  type PurchaseOrder,
} from "@/lib/scenario";

export interface PurchaseReceiptProps {
  firstName?: string;
  order?: PurchaseOrder;
  receiptUrl?: string;
}

export const PurchaseReceipt = ({
  firstName = golfer.firstName,
  order = proShopOrder,
  receiptUrl = `https://www.tenfore.golf/receipts/${proShopOrder.orderNumber}`,
}: PurchaseReceiptProps) => {
  return (
    <EmailShell
      preheader={`Receipt for your ${order.location} purchase at ${course.name} — ${order.total}.`}
    >
      <EmailHeader />

      <StatusHero
        icon={ReceiptIcon}
        eyebrow={`${order.location} receipt`}
        title={`Thanks for your purchase, ${firstName}.`}
        subtitle={`${order.location} · ${order.date}`}
        stamps={[{ label: "Order", value: `#${order.orderNumber}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your purchase at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Items" />
        <div className="mt-4 rounded-xl border border-secondary px-5 py-2">
          <ItemizedList items={order.items} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <PaymentSummary
          rows={[
            { label: "Subtotal", value: order.subtotal },
            { label: "Tax", value: order.tax },
          ]}
          total={{ label: "Total paid", value: order.total }}
          status="paid"
          note={`Paid on ${order.date} with Visa ending in ${order.cardLast4}.`}
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

      <EmailFooter
        reason={`You're receiving this receipt for a ${order.location} purchase at ${course.name}.`}
      />
    </EmailShell>
  );
};
