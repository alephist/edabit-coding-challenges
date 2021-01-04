const hasSpaces = require("../checkStringForSpaces");

const data = [
  ["Foo", false],
  ["Foo bar", true],
  ["Foo ", true],
  [" Foo", true],
  [" ", true],
  ["", false],
  [",./;'[]-=", false]
];

describe("hasSpaces", () => {
  describe("Return boolean if string has any spaces", () => {
    test.each(data)("hasSpaces(%p) = %s", (str, result) => {
      let actual = hasSpaces(str);

      expect(actual).toEqual(result);
    });
  });
});
