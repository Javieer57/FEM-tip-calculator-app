import { useEffect, useState } from "react";

interface ResumeProps {
  bill: string;
  people: string;
  tipPercent: string;
  onReset: () => void;
}

export const Resume = ({ bill, people, tipPercent, onReset }: ResumeProps) => {
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  useEffect(() => {
    if (bill === "" || people === "" || tipPercent === "") {
      setTipPerPerson(0);
      setTotalPerPerson(0);
      return;
    }

    const parsedBill = parseFloat(bill);
    const parsedPeople = parseInt(people);
    const parsedTipPercent = parseInt(tipPercent);
    const billTip = parsedBill * (parsedTipPercent / 100);

    setTotalPerPerson(parsedBill / parsedPeople);
    setTipPerPerson(billTip / parsedPeople);
  }, [bill, people, tipPercent]);

  return (
    <div className="flex flex-col space-y-8 rounded-xl bg-[#00494D] p-5 pt-9 sm:justify-between sm:p-10">
      <table className="w-full">
        <tr className="border-b-[1.25rem] border-b-transparent sm:border-b-[2rem]">
          <td>
            <span className="font-bold text-white">Tip Amount</span>
            <br />
            <span className="text-sm font-bold text-[#7F9C9F]">/ person</span>
          </td>
          <td className="break-all text-right text-3xl font-bold text-[#26C0AB] sm:text-5xl">
            ${tipPerPerson.toFixed(2)}
          </td>
        </tr>

        <tr>
          <td>
            <span className="font-bold text-white">Total</span>
            <br />
            <span className="text-sm font-bold text-[#7F9C9F]">/ person</span>
          </td>
          <td className="break-all text-right text-3xl font-bold text-[#26C0AB] sm:text-5xl">
            ${totalPerPerson.toFixed(2)}
          </td>
        </tr>
      </table>

      <button
        type="reset"
        className="w-full rounded bg-[#26C0AB] p-2 text-center text-xl font-bold uppercase text-[#00494D]"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};
