const wordLengths = require("../arrayOfWordLengths");

const data = [
  [
    ["hello", "world"],
    [5, 5]
  ],
  [
    ["Halloween", "Thanksgiving", "Christmas"],
    [9, 12, 9]
  ],
  [
    ["She", "sells", "seashells", "down", "by", "the", "seashore"],
    [3, 5, 9, 4, 2, 3, 8]
  ],
  [
    ["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"],
    [7, 5, 3, 3, 6, 2, 4]
  ],
  [
    ["Programming", "is", "fun"],
    [11, 2, 3]
  ]
];

describe("wordLengths", () => {
  describe("Return an array of each word's length", () => {
    test.each(data)("wordLengths(%p) = %p", (arr, result) => {
      let actual = wordLengths(arr);

      expect(actual).toEqual(result);
    });
  });
});
