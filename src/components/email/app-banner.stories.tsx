import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBanner } from "./app-banner";

const meta = {
  title: "Email Components/App Banner",
  component: AppBanner,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "inline-radio", options: ["inline", "card"] },
    showRating: { control: "boolean" },
    showBadge: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[536px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AppBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Compact strip for inside the email body (Expedia "Travel confidently…" style). */
export const Inline: Story = { args: { variant: "inline" } };

/** Bordered download card with rating + App Store badge. */
export const Card: Story = { args: { variant: "card" } };

/** Example of overriding copy for a specific moment (post-booking). */
export const PostBookingNudge: Story = {
  args: {
    variant: "card",
    title: "Check in from your phone",
    body: "Skip the pro-shop line — check in, grab your cart, and order at the turn in the TenFore Crane app.",
  },
};
