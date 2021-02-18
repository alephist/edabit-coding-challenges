const ageDifference = require("../ageDifferenceBetweenSpouses");

const data = [
  [[29, 1, 6, 8, 28], "1 year"],
  [[43, 86, 49, 86], "No age difference between spouses."],
  [[2, 4, 6, 32, 27], "5 years"],
  [[55, 28, 25, 56, 20], "1 year"],
  [[21, 56, 69, 18], "13 years"],
  [[25, 70, 25, 26, 58], "12 years"],
  [[10, 12, 44, 9, 44], "No age difference between spouses."]
];

describe("ageDifference", () => {
  describe("Return difference in years between spouses", () => {
    test.each(data)("ageDifference(%p) = %p", (ages, result) => {
      let actual = ageDifference(ages);

      expect(actual).toEqual(result);
    });
  });
});
