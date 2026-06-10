import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlatformWelcome } from "./PlatformWelcome";

const meta = {
  title: "TenFore Golf/Welcome",
  component: PlatformWelcome,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof PlatformWelcome>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A new golfer who just signed up in the app. */
export const Default: Story = {};

export const NewGolfer: Story = { args: { firstName: "Sam" } };
