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

  const cleanTotals = () => {
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  const calculateTotals = () => {
    const parsedBill = parseFloat(bill);
    const parsedPeople = parseInt(people);
    const parsedTipPercent = parseInt(tipPercent);
    const billTip = parsedBill * (parsedTipPercent / 100);

    setTotalPerPerson(parsedBill / parsedPeople);
    setTipPerPerson(billTip / parsedPeople);
  };

  useEffect(() => {
    if (bill === "" || people === "" || tipPercent === "") {
      cleanTotals();
      return;
    }

    if (people === "0") {
      cleanTotals();
      return;
    }

    calculateTotals();
  }, [bill, people, tipPercent]);

  return (
    <div className="bg-dark-cyan-900 flex flex-col space-y-8 rounded-xl p-5 pt-9 sm:justify-between sm:p-10">
      <table className="w-full">
        <tr className="border-b-[1.25rem] border-b-transparent sm:border-b-[2rem]">
          <td>
            <span className="font-bold text-white">Tip Amount</span>
            <br />
            <span className="text-dark-cyan-600 text-sm font-bold">
              / person
            </span>
          </td>
          <td className="break-all text-right text-3xl font-bold text-cyan-400 sm:text-5xl">
            ${tipPerPerson.toFixed(2)}
          </td>
        </tr>

        <tr>
          <td>
            <span className="font-bold text-white">Total</span>
            <br />
            <span className="text-dark-cyan-600 text-sm font-bold">
              / person
            </span>
          </td>
          <td className="break-all text-right text-3xl font-bold text-cyan-400 sm:text-5xl">
            ${totalPerPerson.toFixed(2)}
          </td>
        </tr>
      </table>

      <button
        type="reset"
        className="text-dark-cyan-900 w-full rounded bg-cyan-400 p-2 text-center text-xl font-bold uppercase hover:bg-cyan-200 focus:bg-cyan-200"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};
