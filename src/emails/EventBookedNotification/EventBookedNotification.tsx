import { Calendar, Users01 } from "@untitledui/icons";
import {
  ContactBlock,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  ItemizedList,
  PaymentSummary,
  SectionHeading,
  StatusHero,
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
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="When" value={event.when} icon={Calendar} />
          <DetailRow label="Format" value={event.format} />
          <DetailRow
            label="Players"
            value={`${event.players} players`}
            icon={Users01}
          />
          <DetailRow label="Groups" value={event.groups} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Items" />
        <div className="mt-4 rounded-xl border border-secondary px-5 py-2">
          <ItemizedList items={event.items} />
        </div>
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Subtotal", value: event.subtotal },
              { label: "Tax", value: event.tax },
              { label: "Event fees", value: event.fees },
            ]}
            total={{ value: event.total }}
          />
          <div className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-secondary px-4 py-3 text-sm">
            <span className="text-tertiary">
              Paid{" "}
              <span className="font-semibold text-primary">{event.paid}</span>
            </span>
            <span className="text-tertiary">
              Balance due{" "}
              <span className="font-semibold text-primary">
                {event.balanceDue}
              </span>
            </span>
          </div>
        </div>
      </EmailSection>

      <EmailFooter
        reason={`Internal event-booked notification for ${course.name}, sent to course staff.`}
      />
    </EmailShell>
  );
};
