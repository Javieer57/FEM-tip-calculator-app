export const calculateValues = (
  bill: string,
  people: string,
  tipPercent: string,
) => {
  const billAmount = parseFloat(bill);
  const peopleCount = parseInt(people);
  const tip = parseFloat(tipPercent);

  if (
    isNaN(billAmount) ||
    isNaN(peopleCount) ||
    isNaN(tip) ||
    billAmount <= 0 ||
    peopleCount <= 0 ||
    tip < 0
  ) {
    return { tipAmount: 0, totalPerPerson: 0 };
  }

  const tipAmount = (billAmount * (tip / 100)) / peopleCount;
  const totalPerPerson = billAmount / peopleCount;

  return {
    tipAmount: parseFloat(tipAmount.toFixed(2)),
    totalPerPerson: parseFloat(totalPerPerson.toFixed(2)),
  };
};
