import { useState } from "react";
import { PercentButton } from "./components/PercentButton";
import { CustomPercent } from "./components/CustomPercent";
import { PeopleInput } from "./components/PeopleInput";
import { BillInput } from "./components/BillInput";
import { Resume } from "./components/Resume";

function App() {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState<string>("");
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
    if (!e.target.validity.valid) return;
    setCustomPercent(e.target.value);

    if (e.target.value) {
      setSelectedPercent(null);
    }
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    setBill(e.target.value);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) return;
    setPeople(e.target.value);
  };

  return (
    <main className="grid gap-8 sm:grid-cols-2 sm:gap-12">
      <section className="space-y-8">
        <BillInput bill={bill} handleBillChange={handleBillChange} />

        <fieldset>
          <legend className="mb-4 inline-block font-bold text-[#5E7A7D]">
            Select Tip %
          </legend>

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
        </fieldset>

        <PeopleInput people={people} handlePeopleChange={handlePeopleChange} />
      </section>

      <Resume tipPerPerson={0} totalPerPerson={0} />
    </main>
  );
}

export default App;
