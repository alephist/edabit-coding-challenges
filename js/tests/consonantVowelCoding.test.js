const stringCode = require("../consonantVowelCoding");

const data = [
  [
    "I'd like to drink my first glass of champagne.",
    ["1 2 1 4 2 4 4 1 6", "1 2 1 1 0 1 1 1 3"]
  ],
  [
    "The first man to walk on the moon was Neil Armstrong.",
    ["2 4 2 1 3 1 2 2 2 2 7", "1 1 1 1 1 1 1 2 1 2 2"]
  ],
  ["I've got a lovely bunch of coconuts.", ["1 2 0 4 4 1 5", "2 1 1 2 1 1 3"]],
  ["There they are a'standing in a row.", ["3 3 1 6 1 0 2", "2 1 2 3 1 1 1"]],
  ["Let them eat cake.", ["2 3 1 2", "1 1 2 2"]],
  [
    "It does not matter how slowly you go as long as you do not stop.",
    ["1 2 2 4 2 5 1 1 1 3 1 1 1 2 3", "1 2 1 2 1 1 2 1 1 1 1 2 1 1 1"]
  ],
  [
    "To be or not to be, that is the question.",
    ["1 1 1 2 1 1 3 1 2 4", "1 1 1 1 1 1 1 1 1 4"]
  ],
  [
    "Believe you can and you're halfway there.",
    ["3 1 2 2 2 5 3", "4 2 1 1 3 2 2"]
  ]
];

describe("stringCode", () => {
  describe("Return list of consonants per word and vowels per word", () => {
    test.each(data)("stringCode(%p) = %p", (sentence, result) => {
      let actual = stringCode(sentence);

      expect(actual).toEqual(result);
    });
  });
});
