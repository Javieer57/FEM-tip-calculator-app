import type { Meta, StoryObj } from "@storybook/react";
import { CustomPercent } from "./CustomPercent";
import { fn } from "storybook/test";

export const ActionsData = {
  handleCustomPercentChange: fn(),
};

const meta = {
  component: CustomPercent,
  title: "CustomPercent",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    customPercent: {
      type: "number",
    },
  },
} satisfies Meta<typeof CustomPercent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customPercent: "",
  },
};

export const Filled: Story = {
  args: {
    customPercent: "12",
  },
};
