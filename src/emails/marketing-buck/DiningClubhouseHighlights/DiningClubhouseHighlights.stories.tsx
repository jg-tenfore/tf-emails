import type { Meta, StoryObj } from "@storybook/react-vite";
import { DiningClubhouseHighlights } from "./DiningClubhouseHighlights";
import { DiningClubhouseHighlightsUnlayer } from "./DiningClubhouseHighlights.unlayer";
import unlayerSource from "./DiningClubhouseHighlights.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Dining & Clubhouse Highlights",
  component: DiningClubhouseHighlights,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    reserveUrl: { control: "text" },
  },
} satisfies Meta<typeof DiningClubhouseHighlights>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Drives restaurant and bar traffic with weekly programming and a free-appetizer offer. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => DiningClubhouseHighlightsUnlayer(), unlayerSource),
  },
};
