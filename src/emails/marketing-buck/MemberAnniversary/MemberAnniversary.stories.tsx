import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemberAnniversary } from "./MemberAnniversary";
import { MemberAnniversaryUnlayer } from "./MemberAnniversary.unlayer";
import unlayerSource from "./MemberAnniversary.unlayer.tsx?raw";
import { unlayerHandoffSafe } from "@/unlayer/render";

const meta = {
  title: "Marketing Buck/Member Anniversary",
  component: MemberAnniversary,
  parameters: { layout: "fullscreen" },
  argTypes: {
    firstName: { control: "text" },
    years: { control: "text" },
    credit: { control: "text" },
    bookingUrl: { control: "text" },
  },
} satisfies Meta<typeof MemberAnniversary>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Celebrates a membership milestone with an anniversary clubhouse credit. */
export const Default: Story = {
  parameters: {
    unlayer: unlayerHandoffSafe(() => MemberAnniversaryUnlayer(), unlayerSource),
  },
};
