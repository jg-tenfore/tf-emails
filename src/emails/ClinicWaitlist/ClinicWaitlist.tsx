import { Bell01, Calendar, RefreshCw02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  SupportLine,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { clinic as defaultClinic, type Clinic, course, golfer } from "@/lib/scenario";

export interface ClinicWaitlistProps {
  firstName?: string;
  clinic?: Clinic;
  browseUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const ClinicWaitlist = ({
  firstName = golfer.firstName,
  clinic = defaultClinic,
  browseUrl = "https://www.sagamoregolf.com/clinics",
  helpEmail = "proshop@sagamoregolf.com",
}: ClinicWaitlistProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Waitlist question - Registration #${clinic.registrationId}`,
  )}`;

  return (
    <EmailShell
      preheader={`You're on the waitlist for ${clinic.name}.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Waitlist confirmed"
        title={`You're on the waitlist, ${firstName}.`}
        subtitle={clinic.name}
        stamps={[
          { label: "Registration", value: `#${clinic.registrationId}` },
          { label: "Clinic", value: `#${clinic.instance}` },
        ]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="You're waitlisted at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="What happens next" icon={Bell01}>
          The clinic is full, so we've added you to the waitlist. We'll email and
          text you the moment a spot opens — spots go fast, so keep an eye out.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Clinic details" />
        <DetailCard className="mt-4">
          <DetailRow label="Clinic" value={clinic.name} />
          <DetailRow icon={Calendar} label="Starts" value={clinic.dateRange} />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={browseUrl}
          color="secondary"
          size="lg"
          fullWidth
          iconLeading={RefreshCw02}
        >
          Browse clinics
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the pro shop" />
      </EmailSection>

      <EmailFooter reason="You're receiving this because you joined the waitlist for a clinic at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
