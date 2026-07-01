import { Row, Column, ColumnLayouts } from "@unlayer/react-elements";
import { palette } from "@/unlayer/theme";
import { RawHtml } from "./raw";

export interface HeroProps {
  imageUrl: string;
  imageAlt?: string;
  eyebrow?: string;
  headline?: string;
}

/**
 * Contained hero — Unlayer port of <EmailHero>. The full-bleed photo and the
 * dark-green caption band are rendered as ONE HTML block in a single
 * zero-padding row, so the band sits flush against the image (no element
 * padding gap), both are the same 600px width, and the eyebrow→headline spacing
 * is tight. Source: src/components/email/email-hero.tsx
 *
 * Returns a one-element array so it flattens as a direct <Email> child. The club
 * logo is baked into the hero photo (see scripts/gen-hero-composites.mjs) since
 * email can't overlay it.
 */
export function Hero({ imageUrl, imageAlt = "", eyebrow, headline }: HeroProps) {
  const alt = imageAlt.replace(/"/g, "&quot;");
  const img =
    `<div style="font-size:0;line-height:0;">` +
    `<img src="${imageUrl}" alt="${alt}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;margin:0;" />` +
    `</div>`;
  const band =
    eyebrow || headline
      ? `<div style="background:${palette.brandDark};padding:18px 32px;">` +
        (eyebrow
          ? `<div style="font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:${palette.onBrandMuted};">${eyebrow.toUpperCase()}</div>`
          : "") +
        (headline
          ? `<div style="margin-top:6px;font-size:24px;font-weight:600;line-height:1.25;color:${palette.white};">${headline}</div>`
          : "") +
        `</div>`
      : "";

  return [
    <Row key="hero" layout={ColumnLayouts.OneColumn} backgroundColor={palette.canvas} padding="0px">
      <Column backgroundColor={palette.white} padding="0px">{RawHtml({ html: `${img}${band}` })}</Column>
    </Row>,
  ];
}
