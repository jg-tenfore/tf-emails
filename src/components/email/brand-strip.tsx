import { cx } from "@/utils/cx";
import { brandStripImage } from "@/lib/marketing-images";

interface BrandStripProps {
  /** Small uppercase label above the logos. */
  label?: string;
  className?: string;
}

/**
 * "Shop by Brand" strip — a centered grid of recognizable brand logos used in
 * merchandise and welcome emails to add credibility and visual interest. Rendered
 * as a single supplied graphic (brand-strip-070626.png) so it matches the Unlayer
 * port exactly.
 */
export const BrandStrip = ({
  label = "Shop your favorite brands",
  className,
}: BrandStripProps) => (
  <div className={cx("rounded-xl bg-secondary px-5 py-6 text-center", className)}>
    {label ? (
      <p className="text-xs font-semibold tracking-wide text-tertiary uppercase">
        {label}
      </p>
    ) : null}
    <img
      src={brandStripImage}
      alt="Brands we carry"
      className={cx("mx-auto h-auto w-full max-w-[536px]", label && "mt-5")}
    />
  </div>
);
