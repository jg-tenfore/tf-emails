import { AlertTriangle, Calendar, MarkerPin02 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailRow,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import {
  course,
  golfer,
  teeTime as defaultTeeTime,
  type TeeTime,
} from "@/lib/scenario";

export interface WaitlistPaymentFailedProps {
  firstName?: string;
  teeTime?: TeeTime;
  /** Reason the charge failed, e.g. "Card declined — insufficient funds". */
  reason?: string;
  waitlistId?: string;
  updatePaymentUrl?: string;
  /** mailto/support address for the "Need help?" link. */
  helpEmail?: string;
}

export const WaitlistPaymentFailed = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  reason = "Card declined — insufficient funds",
  waitlistId = "77001",
  updatePaymentUrl = "https://www.sagamoregolf.com/account/payment",
  helpEmail = "proshop@sagamoregolf.com",
}: WaitlistPaymentFailedProps) => {
  const helpHref = `mailto:${helpEmail}?subject=${encodeURIComponent(
    `Payment question - Waitlist #${waitlistId}`,
  )}`;

  return (
    <EmailShell
      preheader={`We couldn't process your payment for a ${teeTime.course} tee time.`}
    >
      <EmailHeader />

      <EmailSection padding="md">
        <VenueBadge
          label="Your waitlist at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      <StatusHero
        eyebrow="Payment failed"
        title={`We couldn't process your payment, ${firstName}.`}
        stamps={[{ label: "Waitlist", value: `#${waitlistId}` }]}
      />

      <EmailSection padding="md">
        <Callout tone="warning" eyebrow="Payment failed" icon={AlertTriangle}>
          {reason}. Your tee time was not booked. Update your payment method and
          try again — the spot may still be available.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <div className="rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow
            icon={Calendar}
            label="When"
            value={`${teeTime.date} · ${teeTime.time}`}
          />
          <DetailRow icon={MarkerPin02} label="Course" value={teeTime.course} />
        </div>
      </EmailSection>

      <EmailSection padding="md">
        <CTAButton
          href={updatePaymentUrl}
          color="secondary"
          size="lg"
          fullWidth
        >
          Update payment & try again
        </CTAButton>
        <p className="mt-4 text-center text-sm text-tertiary">
          Need help?{" "}
          <a
            href={helpHref}
            className="font-medium text-brand-secondary underline underline-offset-2"
          >
            Contact the pro shop
          </a>
          .
        </p>
      </EmailSection>

      <EmailFooter reason="You're receiving this because a payment for a Sagamore Spring Golf Club waitlist booking could not be processed." />
    </EmailShell>
  );
};
