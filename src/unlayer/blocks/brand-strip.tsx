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
 * single flattened grayscale PNG (gen-brand-strip.mjs). The muted background is on
 * the COLUMN (the 600px content), not the Row — so it stays contained instead of
 * bleeding full-width (Unlayer fills Row backgroundColor edge-to-edge). Label is
 * live text.
 */
export function BrandStrip({ label = "Brands you'll find in our shop" }: BrandStripProps) {
  return [
    <Row key="brand-strip" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.muted} padding="22px 32px 24px">
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="12px" fontWeight={600} letterSpacing="1px">
          {label.toUpperCase()}
        </Paragraph>
        {RawHtml({
          html: `<img src="${brandStripImage}" alt="Brands we carry" width="536" style="display:block;width:100%;max-width:536px;height:auto;border:0;margin:8px auto 0;" />`,
        })}
      </Column>
    </Row>,
  ];
}
