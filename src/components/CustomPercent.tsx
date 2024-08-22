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
        className="text-dark-cyan-900 bg-dark-cyan-200 placeholder:text-dark-cyan-300 inline-block w-full rounded border-2 border-transparent p-2 px-4 pb-3 text-right text-2xl font-bold leading-8 outline-none focus:border-cyan-400"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={handleCustomPercentChange}
      />
    </div>
  );
};
