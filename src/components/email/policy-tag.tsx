import type { FC, ReactNode } from "react";
import { CheckCircle } from "@untitledui/icons";
import type { BadgeColor } from "@/components/base/badges/badges";
import { BadgeWithIcon, filledColors } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";

interface PolicyTagProps {
  /** Tag label, e.g. "Free cancellation up to 24 hours before your tee time". */
  children: ReactNode;
  /** Leading icon. Defaults to a check circle. */
  icon?: FC<{ className?: string }>;
  /** Badge color. Defaults to "success" (green). */
  color?: BadgeColor<"pill-color">;
  /** Fill the container width with centered content (banner style) instead of a hug-content pill. */
  block?: boolean;
  className?: string;
}

/**
 * A reassuring policy tag — a colored pill with a leading icon, used to surface
 * a single positive policy line (e.g. free cancellation) as a compact badge
 * rather than a sentence. Sits above the hero on booking emails. With `block`
 * it spans the full container width with centered content.
 */
export const PolicyTag = ({
  children,
  icon: Icon = CheckCircle,
  color = "success",
  block = false,
  className,
}: PolicyTagProps) => {
  if (block) {
    const c = filledColors[color];
    return (
      <span
        className={cx(
          "flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ring-1 ring-inset",
          c.root,
          className,
        )}
      >
        <Icon className={cx("size-3.5 shrink-0 stroke-3", c.addon)} />
        {children}
      </span>
    );
  }

  return (
    <BadgeWithIcon
      type="pill-color"
      size="lg"
      color={color}
      iconLeading={Icon}
      className={className}
    >
      {children}
    </BadgeWithIcon>
  );
};
