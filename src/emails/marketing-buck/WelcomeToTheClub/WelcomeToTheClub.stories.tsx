import type { Meta, StoryObj } from "@storybook/react-vite";
import { WelcomeToTheClub } from "./WelcomeToTheClub";
import { WelcomeToTheClubUnlayer } from "./WelcomeToTheClub.unlayer";
import unlayerSource from "./WelcomeToTheClub.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Welcome to the Club",
  component: WelcomeToTheClub,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    bookingUrl: { control: "text" },
    audience: { control: "inline-radio", options: ["men", "women"] },
  },
} satisfies Meta<typeof WelcomeToTheClub>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Women's version — welcoming hero featuring a woman golfer. */
export const Womens: Story = {
  name: "Women's",
  args: { audience: "women", firstName: "Olivia" },
  parameters: {
    // Powers the "unLayer Code" panel: copyable Elements TSX, HTML, and design JSON.
    unlayer: unlayerHandoffSafe(() => WelcomeToTheClubUnlayer({ audience: "women", firstName: "Olivia" }), unlayerSource),
  },
};

/** Men's version — hero featuring male golfers. */
export const Mens: Story = {
  name: "Men's",
  args: { audience: "men", firstName: "Marcus" },
  parameters: {
    unlayer: unlayerHandoffSafe(() => WelcomeToTheClubUnlayer({ audience: "men", firstName: "Marcus" }), unlayerSource),
  },
};
