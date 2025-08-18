import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/react";
import { Resume } from "./Resume";
import { renderWithStore } from "../test-utils/renderWithStore";

describe("Resume", () => {
  it("should render 'reset' button as disabled by default", async () => {
    renderWithStore(<Resume />);

    const button = screen.getByRole("button", { name: "Reset" });

    expect(button).toBeDisabled();
  });

  it("should render 'reset' button as abled if total is not zero", async () => {
    renderWithStore(<Resume />, {
      calculator: {
        totalPerPerson: 100,
      },
    });

    const button = screen.getByRole("button", { name: "Reset" });

    expect(button).not.toBeDisabled();
  });

  it("should reset tip and total to zero and disable the button when clicked", async () => {
    const { store } = renderWithStore(<Resume />, {
      calculator: {
        tipAmount: 10,
        totalPerPerson: 100,
      },
    });

    const user = userEvent.setup();

    const tipRow = screen.getByText("Tip Amount").closest("tr")!;
    const totalRow = screen.getByText("Total").closest("tr")!;
    const button = screen.getByRole("button", { name: "Reset" });

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
