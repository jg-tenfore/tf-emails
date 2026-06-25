import { Row, Column, Image, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface ProductCard {
  title: string;
  price?: string;
  src: string;
  alt?: string;
}

/**
 * Product cards in a 2- or 3-up grid. Unlayer port of <ProductGrid>.
 * Source: src/components/email/product-grid.tsx
 *
 * Returns an array of <Row>s (one per grid row) — spread into Email children.
 * `items.length` should be a multiple of `columns` (no ragged final row).
 */
export function ProductGrid({ items, columns = 3 }: { items: ProductCard[]; columns?: 2 | 3 }) {
  const layout = columns === 2 ? ColumnLayouts.TwoEqual : ColumnLayouts.ThreeEqual;
  const chunks: ProductCard[][] = [];
  for (let i = 0; i < items.length; i += columns) chunks.push(items.slice(i, i + columns));

  return chunks.map((chunk, ri) => (
    <Row key={`pg-${ri}`} layout={layout} backgroundColor={palette.white} padding="8px 32px">
      {chunk.map((p, ci) => (
        <Column key={`pg-${ri}-${ci}`} padding="0px 6px">
          <Image src={{ url: p.src }} alt={p.alt ?? p.title} />
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
