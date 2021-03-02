const longestWord = require("../longestWord");

const data = [
  ["Hello darkness my old friend", "darkness"],
  ["Hello there mate", "Hello"],
  ["Kayla's toy is plastic", "Kayla's"],
  ["Football is so cool!!!!!", "cool!!!!!"]
];

describe("longestWord", () => {
  describe("Return the longest word from a sentence", () => {
    test.each(data)("longestWord(%p) = %p", (sentence, result) => {
      let actual = longestWord(sentence);

      expect(actual).toEqual(result);
    });
  });
});
