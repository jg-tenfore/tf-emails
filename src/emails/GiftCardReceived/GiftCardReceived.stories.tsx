import type { Meta, StoryObj } from "@storybook/react-vite";
import { GiftCardReceived } from "./GiftCardReceived";

const meta = {
  title: "Tenfore Branded/Gift Cards/Received",
  component: GiftCardReceived,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    senderName: { control: "text" },
    note: { control: "text" },
  },
} satisfies Meta<typeof GiftCardReceived>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A gift card with a personal note from the sender. */
export const Default: Story = {};

/** No personal note — the note callout is omitted. */
export const NoNote: Story = {
  args: { note: "" },
};
