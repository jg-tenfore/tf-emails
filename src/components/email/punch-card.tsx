import { Check, Flag01 } from "@untitledui/icons";
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
        "rounded-xl border border-secondary bg-secondary p-5",
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

      <div className={cx("flex flex-wrap gap-2", label && "mt-4")}>
        {Array.from({ length: total }).map((_, i) => {
          const isUsed = i < used;
          return (
            <span
              key={i}
              aria-label={isUsed ? "Round used" : "Round remaining"}
              className={cx(
                "flex size-9 items-center justify-center rounded-full ring-1",
                isUsed
                  ? "bg-primary text-quaternary ring-secondary"
                  : "bg-brand-primary text-brand-secondary ring-transparent",
              )}
            >
              {isUsed ? (
                <Check className="size-4" />
              ) : (
                <Flag01 className="size-4" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};
