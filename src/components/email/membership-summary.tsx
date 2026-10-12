import type { ReactNode } from "react";
import type { Membership } from "@/lib/scenario";
import { Checklist } from "./checklist";
import { DetailCard } from "./detail-card";
import { DetailRow } from "./detail-row";
import { Subheading } from "./subheading";

interface MembershipSummaryProps {
  /** Member's display name. */
  member: string;
  membership: Pick<Membership, "tier" | "term" | "activeThrough" | "benefits">;
  /** Add an "Auto-renew: On" row. */
  showAutoRenew?: boolean;
  benefitsTitle?: ReactNode;
  className?: string;
}

/**
 * The membership details card (Member / Membership / Term / Active through,
 * optional Auto-renew) followed by the "What's included" benefits list.
 */
export const MembershipSummary = ({
  member,
  membership,
  showAutoRenew = false,
  benefitsTitle = "What's included",
  className,
}: MembershipSummaryProps) => (
  <div className={className}>
    <DetailCard>
      <DetailRow label="Member" value={member} />
      <DetailRow label="Membership" value={membership.tier} />
      <DetailRow label="Term" value={membership.term} />
      <DetailRow label="Active through" value={membership.activeThrough} />
      {showAutoRenew ? <DetailRow label="Auto-renew" value="On" /> : null}
    </DetailCard>

    {membership.benefits.length ? (
      <>
        <Subheading className="mt-6">{benefitsTitle}</Subheading>
        <Checklist className="mt-2" items={membership.benefits} />
      </>
    ) : null}
  </div>
);
