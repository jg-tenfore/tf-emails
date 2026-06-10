import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityConfirmation } from "./ActivityConfirmation";

const meta = {
  title: "Sagamore Golf Club/Activities/Confirmation",
  component: ActivityConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof ActivityConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A confirmed simulator-bay session with three bookings, paid in full. */
export const Default: Story = {};

/** Same booking confirmed for a different golfer. */
export const DifferentGolfer: Story = {
  args: { firstName: "Marcus" },
};
