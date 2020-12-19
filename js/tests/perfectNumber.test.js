const checkPerfect = require("../perfectNumber");

const data = [
  [6, true],
  [28, true],
  [496, true],
  [8128, true],
  [33550336, true],
  [12, false],
  [97, false],
  [481, false],
  [1001, false],
  [55555, false]
];

describe("checkPerfect", () => {
  describe("Return boolean if input is equal to sum of its factors", () => {
    test.each(data)("checkPerfect(%i) = %s", (num, result) => {
      let actual = checkPerfect(num);

      expect(actual).toEqual(result);
    });
  });
});
