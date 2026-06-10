import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface SupportLineProps {
  /** Destination for the link (usually a mailto: or support URL). */
  href: string;
  /** The link text, e.g. "Contact the pro shop". */
  linkText?: ReactNode;
  /** Lead-in text before the link. */
  children?: ReactNode;
  className?: string;
}

/**
 * Centered "Need help? <link>." support line that closes out many cancellation,
 * refund and receipt emails.
 */
export const SupportLine = ({
  href,
  linkText = "Contact support",
  children = "Need help?",
  className,
}: SupportLineProps) => (
  <p className={cx("text-center text-sm text-tertiary", className)}>
    {children}{" "}
    <a
      href={href}
      className="font-medium text-brand-secondary underline underline-offset-2"
    >
      {linkText}
    </a>
    .
  </p>
);
