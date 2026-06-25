import type { Meta, StoryObj } from "@storybook/react-vite";
import { punchCard10 } from "@/lib/scenario";
import { PunchCardEmail } from "./PunchCard";

const meta = {
  title: "Tenfore Branded/Punch Cards/10-Round",
  component: PunchCardEmail,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof PunchCardEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Just purchased — all 10 rounds available. */
export const Fresh: Story = { args: { card: { ...punchCard10, used: 0 } } };

/** Four rounds played, six left. */
export const PartiallyUsed: Story = {
  args: { card: { ...punchCard10, used: 4 } },
};

/** Every round redeemed — time to buy another. */
export const FullyUsed: Story = {
  args: { card: { ...punchCard10, used: 10 } },
};

/** Three rounds left and the card is about to expire. */
export const Expiring: Story = {
  args: {
    card: { ...punchCard10, used: 7, expires: "May 9, 2026" },
    expiringSoon: true,
  },
};
