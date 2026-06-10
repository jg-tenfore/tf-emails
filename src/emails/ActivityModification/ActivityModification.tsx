import { ArrowRight, Calendar } from "@untitledui/icons";
import {
  CTAButton,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  type FieldChange,
  ItemizedList,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
  WhatChanged,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { activity as defaultActivity, course, golfer, type Activity } from "@/lib/scenario";

export interface ActivityModificationProps {
  firstName?: string;
  activity?: Activity;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  /** Refund amount if the change reduced the total (e.g. fewer players). */
  refund?: string;
  manageUrl?: string;
}

const defaultChanges: FieldChange[] = [
  { label: "Start time", from: "2:00 PM", to: "3:00 PM" },
  { label: "Players (Bay 4)", from: "3", to: "2" },
];

export const ActivityModification = ({
  firstName = golfer.firstName,
  activity = defaultActivity,
  changes = defaultChanges,
  refund,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultActivity.bookingId}`,
}: ActivityModificationProps) => {
  return (
    <EmailShell
      preheader={`Your simulator session (#${activity.bookingId}) was updated.`}
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
        eyebrow="Reservation updated"
        title={`Your session changed, ${firstName}.`}
        subtitle="Here's what's different."
        stamps={[{ label: "Activity booking", value: `#${activity.bookingId}` }]}
      />

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Updated bookings" />
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
            Update calendar
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because your simulator session at Sagamore Spring Golf Club was changed." />
    </EmailShell>
  );
};
