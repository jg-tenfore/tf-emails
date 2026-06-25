import { MessageChatCircle } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface TextAlertsOptInProps {
  /** SMS sign-up link. */
  href?: string;
  /** Lead-in prompt shown before the link. */
  prompt?: string;
  /** Link label. */
  label?: string;
  className?: string;
}

/**
 * Compact SMS opt-in line for tee-time emails — lets golfers subscribe to text
 * updates (open times, twilight deals, weather holds). Pair it under a booking CTA.
 */
export const TextAlertsOptIn = ({
  href = "#",
  prompt = "Want first dibs on open tee times?",
  label = "Get text updates",
  className,
}: TextAlertsOptInProps) => (
  <p className={cx("flex flex-wrap items-center justify-center gap-1.5 text-center text-sm text-tertiary", className)}>
    <MessageChatCircle className="size-4 shrink-0 text-fg-quaternary" aria-hidden="true" />
    <span>{prompt}</span>
    <a
      href={href}
      className="font-semibold text-brand-secondary underline underline-offset-2"
    >
      {label}
    </a>
  </p>
);
