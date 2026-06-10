import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailHeader } from "./email-header";

const meta = {
  title: "Email Components/Header",
  component: EmailHeader,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "inline-radio", options: ["brand", "light"] },
    align: { control: "inline-radio", options: ["left", "center"] },
  },
} satisfies Meta<typeof EmailHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = { args: { variant: "brand", align: "center" } };
export const Light: Story = { args: { variant: "light", align: "left" } };
