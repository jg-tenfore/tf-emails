import { ArrowRight, Calendar, ShoppingBag03 } from "@untitledui/icons";
import {
  Callout,
  CTAButton,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailSection,
  EmailShell,
  NumberedSteps,
  PunchCard,
  RedemptionCode,
  SectionHeading,
  StatusHero,
  VenueBadge,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, golfer, type PunchCardData, punchCard10 } from "@/lib/scenario";

export interface PunchCardEmailProps {
  firstName?: string;
  card?: PunchCardData;
  /** Show the expiration-warning callout. */
  expiringSoon?: boolean;
  bookUrl?: string;
}

export const PunchCardEmail = ({
  firstName = golfer.firstName,
  card = punchCard10,
  expiringSoon = false,
  bookUrl = course.bookingUrl,
}: PunchCardEmailProps) => {
  const remaining = Math.max(0, card.total - card.used);
  const fresh = card.used === 0;
  const done = remaining === 0;
  const roundWord = remaining === 1 ? "round" : "rounds";

  const title = done
    ? `Your punch card is all used up, ${firstName}.`
    : fresh
      ? `Your ${card.label.toLowerCase()} is ready, ${firstName}.`
      : `You've got ${remaining} ${roundWord} left, ${firstName}.`;

  return (
    <EmailShell
      preheader={`${remaining} of ${card.total} rounds left on your ${course.name} punch card.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Punch card"
        title={title}
        subtitle={
          done
            ? "Thanks for playing — grab another card to keep the savings going."
            : "Book any tee time and we'll punch one round automatically."
        }
        stamps={[{ label: "Card", value: `#${card.cardNumber}` }]}
      />

      <EmailSection padding="md">
        <VenueBadge
          label="Redeemable at"
          logoUrl={assets.logo.src}
          name={course.name}
          location={course.address}
        />
      </EmailSection>

      {expiringSoon && !done ? (
        <EmailSection padding="md">
          <Callout tone="warning" eyebrow="Expiring soon">
            Your punch card expires {card.expires}. Use your remaining{" "}
            {remaining} {roundWord} before then.
          </Callout>
        </EmailSection>
      ) : null}

      <EmailSection padding="md">
        <PunchCard total={card.total} used={card.used} label={card.label} />
      </EmailSection>

      {!done ? (
        <>
          <Divider />
          <EmailSection padding="md">
            <SectionHeading
              title="Redeem at the course"
              description="Show this code at check-in to confirm it's your card and punch a round."
            />
            <div className="mt-4">
              <RedemptionCode
                variant="qr"
                code={card.cardNumber}
                label="Punch card"
                instructions="Scan at the pro shop to verify your card and deduct one round — no extra payment."
              />
            </div>

            {fresh ? (
              <div className="mt-6">
                <p className="text-sm font-semibold text-primary">
                  How to use your punch card
                </p>
                <NumberedSteps
                  className="mt-3"
                  steps={[
                    `Book any tee time at ${course.name}.`,
                    "At check-in, show this QR code at the pro shop.",
                    "We scan it to verify your card and punch one round — no extra charge.",
                  ]}
                />
              </div>
            ) : null}
          </EmailSection>
        </>
      ) : null}

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Card details" />
        <DetailCard className="mt-4">
          <DetailRow label="Type" value={card.label} />
          <DetailRow
            label="Card number"
            value={<span className="font-mono">#{card.cardNumber}</span>}
          />
          <DetailRow label="Rate" value={`${card.pricePerRound} / round`} />
          <DetailRow icon={Calendar} label="Purchased" value={card.purchased} />
          <DetailRow icon={Calendar} label="Expires" value={card.expires} />
          <DetailRow
            label="Rounds used"
            value={`${card.used} of ${card.total}`}
          />
          <DetailRow label="Rounds remaining" value={`${remaining}`} emphasis />
        </DetailCard>
      </EmailSection>

      <EmailSection padding="md">
        {done ? (
          <CTAButton
            href={`${bookUrl}/punch-cards`}
            size="lg"
            fullWidth
            iconLeading={ShoppingBag03}
          >
            Buy another punch card
          </CTAButton>
        ) : (
          <CTAButton href={bookUrl} size="lg" fullWidth iconTrailing={ArrowRight}>
            Book a tee time
          </CTAButton>
        )}
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you have a punch card with ${course.name}.`} />
    </EmailShell>
  );
};
