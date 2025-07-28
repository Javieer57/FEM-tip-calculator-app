import { CalculatorState } from "../store/features/calculatorSlice";
import { calculateValues } from "./calculateValues";

export const tryCalculate = (state: CalculatorState) => {
  const { bill, people, tip } = state;
  const { tipAmount, totalPerPerson } = calculateValues(
    bill,
    people,
    tip.current,
  );

  state.tipAmount = tipAmount;
  state.totalPerPerson = totalPerPerson;
};
