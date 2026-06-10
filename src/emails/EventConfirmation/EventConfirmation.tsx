import { ArrowRight, Calendar, Trophy01, Users01 } from "@untitledui/icons";
import {
  CTAButton,
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
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import {
  course,
  type EventLineItem,
  golfEvent,
  golfer,
  type GolfEvent,
} from "@/lib/scenario";

export interface EventConfirmationProps {
  firstName?: string;
  event?: GolfEvent;
  /** Override the itemized list (defaults to event.items). */
  items?: EventLineItem[];
  manageUrl?: string;
}

export const EventConfirmation = ({
  firstName = golfer.firstName,
  event = golfEvent,
  items = golfEvent.items,
  manageUrl = `https://www.sagamoregolf.com/events/${golfEvent.eventId}`,
}: EventConfirmationProps) => {
  return (
    <EmailShell
      preheader={`Your event "${event.name}" is booked — ${event.when}.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your event at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Event confirmed"
        title={`Your event is booked, ${firstName}.`}
        subtitle={event.name}
        stamps={[{ label: "Event", value: `#${event.eventId}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Event details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
          <DetailRow label="Groups" value={event.groups} />
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Items" />
        <div className="mt-4 rounded-xl border border-secondary px-5 py-1">
          <ItemizedList
            items={items.map((item: EventLineItem) => ({
              label: item.label,
              qty: item.qty,
              amount: item.amount,
            }))}
          />
        </div>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Subtotal", value: event.subtotal },
              { label: "Tax", value: event.tax },
              { label: "Event fees", value: event.fees },
            ]}
            total={{ value: event.total }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-secondary px-4 py-3">
          <span className="text-sm text-tertiary">
            Paid{" "}
            <span className="font-semibold text-primary">{event.paid}</span>
          </span>
          <span className="text-sm text-tertiary">
            Balance due{" "}
            <span className="font-semibold text-primary">
              {event.balanceDue}
            </span>
          </span>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <div className="flex flex-col gap-3">
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Manage event
          </CTAButton>
          <CTAButton
            href={`${manageUrl}/calendar`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Calendar}
          >
            Add to calendar
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you booked an event at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
