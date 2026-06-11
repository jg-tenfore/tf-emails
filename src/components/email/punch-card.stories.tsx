import type { Meta, StoryObj } from "@storybook/react-vite";
import { PunchCard } from "./punch-card";

const meta = {
  title: "Email Components/Punch Card",
  component: PunchCard,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PunchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fresh: Story = {
  args: { total: 10, used: 0, label: "10-Round Punch Card" },
};

export const PartiallyUsed: Story = {
  args: { total: 10, used: 4, label: "10-Round Punch Card" },
};

export const FullyUsed: Story = {
  args: { total: 10, used: 10, label: "10-Round Punch Card" },
};

export const FiveRound: Story = {
  args: { total: 5, used: 3, label: "5-Round Punch Card" },
};
