const isDivisibleBy5 = require("../divisibleByFive");

describe("isDivisibleBy5", () => {
  describe("Return true if number is divisible by 5", () => {
    const data = [5, 15];

    test.each(data)("isDivisibleBy5(%i) = true", (num) => {
      var actual = isDivisibleBy5(num);

      expect(actual).toEqual(true);
    });
  });

  describe("Return false if number is not divisible by 5", () => {
    const data = [7, 33, -18, 999, 2];

    test.each(data)("isDivisibleBy5(%i) = false", (num) => {
      var actual = isDivisibleBy5(num);

      expect(actual).toEqual(false);
    });
  });
});
