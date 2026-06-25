import { Row, Column, Image, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface FeatureItem {
  /** Email-safe hosted icon image (PNG/GIF/JPG). Preferred for brand fidelity. */
  iconUrl?: string;
  /** Fallback glyph when no hosted icon is supplied (renders everywhere). */
  emoji?: string;
  title: string;
  body: string;
}

/**
 * Single feature row — icon chip on the left, title + body on the right.
 * Source: src/components/email/feature-list.tsx (+ icon-badge.tsx)
 */
export function Feature({ iconUrl, emoji = "•", title, body }: FeatureItem) {
  return (
    <Row layout={ColumnLayouts.TwoNarrowWide} backgroundColor={palette.white} padding="8px 32px">
      <Column padding="0px" backgroundColor={palette.brandTint}>
        {iconUrl ? (
          <Image src={{ url: iconUrl, width: 24 }} alt="" textAlign="center" />
        ) : (
          <Heading headingType="h3" textAlign="center" color={palette.brandDark} fontSize="22px">
            {emoji}
          </Heading>
        )}
      </Column>
      <Column padding="0px 0px 0px 12px">
        <Heading headingType="h3" color={palette.textPrimary} fontSize="14px" fontWeight={600}>
          {title}
        </Heading>
        <Paragraph color={palette.textTertiary} fontSize="14px">
          {body}
        </Paragraph>
      </Column>
    </Row>
  );
}

/** Vertical stack of Feature rows (array of literal <Row>s). */
export function FeatureList({ items }: { items: FeatureItem[] }) {
  // Call Feature as a function so each child is a literal <Row> (renderToJson
  // requires Row children, not <Feature> component elements).
  return items.map((item) => Feature(item));
}
