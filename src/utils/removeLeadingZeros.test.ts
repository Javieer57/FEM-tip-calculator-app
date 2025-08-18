import { removeLeadingZeros } from "./removeLeadingZeros";

describe("removeLeadingZeros", () => {
  it.each([
    ["", ""], // empty
    ["000000", "0"], // only zeros
    ["0000001", "1"], // integer with leading zeros
    ["000123456", "123456"], // large number with leading zeros
    ["0.1", "0.1"], // valid decimal
    ["0000.5", "0.5"], // decimal with extra leading zeros
    ["123.45", "123.45"], // no leading zeros
    ["0.", "0."], // zero with a dot
    ["", ""], // empty string
    ["abc", "abc"], // non-numeric text
  ])('converts "%s" → "%s"', (input, expected) => {
    expect(removeLeadingZeros(input)).toBe(expected);
  });
});
