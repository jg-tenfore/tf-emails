import type { Meta, StoryObj } from "@storybook/react-vite";
import { punchCard5 } from "@/lib/scenario";
import { PunchCardEmail } from "./PunchCard";

const meta = {
  title: "Tenfore Branded/Punch Cards/5-Round",
  component: PunchCardEmail,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof PunchCardEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Just purchased — all 5 rounds available. */
export const Fresh: Story = { args: { card: { ...punchCard5, used: 0 } } };

/** Three rounds played, two left. */
export const PartiallyUsed: Story = {
  args: { card: { ...punchCard5, used: 3 } },
};

/** Every round redeemed. */
export const FullyUsed: Story = {
  args: { card: { ...punchCard5, used: 5 } },
};
