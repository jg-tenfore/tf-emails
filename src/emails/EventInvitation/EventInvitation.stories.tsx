import type { Meta, StoryObj } from "@storybook/react-vite";
import { EventInvitation } from "./EventInvitation";

const meta = {
  title: "Sagamore Golf Club/Events/Invitation",
  component: EventInvitation,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    organizer: { control: "text" },
  },
} satisfies Meta<typeof EventInvitation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** An invitee added to the Member-Guest roster by the organizer. */
export const Default: Story = {};
