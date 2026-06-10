import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./data-table";

const meta = {
  title: "Email Components/Data Table",
  component: DataTable,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[520px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BalanceReport: Story = {
  args: {
    columns: [
      { key: "customer", header: "Customer" },
      { key: "email", header: "Email" },
      { key: "balance", header: "Balance", align: "right" },
    ],
    rows: [
      {
        customer: "Cody Sanders",
        email: "cody.sanders@example.com",
        balance: "$247.50",
      },
      {
        customer: "Marie Delgado",
        email: "marie.delgado@acmecorp.example",
        balance: "$1,050.00",
      },
      {
        customer: "Weston Farnsworth",
        email: "weston@example.com",
        balance: "$427.00",
      },
    ],
  },
};
