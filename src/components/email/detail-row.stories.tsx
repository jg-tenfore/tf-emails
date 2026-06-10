import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "@untitledui/icons";
import { DetailRow } from "./detail-row";

const meta = {
  title: "Email Components/Detail Row",
  component: DetailRow,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[360px] max-w-full rounded-xl bg-primary px-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DetailRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { label: "Tee time", value: "6:00 PM" },
};

export const WithIcon: Story = {
  args: { label: "Date", value: "Tue, Apr 21, 2026", icon: Calendar },
};

export const Total: Story = {
  args: { label: "Total paid", value: "$13.00", emphasis: true },
};
