import { useState } from "react";
import { PercentButton } from "./components/PercentButton";
import { CustomPercent } from "./components/CustomPercent";

function App() {
  const [customPercent, setCustomPercent] = useState("");
  const [selectedPercent, setSelectedPercent] = useState<string | null>(null);
  const percents: string[] = ["5", "10", "15", "25", "50"];

  const handleSelectedPercentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedPercent(e.target.value);
    setCustomPercent("");
  };

  const handleCustomPercentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomPercent(e.target.value);

    if (e.target.value) {
      setSelectedPercent(null);
    }
  };

  return (
    <>
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
            name="bill"
            id="bill"
            className="inline-block w-full rounded bg-[#f3f8fb] p-2 px-4 pb-3 pl-10 text-right text-2xl font-bold text-[#00494D] placeholder:text-[#9EBBBD]"
            placeholder="0"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {percents.map((percent) => (
          <PercentButton
            key={percent}
            percent={percent}
            selectedRadio={selectedPercent}
            handleSelectedPercentChange={handleSelectedPercentChange}
          />
        ))}

        <CustomPercent
          customPercent={customPercent}
          handleCustomPercentChange={handleCustomPercentChange}
        />
      </div>
    </>
  );
}

export default App;
