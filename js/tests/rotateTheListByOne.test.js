const rotateByOne = require("../rotateTheListByOne");

const data = [
  [
    [1, 2, 3, 4, 5],
    [5, 1, 2, 3, 4]
  ],
  [
    [6, 5, 8, 9, 7],
    [7, 6, 5, 8, 9]
  ],
  [
    [20, 15, 26, 8, 4],
    [4, 20, 15, 26, 8]
  ],
  [
    [7, 8, 6, 4, 5],
    [5, 7, 8, 6, 4]
  ],
  [
    [5, 9, 45, 1, 2],
    [2, 5, 9, 45, 1]
  ],
  [
    [5, 9, 45, 1, 2, 8, 10, 12, 15],
    [15, 5, 9, 45, 1, 2, 8, 10, 12]
  ]
];

describe("rotateByOne", () => {
  describe("Should return input array rotated clockwise", () => {
    test.each(data)("rotateByOne(%p) = %p", (arr, result) => {
      let actual = rotateByOne(arr);

      expect(actual).toEqual(result);
    });
  });
});
