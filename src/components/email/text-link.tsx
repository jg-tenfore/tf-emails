import type { ReactNode } from "react";
import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  /**
   * `inline` — underlined brand link inside a sentence.
   * `arrow` — standalone semibold link with a trailing arrow ("Learn more →").
   */
  variant?: "inline" | "arrow";
  className?: string;
}

/** The one link style for email body copy. Buttons use `CTAButton` instead. */
export const TextLink = ({ href, children, variant = "inline", className }: TextLinkProps) =>
  variant === "arrow" ? (
    <a
      href={href}
      className={cx(
        "inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  ) : (
    <a
      href={href}
      className={cx("font-medium text-brand-secondary underline underline-offset-2", className)}
    >
      {children}
    </a>
  );
