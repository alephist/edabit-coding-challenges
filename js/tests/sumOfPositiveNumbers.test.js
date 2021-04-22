const positiveSum = require("../sumOfPositiveNumbers");

const data = [
  ["-12#-33 13%14&-11", 27],
  ["22 13%14&-11-22 13 12 0", 74],
  ["3%4&-1 13 a 20 -2 b c", 40],
  ["2 3%-144&-1123 -2122", 5],
  ["-123 -8 1", 1],
  ["-122 2", 2],
  ["-121 0 3", 3],
  ["0 12 12 2", 26]
];

describe("positiveSum", () => {
  describe("Return sum of positive numbers from input string", () => {
    test.each(data)("positiveSum(%p) = %i", (str, result) => {
      let actual = positiveSum(str);

      expect(actual).toEqual(result);
    });
  });
});
