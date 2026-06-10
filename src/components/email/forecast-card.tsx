import type { FC } from "react";
import { cx } from "@/utils/cx";

interface ForecastCardProps {
  /** Short conditions summary, e.g. "Clear skies, light breeze". */
  summary: string;
  /** Temperature in °F. */
  tempF: number;
  label?: string;
  /** Optional weather icon (e.g. an @untitledui/icons component). */
  icon?: FC<{ className?: string }>;
  className?: string;
}

/** Compact weather/forecast card for upcoming-round emails. */
export const ForecastCard = ({
  summary,
  tempF,
  label = "Forecast",
  icon: Icon,
  className,
}: ForecastCardProps) => {
  return (
    <div
      className={cx(
        "flex items-center justify-between rounded-xl border border-secondary bg-secondary px-5 py-4",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="size-7 text-brand-secondary" /> : null}
        <div>
          <p className="text-xs font-medium tracking-wide text-tertiary uppercase">
            {label}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-primary">{summary}</p>
        </div>
      </div>
      <p className="text-display-xs font-semibold text-brand-secondary">
        {tempF}°
      </p>
    </div>
  );
};
