const isParselTongue = require("../parselTongue");

const data = [
  ["Sshe ssselects to eat that apple.", true],
  ["She ssselects to eat that apple.", false],
  ["You ssseldom sssspeak sso boldly, ssso messmerizingly.", true],
  ["Steve likes to eat pancakes", false],
  ["Sssteve likess to eat pancakess", true],
  ["Beatrice samples lemonade", false],
  ["Beatrice enjoysss lemonade", true]
];

describe("isParselTongue", () => {
  describe("Return boolean whether a sentence is a parseltongue or not", () => {
    test.each(data)("isParselTongue(%p) = %s", (sentence, result) => {
      let actual = isParselTongue(sentence);

      expect(actual).toEqual(result);
    });
  });
});
