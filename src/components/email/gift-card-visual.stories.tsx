import type { Meta, StoryObj } from "@storybook/react-vite";
import { GiftCardVisual } from "./gift-card-visual";

const meta = {
  title: "Email Components/Gift Card Visual",
  component: GiftCardVisual,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GiftCardVisual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { amount: "$100.00", code: "8472103556677" },
};

export const RemainingBalance: Story = {
  args: {
    label: "Remaining balance",
    amount: "$70.00",
    code: "8472103556677",
  },
};
