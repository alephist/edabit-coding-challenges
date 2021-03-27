const calculateScores = require("../scoringSystem");

const data = [
  ["AAB", [2, 1, 0]],
  ["ABC", [1, 1, 1]],
  ["ABCBACC", [2, 2, 3]],
  ["CCBBBB", [0, 4, 2]],
  ["CCAABBAABBCC", [4, 4, 4]],
  ["A", [1, 0, 0]],
  ["", [0, 0, 0]],
  ["ACCCA", [2, 0, 3]]
];

describe("calculateScores", () => {
  describe("Return an array of player scores", () => {
    test.each(data)("calculateScore(%p) = %p", (str, result) => {
      let actual = calculateScores(str);

      expect(actual).toEqual(result);
    });
  });
});
