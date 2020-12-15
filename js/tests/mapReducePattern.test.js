const getMagnitude = require("../mapReducePattern");

const data = [
  [[3, 4], 5],
  [[0, 0, -10], 10],
  [[], 0],
  [[2, 3, 6, 1, 8], 10.677078252031311]
];

describe("getMagnitude", () => {
  describe("Return magnitude of vector", () => {
    test.each(data)("getMagnitude(%p) = %p", (vector, result) => {
      let actual = getMagnitude(vector);

      expect(actual).toEqual(result);
    });
  });
});
