import { ArrowRight, Calendar, Clock, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  CTAStack,
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
  const { spotsLeft, rosterSize } = clinic;
  const availability =
    spotsLeft === undefined || rosterSize === undefined
      ? null
      : spotsLeft === 0
        ? {
            tone: "info" as const,
            eyebrow: "Roster full",
            body: `You took the last spot \u2014 all ${rosterSize} are filled. We'll let you know if a spot opens up on another date.`,
          }
        : spotsLeft <= 2
          ? {
              tone: "warning" as const,
              eyebrow: "Almost full",
              body: `Only ${spotsLeft} of ${rosterSize} spots left on this roster.`,
            }
          : {
              tone: "success" as const,
              eyebrow: "Spots remaining",
              body: `${spotsLeft} of ${rosterSize} spots left on this roster.`,
            };

  return (
    <EmailShell
      preheader={`You're registered for ${clinic.name} — ${clinic.dateRange}.`}
    >
      <EmailHeader />

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
        <VenueBadge
          label="Your registration at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Program details" />
        <DetailCard className="mt-4">
          {clinic.sessions?.length ? (
            clinic.recurrence ? (
              <DetailRow icon={Clock} label="Repeats" value={clinic.recurrence} />
            ) : null
          ) : (
            <>
              <DetailRow icon={Calendar} label="Dates" value={clinic.dateRange} />
              <DetailRow icon={Clock} label="Time" value={clinic.time} />
            </>
          )}
          <DetailRow icon={Users01} label="Ages" value={clinic.ages} />
          <DetailRow label="Equipment" value={clinic.equipment} />
        </DetailCard>
        <p className="mt-4 text-sm text-secondary">{clinic.details}</p>
      </EmailSection>

      {clinic.sessions?.length ? (
        <EmailSection padding="md">
          <SectionHeading
            title={clinic.sessions.length > 1 ? "Your sessions" : "Your session"}
          />
          <DetailCard className="mt-4">
            {clinic.sessions.map((session, i) => (
              <DetailRow
                key={i}
                icon={Calendar}
                label={session.date}
                value={
                  session.spotsLeft === undefined
                    ? session.time
                    : `${session.time} \u00b7 ${session.spotsLeft} ${
                        session.spotsLeft === 1 ? "spot" : "spots"
                      } left`
                }
              />
            ))}
          </DetailCard>
          {availability ? (
            <Callout
              className="mt-4"
              tone={availability.tone}
              eyebrow={availability.eyebrow}
            >
              {availability.body}
            </Callout>
          ) : null}
        </EmailSection>
      ) : null}

      <EmailSection padding="md">
        <SectionHeading title="What you told us" />
        <DetailCard className="mt-4">
          {clinic.intake.map((item, i) => (
            <DetailRow key={i} label={item.label} value={item.value} />
          ))}
        </DetailCard>
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
        <CTAStack>
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
        </CTAStack>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you registered for a clinic at Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
