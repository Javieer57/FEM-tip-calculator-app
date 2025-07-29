import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {calculator: calculatorReducer}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
