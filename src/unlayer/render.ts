import type { ReactElement } from "react";
import { renderToHtml, renderToJson, renderToPlainText } from "@unlayer/react-elements";

export interface UnlayerOutputs {
  /** Email-client-safe HTML (tables + inline styles). */
  html: string;
  /** Unlayer design JSON (string) — loads into the editor via loadDesign(). */
  json: string;
  /** text/plain part. */
  text: string;
}

/**
 * Render an Unlayer Elements <Email> element to all three outputs.
 * Pass the element produced by CALLING a template function (e.g. Welcome({...})),
 * not a <Component/> wrapper — renderToJson requires a literal <Email> root.
 */
export function renderUnlayer(element: ReactElement): UnlayerOutputs {
  return {
    html: renderToHtml(element),
    json: JSON.stringify(renderToJson(element), null, 2),
    text: renderToPlainText(element),
  };
}

export interface UnlayerHandoff extends UnlayerOutputs {
  /** Raw Elements TSX source (import via `...unlayer.tsx?raw`). */
  tsx: string;
  /** Set when rendering threw — the panel shows this instead of crashing. */
  error?: string;
}

/** Build the `parameters.unlayer` payload consumed by the Storybook panel. */
export function unlayerHandoff(element: ReactElement, tsxSource: string): UnlayerHandoff {
  return { ...renderUnlayer(element), tsx: tsxSource };
}

/**
 * Fail-safe variant for stories: takes a factory so a render error is caught
 * and returned as data, never thrown. This keeps a broken Unlayer render from
 * taking down the story's main (original) Canvas. Prefer this in story files.
 */
export function unlayerHandoffSafe(
  factory: () => ReactElement,
  tsxSource: string,
): UnlayerHandoff {
  try {
    return unlayerHandoff(factory(), tsxSource);
  } catch (err) {
    return { tsx: tsxSource, html: "", json: "", text: "", error: String(err) };
  }
}
