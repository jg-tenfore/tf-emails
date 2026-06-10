import { cx } from "@/utils/cx";

interface VenueBadgeProps {
  /** Partner venue logo. */
  logoUrl: string;
  /** Venue name, e.g. "FloGolf Lounge". */
  name: string;
  /** Location line, e.g. "880 Broadway, Saugus, MA". */
  location?: string;
  /** Small label above the name, e.g. "Your booking at". */
  label?: string;
  className?: string;
}

/**
 * Partner-venue identifier: the venue's logo + name (+ location), shown in the
 * email body so recipients can tell which partner the message is about. The
 * header keeps the TenFore platform logo; this badge carries the venue brand —
 * include it in updates and any email without venue hero imagery.
 */
export const VenueBadge = ({
  logoUrl,
  name,
  location,
  label,
  className,
}: VenueBadgeProps) => (
  <div
    className={cx(
      "flex items-center gap-3 rounded-xl border border-secondary bg-secondary px-4 py-3",
      className,
    )}
  >
    <img
      src={logoUrl}
      alt={name}
      width={44}
      height={44}
      className="shrink-0 rounded-lg ring-1 ring-black/5"
    />
    <div>
      {label ? (
        <p className="text-xs font-medium tracking-wide text-tertiary uppercase">
          {label}
        </p>
      ) : null}
      <p className={cx("text-sm font-semibold text-primary", label && "mt-0.5")}>
        {name}
      </p>
      {location ? <p className="text-xs text-tertiary">{location}</p> : null}
    </div>
  </div>
);
