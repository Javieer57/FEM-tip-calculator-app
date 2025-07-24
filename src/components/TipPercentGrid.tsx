import { percents } from "../types/percents";
import { CustomPercent } from "./CustomPercent";
import { PercentButton } from "./PercentButton";

interface TipPercentGriProps {
  customPercent: string;
  selectedPercent: string;
  setCustomPercent: (value: string) => void;
  setSelectedPercent: (value: string) => void;
}

export const TipPercentGrid = ({
  selectedPercent,
  customPercent,
  setCustomPercent,
  setSelectedPercent,
}: TipPercentGriProps) => {
  const percents: percents[] = ["5", "10", "15", "25", "50"];

  const handleSelectedPercentChange = (percent: string) => {
    setSelectedPercent(percent);
    setCustomPercent("");
  };

  const handleCustomPercentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!e.target.validity.valid) return;
    setCustomPercent(e.target.value);

    if (e.target.value) {
      setSelectedPercent("");
    }
  };

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
            isSelected={selectedPercent === percent}
            onChange={handleSelectedPercentChange}
          />
        ))}

        <CustomPercent
          customPercent={customPercent}
          handleCustomPercentChange={handleCustomPercentChange}
        />
      </div>
    </fieldset>
  );
};
