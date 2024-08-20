interface PercentButtonProps {
  percent: string;
  selectedRadio: string | null;
  handleSelectedPercentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PercentButton = ({
  percent,
  selectedRadio,
  handleSelectedPercentChange,
}: PercentButtonProps) => {
  return (
    <label
      htmlFor={`id-${percent}`}
      className="inline-block w-full rounded bg-[#00494D] p-2 pb-3 text-center text-2xl font-bold text-white hover:bg-[#9fe8df] hover:text-[#00494D] has-[:checked]:bg-[#26C2AD]"
    >
      <input
        type="radio"
        name="tip-percent"
        id={`id-${percent}`}
        className="peer sr-only"
        value={percent}
        checked={selectedRadio === percent}
        onChange={handleSelectedPercentChange}
      />
      <span className="peer-checked:text-[#00494D]">{percent}%</span>
    </label>
  );
};
