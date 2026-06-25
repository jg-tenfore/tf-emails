import { Row, Column, Image, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { brandLogos } from "@/unlayer/content";

export interface BrandStripProps {
  label?: string;
  logos?: ReadonlyArray<{ name: string; src: string }>;
}

/**
 * "Shop by brand" strip — Unlayer port of <BrandStrip>. A muted card with a
 * small uppercase label over a centered row of partner logos.
 * Source: src/components/email/brand-strip.tsx
 */
export function BrandStrip({
  label = "Brands you'll find in our shop",
  logos = brandLogos,
}: BrandStripProps) {
  return [
    <Row key="label" layout={ColumnLayouts.OneColumn} backgroundColor={palette.muted} padding="20px 24px 8px">
      <Column>
        <Paragraph textAlign="center" color={palette.textTertiary} fontSize="12px" fontWeight={600} letterSpacing="1px">
          {label.toUpperCase()}
        </Paragraph>
      </Column>
    </Row>,
    <Row key="logos" layout={ColumnLayouts.FiveEqual} backgroundColor={palette.muted} padding="0px 16px 20px">
      {logos.slice(0, 5).map((logo) => (
        <Column key={logo.name} padding="6px">
          <Image src={{ url: logo.src, width: 64 }} alt={logo.name} textAlign="center" />
        </Column>
      ))}
    </Row>,
  ];
}
