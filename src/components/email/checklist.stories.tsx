import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "./checklist";

const meta = {
  title: "Email Components/Checklist",
  component: Checklist,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "Arrive 15 minutes early to check in at the pro shop.",
      "Collared shirt required; no denim or tank tops.",
      "Pack a layer — evenings get cool in Lynnfield.",
    ],
  },
};
