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
