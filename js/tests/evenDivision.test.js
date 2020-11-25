const dividesEvenly = require("../evenDivision");

describe("dividesEvenly", () => {
  describe("Return a boolean whether two numbers can be divided evenly or not", () => {
    const data = [
      [98, 7, true],
      [87, 49, false],
      [34, 14, false],
      [78, 6, true],
      [30, 4, false],
      [87, 73, false],
      [74, 7, false],
      [87, 29, true],
      [48, 24, true],
      [99, 20, false],
      [98, 49, true],
      [100, 6, false],
      [64, 4, true],
      [70, 35, true],
      [38, 38, true],
      [29, 3, false],
      [20, 8, false],
      [66, 50, false],
      [95, 1, true],
      [58, 2, true]
    ];

    test.each(data)("dividesEvenly(%i, %i) = %o", (a, b, expected) => {
      var actual = dividesEvenly(a, b);

      expect(actual).toEqual(expected);
    });
  });

  describe("Return exception if a is less than b", () => {
    let a = 7;
    let b = 98;

    test(`dividesEvenly(${a}, ${b}) throws an Error`, () => {
      expect(() => dividesEvenly(a, b)).toThrowError(Error);
    });

    test("Return exact error message", () => {
      expect(() => dividesEvenly(a, b)).toThrowError(
        new Error("a must be greater than b")
      );
    });
  });
});
