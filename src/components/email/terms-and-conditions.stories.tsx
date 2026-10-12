import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  courseNotesTerms,
  pickSections,
  shipSticksNotice,
  standardTerms,
} from "@/lib/tee-time-terms";
import { TermsAndConditions } from "./terms-and-conditions";

const meta = {
  title: "Email Components/Terms & Conditions",
  component: TermsAndConditions,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[560px] max-w-full bg-primary p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TermsAndConditions>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Formal booking agreement with the closing acknowledgment. */
export const Default: Story = {
  args: {
    description: "You agreed to these terms when you booked.",
    audience: standardTerms.audience,
    sections: standardTerms.sections,
    acknowledgment: standardTerms.acknowledgment,
  },
};

/** Free-form course notes with a policy alert and a partner offer. */
export const CourseNotes: Story = {
  args: {
    title: "Course policies",
    notices: [...(courseNotesTerms.notices ?? []), shipSticksNotice],
    sections: courseNotesTerms.sections,
  },
};

/** A subset of sections with a link out to the full terms. */
export const Condensed: Story = {
  args: {
    audience: standardTerms.audience,
    sections: pickSections(standardTerms, ["Cancellation policy", "Check-in requirement"]),
    moreLink: { href: "#", label: "View full terms & conditions" },
  },
};
