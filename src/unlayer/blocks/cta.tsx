import { Row, Column, Button, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

/** CSS padding shorthand accepted by Unlayer Row (px values only). */
type Padding =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

export interface CtaProps {
  href: string;
  label: string;
  /** "primary" (brand green) or "secondary" (white, bordered). Default primary. */
  variant?: "primary" | "secondary";
  /** Tighten the vertical padding when stacking two CTAs together. */
  padding?: Padding;
}

/** Uniform 1px border on all four sides. */
const border = (color: string) => ({
  borderTopColor: color, borderTopStyle: "solid", borderTopWidth: "1px" as const,
  borderRightColor: color, borderRightStyle: "solid", borderRightWidth: "1px" as const,
  borderBottomColor: color, borderBottomStyle: "solid", borderBottomWidth: "1px" as const,
  borderLeftColor: color, borderLeftStyle: "solid", borderLeftWidth: "1px" as const,
});

/**
 * Full-width call-to-action. Unlayer port of <CTAButton fullWidth>.
 * Source: src/components/email/cta-button.tsx
 */
export function Cta({ href, label, variant = "primary", padding = "16px 32px" }: CtaProps) {
  const isSecondary = variant === "secondary";
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding={padding}>
        <Button
          href={href}
          backgroundColor={isSecondary ? palette.white : palette.ctaGreen}
          color={isSecondary ? palette.textPrimary : palette.white}
          border={border(isSecondary ? palette.border : palette.ctaBorder)}
          fontSize="16px"
          fontWeight={600}
          borderRadius="8px"
          textAlign="center"
          width="100%"
          padding="14px 24px"
        >
          {label}
        </Button>
      </Column>
    </Row>
  );
}
