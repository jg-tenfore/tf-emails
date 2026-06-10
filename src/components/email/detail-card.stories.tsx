import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar, Clock, Users01 } from "@untitledui/icons";
import { DetailCard } from "./detail-card";
import { DetailRow } from "./detail-row";

const meta = {
  title: "Email Components/Detail Card",
  component: DetailCard,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full bg-primary">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DetailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DetailRow icon={Calendar} label="Date" value="Tue, Apr 21, 2026" />
        <DetailRow icon={Clock} label="Tee time" value="6:00 PM" />
        <DetailRow icon={Users01} label="Players" value="2 golfers" />
        <DetailRow label="Confirmation" value="#421292164" />
      </>
    ),
  },
};
