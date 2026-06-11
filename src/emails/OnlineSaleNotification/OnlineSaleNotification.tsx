import {
  ContactBlock,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  ItemizedList,
  Panel,
  PaymentSummary,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import {
  course,
  type CustomerRecord,
  customer as defaultCustomer,
  onlineSale as defaultSale,
  type OnlineSale,
} from "@/lib/scenario";

export interface OnlineSaleNotificationProps {
  sale?: OnlineSale;
  customer?: CustomerRecord;
}

/**
 * Operator-facing: notifies course staff that an online order was placed and
 * paid. Surfaces the customer record and revenue; no customer call-to-action.
 */
export const OnlineSaleNotification = ({
  sale = defaultSale,
  customer = defaultCustomer,
}: OnlineSaleNotificationProps) => {
  return (
    <EmailShell preheader={`Online sale — ${sale.total} from ${customer.name}.`}>
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow={course.name}
        title="New online sale"
        subtitle={sale.dateTime}
        stamps={[{ label: "Order ID", value: `#${sale.orderId}` }]}
      />

      <EmailSection padding="md">
        <ContactBlock
          title="Customer"
          fields={[
            { label: "Name", value: customer.name },
            { label: "Customer ID", value: customer.customerId },
            { label: "Email", value: customer.email },
          ]}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Items" />
        <Panel className="mt-4">
          <ItemizedList items={sale.items} />
        </Panel>
        <div className="mt-4">
          <PaymentSummary
            rows={[{ label: "Tax", value: sale.tax }]}
            total={{ value: sale.total }}
            status="paid"
          />
        </div>
      </EmailSection>

      <EmailFooter
        reason={`Internal sale notification for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
