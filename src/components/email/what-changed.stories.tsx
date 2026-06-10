import type { Meta, StoryObj } from "@storybook/react-vite";
import { WhatChanged } from "./what-changed";

const meta = {
  title: "Email Components/What Changed",
  component: WhatChanged,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WhatChanged>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TeeTime: Story = {
  args: {
    changes: [
      { label: "Tee time", from: "8:42 AM", to: "10:15 AM" },
      { label: "Players", from: "3", to: "2" },
    ],
  },
};

export const Clinic: Story = {
  args: {
    changes: [
      {
        label: "Week",
        from: "Week 1 (Jun 16–20)",
        to: "Week 2 (Jun 23–27)",
      },
      { label: "T-shirt size", from: "Youth M", to: "Youth L" },
    ],
  },
};
