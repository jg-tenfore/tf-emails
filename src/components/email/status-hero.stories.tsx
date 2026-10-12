import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Clock } from "@untitledui/icons";
import { CTAButton } from "./cta-button";
import { StatusHero } from "./status-hero";

const meta = {
  title: "Email Components/Status Hero",
  component: StatusHero,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatusHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStamps: Story = {
  args: {
    eyebrow: "Order summary",
    title: "Thanks for your order",
    subtitle: "May 9, 2026",
    stamps: [
      { label: "Order ID", value: "8472103" },
      { label: "Parent TTC", value: "55555" },
    ],
  },
};

export const CenteredWithIcon: Story = {
  args: {
    align: "center",
    icon: Clock,
    title: "See you tomorrow, Justin",
    subtitle: "Your round is coming up. Here are the details one more time.",
  },
};

/** Text-led intro inside an `EmailSection` (replaces the old EmailIntro), with a CTA. */
export const IntroWithCTA: Story = {
  decorators: [
    (Story) => (
      <div className="px-8 py-10">
        <Story />
      </div>
    ),
  ],
  args: {
    inset: false,
    title: "You're booked, Justin.",
    subtitle: "Your tee time is confirmed. Here are the details for your upcoming round.",
    children: (
      <CTAButton href="#" size="lg" iconTrailing={ArrowRight}>
        View reservation
      </CTAButton>
    ),
  },
};
