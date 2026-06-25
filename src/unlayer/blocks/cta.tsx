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
  /** "primary" (brand fill) or "secondary" (muted fill). Default primary. */
  variant?: "primary" | "secondary";
  /** Tighten the vertical padding when stacking two CTAs together. */
  padding?: Padding;
}

/**
 * Full-width call-to-action. Unlayer port of <CTAButton fullWidth>.
 * Source: src/components/email/cta-button.tsx
 */
export function Cta({ href, label, variant = "primary", padding = "16px 32px" }: CtaProps) {
  const isSecondary = variant === "secondary";
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding={padding}>
      <Column>
        <Button
          href={href}
          backgroundColor={isSecondary ? palette.muted : palette.brandDark}
          color={isSecondary ? palette.textPrimary : palette.white}
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
