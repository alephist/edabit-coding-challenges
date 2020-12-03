const reverse = require("../reverseAnArray");

const data = [
  [
    [1, 2, 3, 4],
    [4, 3, 2, 1]
  ],
  [
    [5, 6, 7],
    [7, 6, 5]
  ],
  [
    [9, 9, 2, 3, 4],
    [4, 3, 2, 9, 9]
  ],
  [
    [3, 3],
    [3, 3]
  ],
  [
    [-1, -1, -1],
    [-1, -1, -1]
  ],
  [[], []]
];

describe("reverse", () => {
  describe("Reverse an array", () => {
    test.each(data)("reverse(%p) = %p", (arr, expected) => {
      var actual = reverse(arr);

      expect(actual).toEqual(expected);
    });
  });
});
