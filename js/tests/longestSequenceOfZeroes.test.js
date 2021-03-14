const longestZero = require("../longestSequenceOfZeroes");

const data = [
  ["01100001011000", "0000"],
  ["100100100", "00"],
  ["111101", "0"],
  ["1000000000011101", "0000000000"],
  ["100001110000100000", "00000"],
  ["101001101", "00"],
  ["101010101", "0"],
  ["1001001", "00"],
  ["111111", ""]
];

describe("longestZero", () => {
  describe("Return longest sequence of zeroes", () => {
    test.each(data)("longestZero(%p) = %p", (s, result) => {
      let actual = longestZero(s);

      expect(actual).toEqual(result);
    });
  });
});
