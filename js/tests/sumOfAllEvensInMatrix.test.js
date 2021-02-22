const sumOfEvens = require("../sumOfAllEvensInMatrix");

const data = [
  [
    [
      [1, 5, 1, 3],
      [4, 1, 2, 0],
      [6, 9, 7, 4],
      [5, 1, 2, 6]
    ],
    24
  ],
  [
    [
      [1, 0, 1],
      [33, 1, 2],
      [15, 9, 1],
      [5, 1, 979]
    ],
    2
  ],
  [
    [
      [2, 19, 5, 43],
      [67, 2, 0, 12]
    ],
    16
  ],
  [
    [
      [1, 3, 7, 9],
      [11, 13, 15, 17],
      [19, 21, 23, 25]
    ],
    0
  ],
  [[[], [], []], 0]
];

describe("sumOfEvens", () => {
  describe("Return sum of all even numbers in a 2D matrix", () => {
    test.each(data)("sumOfEvens(%p) = %i", (arr, result) => {
      let actual = sumOfEvens(arr);

      expect(actual).toEqual(result);
    });
  });
});
