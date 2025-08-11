import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BillInput } from "./BillInput";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../store/features/calculatorSlice";

describe("BillInput", () => {
  it.each([
    ["0", "0"],
    ["000123", "123"],
    ["0000.45", "0.45"],
    ["1.5", "1.5"],
    ["00123.45", "123.45"],
    ["asd1asd", "1"],
    ["asdads23asdasd.12123asdasd", "23.12123"],
    ["!$%&*", ""],
    ["12!3@.4#5$", "123.45"],
  ])('typing "%s" results in "%s"', async (input, expected) => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });

    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>,
    );
    const billInput = screen.getByLabelText("Bill");

    await user.type(billInput, input);
    expect(billInput).toHaveValue(expected);
    expect(store.getState().calculator.bill).toBe(expected);
  });
});
