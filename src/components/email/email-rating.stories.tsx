import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmailRating } from "./email-rating";

const meta = {
  title: "Email Components/Rating",
  component: EmailRating,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[420px] max-w-full rounded-xl bg-primary px-6 py-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EmailRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
