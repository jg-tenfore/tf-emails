import { Row, Column, Image, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { logo, course } from "@/unlayer/content";

/**
 * Brand header — Unlayer port of <JarretteHeader>. Centered club logo over the
 * club name + address (tight spacing) on a white background.
 * Source: src/components/email/jarrette-header.tsx
 */
export function Header() {
  return (
    <Row layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px">
      <Column>
        <Image src={{ url: logo.src, width: 56 }} alt={logo.alt} textAlign="center" />
        <Paragraph
          textAlign="center"
          html={
            `<div style="margin-top:10px;font-size:16px;font-weight:600;color:${palette.textPrimary};">${course.name}</div>` +
            `<div style="margin-top:2px;font-size:14px;color:${palette.textTertiary};">${course.address}</div>`
          }
        />
      </Column>
    </Row>
  );
}
