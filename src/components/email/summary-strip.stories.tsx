import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryStrip } from "./summary-strip";

const meta = {
  title: "Email Components/Summary Strip",
  component: SummaryStrip,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SummaryStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaidAndDue: Story = {
  args: {
    items: [
      { label: "Paid online", value: "$13.00" },
      { label: "Due at course", value: "$0.00" },
    ],
  },
};

export const PaidAndBalance: Story = {
  args: {
    items: [
      { label: "Paid", value: "$2,500.00" },
      { label: "Balance due", value: "$1,500.00" },
    ],
  },
};
