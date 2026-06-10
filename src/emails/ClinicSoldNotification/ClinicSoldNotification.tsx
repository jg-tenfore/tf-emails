import {
  ContactBlock,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import {
  type Clinic,
  clinic as defaultClinic,
  course,
  type CustomerRecord,
  customer as defaultCustomer,
} from "@/lib/scenario";

export interface ClinicSoldNotificationProps {
  clinic?: Clinic;
  customer?: CustomerRecord;
  orderId?: string;
  soldAt?: string;
  total?: string;
}

/**
 * Operator-facing: notifies course staff that a clinic/camp registration was
 * sold. Surfaces the customer record and intake answers; no customer CTA.
 */
export const ClinicSoldNotification = ({
  clinic = defaultClinic,
  customer = defaultCustomer,
  orderId = "8472200",
  soldAt = "May 6, 2026 · 2:25 PM",
  total = defaultClinic.total,
}: ClinicSoldNotificationProps) => {
  return (
    <EmailShell preheader={`Clinic sold — ${clinic.name} (#${orderId}).`}>
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow={course.name}
        title="Clinic sold"
        subtitle={soldAt}
        stamps={[{ label: "Order ID", value: `#${orderId}` }]}
      />

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
        <SectionHeading
          title={clinic.name}
          description={`${clinic.dateRange} · ${clinic.time}`}
        />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          {clinic.intake.map((field, i) => (
            <DetailRow key={i} label={field.label} value={field.value} />
          ))}
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <PaymentSummary
          total={{ label: "Total paid", value: total }}
          status="paid"
        />
      </EmailSection>

      <EmailFooter
        reason={`Internal clinic-sold notification for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
