import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailHeader } from "./email-header";

const meta = {
  title: "Email Components/Header",
  component: EmailHeader,
  parameters: { layout: "padded" },
} satisfies Meta<typeof EmailHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 160px-wide color logo, always centered on a white bar. */
export const Default: Story = {};
