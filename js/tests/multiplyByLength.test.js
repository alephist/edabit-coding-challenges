const multiplyLength = require("../multiplyByLength");

const data = [
  [
    [2, 6, 4, 9],
    [8, 24, 16, 36]
  ],
  [
    [4, 1, 1],
    [12, 3, 3]
  ],
  [
    [1, 0, 3, 3, 7, 2, 1],
    [7, 0, 21, 21, 49, 14, 7]
  ],
  [[0], [0]]
];

describe("multiplyLength", () => {
  describe("Return array with each element multiplied by array length", () => {
    test.each(data)("multiplyLength(%p) = %p", (arr, result) => {
      let actual = multiplyLength(arr);

      expect(actual).toEqual(result);
    });
  });
});
