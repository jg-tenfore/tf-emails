import type { FC } from "react";
import { Paragraph } from "@unlayer/react-elements";

// Unlayer gives every leaf element a default 10px container padding, and exposes
// `containerPadding` only via ContentValues (not the public Paragraph prop type).
// This typed alias lets us render a full-bleed raw-HTML block with zero padding —
// the basis for hero/header/flattened-graphic blocks that must sit edge-to-edge.
const P = Paragraph as unknown as FC<{
  html: string;
  containerPadding?: string;
  textAlign?: "left" | "center" | "right";
}>;

export interface RawHtmlProps {
  html: string;
  /** Element container padding. Default "0px" (full-bleed). */
  containerPadding?: string;
  textAlign?: "left" | "center" | "right";
}

/** A zero-padding Paragraph used as a raw-HTML container. */
export function RawHtml({ html, containerPadding = "0px", textAlign }: RawHtmlProps) {
  return <P html={html} containerPadding={containerPadding} textAlign={textAlign} />;
}
