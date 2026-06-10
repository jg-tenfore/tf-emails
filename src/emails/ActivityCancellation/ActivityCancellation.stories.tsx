import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityCancellation } from "./ActivityCancellation";

const meta = {
  title: "Sagamore Golf Club/Activities/Cancellation",
  component: ActivityCancellation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof ActivityCancellation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A cancelled simulator session with a refund returned. */
export const Default: Story = {};

/** Edge case: a non-refundable cancellation, so no refund block is shown. */
export const NonRefundable: Story = {
  args: { refund: undefined },
};
