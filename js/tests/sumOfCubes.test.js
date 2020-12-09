const getSum = require("../sumOfCubes");

const data = [
  [[1, 5, 9], 855],
  [[3, 4, 5], 216],
  [[1, 1, 1], 3],
  [[2], 8],
  [[5, 1, 2], 134],
  [[32], 32768],
  [[5, 9, 4, 4, 9], 1711],
  [[0, 1, 2], 9],
  [[], 0]
];

describe("getSum", () => {
  describe("Return sum of cubed elements from array", () => {
    test.each(data)("getSum(%p) = %i", (arr, result) => {
      var actual = getSum(arr);

      expect(actual).toEqual(result);
    });
  });
});
