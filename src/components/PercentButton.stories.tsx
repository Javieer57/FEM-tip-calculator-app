import type { Meta, StoryObj } from "@storybook/react";

import { PercentButton } from "./PercentButton";
import { Provider } from "react-redux";
import { createMockStore } from "../store/storeMock";
import { initialState } from "../store/features/calculatorSlice";
import { fn } from "storybook/test";

export const ActionsData = {
  onSelectPercent: fn(),
};

const store = createMockStore({ ...initialState });

const meta = {
  component: PercentButton,
  title: "PercentButton",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    percent: {
      control: { min: 0 },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof PercentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { percent: 5, isSelected: false },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    isSelected: true,
  },
};
