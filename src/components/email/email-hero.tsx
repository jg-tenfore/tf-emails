import type { ReactNode } from "react";
import { MarkerPin02 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface EmailHeroProps {
  imageUrl: string;
  imageAlt?: string;
  /** Small eyebrow above the headline. */
  eyebrow?: ReactNode;
  headline?: ReactNode;
  /** Extra caption lines under the headline (e.g. address, course note). */
  details?: ReactNode[];
  /** When set, renders a "Get directions" link with a map pin in the band. */
  mapUrl?: string;
  /** Venue logo overlaid on the image as a badge, identifying the sender. */
  logoUrl?: string;
  logoAlt?: string;
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
  mapUrl,
  logoUrl,
  logoAlt,
  imageHeight = 224,
  className,
}: EmailHeroProps) => {
  const hasText = Boolean(eyebrow || headline || details?.length || mapUrl);
  return (
    <div className={cx("px-8 pt-8 pb-2", className)}>
      <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
        <div className="relative">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="block w-full object-cover"
            style={{ height: imageHeight }}
          />
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoAlt ?? ""}
              width={52}
              height={52}
              className="absolute top-4 left-4 rounded-lg shadow-md ring-1 ring-black/10"
            />
          ) : null}
        </div>
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
            {mapUrl ? (
              <a
                href={mapUrl}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline underline-offset-2"
              >
                <MarkerPin02 className="size-4 shrink-0" />
                Get directions
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
