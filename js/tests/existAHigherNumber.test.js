const existHigher = require("../existAHigherNumber");

const data = [
  [[5, 3, 15, 22, 4], 10, true],
  [[1, 2, 3, 4, 5], 8, false],
  [[4, 3, 3, 3, 2, 2, 2], 4, true],
  [[2, 2, 2, 2], 5, false],
  [[], 0, false]
];

describe("existHigher", () => {
  describe("Return a boolean if there exist at least one number greater or equal to n", () => {
    test.each(data)("existHigher(%p, %i) = %s", (arr, n, result) => {
      let actual = existHigher(arr, n);

      expect(actual).toEqual(result);
    });
  });
});
