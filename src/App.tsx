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
  const [selectedPercent, setSelectedPercent] = useState<string>("");
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
      setSelectedPercent("");
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
    <div className="h-dvh w-dvw pt-10 md:flex md:items-center md:justify-center md:pt-0">
      <main className="mx-auto max-w-[57.5rem] space-y-8 md:w-11/12 md:space-y-20">
        <h1
          style={{
            letterSpacing: "0.4rem",
          }}
          className="text-center text-2xl font-bold uppercase text-[#00494D]"
        >
          Spli
          <br />
          tter
        </h1>

        <form className="grid gap-8 rounded-t-3xl bg-white p-8 md:grid-cols-2 md:gap-12 md:rounded-3xl">
          <div className="space-y-8">
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

            <PeopleInput
              people={people}
              handlePeopleChange={handlePeopleChange}
            />
          </div>

          <Resume
            bill={bill}
            people={people}
            tipPercent={customPercent === "" ? selectedPercent : customPercent}
            onReset={() => {
              setBill("");
              setPeople("");
              setCustomPercent("");
            }}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
