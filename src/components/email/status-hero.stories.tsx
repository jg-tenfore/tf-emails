import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clock } from "@untitledui/icons";
import { StatusHero } from "./status-hero";

const meta = {
  title: "Email Components/Status Hero",
  component: StatusHero,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatusHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStamps: Story = {
  args: {
    eyebrow: "Order summary",
    title: "Thanks for your order",
    subtitle: "May 9, 2026",
    stamps: [
      { label: "Order ID", value: "8472103" },
      { label: "Parent TTC", value: "55555" },
    ],
  },
};

export const CenteredWithIcon: Story = {
  args: {
    align: "center",
    icon: Clock,
    title: "See you tomorrow, Justin",
    subtitle: "Your round is coming up. Here are the details one more time.",
  },
};
