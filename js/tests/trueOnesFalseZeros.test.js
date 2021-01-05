const integerBoolean = require("../trueOnesFalseZeros");

const data = [
  ["100101", [true, false, false, true, false, true]],
  ["10", [true, false]],
  ["001", [false, false, true]],
  ["", []],
  ["111", [true, true, true]],
  ["000", [false, false, false]],
  ["10010110", [true, false, false, true, false, true, true, false]]
];

describe("integerBoolean", () => {
  describe("Return boolean array, 1 is true, 0 is false", () => {
    test.each(data)("integerBoolean(%p) = %p", (n, result) => {
      let actual = integerBoolean(n);

      expect(actual).toEqual(result);
    });
  });
});
