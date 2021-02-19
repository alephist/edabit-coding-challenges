const testJackpot = require("../hittingTheJackpot");

const data = [
  [["@", "@", "@", "@"], true],
  [["!", "!", "!", "!"], true],
  [["abc", "abc", "abc", "abc"], true],
  [["karaoke", "karaoke", "karaoke", "karaoke"], true],
  [["SS", "SS", "SS", "SS"], true],
  [[":(", ":", ":|", ":|"], false],
  [["&&", "&", "&&&", "&&&&"], false],
  [["hee", "heh", "heh", "heh"], false],
  [["SS", "SS", "SS", "Ss"], false],
  [["SS", "SS", "Ss", "Ss"], false]
];

describe("testJackpot", () => {
  describe("Return boolean if all elements are identical or not", () => {
    test.each(data)("testJackpot(%p) = %s", (outcome, result) => {
      let actual = testJackpot(outcome);

      expect(actual).toEqual(result);
    });
  });
});
