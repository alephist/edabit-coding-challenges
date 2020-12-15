const timeForMilkAndCookies = require("../milkAndCookies");

const data = [
  [new Date(2013, 11, 24), true],
  [new Date(3000, 11, 24), true],
  [new Date(2154, 11, 11), false],
  [new Date(2010, 11, 2), false],
  [new Date(1980, 2, 24), false]
];

describe("timeForMilkAndCookies", () => {
  describe("Return true of it is Christmas Eve or not", () => {
    test.each(data)("timeForMilkAndCookies(%o) = %o", (date, expected) => {
      let actual = timeForMilkAndCookies(date);

      expect(actual).toEqual(expected);
    });
  });
});
