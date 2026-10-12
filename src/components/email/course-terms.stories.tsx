import type { Meta, StoryObj } from "@storybook/react-vite";
import { courseNotesTermIds, teeTimeEmailTerms } from "@/lib/terms-catalog";
import { CourseTerms } from "./course-terms";

const meta = {
  title: "Email Components/Course Terms",
  component: CourseTerms,
  parameters: { layout: "centered" },
  argTypes: {
    style: { control: "inline-radio", options: ["agreement", "houseRules"] },
    includeDrafts: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-[560px] max-w-full bg-primary p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CourseTerms>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The Confirmation email's set, picked by id, as a first-person agreement. */
export const Agreement: Story = {
  args: {
    include: teeTimeEmailTerms.Confirmation,
    description: "You agreed to these terms when you booked this tee time.",
  },
};

/** The same block in house-rules style, using the Course Notes set. */
export const HouseRules: Story = {
  args: {
    title: "Course policies",
    style: "houseRules",
    include: courseNotesTermIds,
  },
};

/** Draft term types opted in — each is flagged until a course signs off on the wording. */
export const WithDrafts: Story = {
  args: {
    include: ["cancellation", "pace-of-play", "rain-checks", "alcohol", "liability"],
    includeDrafts: true,
    description: "Preview of draft terms — not for sending until the course reviews them.",
  },
};

/** Drafts left out (the default): only sourced terms render, so this shows just Cancellation. */
export const DraftsHidden: Story = {
  args: {
    include: ["cancellation", "pace-of-play", "rain-checks", "alcohol", "liability"],
  },
};

/** A short subset with a link out — how the Reminder email uses it. */
export const Condensed: Story = {
  args: {
    title: "Before you play",
    include: teeTimeEmailTerms.Reminder,
    moreLink: { href: "#", label: "View full terms & conditions" },
  },
};
