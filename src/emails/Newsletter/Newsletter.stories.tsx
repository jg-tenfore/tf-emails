import type { Meta, StoryObj } from "@storybook/react-vite";
import { NewsletterEmail } from "./Newsletter";

const meta = {
  title: "Emails/Newsletter",
  component: NewsletterEmail,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NewsletterEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
