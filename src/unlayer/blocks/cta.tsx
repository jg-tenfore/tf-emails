import { Row, Column, Button, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface CtaProps {
  href: string;
  label: string;
}

/**
 * Primary full-width call-to-action. Unlayer port of <CTAButton fullWidth>.
 * Source: src/components/email/cta-button.tsx
 */
export function Cta({ href, label }: CtaProps) {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="16px 32px">
      <Column>
        <Button
          href={href}
          backgroundColor={palette.brandDark}
          color={palette.white}
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
