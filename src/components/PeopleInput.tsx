interface PeopleInputProps {
  people: string;
  handlePeopleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PeopleInput = ({
  people,
  handlePeopleChange,
}: PeopleInputProps) => {
  return (
    <div>
      <label
        className="mb-2 flex justify-between gap-2 font-bold text-[#5E7A7D]"
        htmlFor="bill"
      >
        Number of People
        <span className="text-[#C57D71]" aria-live="polite">
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
          className={`inline-block w-full rounded border-2 bg-[#f3f8fb] p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold text-[#00494D] placeholder:text-[#9EBBBD] ${people === "0" ? "border-[#C57D71]" : "border-transparent"}`}
          placeholder="0"
          value={people}
          onChange={handlePeopleChange}
        />
      </div>
    </div>
  );
};
