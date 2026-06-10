import { ArrowRight, Calendar, Clock, Users01 } from "@untitledui/icons";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  PaymentSummary,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { clinic as defaultClinic, type Clinic, course, golfer } from "@/lib/scenario";

export interface ClinicConfirmationProps {
  firstName?: string;
  clinic?: Clinic;
  manageUrl?: string;
}

export const ClinicConfirmation = ({
  firstName = golfer.firstName,
  clinic = defaultClinic,
  manageUrl = `https://www.sagamoregolf.com/clinics/${defaultClinic.registrationId}`,
}: ClinicConfirmationProps) => {
  return (
    <EmailShell
      preheader={`You're registered for ${clinic.name} — ${clinic.dateRange}.`}
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
        eyebrow="Registration confirmed"
        title={`You're registered, ${firstName}.`}
        subtitle={clinic.name}
        stamps={[
          { label: "Registration", value: `#${clinic.registrationId}` },
          { label: "Clinic", value: `#${clinic.instance}` },
        ]}
      />

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

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Registration fee", value: clinic.fee },
              { label: "Tax", value: clinic.tax },
            ]}
            total={{ value: clinic.total }}
            status="paid"
          />
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
            Add to calendar
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you registered for a clinic at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
