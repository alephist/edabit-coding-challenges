const wordBuilder = require("../newWordBuilder");

const data = [
  [["g", "e", "o"], [1, 0, 2], "ego"],
  [["e", "t", "s", "t"], [3, 0, 2, 1], "test"],
  [["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2], "edabit"],
  [
    ["l", "e", "h", "n", "l", "c", "a", "e", "g"],
    [5, 2, 6, 4, 0, 1, 3, 8, 7],
    "challenge"
  ],
  [["s", "o", "r", "t", "e", "d"], [0, 1, 2, 3, 4, 5], "sorted"]
];

describe("wordBuilder", () => {
  describe("Return string from unscrambled letters", () => {
    test.each(data)(
      "wordBuilder(%p, %p) = %p",
      (letters, positions, result) => {
        let actual = wordBuilder(letters, positions);

        expect(actual).toEqual(result);
      }
    );
  });
});
