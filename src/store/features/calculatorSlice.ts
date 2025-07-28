import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  tipPercent: number;
}

const initialState: CalculatorState = {
  tipPercent: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setPercent: (state, action: PayloadAction<number>) => {
      state.tipPercent = action.payload;
    },
  },
});

export const { setPercent } = calculatorSlice.actions;

export default calculatorSlice.reducer;
