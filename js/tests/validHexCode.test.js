const isValidHexCode = require("../validHexCode");

const data = [
  ["#CD5C5C", true],
  ["#EAECEE", true],
  ["#eaecee", true],
  ["#CD5C58C", false],
  ["#CD5C5Z", false],
  ["#CD5C&C", false],
  ["CD5C5C", false],
  ["#123CCCD", false],
  ["#123456", true],
  ["#987654", true],
  ["#9876543", false],
  ["#CCCCCC", true],
  ["#ZCCZCC", false],
  ["#Z88Z99", false],
  ["#Z88!99", false]
];

describe("isValidHexCode", () => {
  describe("Return boolean if input string is a valid hex code", () => {
    test.each(data)("isValidHexCode(%p) = %s", (str, result) => {
      let actual = isValidHexCode(str);

      expect(actual).toEqual(result);
    });
  });
});
