import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer, {
  CalculatorState,
} from "../store/features/calculatorSlice";
import { Resume } from "./Resume";

describe("Resume", () => {
  it("should render 'reset' button as disabled by default", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });

    render(
      <Provider store={store}>
        <Resume />
      </Provider>,
    );

    const button = screen.getByRole("button", { name: "Reset" });

    expect(button).toBeDisabled();
  });

  it("should render 'reset' button as abled if total is not zero", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
      preloadedState: {
        calculator: {
          totalPerPerson: 100,
        } as CalculatorState,
      },
    });

    render(
      <Provider store={store}>
        <Resume />
      </Provider>,
    );

    const button = screen.getByRole("button", { name: "Reset" });

    expect(button).not.toBeDisabled();
  });

  it("should reset tip and total to zero and disable the button when clicked", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
      preloadedState: {
        calculator: {
          totalPerPerson: 100,
          tipAmount: 10,
        } as CalculatorState,
      },
    });
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <Resume />
      </Provider>,
    );

    const button = screen.getByRole("button", { name: "Reset" });
    const tipRow = screen.getByText("Tip Amount").closest("tr")!;
    const totalRow = screen.getByText("Total").closest("tr")!;

    expect(within(tipRow).getByText("$10.00")).toBeInTheDocument();
    expect(within(totalRow).getByText("$100.00")).toBeInTheDocument();

    await user.click(button);

    expect(within(tipRow).getByText("$0.00")).toBeInTheDocument();
    expect(within(totalRow).getByText("$0.00")).toBeInTheDocument();

    expect(store.getState().calculator.tipAmount).toBe(0);
    expect(store.getState().calculator.totalPerPerson).toBe(0);
    expect(button).toBeDisabled();
  });
});
