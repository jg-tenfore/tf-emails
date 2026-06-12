import { ArrowRight, Calendar, Clock, CreditCard02, Flag01, Users01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import {
  Callout,
  CTAButton,
  CTAStack,
  DetailCard,
  DetailRow,
  Divider,
  EmailFooter,
  EmailHeader,
  EmailHero,
  EmailSection,
  EmailShell,
  PaymentSummary,
  PlayerRoster,
  type RosterPlayer,
  SectionHeading,
  StatusHero,
} from "@/components/email";
import { assets } from "@/lib/assets";
import { course, courseImage, golfer } from "@/lib/scenario";

export interface TeeTimeReservedProps {
  firstName?: string;
  date?: string;
  time?: string;
  confirmation?: string;
  roster?: RosterPlayer[];
  total?: string;
  paid?: string;
  amountDue?: string;
  payUrl?: string;
  manageUrl?: string;
}

const share = (
  name: string,
  status: string,
  tone: RosterPlayer["statusTone"],
  golferId: string,
): RosterPlayer => ({
  name,
  golferId,
  status,
  statusTone: tone,
  rateType: "Weekend 18 · with cart",
  amount: "$62.00",
});

const defaultRoster: RosterPlayer[] = [
  share(golfer.fullName, "Paid", "paid", "TF-100482"),
  share("Marcus Webb", "Pending", "pending", "TF-238815"),
  share("Cody Sanders", "Pending", "pending", "TF-194730"),
  share("Weston Farnsworth", "Pending", "pending", "TF-205518"),
];

/**
 * Tee time reserved with payment pending — the spot is held, but each golfer in
 * the group still owes their share. Built in the standard Sagamore Tee Times
 * style (StatusHero → VenueBadge → details), matching the other emails here.
 */
export const TeeTimeReserved = ({
  firstName = golfer.firstName,
  date = "Saturday, May 9, 2026",
  time = "8:40 AM",
  confirmation = "538117902",
  roster = defaultRoster,
  total = "$248.00",
  paid = "$62.00",
  amountDue = "$186.00",
  payUrl = `https://www.sagamoregolf.com/reservations/${"538117902"}/pay`,
  manageUrl = `https://www.sagamoregolf.com/reservations/${"538117902"}`,
}: TeeTimeReservedProps) => {
  const players = roster.length;
  const pendingCount = roster.filter((p) => p.statusTone === "pending").length;

  return (
    <EmailShell
      preheader={`Your tee time at ${course.name} is reserved for ${date} — payment pending.`}
    >
      <EmailHeader />

      <StatusHero
        eyebrow="Tee time reserved"
        title={`Your tee time is reserved, ${firstName}.`}
        subtitle={`${date} · ${time}`}
      />

      <EmailHero
        imageUrl={courseImage}
        imageAlt={course.name}
        logoUrl={assets.logo.src}
        logoAlt={course.name}
        eyebrow={`Confirmation #${confirmation}`}
        headline={course.name}
        details={["Weekend · 18 holes", course.address]}
        mapUrl={course.mapUrl}
      />

      <EmailSection padding="md">
        <Callout tone="warning" eyebrow="Payment pending">
          Your spot is held. The tee time isn't fully paid until each golfer in
          your group settles their share.
        </Callout>
      </EmailSection>

      <EmailSection padding="md">
        <SectionHeading
          title="Your group"
          aside={
            pendingCount > 0 ? (
              <Badge type="pill-color" color="warning" size="md">
                {pendingCount} pending
              </Badge>
            ) : (
              <Badge type="pill-color" color="success" size="md">
                All paid
              </Badge>
            )
          }
        />
        <PlayerRoster className="mt-4" players={roster} />
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Tee time details" />
        <DetailCard className="mt-4">
          <DetailRow icon={Calendar} label="Date" value={date} />
          <DetailRow icon={Clock} label="Tee time" value={time} />
          <DetailRow icon={Flag01} label="Holes" value="18 holes" />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${players} golfers`}
          />
          <DetailRow
            label="Confirmation"
            value={<span className="font-mono">#{confirmation}</span>}
          />
        </DetailCard>
      </EmailSection>

      <Divider />

      <EmailSection padding="md">
        <SectionHeading title="Payment" />
        <div className="mt-4">
          <PaymentSummary
            rows={[
              { label: "Total", value: total },
              { label: "Paid so far", value: `−${paid}`, muted: true },
            ]}
            total={{ label: "Amount due", value: amountDue }}
            status="amount-due"
            note={`${pendingCount} of ${players} players still need to pay their share.`}
          />
        </div>
        <CTAStack className="mt-6">
          <CTAButton href={payUrl} size="lg" fullWidth iconLeading={CreditCard02}>
            Pay your share
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
        </CTAStack>
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you reserved a tee time at ${course.name}.`} />
    </EmailShell>
  );
};
