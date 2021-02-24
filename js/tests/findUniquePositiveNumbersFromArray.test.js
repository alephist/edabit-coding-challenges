const uniqueArr = require("../findUniquePositiveNumbersFromArray");

const data = [
  [
    [-5, 1, -7, -5, -2, 3, 3, -5, -1, -1],
    [1, 3]
  ],
  [
    [3, -3, -3, 5, 5, -6, -2, -4, -1, 3],
    [3, 5]
  ],
  [
    [-5, 3, 2, -4, 3, -1, -7, 2, 4, 4],
    [3, 2, 4]
  ],
  [
    [3, -5, 0, -5, 2, -1, 0, -4, -6, 1],
    [3, 2, 1]
  ],
  [
    [10, 6, -12, 13, 5, 5, 13, 6, 5],
    [10, 6, 13, 5]
  ],
  [
    [5, 10, -12, 5, 9, 5, 10, 9, 10, -12],
    [5, 10, 9]
  ],
  [[], []]
];

describe("uniqueArr", () => {
  describe("Return array of unique positive numbers", () => {
    test.each(data)("uniqueArr(%p) = %p", (arr, result) => {
      let actual = uniqueArr(arr);

      expect(actual).toEqual(result);
    });
  });
});
