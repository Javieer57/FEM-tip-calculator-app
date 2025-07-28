import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  bill: string;
  tip: {
    current: string;
    custom: string;
    selected: string;
  };
}

const initialState: CalculatorState = {
  bill: "",
  tip: {
    current: "",
    custom: "",
    selected: "",
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<string>) => {
      state.bill = action.payload;
    },
    setCustomPercent: (state, action: PayloadAction<string>) => {
      state.tip = {
        current: action.payload,
        selected: "",
        custom: action.payload,
      };
    },
    setPredefinedPercent: (state, action: PayloadAction<string>) => {
      state.tip = {
        current: action.payload,
        selected: action.payload,
        custom: "",
      };
    },
  },
});

export const { setCustomPercent, setPredefinedPercent, setBill } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
