import { setPredefinedPercent } from "../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface PercentButtonProps {
  percent: number;
}

export const PercentButton = ({ percent }: PercentButtonProps) => {
  const dispatch = useAppDispatch();
  const selectedPercent = useAppSelector(
    (state) => state.calculator.tip.selected,
  );

  const handleChange = (value: string) => {
    dispatch(setPredefinedPercent(value));
  };

  return (
    <label className="bg-dark-cyan-900 hover:text-dark-cyan-900 has-checked:text-dark-cyan-900 inline-block w-full rounded-sm p-2 pb-3 text-center text-2xl font-bold text-white select-none hover:bg-cyan-200 has-checked:bg-cyan-400 has-focus-visible:bg-cyan-200">
      <input
        type="radio"
        name="tip-percent"
        className="sr-only"
        value={percent}
        checked={selectedPercent === percent.toString()}
        onChange={(e) => handleChange(e.target.value)}
      />
      {percent}%
    </label>
  );
};
