import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeCancellation } from "./TeeTimeCancellation";

const meta = {
  title: "Jarrette Edits/Tee Times/Cancellation",
  component: TeeTimeCancellation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof TeeTimeCancellation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cancelled with a full refund issued to the card. */
export const Default: Story = {};

/** Edge case: cancelled inside the window, non-refundable (no refund block). */
export const NonRefundable: Story = {
  args: { refund: undefined },
};
