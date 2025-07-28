import IconPerson from "../assets/icon-person.svg";
import { useAppDispatch } from "../store/hooks";
import { setPeople as setPeopleAction } from "../store/features/calculatorSlice";

interface PeopleInputProps {
  people: string;
  setPeople: (value: string) => void;
}

export const PeopleInput = ({ people, setPeople }: PeopleInputProps) => {
  const dispatch = useAppDispatch();
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    dispatch(setPeopleAction(e.target.value));
    setPeople(e.target.value);
  };

  return (
    <div>
      <label
        className="text-dark-cyan-700 mb-2 flex justify-between gap-2 font-bold"
        htmlFor="bill"
      >
        Number of People
        <span className="text-orange" aria-live="polite">
          {people === "0" && "Can't be zero"}
        </span>
      </label>

      <div className="relative">
        <img
          className="absolute top-1/2 left-4 h-4 w-3.25 -translate-y-1/2"
          src={IconPerson}
          alt=""
          width={13}
          height={16}
        />
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          name="people"
          id="people"
          className={`bg-dark-cyan-200 text-dark-cyan-900 placeholder:text-dark-cyan-300 inline-block w-full rounded-sm border-2 p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold outline-hidden ${people === "0" ? "border-orange" : "border-transparent focus:border-cyan-400"}`}
          placeholder="0"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
};
