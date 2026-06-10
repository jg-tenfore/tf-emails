import logoUrl from "@/assets/tf-logo.svg";
import { cx } from "@/utils/cx";
import { brand } from "@/lib/brand";

interface LogoProps {
  /** Rendered width in px (aspect ratio preserved). Takes precedence over height. */
  width?: number;
  /** Rendered height in px (aspect ratio preserved). */
  height?: number;
  className?: string;
}

/**
 * Sagamore Spring Golf Club logo — always the full-color mark on a light
 * background. (No inverted/white-on-dark treatment by design.)
 */
export const Logo = ({ width, height = 30, className }: LogoProps) => (
  <img
    src={logoUrl}
    alt={brand.name}
    style={width ? { width } : { height }}
    className={cx(width ? "h-auto" : "w-auto", className)}
  />
);
