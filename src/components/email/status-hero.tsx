import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";
import { IdStamp, type IdStampItem } from "./id-stamp";

interface StatusHeroProps {
  /** Small uppercase brand eyebrow above the title. */
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional icon shown in a brand circle above the title. */
  icon?: FC<{ className?: string }>;
  /** Monospace identifier stamps (order IDs, confirmation numbers, etc.). */
  stamps?: IdStampItem[];
  align?: "left" | "center";
  className?: string;
}

/**
 * Imageless hero: eyebrow + title + subtitle + optional icon and ID stamps.
 * Used by every email that doesn't lead with a photo (the contained
 * `EmailHero` is for image-led booking emails).
 */
export const StatusHero = ({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  stamps,
  align = "left",
  className,
}: StatusHeroProps) => {
  const center = align === "center";
  return (
    <div
      className={cx("px-8 pt-8 pb-2", center && "text-center", className)}
    >
      {Icon ? (
        <span
          className={cx(
            "flex size-12 items-center justify-center rounded-full bg-brand-primary text-brand-secondary",
            center && "mx-auto",
          )}
        >
          <Icon className="size-6" />
        </span>
      ) : null}
      {eyebrow ? (
        <p
          className={cx(
            "text-xs font-semibold tracking-wide text-brand-secondary uppercase",
            Icon && "mt-4",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={cx(
          "text-display-xs font-semibold text-primary",
          (eyebrow || Icon) && "mt-2",
        )}
      >
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-md text-secondary">{subtitle}</p>
      ) : null}
      {stamps?.length ? (
        <div
          className={cx(
            "mt-4 flex flex-wrap gap-x-4 gap-y-1.5",
            center && "justify-center",
          )}
        >
          {stamps.map((s, i) => (
            <IdStamp key={i} label={s.label} value={s.value} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
