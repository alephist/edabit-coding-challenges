const censor = require("../censorWordsLongerThanFourCharacters");

const data = [
  ["The code is fourty", "The code is ******"],
  ["Two plus three is five", "Two plus ***** is five"],
  ["aaaa aaaaa 1234 12345", "aaaa ***** 1234 *****"],
  ["abcdefghijklmnop", "****************"],
  ["a", "a"]
];

describe("censor", () => {
  describe("Return sentence with words over four characters censored", () => {
    test.each(data)("censor(%p) = %p", (str, result) => {
      let actual = censor(str);

      expect(actual).toEqual(result);
    });
  });
});
