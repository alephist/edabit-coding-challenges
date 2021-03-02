const longestStreak = require("../longestDailyStreak");

const data = [
  [[true, true, false, true], 2],
  [[false, false, false], 0],
  [[true, true, true, false], 3],
  [[true, true, true, false, true, true], 3],
  [[true, false], 1],
  [[true, false, true], 1],
  [[true, false, true, true], 2]
];

describe("longestStreak", () => {
  describe("Return longest streak of consecutive logged in days", () => {
    test.each(data)("longestStreak(%p) = %i", (arr, result) => {
      let actual = longestStreak(arr);

      expect(actual).toEqual(result);
    });
  });
});
