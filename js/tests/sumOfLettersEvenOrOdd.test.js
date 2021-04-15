const isAlpha = require("../sumOfLettersEvenOrOdd");

const data = [
  ["i'am king", true],
  ["True", true],
  ["alexa", false]
];

describe("isAlpha", () => {
  describe("Return true if sum of position of every letter in the alphabet is even and false if sum is odd", () => {
    test.each(data)("isAlpha(%p) = %s", (str, result) => {
      let actual = isAlpha(str);

      expect(actual).toEqual(result);
    });
  });
});
