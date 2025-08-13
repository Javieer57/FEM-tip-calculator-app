import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer, {
  setPredefinedPercent,
} from "../store/features/calculatorSlice";
import { PercentButton } from "./PercentButton";

describe("PercentButton", () => {
  it("should select radio button on click", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <PercentButton percent={15} />
      </Provider>,
    );

    const button = screen.getByLabelText("15%");

    await user.click(button);
    expect(button).toBeChecked();
    expect(store.getState().calculator.tip.selected).toBe("15");
    expect(store.getState().calculator.tip.current).toBe("15");
  });

  it("should not be checked if selectedPercent is different", () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });

    store.dispatch(setPredefinedPercent("20"));

    render(
      <Provider store={store}>
        <PercentButton percent={15} />
      </Provider>,
    );

    expect(screen.getByLabelText("15%")).not.toBeChecked();
  });

  it("should uncheck other buttons when a new one is selected", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <PercentButton percent={10} />
        <PercentButton percent={15} />
      </Provider>,
    );

    const btn10 = screen.getByLabelText("10%");
    const btn15 = screen.getByLabelText("15%");

    await user.click(btn10);
    expect(btn10).toBeChecked();
    expect(btn15).not.toBeChecked();

    await user.click(btn15);
    expect(btn10).not.toBeChecked();
    expect(btn15).toBeChecked();
  });
});
