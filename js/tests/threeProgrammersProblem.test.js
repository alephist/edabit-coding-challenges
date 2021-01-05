const programmers = require("../threeProgrammersProblem");

const data = [
  [1, 5, 9, 8],
  [43, 33, 43, 10],
  [88, 14, 23, 74],
  [33, 72, 74, 41],
  [147, 33, 526, 493],
  [234, 345, 457, 223]
];

describe("programmers", () => {
  describe("Return difference of salaries between highest and lowest paid programmers", () => {
    test.each(data)("programmers(%i, %i, %i) = %i", (p1, p2, p3, result) => {
      let actual = programmers(p1, p2, p3);

      expect(actual).toEqual(result);
    });
  });
});
