const allTruthy = require("../checkIfAllValuesAreTrue");

const data = [
  [[true, true, true], true],
  [[false], false],
  [[true], true],
  [[false, true, true, true, 20], false],
  [[Infinity, 92347238467.219378, "Hello World"], true],
  [[Infinity, 92347238467.219378, "Hello World", 0], false],
  [["", "r", "ra", "rac", "race"], false],
  [[+"Hi!"], false],
  [[{}.twice], false],
  [[true, 32, Number, [][1]], false],
  [[Boolean, Number, Object, String], true]
];

describe("allTruthy", () => {
  describe("Return boolean if all values are truthy or not", () => {
    test.each(data)("allTruthy(%p) = %s", (args, result) => {
      let actual = allTruthy(args);

      expect(actual).toEqual(result);
    });
  });
});
