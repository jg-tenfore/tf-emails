import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuddyRequest } from "./BuddyRequest";

const meta = {
  title: "Sagamore Golf Club/Social/Buddy Request",
  component: BuddyRequest,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    senderName: { control: "text" },
    senderEmail: { control: "text" },
    sentAt: { control: "text" },
    acceptUrl: { control: "text" },
    buddiesUrl: { control: "text" },
    ignoreEmail: { control: "text" },
  },
} satisfies Meta<typeof BuddyRequest>;

export default meta;
type Story = StoryObj<typeof meta>;

/** An incoming golf buddy request from another member. */
export const Default: Story = {};
