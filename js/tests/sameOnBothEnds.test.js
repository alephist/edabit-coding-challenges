const countSameEnds = require("../sameOnBothEnds");

const data = [
  ["Pop! the balloon!", 1],
  ["My mom is not a nun.", 2],
  ["A fine morning", 0],
  ["And the crowd goes wild!", 0],
  ["No I am not in a gang.", 1],
  ["Taste the difference", 0]
];

describe("countSameEnds", () => {
  describe("Return count of words which have same first and last letter from input sentence", () => {
    test.each(data)("countSameEnds(%p) = %i", (str, result) => {
      let actual = countSameEnds(str);

      expect(actual).toEqual(result);
    });
  });
});
