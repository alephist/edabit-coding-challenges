const factory = require("../firstClassFunction");

const data = [
  [15, [30, 45, 60], [2, 3, 4]],
  [2, [2, 4, 6], [1, 2, 3]],
  [6, [60, 30], [10, 5]],
  [7, [14, 21, 49], [2, 3, 7]],
  [5, [10, 5, 20], [2, 1, 4]],
  [10, [100, 10, 60], [10, 1, 6]]
];

describe("factory", () => {
  describe("Return an array of numbers divided by the number passed into the first function", () => {
    test.each(data)("factory(%i)(%p) = %p", (num, arr, result) => {
      let actual = factory(num)(arr);

      expect(actual).toEqual(result);
    });
  });
});
