import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertTriangle,
  CheckCircle,
  InfoCircle,
  XCircle,
} from "@untitledui/icons";
import { Callout } from "./callout";

const meta = {
  title: "Email Components/Callout",
  component: Callout,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    tone: "success",
    eyebrow: "Waitlist filled",
    icon: CheckCircle,
    children:
      "A spot opened up and we booked it for you. Pay at the pro shop when you arrive.",
  },
};

export const Info: Story = {
  args: {
    tone: "info",
    eyebrow: "Golf buddy request",
    icon: InfoCircle,
    children:
      "Marie Delgado wants to add you as a golf buddy. Buddies can share tee times and play together more easily.",
  },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    eyebrow: "Payment failed",
    icon: AlertTriangle,
    children:
      "Card declined — insufficient funds. Your tee time was not booked. Update your payment method and try again.",
  },
};

export const Error: Story = {
  args: {
    tone: "error",
    eyebrow: "Cancelled",
    icon: XCircle,
    children:
      "Your tee time on Tuesday, April 21 has been cancelled and removed from the tee sheet.",
  },
};
