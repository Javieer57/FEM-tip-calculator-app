import { TipCalculator } from "./components/TipCalculator";

function App() {
  return (
    <div className="h-dvh w-dvw pt-10 md:flex md:items-center md:justify-center md:pt-0">
      <main className="mx-auto max-w-[57.5rem] space-y-8 md:w-11/12 md:space-y-20">
        <h1 className="text-center text-2xl font-bold uppercase tracking-[0.4rem] text-[#00494D]">
          Spli
          <br />
          tter
        </h1>

        <TipCalculator />
      </main>
    </div>
  );
}

export default App;
