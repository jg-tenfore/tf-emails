import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface EmailHeroProps {
  imageUrl: string;
  imageAlt?: string;
  /** Optional eyebrow shown above the headline overlay. */
  eyebrow?: string;
  headline?: ReactNode;
  /** Overlay darkens the image so text stays legible. */
  overlay?: boolean;
  height?: number;
}

/** Full-bleed hero image with optional headline overlay. */
export const EmailHero = ({
  imageUrl,
  imageAlt = "",
  eyebrow,
  headline,
  overlay = true,
  height = 240,
}: EmailHeroProps) => {
  const hasText = Boolean(eyebrow || headline);
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      {overlay && hasText ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      ) : null}
      {hasText ? (
        <div
          className={cx(
            "absolute inset-x-0 bottom-0 flex flex-col gap-1 px-8 py-6",
          )}
        >
          {eyebrow ? (
            <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">
              {eyebrow}
            </span>
          ) : null}
          {headline ? (
            <h1 className="text-display-xs font-semibold text-white">
              {headline}
            </h1>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
