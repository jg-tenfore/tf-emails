import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimulatorBookingCancellation } from "./SimulatorBookingCancellation";

const meta = {
  title: "FloGolf Lounge/Simulator Booking/Cancellation",
  component: SimulatorBookingCancellation,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    refund: { control: "text" },
    rebookUrl: { control: "text" },
  },
} satisfies Meta<typeof SimulatorBookingCancellation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cancelled booking with a full refund. */
export const Default: Story = {};

/** Non-refundable cancellation — refund section hidden. */
export const NonRefundable: Story = {
  args: { refund: undefined },
};
