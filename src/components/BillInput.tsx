interface BillInputProps {
  bill: string;
  setBill: (value: string) => void;
}
export function BillInput({ bill, setBill }: BillInputProps) {
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    setBill(e.target.value);
  };

  return (
    <div>
      <label
        className="mb-2 inline-block font-bold text-[#5E7A7D]"
        htmlFor="bill"
      >
        Bill
      </label>

      <div className="relative">
        <img
          className="absolute left-4 top-1/2 h-[1.0625rem] w-[0.6875rem] -translate-y-1/2"
          src="/icon-dollar.svg"
          alt=""
          width={11}
          height={17}
        />
        <input
          type="text"
          inputMode="numeric"
          pattern="^\d*\.?\d*$"
          name="bill"
          id="bill"
          className="inline-block w-full rounded bg-[#f3f8fb] p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold text-[#00494D] placeholder:text-[#9EBBBD]"
          placeholder="0"
          value={bill}
          onChange={handleBillChange}
        />
      </div>
    </div>
  );
}
