const getDays = require("../daysInAMonth");

const data = [
  [1, 2018, 31],
  [2, 2018, 28],
  [3, 2018, 31],
  [4, 2018, 30],
  [5, 2018, 31],
  [6, 2018, 30],
  [7, 2018, 31],
  [8, 2018, 31],
  [9, 2018, 30],
  [10, 2018, 31],
  [11, 2018, 30],
  [12, 2018, 31],
  [2, 2004, 29],
  [2, 1800, 28],
  [2, 1600, 29]
];

describe("getDays", () => {
  describe("Return number of days in a particular month and year", () => {
    test.each(data)("getDays(%i, %i) = %i", (month, year, expected) => {
      var actual = getDays(month, year);

      expect(actual).toEqual(expected);
    });
  });
});
