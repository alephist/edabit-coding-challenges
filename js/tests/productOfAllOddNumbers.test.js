const oddProduct = require("../productOfAllOddNumbers");

const data = [
  [[3, 4, 1, 1, 5], 15],
  [[5, 5, 8, 2, 4, 32], 25],
  [[1, 2, 1, 2, 1, 2, 1, 2], 1],
  [[0, 0, 0, 1], 1],
  [[1, 2, 2, 5, 2, 0], 5]
];

describe("oddProduct", () => {
  describe("Return product of all odd numbers", () => {
    test.each(data)("oddProduct(%p) = %i", (arr, result) => {
      let actual = oddProduct(arr);

      expect(actual).toEqual(result);
    });
  });
});
