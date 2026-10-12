import type { Meta, StoryObj } from "@storybook/react-vite";
import { Subheading } from "./subheading";

const meta = {
  title: "Email Components/Subheading",
  component: Subheading,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Subheading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** One step below SectionHeading — e.g. "What's included". */
export const Default: Story = { args: { children: "What's included" } };
