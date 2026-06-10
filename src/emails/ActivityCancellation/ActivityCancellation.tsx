import { RefreshCw02 } from "@untitledui/icons";
import {
  CTAButton,
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
import { activity as defaultActivity, course, golfer, type Activity } from "@/lib/scenario";

export interface ActivityCancellationProps {
  firstName?: string;
  activity?: Activity;
  /** Refund returned for the cancelled session. Omit for a non-refundable cancel. */
  refund?: string;
  rebookUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const ActivityCancellation = ({
  firstName = golfer.firstName,
  activity = defaultActivity,
  refund = "$50.00",
  rebookUrl = "https://www.sagamoregolf.com/activities",
  helpEmail = "proshop@sagamoregolf.com",
}: ActivityCancellationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Cancellation question - Activity #${activity.bookingId}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your simulator session (#${activity.bookingId}) was cancelled.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your reservation at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Reservation cancelled"
        title={`Your session was cancelled, ${firstName}.`}
        subtitle="We've cancelled the bookings below. We hope to see you back soon."
        stamps={[{ label: "Activity booking", value: `#${activity.bookingId}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Cancelled bookings" />
        <div className="mt-4">
          <ItemizedList
            items={activity.bookings.map((b) => ({
              label: b.resource,
              sublabel: `${b.date} · ${b.time}`,
              amount: b.price,
            }))}
          />
        </div>
      </EmailSection>

      {refund ? (
        <>
          <Divider />
          <EmailSection padding="md">
            <SectionHeading title="Refund" />
            <div className="mt-4">
              <PaymentSummary
                total={{ label: "Refund", value: refund }}
                status="refund"
                note="Refunds take 2–3 business days to appear on your statement."
              />
            </div>
          </EmailSection>
        </>
      ) : null}

      <EmailSection padding="md">
        <CTAButton
          href={rebookUrl}
          color="secondary"
          size="lg"
          fullWidth
          iconLeading={RefreshCw02}
        >
          Book again
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the pro shop
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because a simulator session at Sagamore Spring Golf Club was cancelled." />
    </EmailShell>
  );
};
