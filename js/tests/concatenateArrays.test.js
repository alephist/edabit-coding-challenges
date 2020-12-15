const concat = require("../concatenateArrays");

const data = [
  [
    [1, 3, 5],
    [2, 6, 8],
    [1, 3, 5, 2, 6, 8]
  ],
  [
    [7, 8],
    [10, 9, 1, 1, 2],
    [7, 8, 10, 9, 1, 1, 2]
  ],
  [
    [4, 5, 1],
    [3, 3, 3, 3, 3],
    [4, 5, 1, 3, 3, 3, 3, 3]
  ]
];

describe("concat", () => {
  describe("Concatenate two arrays", () => {
    test.each(data)("concat(%p, %p) = %p", (arr1, arr2, result) => {
      let actual = concat(arr1, arr2);

      expect(actual).toEqual(result);
    });
  });
});
