import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { TipPercentGrid } from "./TipPercentGrid";
import { renderWithStore } from "../test-utils/renderWithStore";

describe("TipPercentGrid", () => {
  const PERCENT_SELECTED = "15";
  const CUSTOM_VALUE = "20";

  it("should uncheck the predefined percentage and set the custom value when typing in CustomPercent", async () => {
    const { store } = renderWithStore(<TipPercentGrid />, {
      calculator: {
        tip: {
          current: PERCENT_SELECTED,
          selected: PERCENT_SELECTED,
          custom: "",
        },
      },
    });
    const user = userEvent.setup();

    const customInput = screen.getByLabelText("Custom percent tip");
    const percentButton = screen.getByLabelText(`${PERCENT_SELECTED}%`);

    expect(percentButton).toBeChecked();
    expect(customInput).toHaveValue("");

    await user.type(customInput, CUSTOM_VALUE);

    expect(percentButton).not.toBeChecked();
    expect(customInput).toHaveValue(CUSTOM_VALUE);
    expect(store.getState().calculator.tip).toEqual({
      current: CUSTOM_VALUE,
      custom: CUSTOM_VALUE,
      selected: "",
    });
  });

  it("should uncheck the custom value and select the predefined percentage when clicking a PercentButton", async () => {
    const { store } = renderWithStore(<TipPercentGrid />, {
      calculator: {
        tip: {
          current: CUSTOM_VALUE,
          selected: "",
          custom: CUSTOM_VALUE,
        },
      },
    });
    const user = userEvent.setup();

    const customInput = screen.getByLabelText("Custom percent tip");
    const percentButton = screen.getByLabelText(`${PERCENT_SELECTED}%`);

    expect(percentButton).not.toBeChecked();
    expect(customInput).toHaveValue(CUSTOM_VALUE);

    await user.click(percentButton);

    expect(percentButton).toBeChecked();
    expect(customInput).toHaveValue("");
    expect(store.getState().calculator.tip).toEqual({
      current: PERCENT_SELECTED,
      custom: "",
      selected: PERCENT_SELECTED,
    });
  });

  it("should render 5 predefined percentage buttons and one CustomPercent input", () => {
    renderWithStore(<TipPercentGrid />);

    const radios = screen.getAllByRole("radio");
    const text = screen.getAllByRole("textbox");
    expect(radios).toHaveLength(5);
    expect(text).toHaveLength(1);

    [5, 10, 15, 25, 50].forEach((percent) => {
      expect(screen.getByLabelText(`${percent}%`)).toBeInTheDocument();
    });
    expect(screen.getByLabelText("Custom percent tip")).toBeInTheDocument();
  });
});
