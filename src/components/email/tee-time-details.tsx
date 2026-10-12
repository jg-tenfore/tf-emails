import type { ReactNode } from "react";
import { Calendar, Clock, Flag01, Users01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { DetailCard } from "./detail-card";
import { DetailRow } from "./detail-row";

interface TeeTimeDetailsProps {
  date: string;
  time: string;
  players: number;
  holes: number;
  /** Shown as a purple pill, e.g. "Twilight Deal". */
  rateType?: string;
  /** Booking confirmation number, without the leading "#". */
  confirmation?: string;
  /** The course's own confirmation reference, without the leading "#". */
  courseConfirmation?: string;
  /** Booker name and phone. */
  groupName?: string;
  /** Extra `DetailRow`s appended after the standard rows. */
  children?: ReactNode;
  className?: string;
}

/**
 * The standard tee time summary card: Date, Tee time, Players, Holes, then the
 * optional rate, confirmation numbers and group — always in that order. Used
 * by every tee time email so the rows can't drift.
 */
export const TeeTimeDetails = ({
  date,
  time,
  players,
  holes,
  rateType,
  confirmation,
  courseConfirmation,
  groupName,
  children,
  className,
}: TeeTimeDetailsProps) => (
  <DetailCard className={className}>
    <DetailRow icon={Calendar} label="Date" value={date} />
    <DetailRow icon={Clock} label="Tee time" value={time} />
    <DetailRow
      icon={Users01}
      label="Players"
      value={`${players} ${players === 1 ? "golfer" : "golfers"}`}
    />
    <DetailRow icon={Flag01} label="Holes" value={`${holes} holes`} />
    {rateType ? (
      <DetailRow
        label="Rate type"
        value={
          <Badge type="pill-color" color="purple" size="sm">
            {rateType}
          </Badge>
        }
      />
    ) : null}
    {confirmation ? (
      <DetailRow label="Confirmation" value={`#${confirmation}`} mono />
    ) : null}
    {courseConfirmation ? (
      <DetailRow label="Course confirmation" value={`#${courseConfirmation}`} mono />
    ) : null}
    {groupName ? <DetailRow label="Group" value={groupName} /> : null}
    {children}
  </DetailCard>
);
