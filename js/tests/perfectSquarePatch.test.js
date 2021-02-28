const squarePatch = require("../perfectSquarePatch");

const data = [
  [
    3,
    [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ]
  ],
  [
    2,
    [
      [2, 2],
      [2, 2]
    ]
  ],
  [
    4,
    [
      [4, 4, 4, 4],
      [4, 4, 4, 4],
      [4, 4, 4, 4],
      [4, 4, 4, 4]
    ]
  ],
  [
    6,
    [
      [6, 6, 6, 6, 6, 6],
      [6, 6, 6, 6, 6, 6],
      [6, 6, 6, 6, 6, 6],
      [6, 6, 6, 6, 6, 6],
      [6, 6, 6, 6, 6, 6],
      [6, 6, 6, 6, 6, 6]
    ]
  ],
  [
    5,
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5]
    ]
  ],
  [1, [[1]]],
  [0, []]
];

describe("squarePatch", () => {
  describe("Return n x n square consisting of integer n", () => {
    test.each(data)("squarePatch(%i) = %o", (n, result) => {
      let actual = squarePatch(n);

      expect(actual).toEqual(result);
    });
  });
});
