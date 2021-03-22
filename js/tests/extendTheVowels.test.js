const extendVowels = require("../extendTheVowels");

const data = [
  ["Hello", 5, "Heeeeeelloooooo"],
  ["Edabit", 3, "EEEEdaaaabiiiit"],
  ["Extend", 0, "Extend"],
  ["A", 10, "AAAAAAAAAAA"],
  ["Z", 93, "Z"],
  ["Vowel", 0.5, "invalid"],
  ["Nice", -8, "invalid"]
];

describe("extendVowels", () => {
  describe("Return word with extended vowels", () => {
    test.each(data)("extendVowels(%p, %i) = %p", (word, num, result) => {
      let actual = extendVowels(word, num);

      expect(actual).toEqual(result);
    });
  });
});
