interface PeopleInputProps {
  people: string;
  setPeople: (value: string) => void;
}

export const PeopleInput = ({ people, setPeople }: PeopleInputProps) => {
  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
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
          className="absolute left-4 top-1/2 h-4 w-[0.8125rem] -translate-y-1/2"
          src="/icon-person.svg"
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
          className={`text-dark-cyan-900 bg-dark-cyan-200 placeholder:text-dark-cyan-300 inline-block w-full rounded border-2 p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold ${people === "0" ? "border-orange" : "border-transparent"}`}
          placeholder="0"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
};
