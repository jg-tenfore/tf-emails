import { cx } from "@/utils/cx";
import { brandLogos as defaultLogos, type BrandLogo } from "@/lib/store-catalog";

interface BrandStripProps {
  /** Logos to show. Defaults to the curated set of recognizable golf brands. */
  logos?: BrandLogo[];
  /** Small uppercase label above the logos. */
  label?: string;
  className?: string;
}

/**
 * "Shop by Brand" strip — a centered row of recognizable brand logos used in
 * merchandise and welcome emails to add credibility and visual interest.
 */
export const BrandStrip = ({
  logos = defaultLogos,
  label = "Shop your favorite brands",
  className,
}: BrandStripProps) => (
  <div className={cx("rounded-xl bg-secondary px-5 py-6 text-center", className)}>
    {label ? (
      <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">
        {label}
      </p>
    ) : null}
    <div
      className={cx(
        "flex flex-wrap items-center justify-center gap-x-7 gap-y-5",
        label && "mt-5",
      )}
    >
      {logos.map((b) => (
        <img
          key={b.name}
          src={b.src}
          alt={b.name}
          className="h-6 w-auto object-contain opacity-75"
        />
      ))}
    </div>
  </div>
);
