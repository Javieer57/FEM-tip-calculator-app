import { setPredefinedPercent } from "../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { CustomPercent } from "./CustomPercent";
import { PercentButton } from "./PercentButton";

export const TipPercentGrid = () => {
  const percents: number[] = [5, 10, 15, 25, 50];

  const dispatch = useAppDispatch();
  const selectedPercent = useAppSelector(
    (state) => state.calculator.tip.selected,
  );

  return (
    <fieldset>
      <legend className="text-dark-cyan-700 mb-4 inline-block font-bold">
        Select Tip %
      </legend>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {percents.map((percent) => (
          <PercentButton
            key={percent}
            percent={percent}
            isSelected={selectedPercent === percent.toString()}
            onSelectPercent={(value: number) => {
              dispatch(setPredefinedPercent(value.toString()));
            }}
          />
        ))}

        <CustomPercent />
      </div>
    </fieldset>
  );
};
