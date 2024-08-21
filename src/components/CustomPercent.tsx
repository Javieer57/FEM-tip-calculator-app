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
        className="inline-block w-full rounded bg-[#f3f8fb] p-2 px-4 pb-3 text-right text-2xl font-bold leading-8 text-[#00494D] placeholder:text-[#9EBBBD]"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={handleCustomPercentChange}
      />
    </div>
  );
};
