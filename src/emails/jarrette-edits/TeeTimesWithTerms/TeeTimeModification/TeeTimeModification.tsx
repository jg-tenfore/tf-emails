import {
  BookingActions,
  Divider,
  EmailSection,
  EmailShell,
  type FieldChange,
  JarretteFooter,
  JarretteHeader,
  RefundSection,
  SectionHeading,
  StatusHero,
  TeeTimeDetails,
  TermsAndConditions,
  WhatChanged,
} from "@/components/email";
import { golfer, teeTime as defaultTeeTime, type TeeTime } from "@/lib/scenario";
import { standardTerms, type TeeTimeTerms } from "@/lib/tee-time-terms";

export interface TeeTimeModificationProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  /** Refund amount if the change reduced the total (e.g. fewer players). */
  refund?: string;
  manageUrl?: string;
  /** The course's booking terms — they still apply to the updated booking. */
  terms?: TeeTimeTerms;
}

const defaultChanges: FieldChange[] = [
  { label: "Tee time", from: "6:00 PM", to: "5:30 PM" },
  { label: "Players", from: "2", to: "3" },
];

export const TeeTimeModification = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  changes = defaultChanges,
  refund,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultTeeTime.confirmation}`,
  terms = standardTerms,
}: TeeTimeModificationProps) => {
  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} was updated for ${teeTime.date}.`}
    >
      <JarretteHeader />

      <StatusHero
        eyebrow="Reservation updated"
        title={`Your tee time changed, ${firstName}.`}
        subtitle="Here's what's different — and your updated reservation."
        stamps={[{ label: "Confirmation", value: `#${teeTime.confirmation}` }]}
      />

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Updated reservation" />
        <TeeTimeDetails
          className="mt-4"
          date={teeTime.date}
          time={teeTime.time}
          players={teeTime.players}
          holes={teeTime.holes}
          confirmation={teeTime.confirmation}
        />
      </EmailSection>

      {refund ? <RefundSection amount={refund} /> : null}

      <EmailSection padding="md">
        <BookingActions
          manageUrl={manageUrl}
          calendarLabel="Update calendar"
        />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <TermsAndConditions
          description="Your updated reservation is still covered by the terms you agreed to when you booked."
          audience={terms.audience}
          notices={terms.notices}
          sections={terms.sections}
          acknowledgment={terms.acknowledgment}
        />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because your Sagamore Spring Golf Club tee time was changed." />
    </EmailShell>
  );
};
