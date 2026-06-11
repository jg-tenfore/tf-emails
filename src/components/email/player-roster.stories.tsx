import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlayerRoster } from "./player-roster";

const meta = {
  title: "Email Components/Player Roster",
  component: PlayerRoster,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlayerRoster>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A foursome with mixed rates — one member rate, the rest public. */
export const MixedRates: Story = {
  args: {
    players: [
      { name: "Justin Girard", rateType: "Birdie member", amount: "$42.00" },
      { name: "Marcus Webb", rateType: "Public", amount: "$68.00" },
      { name: "Cody Sanders", rateType: "Public", amount: "$68.00" },
      { name: "Weston Farnsworth", rateType: "Public", amount: "$68.00" },
    ],
  },
};

/** Names only — no per-player pricing. */
export const NamesOnly: Story = {
  args: {
    players: [
      { name: "Justin Girard" },
      { name: "Marcus Webb" },
      { name: "Cody Sanders" },
    ],
  },
};

/** Per-player payment status with a rate + cart-fee breakdown (split payment). */
export const WithStatus: Story = {
  args: {
    players: [
      {
        name: "Justin Girard",
        status: "Paid",
        statusTone: "paid",
        rateType: "Public Rate · Weekday",
        amount: "$73.90",
        extra: [{ label: "Cart fee", value: "$22.08" }],
      },
      {
        name: "Weston Farnsworth",
        status: "Pending",
        statusTone: "pending",
        rateType: "Public Rate · Weekday",
        amount: "$73.90",
        extra: [{ label: "Cart fee", value: "$22.08" }],
      },
    ],
  },
};
