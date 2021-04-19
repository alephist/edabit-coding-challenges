const duplicateCount = require("../countDuplicateCharacters");

const data = [
  ["abcde", 0],
  ["Aa", 0],
  ["aabbcde", 2],
  ["aabbcdeB", 2],
  ["indivisibility", 1],
  ["Indivisibilities", 2],
  ["aa1112", 2],
  ["bb2c", 1]
];

describe("duplicateCount", () => {
  describe("Return number of alphanumeric characters that occur more than once", () => {
    test.each(data)("duplicateCount(%p) = %i", (str, result) => {
      let actual = duplicateCount(str);

      expect(actual).toEqual(result);
    });
  });
});
