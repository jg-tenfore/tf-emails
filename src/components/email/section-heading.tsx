import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SectionHeadingProps {
  title: ReactNode;
  description?: ReactNode;
  /** Optional right-aligned element (e.g. a small link or badge). */
  aside?: ReactNode;
  className?: string;
}

/**
 * Expedia-style section title: a clear semibold heading with optional
 * supporting line, used to open each block of an email.
 */
export const SectionHeading = ({
  title,
  description,
  aside,
  className,
}: SectionHeadingProps) => (
  <div className={cx("flex items-start justify-between gap-4", className)}>
    <div>
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-tertiary">{description}</p>
      ) : null}
    </div>
    {aside ? <div className="shrink-0">{aside}</div> : null}
  </div>
);
