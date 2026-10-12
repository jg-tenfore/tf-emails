import type { Meta, StoryObj } from "@storybook/react-vite";
import { RefundSection } from "./refund-section";

const meta = {
  title: "Email Components/Refund Section",
  component: RefundSection,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RefundSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Refund with the standard timing note, divider on top. */
export const Default: Story = { args: { amount: "$221.52" } };

/** Custom note, no divider — for when it follows a section that already ends in one. */
export const CustomNote: Story = {
  args: {
    amount: "$110.76",
    divided: false,
    note: "Refunded to your Sagamore account credit, valid for six months.",
  },
};
