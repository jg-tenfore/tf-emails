import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight } from "@untitledui/icons";
import { CTAButton } from "./cta-button";

const meta = {
  title: "Email Components/CTA Button",
  component: CTAButton,
  parameters: { layout: "centered" },
  args: { href: "#", children: "Book a tee time" },
  argTypes: {
    color: { control: "inline-radio", options: ["primary", "secondary"] },
    size: { control: "inline-radio", options: ["md", "lg", "xl"] },
    fullWidth: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] max-w-full rounded-xl bg-primary p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: "primary", size: "lg" } };
export const Secondary: Story = { args: { color: "secondary", size: "lg" } };
export const FullWidth: Story = {
  args: { fullWidth: true, size: "lg", iconTrailing: ArrowRight },
};
