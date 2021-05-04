const characterMapping = require("../characterMapping");

const data = [
  ["abcd", [0, 1, 2, 3]],
  ["abb", [0, 1, 1]],
  ["babbcb", [0, 1, 0, 0, 2, 0]],
  ["aaabb", [0, 0, 0, 1, 1]],
  ["abccbc", [0, 1, 2, 2, 1, 2]],
  ["fluffy", [0, 1, 2, 0, 0, 3]],
  ["madness", [0, 1, 2, 3, 4, 5, 5]],
  ["buttery", [0, 1, 2, 2, 3, 4, 5]],
  ["canine", [0, 1, 2, 3, 2, 4]],
  ["hohoho", [0, 1, 0, 1, 0, 1]],
  ["hmmmmm", [0, 1, 1, 1, 1, 1]],
  ["", []]
];

describe("characterMapping", () => {
  describe("Return character mapping from a word", () => {
    test.each(data)("characterMapping(%p) = %p", (str, result) => {
      let actual = characterMapping(str);

      expect(actual).toEqual(result);
    });
  });
});
