import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer, { CalculatorState } from "./features/calculatorSlice";

export const createMockStore = (calculatorState: CalculatorState) => {
  return configureStore({
    reducer: {
      calculator: calculatorReducer,
    },
    preloadedState: {
      calculator: calculatorState,
    },
  });
};
