import React from "react";
import { addons, types } from "storybook/manager-api";
import { UnlayerPanel } from "./unlayer-panel";

const ADDON_ID = "unlayer";
const PANEL_ID = `${ADDON_ID}/panel`;

/**
 * Registers the "Unlayer" panel — a dev-handoff surface that shows, for the
 * selected story, the copyable Unlayer Elements TSX, the email-safe HTML, and
 * the design JSON (driven by `parameters.unlayer`).
 */
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "unLayer Code",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <UnlayerPanel active={!!active} />,
  });
});
