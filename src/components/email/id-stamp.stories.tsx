import type { Meta, StoryObj } from "@storybook/react-vite";
import { IdStamp } from "./id-stamp";

const meta = {
  title: "Email Components/Id Stamp",
  component: IdStamp,
  parameters: { layout: "centered" },
} satisfies Meta<typeof IdStamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderId: Story = { args: { label: "Order ID", value: "8472103" } };
export const Confirmation: Story = {
  args: { label: "Confirmation", value: "#421292164" },
};
