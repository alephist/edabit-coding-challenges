const asciiSort = require("../compareByASCIICodes");

const data = [
  [["hey", "man"], "man"],
  [["majorly", "then"], "then"],
  [["magic", "kingdom"], "magic"],
  [["bored", "shampoo"], "bored"],
  [["victory", "careless"], "victory"]
];

describe("asciiSort", () => {
  describe("Return word with smallest ASCII sum from an array", () => {
    test.each(data)("asciiSort(%p) = %p", (arr, result) => {
      let actual = asciiSort(arr);

      expect(actual).toEqual(result);
    });
  });
});
