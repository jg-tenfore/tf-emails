import { Row, Column, Heading, Paragraph, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";

export interface HeroProps {
  imageUrl: string;
  imageAlt?: string;
  eyebrow?: string;
  headline?: string;
}

/**
 * Contained hero — Unlayer port of <EmailHero>. A full-width photo with a solid
 * dark-green caption band beneath (eyebrow + headline).
 *
 * Returns an array of literal <Row>s so the template can flatten them as direct
 * <Email> children (required by renderToJson). The source overlays the club logo
 * on the image with absolute positioning — email clients can't do that, so the
 * logo lives in the <Header> instead.
 * Source: src/components/email/email-hero.tsx
 */
export function Hero({ imageUrl, imageAlt = "", eyebrow, headline }: HeroProps) {
  // Rendered as a raw <img> (not Unlayer's <Image>, which hard-caps at 500px) so
  // it fills the 600px column; display:block removes the inline descender gap so
  // it sits flush against the caption band.
  const alt = imageAlt.replace(/"/g, "&quot;");
  const imageRow = (
    <Row key="img" layout={ColumnLayouts.OneColumn} backgroundColor={palette.white} padding="0px">
      <Column padding="0px">
        <Paragraph html={`<img src="${imageUrl}" alt="${alt}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;margin:0;" />`} />
      </Column>
    </Row>
  );

  // Self-contained art (e.g. a flyer): show the image only, no caption band.
  if (!eyebrow && !headline) return [imageRow];

  return [
    imageRow,
    <Row key="band" layout={ColumnLayouts.OneColumn} backgroundColor={palette.brandDark} padding="16px 32px 18px">
      <Column>
        {eyebrow ? (
          <Paragraph color={palette.onBrandMuted} fontSize="12px" fontWeight={600} letterSpacing="1px">
            {eyebrow.toUpperCase()}
          </Paragraph>
        ) : null}
        {headline ? (
          <Heading headingType="h2" color={palette.white} fontSize="24px" fontWeight={600}>
            {headline}
          </Heading>
        ) : null}
      </Column>
    </Row>,
  ];
}
