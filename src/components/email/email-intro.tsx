import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";

interface EmailIntroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional icon shown in a brand circle above the title. */
  icon?: FC<{ className?: string }>;
  /** Optional CTA(s) shown below the copy. */
  children?: ReactNode;
  className?: string;
}

/**
 * Opening block of an email: an optional icon, a display headline, a supporting
 * line, and optional CTAs. The text-led counterpart to the imageless
 * `StatusHero`.
 */
export const EmailIntro = ({
  title,
  subtitle,
  icon: Icon,
  children,
  className,
}: EmailIntroProps) => (
  <div className={className}>
    {Icon ? (
      <span className="flex size-12 items-center justify-center rounded-full bg-brand-primary text-brand-secondary">
        <Icon className="size-6" />
      </span>
    ) : null}
    <h1
      className={cx(
        "text-display-xs font-semibold text-primary",
        Icon && "mt-4",
      )}
    >
      {title}
    </h1>
    {subtitle ? (
      <p className="mt-2 text-md text-secondary">{subtitle}</p>
    ) : null}
    {children ? <div className="mt-5">{children}</div> : null}
  </div>
);
