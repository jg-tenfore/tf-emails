import type { ReactNode } from "react";

interface EmailIntroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional CTA(s) shown below the copy. */
  children?: ReactNode;
  className?: string;
}

/**
 * Opening block of an email: a display headline, a supporting line, and
 * optional CTAs. The text-led counterpart to the imageless `StatusHero`.
 */
export const EmailIntro = ({
  title,
  subtitle,
  children,
  className,
}: EmailIntroProps) => (
  <div className={className}>
    <h1 className="text-display-xs font-semibold text-primary">{title}</h1>
    {subtitle ? (
      <p className="mt-2 text-md text-secondary">{subtitle}</p>
    ) : null}
    {children ? <div className="mt-5">{children}</div> : null}
  </div>
);
