import { useState } from "react";
import { BillInput } from "./BillInput";
import { PeopleInput } from "./PeopleInput";
import { Resume } from "./Resume";
import { TipPercentGrid } from "./TipPercentGrid";

export const TipCalculator = () => {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [customPercent, setCustomPercent] = useState<string>("");
  const [selectedPercent, setSelectedPercent] = useState<string>("");

  const handleReset = () => {
    setBill("");
    setPeople("");
    setCustomPercent("");
  };

  return (
    <section className="grid gap-8 rounded-t-3xl bg-white p-8 md:grid-cols-2 md:gap-12 md:rounded-3xl">
      <div className="space-y-8">
        <BillInput bill={bill} setBill={setBill} />

        <TipPercentGrid
          customPercent={customPercent}
          selectedPercent={selectedPercent}
          setCustomPercent={setCustomPercent}
          setSelectedPercent={setSelectedPercent}
        />

        <PeopleInput people={people} setPeople={setPeople} />
      </div>

      <Resume
        bill={bill}
        people={people}
        tipPercent={customPercent === "" ? selectedPercent : customPercent}
        onReset={handleReset}
      />
    </section>
  );
};
