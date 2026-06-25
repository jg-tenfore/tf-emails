import type { Meta, StoryObj } from "@storybook/react-vite";
import { GolfShopInsider } from "./GolfShopInsider";

const meta = {
  title: "Marketing Buck/Golf Shop Insider",
  component: GolfShopInsider,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    shopUrl: { control: "text" },
    discount: { control: "text" },
    discountCode: { control: "text" },
  },
} satisfies Meta<typeof GolfShopInsider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** New merchandise with real product photos, a Shop by Brand strip, and a spend incentive. */
export const Default: Story = {};
