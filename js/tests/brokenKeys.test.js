const findBrokenKeys = require("../brokenKeys");

const data = [
  ["happy birthday", "hawwy birthday", ["p"]],
  ["starry night", "starrq light", ["y", "n"]],
  ["beethoven", "affthoif5", ["b", "e", "v", "n"]],
  ["mozart", "aiwgvx", ["m", "o", "z", "a", "r", "t"]],
  ["5678", "4678", ["5"]],
  ["!!??$$", "$$!!??", ["!", "?", "$"]]
];

describe("findBrokenKeys", () => {
  describe("Return broken keys", () => {
    test.each(data)("findBrokenKeys(%p, %p) = %p", (str1, str2, result) => {
      let actual = findBrokenKeys(str1, str2);

      expect(actual).toEqual(result);
    });
  });
});
