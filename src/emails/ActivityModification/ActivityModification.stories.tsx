import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityModification } from "./ActivityModification";

const meta = {
  title: "Sagamore Golf Club/Activities/Modification",
  component: ActivityModification,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof ActivityModification>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Start time and player count changed, no money back. */
export const Default: Story = {};

/** A player was removed from a bay, so part of the payment is refunded. */
export const PlayerRemovedWithRefund: Story = {
  args: {
    changes: [
      { label: "Players (Bay 4)", from: "2", to: "1" },
      { label: "Bay 4 booking", from: "Booked", to: "Removed" },
    ],
    refund: "$50.00",
  },
};
