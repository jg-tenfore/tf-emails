import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberedSteps } from "./numbered-steps";

const meta = {
  title: "Email Components/Numbered Steps",
  component: NumberedSteps,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NumberedSteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      "Send a buddy request by name and email.",
      "Your buddy confirms (or declines) the request.",
      "Your buddies appear everywhere — app, web, kiosk, and the tee sheet.",
    ],
  },
};
