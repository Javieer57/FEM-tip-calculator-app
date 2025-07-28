import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  tip: {
    current: string;
    custom: string;
    selected: string;
  };
}

const initialState: CalculatorState = {
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

export const { setCustomPercent, setPredefinedPercent } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
