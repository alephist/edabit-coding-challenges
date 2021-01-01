const numbersSum = require("../sumOfNumbersInArray");

const data = [
  [[1, 2, "13", "4", "645"], 3],
  [[true, false, "123", "75"], 0],
  [[1, 2, 3, 4, 5, true], 15],
  [["abcd", 1234, false, true, 564, "hii"], 1798],
  [["abcd", "abc45", "assssd", true], 0],
  [[], 0],
  [["cghyki", "cd", 12114, 786, true, "me", "bey"], 12900]
];

describe("numbersSum", () => {
  describe("Return sum of numbers in an array", () => {
    test.each(data)("numbersSum(%p) = %i", (arr, result) => {
      let actual = numbersSum(arr);

      expect(actual).toEqual(result);
    });
  });
});
