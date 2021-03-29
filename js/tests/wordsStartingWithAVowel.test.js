const retrieve = require("../wordsStartingWithAVowel");

const data = [
  ["A simple life is a happy life for me.", ["a", "is", "a"]],
  [
    "Exercising is a healthy way to burn off energy.",
    ["exercising", "is", "a", "off", "energy"]
  ],
  ["The poor ostrich was ostracized.", ["ostrich", "ostracized"]],
  ["", []]
];

describe("retrieve", () => {
  describe("Return an array of words that starts with a vowel", () => {
    test.each(data)("retrieve(%p) = %p", (str, result) => {
      let actual = retrieve(str);

      expect(actual).toEqual(result);
    });
  });
});
