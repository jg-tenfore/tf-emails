import { InfoCircle, UserPlus01, Users01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { buddy, course, golfer } from "@/lib/scenario";

export interface BuddyRequestProps {
  firstName?: string;
  senderName?: string;
  senderEmail?: string;
  sentAt?: string;
  acceptUrl?: string;
  buddiesUrl?: string;
  ignoreEmail?: string;
}

export const BuddyRequest = ({
  firstName = golfer.firstName,
  senderName = buddy.fullName,
  senderEmail = buddy.email,
  sentAt = "Sun May 18, 2026 · 10:30 AM",
  acceptUrl = "https://www.sagamoregolf.com/buddies/requests",
  buddiesUrl = "https://www.sagamoregolf.com/buddies",
  ignoreEmail,
}: BuddyRequestProps) => {
  const ignoreHref = ignoreEmail
    ? `mailto:${ignoreEmail}?subject=${encodeURIComponent(
        `Buddy request from ${senderName}`,
      )}`
    : "#";

  return (
    <EmailShell
      preheader={`${senderName} wants to add you as a golf buddy.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your account at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        icon={UserPlus01}
        eyebrow="Buddies"
        title="You've got a buddy request"
        subtitle={`From ${senderName}`}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Golf buddy request" icon={InfoCircle}>
          Hi {firstName}, {senderName} wants to add you as a golf buddy. Buddies
          can share tee times, see each other's bookings, and play together more
          easily.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading title="Request details" />
        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow label="From" value={senderName} />
          <DetailRow label="Email" value={senderEmail} />
          <DetailRow label="Sent" value={sentAt} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <div className="flex flex-col gap-3">
          <CTAButton
            href={acceptUrl}
            size="lg"
            fullWidth
            iconLeading={UserPlus01}
          >
            Accept buddy request
          </CTAButton>
          <CTAButton
            href={buddiesUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Users01}
          >
            View buddies list
          </CTAButton>
        </div>
        <p className="mt-4 text-center text-sm text-tertiary">
          <a
            href={ignoreHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Not interested? Ignore this email
          </a>
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because someone sent you a golf buddy request on Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
