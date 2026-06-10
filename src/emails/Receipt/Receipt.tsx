import { Download01 } from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
} from "@/components/email";

interface LineItem {
  label: string;
  amount: string;
}

export interface ReceiptEmailProps {
  firstName?: string;
  orderNumber?: string;
  orderDate?: string;
  items?: LineItem[];
  subtotal?: string;
  tax?: string;
  total?: string;
  cardLast4?: string;
  receiptUrl?: string;
}

const defaultItems: LineItem[] = [
  { label: "Green fee — 18 holes × 4", amount: "$220.00" },
  { label: "Cart rental × 2", amount: "$40.00" },
  { label: "Member discount", amount: "−$32.00" },
];

export const ReceiptEmail = ({
  firstName = "Jordan",
  orderNumber = "TF-8X4K2",
  orderDate = "June 12, 2026",
  items = defaultItems,
  subtotal = "$228.00",
  tax = "$20.00",
  total = "$248.00",
  cardLast4 = "4242",
  receiptUrl = "https://tenforegolf.com/receipts/TF-8X4K2",
}: ReceiptEmailProps) => {
  return (
    <EmailShell preheader={`Receipt for order ${orderNumber} — ${total}.`}>
      <EmailHeader variant="light" align="left" />

      <EmailSection padding="lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-display-xs font-semibold text-primary">
              Receipt
            </h1>
            <p className="mt-1 text-sm text-tertiary">
              Thanks for your payment, {firstName}.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-tertiary">Order</p>
            <p className="font-mono text-sm font-medium text-secondary">
              {orderNumber}
            </p>
            <p className="mt-1 text-xs text-tertiary">{orderDate}</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-secondary px-5 py-2">
          {items.map((item) => (
            <DetailRow
              key={item.label}
              label={item.label}
              value={item.amount}
              className="border-b border-secondary last:border-0"
            />
          ))}
        </div>

        <div className="mt-4 px-5">
          <DetailRow label="Subtotal" value={subtotal} />
          <DetailRow label="Tax" value={tax} />
          <div className="mt-1 border-t border-secondary pt-1">
            <DetailRow label="Total paid" value={total} emphasis />
          </div>
        </div>

        <p className="mt-6 text-sm text-tertiary">
          Paid with Visa ending in{" "}
          <span className="font-medium text-secondary">{cardLast4}</span>.
        </p>

        <div className="mt-6">
          <CTAButton
            href={receiptUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Download01}
          >
            Download PDF receipt
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      <EmailSection align="center" tone="muted">
        <p className="text-sm text-tertiary">
          This receipt is for your records. No action is needed.
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this receipt for a purchase at Tenfore Golf." />
    </EmailShell>
  );
};
