const countOnes = require("../twoOrMoreConsecutiveOnes");

const data = [
  [[1, 1, 1, 1, 1], 1],
  [[1, 1, 1, 1, 0], 1],
  [[0, 0, 0, 0, 0], 0],
  [[1, 0, 0, 0, 0], 0],
  [[1, 0, 1, 0, 1], 0],
  [[1, 0, 0, 0, 1, 0, 0, 1, 1], 1],
  [[1, 1, 0, 1, 1, 0, 0, 1, 1], 3],
  [[1, 0, 0, 1, 1, 0, 0, 1, 1], 2],
  [[1, 0, 0, 1, 1, 0, 1, 1, 1], 2],
  [[1, 0, 1, 0, 1, 0, 1, 0], 0],
  [[1, 1, 1, 1, 0, 0, 0, 0], 1],
  [[1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1], 3]
];

describe("countOnes", () => {
  describe("Return number of blocks of two or more adjacent ones in an array", () => {
    test.each(data)("countOnes(%p) = %i", (arr, result) => {
      let actual = countOnes(arr);

      expect(actual).toEqual(result);
    });
  });
});
