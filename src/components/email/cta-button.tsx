import type { FC, ReactNode } from "react";
import { cx } from "@/utils/cx";
import { Button } from "@/components/base/buttons/button";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  color?: "primary" | "secondary";
  size?: "md" | "lg" | "xl";
  /** Stretch to the full width of the container (common in emails). */
  fullWidth?: boolean;
  iconLeading?: FC<{ className?: string }>;
  iconTrailing?: FC<{ className?: string }>;
  className?: string;
}

/**
 * Primary call-to-action used across emails. Wraps the Untitled UI Button
 * with email-friendly defaults (link semantics + optional full width).
 */
export const CTAButton = ({
  href,
  children,
  color = "primary",
  size = "lg",
  fullWidth = false,
  iconLeading,
  iconTrailing,
  className,
}: CTAButtonProps) => {
  return (
    <Button
      href={href}
      color={color}
      size={size}
      iconLeading={iconLeading}
      iconTrailing={iconTrailing}
      className={cx(fullWidth && "w-full", className)}
    >
      {children}
    </Button>
  );
};
