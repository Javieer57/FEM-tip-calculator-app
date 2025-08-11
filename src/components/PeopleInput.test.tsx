import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../store/features/calculatorSlice";
import { PeopleInput } from "./PeopleInput";

describe("PeopleInput", () => {
  it.each([
    ["0", "0"],
    ["000123", "123"],
    ["0000.45", "45"],
    ["1.5", "15"],
    ["0012345", "12345"],
    ["asd1asd", "1"],
    ["asdads23asdasd.12123asdasd", "2312123"],
    ["!$%&*", ""],
    ["12!3@.4#5$", "12345"],
  ])(
    'typing "%s" in the people input results in "%s"',
    async (input, expected) => {
      const store = configureStore({
        reducer: { calculator: calculatorReducer },
      });

      const user = userEvent.setup();
      render(
        <Provider store={store}>
          <PeopleInput />
        </Provider>,
      );
      const peopleInput = screen.getByLabelText("Number of People");

      await user.type(peopleInput, input);
      expect(peopleInput).toHaveValue(expected);
    },
  );

  it("should show and hide error for zero people", async () => {
    const store = configureStore({
      reducer: { calculator: calculatorReducer },
    });
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <PeopleInput />
      </Provider>,
    );

    const peopleInput = screen.getByLabelText("Number of People");

    await user.type(peopleInput, "0");
    expect(screen.getByText("Can't be zero")).toBeInTheDocument();
    expect(peopleInput).toHaveClass("border-orange");

    await user.type(peopleInput, "1");
    expect(screen.queryByText("Can't be zero")).not.toBeInTheDocument();
    expect(peopleInput).toHaveClass("border-transparent");
  });
});
