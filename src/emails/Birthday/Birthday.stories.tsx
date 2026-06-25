import type { Meta, StoryObj } from "@storybook/react-vite";
import { Birthday } from "./Birthday";

const meta = {
  title: "Tenfore Branded/Social/Birthday",
  component: Birthday,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    planVisitUrl: { control: "text" },
    perk: { control: "text" },
  },
} satisfies Meta<typeof Birthday>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A birthday note with a complimentary range-bucket perk. */
export const Default: Story = {};
