import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "./logo";

const meta = {
  title: "Email Components/Logo",
  component: Logo,
  parameters: { layout: "centered" },
  argTypes: { height: { control: { type: "range", min: 16, max: 64 } } },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnLight: Story = {
  args: { height: 32 },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-primary px-10 py-8">
        <Story />
      </div>
    ),
  ],
};

export const OnBrand: Story = {
  args: { height: 32, invert: true },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-brand-section px-10 py-8">
        <Story />
      </div>
    ),
  ],
};
