import type { Meta, StoryObj } from "@storybook/react";

import { Provider } from "react-redux";
import { createMockStore } from "../store/storeMock";
import { initialState } from "../store/features/calculatorSlice";
import { TipPercentGrid } from "./TipPercentGrid";

const meta = {
  component: TipPercentGrid,
  title: "TipPercentGrid",
  tags: ["autodocs"],
} satisfies Meta<typeof TipPercentGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const store = createMockStore({ ...initialState });

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
};

export const PercentSelected: Story = {
  decorators: [
    (Story) => {
      const store = createMockStore({ ...initialState });

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText("5%");
    await userEvent.click(input);
  },
};

export const CustomPercentSelected: Story = {
  decorators: [
    (Story) => {
      const store = createMockStore({ ...initialState });

      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByPlaceholderText("Custom");
    await userEvent.type(input, "123");
  },
};
