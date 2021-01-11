const countOnes = require("../countOnesIn2DArray");

const data = [
  [
    [
      [1, 0, 1],
      [0, 0, 0],
      [0, 0, 1]
    ],
    3
  ],
  [
    [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1]
    ],
    7
  ],
  [
    [
      [1, 2, 3],
      [0, 2, 1],
      [5, 7, 33]
    ],
    2
  ],
  [
    [
      [5, 2, 3],
      [0, 2, 5],
      [5, 7, 33]
    ],
    0
  ],
  [
    [
      [5, 2],
      [0, 2],
      [5, 1]
    ],
    1
  ],
  [
    [
      [1, 1],
      [0, 1]
    ],
    3
  ],
  [
    [
      [0, 1],
      [0, 0]
    ],
    1
  ]
];

describe("countOnes", () => {
  describe("Return count of number 1s", () => {
    test.each(data)("countOnes(%o) = %i", (matrix, result) => {
      let actual = countOnes(matrix);

      expect(actual).toEqual(result);
    });
  });
});
