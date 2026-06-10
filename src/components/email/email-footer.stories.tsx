import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailFooter } from "./email-footer";

const meta = {
  title: "Email Components/Footer",
  component: EmailFooter,
  parameters: { layout: "padded" },
  argTypes: { align: { control: "inline-radio", options: ["left", "center"] } },
} satisfies Meta<typeof EmailFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Left-justified footer with the small footer logo (default). */
export const LeftAligned: Story = { args: { align: "left" } };

/** Centered variant. */
export const Centered: Story = { args: { align: "center" } };
