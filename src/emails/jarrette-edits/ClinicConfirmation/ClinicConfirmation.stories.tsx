import type { Meta, StoryObj } from "@storybook/react-vite";
import { clinicSingleSession, clinicWeeklySeries } from "@/lib/scenario";
import { ClinicConfirmation } from "./ClinicConfirmation";

const meta = {
  title: "Email Templates/Clinics/Confirmation",
  component: ClinicConfirmation,
  parameters: { layout: "fullscreen" },
  argTypes: { firstName: { control: "text" } },
} satisfies Meta<typeof ClinicConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Confirmed multi-day clinic registration with intake answers and payment. */
export const Default: Story = {};

/** Same registration, addressed to a different golfer. */
export const DifferentGolfer: Story = {
  args: { firstName: "Marcus" },
};


/** Pro Shop flow: one occurrence of a repeating clinic, with spots left stated. */
export const SingleSession: Story = { args: { clinic: clinicSingleSession } };

/** Four-week series — each date listed with its own remaining spots. */
export const WeeklySeries: Story = { args: { clinic: clinicWeeklySeries } };

/** Low availability — two spots left raises the "almost full" callout. */
export const AlmostFull: Story = {
  args: {
    clinic: {
      ...clinicSingleSession,
      sessions: [
        { date: "Mon, Nov 2", time: "2:00 PM - 3:00 PM", spotsLeft: 2 },
      ],
      spotsLeft: 2,
    },
  },
};

/** The registration that takes the last spot — roster is now closed. */
export const RosterFull: Story = {
  args: {
    clinic: {
      ...clinicSingleSession,
      sessions: [
        { date: "Mon, Nov 2", time: "2:00 PM - 3:00 PM", spotsLeft: 0 },
      ],
      spotsLeft: 0,
    },
  },
};
