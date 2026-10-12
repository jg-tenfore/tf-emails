import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextAlertsOptIn } from "./text-alerts";

const meta = {
  title: "Email Components/Text Alerts Opt-In",
  component: TextAlertsOptIn,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextAlertsOptIn>;

export default meta;
type Story = StoryObj<typeof meta>;

/** SMS opt-in prompt from the marketing emails. */
export const Default: Story = {};
