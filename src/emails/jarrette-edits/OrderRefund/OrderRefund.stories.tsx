import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrderRefund } from "./OrderRefund";

const meta = {
  title: "Email Templates/Orders/Refund",
  component: OrderRefund,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    refundId: { control: "text" },
    reason: { control: "text" },
    refundTotal: { control: "text" },
  },
} satisfies Meta<typeof OrderRefund>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full refund for a weather-closed booking. */
export const Default: Story = {};

/** Partial refund — one player removed from the group. */
export const PartialRefund: Story = {
  args: {
    reason: "Partial refund — one player removed from your group.",
  },
};
