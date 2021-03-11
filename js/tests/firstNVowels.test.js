const firstNVowels = require("../firstNVowels");

const data = [
  ["sharpening skills", 3, "aei"],
  ["major league", 5, "aoeau"],
  ["crabby patty", 2, "aa"],
  ["shrimp", 1, "i"],
  ["shrimpy", 2, "invalid"],
  ["hostess", 5, "invalid"]
];

describe("firstNVowels", () => {
  describe("Return the first n vowels of a string", () => {
    test.each(data)("firstNVowels(%p, %i) = %p", (s, n, result) => {
      let actual = firstNVowels(s, n);

      expect(actual).toEqual(result);
    });
  });
});
