import type { Meta, StoryObj } from "@storybook/react-vite";
import { SimulatorBookingModification } from "./SimulatorBookingModification";

const meta = {
  title: "FloGolf Lounge/Simulator Booking/Modification",
  component: SimulatorBookingModification,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof SimulatorBookingModification>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A time + bay change with no price difference. */
export const Default: Story = {};

/** Trimmed from 2 hours to 1, triggering a refund. */
export const ShorterSessionWithRefund: Story = {
  args: {
    changes: [{ label: "Duration", from: "2 hours", to: "1 hour" }],
    refund: "$60.00",
  },
};
