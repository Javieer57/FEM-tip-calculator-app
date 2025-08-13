import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { CustomPercent } from "./CustomPercent";
import { renderWithStore } from "../test-utils/renderWithStore";

describe("CustomPercent", () => {
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
    'typing "%s" in the custom tip percent input results in "%s"',
    async (input, expected) => {
      const { store } = renderWithStore(<CustomPercent />);
      const user = userEvent.setup();

      const customTipInput = screen.getByPlaceholderText("Custom");

      await user.type(customTipInput, input);
      expect(customTipInput).toHaveValue(expected);
      expect(store.getState().calculator.tip.custom).toBe(expected);
      expect(store.getState().calculator.tip.current).toBe(expected);
    },
  );
});
