import type { Meta, StoryObj } from "@storybook/react-vite";
import { WaitlistPaymentFailed } from "./WaitlistPaymentFailed";

const meta = {
  title: "Sagamore Golf Club/Waitlist/Payment Failed",
  component: WaitlistPaymentFailed,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    reason: { control: "text" },
    waitlistId: { control: "text" },
  },
} satisfies Meta<typeof WaitlistPaymentFailed>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Charge for the waitlisted spot failed — update payment and retry. */
export const Default: Story = {};

/** Edge case: the card on file has expired. */
export const Expired: Story = {
  args: { reason: "Card declined — card expired" },
};
