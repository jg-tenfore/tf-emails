import type { FC, ReactNode } from "react";
import { StatusHero } from "./status-hero";

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
 * @deprecated Use `<StatusHero inset={false}>` — the two were merged. Kept so
 * the older email sets keep rendering.
 */
export const EmailIntro = (props: EmailIntroProps) => <StatusHero inset={false} {...props} />;
