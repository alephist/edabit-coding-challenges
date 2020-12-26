const filterDigitLength = require("../filterByDigitLength");

const data = [
  [[88, 232, 4, 9721, 555], 3, [232, 555]],
  [[2, 7, 8, 9, 1012], 1, [2, 7, 8, 9]],
  [[32, 88, 74, 91, 300, 4050], 1, []],
  [[5, 6, 8, 9], 1, [5, 6, 8, 9]],
  [[99, 838, 435, 7666, 989, 431], 3, [838, 435, 989, 431]],
  [[99, 838, 435, 7666, 989, 431], 2, [99]]
];

describe("filterDigitLength", () => {
  describe("Return an array of numbers that have certain number of digits", () => {
    test.each(data)("filterDigitLength(%p, %i) = %p", (arr, num, result) => {
      let actual = filterDigitLength(arr, num);

      expect(actual).toEqual(result);
    });
  });
});
