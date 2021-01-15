const isInRange = require("../checkIfNumberIsWithinRange");

const data = [
  [4, { min: 0, max: 5 }, true],
  [4, { min: 4, max: 5 }, true],
  [4, { min: 0, max: 4 }, true],
  [4, { min: 6, max: 10 }, false],
  [11, { min: 6, max: 10 }, false],
  [5, { min: 5, max: 5 }, true],
  [1.5, { min: 1.25, max: 1.75 }, true],
  [1.1, { min: 1.25, max: 1.75 }, false],
  [1.8, { min: 1.25, max: 1.75 }, false],
  [-1, { min: -1, max: 1 }, true]
];

describe("isInRange", () => {
  describe("Return boolean if number is within range", () => {
    test.each(data)("isInRange(%i, %o) = %s", (num, range, result) => {
      let actual = isInRange(num, range);

      expect(actual).toEqual(result);
    });
  });
});
