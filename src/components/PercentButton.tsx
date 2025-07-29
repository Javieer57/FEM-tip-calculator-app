interface PercentButtonProps {
  /** Value of the button */
  percent: number;
  /** Is the percent selected? */
  isSelected: boolean;
  /** Event to change the percent to selected */
  onSelectPercent: (value: number) => void;
}

export const PercentButton = ({
  percent,
  isSelected,
  onSelectPercent,
}: PercentButtonProps) => {
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
        checked={isSelected}
        onChange={(e) => onSelectPercent(parseInt(e.target.value))}
      />
      <span>{percent}%</span>
    </label>
  );
};
