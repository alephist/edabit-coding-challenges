const countVowels = require("../howManyVowels");

const data = [
  ["Celebration", 5],
  ["Palm", 1],
  ["Prediction", 4],
  ["Suite", 3],
  ["Quote", 3],
  ["Portrait", 3],
  ["Steam", 2],
  ["Tape", 2],
  ["Nightmare", 3],
  ["Convention", 4]
];

describe("countVowels", () => {
  describe("Return count of vowels", () => {
    test.each(data)("countVowels(%p) = %i", (str, result) => {
      let actual = countVowels(str);

      expect(actual).toEqual(result);
    });
  });
});
