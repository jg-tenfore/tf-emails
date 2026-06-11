import { ArrowRight, Calendar, Clock, Users01 } from "@untitledui/icons";
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
  EmailIntro,
  EmailSection,
  EmailShell,
  LocationBlock,
  PaymentSummary,
  PlayerRoster,
  type RosterPlayer,
  SectionHeading,
} from "@/components/email";
import { course, golfer } from "@/lib/scenario";

export interface WorkshopTeeTimeReservedProps {
  firstName?: string;
  courseName?: string;
  address?: string;
  mapUrl?: string;
  date?: string;
  time?: string;
  teeTimeId?: string;
  confirmation?: string;
  roster?: RosterPlayer[];
  greenFees?: string;
  cartFees?: string;
  amountDue?: string;
  manageUrl?: string;
}

const pending = (name: string): RosterPlayer => ({
  name,
  status: "Pending",
  statusTone: "pending",
  rateType: "Public Rate · Weekday",
  amount: "$73.90",
  extra: [{ label: "Cart fee", value: "$22.08" }],
});

const defaultRoster: RosterPlayer[] = [
  pending("Weston Farnsworth"),
  pending("Justin Girard"),
  pending("Cody Sanders"),
  pending("Marcus Webb"),
];

/**
 * Reserved tee time with payment pending per player — the "your spot is held,
 * but each golfer still owes their portion" state (split payment). A polished
 * take on the current production confirmation.
 */
export const WorkshopTeeTimeReserved = ({
  firstName = golfer.firstName,
  courseName = course.name,
  address = course.address,
  mapUrl = course.mapUrl,
  date = "Wednesday, June 10, 2026",
  time = "2:00 PM",
  teeTimeId = "TT-77420",
  confirmation = "619084413",
  roster = defaultRoster,
  greenFees = "$295.60",
  cartFees = "$88.32",
  amountDue = "$383.92",
  manageUrl = "https://www.tenfore.golf/reservations/TT-77420",
}: WorkshopTeeTimeReservedProps) => {
  const players = roster.length;
  const pendingCount = roster.filter(
    (p) => p.statusTone === "pending" || p.status === "Pending",
  ).length;

  return (
    <EmailShell
      preheader={`Your tee time at ${courseName} is reserved for ${date} at ${time} — payment pending.`}
    >
      <EmailHeader />

      <EmailSection padding="lg">
        <EmailIntro
          title={`Your tee time is reserved, ${firstName}.`}
          subtitle={`${date} · ${time} — your spot is held. Payment is pending until each player settles their portion.`}
        >
          <CTAStack>
            <CTAButton href={`${manageUrl}/calendar`} size="lg" fullWidth iconLeading={Calendar}>
              Add to calendar
            </CTAButton>
            <CTAButton href={manageUrl} color="secondary" size="lg" fullWidth iconTrailing={ArrowRight}>
              Manage tee time
            </CTAButton>
          </CTAStack>
        </EmailIntro>
      </EmailSection>

      <EmailSection padding="md">
        <LocationBlock name={courseName} address={address} mapUrl={mapUrl} />
      </EmailSection>

      <EmailSection padding="md">
        <Callout tone="warning" eyebrow="Payment pending">
          Each golfer pays their own portion. The tee time is reserved, but it
          isn't fully paid until every player has settled up.
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
          <DetailRow label="Course" value={courseName} />
          <DetailRow icon={Calendar} label="Date" value={date} />
          <DetailRow icon={Clock} label="Tee time" value={time} />
          <DetailRow
            icon={Users01}
            label="Players"
            value={`${players} golfers`}
          />
          <DetailRow
            label="Tee Time ID"
            value={<span className="font-mono">{teeTimeId}</span>}
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
              { label: `Green fees (${players} × $73.90)`, value: greenFees },
              { label: `Cart fees (${players} × $22.08)`, value: cartFees },
            ]}
            total={{ label: "Amount due", value: amountDue }}
            status="amount-due"
            note="Each player pays their own portion — see Your group above for who's still pending."
          />
        </div>
      </EmailSection>

      <EmailFooter reason={`You're receiving this because you reserved a tee time at ${courseName}.`} />
    </EmailShell>
  );
};
