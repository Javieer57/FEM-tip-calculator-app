import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { PercentButton } from "./PercentButton";
import { renderWithStore } from "../test-utils/renderWithStore";

describe("PercentButton", () => {
  it("should select radio button on click", async () => {
    const { store } = renderWithStore(<PercentButton percent={15} />);
    const user = userEvent.setup();

    const button = screen.getByLabelText("15%");

    await user.click(button);
    expect(button).toBeChecked();
    expect(store.getState().calculator.tip.selected).toBe("15");
    expect(store.getState().calculator.tip.current).toBe("15");
  });

  it("should not be checked if selectedPercent is different", () => {
    renderWithStore(<PercentButton percent={15} />, {
      calculator: {
        tip: {
          current: "20",
          selected: "20",
        },
      },
    });

    expect(screen.getByLabelText("15%")).not.toBeChecked();
  });

  it("should uncheck other buttons when a new one is selected", async () => {
    renderWithStore(
      <>
        <PercentButton percent={10} />
        <PercentButton percent={15} />
      </>,
    );

    const user = userEvent.setup();

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
