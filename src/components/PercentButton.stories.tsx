import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "storybook/test";

import { PercentButton } from "./PercentButton";

export const ActionsData = {
  onChange: fn(),
};

const meta = {
  component: PercentButton,
  title: "PercentButton",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    percent: {
      control: {
        type: "number",
        min: 0,
      },
    },
  },
} satisfies Meta<typeof PercentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: "5",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    isSelected: true,
  },
};
