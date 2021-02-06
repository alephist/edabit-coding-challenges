const cumulativeSum = require("../cumulativeArraySum");

const data = [
  [[], []],
  [[1], [1]],
  [
    [1, 2, 3],
    [1, 3, 6]
  ],
  [
    [-1, -2, -3],
    [-1, -3, -6]
  ],
  [
    [1, -2, 3],
    [1, -1, 2]
  ],
  [
    [3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2],
    [
      3,
      6,
      4,
      412,
      415,
      418,
      418,
      484,
      486,
      484,
      486,
      489,
      493,
      495,
      448,
      451,
      454,
      456
    ]
  ]
];

describe("cumulativeSum", () => {
  describe("Return an array where each number is a sum of itself + previous numbers in an input array", () => {
    test.each(data)("cumulativeSum(%p) = %p", (arr, result) => {
      let actual = cumulativeSum(arr);

      expect(actual).toEqual(result);
    });
  });
});
