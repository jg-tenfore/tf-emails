import type { Meta, StoryObj } from "@storybook/react-vite";
import { GiftCardPurchase } from "./GiftCardPurchase";

const meta = {
  title: "Tenfore Branded/Gift Cards/Purchase",
  component: GiftCardPurchase,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    mode: { control: "radio", options: ["self", "gift"] },
    recipientName: { control: "text" },
    recipientEmail: { control: "text" },
  },
} satisfies Meta<typeof GiftCardPurchase>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Bought for yourself — the card and code are shown directly. */
export const Self: Story = {};

/** Bought as a gift — sent to a recipient, no code shown to the buyer. */
export const Gift: Story = {
  args: { mode: "gift" },
};
