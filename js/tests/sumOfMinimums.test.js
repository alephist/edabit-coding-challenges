const sumMinimums = require("../sumOfMinimums");

const data = [
  [
    [
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [20, 21, 34, 56, 100]
    ],
    26
  ],
  [
    [
      [7, 9, 8, 6, 2],
      [6, 3, 5, 4, 3],
      [5, 8, 7, 4, 5]
    ],
    9
  ],
  [
    [
      [11, 12, 14, 54],
      [67, 89, 90, 56],
      [7, 9, 4, 3],
      [9, 8, 6, 7]
    ],
    76
  ]
];

describe("sumMinimums", () => {
  describe("Return sum of miminums of each row", () => {
    test.each(data)("sumMinimums(%o) = %i", (arr, result) => {
      let actual = sumMinimums(arr);

      expect(actual).toEqual(result);
    });
  });
});
