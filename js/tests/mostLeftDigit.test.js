const leftDigit = require("../mostLeftDigit");

const data = [
  ["TrAdE2W1n95!", 2],
  ["V3r1ta$", 3],
  ["U//DertHe1nflu3nC3", 1],
  ["J@v@5cR1PT", 5],
  ["0nSlaUgh7*d3atH", 0],
  ["F8andD3st1nY", 8]
];

describe("leftDigit", () => {
  describe("Return most left digit in a string", () => {
    test.each(data)("leftDigit(%p) = %i", (str, result) => {
      let actual = leftDigit(str);

      expect(actual).toEqual(result);
    });
  });
});
