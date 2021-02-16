const sumFive = require("../sumGreaterThanFive");

const data = [
  [[1, 5, 20, 30, 4, 9, 18], 77],
  [[1, 2, 3, 4], 0],
  [[10, 12, 28, 47, 55, 100], 252],
  [[25, 44, 6, 4, 3, 36], 111],
  [[5, 2, 150, 187, 254, 0], 591],
  [[1000, 2500, 2, 4, 500, 400], 4400],
  [[125.5, 147.2, 548.6, 2.3, 1.5], 821.3]
];

describe("sumFive", () => {
  describe("Return sum of elements that are greater than five", () => {
    test.each(data)("sumFive(%p) = %p", (arr, result) => {
      let actual = sumFive(arr);

      expect(actual).toEqual(result);
    });
  });
});
