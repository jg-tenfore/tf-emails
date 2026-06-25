import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordReset } from "./PasswordReset";

const meta = {
  title: "Email Templates/Account & Security/Password Reset",
  component: PasswordReset,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    resetUrl: { control: "text" },
    expiresIn: { control: "text" },
  },
} satisfies Meta<typeof PasswordReset>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A standard password reset request with a one-hour expiry. */
export const Default: Story = {};
