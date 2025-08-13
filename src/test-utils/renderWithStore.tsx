import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../store/features/calculatorSlice";

export const renderWithStore = (ui: React.ReactNode, preloadedState = {}) => {
  const store = configureStore({
    reducer: { calculator: calculatorReducer },
    preloadedState,
  });

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
};
