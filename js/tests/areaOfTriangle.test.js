const getArea = require("../areaOfTriangle");

const data = [
  [3, 2, 3],
  [5, 4, 10],
  [10, 10, 50],
  [0, 60, 0],
  [12, 11, 66]
];

describe("getArea", () => {
  describe("Calculate area of triangle using given base and height values", () => {
    test.each(data)("(%i x %i) / 2 = %i", (base, height, area) => {
      let actual = getArea(base, height);

      expect(actual).toEqual(area);
    });
  });
});
