import type { Meta, StoryObj } from "@storybook/react-vite";
import { teeTime } from "@/lib/scenario";
import { DetailRow } from "./detail-row";
import { TeeTimeDetails } from "./tee-time-details";

const meta = {
  title: "Email Components/Tee Time Details",
  component: TeeTimeDetails,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[480px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TeeTimeDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The core four rows plus the confirmation number — Modification / Group Details. */
export const Default: Story = {
  args: {
    date: teeTime.date,
    time: teeTime.time,
    players: teeTime.players,
    holes: teeTime.holes,
    confirmation: teeTime.confirmation,
  },
};

/** Every optional row — how the Confirmation email uses it. */
export const Full: Story = {
  args: {
    date: teeTime.date,
    time: teeTime.time,
    players: teeTime.players,
    holes: teeTime.holes,
    rateType: teeTime.rateType,
    confirmation: teeTime.confirmation,
    courseConfirmation: teeTime.courseConfirmation,
    groupName: teeTime.groupName,
  },
};

/** Just the core rows (Cancellation), with a single golfer and an extra row appended. */
export const MinimalWithExtraRow: Story = {
  args: {
    date: teeTime.date,
    time: teeTime.time,
    players: 1,
    holes: 9,
    children: <DetailRow label="Cart" value="Walking" />,
  },
};
