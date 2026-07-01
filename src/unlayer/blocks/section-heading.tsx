import { Row, Column, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { RawHtml } from "./raw";

export interface SectionHeadingProps {
  title: string;
  description?: string;
}

/**
 * Section title (+ optional description), tightly spaced. Unlayer port of
 * <SectionHeading>. Source: src/components/email/section-heading.tsx
 *
 * Returns a single <Row> — call directly (not spread).
 */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px 0px">
      <Column padding="0px">
        {RawHtml({
          html:
            `<div style="font-size:18px;font-weight:600;color:${palette.textPrimary};">${title}</div>` +
            (description
              ? `<div style="margin-top:2px;font-size:14px;color:${palette.textTertiary};">${description}</div>`
              : ""),
        })}
      </Column>
    </Row>
  );
}
