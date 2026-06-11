import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight } from "@untitledui/icons";
import { CTAButton } from "./cta-button";
import { EmailIntro } from "./email-intro";

const meta = {
  title: "Email Components/Email Intro",
  component: EmailIntro,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="mx-auto w-[600px] max-w-full bg-primary px-8 py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCTA: Story = {
  args: {
    title: "You're booked, Justin.",
    subtitle:
      "Your tee time is confirmed. Here are the details for your upcoming round — we'll see you on the first tee.",
    children: (
      <CTAButton href="#" size="lg" iconTrailing={ArrowRight}>
        View reservation
      </CTAButton>
    ),
  },
};

export const CopyOnly: Story = {
  args: {
    title: "Welcome aboard, Justin.",
    subtitle: "One account to book tee times, simulators, lessons, and dining.",
  },
};
