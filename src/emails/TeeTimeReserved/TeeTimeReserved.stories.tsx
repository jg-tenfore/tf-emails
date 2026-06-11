import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RosterPlayer } from "@/components/email";
import { TeeTimeReserved } from "./TeeTimeReserved";

const meta = {
  title: "Sagamore Golf Club/Tee Times/Golf Group Details",
  component: TeeTimeReserved,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof TeeTimeReserved>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Foursome reserved — one player paid, three still owe their share. */
export const Default: Story = {};

/** Everyone has paid — the reservation is fully settled. */
export const AllPaid: Story = {
  args: {
    roster: (
      [
        ["Justin Girard"],
        ["Marcus Webb"],
        ["Cody Sanders"],
        ["Weston Farnsworth"],
      ] as const
    ).map(
      ([name]): RosterPlayer => ({
        name,
        status: "Paid",
        statusTone: "paid",
        rateType: "Weekend 18 · with cart",
        amount: "$62.00",
      }),
    ),
    paid: "$248.00",
    amountDue: "$0.00",
  },
};
