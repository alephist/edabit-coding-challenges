const negativeSum = require("../sumOfNegativeNumbers");

const data = [
  ["-12 13%14&-11", -23],
  ["-12 13%14&-2 0 12 -4", -18],
  ["33%14&-1 12 a 21 -2 b c", -3],
  ["22 13%14&-11-22 13 12", -33],
  ["-12 -8", -20]
];

describe("negativeSum", () => {
  describe("Return sum of negative numbers from a string", () => {
    test.each(data)("negativeSum(%p) = %i", (chars, result) => {
      let actual = negativeSum(chars);

      expect(actual).toEqual(result);
    });
  });
});
