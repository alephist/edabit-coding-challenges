const isHarshad = require("../harshadNumbers");

const data = [
  [0, false],
  [15, false],
  [990, true],
  [461, false],
  [297, false],
  [345, false],
  [529, false],
  [839, false],
  [281, false],
  [252, true],
  [123, false],
  [840, true],
  [789, false],
  [43, false],
  [907, false],
  [441, true],
  [729, false],
  [801, true],
  [923, false],
  [569, false],
  [828, true],
  [658, false],
  [838, false],
  [711, true],
  [216, true],
  [525, false],
  [768, false],
  [234, true],
  [353, false],
  [713, false]
];

describe("isHarshad", () => {
  describe("Return boolean if input number is Harshad Number", () => {
    test.each(data)("isHarshad(%i) = %s", (num, result) => {
      let actual = isHarshad(num);

      expect(actual).toEqual(result);
    });
  });
});
