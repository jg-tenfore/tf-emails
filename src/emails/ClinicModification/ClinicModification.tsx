import { ArrowRight, Calendar, Clock, Users01 } from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  type FieldChange,
  SectionHeading,
  StatusHero,
  VenueBadge,
  WhatChanged,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { clinic as defaultClinic, type Clinic, course, golfer } from "@/lib/scenario";

export interface ClinicModificationProps {
  firstName?: string;
  clinic?: Clinic;
  /** The old → new field diffs to show in the "What changed" box. */
  changes?: FieldChange[];
  manageUrl?: string;
}

const defaultChanges: FieldChange[] = [
  { label: "Week", from: "Week 1 (Jun 16–20)", to: "Week 2 (Jun 23–27)" },
  { label: "T-shirt size", from: "Youth M", to: "Youth L" },
];

export const ClinicModification = ({
  firstName = golfer.firstName,
  clinic = defaultClinic,
  changes = defaultChanges,
  manageUrl = `https://www.sagamoregolf.com/clinics/${defaultClinic.registrationId}`,
}: ClinicModificationProps) => {
  return (
    <EmailShell
      preheader={`Your registration for ${clinic.name} was updated.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your registration at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Registration updated"
        title={`Your registration changed, ${firstName}.`}
        subtitle="Here's what's different — and your updated registration."
        stamps={[
          { label: "Registration", value: `#${clinic.registrationId}` },
          { label: "Clinic", value: `#${clinic.instance}` },
        ]}
      />

      <EmailSection padding="md">
        <WhatChanged changes={changes} />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Program details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow icon={Calendar} label="Dates" value={clinic.dateRange} />
          <DetailRow icon={Clock} label="Time" value={clinic.time} />
          <DetailRow icon={Users01} label="Ages" value={clinic.ages} />
          <DetailRow label="Equipment" value={clinic.equipment} />
        </div>
        <p className="mt-4 text-sm text-secondary">{clinic.details}</p>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="What you told us" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          {clinic.intake.map((item, i) => (
            <DetailRow key={i} label={item.label} value={item.value} />
          ))}
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <div className="flex flex-col gap-3">
          <CTAButton href={manageUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Manage registration
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

      <EmailFooter reason="You're receiving this because your Sagamore Spring Golf Club clinic registration was changed." />
    </EmailShell>
  );
};
