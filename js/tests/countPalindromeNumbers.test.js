const countPalindromes = require("../countPalindromeNumbers");

const data = [
  [1, 10, 9],
  [555, 556, 1],
  [878, 898, 3],
  [8, 34, 5],
  [1550, 1556, 1]
];

describe("countPalindromes", () => {
  describe("Return count of palindrome numbers from a specified range", () => {
    test.each(data)("countPalindromes(%i, %i) = %i", (num1, num2, result) => {
      let actual = countPalindromes(num1, num2);

      expect(actual).toEqual(result);
    });
  });
});
