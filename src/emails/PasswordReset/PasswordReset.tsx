import { ArrowRight, InfoCircle, Lock01 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer } from "@/lib/scenario";

export interface PasswordResetProps {
  firstName?: string;
  resetUrl?: string;
  expiresIn?: string;
}

export const PasswordReset = ({
  firstName = golfer.firstName,
  resetUrl = "https://www.sagamoregolf.com/reset?token=preview-token",
  expiresIn = "1 hour",
}: PasswordResetProps) => {
  return (
    <EmailShell
      preheader={`Reset your password — this link expires in ${expiresIn}.`}
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
        icon={Lock01}
        eyebrow="Account security"
        title="Reset your password"
        subtitle={`This link expires in ${expiresIn}.`}
      />

      <EmailSection padding="md">
        <Callout tone="info" eyebrow="Reset link" icon={InfoCircle}>
          Hi {firstName}, click the button below to choose a new password. For
          your security, this link expires in {expiresIn} and can only be used
          once.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton href={resetUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
          Reset password
        </CTAButton>
        <p className="mt-4 text-sm text-tertiary">
          Didn't request this? You can safely ignore this email — your password
          won't change until you create a new one.
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because a password reset was requested for your Sagamore Spring Golf Club account." />
    </EmailShell>
  );
};
