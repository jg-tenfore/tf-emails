import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar, Users01, Zap } from "@untitledui/icons";
import { FeatureList } from "./feature-list";

const meta = {
  title: "Email Components/Feature List",
  component: FeatureList,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FeatureList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        icon: Calendar,
        title: "Book anywhere",
        body: "Reserve tee times, simulator bays, lessons, and tables across every partner.",
      },
      {
        icon: Zap,
        title: "One profile, zero re-typing",
        body: "Your details and payment live in one place — checkout takes seconds.",
      },
      {
        icon: Users01,
        title: "Golf Buddies",
        body: "Save your regular group and add players in a single tap.",
      },
    ],
  },
};
