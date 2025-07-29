import { resetCalculator } from "../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Resume = () => {
  const dispatch = useAppDispatch();
  const { tipAmount, totalPerPerson } = useAppSelector(
    (state) => state.calculator,
  );

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
          <td className="text-right text-3xl font-bold break-all text-cyan-400 sm:text-5xl">
            ${tipAmount.toFixed(2)}
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
          <td className="text-right text-3xl font-bold break-all text-cyan-400 sm:text-5xl">
            ${totalPerPerson.toFixed(2)}
          </td>
        </tr>
      </table>

      <button
        type="reset"
        className="text-dark-cyan-900 w-full rounded-sm bg-cyan-400 p-2 text-center text-xl font-bold uppercase hover:bg-cyan-200 focus:bg-cyan-200"
        onClick={() => dispatch(resetCalculator())}
      >
        Reset
      </button>
    </div>
  );
};
