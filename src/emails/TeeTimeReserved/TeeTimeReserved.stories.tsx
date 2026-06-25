import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RosterPlayer } from "@/components/email";
import { TeeTimeReserved } from "./TeeTimeReserved";

const meta = {
  title: "Tenfore Branded/Tee Times/Golf Group Details",
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
        ["Justin Girard", "TF-100482"],
        ["Marcus Webb", "TF-238815"],
        ["Cody Sanders", "TF-194730"],
        ["Weston Farnsworth", "TF-205518"],
      ] as const
    ).map(
      ([name, golferId]): RosterPlayer => ({
        name,
        golferId,
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
