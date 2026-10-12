import type { Meta, StoryObj } from "@storybook/react-vite";
import { BookingActions } from "./booking-actions";

const meta = {
  title: "Email Components/Booking Actions",
  component: BookingActions,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full bg-primary p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BookingActions>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary Manage over secondary Add to calendar — the standard order everywhere. */
export const Default: Story = { args: { manageUrl: "#" } };

/** Relabelled for a changed event booking. */
export const EventUpdated: Story = {
  args: { manageUrl: "#", manageLabel: "Manage event", calendarLabel: "Update calendar" },
};
