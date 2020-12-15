const addUp = require("../sumFromSingleNumber");

const data = [
  [4, 10],
  [13, 91],
  [600, 180300],
  [392, 77028],
  [53, 1431],
  [897, 402753],
  [23, 276],
  [1000, 500500],
  [738, 272691],
  [100, 5050],
  [925, 428275],
  [1, 1],
  [999, 499500],
  [175, 15400],
  [111, 6216]
];

describe("addUp", () => {
  describe("Return sum from 1 to number passed", () => {
    test.each(data)("addUp(%i) = %i", (num, result) => {
      let actual = addUp(num);

      expect(actual).toEqual(result);
    });
  });
});
