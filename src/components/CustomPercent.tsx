interface CustomPercentButtonProps {
  customPercent: string;
  handleCustomPercentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomPercent = ({
  customPercent,
  handleCustomPercentChange,
}: CustomPercentButtonProps) => {
  return (
    <>
      <label className="sr-only" htmlFor="custom-percent"></label>
      <input
        type="number"
        pattern="[0-9]*"
        min={0}
        name="custom-percent"
        className="inline-block w-full rounded bg-[#f3f8fb] p-2 px-4 pb-3 text-right text-2xl font-bold text-[#00494D] placeholder:text-[#9EBBBD]"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={handleCustomPercentChange}
      />
    </>
  );
};
