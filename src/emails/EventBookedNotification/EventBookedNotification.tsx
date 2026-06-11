import { Calendar, Users01 } from "@untitledui/icons";
import {
  ContactBlock,
  DetailCard,
  DetailRow,
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
  SummaryStrip,
} from "@/components/email";
import {
  course,
  type CustomerRecord,
  customer as defaultCustomer,
  golfEvent as defaultEvent,
  type GolfEvent,
} from "@/lib/scenario";

export interface EventBookedNotificationProps {
  event?: GolfEvent;
  customer?: CustomerRecord;
}

/**
 * Operator-facing: notifies course staff that a golf event/outing was booked.
 * Surfaces the organizer contact, event details and revenue; no customer CTA.
 */
export const EventBookedNotification = ({
  event = defaultEvent,
  customer = defaultCustomer,
}: EventBookedNotificationProps) => {
  return (
    <EmailShell preheader={`Event booked — ${event.name} (#${event.eventId}).`}>
      <EmailHeader variant="admin" />

      <StatusHero
        eyebrow={course.name}
        title="Event booked"
        subtitle={event.name}
        stamps={[{ label: "Event", value: `#${event.eventId}` }]}
      />

      <EmailSection padding="md">
        <ContactBlock
          title="Contact"
          fields={[
            { label: "Name", value: customer.name },
            { label: "Organization", value: event.organization },
            { label: "Email", value: event.organizerEmail },
            { label: "Phone", value: customer.phone },
          ]}
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Event details" />
        <DetailCard className="mt-4">
          <DetailRow label="When" value={event.when} icon={Calendar} />
          <DetailRow label="Format" value={event.format} />
          <DetailRow
            label="Players"
            value={`${event.players} players`}
            icon={Users01}
          />
          <DetailRow label="Groups" value={event.groups} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Items" />
        <Panel className="mt-4">
          <ItemizedList items={event.items} />
        </Panel>
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Subtotal", value: event.subtotal },
              { label: "Tax", value: event.tax },
              { label: "Event fees", value: event.fees },
            ]}
            total={{ value: event.total }}
          />
          <SummaryStrip
            className="mt-4"
            items={[
              { label: "Paid", value: event.paid },
              { label: "Balance due", value: event.balanceDue },
            ]}
          />
        </div>
      </EmailSection>

      <EmailFooter
        reason={`Internal event-booked notification for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
