interface ResumeProps {
  tipPerPerson: number;
  totalPerPerson: number;
}

export const Resume = ({ tipPerPerson, totalPerPerson }: ResumeProps) => {
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

      <input
        className="w-full rounded bg-[#26C0AB] p-2 text-center text-xl font-bold uppercase text-[#00494D]"
        type="reset"
        value="Reset"
      />
    </div>
  );
};
