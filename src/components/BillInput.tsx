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
        className="text-dark-cyan-700 mb-2 inline-block font-bold"
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
          className="text-dark-cyan-900 bg-dark-cyan-200 placeholder:text-dark-cyan-300 inline-block w-full rounded p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold"
          placeholder="0"
          value={bill}
          onChange={handleBillChange}
        />
      </div>
    </div>
  );
}
