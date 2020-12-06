const getAbsoluteSum = require("../absoluteSum");

const data = [
  [[2, -1, -3, 4, 8], 18],
  [[-1], 1],
  [[-1, -3, -5, -4, -10, 0], 23],
  [[8, 9, 10, 32, 101, -10], 170],
  [[500], 500]
];

describe("getAbsoluteSum", () => {
  describe("Return sum of absolute value of each element", () => {
    test.each(data)("getAbsoluteSum(%p) = %i", (arr, result) => {
      var actual = getAbsoluteSum(arr);

      expect(actual).toEqual(result);
    });
  });
});
