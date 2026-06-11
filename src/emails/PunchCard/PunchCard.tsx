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
  PunchCard,
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
