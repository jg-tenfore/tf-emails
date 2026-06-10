import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailHero } from "./email-hero";

const COURSE_IMG =
  "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80";

const meta = {
  title: "Email Components/Hero",
  component: EmailHero,
  parameters: { layout: "padded" },
  args: { imageUrl: COURSE_IMG, imageAlt: "Golf course at sunrise" },
} satisfies Meta<typeof EmailHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeadline: Story = {
  args: {
    eyebrow: "Confirmation #421292164",
    headline: "Sagamore Spring Golf Club",
  },
};

export const ImageOnly: Story = { args: {} };
