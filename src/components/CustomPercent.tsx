import { setCustomPercent } from "../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const CustomPercent = () => {
  const dispatch = useAppDispatch();
  const customPercent = useAppSelector((state) => state.calculator.tip.custom);

  return (
    <label htmlFor="custom-percent">
      <span className="sr-only">Custom percent tip</span>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name="custom-percent"
        className="bg-dark-cyan-200 text-dark-cyan-900 placeholder:text-dark-cyan-300 inline-block h-full w-full rounded-sm border-2 border-transparent p-2 py-1 text-right text-2xl font-bold outline-hidden focus:border-cyan-400"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={(e) => {
          if (!e.target.validity.valid) return;

          dispatch(setCustomPercent(e.target.value));
        }}
      />
    </label>
  );
};
