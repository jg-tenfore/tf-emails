import { ArrowRight, Calendar, Trophy01, Users01 } from "@untitledui/icons";
import {
  CTAButton,
  CTAStack,
  DetailCard,
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
  SummaryStrip,
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

      <StatusHero
        eyebrow="Event confirmed"
        title={`Your event is booked, ${firstName}.`}
        subtitle={event.name}
        stamps={[{ label: "Event", value: `#${event.eventId}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Your event at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Event details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="When" value={event.when} />
          <DetailRow icon={Trophy01} label="Format" value={event.format} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${event.players} players`}
          />
          <DetailRow label="Groups" value={event.groups} />
        </DetailCard>
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
        <SummaryStrip
          className="mt-4"
          items={[
            { label: "Paid", value: event.paid },
            { label: "Balance due", value: event.balanceDue },
          ]}
        />
      </EmailSection>

      <EmailSection padding="md">
        <CTAStack>
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
        </CTAStack>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you booked an event at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
