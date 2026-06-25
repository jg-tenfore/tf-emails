import { Row, Column, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { brandStripImage } from "@/unlayer/content";
import { RawHtml } from "./raw";

export interface BrandStripProps {
  label?: string;
  /** Accepted for source-parity; the logo grid is a flattened graphic. */
  logos?: ReadonlyArray<{ name: string; src: string }>;
}

/**
 * "Shop by Brand" strip — Unlayer port of <BrandStrip>. The multi-logo grid is a
 * single flattened grayscale PNG (gen-brand-strip.mjs): Unlayer's native columns
 * can't reproduce the mixed-width 2-row wrap, and the source logos are .webp
 * (Outlook-unsafe) — flattening to one PNG solves both. Label stays live text.
 */
export function BrandStrip({ label = "Brands you'll find in our shop" }: BrandStripProps) {
  return [
    <Row key="bs-label" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="22px 32px 10px">
      <Column>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="12px" fontWeight={600} letterSpacing="1px">
          {label.toUpperCase()}
        </Paragraph>
      </Column>
    </Row>,
    <Row key="bs-logos" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="0px 32px 24px">
      <Column padding="0px">
        {RawHtml({
          html: `<img src="${brandStripImage}" alt="Brands we carry" width="536" style="display:block;width:100%;max-width:536px;height:auto;border:0;margin:0 auto;" />`,
        })}
      </Column>
    </Row>,
  ];
}
