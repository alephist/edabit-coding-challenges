const isAlphabeticallySorted = require("../alphabeticallySorted");

const data = [
  ["Paula has a French accent.", true],
  ["The biopsy returned negative results.", true],
  ["She sells sea shells by the sea shore.", false],
  ["She almost reached the top of Mt. Everest.", true],
  ["She was happy with how her earring hoops looked.", true],
  ["Beth dislikes eating starfruit but enjoys cherries.", false],
  ["Elinor is inside on a rainy day sipping hot chocolate.", true],
  ["Mara took a photograph.", false]
];

describe("isAlphabeticallySorted", () => {
  describe("Return true if there is an alphabetically sorted word in a sentence with a minimum length of 3", () => {
    test.each(data)("isAlphabeticallySorted(%p) = %s", (sentence, result) => {
      let actual = isAlphabeticallySorted(sentence);

      expect(actual).toEqual(result);
    });
  });
});
