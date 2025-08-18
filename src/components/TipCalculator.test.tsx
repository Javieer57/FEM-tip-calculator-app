import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/react";
import { renderWithStore } from "../test-utils/renderWithStore";
import { TipCalculator } from "./TipCalculator";

describe("Calculator Integration", () => {
  it("should calculate tip and total per person correctly in a full flow", async () => {
    const user = userEvent.setup();

    renderWithStore(<TipCalculator />);

    // Enter the bill
    const billInput = screen.getByLabelText("Bill");
    await user.clear(billInput);
    await user.type(billInput, "100");

    // Enter number of people
    const peopleInput = screen.getByLabelText("Number of People");
    await user.clear(peopleInput);
    await user.type(peopleInput, "4");

    // Select tip percentage (e.g., 15%)
    const percentButton = screen.getByLabelText("15%");
    await user.click(percentButton);

    // Validate result in Resume
    const tipRow = screen.getByText("Tip Amount").closest("tr")!;
    const totalRow = screen.getByText("Total").closest("tr")!;

    // Tip Amount = (100 * 0.15) / 4 = 3.75
    expect(within(tipRow).getByText("$3.75")).toBeInTheDocument();
    // Total = (100 / 4) + Tip Amount = 25 + 3.75 = 28.75
    expect(within(totalRow).getByText("$28.75")).toBeInTheDocument();
  });

  it("should reset all values and disable the reset button when clicked", async () => {
    const user = userEvent.setup();

    renderWithStore(<TipCalculator />);

    // Enter the bill
    const billInput = screen.getByLabelText("Bill");
    await user.clear(billInput);
    await user.type(billInput, "100");

    // Enter number of people
    const peopleInput = screen.getByLabelText("Number of People");
    await user.clear(peopleInput);
    await user.type(peopleInput, "4");

    // Select tip percentage (e.g., 15%)
    const percentButton = screen.getByLabelText("15%");
    await user.click(percentButton);

    // Validate result in Resume
    const tipRow = screen.getByText("Tip Amount").closest("tr")!;
    const totalRow = screen.getByText("Total").closest("tr")!;

    expect(within(tipRow).getByText("$3.75")).toBeInTheDocument();
    expect(within(totalRow).getByText("$28.75")).toBeInTheDocument();

    // Reset results
    const resetButton = screen.getByRole("button", { name: "Reset" });
    await user.click(resetButton);

    //  Confirm state after reset
    expect(within(tipRow).getByText("$0.00")).toBeInTheDocument();
    expect(within(totalRow).getByText("$0.00")).toBeInTheDocument();
    expect(percentButton).not.toBeChecked();
    expect(resetButton).toBeDisabled();

    expect(billInput).toHaveValue("");
    expect(peopleInput).toHaveValue("");
  });

  it("should show an error when people is 0 and keep totals unchanged", async () => {
    const user = userEvent.setup();

    renderWithStore(<TipCalculator />);

    // Enter the bill
    const billInput = screen.getByLabelText("Bill");
    await user.clear(billInput);
    await user.type(billInput, "100");

    // Select tip percentage (e.g., 15%)
    const percentButton = screen.getByLabelText("15%");
    await user.click(percentButton);

    // Enter number of people
    const peopleInput = screen.getByLabelText("Number of People");
    await user.clear(peopleInput);
    await user.type(peopleInput, "0");

    // Error message should be visible
    expect(screen.getByText("Can't be zero")).toBeInTheDocument();

    // Totals should remain at $0.00
    const tipRow = screen.getByText("Tip Amount").closest("tr")!;
    const totalRow = screen.getByText("Total").closest("tr")!;

    expect(within(tipRow).getByText("$0.00")).toBeInTheDocument();
    expect(within(totalRow).getByText("$0.00")).toBeInTheDocument();
  });
});
