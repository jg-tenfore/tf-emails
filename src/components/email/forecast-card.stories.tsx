import type { Meta, StoryObj } from "@storybook/react-vite";
import { CloudRaining04, Snowflake01, Sun, SunSetting03 } from "@untitledui/icons";
import { ForecastCard } from "./forecast-card";

const meta = {
  title: "Email Components/Forecast Card",
  component: ForecastCard,
  parameters: { layout: "centered" },
  argTypes: { tempF: { control: { type: "range", min: 20, max: 110 } } },
  decorators: [
    (Story) => (
      <div className="w-[440px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ForecastCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Twilight: Story = {
  args: { summary: "Clear skies, light breeze", tempF: 58, icon: SunSetting03 },
};

export const Sunny: Story = {
  args: { summary: "Sunny, light wind", tempF: 74, icon: Sun },
};

export const Rainy: Story = {
  args: { summary: "Showers likely — pack a layer", tempF: 61, icon: CloudRaining04 },
};

export const Cold: Story = {
  args: { summary: "Frosty start, clearing later", tempF: 38, icon: Snowflake01 },
};

export const NoIcon: Story = {
  args: { summary: "Partly cloudy", tempF: 66 },
};
