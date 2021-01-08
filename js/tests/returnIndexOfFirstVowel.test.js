const firstVowel = require("../returnIndexOfFirstVowel");

const data = [
  ["hello", 1],
  ["apple", 0],
  ["string", 3],
  ["STRAWBERRY", 3],
  ["MELON", 1],
  ["piNNEaPLE", 1]
];

describe("firstVowel", () => {
  describe("Return index of first vowel in string", () => {
    test.each(data)("firstVowel(%p) = %i", (str, result) => {
      let actual = firstVowel(str);

      expect(actual).toEqual(result);
    });
  });
});
