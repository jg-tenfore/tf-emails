import { Row, Column, Image, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { imageUrl } from "@/unlayer/content";
import { RawHtml } from "./raw";

/** Generic template placeholders — a club drops in its own brand. */
const PLACEHOLDER = {
  title: "Your Golf Course",
  address: "123 Fairway Drive, Anytown, ST 00000",
  logo: imageUrl("marketing-images/placeholder-logo.png"),
};

/**
 * Marketing Buck header — Unlayer port of <BuckHeader>. A standalone logo block
 * (the green "Logo" placeholder by default) set apart from the club name +
 * address, with a full-width hairline beneath it separating it from the hero.
 * Source: src/components/email/buck-header.tsx
 *
 * Returns an array of <Row>s — spread it: `...Header()`.
 */
export function Header() {
  return [
    <Row key="header" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="32px 32px 28px">
        <Image src={{ url: PLACEHOLDER.logo, width: 96 }} alt={PLACEHOLDER.title} textAlign="center" />
        <Paragraph
          textAlign="center"
          html={
            `<div style="margin-top:20px;font-size:18px;font-weight:600;color:${palette.textPrimary};">${PLACEHOLDER.title}</div>` +
            `<div style="margin-top:6px;font-size:14px;color:${palette.textTertiary};">${PLACEHOLDER.address}</div>`
          }
        />
      </Column>
    </Row>,
    <Row key="header-divider" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="0px">{RawHtml({ html: `<div style="height:1px;background:${palette.border};line-height:1px;font-size:0;">&nbsp;</div>` })}</Column>
    </Row>,
  ];
}
