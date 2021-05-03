const mapLetters = require("../mapLettersInAString");

const data = [
  ["", {}],
  ["a", { a: [0] }],
  ["abcdefg", { a: [0], b: [1], c: [2], d: [3], e: [4], f: [5], g: [6] }],
  ["balloon", { b: [0], a: [1], l: [2, 3], o: [4, 5], n: [6] }],
  ["imagining", { i: [0, 4, 6], m: [1], a: [2], g: [3, 8], n: [5, 7] }],
  ["mummy", { m: [0, 2, 3], u: [1], y: [4] }],
  [
    "aaaaaaabaaabaaabbb",
    { a: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14], b: [7, 11, 15, 16, 17] }
  ]
];

describe("mapLetters", () => {
  describe("Return an object that stores the indexes of each letters in a word", () => {
    test.each(data)("mapLetters(%p) = %o", (word, result) => {
      let actual = mapLetters(word);

      expect(actual).toEqual(result);
    });
  });
});
