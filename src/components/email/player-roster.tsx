import { cx } from "@/utils/cx";

export interface RosterPlayer {
  name: string;
  /** Optional rate label, e.g. "Birdie member" or "Public". */
  rateType?: string;
  /** Optional per-player price (rates can differ within a group). */
  amount?: string;
}

interface PlayerRosterProps {
  players: RosterPlayer[];
  className?: string;
}

const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/**
 * The roster of golfers on a booking — each player's name, their rate, and
 * (optionally) their individual price, so groups with mixed rates read clearly.
 */
export const PlayerRoster = ({ players, className }: PlayerRosterProps) => (
  <div
    className={cx(
      "overflow-hidden rounded-xl border border-secondary [&>*+*]:border-t [&>*+*]:border-secondary",
      className,
    )}
  >
    {players.map((p, i) => (
      <div
        key={i}
        className="flex items-center justify-between gap-4 px-5 py-3"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-semibold text-brand-secondary">
            {initials(p.name)}
          </span>
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
    ))}
  </div>
);
