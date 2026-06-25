import { Row, Column, Image, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { logo, course } from "@/unlayer/content";
import { RawHtml } from "./raw";

/**
 * Brand header — Unlayer port of <JarretteHeader>. Centered club logo over the
 * club name + address (tight spacing), with a full-width hairline beneath it
 * (the source header's bottom border) separating it from the hero.
 * Source: src/components/email/jarrette-header.tsx
 *
 * Returns an array of <Row>s — spread it: `...Header()`.
 */
export function Header() {
  return [
    <Row key="header" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="24px 32px">
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
    </Row>,
    <Row key="header-divider" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="0px">
      <Column padding="0px">{RawHtml({ html: `<div style="height:1px;background:${palette.border};line-height:1px;font-size:0;">&nbsp;</div>` })}</Column>
    </Row>,
  ];
}
