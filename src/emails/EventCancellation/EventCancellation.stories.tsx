import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventCancellation } from "./EventCancellation";

const meta = {
  title: "Sagamore Golf Club/Events/Cancellation",
  component: EventCancellation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" }, refund: { control: "text" } },
} satisfies Meta<typeof EventCancellation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Cancelled outing with the deposit refunded. */
export const Default: Story = {};
