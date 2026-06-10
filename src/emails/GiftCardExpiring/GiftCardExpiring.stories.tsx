import type { Meta, StoryObj } from "@storybook/react-vite";
import { GiftCardExpiring } from "./GiftCardExpiring";

const meta = {
  title: "Sagamore Golf Club/Gift Cards/Expiring",
  component: GiftCardExpiring,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    daysLeft: { control: "text" },
  },
} satisfies Meta<typeof GiftCardExpiring>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Two weeks out — a gentle reminder of the remaining balance. */
export const Default: Story = {};

/** Last-chance urgency — only a few days remain. */
export const LastChance: Story = {
  args: { daysLeft: "3" },
};
