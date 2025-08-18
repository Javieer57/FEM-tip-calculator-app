import IconDollar from "../assets/icon-dollar.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setBill as setBillAction } from "../store/features/calculatorSlice";
import { removeLeadingZeros } from "../utils/removeLeadingZeros";

export const BillInput = () => {
  const bill = useAppSelector((state) => state.calculator.bill);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    const value = e.target.value;

    dispatch(setBillAction(removeLeadingZeros(value)));
  };

  return (
    <div className="space-y-2">
      <label
        className="text-dark-cyan-700 inline-block font-bold"
        htmlFor="bill"
      >
        Bill
      </label>

      <div className="relative">
        <img
          className="pointer-events-none absolute top-1/2 left-4 h-4.25 w-2.75 -translate-y-1/2 select-none"
          src={IconDollar}
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
          className="bg-dark-cyan-200 text-dark-cyan-900 placeholder:text-dark-cyan-300 inline-block w-full rounded-sm border-2 border-transparent p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold outline-hidden focus:border-cyan-400"
          placeholder="0"
          value={bill}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
