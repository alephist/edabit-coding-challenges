const highestDigit = require("../highestDigit");

const data = [
  [51, 5],
  [0, 0],
  [7495037, 9],
  [222222, 2]
];

describe("highestDigit", () => {
  describe("Return highest digit in a number", () => {
    test.each(data)("highestDigit(%i) = %i", (number, result) => {
      let actual = highestDigit(number);

      expect(actual).toEqual(result);
    });
  });
});
