import { ArrowRight, Calendar, MarkerPin02 } from "@untitledui/icons";
import {
  CTAButton,
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

export interface ActivityConfirmationProps {
  firstName?: string;
  activity?: Activity;
  manageUrl?: string;
}

export const ActivityConfirmation = ({
  firstName = golfer.firstName,
  activity = defaultActivity,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultActivity.bookingId}`,
}: ActivityConfirmationProps) => {
  return (
    <EmailShell
      preheader={`Your simulator session at ${course.name} is confirmed.`}
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
        eyebrow="Reservation confirmed"
        title={`You're booked, ${firstName}.`}
        subtitle="Your simulator session is confirmed — here are the details."
        stamps={[{ label: "Activity booking", value: `#${activity.bookingId}` }]}
      />

      <EmailSection padding="md">
        <SectionHeading title="Your bookings" />
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

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary total={{ value: activity.total }} status="paid" />
        </div>

        <div className="mt-4 flex items-start gap-3">
          <MarkerPin02 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
          <p className="text-sm text-secondary">
            <span className="font-semibold text-primary">{course.name}</span>
            <br />
            {course.address} ·{" "}
            <a
              href={course.mapUrl}
              className="font-medium text-brand-secondary underline underline-offset-2"
            >
              Map it
            </a>
          </p>
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <div className="flex flex-col gap-3">
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Manage reservation
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

      <EmailFooter reason="You're receiving this because you booked a simulator session at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
