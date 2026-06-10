import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContactBlock } from "./contact-block";

const meta = {
  title: "Email Components/Contact Block",
  component: ContactBlock,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Customer: Story = {
  args: {
    title: "Customer",
    fields: [
      { label: "Name", value: "Marie Delgado" },
      { label: "Customer ID", value: "1234567" },
      { label: "Email", value: "marie.delgado@acmecorp.example" },
      { label: "Phone", value: "(210) 555-9100" },
    ],
  },
};
