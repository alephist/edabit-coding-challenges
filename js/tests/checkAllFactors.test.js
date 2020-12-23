const checkFactors = require("../checkAllFactors");

const data = [
  [[2, 3, 4], 12, true],
  [[1, 2, 3, 8], 12, false],
  [[1, 2, 50], 100, true],
  [[1, 9, 81], 81, true],
  [[5, 10, 50], 500, true],
  [[5, 10, 499], 500, false],
  [[3, 6], 9, false]
];

describe("checkFactors", () => {
  describe("Return boolean if all numbers in the array are factors of a number", () => {
    test.each(data)("checkFactors(%p, %i) = %p", (factors, num, result) => {
      let actual = checkFactors(factors, num);

      expect(actual).toEqual(result);
    });
  });
});
