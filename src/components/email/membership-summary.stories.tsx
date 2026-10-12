import type { Meta, StoryObj } from "@storybook/react-vite";
import { golfer, membership } from "@/lib/scenario";
import { MembershipSummary } from "./membership-summary";

const meta = {
  title: "Email Components/Membership Summary",
  component: MembershipSummary,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full bg-primary p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MembershipSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Membership details and benefits. */
export const Default: Story = { args: { member: golfer.fullName, membership } };

/** With the Auto-renew row (Renewed / Expiring auto-renew emails). */
export const AutoRenew: Story = {
  args: { member: golfer.fullName, membership, showAutoRenew: true },
};
