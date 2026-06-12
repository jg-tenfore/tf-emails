import { Calendar, Clock, MarkerPin02, Users01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { Badge } from "@/components/base/badges/badges";
import { DetailRow } from "./detail-row";

export interface BookingDetails {
  course: string;
  location?: string;
  /** Optional resource row shown first, e.g. { label: "Bay", value: "Bay 7" }. */
  unit?: { label: string; value: string };
  date: string;
  time: string;
  players: number;
  confirmationCode: string;
}

interface BookingCardProps {
  booking: BookingDetails;
  status?: { label: string; color: "success" | "warning" | "error" | "brand" };
  /** Venue logo shown to the left of the course name + location. */
  logoUrl?: string;
  logoAlt?: string;
  /** Label for the time row. Defaults to "Tee time". */
  timeLabel?: string;
  /** Noun for the player count, e.g. "golfer" or "player". Defaults to "golfer". */
  playerNoun?: string;
  className?: string;
}

/** Booking summary card used in confirmation / reminder emails. */
export const BookingCard = ({
  booking,
  status,
  logoUrl,
  logoAlt,
  timeLabel = "Tee time",
  playerNoun = "golfer",
  className,
}: BookingCardProps) => {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-xl border border-secondary",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3 bg-secondary px-5 py-4">
        <div className="flex items-start gap-3">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoAlt ?? booking.course}
              className="size-10 shrink-0 rounded-lg ring-1 ring-black/5"
            />
          ) : null}
          <div>
            <p className="text-md font-semibold text-primary">
              {booking.course}
            </p>
            {booking.location ? (
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-tertiary">
                <MarkerPin02 className="size-3.5" />
                {booking.location}
              </p>
            ) : null}
          </div>
        </div>
        {status ? (
          <Badge type="pill-color" color={status.color} size="md">
            {status.label}
          </Badge>
        ) : null}
      </div>
      <div className="px-5 py-1 [&>*+*]:border-t [&>*+*]:border-secondary">
        {booking.unit ? (
          <DetailRow label={booking.unit.label} value={booking.unit.value} />
        ) : null}
        <DetailRow icon={Calendar} label="Date" value={booking.date} />
        <DetailRow icon={Clock} label={timeLabel} value={booking.time} />
        <DetailRow
          icon={Users01}
          label="Players"
          value={`${booking.players} ${booking.players === 1 ? playerNoun : `${playerNoun}s`}`}
        />
        <DetailRow
          label="Confirmation"
          value={
            <span className="font-mono tracking-wide">
              #{booking.confirmationCode}
            </span>
          }
        />
      </div>
    </div>
  );
};
