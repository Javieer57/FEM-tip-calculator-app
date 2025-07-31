import type { Meta, StoryObj } from "@storybook/react";
import { CustomPercent } from "./CustomPercent";
import { Provider } from "react-redux";
import { initialState } from "../store/features/calculatorSlice";
import { createMockStore } from "../store/storeMock";

const store = createMockStore({ ...initialState });

const meta = {
  component: CustomPercent,
  title: "CustomPercent",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof CustomPercent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
