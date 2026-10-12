import { ArrowRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import {
  BookingActions,
  Checklist,
  CTAButton,
  Divider,
  EmailHero,
  EmailSection,
  EmailShell,
  JarretteFooter,
  JarretteHeader,
  PaymentSummary,
  PolicyTag,
  RedemptionCode,
  type RedemptionVariant,
  SectionHeading,
  StatusHero,
  Subheading,
  SummaryStrip,
  TeeTimeDetails,
} from "@/components/email";
import { assets } from "@/lib/assets";
import {
  courseImage,
  golfer,
  payment as defaultPayment,
  type PaymentBreakdown,
  teeTime as defaultTeeTime,
  type TeeTime,
} from "@/lib/scenario";

export interface TeeTimeConfirmationProps {
  firstName?: string;
  teeTime?: TeeTime;
  payment?: PaymentBreakdown;
  manageUrl?: string;
  /** Optional range-bucket add-on with a redeemable code. Omit to hide it. */
  rangeBucket?: { code: string; variant: RedemptionVariant } | null;
}

export const TeeTimeConfirmation = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  payment = defaultPayment,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultTeeTime.confirmation}`,
  rangeBucket = { code: "482917", variant: "pin" },
}: TeeTimeConfirmationProps) => {
  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} is confirmed for ${teeTime.date} at ${teeTime.time}.`}
    >
      <JarretteHeader />

      {/* Intro band */}
      <EmailSection padding="lg" className="pb-6">
        <StatusHero
          inset={false}
          title={`You're booked, ${firstName}.`}
          subtitle="Your tee time is confirmed. Here are the details for your upcoming round — we'll see you on the first tee."
        >
          <CTAButton href={manageUrl} size="lg" iconTrailing={ArrowRight}>
            View reservation
          </CTAButton>
        </StatusHero>
      </EmailSection>

      {/* Captioned hero */}
      <EmailHero
        className="pt-4"
        imageUrl={courseImage}
        imageAlt={teeTime.course}
        logoUrl={assets.logo.src}
        logoAlt={teeTime.course}
        eyebrow={`Confirmation #${teeTime.confirmation}`}
        headline={teeTime.course}
        details={[teeTime.courseNote, teeTime.address]}
        mapUrl={teeTime.mapUrl}
      />

      {/* Tee time details */}
      <EmailSection padding="lg">
        <SectionHeading
          title="Tee time details"
          aside={
            <Badge type="pill-color" color="success" size="md">
              Confirmed
            </Badge>
          }
        />

        <TeeTimeDetails
          className="mt-4"
          date={teeTime.date}
          time={teeTime.time}
          players={teeTime.players}
          holes={teeTime.holes}
          rateType={teeTime.rateType}
          confirmation={teeTime.confirmation}
          courseConfirmation={teeTime.courseConfirmation}
          groupName={teeTime.groupName}
        />

        <PolicyTag block color="warning" className="mt-5">
          Free cancellation up to 24 hours before your tee time
        </PolicyTag>
      </EmailSection>

      <Divider />

      {/* Payment details */}
      <EmailSection padding="lg">
        <SectionHeading title="Payment details" />

        <div className="mt-4">
          <PaymentSummary
            total={{ label: "Grand total", value: payment.grandTotal }}
            rows={[
              {
                label: (
                  <>
                    Green fees{" "}
                    <span className="font-normal text-tertiary">
                      ({payment.greenFeesPerPlayer})
                    </span>
                  </>
                ),
                value: payment.greenFees,
              },
              { label: "Convenience fee", value: payment.convenienceFee },
              { label: "Taxes", value: payment.taxes },
              {
                label: (
                  <>
                    Discounts
                    <span className="block text-xs text-tertiary">
                      {payment.discountNote}
                    </span>
                  </>
                ),
                value: payment.discounts,
                muted: true,
              },
              { label: "Youth On Course donation", value: payment.donation },
            ]}
          />
        </div>

        <SummaryStrip
          className="mt-4"
          items={[
            { label: "Paid online", value: payment.paidOnline },
            { label: "Due at course", value: payment.dueAtCourse },
          ]}
        />
      </EmailSection>

      {rangeBucket ? (
        <>
          <Divider />
          <EmailSection padding="lg">
            <SectionHeading
              title="Range bucket"
              description="Added to your order — warm up before your round."
            />
            <div className="mt-4">
              <RedemptionCode
                variant={rangeBucket.variant}
                code={rangeBucket.code}
                label="Range bucket"
                instructions="Show this at the pro shop or scan it at the ball machine to grab your bucket."
              />
            </div>
          </EmailSection>
        </>
      ) : null}

      <Divider />

      {/* Good to know */}
      <EmailSection padding="lg" tone="muted">
        <SectionHeading title="Good to know" />
        <Checklist
          className="mt-3 gap-2"
          items={[
            "This tee time is played precisely at the time chosen. The Twilight Deal rate is valid for this tee time only.",
            "Groups of fewer than four players may be paired with other pre-paid golfers.",
            "Payment is due online in full at the time of reservation; pro-shop staff can't change the tee time or honor the prepaid rate for another slot.",
          ]}
        />

        <Subheading className="mt-5">Tee time policy</Subheading>
        <p className="mt-2 text-sm text-tertiary">
          Please follow the course dress code: collared shirt required; no denim
          or tank tops. Reservations are refundable only if cancelled 24+ hours
          in advance, if the course is closed on the day of play, or with an
          eligible Sagamore Pass cancellation. Refunds are issued as account
          credit valid for six months.
        </p>

        <BookingActions className="mt-5" manageUrl={manageUrl} />
      </EmailSection>

      <JarretteFooter reason="You're receiving this because you booked a tee time with Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
