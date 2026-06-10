import {
  ArrowRight,
  Calendar,
  CheckCircle,
  CreditCard02,
} from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfEvent, golfer, type GolfEvent } from "@/lib/scenario";

export interface EventPaymentReceiptProps {
  firstName?: string;
  event?: GolfEvent;
  paymentAmount?: string;
  paymentDate?: string;
  method?: string;
  viewUrl?: string;
  helpEmail?: string;
}

export const EventPaymentReceipt = ({
  firstName = golfer.firstName,
  event = golfEvent,
  paymentAmount = golfEvent.paid,
  paymentDate = "Tue May 12, 2026 · 2:33 PM",
  method = "Visa ending in 4242",
  viewUrl = `https://www.sagamoregolf.com/events/${golfEvent.eventId}`,
  helpEmail = "proshop@sagamoregolf.com",
}: EventPaymentReceiptProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Payment question - Event #${event.eventId}`,
  )}`;

  return (
    <EmailShell
      preheader={`We received your ${paymentAmount} payment for ${event.name}.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Payment received"
        title={`Thanks, ${firstName} — payment received.`}
        subtitle={event.name}
        stamps={[
          { label: "Event", value: `#${event.eventId}` },
          { label: "Payment", value: "#99001" },
        ]}
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
        <Callout tone="success" eyebrow="Payment received" icon={CheckCircle}>
          We received your {paymentAmount} payment — thank you.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="This payment" />
        <DetailCard className="mt-4">
          <DetailRow
            icon={CreditCard02}
            label="Amount"
            value={paymentAmount}
          />
          <DetailRow icon={Calendar} label="Date" value={paymentDate} />
          <DetailRow label="Method" value={method} />
        </DetailCard>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment summary" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Subtotal", value: event.subtotal },
              { label: "Tax", value: event.tax },
              { label: "Event fees", value: event.fees },
            ]}
            total={{ value: event.total }}
            status="paid-in-full"
            statusLabel="Paid in full"
          />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={viewUrl}
          color="secondary"
          size="lg"
          fullWidth
          iconTrailing={ArrowRight}
        >
          View event
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the course" />
      </EmailSection>

      <EmailFooter reason="You're receiving this receipt for a payment toward an event at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
