import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeading } from "./section-heading";

const meta = {
  title: "Email Components/Section Heading",
  component: SectionHeading,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { title: "Tee time details" } };

export const WithDescription: Story = {
  args: {
    title: "A growing network of partners",
    description: "Book seamlessly across every venue on TenFore.",
  },
};
