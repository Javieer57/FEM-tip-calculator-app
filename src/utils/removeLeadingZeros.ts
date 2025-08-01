export const removeLeadingZeros = (value: string): string => {
  // https://stackoverflow.com/questions/594325/input-field-value-remove-leading-zeros
  return value.replace(/^0+(?!\.|$)/, "");
};
