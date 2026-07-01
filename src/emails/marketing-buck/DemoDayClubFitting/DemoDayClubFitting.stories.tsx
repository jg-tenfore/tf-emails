import type { Meta, StoryObj } from "@storybook/react-vite";
import { DemoDayClubFitting } from "./DemoDayClubFitting";
import { DemoDayClubFittingUnlayer } from "./DemoDayClubFitting.unlayer";
import unlayerSource from "./DemoDayClubFitting.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Demo Day & Club Fitting",
  component: DemoDayClubFitting,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    date: { control: "text" },
    time: { control: "text" },
    bookingUrl: { control: "text" },
  },
} satisfies Meta<typeof DemoDayClubFitting>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Demo day & free fittings, with a brand strip and a same-day order incentive. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => DemoDayClubFittingUnlayer(), unlayerSource),
  },
};
