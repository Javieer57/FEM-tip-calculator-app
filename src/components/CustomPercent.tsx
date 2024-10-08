interface CustomPercentButtonProps {
  customPercent: string;
  handleCustomPercentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomPercent = ({
  customPercent,
  handleCustomPercentChange,
}: CustomPercentButtonProps) => {
  return (
    <div>
      <label className="sr-only" htmlFor="custom-percent"></label>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name="custom-percent"
        className="inline-block h-full w-full rounded border-2 border-transparent bg-dark-cyan-200 p-2 py-1 text-right text-2xl font-bold text-dark-cyan-900 placeholder:text-dark-cyan-300 focus:border-cyan-400"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={handleCustomPercentChange}
      />
    </div>
  );
};
