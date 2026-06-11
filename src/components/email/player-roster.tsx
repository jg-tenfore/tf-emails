import { cx } from "@/utils/cx";
import { Badge } from "@/components/base/badges/badges";

export interface RosterPlayer {
  name: string;
  /** Rate label, e.g. "Public Rate · Weekday". */
  rateType?: string;
  /** Primary per-player price (rates can differ within a group). */
  amount?: string;
  /** Per-player status, e.g. "Pending" / "Paid". */
  status?: string;
  statusTone?: "pending" | "paid" | "neutral";
  /** Extra per-player lines, e.g. [{ label: "Cart fee", value: "$22.08" }]. */
  extra?: { label: string; value: string }[];
}

interface PlayerRosterProps {
  players: RosterPlayer[];
  className?: string;
}

const statusColor = {
  pending: "warning",
  paid: "success",
  neutral: "gray",
} as const;

const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Avatar = ({ name }: { name: string }) => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-semibold text-brand-secondary">
    {initials(name)}
  </span>
);

/**
 * The roster of golfers on a booking — each player's name, rate, and optional
 * per-player price, payment status, and breakdown lines, so groups with mixed
 * rates or mixed payment states read clearly.
 */
export const PlayerRoster = ({ players, className }: PlayerRosterProps) => (
  <div
    className={cx(
      "overflow-hidden rounded-xl border border-secondary [&>*+*]:border-t [&>*+*]:border-secondary",
      className,
    )}
  >
    {players.map((p, i) => {
      const detailed = Boolean(p.status || p.extra?.length);

      if (detailed) {
        return (
          <div key={i} className="px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Avatar name={p.name} />
                <p className="truncate text-sm font-semibold text-primary">
                  {p.name}
                </p>
              </div>
              {p.status ? (
                <Badge
                  type="pill-color"
                  color={statusColor[p.statusTone ?? "neutral"]}
                  size="sm"
                >
                  {p.status}
                </Badge>
              ) : null}
            </div>
            {p.rateType || p.amount || p.extra?.length ? (
              <dl className="mt-2 ml-12 flex flex-col gap-1 text-xs">
                {p.amount ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-tertiary">{p.rateType ?? "Share"}</dt>
                    <dd className="font-medium text-secondary">{p.amount}</dd>
                  </div>
                ) : null}
                {p.extra?.map((e, j) => (
                  <div key={j} className="flex justify-between gap-4">
                    <dt className="text-tertiary">{e.label}</dt>
                    <dd className="font-medium text-secondary">{e.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        );
      }

      return (
        <div
          key={i}
          className="flex items-center justify-between gap-4 px-5 py-3"
        >
          <div className="flex min-w-0 items-center gap-3">
            <Avatar name={p.name} />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-primary">
                {p.name}
              </p>
              {p.rateType ? (
                <p className="text-xs text-tertiary">{p.rateType}</p>
              ) : null}
            </div>
          </div>
          {p.amount ? (
            <span className="shrink-0 text-sm font-medium text-secondary">
              {p.amount}
            </span>
          ) : null}
        </div>
      );
    })}
  </div>
);
