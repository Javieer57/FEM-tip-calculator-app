import { CustomPercent } from "./CustomPercent";
import { PercentButton } from "./PercentButton";

export const TipPercentGrid = () => {
  const percents: number[] = [5, 10, 15, 25, 50];

  return (
    <fieldset>
      <legend className="text-dark-cyan-700 mb-4 inline-block font-bold">
        Select Tip %
      </legend>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {percents.map((percent) => (
          <PercentButton key={percent} percent={percent} />
        ))}

        <CustomPercent />
      </div>
    </fieldset>
  );
};
