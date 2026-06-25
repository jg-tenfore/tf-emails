import { Row, Column, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface SectionHeadingProps {
  title: string;
  description?: string;
}

/**
 * Section title (+ optional description). Unlayer port of <SectionHeading>.
 * Source: src/components/email/section-heading.tsx
 *
 * Returns a single <Row> — call directly (not spread).
 */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 0px">
      <Column>
        <Heading headingType="h2" color={palette.textPrimary} fontSize="18px" fontWeight={600}>
          {title}
        </Heading>
        {description ? (
          <Paragraph color={palette.textTertiary} fontSize="14px">
            {description}
          </Paragraph>
        ) : null}
      </Column>
    </Row>
  );
}
