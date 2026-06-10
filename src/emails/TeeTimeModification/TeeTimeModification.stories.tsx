import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeeTimeModification } from "./TeeTimeModification";

const meta = {
  title: "Sagamore Golf Club/Tee Times/Modification",
  component: TeeTimeModification,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof TeeTimeModification>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Time and player count changed, no money back. */
export const Default: Story = {};

/** Edge case: a player was removed, so part of the payment is refunded. */
export const PlayerRemovedWithRefund: Story = {
  args: {
    changes: [
      { label: "Tee time", from: "8:42 AM", to: "10:15 AM" },
      { label: "Players", from: "3", to: "2" },
    ],
    refund: "$110.76",
  },
};
