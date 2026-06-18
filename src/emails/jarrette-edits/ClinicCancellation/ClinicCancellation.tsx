import { Calendar, Clock, RefreshCw02, Users01, XCircle } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  JarretteFooter,
  JarretteHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  SupportLine,
} from "@/components/email";
import { clinic as defaultClinic, type Clinic, golfer } from "@/lib/scenario";

export interface ClinicCancellationProps {
  firstName?: string;
  clinic?: Clinic;
  /** Refund returned for the cancelled registration. Omit for non-refundable. */
  refund?: string;
  rebookUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const ClinicCancellation = ({
  firstName = golfer.firstName,
  clinic = defaultClinic,
  refund = defaultClinic.total,
  rebookUrl = "https://www.sagamoregolf.com/clinics",
  helpEmail = "proshop@sagamoregolf.com",
}: ClinicCancellationProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Cancellation question - Registration #${clinic.registrationId}`,
  )}`;

  return (
    <EmailShell
      preheader={`Your registration for ${clinic.name} was cancelled.`}
    >
      <JarretteHeader />

      <StatusHero
        tone="danger"
        eyebrow="Registration cancelled"
        title={`Your registration was cancelled, ${firstName}.`}
        subtitle="We've cancelled the registration below. We hope to see you on the course soon."
        stamps={[
          { label: "Registration", value: `#${clinic.registrationId}` },
          { label: "Clinic", value: `#${clinic.instance}` },
        ]}
      />

      <EmailSection padding="md">
        <Callout tone="error" eyebrow="Cancelled" icon={XCircle}>
          Your registration for {clinic.name} has been cancelled.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Cancelled registration" />
        <DetailCard className="mt-4">
          <DetailRow label="Clinic" value={clinic.name} />
          <DetailRow icon={Calendar} label="Dates" value={clinic.dateRange} />
          <DetailRow icon={Clock} label="Time" value={clinic.time} />
          <DetailRow icon={Users01} label="Ages" value={clinic.ages} />
        </DetailCard>
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
          Browse clinics
        </CTAButton>
        <SupportLine className="mt-4" href={helpHref} linkText="Contact the pro shop" />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because a Sagamore Spring Golf Club clinic registration was cancelled." />
    </EmailShell>
  );
};
