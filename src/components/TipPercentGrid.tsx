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
  const percents: string[] = ["5", "10", "15", "25", "50"];

  const handleSelectedPercentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedPercent(e.target.value);
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
      <legend className="mb-4 inline-block font-bold text-[#5E7A7D]">
        Select Tip %
      </legend>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {percents.map((percent) => (
          <PercentButton
            key={percent}
            percent={percent}
            selectedRadio={selectedPercent}
            handleSelectedPercentChange={handleSelectedPercentChange}
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
