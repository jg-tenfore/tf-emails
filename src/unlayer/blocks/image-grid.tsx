import { Row, Column, Image, Heading, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface ImageCard {
  src: string;
  title?: string;
  alt?: string;
}

/**
 * Captioned photo grid (2- or 3-up) — used for menu / dish showcases.
 * Unlayer port of the inline figure grids in the dining/twilight emails.
 *
 * Returns an array of <Row>s (one per grid row) — spread into Email children.
 */
export function ImageGrid({ items, columns = 2 }: { items: readonly ImageCard[]; columns?: 2 | 3 }) {
  const layout = columns === 3 ? ColumnLayouts.ThreeEqual : ColumnLayouts.TwoEqual;
  const chunks: ImageCard[][] = [];
  for (let i = 0; i < items.length; i += columns) chunks.push(items.slice(i, i + columns));

  return chunks.map((chunk, ri) => (
    <Row key={`ig-${ri}`} layout={layout} backgroundColor={palette.white} padding="6px 32px">
      {chunk.map((p, ci) => (
        <Column key={`ig-${ri}-${ci}`} padding="0px 6px">
          <Image src={{ url: p.src }} alt={p.alt ?? p.title ?? ""} />
          {p.title ? (
            <Heading headingType="h3" color={palette.textPrimary} fontSize="13px" fontWeight={600}>
              {p.title}
            </Heading>
          ) : null}
        </Column>
      ))}
    </Row>
  ));
}
