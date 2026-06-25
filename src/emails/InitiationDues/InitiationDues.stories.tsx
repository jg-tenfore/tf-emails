import type { Meta, StoryObj } from "@storybook/react-vite";
import { InitiationDues } from "./InitiationDues";

const meta = {
  title: "Tenfore Branded/Membership/Initiation Dues",
  component: InitiationDues,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    mode: { control: "inline-radio", options: ["billed", "charged"] },
    amount: { control: "text" },
    nextPayment: { control: "text" },
    remaining: { control: "text" },
  },
} satisfies Meta<typeof InitiationDues>;

export default meta;
type Story = StoryObj<typeof meta>;

/** An initiation installment is due — pay online, in person, or by check. */
export const Billed: Story = {};

/** Installment auto-charged, with the remaining schedule shown. */
export const Charged: Story = {
  args: { mode: "charged" },
};
