const totalCups = require("../freeCoffeeCups");

const data = [
  [6, 7],
  [3, 3],
  [7, 8],
  [12, 14],
  [213, 248],
  [16, 18]
];

describe("totalCups", () => {
  describe("Return total number of cups for every 6 cups ordered", () => {
    test.each(data)("totalCups(%i) = %i", (n, expected) => {
      let actual = totalCups(n);

      expect(actual).toEqual(expected);
    });
  });
});
