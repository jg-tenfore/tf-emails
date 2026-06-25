import type { Meta, StoryObj } from "@storybook/react-vite";
import { MembershipRenewed } from "./MembershipRenewed";

const meta = {
  title: "Email Templates/Membership/Renewed",
  component: MembershipRenewed,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    mode: { control: "inline-radio", options: ["auto", "manual"] },
  },
} satisfies Meta<typeof MembershipRenewed>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Auto-renewed: charged the card on file, includes the auto-renew row. */
export const AutoRenewed: Story = {};

/** Member renewed manually — same receipt, no auto-renew row. */
export const ManualRenewal: Story = {
  args: { mode: "manual" },
};
