import { AlertTriangle, CreditCard02 } from "@untitledui/icons";
import {
  Callout,
  ContactBlock,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import {
  course,
  type CustomerRecord,
  customer as defaultCustomer,
  type FailedCharge,
  failedCharge as defaultCharge,
} from "@/lib/scenario";

export interface FailedPaymentAlertProps {
  charge?: FailedCharge;
  customer?: CustomerRecord;
}

/**
 * Operator-facing: alerts course staff that a charge was declined and needs
 * follow-up. Surfaces the customer record and charge details; no customer CTA.
 */
export const FailedPaymentAlert = ({
  charge = defaultCharge,
  customer = defaultCustomer,
}: FailedPaymentAlertProps) => {
  return (
    <EmailShell
      preheader={`Payment failed — ${charge.amount}, ${charge.reason}.`}
    >
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow={course.name}
        title="Payment failed"
        subtitle={charge.source}
        stamps={[
          { label: "Customer ID", value: `#${charge.customerId}` },
          { label: "Detected", value: charge.detectedAt },
        ]}
      />

      <EmailSection padding="md">
        <Callout tone="warning" eyebrow="Charge declined" icon={AlertTriangle}>
          <span className="font-semibold text-primary">{charge.amount}</span> —{" "}
          {charge.reason}. This needs staff follow-up.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <ContactBlock
          title="Customer"
          fields={[
            { label: "Name", value: customer.name },
            { label: "Customer ID", value: customer.customerId },
            { label: "Email", value: customer.email },
            { label: "Phone", value: customer.phone },
          ]}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Charge details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="Source" value={charge.source} icon={CreditCard02} />
          <DetailRow label="Amount" value={charge.amount} />
          <DetailRow label="Related to" value={charge.relatedTo} />
          <DetailRow label="Reason" value={charge.reason} />
        </div>
      </EmailSection>

      <EmailFooter
        reason={`Internal failed-payment alert for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
