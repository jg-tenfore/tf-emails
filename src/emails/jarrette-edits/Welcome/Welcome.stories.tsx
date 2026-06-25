import type { Meta, StoryObj } from "@storybook/react-vite";
import { WelcomeEmail } from "./Welcome";

const meta = {
  title: "Email Templates/Account & Security/Welcome",
  component: WelcomeEmail,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    ctaUrl: { control: "text" },
  },
} satisfies Meta<typeof WelcomeEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { firstName: "Justin" } };
export const NewMember: Story = { args: { firstName: "Sam" } };
