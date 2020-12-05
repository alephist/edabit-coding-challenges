const jump = require("../hurdleJump");

const data = [
  [[1, 2, 3, 4, 5], 5, true],
  [[5, 5, 3, 4, 5], 3, false],
  [[5, 4, 5, 6], 10, true],
  [[1, 2, 1], 1, false],
  [[3, 3, 3], 4, true],
  [[4, 4], 3, false],
  [[], 4, true]
];

describe("jump", () => {
  describe("Return boolean if hurdler can clear all hurdles", () => {
    test.each(data)("jump(%p, %i) = %s", (hurdles, jumpHeight, result) => {
      var actual = jump(hurdles, jumpHeight);

      expect(actual).toEqual(result);
    });
  });
});
