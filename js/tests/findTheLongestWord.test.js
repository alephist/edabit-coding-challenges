const findLongest = require("../findTheLongestWord");

const data = [
  ["Hello darkness my old friend.", "darkness"],
  ["Yourself is your soul's captain and fate's master.", "yourself"],
  ["The pretty daughter's toy, a doll, is as pretty as her.", "daughter"],
  ["A thing of beauty is a joy forever.", "forever"],
  ["Forgetfulness is by all means powerless!", "forgetfulness"],
  [
    "Strengths is the longest and most commonly used word that contains only a single vowel.",
    "strengths"
  ]
];

describe("findLongest", () => {
  describe("Return longest word in a sentence", () => {
    test.each(data)("findLongest(%p) = %p", (sentence, result) => {
      let actual = findLongest(sentence);

      expect(actual).toEqual(result);
    });
  });
});
