import type { Meta, StoryObj } from "@storybook/react-vite";
import { TwilightTwosome } from "./TwilightTwosome";
import { TwilightTwosomeUnlayer } from "./TwilightTwosome.unlayer";
import unlayerSource from "./TwilightTwosome.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Twilight Twosome",
  component: TwilightTwosome,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    bookingUrl: { control: "text" },
  },
} satisfies Meta<typeof TwilightTwosome>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Split content + offer email that fills the slow late-day tee sheet and drives F&B. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => TwilightTwosomeUnlayer(), unlayerSource),
  },
};
