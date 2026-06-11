import {
  ArrowRight,
  Calendar,
  Clock,
  Download01,
  LifeBuoy01,
  Phone,
  ShieldTick,
  Users01,
} from "@untitledui/icons";
import {
  AppDownloadLink,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailIntro,
  EmailRating,
  EmailSection,
  EmailShell,
  PaymentMethod,
  PaymentSummary,
  SectionHeading,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { brand } from "@/lib/brand";
import {
  course,
  courseImage,
  golfer,
  receipt,
  type ReceiptLine,
  teeTime,
} from "@/lib/scenario";

export interface ReceiptEmailProps {
  firstName?: string;
  orderNumber?: string;
  orderDate?: string;
  items?: ReceiptLine[];
  subtotal?: string;
  tax?: string;
  total?: string;
  cardLast4?: string;
  receiptUrl?: string;
}

export const ReceiptEmail = ({
  firstName = golfer.firstName,
  orderNumber = receipt.orderNumber,
  orderDate = receipt.orderDate,
  items = receipt.items,
  subtotal = receipt.subtotal,
  tax = receipt.tax,
  total = receipt.total,
  cardLast4 = receipt.cardLast4,
  receiptUrl = `https://www.tenfore.golf/receipts/${receipt.orderNumber}`,
}: ReceiptEmailProps) => {
  return (
    <EmailShell
      preheader={`Your tee time is confirmed — receipt for order #${orderNumber}, ${total}.`}
    >
      <EmailHeader />

      {/* Intro + view receipt on the TenFore platform */}
      <EmailSection padding="lg">
        <EmailIntro
          title={`Your tee time is confirmed, ${firstName}.`}
          subtitle="Thanks for booking with TenFore. Your receipt is below — and you can view it any time on the TenFore platform."
        >
          <CTAButton href={receiptUrl} size="lg" iconTrailing={ArrowRight}>
            View receipt
          </CTAButton>
        </EmailIntro>
      </EmailSection>

      {/* Hero: course photo with dark-green caption (course, address, IDs) */}
      <EmailHero
        imageUrl={courseImage}
        imageAlt={course.name}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        headline={course.name}
        details={[
          course.address,
          `Booking ID #${orderNumber} · User ID #${golfer.userId}`,
        ]}
      />

      {/* Golfer details (traveler-details pattern) */}
      <EmailSection padding="lg">
        <SectionHeading title="Golfer details" />
        <DetailCard className="mt-4">
          <DetailRow label="Reserved for" value={golfer.fullName} />
          <DetailRow icon={Calendar} label="Date" value={teeTime.date} />
          <DetailRow icon={Clock} label="Tee time" value={teeTime.time} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${teeTime.players} ${teeTime.players === 1 ? "golfer" : "golfers"}`}
          />
        </DetailCard>
      </EmailSection>

      <Divider />

      {/* Price details */}
      <EmailSection padding="lg">
        <SectionHeading title="Price details" />
        <div className="mt-4">
          <PaymentSummary
            total={{ value: total }}
            status="paid"
            rows={[
              ...items.map((item) => ({
                label: item.label,
                value: item.amount,
                muted: item.amount.includes("−"),
              })),
              {
                label: "Subtotal",
                value: subtotal,
                subline: { label: "Tax", value: tax },
              },
            ]}
            note={`Paid online on ${orderDate}.`}
            charged={{
              value: total,
              method: <PaymentMethod last4={cardLast4} />,
            }}
          />
        </div>
        <div className="mt-5">
          <CTAButton
            href={`${receiptUrl}.pdf`}
            color="secondary"
            size="lg"
            fullWidth
            iconLeading={Download01}
          >
            Download PDF receipt
          </CTAButton>
        </div>
      </EmailSection>

      <Divider />

      {/* TenFore guarantee */}
      <EmailSection padding="lg">
        <div className="flex items-start gap-4 rounded-xl border border-secondary bg-secondary px-5 py-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-secondary">
            <ShieldTick className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">
              The TenFore Worry-Free Guarantee
            </p>
            <p className="mt-1 text-sm text-tertiary">
              Every booking is backed by free cancellation up to 24 hours before
              your tee time, plus automatic account credit if the course closes
              for weather. Book with total peace of mind.
            </p>
            <a
              href={`${brand.url}/guarantee`}
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary"
            >
              Learn more
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </EmailSection>

      {/* Important information */}
      <EmailSection padding="lg" tone="muted">
        <SectionHeading title="Important information" />
        <div className="mt-4 flex flex-col gap-4 text-sm text-tertiary">
          <div>
            <p className="font-semibold text-primary">
              Cancellations and changes
            </p>
            <p className="mt-1">
              Free cancellation up to 24 hours before your tee time. Inside 24
              hours the Twilight Deal rate is non-refundable. Eligible refunds
              are issued as TenFore account credit valid for six months.
            </p>
          </div>
          <div>
            <p className="font-semibold text-primary">Course policies</p>
            <p className="mt-1">
              Collared shirt required; no denim or tank tops. Arrive 15 minutes
              early to check in at the pro shop. Groups of fewer than four
              players may be paired with other pre-paid golfers.
            </p>
          </div>
        </div>
      </EmailSection>

      <Divider />

      {/* Where to find help */}
      <EmailSection padding="lg">
        <SectionHeading title="Where to find help" />
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
            <div>
              <p className="text-sm font-medium text-primary">
                Questions about your round
              </p>
              <p className="mt-0.5 text-sm text-tertiary">
                Contact {course.name} at{" "}
                <a
                  href={`tel:${course.phone.replace(/[^\d]/g, "")}`}
                  className="font-medium text-brand-secondary"
                >
                  {course.phone}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LifeBuoy01 className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
            <div>
              <p className="text-sm font-medium text-primary">
                Help with this receipt or your account
              </p>
              <p className="mt-0.5 text-sm text-tertiary">
                Reach TenFore support 24/7 —{" "}
                <a
                  href={brand.supportUrl}
                  className="font-medium text-brand-secondary"
                >
                  get support
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </EmailSection>

      <Divider />

      {/* Email rating + app download */}
      <EmailSection padding="lg" align="center">
        <EmailRating />
        <div className="mt-6">
          <AppDownloadLink />
        </div>
      </EmailSection>

      <EmailFooter
        reason={`You're receiving this receipt for a booking at ${course.name} made through TenFore Golf.`}
      />
    </EmailShell>
  );
};
