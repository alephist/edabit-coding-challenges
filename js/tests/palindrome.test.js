const checkPalindrome = require("../palindrome");

const data = [
  ["mom", true],
  ["scary", false],
  ["reviver", true],
  ["stressed", false],
  ["good", false],
  ["refer", true],
  ["something", false],
  ["redder", true],
  ["civic", true]
];

describe("checkPalindrome", () => {
  describe("Return boolean if word is a palindrome", () => {
    test.each(data)("checkPalindrome(%p) = %s", (str, result) => {
      var actual = checkPalindrome(str);

      expect(actual).toEqual(result);
    });
  });
});
