const insertWhitespace = require("../whitespaceBetweenLowerAndUppercaseLetters");

const data = [
  ["SheWalksToTheBeach", "She Walks To The Beach"],
  ["MarvinTalksTooMuch", "Marvin Talks Too Much"],
  ["HopelesslyDevotedToYou", "Hopelessly Devoted To You"],
  ["EvenTheBestFallDownSometimes", "Even The Best Fall Down Sometimes"],
  ["TheGreatestUpsetInHistory", "The Greatest Upset In History"]
];

describe("insertWhitespace", () => {
  describe("Return string with whitespace between every instance of lowercase letter followed by an uppercase letter", () => {
    test.each(data)("insertWhitespace(%p) = %p", (str, result) => {
      let actual = insertWhitespace(str);

      expect(actual).toEqual(result);
    });
  });
});
