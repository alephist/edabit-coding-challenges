const isRepdigit = require("../isNumberRepdigit");

const data = [
  [6, true],
  [66, true],
  [666, true],
  [6666, true],
  [1001, false],
  [-11, false]
];

describe("isRepdigit", () => {
  describe("Return boolean whether a number is a repdigit or not", () => {
    test.each(data)("isRepdigit(%i) = %s", (num, result) => {
      let actual = isRepdigit(num);

      expect(actual).toEqual(result);
    });
  });
});
