const alliterationCorrect = require("../amazingAlliteration");

const data = [
  ["She swam to the shore.", true],
  ["Maybel manages money well.", false],
  ["He helps harness happiness.", true],
  ["There are many animals in the zoo.", false],
  ["Tanya took the tomatoes. Two times two is not twenty.", true],
  ["Two times two is four.", false],
  ["Nancy nimbly ran for the newts.", true]
];

describe("alliterationCorrect", () => {
  describe("Return boolean if sentence is correctly alliterated", () => {
    test.each(data)("alliterationCorrect(%p) = %s", (sentence, result) => {
      let actual = alliterationCorrect(sentence);

      expect(actual).toEqual(result);
    });
  });
});
