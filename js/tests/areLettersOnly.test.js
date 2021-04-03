const areLettersOnly = require("../areLettersOnly");

const data = [
  ["javascript", true],
  ["JAVACRIPT", false],
  ["html css javascript", true],
  ["12321313", false],
  ["@-=001-302;4'23", false],
  ["the quick brown fox", true],
  ["hello 123 world", false],
  ["i have spaces", true],
  ["", false],
  ["i have numbers 1 and 2", false]
];

describe("areLettersOnly", () => {
  describe("Return boolean if string only contains letters and whitespace in lower case", () => {
    test.each(data)("areLettersOnly(%p) = %s", (str, result) => {
      let actual = areLettersOnly(str);

      expect(actual).toEqual(result);
    });
  });
});
