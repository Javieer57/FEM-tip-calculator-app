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
        type="text"
        name="custom-percent"
        className="inline-block w-full rounded bg-[#f3f8fb] p-2 px-4 pb-3 text-right text-2xl font-bold text-[#00494D] placeholder:text-[#5E7A7D]"
        id="custom-percent"
        placeholder="Custom"
        value={customPercent}
        onChange={handleCustomPercentChange}
      />
    </>
  );
};
