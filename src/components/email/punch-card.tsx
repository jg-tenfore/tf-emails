import { Check } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface PunchCardProps {
  /** Total rounds on the card (e.g. 10 or 5). */
  total: number;
  /** Rounds already redeemed. */
  used: number;
  /** Card label, e.g. "10-Round Punch Card". */
  label?: string;
  className?: string;
}

/**
 * Visual punch card: a slot per round — redeemed slots are checked off, the
 * rest stay "open" (a green flag) — with a remaining-rounds count.
 */
export const PunchCard = ({ total, used, label, className }: PunchCardProps) => {
  const remaining = Math.max(0, total - used);

  return (
    <div
      className={cx(
        "rounded-xl border border-secondary bg-secondary p-6",
        className,
      )}
    >
      {label ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-primary">{label}</p>
          <span
            className={cx(
              "text-sm font-semibold",
              remaining > 0 ? "text-brand-secondary" : "text-tertiary",
            )}
          >
            {remaining} of {total} left
          </span>
        </div>
      ) : null}

      <div
        className={cx(
          "grid grid-cols-5 justify-items-center gap-x-3 gap-y-5 py-1",
          label && "mt-6",
        )}
      >
        {Array.from({ length: total }).map((_, i) => {
          const isUsed = i < used;
          return (
            <span
              key={i}
              aria-label={isUsed ? "Round used" : `Round ${i + 1} remaining`}
              className={cx(
                "flex size-16 items-center justify-center rounded-full text-lg font-semibold",
                isUsed
                  ? "bg-brand-solid text-white"
                  : "bg-primary text-tertiary ring-1 ring-secondary",
              )}
            >
              {isUsed ? <Check className="size-7 stroke-[3]" /> : i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};
