const isAnagram = require("../checkForAnagrams");

const data = [
  ["cristian", "Cristina", true],
  ["Dave Barry", "Ray Adverb", true],
  ["Nope", "Note", false],
  ["Apple", "Appeal", false]
];

describe("isAnagram", () => {
  describe("Return boolean if both input strings are anagrams", () => {
    test.each(data)("isAnagram(%p, %p) = %s", (s1, s2, result) => {
      let actual = isAnagram(s1, s2);

      expect(actual).toEqual(result);
    });
  });
});
