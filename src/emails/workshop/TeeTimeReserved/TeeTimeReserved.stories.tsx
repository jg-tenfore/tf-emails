import type { Meta, StoryObj } from "@storybook/react-vite";
import type { RosterPlayer } from "@/components/email";
import { WorkshopTeeTimeReserved } from "./TeeTimeReserved";

const meta = {
  title: "Workshop/Tee Time Reserved",
  component: WorkshopTeeTimeReserved,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof WorkshopTeeTimeReserved>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A foursome where every player's payment is still pending. */
export const AllPending: Story = {};

/** Split payment in progress — two players paid, two still pending. */
export const PartiallyPaid: Story = {
  args: {
    roster: (() => {
      const line = (label: string) => [{ label, value: "$22.08" }];
      const make = (
        name: string,
        status: string,
        tone: RosterPlayer["statusTone"],
      ): RosterPlayer => ({
        name,
        status,
        statusTone: tone,
        rateType: "Public Rate · Weekday",
        amount: "$73.90",
        extra: line("Cart fee"),
      });
      return [
        make("Justin Girard", "Paid", "paid"),
        make("Cody Sanders", "Paid", "paid"),
        make("Weston Farnsworth", "Pending", "pending"),
        make("Marcus Webb", "Pending", "pending"),
      ];
    })(),
    amountDue: "$191.96",
  },
};
