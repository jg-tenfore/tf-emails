import type { Meta, StoryObj } from "@storybook/react-vite";
import { TermsLibrary } from "./terms-library";

const meta = {
  title: "Email Components/Terms Library",
  component: TermsLibrary,
  parameters: { layout: "fullscreen", backgrounds: { default: "White" } },
  argTypes: {
    filter: { control: "inline-radio", options: ["all", "in-use", "sourced", "draft-only"] },
    expanded: { control: "boolean" },
  },
} satisfies Meta<typeof TermsLibrary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Every known tee time term type, grouped by category. Click a term to see its wording. */
export const Catalog: Story = {};

/** All wording open — useful for reading or reviewing the full set. */
export const AllWordingOpen: Story = { args: { expanded: true } };

/** Only the term types that are already in a tee time email. */
export const InUse: Story = { args: { filter: "in-use" } };

/** Term types that only have draft wording — the course-review list. */
export const NeedsCourseReview: Story = { args: { filter: "draft-only", expanded: true } };
