import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

interface EmailHeroProps {
  imageUrl: string;
  imageAlt?: string;
  /** Small eyebrow above the headline. */
  eyebrow?: ReactNode;
  headline?: ReactNode;
  /** Extra caption lines under the headline (e.g. address, IDs). */
  details?: ReactNode[];
  imageHeight?: number;
  className?: string;
}

/** Brand dark green used for the caption band. */
const BAND = "#0a3d24";

/**
 * Contained hero card (Dreams Tulum-style): a crisp full image on top, with the
 * caption in a solid dark-green band underneath.
 */
export const EmailHero = ({
  imageUrl,
  imageAlt = "",
  eyebrow,
  headline,
  details,
  imageHeight = 224,
  className,
}: EmailHeroProps) => {
  const hasText = Boolean(eyebrow || headline || details?.length);
  return (
    <div className={cx("px-8 py-3", className)}>
      <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="block w-full object-cover"
          style={{ height: imageHeight }}
        />
        {hasText ? (
          <div className="px-6 py-5" style={{ backgroundColor: BAND }}>
            {eyebrow ? (
              <span className="text-xs font-semibold tracking-wide text-white/70 uppercase">
                {eyebrow}
              </span>
            ) : null}
            {headline ? (
              <h2
                className={cx(
                  "text-display-xs font-semibold text-white",
                  eyebrow && "mt-1",
                )}
              >
                {headline}
              </h2>
            ) : null}
            {details?.length ? (
              <div className="mt-2 flex flex-col gap-0.5">
                {details.map((line, i) => (
                  <p key={i} className="text-sm text-white/80">
                    {line}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
