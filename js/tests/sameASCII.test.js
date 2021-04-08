const isSameASCII = require("../sameASCII");

const data = [
  ["a", "a", true],
  ["A", "a", false],
  ["!", "g", false],
  ["aAAAaaAA", "~~~aa,", true],
  ["aUGSIGHIhiSJGijs", "~~~~~~~~~FF,", false],
  ["~~Tga2", "{}[]()I", true]
];

describe("isSameASCII", () => {
  describe("Return boolean if two strings have the same ASCII values", () => {
    test.each(data)("isSameASCII(%p, %p) = %s", (a, b, result) => {
      let actual = isSameASCII(a, b);

      expect(actual).toEqual(result);
    });
  });
});
