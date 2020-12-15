const isAvgWhole = require("../averageOfAllElementsAsWholeNumber");

const data = [
  [[3, 5, 9], false],
  [[1, 1, 1, 1], true],
  [[1, 2, 3, 4, 5], true],
  [[5, 2, 4], false],
  [[11, 22], false],
  [[4, 1, 7, 9, 2, 5, 7, 2, 4], false]
];

describe("isAvgWhole", () => {
  describe("Return boolean if average of all elements is a whole number", () => {
    test.each(data)("isAvgWhole(%p) = %s", (arr, result) => {
      let actual = isAvgWhole(arr);

      expect(actual).toEqual(result);
    });
  });
});
