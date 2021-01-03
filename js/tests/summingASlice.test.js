const sliceSum = require("../summingASlice");

const data = [
  [[1, 3, 2], 2, 4],
  [[4, 2, 5, 7], 4, 18],
  [[3, 6, 2], 0, 0],
  [[2, 4], 9, 6],
  [[-5, 2], 2, -3],
  [[0, 0, 0, 3, 4], 3, 0]
];

describe("sliceSum", () => {
  describe("Return sum of first n numbers in an array", () => {
    test.each(data)("sliceSum(%p, %i) = %i", (arr, n, result) => {
      let actual = sliceSum(arr, n);

      expect(actual).toEqual(result);
    });
  });
});
