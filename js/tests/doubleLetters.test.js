const doubleLetters = require("../doubleLetters");

const data = [
  ["loop", true],
  ["meeting", true],
  ["yummy", true],
  ["moo", true],
  ["toodles", true],
  ["droop", true],
  ["loot", true],
  ["orange", false],
  ["munchkin", false],
  ["forestry", false],
  ["raindrops", false],
  ["gold", false],
  ["paradise", false],
  ["chicken", false]
];

describe("doubleLetters", () => {
  describe("Return boolean if word has two consecutive identical letters", () => {
    test.each(data)("doubleLetters(%p) = %s", (word, result) => {
      let actual = doubleLetters(word);

      expect(actual).toEqual(result);
    });
  });
});
