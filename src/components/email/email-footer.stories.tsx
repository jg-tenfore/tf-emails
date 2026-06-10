import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailFooter } from "./email-footer";

const meta = {
  title: "Email Components/Footer",
  component: EmailFooter,
  parameters: { layout: "padded" },
} satisfies Meta<typeof EmailFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Marketing: Story = {
  args: {
    reason:
      "You're receiving this because you opted in to Tenfore Golf news and offers.",
  },
};
