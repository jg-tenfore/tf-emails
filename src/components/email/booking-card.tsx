import { Calendar, Clock, MarkerPin02, Users01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { Badge } from "@/components/base/badges/badges";
import { DetailRow } from "./detail-row";

export interface BookingDetails {
  course: string;
  location?: string;
  date: string;
  time: string;
  players: number;
  confirmationCode: string;
}

interface BookingCardProps {
  booking: BookingDetails;
  status?: { label: string; color: "success" | "warning" | "error" | "brand" };
  className?: string;
}

/** Tee-time summary card used in confirmation / reminder emails. */
export const BookingCard = ({
  booking,
  status,
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
        <div>
          <p className="text-md font-semibold text-primary">{booking.course}</p>
          {booking.location ? (
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-tertiary">
              <MarkerPin02 className="size-3.5" />
              {booking.location}
            </p>
          ) : null}
        </div>
        {status ? (
          <Badge type="pill-color" color={status.color} size="md">
            {status.label}
          </Badge>
        ) : null}
      </div>
      <div className="px-5 py-1 [&>*+*]:border-t [&>*+*]:border-secondary">
        <DetailRow icon={Calendar} label="Date" value={booking.date} />
        <DetailRow icon={Clock} label="Tee time" value={booking.time} />
        <DetailRow
          icon={Users01}
          label="Players"
          value={`${booking.players} ${booking.players === 1 ? "golfer" : "golfers"}`}
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
