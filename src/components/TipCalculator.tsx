import { BillInput } from "./BillInput";
import { PeopleInput } from "./PeopleInput";
import { Resume } from "./Resume";
import { TipPercentGrid } from "./TipPercentGrid";

export const TipCalculator = () => {
  return (
    <article className="grid gap-8 rounded-t-3xl bg-white p-8 md:grid-cols-2 md:gap-12 md:rounded-3xl">
      <div className="space-y-8">
        <BillInput />

        <TipPercentGrid />

        <PeopleInput />
      </div>

      <Resume />
    </article>
  );
};
