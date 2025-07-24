interface PercentButtonProps {
  /** Percent of the button */
  percent: string;
  /** This percent is the one selected */
  isSelected: boolean;
  /** Event to change current percent */
  onChange: (value: string) => void;
}

export const PercentButton = ({
  percent,
  isSelected,
  onChange,
}: PercentButtonProps) => {
  return (
    <label
      htmlFor={`id-${percent}`}
      className="bg-dark-cyan-900 hover:text-dark-cyan-900 inline-block w-full rounded-sm p-2 pb-3 text-center text-2xl font-bold text-white hover:bg-cyan-200 has-checked:bg-cyan-400"
    >
      <input
        type="radio"
        name="tip-percent"
        id={`id-${percent}`}
        className="peer sr-only"
        value={percent}
        checked={isSelected}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="peer-checked:text-dark-cyan-900">{percent}%</span>
    </label>
  );
};
