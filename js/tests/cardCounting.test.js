const count = require("../cardCounting");

const data = [
  [[5, 9, 10, 3, "J", "A", 4, 8, 5], 1],
  [["A", "A", "K", "Q", "Q", "J"], -6],
  [["A", 5, 5, 2, 6, 2, 3, 8, 9, 7], 5],
  [[2, 2, 2, 2, 2, 2, 2, 2], 8],
  [[], 0],
  [["A", "A", "A", "A", "A", "A", "A"], -7],
  [["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2], 0]
];

describe("count", () => {
  describe("Return total card score from array of cards", () => {
    test.each(data)("count(%p) = %i", (deck, result) => {
      let actual = count(deck);

      expect(actual).toEqual(result);
    });
  });
});
