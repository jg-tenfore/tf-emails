import type { Meta, StoryObj } from "@storybook/react-vite";
import { JuniorCampRegistration } from "./JuniorCampRegistration";
import { JuniorCampRegistrationUnlayer } from "./JuniorCampRegistration.unlayer";
import unlayerSource from "./JuniorCampRegistration.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Junior Camp Registration",
  component: JuniorCampRegistration,
  parameters: { layout: "fullscreen" },
  argTypes: {
    parentName: { control: "text" },
    dates: { control: "text" },
    ages: { control: "text" },
    price: { control: "text" },
    registerUrl: { control: "text" },
  },
} satisfies Meta<typeof JuniorCampRegistration>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Junior summer camp registration with a sibling discount. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => JuniorCampRegistrationUnlayer(), unlayerSource),
  },
};
