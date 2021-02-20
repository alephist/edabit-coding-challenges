const numOfSubarrays = require("../numberOfArraysInArray");

const data = [
  [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ],
    3
  ],
  [[[1, 2, 3]], 1],
  [[1, 2, 3], 0],
  [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ],
    4
  ]
];

describe("numOfSubarrays", () => {
  describe("Return total number of arrays inside given array", () => {
    test.each(data)("numOfSubarrays(%o) = %i", (arr, result) => {
      let actual = numOfSubarrays(arr);

      expect(actual).toEqual(result);
    });
  });
});
