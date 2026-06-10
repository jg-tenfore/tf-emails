import logoUrl from "@/assets/tf-logo.svg";
import { cx } from "@/utils/cx";
import { brand } from "@/lib/brand";

interface LogoProps {
  /** Rendered height in px; width scales automatically. */
  height?: number;
  /** Invert to a white logo for use on dark/brand backgrounds. */
  invert?: boolean;
  className?: string;
}

/** Tenfore Golf logo, rendered from the brand SVG asset. */
export const Logo = ({ height = 30, invert = false, className }: LogoProps) => (
  <img
    src={logoUrl}
    alt={brand.name}
    style={{ height }}
    className={cx("w-auto", invert && "brightness-0 invert", className)}
  />
);
