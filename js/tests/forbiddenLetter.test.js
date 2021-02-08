const forbiddenLetter = require("../forbiddenLetter");

const data = [
  ["e", ["rinse", "and", "repeat"], false],
  ["d", ["python", "javascript", "ruby", "fortran"], true],
  ["a", ["spoon", "fork", "knife"], true],
  ["b", ["test", "dot", "assert", "equals"], true],
  ["i", ["rock", "paper", "scissors"], false],
  ["t", [], true]
];

describe("fordiddenLetter", () => {
  describe("Return whether the letter does not appear in any of the words", () => {
    test.each(data)("forbiddenLetter(%p, %p) = %s", (char, arr, result) => {
      let actual = forbiddenLetter(char, arr);

      expect(actual).toEqual(result);
    });
  });
});
