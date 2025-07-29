import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tryCalculate } from "../../utils/tryCalculate";

export interface CalculatorState {
  bill: string;
  people: string;
  tip: {
    current: string;
    custom: string;
    selected: string;
  };
  tipAmount: number;
  totalPerPerson: number;
}

export const initialState: CalculatorState = {
  bill: "",
  people: "",
  tip: {
    current: "",
    custom: "",
    selected: "",
  },
  tipAmount: 0,
  totalPerPerson: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<string>) => {
      state.bill = action.payload;
      tryCalculate(state);
    },
    setPeople: (state, action: PayloadAction<string>) => {
      state.people = action.payload;
      tryCalculate(state);
    },
    setCustomPercent: (state, action: PayloadAction<string>) => {
      state.tip = {
        current: action.payload,
        selected: "",
        custom: action.payload,
      };
      tryCalculate(state);
    },
    setPredefinedPercent: (state, action: PayloadAction<string>) => {
      state.tip = {
        current: action.payload,
        selected: action.payload,
        custom: "",
      };
      tryCalculate(state);
    },
    resetCalculator: () => initialState,
  },
});

export const {
  setCustomPercent,
  setPredefinedPercent,
  setBill,
  setPeople,
  resetCalculator,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
