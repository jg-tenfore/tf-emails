import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Flag01,
  MarkerPin02,
  Users01,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import {
  CTAButton,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  SectionHeading,
} from "@/components/email";
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
}

export const TeeTimeConfirmation = ({
  firstName = golfer.firstName,
  teeTime = defaultTeeTime,
  payment = defaultPayment,
  manageUrl = `https://www.sagamoregolf.com/reservations/${defaultTeeTime.confirmation}`,
}: TeeTimeConfirmationProps) => {
  return (
    <EmailShell
      preheader={`Your tee time at ${teeTime.course} is confirmed for ${teeTime.date} at ${teeTime.time}.`}
    >
      <EmailHeader />

      {/* Intro band */}
      <EmailSection padding="lg">
        <h1 className="text-display-xs font-semibold text-primary">
          You're booked, {firstName}.
        </h1>
        <p className="mt-2 text-md text-secondary">
          Your tee time is confirmed. Here are the details for your upcoming
          round — we'll see you on the first tee.
        </p>
        <div className="mt-5">
          <CTAButton href={manageUrl} size="lg" iconTrailing={ArrowRight}>
            View reservation
          </CTAButton>
        </div>
      </EmailSection>

      {/* Captioned hero */}
      <EmailHero
        imageUrl={courseImage}
        imageAlt={teeTime.course}
        eyebrow={`Confirmation #${teeTime.confirmation}`}
        headline={teeTime.course}
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

        <div className="mt-4 rounded-xl border border-secondary px-5 [&>*+*]:border-t [&>*+*]:border-secondary">
          <DetailRow icon={Calendar} label="Date" value={teeTime.date} />
          <DetailRow icon={Clock} label="Tee time" value={teeTime.time} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${teeTime.players} ${teeTime.players === 1 ? "golfer" : "golfers"}`}
          />
          <DetailRow
            icon={Flag01}
            label="Holes"
            value={`${teeTime.holes} holes`}
          />
          <DetailRow
            label="Rate type"
            value={
              <Badge type="pill-color" color="warning" size="sm">
                {teeTime.rateType}
              </Badge>
            }
          />
          <DetailRow
            label="Confirmation #"
            value={<span className="font-mono">{teeTime.confirmation}</span>}
          />
          <DetailRow
            label="Course confirmation #"
            value={
              <span className="font-mono">{teeTime.courseConfirmation}</span>
            }
          />
          <DetailRow label="Group" value={teeTime.groupName} />
        </div>

        {/* Course + address */}
        <div className="mt-4 flex items-start gap-3">
          <MarkerPin02 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
          <p className="text-sm text-secondary">
            <span className="font-semibold text-primary">{teeTime.course}</span>
            {teeTime.courseNote ? (
              <span className="text-tertiary"> · {teeTime.courseNote}</span>
            ) : null}
            <br />
            {teeTime.address} ·{" "}
            <a
              href={teeTime.mapUrl}
              className="font-medium text-brand-secondary underline underline-offset-2"
            >
              Map it
            </a>
          </p>
        </div>

        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-success-primary">
          <CheckCircle className="size-4" />
          Free cancellation up to 24 hours before your tee time.
        </p>
      </EmailSection>

      <Divider />

      {/* Payment details */}
      <EmailSection padding="lg">
        <SectionHeading title="Payment details" />

        <div className="mt-4 px-1">
          <DetailRow
            label="Green fees"
            value={
              <span>
                {payment.greenFees}{" "}
                <span className="font-normal text-tertiary">
                  ({payment.greenFeesPerPlayer})
                </span>
              </span>
            }
          />
          <DetailRow label="Convenience fee" value={payment.convenienceFee} />
          <DetailRow label="Taxes" value={payment.taxes} />
          <DetailRow
            label={
              <span>
                Discounts
                <span className="block text-xs text-tertiary">
                  {payment.discountNote}
                </span>
              </span>
            }
            value={
              <span className="text-success-primary">{payment.discounts}</span>
            }
          />
          <DetailRow
            label="Youth On Course donation"
            value={payment.donation}
          />
          <div className="mt-1 border-t border-secondary pt-1">
            <DetailRow label="Grand total" value={payment.grandTotal} emphasis />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-secondary px-4 py-3 text-sm">
          <span className="text-tertiary">
            Paid online{" "}
            <span className="font-semibold text-primary">
              {payment.paidOnline}
            </span>
          </span>
          <span className="text-tertiary">
            Due at course{" "}
            <span className="font-semibold text-primary">
              {payment.dueAtCourse}
            </span>
          </span>
        </div>
      </EmailSection>

      <Divider />

      {/* Good to know */}
      <EmailSection padding="lg" tone="muted">
        <SectionHeading title="Good to know" />
        <ul className="mt-3 flex flex-col gap-2 text-sm text-tertiary">
          <li>
            · This tee time is played precisely at the time chosen. The Twilight
            Deal rate is valid for this tee time only.
          </li>
          <li>
            · Groups of fewer than four players may be paired with other
            pre-paid golfers.
          </li>
          <li>
            · Payment is due online in full at the time of reservation; pro-shop
            staff can't change the tee time or honor the prepaid rate for
            another slot.
          </li>
        </ul>

        <h3 className="mt-5 text-sm font-semibold text-primary">
          Tee time policy
        </h3>
        <p className="mt-2 text-sm text-tertiary">
          Please follow the course dress code: collared shirt required; no denim
          or tank tops. Reservations are refundable only if cancelled 24+ hours
          in advance, if the course is closed on the day of play, or with an
          eligible Sagamore Pass cancellation. Refunds are issued as account
          credit valid for six months.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <CTAButton
            href={`${manageUrl}/calendar`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Calendar}
          >
            Add to calendar
          </CTAButton>
          <CTAButton
            href={manageUrl}
            color="secondary"
            size="lg"
            fullWidth
            iconTrailing={ArrowRight}
          >
            Manage reservation
          </CTAButton>
        </div>
      </EmailSection>

      <EmailFooter reason="You're receiving this because you booked a tee time with Sagamore Spring Golf Club." />
    </EmailShell>
  );
};
