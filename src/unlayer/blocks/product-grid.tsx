import { Row, Column, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { RawHtml } from "./raw";

export interface ProductCard {
  title: string;
  price?: string;
  src: string;
  alt?: string;
}

/** 1px border on all four sides (email columns can't do border-radius). */
const cardBorder = {
  borderTopColor: palette.border, borderTopStyle: "solid", borderTopWidth: "1px",
  borderRightColor: palette.border, borderRightStyle: "solid", borderRightWidth: "1px",
  borderBottomColor: palette.border, borderBottomStyle: "solid", borderBottomWidth: "1px",
  borderLeftColor: palette.border, borderLeftStyle: "solid", borderLeftWidth: "1px",
} as const;

/**
 * Product cards in a 2- or 3-up grid. Unlayer port of <ProductGrid>.
 * Each card is a bordered Column: a CROPPED (object-cover) image on top inside a
 * fixed-height box, then the name + price as native (editable) text below — so the
 * copy stays editable in the Unlayer editor while the thumbnail crops like the
 * source. Source: src/components/email/product-grid.tsx
 */
export function ProductGrid({ items, columns = 3 }: { items: ProductCard[]; columns?: 2 | 3 }) {
  const layout = columns === 2 ? ColumnLayouts.TwoEqual : ColumnLayouts.ThreeEqual;
  const h = columns === 2 ? 196 : 124;
  const chunks: ProductCard[][] = [];
  for (let i = 0; i < items.length; i += columns) chunks.push(items.slice(i, i + columns));

  return chunks.map((chunk, ri) => (
    <Row key={`pg-${ri}`} layout={layout} backgroundColor={palette.white} padding="8px 24px">
      {chunk.map((p, ci) => (
        <Column key={`pg-${ri}-${ci}`} backgroundColor={palette.white} border={cardBorder} padding="0px 0px 12px">
          {RawHtml({
            html:
              `<div style="height:${h}px;overflow:hidden;background:#ffffff;">` +
              `<img src="${p.src}" alt="${(p.alt ?? p.title).replace(/"/g, "&quot;")}" ` +
              `style="display:block;width:100%;height:${h}px;object-fit:cover;border:0;" /></div>`,
          })}
          <Heading headingType="h3" color={palette.textPrimary} fontSize="13px" fontWeight={600}>
            {p.title}
          </Heading>
          {p.price ? (
            <Paragraph color={palette.textTertiary} fontSize="13px">
              {p.price}
            </Paragraph>
          ) : null}
        </Column>
      ))}
    </Row>
  ));
}
