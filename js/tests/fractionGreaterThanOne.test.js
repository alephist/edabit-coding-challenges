const greaterThanOne = require("../fractionGreaterThanOne");

const data = [
  ["1/2", false],
  ["7/4", true],
  ["10/10", false],
  ["12/30", false],
  ["28/3", true],
  ["35/31", true],
  ["11/27", false],
  ["42/32", true],
  ["34/15", true],
  ["16/16", false],
  ["38/41", false],
  ["45/43", true],
  ["13/38", false],
  ["43/2", true],
  ["16/31", false],
  ["41/15", true],
  ["2/38", false],
  ["37/21", true]
];

describe("greaterThanOne", () => {
  describe("Return true if fraction is greater than one", () => {
    test.each(data)("greaterThanOne(%p) = %s", (frac, result) => {
      let actual = greaterThanOne(frac);

      expect(actual).toEqual(result);
    });
  });
});
