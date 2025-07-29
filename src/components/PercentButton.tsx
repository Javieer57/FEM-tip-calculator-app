import { setPredefinedPercent } from "../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface PercentButtonProps {
  /** Percent of the button */
  percent: string;
}

export const PercentButton = ({ percent }: PercentButtonProps) => {
  const dispatch = useAppDispatch();
  const selectedPercent = useAppSelector(
    (state) => state.calculator.tip.selected,
  );

  return (
    <label
      htmlFor={`id-${percent}`}
      className="bg-dark-cyan-900 hover:text-dark-cyan-900 has-checked:text-dark-cyan-900 inline-block w-full rounded-sm p-2 pb-3 text-center text-2xl font-bold text-white hover:bg-cyan-200 has-checked:bg-cyan-400"
    >
      <input
        type="radio"
        name="tip-percent"
        id={`id-${percent}`}
        className="sr-only"
        value={percent}
        checked={selectedPercent === percent}
        onChange={(e) => {
          dispatch(setPredefinedPercent(e.target.value));
        }}
      />
      <span>{percent}%</span>
    </label>
  );
};
