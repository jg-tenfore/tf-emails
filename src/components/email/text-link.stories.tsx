import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLink } from "./text-link";

const meta = {
  title: "Email Components/Text Link",
  component: TextLink,
  parameters: { layout: "centered" },
  argTypes: { variant: { control: "inline-radio", options: ["inline", "arrow"] } },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Underlined link inside a sentence. */
export const Inline: Story = {
  args: { href: "#", children: "Contact the pro shop" },
  render: (args) => (
    <p className="text-sm text-tertiary">
      Need help? <TextLink {...args} />.
    </p>
  ),
};

/** Standalone link with an arrow. */
export const Arrow: Story = { args: { href: "#", variant: "arrow", children: "Learn more" } };
